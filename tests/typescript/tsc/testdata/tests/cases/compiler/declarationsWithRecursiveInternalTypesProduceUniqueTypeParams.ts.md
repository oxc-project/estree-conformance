__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Key",
          "optional": false,
          "typeAnnotation": null,
          "start": 307,
          "end": 310
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 311,
                "end": 312
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 311,
              "end": 312
            }
          ],
          "start": 310,
          "end": 313
        },
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 322,
              "end": 323
            },
            "typeArguments": null,
            "start": 322,
            "end": 323
          },
          "start": 316,
          "end": 323
        },
        "declare": false,
        "start": 302,
        "end": 324
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 295,
      "end": 324
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Value",
          "optional": false,
          "typeAnnotation": null,
          "start": 337,
          "end": 342
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 343,
                "end": 344
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 353,
                  "end": 356
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
                        "start": 357,
                        "end": 358
                      },
                      "typeArguments": null,
                      "start": 357,
                      "end": 358
                    }
                  ],
                  "start": 356,
                  "end": 359
                },
                "start": 353,
                "end": 359
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 343,
              "end": 359
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 361,
                "end": 362
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 361,
              "end": 362
            }
          ],
          "start": 342,
          "end": 363
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 366,
              "end": 367
            },
            "typeArguments": null,
            "start": 366,
            "end": 367
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 368,
              "end": 369
            },
            "typeArguments": null,
            "start": 368,
            "end": 369
          },
          "start": 366,
          "end": 370
        },
        "declare": false,
        "start": 332,
        "end": 371
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 325,
      "end": 371
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "updateIfChanged",
              "optional": false,
              "typeAnnotation": null,
              "start": 385,
              "end": 400
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
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
                      "start": 404,
                      "end": 405
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 404,
                    "end": 405
                  }
                ],
                "start": 403,
                "end": 406
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
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
                        "start": 410,
                        "end": 411
                      },
                      "typeArguments": null,
                      "start": 410,
                      "end": 411
                    },
                    "start": 408,
                    "end": 411
                  },
                  "start": 407,
                  "end": 411
                }
              ],
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
                          "name": "reduce",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 428,
                          "end": 434
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "name": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 438,
                                  "end": 439
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 438,
                                "end": 439
                              }
                            ],
                            "start": 437,
                            "end": 440
                          },
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "u",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 444,
                                    "end": 445
                                  },
                                  "typeArguments": null,
                                  "start": 444,
                                  "end": 445
                                },
                                "start": 442,
                                "end": 445
                              },
                              "start": 441,
                              "end": 445
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "update",
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
                                      "name": "u",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "U",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 459,
                                            "end": 460
                                          },
                                          "typeArguments": null,
                                          "start": 459,
                                          "end": 460
                                        },
                                        "start": 457,
                                        "end": 460
                                      },
                                      "start": 456,
                                      "end": 460
                                    }
                                  ],
                                  "returnType": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 465,
                                        "end": 466
                                      },
                                      "typeArguments": null,
                                      "start": 465,
                                      "end": 466
                                    },
                                    "start": 462,
                                    "end": 466
                                  },
                                  "start": 455,
                                  "end": 466
                                },
                                "start": 453,
                                "end": 466
                              },
                              "start": 447,
                              "end": 466
                            }
                          ],
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
                                      "name": "set",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 487,
                                      "end": 490
                                    },
                                    "init": {
                                      "type": "ArrowFunctionExpression",
                                      "expression": true,
                                      "async": false,
                                      "typeParameters": null,
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "newU",
                                          "optional": false,
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "U",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 500,
                                                "end": 501
                                              },
                                              "typeArguments": null,
                                              "start": 500,
                                              "end": 501
                                            },
                                            "start": 498,
                                            "end": 501
                                          },
                                          "start": 494,
                                          "end": 501
                                        }
                                      ],
                                      "returnType": null,
                                      "body": {
                                        "type": "ConditionalExpression",
                                        "test": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Object",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 506,
                                              "end": 512
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "is",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 513,
                                              "end": 515
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 506,
                                            "end": 515
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "u",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 516,
                                              "end": 517
                                            },
                                            {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "newU",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 519,
                                              "end": 523
                                            }
                                          ],
                                          "optional": false,
                                          "start": 506,
                                          "end": 524
                                        },
                                        "consequent": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "t",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 527,
                                          "end": 528
                                        },
                                        "alternate": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "update",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 531,
                                            "end": 537
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "newU",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 538,
                                              "end": 542
                                            }
                                          ],
                                          "optional": false,
                                          "start": 531,
                                          "end": 543
                                        },
                                        "start": 506,
                                        "end": 543
                                      },
                                      "id": null,
                                      "generator": false,
                                      "start": 493,
                                      "end": 543
                                    },
                                    "definite": false,
                                    "start": 487,
                                    "end": 543
                                  }
                                ],
                                "declare": false,
                                "start": 481,
                                "end": 544
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
                                      "name": "Object",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 560,
                                      "end": 566
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "assign",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 567,
                                      "end": 573
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 560,
                                    "end": 573
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "ArrowFunctionExpression",
                                      "expression": true,
                                      "async": false,
                                      "typeParameters": {
                                        "type": "TSTypeParameterDeclaration",
                                        "params": [
                                          {
                                            "type": "TSTypeParameter",
                                            "name": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "K",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 588,
                                              "end": 589
                                            },
                                            "constraint": {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "Key",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 598,
                                                "end": 601
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
                                                      "start": 602,
                                                      "end": 603
                                                    },
                                                    "typeArguments": null,
                                                    "start": 602,
                                                    "end": 603
                                                  }
                                                ],
                                                "start": 601,
                                                "end": 604
                                              },
                                              "start": 598,
                                              "end": 604
                                            },
                                            "default": null,
                                            "in": false,
                                            "out": false,
                                            "const": false,
                                            "start": 588,
                                            "end": 604
                                          }
                                        ],
                                        "start": 587,
                                        "end": 605
                                      },
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "key",
                                          "optional": false,
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "K",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 611,
                                                "end": 612
                                              },
                                              "typeArguments": null,
                                              "start": 611,
                                              "end": 612
                                            },
                                            "start": 609,
                                            "end": 612
                                          },
                                          "start": 606,
                                          "end": 612
                                        }
                                      ],
                                      "returnType": null,
                                      "body": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "reduce",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 633,
                                          "end": 639
                                        },
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "params": [
                                            {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "Value",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 640,
                                                "end": 645
                                              },
                                              "typeArguments": {
                                                "type": "TSTypeParameterInstantiation",
                                                "params": [
                                                  {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "K",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 646,
                                                      "end": 647
                                                    },
                                                    "typeArguments": null,
                                                    "start": 646,
                                                    "end": 647
                                                  },
                                                  {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "U",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 649,
                                                      "end": 650
                                                    },
                                                    "typeArguments": null,
                                                    "start": 649,
                                                    "end": 650
                                                  }
                                                ],
                                                "start": 645,
                                                "end": 651
                                              },
                                              "start": 640,
                                              "end": 651
                                            }
                                          ],
                                          "start": 639,
                                          "end": 652
                                        },
                                        "arguments": [
                                          {
                                            "type": "TSAsExpression",
                                            "expression": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "u",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 653,
                                                "end": 654
                                              },
                                              "property": {
                                                "type": "TSAsExpression",
                                                "expression": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "key",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 655,
                                                  "end": 658
                                                },
                                                "typeAnnotation": {
                                                  "type": "TSTypeOperator",
                                                  "operator": "keyof",
                                                  "typeAnnotation": {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "U",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 668,
                                                      "end": 669
                                                    },
                                                    "typeArguments": null,
                                                    "start": 668,
                                                    "end": 669
                                                  },
                                                  "start": 662,
                                                  "end": 669
                                                },
                                                "start": 655,
                                                "end": 669
                                              },
                                              "optional": false,
                                              "computed": true,
                                              "start": 653,
                                              "end": 670
                                            },
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "Value",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 674,
                                                "end": 679
                                              },
                                              "typeArguments": {
                                                "type": "TSTypeParameterInstantiation",
                                                "params": [
                                                  {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "K",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 680,
                                                      "end": 681
                                                    },
                                                    "typeArguments": null,
                                                    "start": 680,
                                                    "end": 681
                                                  },
                                                  {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "U",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 683,
                                                      "end": 684
                                                    },
                                                    "typeArguments": null,
                                                    "start": 683,
                                                    "end": 684
                                                  }
                                                ],
                                                "start": 679,
                                                "end": 685
                                              },
                                              "start": 674,
                                              "end": 685
                                            },
                                            "start": 653,
                                            "end": 685
                                          },
                                          {
                                            "type": "ArrowFunctionExpression",
                                            "expression": false,
                                            "async": false,
                                            "typeParameters": null,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "v",
                                                "optional": false,
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "typeAnnotation": {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "Value",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 691,
                                                      "end": 696
                                                    },
                                                    "typeArguments": {
                                                      "type": "TSTypeParameterInstantiation",
                                                      "params": [
                                                        {
                                                          "type": "TSTypeReference",
                                                          "typeName": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "K",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 697,
                                                            "end": 698
                                                          },
                                                          "typeArguments": null,
                                                          "start": 697,
                                                          "end": 698
                                                        },
                                                        {
                                                          "type": "TSTypeReference",
                                                          "typeName": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "U",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 700,
                                                            "end": 701
                                                          },
                                                          "typeArguments": null,
                                                          "start": 700,
                                                          "end": 701
                                                        }
                                                      ],
                                                      "start": 696,
                                                      "end": 702
                                                    },
                                                    "start": 691,
                                                    "end": 702
                                                  },
                                                  "start": 689,
                                                  "end": 702
                                                },
                                                "start": 688,
                                                "end": 702
                                              }
                                            ],
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
                                                      "name": "update",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 736,
                                                      "end": 742
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
                                                            "name": "Object",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 743,
                                                            "end": 749
                                                          },
                                                          "property": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "assign",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 750,
                                                            "end": 756
                                                          },
                                                          "optional": false,
                                                          "computed": false,
                                                          "start": 743,
                                                          "end": 756
                                                        },
                                                        "typeArguments": null,
                                                        "arguments": [
                                                          {
                                                            "type": "ConditionalExpression",
                                                            "test": {
                                                              "type": "CallExpression",
                                                              "callee": {
                                                                "type": "MemberExpression",
                                                                "object": {
                                                                  "type": "Identifier",
                                                                  "decorators": [],
                                                                  "name": "Array",
                                                                  "optional": false,
                                                                  "typeAnnotation": null,
                                                                  "start": 757,
                                                                  "end": 762
                                                                },
                                                                "property": {
                                                                  "type": "Identifier",
                                                                  "decorators": [],
                                                                  "name": "isArray",
                                                                  "optional": false,
                                                                  "typeAnnotation": null,
                                                                  "start": 763,
                                                                  "end": 770
                                                                },
                                                                "optional": false,
                                                                "computed": false,
                                                                "start": 757,
                                                                "end": 770
                                                              },
                                                              "typeArguments": null,
                                                              "arguments": [
                                                                {
                                                                  "type": "Identifier",
                                                                  "decorators": [],
                                                                  "name": "u",
                                                                  "optional": false,
                                                                  "typeAnnotation": null,
                                                                  "start": 771,
                                                                  "end": 772
                                                                }
                                                              ],
                                                              "optional": false,
                                                              "start": 757,
                                                              "end": 773
                                                            },
                                                            "consequent": {
                                                              "type": "ArrayExpression",
                                                              "elements": [],
                                                              "start": 776,
                                                              "end": 778
                                                            },
                                                            "alternate": {
                                                              "type": "ObjectExpression",
                                                              "properties": [],
                                                              "start": 781,
                                                              "end": 783
                                                            },
                                                            "start": 757,
                                                            "end": 783
                                                          },
                                                          {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "u",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 785,
                                                            "end": 786
                                                          },
                                                          {
                                                            "type": "ObjectExpression",
                                                            "properties": [
                                                              {
                                                                "type": "Property",
                                                                "kind": "init",
                                                                "key": {
                                                                  "type": "Identifier",
                                                                  "decorators": [],
                                                                  "name": "key",
                                                                  "optional": false,
                                                                  "typeAnnotation": null,
                                                                  "start": 791,
                                                                  "end": 794
                                                                },
                                                                "value": {
                                                                  "type": "Identifier",
                                                                  "decorators": [],
                                                                  "name": "v",
                                                                  "optional": false,
                                                                  "typeAnnotation": null,
                                                                  "start": 797,
                                                                  "end": 798
                                                                },
                                                                "method": false,
                                                                "shorthand": false,
                                                                "computed": true,
                                                                "optional": false,
                                                                "start": 790,
                                                                "end": 798
                                                              }
                                                            ],
                                                            "start": 788,
                                                            "end": 800
                                                          }
                                                        ],
                                                        "optional": false,
                                                        "start": 743,
                                                        "end": 801
                                                      }
                                                    ],
                                                    "optional": false,
                                                    "start": 736,
                                                    "end": 802
                                                  },
                                                  "start": 729,
                                                  "end": 803
                                                }
                                              ],
                                              "start": 707,
                                              "end": 821
                                            },
                                            "id": null,
                                            "generator": false,
                                            "start": 687,
                                            "end": 821
                                          }
                                        ],
                                        "optional": false,
                                        "start": 633,
                                        "end": 822
                                      },
                                      "id": null,
                                      "generator": false,
                                      "start": 587,
                                      "end": 822
                                    },
                                    {
                                      "type": "ObjectExpression",
                                      "properties": [
                                        {
                                          "type": "Property",
                                          "kind": "init",
                                          "key": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "map",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 838,
                                            "end": 841
                                          },
                                          "value": {
                                            "type": "ArrowFunctionExpression",
                                            "expression": true,
                                            "async": false,
                                            "typeParameters": null,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "updater",
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
                                                        "name": "u",
                                                        "optional": false,
                                                        "typeAnnotation": {
                                                          "type": "TSTypeAnnotation",
                                                          "typeAnnotation": {
                                                            "type": "TSTypeReference",
                                                            "typeName": {
                                                              "type": "Identifier",
                                                              "decorators": [],
                                                              "name": "U",
                                                              "optional": false,
                                                              "typeAnnotation": null,
                                                              "start": 857,
                                                              "end": 858
                                                            },
                                                            "typeArguments": null,
                                                            "start": 857,
                                                            "end": 858
                                                          },
                                                          "start": 855,
                                                          "end": 858
                                                        },
                                                        "start": 854,
                                                        "end": 858
                                                      }
                                                    ],
                                                    "returnType": {
                                                      "type": "TSTypeAnnotation",
                                                      "typeAnnotation": {
                                                        "type": "TSTypeReference",
                                                        "typeName": {
                                                          "type": "Identifier",
                                                          "decorators": [],
                                                          "name": "U",
                                                          "optional": false,
                                                          "typeAnnotation": null,
                                                          "start": 863,
                                                          "end": 864
                                                        },
                                                        "typeArguments": null,
                                                        "start": 863,
                                                        "end": 864
                                                      },
                                                      "start": 860,
                                                      "end": 864
                                                    },
                                                    "start": 853,
                                                    "end": 864
                                                  },
                                                  "start": 851,
                                                  "end": 864
                                                },
                                                "start": 844,
                                                "end": 864
                                              }
                                            ],
                                            "returnType": null,
                                            "body": {
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "set",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 869,
                                                "end": 872
                                              },
                                              "typeArguments": null,
                                              "arguments": [
                                                {
                                                  "type": "CallExpression",
                                                  "callee": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "updater",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 873,
                                                    "end": 880
                                                  },
                                                  "typeArguments": null,
                                                  "arguments": [
                                                    {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "u",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 881,
                                                      "end": 882
                                                    }
                                                  ],
                                                  "optional": false,
                                                  "start": 873,
                                                  "end": 883
                                                }
                                              ],
                                              "optional": false,
                                              "start": 869,
                                              "end": 884
                                            },
                                            "id": null,
                                            "generator": false,
                                            "start": 843,
                                            "end": 884
                                          },
                                          "method": false,
                                          "shorthand": false,
                                          "computed": false,
                                          "optional": false,
                                          "start": 838,
                                          "end": 884
                                        },
                                        {
                                          "type": "Property",
                                          "kind": "init",
                                          "key": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "set",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 886,
                                            "end": 889
                                          },
                                          "value": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "set",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 886,
                                            "end": 889
                                          },
                                          "method": false,
                                          "shorthand": true,
                                          "computed": false,
                                          "optional": false,
                                          "start": 886,
                                          "end": 889
                                        }
                                      ],
                                      "start": 836,
                                      "end": 891
                                    }
                                  ],
                                  "optional": false,
                                  "start": 560,
                                  "end": 892
                                },
                                "start": 553,
                                "end": 893
                              }
                            ],
                            "start": 471,
                            "end": 899
                          },
                          "id": null,
                          "generator": false,
                          "start": 437,
                          "end": 899
                        },
                        "definite": false,
                        "start": 428,
                        "end": 899
                      }
                    ],
                    "declare": false,
                    "start": 422,
                    "end": 900
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "reduce",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 912,
                        "end": 918
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
                              "start": 919,
                              "end": 920
                            },
                            "typeArguments": null,
                            "start": 919,
                            "end": 920
                          }
                        ],
                        "start": 918,
                        "end": 921
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 922,
                          "end": 923
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
                              "name": "t",
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
                                    "start": 929,
                                    "end": 930
                                  },
                                  "typeArguments": null,
                                  "start": 929,
                                  "end": 930
                                },
                                "start": 927,
                                "end": 930
                              },
                              "start": 926,
                              "end": 930
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "t",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 935,
                            "end": 936
                          },
                          "id": null,
                          "generator": false,
                          "start": 925,
                          "end": 936
                        }
                      ],
                      "optional": false,
                      "start": 912,
                      "end": 937
                    },
                    "start": 905,
                    "end": 938
                  }
                ],
                "start": 416,
                "end": 940
              },
              "id": null,
              "generator": false,
              "start": 403,
              "end": 940
            },
            "definite": false,
            "start": 385,
            "end": 940
          }
        ],
        "declare": false,
        "start": 379,
        "end": 941
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 372,
      "end": 941
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "testRecFun",
              "optional": false,
              "typeAnnotation": null,
              "start": 1026,
              "end": 1036
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
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
                      "start": 1040,
                      "end": 1041
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Object",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1050,
                        "end": 1056
                      },
                      "typeArguments": null,
                      "start": 1050,
                      "end": 1056
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1040,
                    "end": 1056
                  }
                ],
                "start": 1039,
                "end": 1057
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "parent",
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
                        "start": 1066,
                        "end": 1067
                      },
                      "typeArguments": null,
                      "start": 1066,
                      "end": 1067
                    },
                    "start": 1064,
                    "end": 1067
                  },
                  "start": 1058,
                  "end": 1067
                }
              ],
              "returnType": null,
              "body": {
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
                            "name": "result",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1095,
                            "end": 1101
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "parent",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1103,
                            "end": 1109
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1095,
                          "end": 1109
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "deeper",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1119,
                            "end": 1125
                          },
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1128,
                                    "end": 1129
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Object",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1138,
                                      "end": 1144
                                    },
                                    "typeArguments": null,
                                    "start": 1138,
                                    "end": 1144
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1128,
                                  "end": 1144
                                }
                              ],
                              "start": 1127,
                              "end": 1145
                            },
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "child",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1153,
                                      "end": 1154
                                    },
                                    "typeArguments": null,
                                    "start": 1153,
                                    "end": 1154
                                  },
                                  "start": 1151,
                                  "end": 1154
                                },
                                "start": 1146,
                                "end": 1154
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "testRecFun",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1171,
                                "end": 1181
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSIntersectionType",
                                    "types": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "T",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1182,
                                          "end": 1183
                                        },
                                        "typeArguments": null,
                                        "start": 1182,
                                        "end": 1183
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "U",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1186,
                                          "end": 1187
                                        },
                                        "typeArguments": null,
                                        "start": 1186,
                                        "end": 1187
                                      }
                                    ],
                                    "start": 1182,
                                    "end": 1187
                                  }
                                ],
                                "start": 1181,
                                "end": 1188
                              },
                              "arguments": [
                                {
                                  "type": "ObjectExpression",
                                  "properties": [
                                    {
                                      "type": "SpreadElement",
                                      "argument": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "parent",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1194,
                                        "end": 1200
                                      },
                                      "start": 1191,
                                      "end": 1200
                                    },
                                    {
                                      "type": "SpreadElement",
                                      "argument": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "child",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1205,
                                        "end": 1210
                                      },
                                      "start": 1202,
                                      "end": 1210
                                    }
                                  ],
                                  "start": 1189,
                                  "end": 1212
                                }
                              ],
                              "optional": false,
                              "start": 1171,
                              "end": 1213
                            },
                            "id": null,
                            "generator": false,
                            "start": 1127,
                            "end": 1213
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1119,
                          "end": 1213
                        }
                      ],
                      "start": 1085,
                      "end": 1219
                    },
                    "start": 1078,
                    "end": 1220
                  }
                ],
                "start": 1072,
                "end": 1222
              },
              "id": null,
              "generator": false,
              "start": 1039,
              "end": 1222
            },
            "definite": false,
            "start": 1026,
            "end": 1222
          }
        ],
        "declare": false,
        "start": 1020,
        "end": 1222
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1013,
      "end": 1222
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
            "name": "p1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1229,
            "end": 1231
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "testRecFun",
              "optional": false,
              "typeAnnotation": null,
              "start": 1234,
              "end": 1244
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
                      "name": "one",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1247,
                      "end": 1250
                    },
                    "value": {
                      "type": "Literal",
                      "value": "1",
                      "raw": "'1'",
                      "start": 1252,
                      "end": 1255
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1247,
                    "end": 1255
                  }
                ],
                "start": 1245,
                "end": 1257
              }
            ],
            "optional": false,
            "start": 1234,
            "end": 1258
          },
          "definite": false,
          "start": 1229,
          "end": 1258
        }
      ],
      "declare": false,
      "start": 1225,
      "end": 1258
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1264,
              "end": 1266
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null,
              "start": 1267,
              "end": 1273
            },
            "optional": false,
            "computed": false,
            "start": 1264,
            "end": 1273
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "one",
            "optional": false,
            "typeAnnotation": null,
            "start": 1274,
            "end": 1277
          },
          "optional": false,
          "computed": false,
          "start": 1264,
          "end": 1277
        },
        "prefix": true,
        "start": 1259,
        "end": 1277
      },
      "directive": null,
      "start": 1259,
      "end": 1278
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
            "name": "p2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1283,
            "end": 1285
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1288,
                "end": 1290
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "deeper",
                "optional": false,
                "typeAnnotation": null,
                "start": 1291,
                "end": 1297
              },
              "optional": false,
              "computed": false,
              "start": 1288,
              "end": 1297
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
                      "name": "two",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1300,
                      "end": 1303
                    },
                    "value": {
                      "type": "Literal",
                      "value": "2",
                      "raw": "'2'",
                      "start": 1305,
                      "end": 1308
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1300,
                    "end": 1308
                  }
                ],
                "start": 1298,
                "end": 1310
              }
            ],
            "optional": false,
            "start": 1288,
            "end": 1311
          },
          "definite": false,
          "start": 1283,
          "end": 1311
        }
      ],
      "declare": false,
      "start": 1279,
      "end": 1311
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1317,
              "end": 1319
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null,
              "start": 1320,
              "end": 1326
            },
            "optional": false,
            "computed": false,
            "start": 1317,
            "end": 1326
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "one",
            "optional": false,
            "typeAnnotation": null,
            "start": 1327,
            "end": 1330
          },
          "optional": false,
          "computed": false,
          "start": 1317,
          "end": 1330
        },
        "prefix": true,
        "start": 1312,
        "end": 1330
      },
      "directive": null,
      "start": 1312,
      "end": 1331
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1337,
              "end": 1339
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null,
              "start": 1340,
              "end": 1346
            },
            "optional": false,
            "computed": false,
            "start": 1337,
            "end": 1346
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "two",
            "optional": false,
            "typeAnnotation": null,
            "start": 1347,
            "end": 1350
          },
          "optional": false,
          "computed": false,
          "start": 1337,
          "end": 1350
        },
        "prefix": true,
        "start": 1332,
        "end": 1350
      },
      "directive": null,
      "start": 1332,
      "end": 1351
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
            "name": "p3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1356,
            "end": 1358
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1361,
                "end": 1363
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "deeper",
                "optional": false,
                "typeAnnotation": null,
                "start": 1364,
                "end": 1370
              },
              "optional": false,
              "computed": false,
              "start": 1361,
              "end": 1370
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
                      "name": "three",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1373,
                      "end": 1378
                    },
                    "value": {
                      "type": "Literal",
                      "value": "3",
                      "raw": "'3'",
                      "start": 1380,
                      "end": 1383
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1373,
                    "end": 1383
                  }
                ],
                "start": 1371,
                "end": 1385
              }
            ],
            "optional": false,
            "start": 1361,
            "end": 1386
          },
          "definite": false,
          "start": 1356,
          "end": 1386
        }
      ],
      "declare": false,
      "start": 1352,
      "end": 1386
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "p3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1392,
              "end": 1394
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null,
              "start": 1395,
              "end": 1401
            },
            "optional": false,
            "computed": false,
            "start": 1392,
            "end": 1401
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "one",
            "optional": false,
            "typeAnnotation": null,
            "start": 1402,
            "end": 1405
          },
          "optional": false,
          "computed": false,
          "start": 1392,
          "end": 1405
        },
        "prefix": true,
        "start": 1387,
        "end": 1405
      },
      "directive": null,
      "start": 1387,
      "end": 1406
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "p3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1412,
              "end": 1414
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null,
              "start": 1415,
              "end": 1421
            },
            "optional": false,
            "computed": false,
            "start": 1412,
            "end": 1421
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "two",
            "optional": false,
            "typeAnnotation": null,
            "start": 1422,
            "end": 1425
          },
          "optional": false,
          "computed": false,
          "start": 1412,
          "end": 1425
        },
        "prefix": true,
        "start": 1407,
        "end": 1425
      },
      "directive": null,
      "start": 1407,
      "end": 1426
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "p3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1432,
              "end": 1434
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null,
              "start": 1435,
              "end": 1441
            },
            "optional": false,
            "computed": false,
            "start": 1432,
            "end": 1441
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "three",
            "optional": false,
            "typeAnnotation": null,
            "start": 1442,
            "end": 1447
          },
          "optional": false,
          "computed": false,
          "start": 1432,
          "end": 1447
        },
        "prefix": true,
        "start": 1427,
        "end": 1447
      },
      "directive": null,
      "start": 1427,
      "end": 1448
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 295,
  "end": 1448
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 295,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 302,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 307,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "keyof",
    "start": 316,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 323,
    "end": 324
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 325,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 332,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 337,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 343,
    "end": 344
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 345,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 353,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 370,
    "end": 371
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 372,
    "end": 378
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 379,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "updateIfChanged",
    "start": 385,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 405,
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
    "value": "t",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 413,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 416,
    "end": 417
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 422,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "reduce",
    "start": 428,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "U",
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
    "value": "(",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "update",
    "start": 447,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 462,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 468,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 471,
    "end": 472
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 481,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 487,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "newU",
    "start": 494,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 503,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 506,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 513,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "newU",
    "start": 519,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "update",
    "start": 531,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 537,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "newU",
    "start": 538,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 543,
    "end": 544
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 553,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 560,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "assign",
    "start": 567,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 588,
    "end": 589
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 590,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 598,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 605,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 606,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 609,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 614,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "reduce",
    "start": 633,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 639,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 640,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 645,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 655,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 659,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 662,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 671,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 674,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 679,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 689,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 691,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 696,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 698,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 704,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 707,
    "end": 708
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 729,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "update",
    "start": 736,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 743,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 749,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "assign",
    "start": 750,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 756,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 757,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 762,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "isArray",
    "start": 763,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 770,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 783,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 790,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 791,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 795,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 838,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 843,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "updater",
    "start": 844,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 853,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 855,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 858,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 860,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "U",
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
    "value": "=>",
    "start": 866,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 869,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 872,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "updater",
    "start": 873,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 880,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 882,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 884,
    "end": 885
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 886,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 890,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 891,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 898,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 899,
    "end": 900
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 905,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "reduce",
    "start": 912,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 918,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 920,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 921,
    "end": 922
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 922,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 923,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 925,
    "end": 926
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 927,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 930,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 932,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 935,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 936,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 937,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 940,
    "end": 941
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1013,
    "end": 1019
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1020,
    "end": 1025
  },
  {
    "type": "Identifier",
    "value": "testRecFun",
    "start": 1026,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1042,
    "end": 1049
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 1050,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Identifier",
    "value": "parent",
    "start": 1058,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1069,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1078,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 1095,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Identifier",
    "value": "parent",
    "start": 1103,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Identifier",
    "value": "deeper",
    "start": 1119,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1130,
    "end": 1137
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 1138,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Identifier",
    "value": "child",
    "start": 1146,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1156,
    "end": 1158
  },
  {
    "type": "Identifier",
    "value": "testRecFun",
    "start": 1171,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1191,
    "end": 1194
  },
  {
    "type": "Identifier",
    "value": "parent",
    "start": 1194,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1202,
    "end": 1205
  },
  {
    "type": "Identifier",
    "value": "child",
    "start": 1205,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1225,
    "end": 1228
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 1229,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Identifier",
    "value": "testRecFun",
    "start": 1234,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 1247,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 1252,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1259,
    "end": 1263
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 1264,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 1267,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 1274,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1279,
    "end": 1282
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 1283,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 1288,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Identifier",
    "value": "deeper",
    "start": 1291,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Identifier",
    "value": "two",
    "start": 1300,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "String",
    "value": "'2'",
    "start": 1305,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1312,
    "end": 1316
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 1317,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 1320,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 1327,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1332,
    "end": 1336
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 1337,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 1340,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Identifier",
    "value": "two",
    "start": 1347,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1352,
    "end": 1355
  },
  {
    "type": "Identifier",
    "value": "p3",
    "start": 1356,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 1361,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Identifier",
    "value": "deeper",
    "start": 1364,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Identifier",
    "value": "three",
    "start": 1373,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "String",
    "value": "'3'",
    "start": 1380,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1387,
    "end": 1391
  },
  {
    "type": "Identifier",
    "value": "p3",
    "start": 1392,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 1395,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 1402,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1407,
    "end": 1411
  },
  {
    "type": "Identifier",
    "value": "p3",
    "start": 1412,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 1415,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Identifier",
    "value": "two",
    "start": 1422,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1427,
    "end": 1431
  },
  {
    "type": "Identifier",
    "value": "p3",
    "start": 1432,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 1435,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Identifier",
    "value": "three",
    "start": 1442,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1447,
    "end": 1448
  }
]
```
