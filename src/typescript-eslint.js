import path from "path";
import { parseForESLint } from "@typescript-eslint/parser";
import { walk } from "estree-walker";
import { stringifyWith, transformerTs } from "./utils/json.js";
import { run } from "./utils/run.js";
import { makeUnitsFromTest } from "./utils/typescript-make-units-from-test.cjs";

const EXIT = {};

// Check if extension explicitly indicates CJS (no content-based detection should override)
function isExplicitCjsExtension(filename) {
  const ext = path.extname(filename).toLowerCase();
  return [".cts", ".cjs"].includes(ext);
}

// Check if extension explicitly indicates ESM (no content-based detection should override)
function isExplicitEsmExtension(filename) {
  const ext = path.extname(filename).toLowerCase();
  return [".mts", ".mjs"].includes(ext);
}

await run({
  submodule: "typescript",
  subDirectory: "tests/cases",
  filter(path) {
    return path.startsWith("tests/cases/compiler/") || path.startsWith("tests/cases/conformance/");
  },
  async process(path, code) {
    // Trim off UTF-8 BOM
    if (code.charCodeAt(0) === 0xfeff) code = code.slice(1);

    const { tests } = makeUnitsFromTest(path, code);
    if (tests.length === 0) return;

    let output = "";
    for (const test of tests) {
      try {
        const result = parseForESLint(test.content, {
          filePath: path,
          sourceType: test.sourceType.module ? "module" : "script",
          ecmaFeatures: {
            jsx: test.sourceType.jsx,
          },
        });
        // oxlint-disable-next-line no-unused-vars
        const { comments, tokens, ...program } = result.ast;

        // For explicit CJS extensions (.cts, .cjs), always use "commonjs" (matches TypeScript behavior)
        // For explicit ESM extensions (.mts, .mjs), always use "module" (matches TypeScript behavior)
        // For ambiguous extensions (.ts, .js, etc.), do content-based detection
        const filename = test.name || path;
        if (isExplicitCjsExtension(filename)) {
          program.sourceType = "commonjs";
        } else if (isExplicitEsmExtension(filename)) {
          program.sourceType = "module";
        } else if (program.sourceType === "script") {
          // TS-ESLint parser has no `unambiguous` option, so emulate it here
          // Only for ambiguous extensions
          for (const { type } of program.body) {
            if (
              [
                "ImportDeclaration",
                "ExportAllDeclaration",
                "ExportDefaultDeclaration",
                "ExportNamedDeclaration",
                "TSExportAssignment",
                "TSNamespaceExportDeclaration",
              ].includes(type)
            ) {
              program.sourceType = "module";
              break;
            }
          }

          if (program.sourceType === "script") {
            // Didn't find any module declarations. Need to walk whole AST to search for `import.meta`.
            try {
              walk(program, {
                enter(node) {
                  if (
                    node.type === "MetaProperty" &&
                    node.meta.type === "Identifier" &&
                    node.meta.name === "import" &&
                    node.property.type === "Identifier" &&
                    node.property.name === "meta"
                  ) {
                    program.sourceType = "module";
                    throw EXIT; // Stop walking
                  }
                },
              });
            } catch (err) {
              if (err !== EXIT) throw err;
            }
          }
        }

        const astJson = stringifyWith(program, transformerTs);
        output += "__ESTREE_TEST__:AST:\n```json\n" + astJson + "\n```\n";

        // Conform tokens.
        // * Remove `range` and `loc`
        // * Move `regex` field to after `value`
        // * Add `start` + `end`
        for (let i = 0; i < tokens.length; i++) {
          let token, range, regex, _loc;
          ({ regex, range, loc: _loc, ...token } = tokens[i]);

          if (regex !== undefined) token.regex = regex;
          token.start = range[0];
          token.end = range[1];

          tokens[i] = token;
        }

        const tokensJson = JSON.stringify(tokens, null, 2);
        output += "__ESTREE_TEST__:TOKENS:\n```json\n" + tokensJson + "\n```\n";
      } catch {
        return;
      }
    }

    return [
      {
        path: `${path}.md`,
        content: output,
      },
    ];
  },
});
