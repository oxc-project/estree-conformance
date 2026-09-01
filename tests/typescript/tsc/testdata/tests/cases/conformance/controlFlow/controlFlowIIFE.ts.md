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
        "name": "getStringOrNumber",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 34
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 38,
              "end": 44
            },
            {
              "type": "TSNumberKeyword",
              "start": 47,
              "end": 53
            }
          ],
          "start": 38,
          "end": 53
        },
        "start": 36,
        "end": 53
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 54
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 65,
        "end": 67
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
                  "typeAnnotation": null,
                  "start": 80,
                  "end": 81
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getStringOrNumber",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 84,
                    "end": 101
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 84,
                  "end": 103
                },
                "definite": false,
                "start": 80,
                "end": 103
              }
            ],
            "declare": false,
            "start": 76,
            "end": 104
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 120,
                  "end": 121
                },
                "prefix": true,
                "start": 113,
                "end": 121
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 126,
                "end": 134
              },
              "start": 113,
              "end": 134
            },
            "consequent": {
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
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 150,
                        "end": 151
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
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
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 186,
                                    "end": 187
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "length",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 188,
                                    "end": 194
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 186,
                                  "end": 194
                                },
                                "start": 179,
                                "end": 195
                              }
                            ],
                            "start": 165,
                            "end": 205
                          },
                          "expression": false,
                          "start": 154,
                          "end": 205
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 154,
                        "end": 207
                      },
                      "definite": false,
                      "start": 150,
                      "end": 207
                    }
                  ],
                  "declare": false,
                  "start": 146,
                  "end": 208
                }
              ],
              "start": 136,
              "end": 214
            },
            "alternate": null,
            "start": 109,
            "end": 214
          }
        ],
        "start": 70,
        "end": 216
      },
      "expression": false,
      "start": 56,
      "end": 216
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 227,
        "end": 229
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
                  "typeAnnotation": null,
                  "start": 242,
                  "end": 243
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getStringOrNumber",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 246,
                    "end": 263
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 246,
                  "end": 265
                },
                "definite": false,
                "start": 242,
                "end": 265
              }
            ],
            "declare": false,
            "start": 238,
            "end": 266
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 282,
                  "end": 283
                },
                "prefix": true,
                "start": 275,
                "end": 283
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 288,
                "end": 296
              },
              "start": 275,
              "end": 296
            },
            "consequent": {
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
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 312,
                        "end": 313
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
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
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 349,
                                    "end": 350
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "length",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 351,
                                    "end": 357
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 349,
                                  "end": 357
                                },
                                "start": 342,
                                "end": 358
                              }
                            ],
                            "start": 328,
                            "end": 368
                          },
                          "expression": false,
                          "start": 317,
                          "end": 368
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 316,
                        "end": 371
                      },
                      "definite": false,
                      "start": 312,
                      "end": 371
                    }
                  ],
                  "declare": false,
                  "start": 308,
                  "end": 372
                }
              ],
              "start": 298,
              "end": 378
            },
            "alternate": null,
            "start": 271,
            "end": 378
          }
        ],
        "start": 232,
        "end": 380
      },
      "expression": false,
      "start": 218,
      "end": 380
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 391,
        "end": 393
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
                  "typeAnnotation": null,
                  "start": 406,
                  "end": 407
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getStringOrNumber",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 410,
                    "end": 427
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 410,
                  "end": 429
                },
                "definite": false,
                "start": 406,
                "end": 429
              }
            ],
            "declare": false,
            "start": 402,
            "end": 430
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 442,
                      "end": 448
                    },
                    "start": 440,
                    "end": 448
                  },
                  "start": 439,
                  "end": 448
                },
                "init": null,
                "definite": false,
                "start": 439,
                "end": 448
              }
            ],
            "declare": false,
            "start": 435,
            "end": 449
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 465,
                  "end": 466
                },
                "prefix": true,
                "start": 458,
                "end": 466
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 471,
                "end": 479
              },
              "start": 458,
              "end": 479
            },
            "consequent": {
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
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 495,
                        "end": 496
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 500,
                              "end": 501
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 505,
                                  "end": 506
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 507,
                                  "end": 513
                                },
                                "optional": false,
                                "computed": false,
                                "start": 505,
                                "end": 513
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 516,
                                "end": 517
                              },
                              "start": 505,
                              "end": 517
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 520,
                              "end": 521
                            },
                            "start": 505,
                            "end": 521
                          },
                          "id": null,
                          "generator": false,
                          "start": 500,
                          "end": 521
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 523,
                              "end": 524
                            },
                            "right": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 527,
                              "end": 528
                            },
                            "start": 523,
                            "end": 528
                          }
                        ],
                        "optional": false,
                        "start": 499,
                        "end": 529
                      },
                      "definite": false,
                      "start": 495,
                      "end": 529
                    }
                  ],
                  "declare": false,
                  "start": 491,
                  "end": 530
                }
              ],
              "start": 481,
              "end": 536
            },
            "alternate": null,
            "start": 454,
            "end": 536
          }
        ],
        "start": 396,
        "end": 538
      },
      "expression": false,
      "start": 382,
      "end": 538
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "maybeNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 579,
                    "end": 585
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 588,
                    "end": 597
                  }
                ],
                "start": 579,
                "end": 597
              },
              "start": 577,
              "end": 597
            },
            "start": 566,
            "end": 597
          },
          "init": null,
          "definite": false,
          "start": 566,
          "end": 597
        }
      ],
      "declare": false,
      "start": 562,
      "end": 598
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
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
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "maybeNumber",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 618,
                    "end": 629
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 632,
                    "end": 633
                  },
                  "start": 618,
                  "end": 633
                },
                "directive": null,
                "start": 618,
                "end": 634
              }
            ],
            "start": 612,
            "end": 636
          },
          "expression": false,
          "start": 600,
          "end": 636
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 599,
        "end": 639
      },
      "directive": null,
      "start": 599,
      "end": 640
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
          "name": "maybeNumber",
          "optional": false,
          "typeAnnotation": null,
          "start": 641,
          "end": 652
        },
        "start": 641,
        "end": 654
      },
      "directive": null,
      "start": 641,
      "end": 655
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "maybeNumber",
          "optional": false,
          "typeAnnotation": null,
          "start": 660,
          "end": 671
        },
        "operator": "!==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 676,
          "end": 685
        },
        "start": 660,
        "end": 685
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "maybeNumber",
                "optional": false,
                "typeAnnotation": null,
                "start": 693,
                "end": 704
              },
              "start": 693,
              "end": 706
            },
            "directive": null,
            "start": 693,
            "end": 707
          }
        ],
        "start": 687,
        "end": 709
      },
      "alternate": null,
      "start": 656,
      "end": 709
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 721,
                    "end": 727
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 730,
                    "end": 739
                  }
                ],
                "start": 721,
                "end": 739
              },
              "start": 719,
              "end": 739
            },
            "start": 715,
            "end": 739
          },
          "init": null,
          "definite": false,
          "start": 715,
          "end": 739
        }
      ],
      "declare": false,
      "start": 711,
      "end": 740
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null,
          "start": 746,
          "end": 750
        },
        "prefix": true,
        "start": 745,
        "end": 750
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null,
                "start": 768,
                "end": 773
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "Test is not defined",
                  "raw": "'Test is not defined'",
                  "start": 774,
                  "end": 795
                }
              ],
              "start": 764,
              "end": 796
            },
            "start": 758,
            "end": 797
          }
        ],
        "start": 752,
        "end": 799
      },
      "alternate": null,
      "start": 741,
      "end": 799
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
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
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 813,
                      "end": 817
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "slice",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 818,
                      "end": 823
                    },
                    "optional": false,
                    "computed": false,
                    "start": 813,
                    "end": 823
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 824,
                      "end": 825
                    }
                  ],
                  "optional": false,
                  "start": 813,
                  "end": 826
                },
                "directive": null,
                "start": 813,
                "end": 827
              }
            ],
            "start": 807,
            "end": 841
          },
          "id": null,
          "generator": false,
          "start": 801,
          "end": 841
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 800,
        "end": 844
      },
      "directive": null,
      "start": 800,
      "end": 845
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 878,
        "end": 880
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 896,
                      "end": 902
                    },
                    "start": 894,
                    "end": 902
                  },
                  "start": 893,
                  "end": 902
                },
                "init": null,
                "definite": false,
                "start": 893,
                "end": 902
              }
            ],
            "declare": false,
            "start": 889,
            "end": 903
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
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
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 930,
                          "end": 931
                        },
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 934,
                          "end": 935
                        },
                        "start": 930,
                        "end": 935
                      },
                      "directive": null,
                      "start": 930,
                      "end": 936
                    }
                  ],
                  "start": 920,
                  "end": 942
                },
                "expression": false,
                "start": 909,
                "end": 942
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 908,
              "end": 945
            },
            "directive": null,
            "start": 908,
            "end": 946
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 951,
              "end": 952
            },
            "directive": null,
            "start": 951,
            "end": 953
          }
        ],
        "start": 883,
        "end": 955
      },
      "expression": false,
      "start": 869,
      "end": 955
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 966,
        "end": 968
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 984,
                      "end": 990
                    },
                    "start": 982,
                    "end": 990
                  },
                  "start": 981,
                  "end": 990
                },
                "init": null,
                "definite": false,
                "start": 981,
                "end": 990
              }
            ],
            "declare": false,
            "start": 977,
            "end": 991
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "FunctionExpression",
                "id": null,
                "generator": true,
                "async": false,
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
                        "type": "YieldExpression",
                        "delegate": false,
                        "argument": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1025,
                          "end": 1026
                        },
                        "start": 1019,
                        "end": 1026
                      },
                      "directive": null,
                      "start": 1019,
                      "end": 1027
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1036,
                          "end": 1037
                        },
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1040,
                          "end": 1041
                        },
                        "start": 1036,
                        "end": 1041
                      },
                      "directive": null,
                      "start": 1036,
                      "end": 1042
                    }
                  ],
                  "start": 1009,
                  "end": 1048
                },
                "expression": false,
                "start": 997,
                "end": 1048
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 996,
              "end": 1051
            },
            "directive": null,
            "start": 996,
            "end": 1052
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 1057,
              "end": 1058
            },
            "directive": null,
            "start": 1057,
            "end": 1059
          }
        ],
        "start": 971,
        "end": 1080
      },
      "expression": false,
      "start": 957,
      "end": 1080
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1091,
        "end": 1093
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1109,
                      "end": 1115
                    },
                    "start": 1107,
                    "end": 1115
                  },
                  "start": 1106,
                  "end": 1115
                },
                "init": null,
                "definite": false,
                "start": 1106,
                "end": 1115
              }
            ],
            "declare": false,
            "start": 1102,
            "end": 1116
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
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
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1149,
                          "end": 1150
                        },
                        "right": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1159,
                            "end": 1160
                          },
                          "start": 1153,
                          "end": 1160
                        },
                        "start": 1149,
                        "end": 1160
                      },
                      "directive": null,
                      "start": 1149,
                      "end": 1161
                    }
                  ],
                  "start": 1139,
                  "end": 1167
                },
                "expression": false,
                "start": 1122,
                "end": 1167
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1121,
              "end": 1170
            },
            "directive": null,
            "start": 1121,
            "end": 1171
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 1176,
              "end": 1177
            },
            "directive": null,
            "start": 1176,
            "end": 1178
          }
        ],
        "start": 1096,
        "end": 1199
      },
      "expression": false,
      "start": 1082,
      "end": 1199
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1199
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "getStringOrNumber",
    "start": 17,
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
    "value": ":",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 38,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 47,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 56,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 65,
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
    "value": "{",
    "start": 70,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 76,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "getStringOrNumber",
    "start": 84,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 109,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 112,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 113,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 122,
    "end": 125
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 126,
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
    "value": "let",
    "start": 146,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 152,
    "end": 153
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 154,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 165,
    "end": 166
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 179,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 188,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 215,
    "end": 216
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 218,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 227,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 232,
    "end": 233
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 238,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "getStringOrNumber",
    "start": 246,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ";",
    "start": 265,
    "end": 266
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 271,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 274,
    "end": 275
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 275,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 284,
    "end": 287
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 288,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 298,
    "end": 299
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 308,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 316,
    "end": 317
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 317,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 328,
    "end": 329
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 342,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 351,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 379,
    "end": 380
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 382,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 391,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 396,
    "end": 397
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 402,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "getStringOrNumber",
    "start": 410,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 429,
    "end": 430
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 435,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 442,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 448,
    "end": 449
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 454,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 457,
    "end": 458
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 458,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 467,
    "end": 470
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 471,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 481,
    "end": 482
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 491,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 502,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 507,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 522,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 525,
    "end": 526
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 537,
    "end": 538
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 562,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "maybeNumber",
    "start": 566,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 579,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 586,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 588,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 599,
    "end": 600
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 600,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 612,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "maybeNumber",
    "start": 618,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 630,
    "end": 631
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 639,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "maybeNumber",
    "start": 641,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 652,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 654,
    "end": 655
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 656,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 659,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "maybeNumber",
    "start": 660,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 672,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 676,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "maybeNumber",
    "start": 693,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 704,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 708,
    "end": 709
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 711,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 715,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 719,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 721,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 730,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 739,
    "end": 740
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 741,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 745,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 746,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 752,
    "end": 753
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 758,
    "end": 763
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 764,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 768,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 773,
    "end": 774
  },
  {
    "type": "String",
    "value": "'Test is not defined'",
    "start": 774,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 804,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 807,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 813,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 817,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "slice",
    "start": 818,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 823,
    "end": 824
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 840,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 844,
    "end": 845
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 869,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 878,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 883,
    "end": 884
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 889,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 894,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 896,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 908,
    "end": 909
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 909,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 920,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 930,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 932,
    "end": 933
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 935,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 942,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 945,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 951,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 954,
    "end": 955
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 957,
    "end": 965
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 966,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 968,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 971,
    "end": 972
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 977,
    "end": 980
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 982,
    "end": 983
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 984,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 990,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 996,
    "end": 997
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 997,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 1019,
    "end": 1024
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1082,
    "end": 1090
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 1091,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1102,
    "end": 1105
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1109,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1122,
    "end": 1127
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1128,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1153,
    "end": 1158
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1198,
    "end": 1199
  }
]
```
