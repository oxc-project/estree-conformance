import { Parser as AcornParser, type Comment } from "acorn";
import { parse as meriyahParse } from "meriyah";
import YAML from "yaml";
import { transformerAcorn } from "./utils/json.ts";
import { parseEspreeTokens } from "./utils/tokens.ts";
import { run, type Output } from "./utils/run.ts";

type JsonObject = Record<string, unknown>;
type MutableProgram = JsonObject & { hashbang: JsonObject | null; type: "Program" };

interface Test262Preamble {
  flags?: string[];
  negative?: {
    phase?: string;
    type?: string;
  };
}

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

    let preamble: Test262Preamble;
    try {
      preamble = YAML.parse(yaml) as Test262Preamble;
    } catch {
      // console.log('Cannot parse YAML config');
      return;
    }

    const cannotParse =
      preamble.negative?.phase === "parse" && preamble.negative?.type === "SyntaxError";
    if (cannotParse) return;

    const isModule = preamble.flags?.includes("module") ?? false;

    let ast: MutableProgram;
    const comments: Comment[] = [];
    try {
      ast = AcornParser.parse(code, {
        ecmaVersion: "latest",
        sourceType: isModule ? "module" : "script",
        preserveParens: true,
        allowHashBang: true,
        allowReturnOutsideFunction: true,
        // Note: Do not specify `allowAwaitOutsideFunction` option.
        // It defaults to `true` for modules, `false` for scripts, which is what we want.
        onComment: comments,
      }) as unknown as MutableProgram;
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
          onComment: comments as never,
        }) as unknown as MutableProgram;
      } catch {
        return;
      }

      fixMeriyahValue(ast);
    }

    // Add `hashbang` property to AST if file starts with a hashbang.
    // This property is non-standard and exclusive to Oxc.
    if (comments.length > 0 && code.startsWith("#!") && comments[0].type === "Line") {
      ast.hashbang = { ...comments[0], type: "Hashbang" };
    } else {
      ast.hashbang = null;
    }

    // Parse tokens
    const tokensJson = parseEspreeTokens(code, isModule, false);

    // Output AST and tokens
    const astPath = `${path}on`; // Replace `.js` with `.json`
    const outputs: Output[] = [{ path: astPath, ast }];
    if (tokensJson) outputs.push({ path: `../test262-tokens/${astPath}`, content: tokensJson });
    return outputs;
  },
});

// Alter Meriyah's AST to fix mistakes and to match Acorn's
function fixMeriyahValue(value: unknown): void {
  if (value === null || typeof value !== "object") return;

  if (Array.isArray(value)) {
    for (const element of value) {
      fixMeriyahValue(element);
    }
    return;
  }

  if (!isJsonObject(value)) return;

  if (isAstNode(value)) fixMeriyahNode(value);

  for (const prop of Object.values(value)) {
    fixMeriyahValue(prop);
  }
}

function fixMeriyahNode(node: JsonObject & { type: string }): void {
  const { type } = node;
  if (type === "TemplateElement") {
    if (isJsonObject(node.value)) {
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

function isJsonObject(value: unknown): value is JsonObject {
  return typeof value === "object" && value !== null;
}

function isAstNode(value: JsonObject): value is JsonObject & { type: string } {
  return typeof value.type === "string";
}
