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
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 34
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
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSBooleanKeyword",
                          "start": 50,
                          "end": 57
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 60,
                          "end": 66
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 69,
                          "end": 75
                        }
                      ],
                      "start": 50,
                      "end": 75
                    },
                    "start": 48,
                    "end": 75
                  },
                  "start": 47,
                  "end": 75
                },
                "init": null,
                "definite": false,
                "start": 47,
                "end": 75
              }
            ],
            "declare": false,
            "start": 43,
            "end": 76
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 92,
                  "end": 93
                },
                "prefix": true,
                "start": 85,
                "end": 93
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": "boolean",
                "raw": "'boolean'",
                "start": 98,
                "end": 107
              },
              "start": 85,
              "end": 107
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ForStatement",
                  "init": {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 174,
                          "end": 175
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 178,
                          "end": 179
                        },
                        "definite": false,
                        "start": 174,
                        "end": 179
                      }
                    ],
                    "declare": false,
                    "start": 170,
                    "end": 179
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 181,
                      "end": 182
                    },
                    "operator": "<",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 185,
                      "end": 186
                    },
                    "start": 181,
                    "end": 186
                  },
                  "update": {
                    "type": "UpdateExpression",
                    "operator": "++",
                    "prefix": false,
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 188,
                      "end": 189
                    },
                    "start": 188,
                    "end": 191
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ForStatement",
                        "init": {
                          "type": "VariableDeclaration",
                          "kind": "var",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "j",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 216,
                                "end": 217
                              },
                              "init": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 220,
                                "end": 221
                              },
                              "definite": false,
                              "start": 216,
                              "end": 221
                            }
                          ],
                          "declare": false,
                          "start": 212,
                          "end": 221
                        },
                        "test": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "j",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 223,
                            "end": 224
                          },
                          "operator": "<",
                          "right": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 227,
                            "end": 228
                          },
                          "start": 223,
                          "end": 228
                        },
                        "update": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "prefix": false,
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "j",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 230,
                            "end": 231
                          },
                          "start": 230,
                          "end": 233
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 235,
                          "end": 237
                        },
                        "start": 207,
                        "end": 237
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
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 261,
                              "end": 262
                            },
                            "prefix": true,
                            "start": 254,
                            "end": 262
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "'string'",
                            "start": 267,
                            "end": 275
                          },
                          "start": 254,
                          "end": 275
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ForStatement",
                              "init": {
                                "type": "VariableDeclaration",
                                "kind": "var",
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "id": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "j",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 349,
                                      "end": 350
                                    },
                                    "init": {
                                      "type": "Literal",
                                      "value": 0,
                                      "raw": "0",
                                      "start": 353,
                                      "end": 354
                                    },
                                    "definite": false,
                                    "start": 349,
                                    "end": 354
                                  }
                                ],
                                "declare": false,
                                "start": 345,
                                "end": 354
                              },
                              "test": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "j",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 356,
                                  "end": 357
                                },
                                "operator": "<",
                                "right": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1",
                                  "start": 360,
                                  "end": 361
                                },
                                "start": 356,
                                "end": 361
                              },
                              "update": {
                                "type": "UpdateExpression",
                                "operator": "++",
                                "prefix": false,
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "j",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 363,
                                  "end": 364
                                },
                                "start": 363,
                                "end": 366
                              },
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "a",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 390,
                                        "end": 391
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "length",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 392,
                                        "end": 398
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 390,
                                      "end": 398
                                    },
                                    "directive": null,
                                    "start": 390,
                                    "end": 399
                                  }
                                ],
                                "start": 368,
                                "end": 442
                              },
                              "start": 340,
                              "end": 442
                            }
                          ],
                          "start": 277,
                          "end": 456
                        },
                        "alternate": null,
                        "start": 250,
                        "end": 456
                      }
                    ],
                    "start": 193,
                    "end": 466
                  },
                  "start": 165,
                  "end": 466
                }
              ],
              "start": 109,
              "end": 472
            },
            "alternate": null,
            "start": 81,
            "end": 472
          }
        ],
        "start": 37,
        "end": 474
      },
      "expression": false,
      "start": 23,
      "end": 474
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 485,
        "end": 487
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
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 503,
                          "end": 509
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 512,
                          "end": 518
                        }
                      ],
                      "start": 503,
                      "end": 518
                    },
                    "start": 501,
                    "end": 518
                  },
                  "start": 500,
                  "end": 518
                },
                "init": null,
                "definite": false,
                "start": 500,
                "end": 518
              }
            ],
            "declare": false,
            "start": 496,
            "end": 519
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 535,
                  "end": 536
                },
                "prefix": true,
                "start": 528,
                "end": 536
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "'string'",
                "start": 541,
                "end": 549
              },
              "start": 528,
              "end": 549
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "WhileStatement",
                  "test": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 568,
                    "end": 569
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "WhileStatement",
                        "test": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 592,
                          "end": 593
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 595,
                          "end": 597
                        },
                        "start": 585,
                        "end": 597
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
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 621,
                              "end": 622
                            },
                            "prefix": true,
                            "start": 614,
                            "end": 622
                          },
                          "operator": "===",
                          "right": {
                            "type": "Literal",
                            "value": "string",
                            "raw": "'string'",
                            "start": 627,
                            "end": 635
                          },
                          "start": 614,
                          "end": 635
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "WhileStatement",
                              "test": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 662,
                                "end": 663
                              },
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "a",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 687,
                                        "end": 688
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "length",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 689,
                                        "end": 695
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 687,
                                      "end": 695
                                    },
                                    "directive": null,
                                    "start": 687,
                                    "end": 696
                                  }
                                ],
                                "start": 665,
                                "end": 739
                              },
                              "start": 655,
                              "end": 739
                            }
                          ],
                          "start": 637,
                          "end": 753
                        },
                        "alternate": null,
                        "start": 610,
                        "end": 753
                      }
                    ],
                    "start": 571,
                    "end": 763
                  },
                  "start": 561,
                  "end": 763
                }
              ],
              "start": 551,
              "end": 769
            },
            "alternate": null,
            "start": 524,
            "end": 769
          }
        ],
        "start": 490,
        "end": 771
      },
      "expression": false,
      "start": 476,
      "end": 771
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 23,
  "end": 771
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 23,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 32,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 37,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 43,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "boolean",
    "start": 50,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 60,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 69,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 75,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 81,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 84,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 85,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 94,
    "end": 97
  },
  {
    "type": "String",
    "value": "'boolean'",
    "start": 98,
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
    "value": "{",
    "start": 109,
    "end": 110
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 165,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 169,
    "end": 170
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 170,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 176,
    "end": 177
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 183,
    "end": 184
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 189,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 193,
    "end": 194
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 207,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 211,
    "end": 212
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 212,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 218,
    "end": 219
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 225,
    "end": 226
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 231,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 236,
    "end": 237
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 250,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 253,
    "end": 254
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 254,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 263,
    "end": 266
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 267,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 277,
    "end": 278
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 340,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 344,
    "end": 345
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 345,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 351,
    "end": 352
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 358,
    "end": 359
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 364,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 392,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 455,
    "end": 456
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
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 473,
    "end": 474
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 476,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 485,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 490,
    "end": 491
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 496,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 503,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 512,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 518,
    "end": 519
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 524,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 527,
    "end": 528
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 528,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 537,
    "end": 540
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 541,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 551,
    "end": 552
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 561,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 567,
    "end": 568
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 571,
    "end": 572
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 585,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 591,
    "end": 592
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 596,
    "end": 597
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 610,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 613,
    "end": 614
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 614,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 623,
    "end": 626
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 627,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 637,
    "end": 638
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 655,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 661,
    "end": 662
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 665,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 688,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 689,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 770,
    "end": 771
  }
]
```
