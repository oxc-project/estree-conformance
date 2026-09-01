__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "unreachable",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 17
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 24,
                    "end": 31
                  },
                  "start": 22,
                  "end": 31
                },
                "start": 21,
                "end": 31
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 34,
                "end": 40
              },
              "start": 32,
              "end": 40
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "SwitchStatement",
                  "discriminant": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 65,
                      "end": 66
                    },
                    "prefix": true,
                    "start": 58,
                    "end": 66
                  },
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": "string",
                        "raw": "'string'",
                        "start": 83,
                        "end": 91
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 100,
                            "end": 101
                          },
                          "start": 93,
                          "end": 101
                        }
                      ],
                      "start": 78,
                      "end": 101
                    },
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": "number",
                        "raw": "'number'",
                        "start": 115,
                        "end": 123
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 132,
                            "end": 133
                          },
                          "start": 125,
                          "end": 133
                        }
                      ],
                      "start": 110,
                      "end": 133
                    },
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": "bigint",
                        "raw": "'bigint'",
                        "start": 147,
                        "end": 155
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 164,
                            "end": 165
                          },
                          "start": 157,
                          "end": 165
                        }
                      ],
                      "start": 142,
                      "end": 165
                    },
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": "boolean",
                        "raw": "'boolean'",
                        "start": 179,
                        "end": 188
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 197,
                            "end": 198
                          },
                          "start": 190,
                          "end": 198
                        }
                      ],
                      "start": 174,
                      "end": 198
                    },
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": "symbol",
                        "raw": "'symbol'",
                        "start": 212,
                        "end": 220
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 229,
                            "end": 230
                          },
                          "start": 222,
                          "end": 230
                        }
                      ],
                      "start": 207,
                      "end": 230
                    },
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": "undefined",
                        "raw": "'undefined'",
                        "start": 244,
                        "end": 255
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 264,
                            "end": 265
                          },
                          "start": 257,
                          "end": 265
                        }
                      ],
                      "start": 239,
                      "end": 265
                    },
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": "object",
                        "raw": "'object'",
                        "start": 279,
                        "end": 287
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 296,
                            "end": 297
                          },
                          "start": 289,
                          "end": 297
                        }
                      ],
                      "start": 274,
                      "end": 297
                    },
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": "function",
                        "raw": "'function'",
                        "start": 311,
                        "end": 321
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 330,
                            "end": 331
                          },
                          "start": 323,
                          "end": 331
                        }
                      ],
                      "start": 306,
                      "end": 331
                    }
                  ],
                  "start": 50,
                  "end": 337
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 342,
                    "end": 343
                  },
                  "directive": null,
                  "start": 342,
                  "end": 344
                }
              ],
              "start": 44,
              "end": 346
            },
            "id": null,
            "generator": false,
            "start": 20,
            "end": 346
          },
          "definite": false,
          "start": 6,
          "end": 346
        }
      ],
      "declare": false,
      "start": 0,
      "end": 346
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 346
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "unreachable",
    "start": 6,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 24,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 34,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 41,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 44,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 50,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 57,
    "end": 58
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 58,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 68,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 78,
    "end": 82
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 83,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 91,
    "end": 92
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 93,
    "end": 99
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 100,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 110,
    "end": 114
  },
  {
    "type": "String",
    "value": "'number'",
    "start": 115,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 123,
    "end": 124
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 125,
    "end": 131
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 132,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 142,
    "end": 146
  },
  {
    "type": "String",
    "value": "'bigint'",
    "start": 147,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 155,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 157,
    "end": 163
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 164,
    "end": 165
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 174,
    "end": 178
  },
  {
    "type": "String",
    "value": "'boolean'",
    "start": 179,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 188,
    "end": 189
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 190,
    "end": 196
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 197,
    "end": 198
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 207,
    "end": 211
  },
  {
    "type": "String",
    "value": "'symbol'",
    "start": 212,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 220,
    "end": 221
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 222,
    "end": 228
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 229,
    "end": 230
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 239,
    "end": 243
  },
  {
    "type": "String",
    "value": "'undefined'",
    "start": 244,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 255,
    "end": 256
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 257,
    "end": 263
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 264,
    "end": 265
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 274,
    "end": 278
  },
  {
    "type": "String",
    "value": "'object'",
    "start": 279,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 287,
    "end": 288
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 289,
    "end": 295
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 296,
    "end": 297
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 306,
    "end": 310
  },
  {
    "type": "String",
    "value": "'function'",
    "start": 311,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 321,
    "end": 322
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 323,
    "end": 329
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 345,
    "end": 346
  }
]
```
