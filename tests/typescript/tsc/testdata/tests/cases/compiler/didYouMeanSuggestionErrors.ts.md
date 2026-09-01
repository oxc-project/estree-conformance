__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "describe",
          "optional": false,
          "typeAnnotation": null,
          "start": 0,
          "end": 8
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "my test suite",
            "raw": "\"my test suite\"",
            "start": 9,
            "end": 24
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
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
                      "name": "it",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 38,
                      "end": 40
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "should run",
                        "raw": "\"should run\"",
                        "start": 41,
                        "end": 53
                      },
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
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
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 77,
                                    "end": 78
                                  },
                                  "init": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "$",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 81,
                                      "end": 82
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Literal",
                                        "value": ".thing",
                                        "raw": "\".thing\"",
                                        "start": 83,
                                        "end": 91
                                      }
                                    ],
                                    "optional": false,
                                    "start": 81,
                                    "end": 92
                                  },
                                  "definite": false,
                                  "start": 77,
                                  "end": 92
                                }
                              ],
                              "declare": false,
                              "start": 71,
                              "end": 93
                            }
                          ],
                          "start": 61,
                          "end": 99
                        },
                        "id": null,
                        "generator": false,
                        "start": 55,
                        "end": 99
                      }
                    ],
                    "optional": false,
                    "start": 38,
                    "end": 100
                  },
                  "directive": null,
                  "start": 38,
                  "end": 101
                }
              ],
              "start": 32,
              "end": 103
            },
            "id": null,
            "generator": false,
            "start": 26,
            "end": 103
          }
        ],
        "optional": false,
        "start": 0,
        "end": 104
      },
      "directive": null,
      "start": 0,
      "end": 105
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "suite",
          "optional": false,
          "typeAnnotation": null,
          "start": 107,
          "end": 112
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "another suite",
            "raw": "\"another suite\"",
            "start": 113,
            "end": 128
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
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
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 142,
                      "end": 146
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "everything else",
                        "raw": "\"everything else\"",
                        "start": 147,
                        "end": 164
                      },
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
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
                                    "start": 182,
                                    "end": 189
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "log",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 190,
                                    "end": 193
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 182,
                                  "end": 193
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "process",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 194,
                                      "end": 201
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "env",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 202,
                                      "end": 205
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 194,
                                    "end": 205
                                  }
                                ],
                                "optional": false,
                                "start": 182,
                                "end": 206
                              },
                              "directive": null,
                              "start": 182,
                              "end": 207
                            },
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "document",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 216,
                                    "end": 224
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "createElement",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 225,
                                    "end": 238
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 216,
                                  "end": 238
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "value": "div",
                                    "raw": "\"div\"",
                                    "start": 239,
                                    "end": 244
                                  }
                                ],
                                "optional": false,
                                "start": 216,
                                "end": 245
                              },
                              "directive": null,
                              "start": 216,
                              "end": 246
                            },
                            {
                              "type": "VariableDeclaration",
                              "kind": "const",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 262,
                                    "end": 263
                                  },
                                  "init": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "require",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 266,
                                      "end": 273
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Literal",
                                        "value": "fs",
                                        "raw": "\"fs\"",
                                        "start": 274,
                                        "end": 278
                                      }
                                    ],
                                    "optional": false,
                                    "start": 266,
                                    "end": 279
                                  },
                                  "definite": false,
                                  "start": 262,
                                  "end": 279
                                }
                              ],
                              "declare": false,
                              "start": 256,
                              "end": 280
                            },
                            {
                              "type": "VariableDeclaration",
                              "kind": "const",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "y",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 295,
                                    "end": 296
                                  },
                                  "init": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Buffer",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 299,
                                        "end": 305
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "from",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 306,
                                        "end": 310
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 299,
                                      "end": 310
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "ArrayExpression",
                                        "elements": [],
                                        "start": 311,
                                        "end": 313
                                      }
                                    ],
                                    "optional": false,
                                    "start": 299,
                                    "end": 314
                                  },
                                  "definite": false,
                                  "start": 295,
                                  "end": 314
                                }
                              ],
                              "declare": false,
                              "start": 289,
                              "end": 315
                            },
                            {
                              "type": "VariableDeclaration",
                              "kind": "const",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "z",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 330,
                                    "end": 331
                                  },
                                  "init": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "module",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 334,
                                      "end": 340
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "exports",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 341,
                                      "end": 348
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 334,
                                    "end": 348
                                  },
                                  "definite": false,
                                  "start": 330,
                                  "end": 348
                                }
                              ],
                              "declare": false,
                              "start": 324,
                              "end": 349
                            },
                            {
                              "type": "VariableDeclaration",
                              "kind": "const",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 365,
                                    "end": 366
                                  },
                                  "init": {
                                    "type": "NewExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Map",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 373,
                                      "end": 376
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "start": 369,
                                    "end": 378
                                  },
                                  "definite": false,
                                  "start": 365,
                                  "end": 378
                                }
                              ],
                              "declare": false,
                              "start": 359,
                              "end": 379
                            },
                            {
                              "type": "VariableDeclaration",
                              "kind": "const",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "b",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 394,
                                    "end": 395
                                  },
                                  "init": {
                                    "type": "NewExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Set",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 402,
                                      "end": 405
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "start": 398,
                                    "end": 407
                                  },
                                  "definite": false,
                                  "start": 394,
                                  "end": 407
                                }
                              ],
                              "declare": false,
                              "start": 388,
                              "end": 408
                            },
                            {
                              "type": "VariableDeclaration",
                              "kind": "const",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "c",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 423,
                                    "end": 424
                                  },
                                  "init": {
                                    "type": "NewExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "WeakMap",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 431,
                                      "end": 438
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "start": 427,
                                    "end": 440
                                  },
                                  "definite": false,
                                  "start": 423,
                                  "end": 440
                                }
                              ],
                              "declare": false,
                              "start": 417,
                              "end": 441
                            },
                            {
                              "type": "VariableDeclaration",
                              "kind": "const",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "d",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 456,
                                    "end": 457
                                  },
                                  "init": {
                                    "type": "NewExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "WeakSet",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 464,
                                      "end": 471
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "start": 460,
                                    "end": 473
                                  },
                                  "definite": false,
                                  "start": 456,
                                  "end": 473
                                }
                              ],
                              "declare": false,
                              "start": 450,
                              "end": 474
                            },
                            {
                              "type": "VariableDeclaration",
                              "kind": "const",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "e",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 489,
                                    "end": 490
                                  },
                                  "init": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Symbol",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 493,
                                      "end": 499
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "optional": false,
                                    "start": 493,
                                    "end": 501
                                  },
                                  "definite": false,
                                  "start": 489,
                                  "end": 501
                                }
                              ],
                              "declare": false,
                              "start": 483,
                              "end": 502
                            },
                            {
                              "type": "VariableDeclaration",
                              "kind": "const",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "f",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 517,
                                    "end": 518
                                  },
                                  "init": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Promise",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 521,
                                        "end": 528
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "resolve",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 529,
                                        "end": 536
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 521,
                                      "end": 536
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Literal",
                                        "value": 0,
                                        "raw": "0",
                                        "start": 537,
                                        "end": 538
                                      }
                                    ],
                                    "optional": false,
                                    "start": 521,
                                    "end": 539
                                  },
                                  "definite": false,
                                  "start": 517,
                                  "end": 539
                                }
                              ],
                              "declare": false,
                              "start": 511,
                              "end": 540
                            },
                            {
                              "type": "VariableDeclaration",
                              "kind": "const",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "i",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Iterator",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 559,
                                          "end": 567
                                        },
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "params": [
                                            {
                                              "type": "TSAnyKeyword",
                                              "start": 568,
                                              "end": 571
                                            }
                                          ],
                                          "start": 567,
                                          "end": 572
                                        },
                                        "start": 559,
                                        "end": 572
                                      },
                                      "start": 557,
                                      "end": 572
                                    },
                                    "start": 556,
                                    "end": 572
                                  },
                                  "init": {
                                    "type": "TSAsExpression",
                                    "expression": {
                                      "type": "Literal",
                                      "value": null,
                                      "raw": "null",
                                      "start": 575,
                                      "end": 579
                                    },
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 583,
                                      "end": 586
                                    },
                                    "start": 575,
                                    "end": 586
                                  },
                                  "definite": false,
                                  "start": 556,
                                  "end": 586
                                }
                              ],
                              "declare": false,
                              "start": 550,
                              "end": 587
                            },
                            {
                              "type": "VariableDeclaration",
                              "kind": "const",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "j",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "AsyncIterator",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 605,
                                          "end": 618
                                        },
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "params": [
                                            {
                                              "type": "TSAnyKeyword",
                                              "start": 619,
                                              "end": 622
                                            }
                                          ],
                                          "start": 618,
                                          "end": 623
                                        },
                                        "start": 605,
                                        "end": 623
                                      },
                                      "start": 603,
                                      "end": 623
                                    },
                                    "start": 602,
                                    "end": 623
                                  },
                                  "init": {
                                    "type": "TSAsExpression",
                                    "expression": {
                                      "type": "Literal",
                                      "value": null,
                                      "raw": "null",
                                      "start": 626,
                                      "end": 630
                                    },
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 634,
                                      "end": 637
                                    },
                                    "start": 626,
                                    "end": 637
                                  },
                                  "definite": false,
                                  "start": 602,
                                  "end": 637
                                }
                              ],
                              "declare": false,
                              "start": 596,
                              "end": 638
                            },
                            {
                              "type": "VariableDeclaration",
                              "kind": "const",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "k",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Symbol",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 656,
                                          "end": 662
                                        },
                                        "typeArguments": null,
                                        "start": 656,
                                        "end": 662
                                      },
                                      "start": 654,
                                      "end": 662
                                    },
                                    "start": 653,
                                    "end": 662
                                  },
                                  "init": {
                                    "type": "TSAsExpression",
                                    "expression": {
                                      "type": "Literal",
                                      "value": null,
                                      "raw": "null",
                                      "start": 665,
                                      "end": 669
                                    },
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 673,
                                      "end": 676
                                    },
                                    "start": 665,
                                    "end": 676
                                  },
                                  "definite": false,
                                  "start": 653,
                                  "end": 676
                                }
                              ],
                              "declare": false,
                              "start": 647,
                              "end": 677
                            },
                            {
                              "type": "VariableDeclaration",
                              "kind": "const",
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "id": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "l",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Promise",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 695,
                                          "end": 702
                                        },
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "params": [
                                            {
                                              "type": "TSAnyKeyword",
                                              "start": 703,
                                              "end": 706
                                            }
                                          ],
                                          "start": 702,
                                          "end": 707
                                        },
                                        "start": 695,
                                        "end": 707
                                      },
                                      "start": 693,
                                      "end": 707
                                    },
                                    "start": 692,
                                    "end": 707
                                  },
                                  "init": {
                                    "type": "TSAsExpression",
                                    "expression": {
                                      "type": "Literal",
                                      "value": null,
                                      "raw": "null",
                                      "start": 710,
                                      "end": 714
                                    },
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 718,
                                      "end": 721
                                    },
                                    "start": 710,
                                    "end": 721
                                  },
                                  "definite": false,
                                  "start": 692,
                                  "end": 721
                                }
                              ],
                              "declare": false,
                              "start": 686,
                              "end": 722
                            }
                          ],
                          "start": 172,
                          "end": 728
                        },
                        "id": null,
                        "generator": false,
                        "start": 166,
                        "end": 728
                      }
                    ],
                    "optional": false,
                    "start": 142,
                    "end": 729
                  },
                  "directive": null,
                  "start": 142,
                  "end": 730
                }
              ],
              "start": 136,
              "end": 732
            },
            "id": null,
            "generator": false,
            "start": 130,
            "end": 732
          }
        ],
        "optional": false,
        "start": 107,
        "end": 733
      },
      "directive": null,
      "start": 107,
      "end": 734
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 734
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "describe",
    "start": 0,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8,
    "end": 9
  },
  {
    "type": "String",
    "value": "\"my test suite\"",
    "start": 9,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "=>",
    "start": 29,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "it",
    "start": 38,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 40,
    "end": 41
  },
  {
    "type": "String",
    "value": "\"should run\"",
    "start": 41,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 58,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 61,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 71,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "$",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 82,
    "end": 83
  },
  {
    "type": "String",
    "value": "\".thing\"",
    "start": 83,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "suite",
    "start": 107,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 112,
    "end": 113
  },
  {
    "type": "String",
    "value": "\"another suite\"",
    "start": 113,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 133,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 142,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 146,
    "end": 147
  },
  {
    "type": "String",
    "value": "\"everything else\"",
    "start": 147,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 169,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 182,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 190,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "process",
    "start": 194,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "env",
    "start": 202,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "document",
    "start": 216,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "createElement",
    "start": 225,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 238,
    "end": 239
  },
  {
    "type": "String",
    "value": "\"div\"",
    "start": 239,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 245,
    "end": 246
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 256,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 266,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 273,
    "end": 274
  },
  {
    "type": "String",
    "value": "\"fs\"",
    "start": 274,
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
    "value": ";",
    "start": 279,
    "end": 280
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 289,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "Buffer",
    "start": 299,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 306,
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
    "value": "[",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 314,
    "end": 315
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 324,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 334,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 341,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 348,
    "end": 349
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 359,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 367,
    "end": 368
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 369,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "Map",
    "start": 373,
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
    "type": "Keyword",
    "value": "const",
    "start": 388,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 396,
    "end": 397
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 398,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 402,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 405,
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
    "type": "Keyword",
    "value": "const",
    "start": 417,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 425,
    "end": 426
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 427,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "WeakMap",
    "start": 431,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 440,
    "end": 441
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 450,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 458,
    "end": 459
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 460,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "WeakSet",
    "start": 464,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 473,
    "end": 474
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 483,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 493,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 499,
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
    "value": ";",
    "start": 501,
    "end": 502
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 511,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 521,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 529,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 536,
    "end": 537
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 539,
    "end": 540
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 550,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 557,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "Iterator",
    "start": 559,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 568,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 573,
    "end": 574
  },
  {
    "type": "Null",
    "value": "null",
    "start": 575,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 580,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 583,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 586,
    "end": 587
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 596,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "AsyncIterator",
    "start": 605,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 618,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 619,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 624,
    "end": 625
  },
  {
    "type": "Null",
    "value": "null",
    "start": 626,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 631,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 634,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 637,
    "end": 638
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 647,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 656,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 663,
    "end": 664
  },
  {
    "type": "Null",
    "value": "null",
    "start": 665,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 670,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 673,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 676,
    "end": 677
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 686,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 695,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 702,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 703,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 708,
    "end": 709
  },
  {
    "type": "Null",
    "value": "null",
    "start": 710,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 715,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 718,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 721,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 733,
    "end": 734
  }
]
```
