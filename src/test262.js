import { Parser as AcornParser } from "acorn";
import { parse as meriyahParse } from "meriyah";
import YAML from "yaml";
import { transformerAcorn } from "./utils/json.js";
import { parseEspreeTokens } from "./utils/tokens.js";
import { run } from "./utils/run.js";

const DISALLOW = [
  // Meriyah fails to produce syntax error for this case
  "test/annexB/language/expressions/assignmenttargettype/cover-callexpression-and-asyncarrowhead.js",
];

await run({
  submodule: "test262",
  subDirectory: "test",
  filter(path) {
    return (
      !DISALLOW.includes(path) &&
      path.endsWith(".js") &&
      !path.endsWith("_FIXTURE.js") &&
      !path.includes("/staging/")
    );
  },
  transform: transformerAcorn,
  async process(path, code) {
    const start = code.indexOf("/*---");
    const end = code.indexOf("---*/");
    const yaml = code.substring(start + 5, end);

    let preamble;
    try {
      preamble = YAML.parse(yaml);
    } catch {
      // console.log('Cannot parse YAML config');
      return;
    }

    const cannotParse =
      preamble.negative?.phase === "parse" && preamble.negative?.type === "SyntaxError";
    if (cannotParse) return;

    const isModule = preamble.flags?.includes("module");

    let ast;
    try {
      ast = AcornParser.parse(code, {
        ecmaVersion: "latest",
        sourceType: isModule ? "module" : "script",
        preserveParens: true,
        allowHashBang: true,
        allowReturnOutsideFunction: true,
        // Note: Do not specify `allowAwaitOutsideFunction` option.
        // It defaults to `true` for modules, `false` for scripts, which is what we want.
      });
    } catch {
      try {
        ast = meriyahParse(code, {
          module: isModule,
          impliedStrict: isModule,
          ranges: true,
          raw: true,
          preserveParens: true,
          globalReturn: true,
          webcompat: true, // I think this enables support for Annex B
          next: true, // Enable parsing decorators and import attributes
        });
      } catch {
        return;
      }

      fixMeriyahValue(ast);
    }

    // Parse tokens
    const tokensJson = parseEspreeTokens(code, isModule, false);

    // Output AST and tokens
    const astPath = `${path}on`; // Replace `.js` with `.json`
    const outputs = [{ path: astPath, ast }];
    if (tokensJson) outputs.push({ path: `../test262-tokens/${astPath}`, content: tokensJson });
    return outputs;
  },
});

// Alter Meriyah's AST to fix mistakes and to match Acorn's
function fixMeriyahValue(value) {
  if (value === null || typeof value !== "object") return;

  if (Array.isArray(value)) {
    for (const element of value) {
      fixMeriyahValue(element);
    }
    return;
  }

  if (Object.hasOwn(value, "type")) fixMeriyahNode(value);

  for (const prop of Object.values(value)) {
    fixMeriyahValue(prop);
  }
}

function fixMeriyahNode(node) {
  const { type } = node;
  if (type === "TemplateElement") {
    if (Object.hasOwn(node, "value") && node.value && typeof node.value === "object") {
      // `cooked` and `raw` in opposite order from Acorn (cosmetic difference only)
      if (Object.hasOwn(node.value, "raw")) node.value = { raw: undefined, ...node.value };
    }
  } else if (type === "FunctionDeclaration" || type === "FunctionExpression") {
    // `expression` field is not in ESTree spec. Not sure why Acorn includes it.
    if (!Object.hasOwn(node, "expression")) node.expression = false;
  } else if (type === "ArrowFunctionExpression") {
    // `id` field is not in ESTree spec. Not sure why Acorn includes it.
    if (!Object.hasOwn(node, "id")) node.id = null;
  }
}
