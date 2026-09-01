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
                    "type": "TSAnyKeyword",
                    "start": 24,
                    "end": 27
                  },
                  "start": 22,
                  "end": 27
                },
                "start": 21,
                "end": 27
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 30,
                "end": 36
              },
              "start": 28,
              "end": 36
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
                      "start": 61,
                      "end": 62
                    },
                    "prefix": true,
                    "start": 54,
                    "end": 62
                  },
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": "string",
                        "raw": "'string'",
                        "start": 79,
                        "end": 87
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 96,
                            "end": 97
                          },
                          "start": 89,
                          "end": 97
                        }
                      ],
                      "start": 74,
                      "end": 97
                    },
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": "number",
                        "raw": "'number'",
                        "start": 111,
                        "end": 119
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 128,
                            "end": 129
                          },
                          "start": 121,
                          "end": 129
                        }
                      ],
                      "start": 106,
                      "end": 129
                    },
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": "bigint",
                        "raw": "'bigint'",
                        "start": 143,
                        "end": 151
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 160,
                            "end": 161
                          },
                          "start": 153,
                          "end": 161
                        }
                      ],
                      "start": 138,
                      "end": 161
                    },
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": "boolean",
                        "raw": "'boolean'",
                        "start": 175,
                        "end": 184
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 193,
                            "end": 194
                          },
                          "start": 186,
                          "end": 194
                        }
                      ],
                      "start": 170,
                      "end": 194
                    },
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": "symbol",
                        "raw": "'symbol'",
                        "start": 208,
                        "end": 216
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 225,
                            "end": 226
                          },
                          "start": 218,
                          "end": 226
                        }
                      ],
                      "start": 203,
                      "end": 226
                    },
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": "undefined",
                        "raw": "'undefined'",
                        "start": 240,
                        "end": 251
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 260,
                            "end": 261
                          },
                          "start": 253,
                          "end": 261
                        }
                      ],
                      "start": 235,
                      "end": 261
                    },
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": "object",
                        "raw": "'object'",
                        "start": 275,
                        "end": 283
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 292,
                            "end": 293
                          },
                          "start": 285,
                          "end": 293
                        }
                      ],
                      "start": 270,
                      "end": 293
                    },
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": "function",
                        "raw": "'function'",
                        "start": 307,
                        "end": 317
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 326,
                            "end": 327
                          },
                          "start": 319,
                          "end": 327
                        }
                      ],
                      "start": 302,
                      "end": 327
                    }
                  ],
                  "start": 46,
                  "end": 333
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 338,
                    "end": 339
                  },
                  "directive": null,
                  "start": 338,
                  "end": 340
                }
              ],
              "start": 40,
              "end": 342
            },
            "id": null,
            "generator": false,
            "start": 20,
            "end": 342
          },
          "definite": false,
          "start": 6,
          "end": 342
        }
      ],
      "declare": false,
      "start": 0,
      "end": 342
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 342
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
    "value": "any",
    "start": 24,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 30,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 37,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 40,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 46,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 53,
    "end": 54
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 54,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 64,
    "end": 65
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 74,
    "end": 78
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 79,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 89,
    "end": 95
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 96,
    "end": 97
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 106,
    "end": 110
  },
  {
    "type": "String",
    "value": "'number'",
    "start": 111,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 119,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 121,
    "end": 127
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 128,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 138,
    "end": 142
  },
  {
    "type": "String",
    "value": "'bigint'",
    "start": 143,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 151,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 153,
    "end": 159
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 160,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 170,
    "end": 174
  },
  {
    "type": "String",
    "value": "'boolean'",
    "start": 175,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 184,
    "end": 185
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 186,
    "end": 192
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 193,
    "end": 194
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 203,
    "end": 207
  },
  {
    "type": "String",
    "value": "'symbol'",
    "start": 208,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 216,
    "end": 217
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 218,
    "end": 224
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 225,
    "end": 226
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 235,
    "end": 239
  },
  {
    "type": "String",
    "value": "'undefined'",
    "start": 240,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 251,
    "end": 252
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 253,
    "end": 259
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 260,
    "end": 261
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 270,
    "end": 274
  },
  {
    "type": "String",
    "value": "'object'",
    "start": 275,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 283,
    "end": 284
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 285,
    "end": 291
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 292,
    "end": 293
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 302,
    "end": 306
  },
  {
    "type": "String",
    "value": "'function'",
    "start": 307,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 317,
    "end": 318
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 319,
    "end": 325
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 341,
    "end": 342
  }
]
```
