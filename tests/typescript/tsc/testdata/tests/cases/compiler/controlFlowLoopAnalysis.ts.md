__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "cond",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 31,
                "end": 38
              },
              "start": 29,
              "end": 38
            },
            "start": 25,
            "end": 38
          },
          "init": null,
          "definite": false,
          "start": 25,
          "end": 38
        }
      ],
      "declare": false,
      "start": 21,
      "end": 39
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 50,
        "end": 53
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 57,
              "end": 63
            },
            "start": 55,
            "end": 63
          },
          "start": 54,
          "end": 63
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 66,
          "end": 72
        },
        "start": 64,
        "end": 72
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 82,
              "end": 83
            },
            "start": 75,
            "end": 84
          }
        ],
        "start": 73,
        "end": 86
      },
      "expression": false,
      "start": 41,
      "end": 86
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 97,
        "end": 102
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
                          "type": "TSNumberKeyword",
                          "start": 118,
                          "end": 124
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 127,
                          "end": 136
                        }
                      ],
                      "start": 118,
                      "end": 136
                    },
                    "start": 116,
                    "end": 136
                  },
                  "start": 115,
                  "end": 136
                },
                "init": null,
                "definite": false,
                "start": 115,
                "end": 136
              }
            ],
            "declare": false,
            "start": 111,
            "end": 137
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 149,
              "end": 153
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "WhileStatement",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 172,
                    "end": 176
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "WhileStatement",
                        "test": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cond",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 199,
                          "end": 203
                        },
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
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 223,
                                  "end": 224
                                },
                                "right": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "foo",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 227,
                                    "end": 230
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 231,
                                      "end": 232
                                    }
                                  ],
                                  "optional": false,
                                  "start": 227,
                                  "end": 233
                                },
                                "start": 223,
                                "end": 233
                              },
                              "directive": null,
                              "start": 223,
                              "end": 234
                            }
                          ],
                          "start": 205,
                          "end": 248
                        },
                        "start": 192,
                        "end": 248
                      }
                    ],
                    "start": 178,
                    "end": 258
                  },
                  "start": 165,
                  "end": 258
                },
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
                      "start": 267,
                      "end": 268
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 271,
                      "end": 272
                    },
                    "start": 267,
                    "end": 272
                  },
                  "directive": null,
                  "start": 267,
                  "end": 273
                }
              ],
              "start": 155,
              "end": 279
            },
            "start": 142,
            "end": 279
          }
        ],
        "start": 105,
        "end": 281
      },
      "expression": false,
      "start": 88,
      "end": 281
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 313,
        "end": 318
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
                          "type": "TSNumberKeyword",
                          "start": 334,
                          "end": 340
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 343,
                          "end": 352
                        }
                      ],
                      "start": 334,
                      "end": 352
                    },
                    "start": 332,
                    "end": 352
                  },
                  "start": 331,
                  "end": 352
                },
                "init": null,
                "definite": false,
                "start": 331,
                "end": 352
              }
            ],
            "declare": false,
            "start": 327,
            "end": 353
          },
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
                "start": 358,
                "end": 359
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 362,
                "end": 363
              },
              "start": 358,
              "end": 363
            },
            "directive": null,
            "start": 358,
            "end": 364
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 376,
              "end": 380
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "WhileStatement",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 399,
                    "end": 403
                  },
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 419,
                            "end": 420
                          },
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 423,
                              "end": 426
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 427,
                                "end": 428
                              }
                            ],
                            "optional": false,
                            "start": 423,
                            "end": 429
                          },
                          "start": 419,
                          "end": 429
                        },
                        "directive": null,
                        "start": 419,
                        "end": 430
                      }
                    ],
                    "start": 405,
                    "end": 440
                  },
                  "start": 392,
                  "end": 440
                }
              ],
              "start": 382,
              "end": 446
            },
            "start": 369,
            "end": 446
          }
        ],
        "start": 321,
        "end": 448
      },
      "expression": false,
      "start": 304,
      "end": 448
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mapUntilCant",
        "optional": false,
        "typeAnnotation": null,
        "start": 480,
        "end": 492
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 493,
              "end": 494
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 493,
            "end": 494
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 496,
              "end": 497
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 496,
            "end": 497
          }
        ],
        "start": 492,
        "end": 498
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "values",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 512,
                  "end": 513
                },
                "typeArguments": null,
                "start": 512,
                "end": 513
              },
              "start": 512,
              "end": 515
            },
            "start": 510,
            "end": 515
          },
          "start": 504,
          "end": 515
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "canTake",
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 538,
                        "end": 539
                      },
                      "typeArguments": null,
                      "start": 538,
                      "end": 539
                    },
                    "start": 536,
                    "end": 539
                  },
                  "start": 531,
                  "end": 539
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "index",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 548,
                      "end": 554
                    },
                    "start": 546,
                    "end": 554
                  },
                  "start": 541,
                  "end": 554
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 559,
                  "end": 566
                },
                "start": 556,
                "end": 566
              },
              "start": 530,
              "end": 566
            },
            "start": 528,
            "end": 566
          },
          "start": 521,
          "end": 566
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "mapping",
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 589,
                        "end": 590
                      },
                      "typeArguments": null,
                      "start": 589,
                      "end": 590
                    },
                    "start": 587,
                    "end": 590
                  },
                  "start": 582,
                  "end": 590
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "index",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 599,
                      "end": 605
                    },
                    "start": 597,
                    "end": 605
                  },
                  "start": 592,
                  "end": 605
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 610,
                    "end": 611
                  },
                  "typeArguments": null,
                  "start": 610,
                  "end": 611
                },
                "start": 607,
                "end": 611
              },
              "start": 581,
              "end": 611
            },
            "start": 579,
            "end": 611
          },
          "start": 572,
          "end": 611
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 615,
              "end": 616
            },
            "typeArguments": null,
            "start": 615,
            "end": 616
          },
          "start": 615,
          "end": 618
        },
        "start": 613,
        "end": 618
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
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 637,
                          "end": 638
                        },
                        "typeArguments": null,
                        "start": 637,
                        "end": 638
                      },
                      "start": 637,
                      "end": 640
                    },
                    "start": 635,
                    "end": 640
                  },
                  "start": 629,
                  "end": 640
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 643,
                  "end": 645
                },
                "definite": false,
                "start": 629,
                "end": 645
              }
            ],
            "declare": false,
            "start": 625,
            "end": 646
          },
          {
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "index",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 660,
                    "end": 665
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 668,
                    "end": 669
                  },
                  "definite": false,
                  "start": 660,
                  "end": 669
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 671,
                    "end": 677
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "values",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 680,
                      "end": 686
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 687,
                      "end": 693
                    },
                    "optional": false,
                    "computed": false,
                    "start": 680,
                    "end": 693
                  },
                  "definite": false,
                  "start": 671,
                  "end": 693
                }
              ],
              "declare": false,
              "start": 656,
              "end": 693
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": null,
                "start": 695,
                "end": 700
              },
              "operator": "<",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 703,
                "end": 709
              },
              "start": 695,
              "end": 709
            },
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": null,
                "start": 711,
                "end": 716
              },
              "start": 711,
              "end": 718
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
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 734,
                        "end": 739
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "values",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 742,
                          "end": 748
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "index",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 749,
                          "end": 754
                        },
                        "optional": false,
                        "computed": true,
                        "start": 742,
                        "end": 755
                      },
                      "definite": false,
                      "start": 734,
                      "end": 755
                    }
                  ],
                  "declare": false,
                  "start": 730,
                  "end": 756
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "canTake",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 769,
                      "end": 776
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 777,
                        "end": 782
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 784,
                        "end": 789
                      }
                    ],
                    "optional": false,
                    "start": 769,
                    "end": 790
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
                              "name": "result",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 806,
                              "end": 812
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "push",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 813,
                              "end": 817
                            },
                            "optional": false,
                            "computed": false,
                            "start": 806,
                            "end": 817
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "mapping",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 818,
                                "end": 825
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 826,
                                  "end": 831
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "index",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 833,
                                  "end": 838
                                }
                              ],
                              "optional": false,
                              "start": 818,
                              "end": 839
                            }
                          ],
                          "optional": false,
                          "start": 806,
                          "end": 840
                        },
                        "directive": null,
                        "start": 806,
                        "end": 841
                      }
                    ],
                    "start": 792,
                    "end": 851
                  },
                  "alternate": {
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
                          "start": 878,
                          "end": 884
                        },
                        "start": 871,
                        "end": 885
                      }
                    ],
                    "start": 857,
                    "end": 895
                  },
                  "start": 765,
                  "end": 895
                }
              ],
              "start": 720,
              "end": 901
            },
            "start": 651,
            "end": 901
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null,
              "start": 913,
              "end": 919
            },
            "start": 906,
            "end": 920
          }
        ],
        "start": 619,
        "end": 922
      },
      "expression": false,
      "start": 471,
      "end": 922
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 21,
  "end": 922
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 21,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 25,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 31,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 38,
    "end": 39
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 41,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 50,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 57,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 66,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 73,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 75,
    "end": 81
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 85,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 88,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 97,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "{",
    "start": 105,
    "end": 106
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 111,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 118,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 127,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 136,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 142,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 149,
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
    "value": "{",
    "start": 155,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 165,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 172,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 178,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 192,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 199,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 227,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "x",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 269,
    "end": 270
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 280,
    "end": 281
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 304,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "test2",
    "start": 313,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 321,
    "end": 322
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 327,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 334,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 343,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 360,
    "end": 361
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 363,
    "end": 364
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 369,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 376,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 382,
    "end": 383
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 392,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 399,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 423,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "}",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 447,
    "end": 448
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 471,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "mapUntilCant",
    "start": 480,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 492,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 504,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "canTake",
    "start": 521,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 531,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 536,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 541,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 548,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 556,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 559,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "mapping",
    "start": 572,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 581,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 582,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "index",
    "start": 592,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 599,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 607,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 613,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 619,
    "end": 620
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 625,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 629,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 635,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 645,
    "end": 646
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 651,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 655,
    "end": 656
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 656,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 660,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 666,
    "end": 667
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 671,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 680,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 686,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 687,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 695,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 701,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 703,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 709,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 711,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 716,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 720,
    "end": 721
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 730,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 734,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 740,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 742,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 749,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 755,
    "end": 756
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 765,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 768,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "canTake",
    "start": 769,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 776,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 777,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 782,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 784,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 792,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 806,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 812,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 813,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 817,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "mapping",
    "start": 818,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 825,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 826,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 831,
    "end": 832
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 833,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 840,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 850,
    "end": 851
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 852,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 857,
    "end": 858
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 871,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 878,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 894,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 900,
    "end": 901
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 906,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 913,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 921,
    "end": 922
  }
]
```
