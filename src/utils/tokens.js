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

  // Conform tokens.
  // * Remove `range` from output.
  // * Move `regex` to before `start` and `end`.
  // * Reverse order of `regex` object properties (`pattern` first).
  for (let i = 0; i < tokens.length; i++) {
    const { range: _range, regex, ...token } = tokens[i];
    if (typeof regex === "object" && regex !== null) {
      tokens[i] = {
        type: undefined,
        value: undefined,
        regex: { pattern: undefined, flags: undefined, ...regex },
        ...token,
      };
    } else {
      tokens[i] = token;
    }
  }

  return JSON.stringify(tokens, null, 2);
}
