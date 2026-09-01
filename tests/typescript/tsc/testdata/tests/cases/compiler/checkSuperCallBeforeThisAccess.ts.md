__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 15
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 18,
              "end": 19
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 14,
            "end": 20
          }
        ],
        "start": 8,
        "end": 22
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 22
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 30,
        "end": 32
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 41,
        "end": 42
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 49,
              "end": 60
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                      "type": "TSNumberKeyword",
                      "start": 64,
                      "end": 70
                    },
                    "start": 62,
                    "end": 70
                  },
                  "start": 61,
                  "end": 70
                }
              ],
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
                          "name": "a1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 86,
                          "end": 88
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 91,
                          "end": 95
                        },
                        "definite": false,
                        "start": 86,
                        "end": 95
                      }
                    ],
                    "declare": false,
                    "start": 82,
                    "end": 96
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
                          "name": "a2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 119,
                          "end": 121
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 124,
                            "end": 128
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 129,
                            "end": 130
                          },
                          "optional": false,
                          "computed": false,
                          "start": 124,
                          "end": 130
                        },
                        "definite": false,
                        "start": 119,
                        "end": 130
                      }
                    ],
                    "declare": false,
                    "start": 115,
                    "end": 131
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
                          "name": "a3",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 154,
                          "end": 156
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 159,
                            "end": 164
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 165,
                            "end": 166
                          },
                          "optional": false,
                          "computed": false,
                          "start": 159,
                          "end": 166
                        },
                        "definite": false,
                        "start": 154,
                        "end": 166
                      }
                    ],
                    "declare": false,
                    "start": 150,
                    "end": 167
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
                          "name": "a4",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 190,
                          "end": 192
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "ThisExpression",
                            "start": 201,
                            "end": 205
                          },
                          "id": null,
                          "generator": false,
                          "start": 195,
                          "end": 205
                        },
                        "definite": false,
                        "start": 190,
                        "end": 205
                      }
                    ],
                    "declare": false,
                    "start": 186,
                    "end": 206
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
                          "name": "a5",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 219,
                          "end": 221
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 230,
                              "end": 234
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 235,
                              "end": 236
                            },
                            "optional": false,
                            "computed": false,
                            "start": 230,
                            "end": 236
                          },
                          "id": null,
                          "generator": false,
                          "start": 224,
                          "end": 236
                        },
                        "definite": false,
                        "start": 219,
                        "end": 236
                      }
                    ],
                    "declare": false,
                    "start": 215,
                    "end": 237
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
                          "name": "a6",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 250,
                          "end": 252
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Super",
                              "start": 261,
                              "end": 266
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 267,
                              "end": 268
                            },
                            "optional": false,
                            "computed": false,
                            "start": 261,
                            "end": 268
                          },
                          "id": null,
                          "generator": false,
                          "start": 255,
                          "end": 268
                        },
                        "definite": false,
                        "start": 250,
                        "end": 268
                      }
                    ],
                    "declare": false,
                    "start": 246,
                    "end": 269
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "UnaryExpression",
                      "operator": "!",
                      "argument": {
                        "type": "UnaryExpression",
                        "operator": "!",
                        "argument": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 284,
                          "end": 288
                        },
                        "prefix": true,
                        "start": 283,
                        "end": 288
                      },
                      "prefix": true,
                      "start": 282,
                      "end": 288
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Super",
                              "start": 304,
                              "end": 309
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 304,
                            "end": 311
                          },
                          "directive": null,
                          "start": 304,
                          "end": 312
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
                                "name": "b1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 329,
                                "end": 331
                              },
                              "init": {
                                "type": "ThisExpression",
                                "start": 334,
                                "end": 338
                              },
                              "definite": false,
                              "start": 329,
                              "end": 338
                            }
                          ],
                          "declare": false,
                          "start": 325,
                          "end": 339
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
                                "name": "b2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 356,
                                "end": 358
                              },
                              "init": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 361,
                                  "end": 365
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 366,
                                  "end": 367
                                },
                                "optional": false,
                                "computed": false,
                                "start": 361,
                                "end": 367
                              },
                              "definite": false,
                              "start": 356,
                              "end": 367
                            }
                          ],
                          "declare": false,
                          "start": 352,
                          "end": 368
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
                                "name": "b3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 385,
                                "end": 387
                              },
                              "init": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Super",
                                  "start": 390,
                                  "end": 395
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 396,
                                  "end": 397
                                },
                                "optional": false,
                                "computed": false,
                                "start": 390,
                                "end": 397
                              },
                              "definite": false,
                              "start": 385,
                              "end": 397
                            }
                          ],
                          "declare": false,
                          "start": 381,
                          "end": 398
                        }
                      ],
                      "start": 290,
                      "end": 408
                    },
                    "alternate": {
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
                                "name": "c1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 440,
                                "end": 442
                              },
                              "init": {
                                "type": "ThisExpression",
                                "start": 445,
                                "end": 449
                              },
                              "definite": false,
                              "start": 440,
                              "end": 449
                            }
                          ],
                          "declare": false,
                          "start": 436,
                          "end": 450
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
                                "name": "c2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 477,
                                "end": 479
                              },
                              "init": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 482,
                                  "end": 486
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 487,
                                  "end": 488
                                },
                                "optional": false,
                                "computed": false,
                                "start": 482,
                                "end": 488
                              },
                              "definite": false,
                              "start": 477,
                              "end": 488
                            }
                          ],
                          "declare": false,
                          "start": 473,
                          "end": 489
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
                                "name": "c3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 516,
                                "end": 518
                              },
                              "init": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Super",
                                  "start": 521,
                                  "end": 526
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 527,
                                  "end": 528
                                },
                                "optional": false,
                                "computed": false,
                                "start": 521,
                                "end": 528
                              },
                              "definite": false,
                              "start": 516,
                              "end": 528
                            }
                          ],
                          "declare": false,
                          "start": 512,
                          "end": 529
                        }
                      ],
                      "start": 422,
                      "end": 549
                    },
                    "start": 278,
                    "end": 549
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "UnaryExpression",
                      "operator": "!",
                      "argument": {
                        "type": "UnaryExpression",
                        "operator": "!",
                        "argument": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 564,
                          "end": 568
                        },
                        "prefix": true,
                        "start": 563,
                        "end": 568
                      },
                      "prefix": true,
                      "start": 562,
                      "end": 568
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "SwitchStatement",
                          "discriminant": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 592,
                            "end": 593
                          },
                          "cases": [
                            {
                              "type": "SwitchCase",
                              "test": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 618,
                                "end": 619
                              },
                              "consequent": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Super",
                                      "start": 641,
                                      "end": 646
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "optional": false,
                                    "start": 641,
                                    "end": 648
                                  },
                                  "directive": null,
                                  "start": 641,
                                  "end": 649
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
                                        "name": "d1",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 674,
                                        "end": 676
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 679,
                                          "end": 683
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 684,
                                          "end": 685
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 679,
                                        "end": 685
                                      },
                                      "definite": false,
                                      "start": 674,
                                      "end": 685
                                    }
                                  ],
                                  "declare": false,
                                  "start": 670,
                                  "end": 686
                                }
                              ],
                              "start": 613,
                              "end": 686
                            },
                            {
                              "type": "SwitchCase",
                              "test": {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2",
                                "start": 708,
                                "end": 709
                              },
                              "consequent": [
                                {
                                  "type": "VariableDeclaration",
                                  "kind": "let",
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "id": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "d2",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 735,
                                        "end": 737
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 740,
                                          "end": 744
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 745,
                                          "end": 746
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 740,
                                        "end": 746
                                      },
                                      "definite": false,
                                      "start": 735,
                                      "end": 746
                                    }
                                  ],
                                  "declare": false,
                                  "start": 731,
                                  "end": 747
                                }
                              ],
                              "start": 703,
                              "end": 747
                            },
                            {
                              "type": "SwitchCase",
                              "test": null,
                              "consequent": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Super",
                                      "start": 803,
                                      "end": 808
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "optional": false,
                                    "start": 803,
                                    "end": 810
                                  },
                                  "directive": null,
                                  "start": 803,
                                  "end": 811
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
                                        "name": "d3",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 836,
                                        "end": 838
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 841,
                                          "end": 845
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 846,
                                          "end": 847
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 841,
                                        "end": 847
                                      },
                                      "definite": false,
                                      "start": 836,
                                      "end": 847
                                    }
                                  ],
                                  "declare": false,
                                  "start": 832,
                                  "end": 848
                                }
                              ],
                              "start": 774,
                              "end": 848
                            }
                          ],
                          "start": 584,
                          "end": 862
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
                                "name": "d4",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 879,
                                "end": 881
                              },
                              "init": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 884,
                                  "end": 888
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 889,
                                  "end": 890
                                },
                                "optional": false,
                                "computed": false,
                                "start": 884,
                                "end": 890
                              },
                              "definite": false,
                              "start": 879,
                              "end": 890
                            }
                          ],
                          "declare": false,
                          "start": 875,
                          "end": 891
                        }
                      ],
                      "start": 570,
                      "end": 901
                    },
                    "alternate": null,
                    "start": 558,
                    "end": 901
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "UnaryExpression",
                      "operator": "!",
                      "argument": {
                        "type": "UnaryExpression",
                        "operator": "!",
                        "argument": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 916,
                          "end": 920
                        },
                        "prefix": true,
                        "start": 915,
                        "end": 920
                      },
                      "prefix": true,
                      "start": 914,
                      "end": 920
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
                                "name": "e1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 940,
                                "end": 942
                              },
                              "init": {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "w",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 947,
                                      "end": 948
                                    },
                                    "value": {
                                      "type": "ConditionalExpression",
                                      "test": {
                                        "type": "UnaryExpression",
                                        "operator": "!",
                                        "argument": {
                                          "type": "UnaryExpression",
                                          "operator": "!",
                                          "argument": {
                                            "type": "Literal",
                                            "value": true,
                                            "raw": "true",
                                            "start": 952,
                                            "end": 956
                                          },
                                          "prefix": true,
                                          "start": 951,
                                          "end": 956
                                        },
                                        "prefix": true,
                                        "start": 950,
                                        "end": 956
                                      },
                                      "consequent": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "Super",
                                          "start": 959,
                                          "end": 964
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 959,
                                        "end": 966
                                      },
                                      "alternate": {
                                        "type": "Literal",
                                        "value": 0,
                                        "raw": "0",
                                        "start": 969,
                                        "end": 970
                                      },
                                      "start": 950,
                                      "end": 970
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 947,
                                    "end": 970
                                  }
                                ],
                                "start": 945,
                                "end": 972
                              },
                              "definite": false,
                              "start": 940,
                              "end": 972
                            }
                          ],
                          "declare": false,
                          "start": 936,
                          "end": 973
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
                                "name": "e2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 990,
                                "end": 992
                              },
                              "init": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 995,
                                  "end": 999
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1000,
                                  "end": 1001
                                },
                                "optional": false,
                                "computed": false,
                                "start": 995,
                                "end": 1001
                              },
                              "definite": false,
                              "start": 990,
                              "end": 1001
                            }
                          ],
                          "declare": false,
                          "start": 986,
                          "end": 1002
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
                                "name": "e3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1029,
                                "end": 1031
                              },
                              "init": {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "w",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1036,
                                      "end": 1037
                                    },
                                    "value": {
                                      "type": "ConditionalExpression",
                                      "test": {
                                        "type": "UnaryExpression",
                                        "operator": "!",
                                        "argument": {
                                          "type": "UnaryExpression",
                                          "operator": "!",
                                          "argument": {
                                            "type": "Literal",
                                            "value": true,
                                            "raw": "true",
                                            "start": 1041,
                                            "end": 1045
                                          },
                                          "prefix": true,
                                          "start": 1040,
                                          "end": 1045
                                        },
                                        "prefix": true,
                                        "start": 1039,
                                        "end": 1045
                                      },
                                      "consequent": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "Super",
                                          "start": 1048,
                                          "end": 1053
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 1048,
                                        "end": 1055
                                      },
                                      "alternate": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "Super",
                                          "start": 1058,
                                          "end": 1063
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 1058,
                                        "end": 1065
                                      },
                                      "start": 1039,
                                      "end": 1065
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 1036,
                                    "end": 1065
                                  }
                                ],
                                "start": 1034,
                                "end": 1067
                              },
                              "definite": false,
                              "start": 1029,
                              "end": 1067
                            }
                          ],
                          "declare": false,
                          "start": 1025,
                          "end": 1068
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
                                "name": "e4",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1085,
                                "end": 1087
                              },
                              "init": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1090,
                                  "end": 1094
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1095,
                                  "end": 1096
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1090,
                                "end": 1096
                              },
                              "definite": false,
                              "start": 1085,
                              "end": 1096
                            }
                          ],
                          "declare": false,
                          "start": 1081,
                          "end": 1097
                        }
                      ],
                      "start": 922,
                      "end": 1107
                    },
                    "alternate": null,
                    "start": 910,
                    "end": 1107
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
                          "name": "f1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1120,
                          "end": 1122
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 1125,
                          "end": 1129
                        },
                        "definite": false,
                        "start": 1120,
                        "end": 1129
                      }
                    ],
                    "declare": false,
                    "start": 1116,
                    "end": 1130
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
                          "name": "f2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1153,
                          "end": 1155
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 1158,
                            "end": 1162
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1163,
                            "end": 1164
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1158,
                          "end": 1164
                        },
                        "definite": false,
                        "start": 1153,
                        "end": 1164
                      }
                    ],
                    "declare": false,
                    "start": 1149,
                    "end": 1165
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
                          "name": "f3",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1188,
                          "end": 1190
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 1193,
                            "end": 1198
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1199,
                            "end": 1200
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1193,
                          "end": 1200
                        },
                        "definite": false,
                        "start": 1188,
                        "end": 1200
                      }
                    ],
                    "declare": false,
                    "start": 1184,
                    "end": 1201
                  }
                ],
                "start": 72,
                "end": 1217
              },
              "expression": false,
              "start": 60,
              "end": 1217
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 49,
            "end": 1217
          }
        ],
        "start": 43,
        "end": 1219
      },
      "abstract": false,
      "declare": false,
      "start": 24,
      "end": 1219
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 1256,
          "end": 1259
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 1266,
                "end": 1277
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
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
                        "type": "TSNumberKeyword",
                        "start": 1285,
                        "end": 1291
                      },
                      "start": 1283,
                      "end": 1291
                    },
                    "start": 1278,
                    "end": 1291
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 1293,
                  "end": 1300
                },
                "expression": false,
                "start": 1277,
                "end": 1300
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1266,
              "end": 1300
            }
          ],
          "start": 1260,
          "end": 1302
        },
        "abstract": false,
        "declare": false,
        "start": 1250,
        "end": 1302
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1243,
      "end": 1302
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "BarCorrectlyFails",
          "optional": false,
          "typeAnnotation": null,
          "start": 1317,
          "end": 1334
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 1343,
          "end": 1346
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 1353,
                "end": 1364
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "something",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1376,
                        "end": 1383
                      },
                      "start": 1374,
                      "end": 1383
                    },
                    "start": 1365,
                    "end": 1383
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "UnaryExpression",
                        "operator": "!",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "something",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1400,
                          "end": 1409
                        },
                        "prefix": true,
                        "start": 1399,
                        "end": 1409
                      },
                      "consequent": {
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
                                  "start": 1431,
                                  "end": 1436
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 1439,
                                      "end": 1443
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "bar",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1444,
                                      "end": 1447
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1439,
                                    "end": 1447
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "optional": false,
                                  "start": 1439,
                                  "end": 1449
                                },
                                "definite": false,
                                "start": 1431,
                                "end": 1449
                              }
                            ],
                            "declare": false,
                            "start": 1425,
                            "end": 1450
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Super",
                                "start": 1473,
                                "end": 1478
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1479,
                                  "end": 1484
                                }
                              ],
                              "optional": false,
                              "start": 1473,
                              "end": 1485
                            },
                            "directive": null,
                            "start": 1473,
                            "end": 1486
                          }
                        ],
                        "start": 1411,
                        "end": 1496
                      },
                      "alternate": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Super",
                                "start": 1524,
                                "end": 1529
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": 1337,
                                  "raw": "1337",
                                  "start": 1530,
                                  "end": 1534
                                }
                              ],
                              "optional": false,
                              "start": 1524,
                              "end": 1535
                            },
                            "directive": null,
                            "start": 1524,
                            "end": 1536
                          }
                        ],
                        "start": 1510,
                        "end": 1546
                      },
                      "start": 1395,
                      "end": 1546
                    }
                  ],
                  "start": 1385,
                  "end": 1552
                },
                "expression": false,
                "start": 1364,
                "end": 1552
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1353,
              "end": 1552
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 1557,
                "end": 1560
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1564,
                    "end": 1570
                  },
                  "start": 1562,
                  "end": 1570
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 1580,
                        "end": 1581
                      },
                      "start": 1573,
                      "end": 1582
                    }
                  ],
                  "start": 1571,
                  "end": 1584
                },
                "expression": false,
                "start": 1560,
                "end": 1584
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1557,
              "end": 1584
            }
          ],
          "start": 1347,
          "end": 1586
        },
        "abstract": false,
        "declare": false,
        "start": 1311,
        "end": 1586
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1304,
      "end": 1586
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "BarIncorrectlyWorks",
          "optional": false,
          "typeAnnotation": null,
          "start": 1601,
          "end": 1620
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 1629,
          "end": 1632
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 1639,
                "end": 1650
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "something",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1662,
                        "end": 1669
                      },
                      "start": 1660,
                      "end": 1669
                    },
                    "start": 1651,
                    "end": 1669
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "something",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1685,
                        "end": 1694
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Super",
                                "start": 1710,
                                "end": 1715
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": 1337,
                                  "raw": "1337",
                                  "start": 1716,
                                  "end": 1720
                                }
                              ],
                              "optional": false,
                              "start": 1710,
                              "end": 1721
                            },
                            "directive": null,
                            "start": 1710,
                            "end": 1722
                          }
                        ],
                        "start": 1696,
                        "end": 1732
                      },
                      "alternate": {
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
                                  "start": 1766,
                                  "end": 1771
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 1774,
                                      "end": 1778
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "bar",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1779,
                                      "end": 1782
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1774,
                                    "end": 1782
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "optional": false,
                                  "start": 1774,
                                  "end": 1784
                                },
                                "definite": false,
                                "start": 1766,
                                "end": 1784
                              }
                            ],
                            "declare": false,
                            "start": 1760,
                            "end": 1785
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Super",
                                "start": 1808,
                                "end": 1813
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1814,
                                  "end": 1819
                                }
                              ],
                              "optional": false,
                              "start": 1808,
                              "end": 1820
                            },
                            "directive": null,
                            "start": 1808,
                            "end": 1821
                          }
                        ],
                        "start": 1746,
                        "end": 1831
                      },
                      "start": 1681,
                      "end": 1831
                    }
                  ],
                  "start": 1671,
                  "end": 1837
                },
                "expression": false,
                "start": 1650,
                "end": 1837
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1639,
              "end": 1837
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 1842,
                "end": 1845
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1849,
                    "end": 1855
                  },
                  "start": 1847,
                  "end": 1855
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 1865,
                        "end": 1866
                      },
                      "start": 1858,
                      "end": 1867
                    }
                  ],
                  "start": 1856,
                  "end": 1869
                },
                "expression": false,
                "start": 1845,
                "end": 1869
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1842,
              "end": 1869
            }
          ],
          "start": 1633,
          "end": 1871
        },
        "abstract": false,
        "declare": false,
        "start": 1595,
        "end": 1871
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1588,
      "end": 1871
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1871
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 16,
    "end": 17
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 21,
    "end": 22
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 24,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 30,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 33,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 49,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 64,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 72,
    "end": 73
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 82,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 86,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 89,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 91,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 115,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 119,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 122,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 124,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 130,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 150,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 154,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 157,
    "end": 158
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 159,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 186,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 190,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 198,
    "end": 200
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 201,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 205,
    "end": 206
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 215,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 219,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 227,
    "end": 229
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 230,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 236,
    "end": 237
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 246,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 250,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 258,
    "end": 260
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 261,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 268,
    "end": 269
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 278,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 283,
    "end": 284
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 284,
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
    "value": "super",
    "start": 304,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 311,
    "end": 312
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 325,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 329,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 332,
    "end": 333
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 334,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 338,
    "end": 339
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 352,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 356,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 359,
    "end": 360
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 361,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 367,
    "end": 368
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 381,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 385,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 388,
    "end": 389
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 390,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 396,
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
    "type": "Keyword",
    "value": "let",
    "start": 436,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 440,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 443,
    "end": 444
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 445,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 449,
    "end": 450
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 473,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 477,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 480,
    "end": 481
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 482,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 488,
    "end": 489
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 512,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 516,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 519,
    "end": 520
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 521,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 526,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 548,
    "end": 549
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 558,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 563,
    "end": 564
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 564,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 570,
    "end": 571
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 584,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "n",
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
    "type": "Keyword",
    "value": "case",
    "start": 613,
    "end": 617
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 619,
    "end": 620
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 641,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 648,
    "end": 649
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 670,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 674,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 677,
    "end": 678
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 679,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 685,
    "end": 686
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 703,
    "end": 707
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 709,
    "end": 710
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 731,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 735,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 738,
    "end": 739
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 740,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 744,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 746,
    "end": 747
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 774,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 781,
    "end": 782
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 803,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 810,
    "end": 811
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 832,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "d3",
    "start": 836,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 839,
    "end": 840
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 841,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 845,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 861,
    "end": 862
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 875,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "d4",
    "start": 879,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 882,
    "end": 883
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 884,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 888,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 890,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 900,
    "end": 901
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 910,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 913,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 914,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 915,
    "end": 916
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 916,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 920,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 922,
    "end": 923
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 936,
    "end": 939
  },
  {
    "type": "Identifier",
    "value": "e1",
    "start": 940,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 945,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 951,
    "end": 952
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 952,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 957,
    "end": 958
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 959,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 965,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 967,
    "end": 968
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 971,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 972,
    "end": 973
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 986,
    "end": 989
  },
  {
    "type": "Identifier",
    "value": "e2",
    "start": 990,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 993,
    "end": 994
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 995,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1025,
    "end": 1028
  },
  {
    "type": "Identifier",
    "value": "e3",
    "start": 1029,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1041,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1048,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1058,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1081,
    "end": 1084
  },
  {
    "type": "Identifier",
    "value": "e4",
    "start": 1085,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1090,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1116,
    "end": 1119
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1120,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1125,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1149,
    "end": 1152
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 1153,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1158,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1184,
    "end": 1187
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 1188,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1193,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1243,
    "end": 1249
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1250,
    "end": 1255
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1256,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1266,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1278,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1285,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1304,
    "end": 1310
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1311,
    "end": 1316
  },
  {
    "type": "Identifier",
    "value": "BarCorrectlyFails",
    "start": 1317,
    "end": 1334
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1335,
    "end": 1342
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1343,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1353,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Identifier",
    "value": "something",
    "start": 1365,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1376,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1395,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Identifier",
    "value": "something",
    "start": 1400,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1425,
    "end": 1430
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1431,
    "end": 1436
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1439,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1444,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1473,
    "end": 1478
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1479,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1505,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1524,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Numeric",
    "value": "1337",
    "start": 1530,
    "end": 1534
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1557,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1564,
    "end": 1570
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1573,
    "end": 1579
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1588,
    "end": 1594
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1595,
    "end": 1600
  },
  {
    "type": "Identifier",
    "value": "BarIncorrectlyWorks",
    "start": 1601,
    "end": 1620
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1621,
    "end": 1628
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1629,
    "end": 1632
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1639,
    "end": 1650
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Identifier",
    "value": "something",
    "start": 1651,
    "end": 1660
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1662,
    "end": 1669
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1671,
    "end": 1672
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1681,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1684,
    "end": 1685
  },
  {
    "type": "Identifier",
    "value": "something",
    "start": 1685,
    "end": 1694
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1710,
    "end": 1715
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1715,
    "end": 1716
  },
  {
    "type": "Numeric",
    "value": "1337",
    "start": 1716,
    "end": 1720
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1721,
    "end": 1722
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1731,
    "end": 1732
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1741,
    "end": 1745
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1760,
    "end": 1765
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1766,
    "end": 1771
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1774,
    "end": 1778
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1778,
    "end": 1779
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1779,
    "end": 1782
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1783,
    "end": 1784
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1784,
    "end": 1785
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 1808,
    "end": 1813
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1814,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1820,
    "end": 1821
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1830,
    "end": 1831
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1842,
    "end": 1845
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1849,
    "end": 1855
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1856,
    "end": 1857
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1858,
    "end": 1864
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1865,
    "end": 1866
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1866,
    "end": 1867
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1868,
    "end": 1869
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1870,
    "end": 1871
  }
]
```
