__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TryStatement",
      "block": {
        "type": "BlockStatement",
        "body": [],
        "start": 4,
        "end": 18
      },
      "handler": {
        "type": "CatchClause",
        "param": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 26,
          "end": 27
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "UnaryExpression",
                "operator": "void",
                "argument": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 54,
                      "end": 55
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toUpperCase",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 56,
                      "end": 67
                    },
                    "optional": false,
                    "computed": false,
                    "start": 54,
                    "end": 67
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 54,
                  "end": 69
                },
                "prefix": true,
                "start": 49,
                "end": 69
              },
              "directive": null,
              "start": 49,
              "end": 70
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "UnaryExpression",
                "operator": "void",
                "argument": {
                  "type": "UpdateExpression",
                  "operator": "++",
                  "prefix": false,
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 80,
                    "end": 81
                  },
                  "start": 80,
                  "end": 83
                },
                "prefix": true,
                "start": 75,
                "end": 83
              },
              "directive": null,
              "start": 75,
              "end": 84
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "UnaryExpression",
                "operator": "void",
                "argument": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 94,
                    "end": 95
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 94,
                  "end": 97
                },
                "prefix": true,
                "start": 89,
                "end": 97
              },
              "directive": null,
              "start": 89,
              "end": 98
            },
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
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 115,
                    "end": 116
                  },
                  "prefix": true,
                  "start": 108,
                  "end": 116
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 121,
                  "end": 129
                },
                "start": 108,
                "end": 129
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
                          "start": 216,
                          "end": 223
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 224,
                          "end": 227
                        },
                        "optional": false,
                        "computed": false,
                        "start": 216,
                        "end": 227
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "e",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 228,
                              "end": 229
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "toUpperCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 230,
                              "end": 241
                            },
                            "optional": false,
                            "computed": false,
                            "start": 228,
                            "end": 241
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 228,
                          "end": 243
                        }
                      ],
                      "optional": false,
                      "start": 216,
                      "end": 244
                    },
                    "directive": null,
                    "start": 216,
                    "end": 245
                  }
                ],
                "start": 131,
                "end": 251
              },
              "alternate": null,
              "start": 104,
              "end": 251
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 260,
                  "end": 261
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Error",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 273,
                  "end": 278
                },
                "start": 260,
                "end": 278
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "ChainExpression",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "e",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 290,
                              "end": 291
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "stack",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 292,
                              "end": 297
                            },
                            "optional": false,
                            "computed": false,
                            "start": 290,
                            "end": 297
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "toUpperCase",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 299,
                            "end": 310
                          },
                          "optional": true,
                          "computed": false,
                          "start": 290,
                          "end": 310
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 290,
                        "end": 312
                      },
                      "start": 290,
                      "end": 312
                    },
                    "directive": null,
                    "start": 290,
                    "end": 313
                  }
                ],
                "start": 280,
                "end": 319
              },
              "alternate": null,
              "start": 256,
              "end": 319
            },
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
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 335,
                    "end": 336
                  },
                  "prefix": true,
                  "start": 328,
                  "end": 336
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "\"number\"",
                  "start": 341,
                  "end": 349
                },
                "start": 328,
                "end": 349
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
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 361,
                          "end": 362
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toExponential",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 363,
                          "end": 376
                        },
                        "optional": false,
                        "computed": false,
                        "start": 361,
                        "end": 376
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 361,
                      "end": 378
                    },
                    "directive": null,
                    "start": 361,
                    "end": 379
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 388,
                        "end": 389
                      },
                      "start": 388,
                      "end": 391
                    },
                    "directive": null,
                    "start": 388,
                    "end": 392
                  }
                ],
                "start": 351,
                "end": 398
              },
              "alternate": null,
              "start": 324,
              "end": 398
            }
          ],
          "start": 29,
          "end": 400
        },
        "start": 19,
        "end": 400
      },
      "finalizer": null,
      "start": 0,
      "end": 400
    },
    {
      "type": "TryStatement",
      "block": {
        "type": "BlockStatement",
        "body": [],
        "start": 407,
        "end": 421
      },
      "handler": {
        "type": "CatchClause",
        "param": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 432,
              "end": 435
            },
            "start": 430,
            "end": 435
          },
          "start": 429,
          "end": 435
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "UnaryExpression",
                "operator": "void",
                "argument": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 472,
                      "end": 473
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toUpperCase",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 474,
                      "end": 485
                    },
                    "optional": false,
                    "computed": false,
                    "start": 472,
                    "end": 485
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 472,
                  "end": 487
                },
                "prefix": true,
                "start": 467,
                "end": 487
              },
              "directive": null,
              "start": 467,
              "end": 488
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "UnaryExpression",
                "operator": "void",
                "argument": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 498,
                      "end": 499
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toExponential",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 500,
                      "end": 513
                    },
                    "optional": false,
                    "computed": false,
                    "start": 498,
                    "end": 513
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 498,
                  "end": 515
                },
                "prefix": true,
                "start": 493,
                "end": 515
              },
              "directive": null,
              "start": 493,
              "end": 516
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "UnaryExpression",
                "operator": "void",
                "argument": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 526,
                    "end": 527
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 526,
                  "end": 529
                },
                "prefix": true,
                "start": 521,
                "end": 529
              },
              "directive": null,
              "start": 521,
              "end": 530
            }
          ],
          "start": 437,
          "end": 532
        },
        "start": 422,
        "end": 532
      },
      "finalizer": null,
      "start": 403,
      "end": 532
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 532
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
    "type": "Punctuator",
    "value": "}",
    "start": 17,
    "end": 18
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 19,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 26,
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
    "value": "{",
    "start": 29,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 49,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 56,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 75,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 81,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 83,
    "end": 84
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 89,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 104,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 107,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 108,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 117,
    "end": 120
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 121,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 216,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 224,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 230,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 250,
    "end": 251
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 256,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 260,
    "end": 261
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 262,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 273,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "stack",
    "start": 292,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 297,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 299,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 318,
    "end": 319
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 324,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 327,
    "end": 328
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 328,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 337,
    "end": 340
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 341,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "toExponential",
    "start": 363,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 389,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 399,
    "end": 400
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 403,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 420,
    "end": 421
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 422,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 432,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 437,
    "end": 438
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 467,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 474,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 487,
    "end": 488
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 493,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "toExponential",
    "start": 500,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 515,
    "end": 516
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 521,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 531,
    "end": 532
  }
]
```
