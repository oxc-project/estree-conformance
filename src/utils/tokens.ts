import { parse as espreeParse, type EspreeToken } from "espree";

/**
 * Parse with Espree to get tokens, and serialize them to JSON.
 *
 * @param code - Source text
 * @param isModule - `true` if code is a module, `false` if it's a script
 * @param jsx - `true` if file is JSX, `false` otherwise
 * @returns Tokens as JSON string, or `null` if parsing failed
 */
export function parseEspreeTokens(code: string, isModule: boolean, jsx: boolean) {
  // Parse with Espree
  let tokens: EspreeToken[];
  try {
    const program = espreeParse(code, {
      ecmaVersion: "latest",
      sourceType: isModule ? "module" : "script",
      tokens: true,
      // Espree only reports `start` / `end` for Template tokens when `range` is enabled.
      range: true,
      ecmaFeatures: {
        jsx,
        globalReturn: true, // Allow top-level `return`
      },
    }) as ReturnType<typeof espreeParse> & { tokens: EspreeToken[] };
    tokens = program.tokens;
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
      const { type, value, ...rest } = token;
      tokens[i] = {
        type,
        value,
        regex: { pattern: regex.pattern, flags: regex.flags },
        ...rest,
      };
    } else {
      tokens[i] = token;
    }
  }

  return JSON.stringify(tokens, null, 2);
}
