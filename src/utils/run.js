import fs from "node:fs/promises";
import { dirname, join as pathJoin, sep as pathSep } from "node:path";
import { stringifyWith } from "./json.js";

const ROOT_DIR_PATH = pathJoin(import.meta.dirname, "../../");
const SUBMODULES_DIR_PATH = pathJoin(ROOT_DIR_PATH, "submodules");
const OUTPUTS_DIR_PATH = pathJoin(ROOT_DIR_PATH, "tests");

const { stdout } = process;

const conformPath = pathSep === "\\" ? (path) => path.replace(/\\/g, "/") : (path) => path;

// Generate outputs
export async function run({ submodule, subDirectory, filter, transform, process }) {
  console.log("> Generating:", submodule);

  const fixturesRootPath = pathJoin(SUBMODULES_DIR_PATH, submodule);
  const outputsDirPath = pathJoin(OUTPUTS_DIR_PATH, submodule);

  // Find all files in fixtures dir
  const fixturePaths = await getFixturePaths(fixturesRootPath, subDirectory, filter);

  // Find all existing files in outputs dir.
  // We use this to identify outdated output files and delete them at the end.
  const oldOutputPaths = new Set(await getOutputPaths(outputsDirPath));

  // Run all fixtures
  let parseFailCount = 0;
  for (const [index, fixturePath] of fixturePaths.entries()) {
    stdout.write(`\r${index + 1} / ${fixturePaths.length}`);

    const code = await fs.readFile(pathJoin(fixturesRootPath, fixturePath), "utf8");
    const outputs = await process(fixturePath, code);
    if (!outputs) {
      parseFailCount++;
      continue;
    }

    // Write outputs
    for (const output of outputs) {
      const outputPath = pathJoin(outputsDirPath, output.path);
      await fs.mkdir(dirname(outputPath), { recursive: true });

      let { content } = output;
      if (content == null) content = stringifyWith(output.ast, transform);

      // Write output if it's different from existing file.
      // We avoid re-writing outputs which are unchanged in order to minimize touching files.
      // If we rewrite all files, it makes Git really slow, as it has to re-index.
      let oldContent = null;
      try {
        oldContent = await fs.readFile(outputPath, "utf8");
      } catch (err) {
        if (err?.code !== "ENOENT") throw err;
      }
      if (content !== oldContent) await fs.writeFile(outputPath, content);

      // Delete from `oldOutputPaths` so it's not deleted at the end
      oldOutputPaths.delete(output.path);
    }
  }

  // Delete old outputs
  for (let path of oldOutputPaths) {
    path = pathJoin(outputsDirPath, path);
    await fs.rm(path);

    // If directory is now empty, delete it
    while (true) {
      path = dirname(path);
      try {
        await fs.rmdir(path);
      } catch (err) {
        if (err?.code !== "ENOTEMPTY") throw err;
        break;
      }
    }
  }

  console.log(`\nFailed to parse: ${parseFailCount}`);
}

/**
 * Get paths of fixtures in a submodule to process.
 *
 * Returns an array of paths relative to the submodule directory (`fixturesRootPath`).
 * Paths use forward slashes, even on Windows.
 *
 * @param {string} fixturesRootPath - Full path to root of the submodule
 * @param {string} subDirectory - Relative path to the directory in submodule containing fixtures
 * @param {function} [filter] - Function to filter fixtures (optional).
 *   Is passed the path of the fixture relative to fixtures subdirectory.
 *   Should return `true` if the fixture should be processed, or `false` otherwise.
 * @returns {Promise<Array<string>>} List of fixture paths
 */
async function getFixturePaths(fixturesRootPath, subDirectory, filter) {
  const files = await fs.readdir(pathJoin(fixturesRootPath, subDirectory), {
    recursive: true,
    withFileTypes: true,
  });

  const fixturePaths = [],
    trimLen = fixturesRootPath.length + 1;
  for (const file of files) {
    if (!file.isFile()) continue;

    const path = conformPath(pathJoin(file.parentPath.slice(trimLen), file.name));
    if (!filter || filter(path)) fixturePaths.push(path);
  }

  return fixturePaths;
}

/**
 * Get paths of output files in the output directory for a submodule.
 *
 * Returns an array of paths relative to the output directory (`outputsDirPath`).
 * Paths use forward slashes, even on Windows.
 *
 * @param {string} outputsDirPath - Full path to the root of output directory for submodule
 * @returns {Promise<Array<string>>} List of output paths relative to the output directory
 */
async function getOutputPaths(outputsDirPath) {
  const files = await fs.readdir(outputsDirPath, { recursive: true, withFileTypes: true });

  const outputPaths = [],
    trimLen = outputsDirPath.length + 1;
  for (const file of files) {
    if (!file.isFile()) continue;

    const path = conformPath(pathJoin(file.parentPath.slice(trimLen), file.name));
    outputPaths.push(path);
  }

  return outputPaths;
}
