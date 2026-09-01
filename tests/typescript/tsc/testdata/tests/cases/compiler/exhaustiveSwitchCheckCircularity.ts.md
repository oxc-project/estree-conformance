__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isNever",
        "optional": false,
        "typeAnnotation": null,
        "start": 39,
        "end": 46
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNeverKeyword",
              "start": 50,
              "end": 55
            },
            "start": 48,
            "end": 55
          },
          "start": 47,
          "end": 55
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 58,
          "end": 65
        },
        "start": 56,
        "end": 65
      },
      "body": null,
      "expression": false,
      "start": 22,
      "end": 66
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 77,
        "end": 78
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "aaa",
                            "raw": "\"aaa\"",
                            "start": 96,
                            "end": 101
                          },
                          "start": 96,
                          "end": 101
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "bbb",
                            "raw": "\"bbb\"",
                            "start": 104,
                            "end": 109
                          },
                          "start": 104,
                          "end": 109
                        }
                      ],
                      "start": 96,
                      "end": 109
                    },
                    "start": 94,
                    "end": 109
                  },
                  "start": 91,
                  "end": 109
                },
                "init": {
                  "type": "Literal",
                  "value": "aaa",
                  "raw": "\"aaa\"",
                  "start": 112,
                  "end": 117
                },
                "definite": false,
                "start": 91,
                "end": 117
              }
            ],
            "declare": false,
            "start": 87,
            "end": 118
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 130,
              "end": 134
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "SwitchStatement",
                  "discriminant": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 154,
                    "end": 157
                  },
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": "aaa",
                        "raw": "\"aaa\"",
                        "start": 178,
                        "end": 183
                      },
                      "consequent": [],
                      "start": 173,
                      "end": 184
                    }
                  ],
                  "start": 146,
                  "end": 194
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 207,
                      "end": 210
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "aaa",
                      "raw": "\"aaa\"",
                      "start": 215,
                      "end": 220
                    },
                    "start": 207,
                    "end": 220
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
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 236,
                            "end": 239
                          },
                          "right": {
                            "type": "Literal",
                            "value": "bbb",
                            "raw": "\"bbb\"",
                            "start": 242,
                            "end": 247
                          },
                          "start": 236,
                          "end": 247
                        },
                        "directive": null,
                        "start": 236,
                        "end": 248
                      }
                    ],
                    "start": 222,
                    "end": 258
                  },
                  "alternate": {
                    "type": "IfStatement",
                    "test": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "isNever",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 276,
                        "end": 283
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 284,
                          "end": 287
                        }
                      ],
                      "optional": false,
                      "start": 276,
                      "end": 288
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "BreakStatement",
                          "label": null,
                          "start": 323,
                          "end": 329
                        }
                      ],
                      "start": 290,
                      "end": 339
                    },
                    "alternate": null,
                    "start": 272,
                    "end": 339
                  },
                  "start": 203,
                  "end": 339
                }
              ],
              "start": 136,
              "end": 345
            },
            "start": 123,
            "end": 345
          }
        ],
        "start": 81,
        "end": 347
      },
      "expression": false,
      "start": 68,
      "end": 347
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "functionB",
        "optional": false,
        "typeAnnotation": null,
        "start": 388,
        "end": 397
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 403,
              "end": 409
            },
            "start": 401,
            "end": 409
          },
          "start": 398,
          "end": 409
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 412,
          "end": 418
        },
        "start": 410,
        "end": 418
      },
      "body": null,
      "expression": false,
      "start": 371,
      "end": 419
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "functionC",
        "optional": false,
        "typeAnnotation": null,
        "start": 430,
        "end": 439
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 443,
          "end": 447
        },
        "start": 441,
        "end": 447
      },
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
                  "name": "unionVal",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "A",
                            "raw": "\"A\"",
                            "start": 468,
                            "end": 471
                          },
                          "start": 468,
                          "end": 471
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "B",
                            "raw": "\"B\"",
                            "start": 474,
                            "end": 477
                          },
                          "start": 474,
                          "end": 477
                        }
                      ],
                      "start": 468,
                      "end": 477
                    },
                    "start": 466,
                    "end": 477
                  },
                  "start": 458,
                  "end": 477
                },
                "init": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "\"A\"",
                  "start": 480,
                  "end": 483
                },
                "definite": false,
                "start": 458,
                "end": 483
              }
            ],
            "declare": false,
            "start": 454,
            "end": 484
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 496,
              "end": 500
            },
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
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 521,
                            "end": 527
                          },
                          "start": 519,
                          "end": 527
                        },
                        "start": 516,
                        "end": 527
                      },
                      "init": null,
                      "definite": false,
                      "start": 516,
                      "end": 527
                    }
                  ],
                  "declare": false,
                  "start": 512,
                  "end": 528
                },
                {
                  "type": "SwitchStatement",
                  "discriminant": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "unionVal",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 545,
                    "end": 553
                  },
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": "A",
                        "raw": "\"A\"",
                        "start": 574,
                        "end": 577
                      },
                      "consequent": [
                        {
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
                                  "name": "key",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 597,
                                  "end": 600
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": "AA",
                                  "raw": "\"AA\"",
                                  "start": 603,
                                  "end": 607
                                },
                                "start": 597,
                                "end": 607
                              },
                              "directive": null,
                              "start": 597,
                              "end": 608
                            },
                            {
                              "type": "BreakStatement",
                              "label": null,
                              "start": 625,
                              "end": 631
                            }
                          ],
                          "start": 579,
                          "end": 645
                        }
                      ],
                      "start": 569,
                      "end": 645
                    }
                  ],
                  "start": 537,
                  "end": 655
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "functionB",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 664,
                      "end": 673
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 674,
                        "end": 677
                      }
                    ],
                    "optional": false,
                    "start": 664,
                    "end": 678
                  },
                  "directive": null,
                  "start": 664,
                  "end": 679
                }
              ],
              "start": 502,
              "end": 685
            },
            "start": 489,
            "end": 685
          }
        ],
        "start": 448,
        "end": 687
      },
      "expression": false,
      "start": 421,
      "end": 687
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 687
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
    "value": "function",
    "start": 30,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "isNever",
    "start": 39,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 50,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 58,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 65,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 68,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 81,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 87,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 91,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 94,
    "end": 95
  },
  {
    "type": "String",
    "value": "\"aaa\"",
    "start": 96,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 102,
    "end": 103
  },
  {
    "type": "String",
    "value": "\"bbb\"",
    "start": 104,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 110,
    "end": 111
  },
  {
    "type": "String",
    "value": "\"aaa\"",
    "start": 112,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 117,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 123,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 129,
    "end": 130
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 130,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 136,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 146,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 154,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 159,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 173,
    "end": 177
  },
  {
    "type": "String",
    "value": "\"aaa\"",
    "start": 178,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 193,
    "end": 194
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 203,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 207,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 211,
    "end": 214
  },
  {
    "type": "String",
    "value": "\"aaa\"",
    "start": 215,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 236,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 240,
    "end": 241
  },
  {
    "type": "String",
    "value": "\"bbb\"",
    "start": 242,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 257,
    "end": 258
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 267,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 272,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "isNever",
    "start": 276,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 284,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 290,
    "end": 291
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 323,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 371,
    "end": 378
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 379,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "functionB",
    "start": 388,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 398,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 403,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 412,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 418,
    "end": 419
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 421,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "functionC",
    "start": 430,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 441,
    "end": 442
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 443,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 448,
    "end": 449
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 454,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "unionVal",
    "start": 458,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 466,
    "end": 467
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 468,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 472,
    "end": 473
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 474,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 478,
    "end": 479
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 480,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 483,
    "end": 484
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 489,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 495,
    "end": 496
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 496,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 502,
    "end": 503
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 512,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 516,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 521,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 527,
    "end": 528
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 537,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 544,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "unionVal",
    "start": 545,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 555,
    "end": 556
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 569,
    "end": 573
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 574,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 597,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 601,
    "end": 602
  },
  {
    "type": "String",
    "value": "\"AA\"",
    "start": 603,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 607,
    "end": 608
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 625,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "functionB",
    "start": 664,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 673,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 674,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 686,
    "end": 687
  }
]
```
