__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PromiseOrValue",
        "optional": false,
        "typeAnnotation": null,
        "start": 86,
        "end": 100
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 102
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 101,
            "end": 102
          }
        ],
        "start": 100,
        "end": 103
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 113
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 114,
                    "end": 115
                  },
                  "typeArguments": null,
                  "start": 114,
                  "end": 115
                }
              ],
              "start": 113,
              "end": 116
            },
            "start": 106,
            "end": 116
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 119,
              "end": 120
            },
            "typeArguments": null,
            "start": 119,
            "end": 120
          }
        ],
        "start": 106,
        "end": 120
      },
      "declare": false,
      "start": 81,
      "end": 121
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mapAsyncIterable",
        "optional": false,
        "typeAnnotation": null,
        "start": 132,
        "end": 148
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 149,
              "end": 150
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 149,
            "end": 150
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 152,
              "end": 153
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 152,
            "end": 153
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 155,
              "end": 156
            },
            "constraint": null,
            "default": {
              "type": "TSUndefinedKeyword",
              "start": 159,
              "end": 168
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 155,
            "end": 168
          }
        ],
        "start": 148,
        "end": 169
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "iterable",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AsyncGenerator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 183,
                    "end": 197
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 198,
                          "end": 199
                        },
                        "typeArguments": null,
                        "start": 198,
                        "end": 199
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 201,
                          "end": 202
                        },
                        "typeArguments": null,
                        "start": 201,
                        "end": 202
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 204,
                        "end": 213
                      }
                    ],
                    "start": 197,
                    "end": 214
                  },
                  "start": 183,
                  "end": 214
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AsyncIterable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 217,
                    "end": 230
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 231,
                          "end": 232
                        },
                        "typeArguments": null,
                        "start": 231,
                        "end": 232
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 234,
                          "end": 235
                        },
                        "typeArguments": null,
                        "start": 234,
                        "end": 235
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 237,
                        "end": 246
                      }
                    ],
                    "start": 230,
                    "end": 247
                  },
                  "start": 217,
                  "end": 247
                }
              ],
              "start": 183,
              "end": 247
            },
            "start": 181,
            "end": 247
          },
          "start": 173,
          "end": 247
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 269,
                        "end": 270
                      },
                      "typeArguments": null,
                      "start": 269,
                      "end": 270
                    },
                    "start": 267,
                    "end": 270
                  },
                  "start": 262,
                  "end": 270
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PromiseOrValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 275,
                    "end": 289
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 290,
                          "end": 291
                        },
                        "typeArguments": null,
                        "start": 290,
                        "end": 291
                      }
                    ],
                    "start": 289,
                    "end": 292
                  },
                  "start": 275,
                  "end": 292
                },
                "start": 272,
                "end": 292
              },
              "start": 261,
              "end": 292
            },
            "start": 259,
            "end": 292
          },
          "start": 251,
          "end": 292
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AsyncGenerator",
            "optional": false,
            "typeAnnotation": null,
            "start": 297,
            "end": 311
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 312,
                  "end": 313
                },
                "typeArguments": null,
                "start": 312,
                "end": 313
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 315,
                  "end": 316
                },
                "typeArguments": null,
                "start": 315,
                "end": 316
              },
              {
                "type": "TSVoidKeyword",
                "start": 318,
                "end": 322
              }
            ],
            "start": 311,
            "end": 323
          },
          "start": 297,
          "end": 323
        },
        "start": 295,
        "end": 323
      },
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
                  "name": "iterator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 334,
                  "end": 342
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "iterable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 345,
                      "end": 353
                    },
                    "property": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 354,
                        "end": 360
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "asyncIterator",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 361,
                        "end": 374
                      },
                      "optional": false,
                      "computed": false,
                      "start": 354,
                      "end": 374
                    },
                    "optional": false,
                    "computed": true,
                    "start": 345,
                    "end": 375
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 345,
                  "end": 377
                },
                "definite": false,
                "start": 334,
                "end": 377
              }
            ],
            "declare": false,
            "start": 328,
            "end": 378
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "mapResult",
              "optional": false,
              "typeAnnotation": null,
              "start": 397,
              "end": 406
            },
            "generator": false,
            "async": true,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "result",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IteratorResult",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 420,
                      "end": 434
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 435,
                            "end": 436
                          },
                          "typeArguments": null,
                          "start": 435,
                          "end": 436
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 438,
                            "end": 439
                          },
                          "typeArguments": null,
                          "start": 438,
                          "end": 439
                        }
                      ],
                      "start": 434,
                      "end": 440
                    },
                    "start": 420,
                    "end": 440
                  },
                  "start": 418,
                  "end": 440
                },
                "start": 412,
                "end": 440
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 447,
                  "end": 454
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IteratorResult",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 455,
                        "end": 469
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 470,
                              "end": 471
                            },
                            "typeArguments": null,
                            "start": 470,
                            "end": 471
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 473,
                              "end": 474
                            },
                            "typeArguments": null,
                            "start": 473,
                            "end": 474
                          }
                        ],
                        "start": 469,
                        "end": 475
                      },
                      "start": 455,
                      "end": 475
                    }
                  ],
                  "start": 454,
                  "end": 476
                },
                "start": 447,
                "end": 476
              },
              "start": 445,
              "end": 476
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "result",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 487,
                      "end": 493
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "done",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 494,
                      "end": 498
                    },
                    "optional": false,
                    "computed": false,
                    "start": 487,
                    "end": 498
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "result",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 515,
                          "end": 521
                        },
                        "start": 508,
                        "end": 522
                      }
                    ],
                    "start": 500,
                    "end": 528
                  },
                  "alternate": null,
                  "start": 483,
                  "end": 528
                },
                {
                  "type": "TryStatement",
                  "block": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 555,
                                "end": 560
                              },
                              "value": {
                                "type": "AwaitExpression",
                                "argument": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "callback",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 568,
                                    "end": 576
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "result",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 577,
                                        "end": 583
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "value",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 584,
                                        "end": 589
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 577,
                                      "end": 589
                                    }
                                  ],
                                  "optional": false,
                                  "start": 568,
                                  "end": 590
                                },
                                "start": 562,
                                "end": 590
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 555,
                              "end": 590
                            },
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "done",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 592,
                                "end": 596
                              },
                              "value": {
                                "type": "Literal",
                                "value": false,
                                "raw": "false",
                                "start": 598,
                                "end": 603
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 592,
                              "end": 603
                            }
                          ],
                          "start": 553,
                          "end": 605
                        },
                        "start": 546,
                        "end": 606
                      }
                    ],
                    "start": 538,
                    "end": 612
                  },
                  "handler": {
                    "type": "CatchClause",
                    "param": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 620,
                      "end": 625
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
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "iterator",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 646,
                                  "end": 654
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "return",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 655,
                                  "end": 661
                                },
                                "optional": false,
                                "computed": false,
                                "start": 646,
                                "end": 661
                              },
                              "prefix": true,
                              "start": 639,
                              "end": 661
                            },
                            "operator": "===",
                            "right": {
                              "type": "Literal",
                              "value": "function",
                              "raw": "\"function\"",
                              "start": 666,
                              "end": 676
                            },
                            "start": 639,
                            "end": 676
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "TryStatement",
                                "block": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "AwaitExpression",
                                        "argument": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "iterator",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 710,
                                              "end": 718
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "return",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 719,
                                              "end": 725
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 710,
                                            "end": 725
                                          },
                                          "typeArguments": null,
                                          "arguments": [],
                                          "optional": false,
                                          "start": 710,
                                          "end": 727
                                        },
                                        "start": 704,
                                        "end": 727
                                      },
                                      "directive": null,
                                      "start": 704,
                                      "end": 728
                                    }
                                  ],
                                  "start": 692,
                                  "end": 738
                                },
                                "handler": {
                                  "type": "CatchClause",
                                  "param": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "_e",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 746,
                                    "end": 748
                                  },
                                  "body": {
                                    "type": "BlockStatement",
                                    "body": [],
                                    "start": 750,
                                    "end": 752
                                  },
                                  "start": 739,
                                  "end": 752
                                },
                                "finalizer": null,
                                "start": 688,
                                "end": 752
                              }
                            ],
                            "start": 678,
                            "end": 760
                          },
                          "alternate": null,
                          "start": 635,
                          "end": 760
                        },
                        {
                          "type": "ThrowStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "error",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 773,
                            "end": 778
                          },
                          "start": 767,
                          "end": 779
                        }
                      ],
                      "start": 627,
                      "end": 785
                    },
                    "start": 613,
                    "end": 785
                  },
                  "finalizer": null,
                  "start": 534,
                  "end": 785
                }
              ],
              "start": 477,
              "end": 789
            },
            "expression": false,
            "start": 382,
            "end": 789
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "next",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 812,
                    "end": 816
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": true,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "mapResult",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 834,
                              "end": 843
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "AwaitExpression",
                                "argument": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "iterator",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 850,
                                      "end": 858
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "next",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 859,
                                      "end": 863
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 850,
                                    "end": 863
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "optional": false,
                                  "start": 850,
                                  "end": 865
                                },
                                "start": 844,
                                "end": 865
                              }
                            ],
                            "optional": false,
                            "start": 834,
                            "end": 866
                          },
                          "start": 827,
                          "end": 867
                        }
                      ],
                      "start": 819,
                      "end": 873
                    },
                    "expression": false,
                    "start": 816,
                    "end": 873
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 806,
                  "end": 873
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "return",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 885,
                    "end": 891
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": true,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 899,
                              "end": 900
                            },
                            "typeArguments": null,
                            "start": 899,
                            "end": 900
                          },
                          "start": 897,
                          "end": 900
                        },
                        "start": 892,
                        "end": 900
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 903,
                          "end": 910
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "IteratorResult",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 911,
                                "end": 925
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 926,
                                      "end": 927
                                    },
                                    "typeArguments": null,
                                    "start": 926,
                                    "end": 927
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "R",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 929,
                                      "end": 930
                                    },
                                    "typeArguments": null,
                                    "start": 929,
                                    "end": 930
                                  }
                                ],
                                "start": 925,
                                "end": 931
                              },
                              "start": 911,
                              "end": 931
                            }
                          ],
                          "start": 910,
                          "end": 932
                        },
                        "start": 903,
                        "end": 932
                      },
                      "start": 901,
                      "end": 932
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "ConditionalExpression",
                            "test": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "UnaryExpression",
                                "operator": "typeof",
                                "argument": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "iterator",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 955,
                                    "end": 963
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "return",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 964,
                                    "end": 970
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 955,
                                  "end": 970
                                },
                                "prefix": true,
                                "start": 948,
                                "end": 970
                              },
                              "operator": "===",
                              "right": {
                                "type": "Literal",
                                "value": "function",
                                "raw": "\"function\"",
                                "start": 975,
                                "end": 985
                              },
                              "start": 948,
                              "end": 985
                            },
                            "consequent": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "mapResult",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 996,
                                "end": 1005
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "AwaitExpression",
                                  "argument": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "iterator",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1012,
                                        "end": 1020
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "return",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1021,
                                        "end": 1027
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 1012,
                                      "end": 1027
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "value",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1028,
                                        "end": 1033
                                      }
                                    ],
                                    "optional": false,
                                    "start": 1012,
                                    "end": 1034
                                  },
                                  "start": 1006,
                                  "end": 1034
                                }
                              ],
                              "optional": false,
                              "start": 996,
                              "end": 1035
                            },
                            "alternate": {
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1048,
                                    "end": 1053
                                  },
                                  "value": {
                                    "type": "TSAsExpression",
                                    "expression": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "undefined",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1055,
                                      "end": 1064
                                    },
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 1068,
                                      "end": 1071
                                    },
                                    "start": 1055,
                                    "end": 1071
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 1048,
                                  "end": 1071
                                },
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "done",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1073,
                                    "end": 1077
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": true,
                                    "raw": "true",
                                    "start": 1079,
                                    "end": 1083
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 1073,
                                  "end": 1083
                                }
                              ],
                              "start": 1046,
                              "end": 1085
                            },
                            "start": 948,
                            "end": 1085
                          },
                          "start": 941,
                          "end": 1086
                        }
                      ],
                      "start": 933,
                      "end": 1092
                    },
                    "expression": false,
                    "start": 891,
                    "end": 1092
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 879,
                  "end": 1092
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "throw",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1104,
                    "end": 1109
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": true,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "error",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "start": 1118,
                            "end": 1125
                          },
                          "start": 1116,
                          "end": 1125
                        },
                        "start": 1110,
                        "end": 1125
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
                              "type": "UnaryExpression",
                              "operator": "typeof",
                              "argument": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "iterator",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1146,
                                  "end": 1154
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "throw",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1155,
                                  "end": 1160
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1146,
                                "end": 1160
                              },
                              "prefix": true,
                              "start": 1139,
                              "end": 1160
                            },
                            "operator": "===",
                            "right": {
                              "type": "Literal",
                              "value": "function",
                              "raw": "\"function\"",
                              "start": 1165,
                              "end": 1175
                            },
                            "start": 1139,
                            "end": 1175
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "mapResult",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1194,
                                    "end": 1203
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "AwaitExpression",
                                      "argument": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "iterator",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1210,
                                            "end": 1218
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "throw",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1219,
                                            "end": 1224
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 1210,
                                          "end": 1224
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "error",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1225,
                                            "end": 1230
                                          }
                                        ],
                                        "optional": false,
                                        "start": 1210,
                                        "end": 1231
                                      },
                                      "start": 1204,
                                      "end": 1231
                                    }
                                  ],
                                  "optional": false,
                                  "start": 1194,
                                  "end": 1232
                                },
                                "start": 1187,
                                "end": 1233
                              }
                            ],
                            "start": 1177,
                            "end": 1241
                          },
                          "alternate": null,
                          "start": 1135,
                          "end": 1241
                        },
                        {
                          "type": "ThrowStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "error",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1254,
                            "end": 1259
                          },
                          "start": 1248,
                          "end": 1260
                        }
                      ],
                      "start": 1127,
                      "end": 1266
                    },
                    "expression": false,
                    "start": 1109,
                    "end": 1266
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1098,
                  "end": 1266
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Symbol",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1273,
                      "end": 1279
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "asyncIterator",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1280,
                      "end": 1293
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1273,
                    "end": 1293
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "ThisExpression",
                            "start": 1312,
                            "end": 1316
                          },
                          "start": 1305,
                          "end": 1317
                        }
                      ],
                      "start": 1297,
                      "end": 1323
                    },
                    "expression": false,
                    "start": 1294,
                    "end": 1323
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 1272,
                  "end": 1323
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Symbol",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1336,
                      "end": 1342
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "asyncDispose",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1343,
                      "end": 1355
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1336,
                    "end": 1355
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": true,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AwaitExpression",
                            "argument": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1373,
                                  "end": 1377
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "return",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1378,
                                  "end": 1384
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1373,
                                "end": 1384
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "TSNonNullExpression",
                                  "expression": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "undefined",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1385,
                                    "end": 1394
                                  },
                                  "start": 1385,
                                  "end": 1395
                                }
                              ],
                              "optional": false,
                              "start": 1373,
                              "end": 1396
                            },
                            "start": 1367,
                            "end": 1396
                          },
                          "directive": null,
                          "start": 1367,
                          "end": 1397
                        }
                      ],
                      "start": 1359,
                      "end": 1403
                    },
                    "expression": false,
                    "start": 1356,
                    "end": 1403
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 1329,
                  "end": 1403
                }
              ],
              "start": 800,
              "end": 1407
            },
            "start": 793,
            "end": 1408
          }
        ],
        "start": 324,
        "end": 1410
      },
      "expression": false,
      "start": 123,
      "end": 1410
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
            "name": "items",
            "optional": false,
            "typeAnnotation": null,
            "start": 1418,
            "end": 1423
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1427,
                "end": 1428
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1430,
                "end": 1431
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1433,
                "end": 1434
              }
            ],
            "start": 1426,
            "end": 1435
          },
          "definite": false,
          "start": 1418,
          "end": 1435
        }
      ],
      "declare": false,
      "start": 1412,
      "end": 1436
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
            "name": "iterable",
            "optional": false,
            "typeAnnotation": null,
            "start": 1444,
            "end": 1452
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1460,
                    "end": 1466
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "asyncIterator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1467,
                    "end": 1480
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1460,
                  "end": 1480
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ThisExpression",
                          "start": 1497,
                          "end": 1501
                        },
                        "start": 1490,
                        "end": 1502
                      }
                    ],
                    "start": 1484,
                    "end": 1506
                  },
                  "expression": false,
                  "start": 1481,
                  "end": 1506
                },
                "method": true,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 1459,
                "end": 1506
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "next",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1510,
                  "end": 1514
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1529,
                              "end": 1534
                            },
                            "init": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "items",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1537,
                                "end": 1542
                              },
                              "property": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 1543,
                                "end": 1544
                              },
                              "optional": false,
                              "computed": true,
                              "start": 1537,
                              "end": 1545
                            },
                            "definite": false,
                            "start": 1529,
                            "end": 1545
                          }
                        ],
                        "declare": false,
                        "start": 1523,
                        "end": 1546
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
                              "name": "items",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1551,
                              "end": 1556
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "shift",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1557,
                              "end": 1562
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1551,
                            "end": 1562
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1551,
                          "end": 1564
                        },
                        "directive": null,
                        "start": 1551,
                        "end": 1565
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1577,
                              "end": 1584
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "resolve",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1585,
                              "end": 1592
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1577,
                            "end": 1592
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "done",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1601,
                                    "end": 1605
                                  },
                                  "value": {
                                    "type": "BinaryExpression",
                                    "left": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "items",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1607,
                                        "end": 1612
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "length",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1613,
                                        "end": 1619
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 1607,
                                      "end": 1619
                                    },
                                    "operator": "===",
                                    "right": {
                                      "type": "Literal",
                                      "value": 0,
                                      "raw": "0",
                                      "start": 1624,
                                      "end": 1625
                                    },
                                    "start": 1607,
                                    "end": 1625
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 1601,
                                  "end": 1625
                                },
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1633,
                                    "end": 1638
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1633,
                                    "end": 1638
                                  },
                                  "method": false,
                                  "shorthand": true,
                                  "computed": false,
                                  "optional": false,
                                  "start": 1633,
                                  "end": 1638
                                }
                              ],
                              "start": 1593,
                              "end": 1645
                            }
                          ],
                          "optional": false,
                          "start": 1577,
                          "end": 1646
                        },
                        "start": 1570,
                        "end": 1647
                      }
                    ],
                    "start": 1517,
                    "end": 1651
                  },
                  "expression": false,
                  "start": 1514,
                  "end": 1651
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1510,
                "end": 1651
              }
            ],
            "start": 1455,
            "end": 1654
          },
          "definite": false,
          "start": 1444,
          "end": 1654
        }
      ],
      "declare": false,
      "start": 1438,
      "end": 1655
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
            "name": "doubles",
            "optional": false,
            "typeAnnotation": null,
            "start": 1663,
            "end": 1670
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "mapAsyncIterable",
              "optional": false,
              "typeAnnotation": null,
              "start": 1673,
              "end": 1689
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "iterable",
                "optional": false,
                "typeAnnotation": null,
                "start": 1690,
                "end": 1698
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1701,
                    "end": 1702
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1707,
                    "end": 1708
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1711,
                    "end": 1712
                  },
                  "start": 1707,
                  "end": 1712
                },
                "id": null,
                "generator": false,
                "start": 1700,
                "end": 1712
              }
            ],
            "optional": false,
            "start": 1673,
            "end": 1713
          },
          "definite": false,
          "start": 1663,
          "end": 1713
        }
      ],
      "declare": false,
      "start": 1657,
      "end": 1714
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 81,
  "end": 1714
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 81,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "PromiseOrValue",
    "start": 86,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 106,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 120,
    "end": 121
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 123,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "mapAsyncIterable",
    "start": 132,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 159,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "iterable",
    "start": 173,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "AsyncGenerator",
    "start": 183,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 204,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "AsyncIterable",
    "start": 217,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 237,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 251,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 262,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 272,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "PromiseOrValue",
    "start": 275,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "AsyncGenerator",
    "start": 297,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 316,
    "end": 317
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 318,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 324,
    "end": 325
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 328,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 334,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "iterable",
    "start": 345,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 354,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "asyncIterator",
    "start": 361,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 382,
    "end": 387
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 388,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "mapResult",
    "start": 397,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 412,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "IteratorResult",
    "start": 420,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 447,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "IteratorResult",
    "start": 455,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 477,
    "end": 478
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 483,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 487,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 494,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 500,
    "end": 501
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 508,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 515,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 527,
    "end": 528
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 534,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 538,
    "end": 539
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 546,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 555,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 562,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 568,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 577,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 584,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 592,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 596,
    "end": 597
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 598,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 611,
    "end": 612
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 613,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 619,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 620,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 627,
    "end": 628
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 635,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 638,
    "end": 639
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 639,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 646,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "return",
    "start": 655,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 662,
    "end": 665
  },
  {
    "type": "String",
    "value": "\"function\"",
    "start": 666,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 678,
    "end": 679
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 688,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 692,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 704,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 710,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 718,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "return",
    "start": 719,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 737,
    "end": 738
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 739,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 745,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "_e",
    "start": 746,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 759,
    "end": 760
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 767,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 773,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 788,
    "end": 789
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 793,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 800,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 806,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 812,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 819,
    "end": 820
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 827,
    "end": 833
  },
  {
    "type": "Identifier",
    "value": "mapResult",
    "start": 834,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 843,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 844,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 850,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 858,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 859,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 866,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 872,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 873,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 879,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "return",
    "start": 885,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 891,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 892,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 897,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 900,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 901,
    "end": 902
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 903,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 910,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "IteratorResult",
    "start": 911,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 925,
    "end": 926
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 927,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 930,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 931,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 933,
    "end": 934
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 941,
    "end": 947
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 948,
    "end": 954
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 955,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 963,
    "end": 964
  },
  {
    "type": "Identifier",
    "value": "return",
    "start": 964,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 971,
    "end": 974
  },
  {
    "type": "String",
    "value": "\"function\"",
    "start": 975,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 994,
    "end": 995
  },
  {
    "type": "Identifier",
    "value": "mapResult",
    "start": 996,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1006,
    "end": 1011
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 1012,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Identifier",
    "value": "return",
    "start": 1021,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1028,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1048,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1055,
    "end": 1064
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1065,
    "end": 1067
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1068,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 1073,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1079,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1098,
    "end": 1103
  },
  {
    "type": "Identifier",
    "value": "throw",
    "start": 1104,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 1110,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1118,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1135,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1139,
    "end": 1145
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 1146,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Identifier",
    "value": "throw",
    "start": 1155,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1161,
    "end": 1164
  },
  {
    "type": "String",
    "value": "\"function\"",
    "start": 1165,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1187,
    "end": 1193
  },
  {
    "type": "Identifier",
    "value": "mapResult",
    "start": 1194,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1204,
    "end": 1209
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 1210,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Identifier",
    "value": "throw",
    "start": 1219,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 1225,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 1248,
    "end": 1253
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 1254,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 1273,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Identifier",
    "value": "asyncIterator",
    "start": 1280,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1305,
    "end": 1311
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1312,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1329,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 1336,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Identifier",
    "value": "asyncDispose",
    "start": 1343,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1367,
    "end": 1372
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1373,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Identifier",
    "value": "return",
    "start": 1378,
    "end": 1384
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1385,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1412,
    "end": 1417
  },
  {
    "type": "Identifier",
    "value": "items",
    "start": 1418,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1438,
    "end": 1443
  },
  {
    "type": "Identifier",
    "value": "iterable",
    "start": 1444,
    "end": 1452
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 1460,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Identifier",
    "value": "asyncIterator",
    "start": 1467,
    "end": 1480
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1490,
    "end": 1496
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1497,
    "end": 1501
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1506,
    "end": 1507
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 1510,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1523,
    "end": 1528
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1529,
    "end": 1534
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Identifier",
    "value": "items",
    "start": 1537,
    "end": 1542
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Identifier",
    "value": "items",
    "start": 1551,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Identifier",
    "value": "shift",
    "start": 1557,
    "end": 1562
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1563,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1570,
    "end": 1576
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1577,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 1585,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 1601,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Identifier",
    "value": "items",
    "start": 1607,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1613,
    "end": 1619
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1620,
    "end": 1623
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1633,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1654,
    "end": 1655
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1657,
    "end": 1662
  },
  {
    "type": "Identifier",
    "value": "doubles",
    "start": 1663,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1671,
    "end": 1672
  },
  {
    "type": "Identifier",
    "value": "mapAsyncIterable",
    "start": 1673,
    "end": 1689
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "Identifier",
    "value": "iterable",
    "start": 1690,
    "end": 1698
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1701,
    "end": 1702
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1704,
    "end": 1706
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1707,
    "end": 1708
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1709,
    "end": 1710
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1711,
    "end": 1712
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1712,
    "end": 1713
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1713,
    "end": 1714
  }
]
```
