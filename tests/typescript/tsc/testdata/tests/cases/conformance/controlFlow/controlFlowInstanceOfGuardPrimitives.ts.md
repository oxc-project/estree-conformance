__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "distinguish",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 20
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 28,
                  "end": 34
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 37,
                  "end": 43
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Date",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 46,
                    "end": 50
                  },
                  "typeArguments": null,
                  "start": 46,
                  "end": 50
                }
              ],
              "start": 28,
              "end": 50
            },
            "start": 26,
            "end": 50
          },
          "start": 21,
          "end": 50
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 62,
                "end": 67
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 79,
                "end": 85
              },
              "start": 62,
              "end": 85
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 97,
                        "end": 104
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 105,
                        "end": 108
                      },
                      "optional": false,
                      "computed": false,
                      "start": 97,
                      "end": 108
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Literal",
                          "value": "Aha!! It's a Date in ",
                          "raw": "\"Aha!! It's a Date in \"",
                          "start": 109,
                          "end": 132
                        },
                        "operator": "+",
                        "right": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "thing",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 135,
                              "end": 140
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getFullYear",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 141,
                              "end": 152
                            },
                            "optional": false,
                            "computed": false,
                            "start": 135,
                            "end": 152
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 135,
                          "end": 154
                        },
                        "start": 109,
                        "end": 154
                      }
                    ],
                    "optional": false,
                    "start": 97,
                    "end": 155
                  },
                  "directive": null,
                  "start": 97,
                  "end": 156
                }
              ],
              "start": 87,
              "end": 162
            },
            "alternate": {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "thing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 179,
                    "end": 184
                  },
                  "prefix": true,
                  "start": 172,
                  "end": 184
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "'string'",
                  "start": 189,
                  "end": 197
                },
                "start": 172,
                "end": 197
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 209,
                          "end": 216
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 217,
                          "end": 220
                        },
                        "optional": false,
                        "computed": false,
                        "start": 209,
                        "end": 220
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Literal",
                            "value": "Aha!! It's a string of length ",
                            "raw": "\"Aha!! It's a string of length \"",
                            "start": 221,
                            "end": 253
                          },
                          "operator": "+",
                          "right": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "thing",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 256,
                              "end": 261
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 262,
                              "end": 268
                            },
                            "optional": false,
                            "computed": false,
                            "start": 256,
                            "end": 268
                          },
                          "start": 221,
                          "end": 268
                        }
                      ],
                      "optional": false,
                      "start": 209,
                      "end": 269
                    },
                    "directive": null,
                    "start": 209,
                    "end": 270
                  }
                ],
                "start": 199,
                "end": 276
              },
              "alternate": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 292,
                          "end": 299
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 300,
                          "end": 303
                        },
                        "optional": false,
                        "computed": false,
                        "start": 292,
                        "end": 303
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Literal",
                            "value": "Aha!! It's the number ",
                            "raw": "\"Aha!! It's the number \"",
                            "start": 304,
                            "end": 328
                          },
                          "operator": "+",
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "thing",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 331,
                                "end": 336
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "toPrecision",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 337,
                                "end": 348
                              },
                              "optional": false,
                              "computed": false,
                              "start": 331,
                              "end": 348
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": 3,
                                "raw": "3",
                                "start": 349,
                                "end": 350
                              }
                            ],
                            "optional": false,
                            "start": 331,
                            "end": 351
                          },
                          "start": 304,
                          "end": 351
                        }
                      ],
                      "optional": false,
                      "start": 292,
                      "end": 352
                    },
                    "directive": null,
                    "start": 292,
                    "end": 353
                  }
                ],
                "start": 282,
                "end": 359
              },
              "start": 168,
              "end": 359
            },
            "start": 58,
            "end": 359
          }
        ],
        "start": 52,
        "end": 361
      },
      "expression": false,
      "start": 0,
      "end": 361
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "distinguish",
          "optional": false,
          "typeAnnotation": null,
          "start": 363,
          "end": 374
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Date",
              "optional": false,
              "typeAnnotation": null,
              "start": 379,
              "end": 383
            },
            "typeArguments": null,
            "arguments": [],
            "start": 375,
            "end": 385
          }
        ],
        "optional": false,
        "start": 363,
        "end": 386
      },
      "directive": null,
      "start": 363,
      "end": 387
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "distinguish",
          "optional": false,
          "typeAnnotation": null,
          "start": 388,
          "end": 399
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "beef",
            "raw": "\"beef\"",
            "start": 400,
            "end": 406
          }
        ],
        "optional": false,
        "start": 388,
        "end": 407
      },
      "directive": null,
      "start": 388,
      "end": 408
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "distinguish",
          "optional": false,
          "typeAnnotation": null,
          "start": 409,
          "end": 420
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 3.14159265,
            "raw": "3.14159265",
            "start": 421,
            "end": 431
          }
        ],
        "optional": false,
        "start": 409,
        "end": 432
      },
      "directive": null,
      "start": 409,
      "end": 433
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 433
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "distinguish",
    "start": 9,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 21,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 28,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 37,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 46,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 52,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 58,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 62,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 68,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 79,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 97,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 105,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 108,
    "end": 109
  },
  {
    "type": "String",
    "value": "\"Aha!! It's a Date in \"",
    "start": 109,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 135,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "getFullYear",
    "start": 141,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 161,
    "end": 162
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 163,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 168,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 171,
    "end": 172
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 172,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 179,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 185,
    "end": 188
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 189,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 209,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 217,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 220,
    "end": 221
  },
  {
    "type": "String",
    "value": "\"Aha!! It's a string of length \"",
    "start": 221,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 256,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 262,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 275,
    "end": 276
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 277,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 292,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 300,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 303,
    "end": 304
  },
  {
    "type": "String",
    "value": "\"Aha!! It's the number \"",
    "start": 304,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 331,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "toPrecision",
    "start": 337,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 348,
    "end": 349
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "distinguish",
    "start": 363,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 374,
    "end": 375
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 375,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 379,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "distinguish",
    "start": 388,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 399,
    "end": 400
  },
  {
    "type": "String",
    "value": "\"beef\"",
    "start": 400,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "distinguish",
    "start": 409,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 420,
    "end": 421
  },
  {
    "type": "Numeric",
    "value": "3.14159265",
    "start": 421,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 432,
    "end": 433
  }
]
```
