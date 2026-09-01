__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TryStatement",
      "block": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "xx",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 12,
                  "end": 19
                },
                "init": {
                  "type": "Literal",
                  "value": 6,
                  "raw": "6",
                  "start": 22,
                  "end": 23
                },
                "definite": false,
                "start": 12,
                "end": 23
              }
            ],
            "declare": false,
            "start": 8,
            "end": 24
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "xx",
                "optional": false,
                "typeAnnotation": null,
                "start": 32,
                "end": 34
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": 6,
                "raw": "6",
                "start": 39,
                "end": 40
              },
              "start": 32,
              "end": 40
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "$ERROR",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 49,
                      "end": 55
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Literal",
                          "value": "#6.1: var \\u0078x = 1; xx === 6. Actual: ",
                          "raw": "'#6.1: var \\\\u0078x = 1; xx === 6. Actual: '",
                          "start": 56,
                          "end": 100
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "xx",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 104,
                          "end": 106
                        },
                        "start": 56,
                        "end": 107
                      }
                    ],
                    "optional": false,
                    "start": 49,
                    "end": 108
                  },
                  "directive": null,
                  "start": 49,
                  "end": 109
                }
              ],
              "start": 42,
              "end": 113
            },
            "alternate": null,
            "start": 28,
            "end": 113
          }
        ],
        "start": 4,
        "end": 115
      },
      "handler": {
        "type": "CatchClause",
        "param": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 123,
          "end": 124
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "$ERROR",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 132,
                  "end": 138
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": "#6.2: var \\u0078x = 1; xx === 6. Actual: ",
                      "raw": "'#6.2: var \\\\u0078x = 1; xx === 6. Actual: '",
                      "start": 139,
                      "end": 183
                    },
                    "operator": "+",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "xx",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 187,
                      "end": 189
                    },
                    "start": 139,
                    "end": 190
                  }
                ],
                "optional": false,
                "start": 132,
                "end": 191
              },
              "directive": null,
              "start": 132,
              "end": 192
            }
          ],
          "start": 126,
          "end": 195
        },
        "start": 116,
        "end": 195
      },
      "finalizer": null,
      "start": 0,
      "end": 195
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 195
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "try",
    "start": 0,
    "end": 3
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4,
    "end": 5
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "\\u0078x",
    "start": 12,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 20,
    "end": 21
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 23,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 28,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 32,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 35,
    "end": 38
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "$ERROR",
    "start": 49,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 55,
    "end": 56
  },
  {
    "type": "String",
    "value": "'#6.1: var \\\\u0078x = 1; xx === 6. Actual: '",
    "start": 56,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 104,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 114,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 116,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "$ERROR",
    "start": 132,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 138,
    "end": 139
  },
  {
    "type": "String",
    "value": "'#6.2: var \\\\u0078x = 1; xx === 6. Actual: '",
    "start": 139,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 187,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 194,
    "end": 195
  }
]
```
