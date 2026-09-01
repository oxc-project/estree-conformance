import * as acorn from "acorn";
import fs from "node:fs/promises";
import { join as pathJoin } from "node:path";
import vm from "node:vm";
import acornJsx from "../submodules/acorn-jsx/index.js";
import { transformerAcorn } from "./utils/json.ts";
import { parseEspreeTokens } from "./utils/tokens.ts";
import { run } from "./utils/run.ts";

const Parser = acorn.Parser.extend(acornJsx());

const FIXTURES_DIR_PATH = pathJoin(import.meta.dirname, "../submodules/acorn-jsx/fixtures/pass");
const TEST_FILE_PATH = pathJoin(import.meta.dirname, "../submodules/acorn-jsx/test/tests-jsx.js");

await fs.rm(FIXTURES_DIR_PATH, { recursive: true, force: true });
await fs.mkdir(FIXTURES_DIR_PATH, { recursive: true });

const fixtures = await collectFixtures();
for (const [index, code] of fixtures.entries()) {
  const filename = `${String(index).padStart(3, "0")}.jsx`;
  await fs.writeFile(pathJoin(FIXTURES_DIR_PATH, filename), code);
}

async function collectFixtures(): Promise<string[]> {
  // evaluate tester and collect tests
  const testCode = await fs.readFile(TEST_FILE_PATH, "utf8");
  const context: { __tests: string[] } = { __tests: [] };
  vm.runInNewContext(
    `
var test = code => __tests.push(code);
var testFail = test;
var jsxTokens = {};
var acornTokens = {};
${testCode}
`,
    context,
  );
  return context.__tests;
}

await run({
  submodule: "acorn-jsx",
  subDirectory: "fixtures/pass",
  transform: transformerAcorn,
  async process(path, code) {
    // Parse AST
    let ast: acorn.Program & { hashbang: null };
    try {
      ast = Parser.parse(code, {
        ecmaVersion: "latest",
        sourceType: "module",
        preserveParens: true,
        allowHashBang: true,
        allowReturnOutsideFunction: true,
      }) as acorn.Program & { hashbang: null };
      ast.hashbang = null;
    } catch {
      return;
    }

    // Parse tokens
    const tokensJson = parseEspreeTokens(code, true, true);

    // Output AST and tokens
    path = path.slice("fixtures/".length);
    const astPath = `${path.slice(0, -4)}.json`; // Replace `.jsx` with `.json`

    const outputs = [
      { path, content: code },
      { path: astPath, ast },
    ];
    if (tokensJson) {
      const tokensPath = `${path.slice(0, -4)}.tokens.json`; // Replace `.jsx` with `.tokens.json`
      outputs.push({ path: tokensPath, content: tokensJson });
    }
    return outputs;
  },
});
