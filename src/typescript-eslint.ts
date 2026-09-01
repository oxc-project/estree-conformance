import { parseForESLint } from "@typescript-eslint/parser";
import { walk } from "estree-walker";
import { stringifyWith, transformerTs } from "./utils/json.ts";
import { run } from "./utils/run.ts";
import { makeUnitsFromTest } from "./utils/typescript-make-units-from-test.ts";

const EXIT = {};

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
        // Convert hashbang to normal line comment.
        // This is what ESLint does, before passing code to parser.
        let code = test.content;
        const hasHashbang = code.startsWith("#!");
        if (hasHashbang) code = `//${code.slice(2)}`;

        const result = parseForESLint(code, {
          filePath: path,
          sourceType: test.sourceType.module ? "module" : "script",
          ecmaFeatures: {
            jsx: test.sourceType.jsx,
          },
        });
        const { comments, tokens, ...parsedProgram } = result.ast;
        const program = parsedProgram as typeof parsedProgram & {
          hashbang?: Record<string, unknown> | null;
        };

        // TS-ESLint parser has no `unambiguous` option, so emulate it here
        if (program.sourceType === "script") {
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
              walk(program as unknown as Parameters<typeof walk>[0], {
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

        // Add `hashbang` property to AST if file starts with a hashbang.
        // This property is non-standard and exclusive to Oxc.
        program.hashbang = hasHashbang ? { ...comments[0], type: "Hashbang" } : null;

        const astJson = stringifyWith(program, transformerTs);
        output += "__ESTREE_TEST__:AST:\n```json\n" + astJson + "\n```\n";

        // Conform tokens.
        // * Remove `range` and `loc`.
        // * Add `start` + `end`.
        // * Move `regex` field to after `value`.
        // * Reverse order of `regex` object properties (`pattern` first).
        const conformedTokens = tokens.map((originalToken) => {
          const token = originalToken as unknown as Record<string, unknown> & {
            range: [number, number];
            type: string;
            value: string;
          };
          const { range, loc: _loc, regex, type, value, ...rest } = token;

          return typeof regex === "object" && regex !== null
            ? {
                type,
                value,
                regex: { pattern: undefined, flags: undefined, ...regex },
                start: range[0],
                end: range[1],
                ...rest,
              }
            : { type, value, start: range[0], end: range[1], ...rest };
        });

        const tokensJson = JSON.stringify(conformedTokens, null, 2);
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
