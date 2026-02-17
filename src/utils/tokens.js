import { parse as espreeParse } from "espree";

/**
 * Parse with Espree to get tokens, and serialize them to JSON.
 *
 * @param {string} code - Source text
 * @param {boolean} isModule - `true` if code is a module, `false` if it's a script
 * @param {boolean} jsx - `true` if file is JSX, `false` otherwise
 * @returns Tokens as JSON string, or `null` if parsing failed
 */
export function parseEspreeTokens(code, isModule, jsx) {
  // Parse with Espree
  let tokens;
  try {
    tokens = espreeParse(code, {
      ecmaVersion: "latest",
      sourceType: isModule ? "module" : "script",
      tokens: true,
      // Espree only reports `start` / `end` for Template tokens when `range` is enabled.
      range: true,
      ecmaFeatures: {
        jsx,
        globalReturn: true, // Allow top-level `return`
      },
    }).tokens;
  } catch {
    return null;
  }

  // Remove `range` from output and keep `regex` before `start` and `end`
  for (let i = 0; i < tokens.length; i++) {
    const { range: _range, ...token } = tokens[i];
    if (token.regex) {
      tokens[i] = { type: undefined, value: undefined, regex: undefined, ...token };
    } else {
      tokens[i] = token;
    }
  }

  return JSON.stringify(tokens, null, 2);
}
