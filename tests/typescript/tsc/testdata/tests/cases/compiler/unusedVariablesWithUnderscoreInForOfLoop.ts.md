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
        "name": "t1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
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
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 32,
                        "end": 34
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 36,
                        "end": 37
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 31,
                    "end": 38
                  },
                  "init": null,
                  "definite": false,
                  "start": 31,
                  "end": 38
                }
              ],
              "declare": false,
              "start": 25,
              "end": 38
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "key",
                      "raw": "'key'",
                      "start": 44,
                      "end": 49
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 51,
                      "end": 52
                    }
                  ],
                  "start": 43,
                  "end": 53
                }
              ],
              "start": 42,
              "end": 54
            },
            "body": {
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
                        "start": 66,
                        "end": 73
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 74,
                        "end": 77
                      },
                      "optional": false,
                      "computed": false,
                      "start": 66,
                      "end": 77
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 78,
                        "end": 79
                      }
                    ],
                    "optional": false,
                    "start": 66,
                    "end": 80
                  },
                  "directive": null,
                  "start": 66,
                  "end": 81
                }
              ],
              "start": 56,
              "end": 87
            },
            "start": 20,
            "end": 87
          },
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 105,
                        "end": 106
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 108,
                        "end": 110
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 104,
                    "end": 111
                  },
                  "init": null,
                  "definite": false,
                  "start": 104,
                  "end": 111
                }
              ],
              "declare": false,
              "start": 98,
              "end": 111
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "key",
                      "raw": "'key'",
                      "start": 117,
                      "end": 122
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 124,
                      "end": 125
                    }
                  ],
                  "start": 116,
                  "end": 126
                }
              ],
              "start": 115,
              "end": 127
            },
            "body": {
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
                        "start": 139,
                        "end": 146
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 147,
                        "end": 150
                      },
                      "optional": false,
                      "computed": false,
                      "start": 139,
                      "end": 150
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 151,
                        "end": 152
                      }
                    ],
                    "optional": false,
                    "start": 139,
                    "end": 153
                  },
                  "directive": null,
                  "start": 139,
                  "end": 154
                }
              ],
              "start": 129,
              "end": 160
            },
            "start": 93,
            "end": 160
          },
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 178,
                        "end": 180
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 182,
                        "end": 184
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 177,
                    "end": 185
                  },
                  "init": null,
                  "definite": false,
                  "start": 177,
                  "end": 185
                }
              ],
              "declare": false,
              "start": 171,
              "end": 185
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "key",
                      "raw": "'key'",
                      "start": 191,
                      "end": 196
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 198,
                      "end": 199
                    }
                  ],
                  "start": 190,
                  "end": 200
                }
              ],
              "start": 189,
              "end": 201
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 203,
              "end": 205
            },
            "start": 166,
            "end": 205
          }
        ],
        "start": 14,
        "end": 207
      },
      "expression": false,
      "start": 0,
      "end": 207
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t2",
        "optional": false,
        "typeAnnotation": null,
        "start": 219,
        "end": 221
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
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 242,
                        "end": 244
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 246,
                        "end": 247
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 241,
                    "end": 248
                  },
                  "init": null,
                  "definite": false,
                  "start": 241,
                  "end": 248
                }
              ],
              "declare": false,
              "start": 235,
              "end": 248
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "key",
                      "raw": "'key'",
                      "start": 254,
                      "end": 259
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 261,
                      "end": 262
                    }
                  ],
                  "start": 253,
                  "end": 263
                }
              ],
              "start": 252,
              "end": 264
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 266,
              "end": 268
            },
            "start": 230,
            "end": 268
          },
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 286,
                        "end": 287
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 289,
                        "end": 291
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 285,
                    "end": 292
                  },
                  "init": null,
                  "definite": false,
                  "start": 285,
                  "end": 292
                }
              ],
              "declare": false,
              "start": 279,
              "end": 292
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "key",
                      "raw": "'key'",
                      "start": 298,
                      "end": 303
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 305,
                      "end": 306
                    }
                  ],
                  "start": 297,
                  "end": 307
                }
              ],
              "start": 296,
              "end": 308
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 310,
              "end": 312
            },
            "start": 274,
            "end": 312
          },
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 330,
                        "end": 331
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 333,
                        "end": 334
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 329,
                    "end": 335
                  },
                  "init": null,
                  "definite": false,
                  "start": 329,
                  "end": 335
                }
              ],
              "declare": false,
              "start": 323,
              "end": 335
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "key",
                      "raw": "'key'",
                      "start": 341,
                      "end": 346
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 348,
                      "end": 349
                    }
                  ],
                  "start": 340,
                  "end": 350
                }
              ],
              "start": 339,
              "end": 351
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 353,
              "end": 355
            },
            "start": 318,
            "end": 355
          }
        ],
        "start": 224,
        "end": 357
      },
      "expression": false,
      "start": 210,
      "end": 357
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t3",
        "optional": false,
        "typeAnnotation": null,
        "start": 368,
        "end": 370
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
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "ArrayPattern",
                        "decorators": [],
                        "elements": [
                          {
                            "type": "ArrayPattern",
                            "decorators": [],
                            "elements": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "_a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 393,
                                "end": 395
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 397,
                                "end": 398
                              }
                            ],
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 392,
                            "end": 399
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 391,
                        "end": 400
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 390,
                    "end": 401
                  },
                  "init": null,
                  "definite": false,
                  "start": 390,
                  "end": 401
                }
              ],
              "declare": false,
              "start": 384,
              "end": 401
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": "key",
                              "raw": "'key'",
                              "start": 409,
                              "end": 414
                            },
                            {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 416,
                              "end": 417
                            }
                          ],
                          "start": 408,
                          "end": 418
                        }
                      ],
                      "start": 407,
                      "end": 419
                    }
                  ],
                  "start": 406,
                  "end": 420
                }
              ],
              "start": 405,
              "end": 421
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 423,
              "end": 425
            },
            "start": 379,
            "end": 425
          },
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "ArrayPattern",
                        "decorators": [],
                        "elements": [
                          {
                            "type": "ArrayPattern",
                            "decorators": [],
                            "elements": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 445,
                                "end": 446
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "_b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 448,
                                "end": 450
                              }
                            ],
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 444,
                            "end": 451
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 443,
                        "end": 452
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 442,
                    "end": 453
                  },
                  "init": null,
                  "definite": false,
                  "start": 442,
                  "end": 453
                }
              ],
              "declare": false,
              "start": 436,
              "end": 453
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": "key",
                              "raw": "'key'",
                              "start": 461,
                              "end": 466
                            },
                            {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 468,
                              "end": 469
                            }
                          ],
                          "start": 460,
                          "end": 470
                        }
                      ],
                      "start": 459,
                      "end": 471
                    }
                  ],
                  "start": 458,
                  "end": 472
                }
              ],
              "start": 457,
              "end": 473
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 475,
              "end": 477
            },
            "start": 431,
            "end": 477
          },
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "ArrayPattern",
                        "decorators": [],
                        "elements": [
                          {
                            "type": "ArrayPattern",
                            "decorators": [],
                            "elements": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 497,
                                "end": 498
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 500,
                                "end": 501
                              }
                            ],
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 496,
                            "end": 502
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 495,
                        "end": 503
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 494,
                    "end": 504
                  },
                  "init": null,
                  "definite": false,
                  "start": 494,
                  "end": 504
                }
              ],
              "declare": false,
              "start": 488,
              "end": 504
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": "key",
                              "raw": "'key'",
                              "start": 512,
                              "end": 517
                            },
                            {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 519,
                              "end": 520
                            }
                          ],
                          "start": 511,
                          "end": 521
                        }
                      ],
                      "start": 510,
                      "end": 522
                    }
                  ],
                  "start": 509,
                  "end": 523
                }
              ],
              "start": 508,
              "end": 524
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 526,
              "end": 528
            },
            "start": 483,
            "end": 528
          }
        ],
        "start": 373,
        "end": 530
      },
      "expression": false,
      "start": 359,
      "end": 530
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 530
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
    "value": "t1",
    "start": 9,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 20,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 24,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 25,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "_a",
    "start": 32,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 39,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 43,
    "end": 44
  },
  {
    "type": "String",
    "value": "'key'",
    "start": 44,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 49,
    "end": 50
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 66,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 74,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": ";",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 86,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 93,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 98,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "_b",
    "start": 108,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 112,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 116,
    "end": 117
  },
  {
    "type": "String",
    "value": "'key'",
    "start": 117,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 122,
    "end": 123
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 139,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 147,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 159,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 166,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 170,
    "end": 171
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 171,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "_a",
    "start": 178,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "_b",
    "start": 182,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 186,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 190,
    "end": 191
  },
  {
    "type": "String",
    "value": "'key'",
    "start": 191,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 196,
    "end": 197
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 206,
    "end": 207
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 210,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 219,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 224,
    "end": 225
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 230,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 234,
    "end": 235
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 235,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "_a",
    "start": 242,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 249,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 253,
    "end": 254
  },
  {
    "type": "String",
    "value": "'key'",
    "start": 254,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 259,
    "end": 260
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 267,
    "end": 268
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 274,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 278,
    "end": 279
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 279,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "_b",
    "start": 289,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 293,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 297,
    "end": 298
  },
  {
    "type": "String",
    "value": "'key'",
    "start": 298,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 303,
    "end": 304
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 311,
    "end": 312
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 318,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 322,
    "end": 323
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 323,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 336,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 340,
    "end": 341
  },
  {
    "type": "String",
    "value": "'key'",
    "start": 341,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 346,
    "end": 347
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "{",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 356,
    "end": 357
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 359,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 368,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 373,
    "end": 374
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 379,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 383,
    "end": 384
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 384,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "_a",
    "start": 393,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 400,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 402,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 408,
    "end": 409
  },
  {
    "type": "String",
    "value": "'key'",
    "start": 409,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 414,
    "end": 415
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 424,
    "end": 425
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 431,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 435,
    "end": 436
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 436,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "_b",
    "start": 448,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 454,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 460,
    "end": 461
  },
  {
    "type": "String",
    "value": "'key'",
    "start": 461,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 466,
    "end": 467
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 476,
    "end": 477
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 483,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 487,
    "end": 488
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 488,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 505,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 511,
    "end": 512
  },
  {
    "type": "String",
    "value": "'key'",
    "start": 512,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 517,
    "end": 518
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 529,
    "end": 530
  }
]
```
