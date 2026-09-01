__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "cond",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 40,
                "end": 47
              },
              "start": 38,
              "end": 47
            },
            "start": 34,
            "end": 47
          },
          "init": null,
          "definite": false,
          "start": 34,
          "end": 47
        }
      ],
      "declare": true,
      "start": 22,
      "end": 48
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 59,
        "end": 63
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 79,
                          "end": 85
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 88,
                          "end": 94
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 97,
                          "end": 104
                        }
                      ],
                      "start": 79,
                      "end": 104
                    },
                    "start": 77,
                    "end": 104
                  },
                  "start": 76,
                  "end": 104
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 107,
                  "end": 108
                },
                "definite": false,
                "start": 76,
                "end": 108
              }
            ],
            "declare": false,
            "start": 72,
            "end": 109
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 125
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "typeof",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 148,
                        "end": 149
                      },
                      "prefix": true,
                      "start": 141,
                      "end": 149
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "string",
                      "raw": "\"string\"",
                      "start": 154,
                      "end": 162
                    },
                    "start": 141,
                    "end": 162
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 178,
                            "end": 179
                          },
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 182,
                                "end": 183
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "slice",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 184,
                                "end": 189
                              },
                              "optional": false,
                              "computed": false,
                              "start": 182,
                              "end": 189
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 182,
                            "end": 191
                          },
                          "start": 178,
                          "end": 191
                        },
                        "directive": null,
                        "start": 178,
                        "end": 192
                      }
                    ],
                    "start": 164,
                    "end": 202
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 230,
                            "end": 231
                          },
                          "right": {
                            "type": "Literal",
                            "value": "abc",
                            "raw": "\"abc\"",
                            "start": 234,
                            "end": 239
                          },
                          "start": 230,
                          "end": 239
                        },
                        "directive": null,
                        "start": 230,
                        "end": 240
                      }
                    ],
                    "start": 216,
                    "end": 250
                  },
                  "start": 137,
                  "end": 250
                }
              ],
              "start": 127,
              "end": 256
            },
            "start": 114,
            "end": 256
          }
        ],
        "start": 66,
        "end": 258
      },
      "expression": false,
      "start": 50,
      "end": 258
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 269,
        "end": 273
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 289,
                          "end": 295
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 298,
                          "end": 304
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 307,
                          "end": 314
                        }
                      ],
                      "start": 289,
                      "end": 314
                    },
                    "start": 287,
                    "end": 314
                  },
                  "start": 286,
                  "end": 314
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 317,
                  "end": 318
                },
                "definite": false,
                "start": 286,
                "end": 318
              }
            ],
            "declare": false,
            "start": 282,
            "end": 319
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 331,
              "end": 335
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "typeof",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 358,
                        "end": 359
                      },
                      "prefix": true,
                      "start": 351,
                      "end": 359
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "number",
                      "raw": "\"number\"",
                      "start": 364,
                      "end": 372
                    },
                    "start": 351,
                    "end": 372
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 388,
                            "end": 389
                          },
                          "right": {
                            "type": "Literal",
                            "value": "abc",
                            "raw": "\"abc\"",
                            "start": 392,
                            "end": 397
                          },
                          "start": 388,
                          "end": 397
                        },
                        "directive": null,
                        "start": 388,
                        "end": 398
                      }
                    ],
                    "start": 374,
                    "end": 408
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 436,
                            "end": 437
                          },
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 440,
                                "end": 441
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "slice",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 442,
                                "end": 447
                              },
                              "optional": false,
                              "computed": false,
                              "start": 440,
                              "end": 447
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 440,
                            "end": 449
                          },
                          "start": 436,
                          "end": 449
                        },
                        "directive": null,
                        "start": 436,
                        "end": 450
                      }
                    ],
                    "start": 422,
                    "end": 460
                  },
                  "start": 347,
                  "end": 460
                }
              ],
              "start": 337,
              "end": 466
            },
            "start": 324,
            "end": 466
          }
        ],
        "start": 276,
        "end": 468
      },
      "expression": false,
      "start": 260,
      "end": 468
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 468
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 22,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 30,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 34,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 40,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 50,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 59,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 66,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 72,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 79,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 88,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 97,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 105,
    "end": 106
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "type": "Keyword",
    "value": "while",
    "start": 114,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 121,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 127,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 137,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 141,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 150,
    "end": 153
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 154,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "slice",
    "start": 184,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "start": 201,
    "end": 202
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 211,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 232,
    "end": 233
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 234,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 257,
    "end": 258
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 260,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 269,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 276,
    "end": 277
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 282,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 289,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 298,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 307,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 315,
    "end": 316
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 318,
    "end": 319
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 324,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 331,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 337,
    "end": 338
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 347,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 350,
    "end": 351
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 351,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 360,
    "end": 363
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 364,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 390,
    "end": 391
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 392,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 407,
    "end": 408
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 417,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "slice",
    "start": 442,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 467,
    "end": 468
  }
]
```
