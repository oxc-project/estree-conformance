__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "onlyT",
        "optional": false,
        "typeAnnotation": null,
        "start": 315,
        "end": 320
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 336,
              "end": 339
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
                    "start": 340,
                    "end": 341
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 340,
                  "end": 341
                }
              ],
              "start": 339,
              "end": 342
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
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
                        "name": "x",
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
                              "start": 350,
                              "end": 351
                            },
                            "typeArguments": null,
                            "start": 350,
                            "end": 351
                          },
                          "start": 348,
                          "end": 351
                        },
                        "start": 347,
                        "end": 351
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
                          "start": 356,
                          "end": 357
                        },
                        "typeArguments": null,
                        "start": 356,
                        "end": 357
                      },
                      "start": 353,
                      "end": 357
                    },
                    "start": 346,
                    "end": 357
                  },
                  "start": 344,
                  "end": 357
                },
                "start": 343,
                "end": 357
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
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
                        "name": "x",
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
                              "start": 366,
                              "end": 367
                            },
                            "typeArguments": null,
                            "start": 366,
                            "end": 367
                          },
                          "start": 364,
                          "end": 367
                        },
                        "start": 363,
                        "end": 367
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
                          "start": 372,
                          "end": 373
                        },
                        "typeArguments": null,
                        "start": 372,
                        "end": 373
                      },
                      "start": 369,
                      "end": 373
                    },
                    "start": 362,
                    "end": 373
                  },
                  "start": 360,
                  "end": 373
                },
                "start": 359,
                "end": 373
              }
            ],
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
                        "name": "r",
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
                                "name": "x",
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
                                      "start": 397,
                                      "end": 398
                                    },
                                    "typeArguments": null,
                                    "start": 397,
                                    "end": 398
                                  },
                                  "start": 395,
                                  "end": 398
                                },
                                "start": 394,
                                "end": 398
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
                                  "start": 403,
                                  "end": 404
                                },
                                "typeArguments": null,
                                "start": 403,
                                "end": 404
                              },
                              "start": 400,
                              "end": 404
                            },
                            "start": 393,
                            "end": 404
                          },
                          "start": 391,
                          "end": 404
                        },
                        "start": 389,
                        "end": 404
                      },
                      "init": null,
                      "definite": true,
                      "start": 389,
                      "end": 404
                    }
                  ],
                  "declare": false,
                  "start": 385,
                  "end": 405
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 421,
                    "end": 422
                  },
                  "start": 414,
                  "end": 423
                }
              ],
              "start": 375,
              "end": 429
            },
            "expression": false,
            "start": 327,
            "end": 429
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r1",
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "members": [],
                              "start": 447,
                              "end": 449
                            },
                            "start": 445,
                            "end": 449
                          },
                          "start": 444,
                          "end": 449
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "members": [],
                          "start": 454,
                          "end": 456
                        },
                        "start": 451,
                        "end": 456
                      },
                      "start": 443,
                      "end": 456
                    },
                    "start": 441,
                    "end": 456
                  },
                  "start": 439,
                  "end": 456
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 459,
                    "end": 462
                  },
                  "typeArguments": null,
                  "arguments": [
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
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 467,
                              "end": 473
                            },
                            "start": 465,
                            "end": 473
                          },
                          "start": 464,
                          "end": 473
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 478,
                        "end": 479
                      },
                      "id": null,
                      "generator": false,
                      "start": 463,
                      "end": 479
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
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 485,
                              "end": 491
                            },
                            "start": 483,
                            "end": 491
                          },
                          "start": 482,
                          "end": 491
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 496,
                        "end": 498
                      },
                      "id": null,
                      "generator": false,
                      "start": 481,
                      "end": 498
                    }
                  ],
                  "optional": false,
                  "start": 459,
                  "end": 499
                },
                "definite": false,
                "start": 439,
                "end": 499
              }
            ],
            "declare": false,
            "start": 435,
            "end": 500
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "other2",
              "optional": false,
              "typeAnnotation": null,
              "start": 515,
              "end": 521
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
                    "start": 522,
                    "end": 523
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 532,
                      "end": 536
                    },
                    "typeArguments": null,
                    "start": 532,
                    "end": 536
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 522,
                  "end": 536
                }
              ],
              "start": 521,
              "end": 537
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
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
                      "start": 541,
                      "end": 542
                    },
                    "typeArguments": null,
                    "start": 541,
                    "end": 542
                  },
                  "start": 539,
                  "end": 542
                },
                "start": 538,
                "end": 542
              }
            ],
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
                        "name": "r7",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 558,
                        "end": 560
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 563,
                          "end": 566
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
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
                                      "start": 571,
                                      "end": 572
                                    },
                                    "typeArguments": null,
                                    "start": 571,
                                    "end": 572
                                  },
                                  "start": 569,
                                  "end": 572
                                },
                                "start": 568,
                                "end": 572
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 577,
                              "end": 578
                            },
                            "id": null,
                            "generator": false,
                            "start": 567,
                            "end": 578
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
                                "name": "b",
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
                                      "start": 584,
                                      "end": 585
                                    },
                                    "typeArguments": null,
                                    "start": 584,
                                    "end": 585
                                  },
                                  "start": 582,
                                  "end": 585
                                },
                                "start": 581,
                                "end": 585
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 590,
                              "end": 591
                            },
                            "id": null,
                            "generator": false,
                            "start": 580,
                            "end": 591
                          }
                        ],
                        "optional": false,
                        "start": 563,
                        "end": 592
                      },
                      "definite": false,
                      "start": 558,
                      "end": 592
                    }
                  ],
                  "declare": false,
                  "start": 554,
                  "end": 593
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r9",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 638,
                        "end": 640
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "r7",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 643,
                          "end": 645
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Date",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 650,
                              "end": 654
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 646,
                            "end": 656
                          }
                        ],
                        "optional": false,
                        "start": 643,
                        "end": 657
                      },
                      "definite": false,
                      "start": 638,
                      "end": 657
                    }
                  ],
                  "declare": false,
                  "start": 634,
                  "end": 658
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r10",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 687,
                        "end": 690
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "r7",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 693,
                          "end": 695
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 696,
                            "end": 697
                          }
                        ],
                        "optional": false,
                        "start": 693,
                        "end": 698
                      },
                      "definite": false,
                      "start": 687,
                      "end": 698
                    }
                  ],
                  "declare": false,
                  "start": 683,
                  "end": 699
                }
              ],
              "start": 544,
              "end": 714
            },
            "expression": false,
            "start": 506,
            "end": 714
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 729,
              "end": 733
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
                    "start": 734,
                    "end": 735
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 744,
                      "end": 748
                    },
                    "typeArguments": null,
                    "start": 744,
                    "end": 748
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 734,
                  "end": 748
                }
              ],
              "start": 733,
              "end": 749
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
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
                        "name": "x",
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
                              "start": 757,
                              "end": 758
                            },
                            "typeArguments": null,
                            "start": 757,
                            "end": 758
                          },
                          "start": 755,
                          "end": 758
                        },
                        "start": 754,
                        "end": 758
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
                          "start": 763,
                          "end": 764
                        },
                        "typeArguments": null,
                        "start": 763,
                        "end": 764
                      },
                      "start": 760,
                      "end": 764
                    },
                    "start": 753,
                    "end": 764
                  },
                  "start": 751,
                  "end": 764
                },
                "start": 750,
                "end": 764
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
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
                        "name": "x",
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
                              "start": 773,
                              "end": 774
                            },
                            "typeArguments": null,
                            "start": 773,
                            "end": 774
                          },
                          "start": 771,
                          "end": 774
                        },
                        "start": 770,
                        "end": 774
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
                          "start": 779,
                          "end": 780
                        },
                        "typeArguments": null,
                        "start": 779,
                        "end": 780
                      },
                      "start": 776,
                      "end": 780
                    },
                    "start": 769,
                    "end": 780
                  },
                  "start": 767,
                  "end": 780
                },
                "start": 766,
                "end": 780
              }
            ],
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
                        "name": "r",
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
                                "name": "x",
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
                                      "start": 804,
                                      "end": 805
                                    },
                                    "typeArguments": null,
                                    "start": 804,
                                    "end": 805
                                  },
                                  "start": 802,
                                  "end": 805
                                },
                                "start": 801,
                                "end": 805
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
                                  "start": 810,
                                  "end": 811
                                },
                                "typeArguments": null,
                                "start": 810,
                                "end": 811
                              },
                              "start": 807,
                              "end": 811
                            },
                            "start": 800,
                            "end": 811
                          },
                          "start": 798,
                          "end": 811
                        },
                        "start": 796,
                        "end": 811
                      },
                      "init": null,
                      "definite": true,
                      "start": 796,
                      "end": 811
                    }
                  ],
                  "declare": false,
                  "start": 792,
                  "end": 812
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 828,
                    "end": 829
                  },
                  "start": 821,
                  "end": 830
                }
              ],
              "start": 782,
              "end": 836
            },
            "expression": false,
            "start": 720,
            "end": 836
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "other3",
              "optional": false,
              "typeAnnotation": null,
              "start": 851,
              "end": 857
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
                    "start": 858,
                    "end": 859
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RegExp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 868,
                      "end": 874
                    },
                    "typeArguments": null,
                    "start": 868,
                    "end": 874
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 858,
                  "end": 874
                }
              ],
              "start": 857,
              "end": 875
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
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
                      "start": 879,
                      "end": 880
                    },
                    "typeArguments": null,
                    "start": 879,
                    "end": 880
                  },
                  "start": 877,
                  "end": 880
                },
                "start": 876,
                "end": 880
              }
            ],
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
                        "name": "r7",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 896,
                        "end": 898
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 901,
                          "end": 905
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
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
                                      "start": 910,
                                      "end": 911
                                    },
                                    "typeArguments": null,
                                    "start": 910,
                                    "end": 911
                                  },
                                  "start": 908,
                                  "end": 911
                                },
                                "start": 907,
                                "end": 911
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 916,
                              "end": 917
                            },
                            "id": null,
                            "generator": false,
                            "start": 906,
                            "end": 917
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
                                "name": "b",
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
                                      "start": 923,
                                      "end": 924
                                    },
                                    "typeArguments": null,
                                    "start": 923,
                                    "end": 924
                                  },
                                  "start": 921,
                                  "end": 924
                                },
                                "start": 920,
                                "end": 924
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 929,
                              "end": 930
                            },
                            "id": null,
                            "generator": false,
                            "start": 919,
                            "end": 930
                          }
                        ],
                        "optional": false,
                        "start": 901,
                        "end": 931
                      },
                      "definite": false,
                      "start": 896,
                      "end": 931
                    }
                  ],
                  "declare": false,
                  "start": 892,
                  "end": 932
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r7b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 954,
                        "end": 957
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 960,
                          "end": 964
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 966,
                                "end": 967
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 972,
                              "end": 973
                            },
                            "id": null,
                            "generator": false,
                            "start": 965,
                            "end": 973
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
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 976,
                                "end": 977
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 982,
                              "end": 983
                            },
                            "id": null,
                            "generator": false,
                            "start": 975,
                            "end": 983
                          }
                        ],
                        "optional": false,
                        "start": 960,
                        "end": 984
                      },
                      "definite": false,
                      "start": 954,
                      "end": 984
                    }
                  ],
                  "declare": false,
                  "start": 950,
                  "end": 985
                }
              ],
              "start": 882,
              "end": 1026
            },
            "expression": false,
            "start": 842,
            "end": 1026
          },
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 1037,
              "end": 1038
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1041,
                    "end": 1042
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 1041,
                  "end": 1042
                }
              ],
              "start": 1039,
              "end": 1044
            },
            "const": false,
            "declare": false,
            "start": 1032,
            "end": 1044
          },
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 1054,
              "end": 1055
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1058,
                    "end": 1059
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 1058,
                  "end": 1059
                }
              ],
              "start": 1056,
              "end": 1061
            },
            "const": false,
            "declare": false,
            "start": 1049,
            "end": 1061
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1076,
              "end": 1080
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
                    "start": 1081,
                    "end": 1082
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1081,
                  "end": 1082
                }
              ],
              "start": 1080,
              "end": 1083
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
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
                      "start": 1087,
                      "end": 1088
                    },
                    "typeArguments": null,
                    "start": 1087,
                    "end": 1088
                  },
                  "start": 1085,
                  "end": 1088
                },
                "start": 1084,
                "end": 1088
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
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
                        "name": "x",
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
                              "start": 1097,
                              "end": 1098
                            },
                            "typeArguments": null,
                            "start": 1097,
                            "end": 1098
                          },
                          "start": 1095,
                          "end": 1098
                        },
                        "start": 1094,
                        "end": 1098
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
                          "start": 1103,
                          "end": 1104
                        },
                        "typeArguments": null,
                        "start": 1103,
                        "end": 1104
                      },
                      "start": 1100,
                      "end": 1104
                    },
                    "start": 1093,
                    "end": 1104
                  },
                  "start": 1091,
                  "end": 1104
                },
                "start": 1090,
                "end": 1104
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
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
                        "name": "x",
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
                              "start": 1113,
                              "end": 1114
                            },
                            "typeArguments": null,
                            "start": 1113,
                            "end": 1114
                          },
                          "start": 1111,
                          "end": 1114
                        },
                        "start": 1110,
                        "end": 1114
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
                          "start": 1119,
                          "end": 1120
                        },
                        "typeArguments": null,
                        "start": 1119,
                        "end": 1120
                      },
                      "start": 1116,
                      "end": 1120
                    },
                    "start": 1109,
                    "end": 1120
                  },
                  "start": 1107,
                  "end": 1120
                },
                "start": 1106,
                "end": 1120
              }
            ],
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
                        "name": "r",
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
                                "name": "x",
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
                                      "start": 1144,
                                      "end": 1145
                                    },
                                    "typeArguments": null,
                                    "start": 1144,
                                    "end": 1145
                                  },
                                  "start": 1142,
                                  "end": 1145
                                },
                                "start": 1141,
                                "end": 1145
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
                                  "start": 1150,
                                  "end": 1151
                                },
                                "typeArguments": null,
                                "start": 1150,
                                "end": 1151
                              },
                              "start": 1147,
                              "end": 1151
                            },
                            "start": 1140,
                            "end": 1151
                          },
                          "start": 1138,
                          "end": 1151
                        },
                        "start": 1136,
                        "end": 1151
                      },
                      "init": null,
                      "definite": true,
                      "start": 1136,
                      "end": 1151
                    }
                  ],
                  "declare": false,
                  "start": 1132,
                  "end": 1152
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1168,
                    "end": 1169
                  },
                  "start": 1161,
                  "end": 1170
                }
              ],
              "start": 1122,
              "end": 1176
            },
            "expression": false,
            "start": 1067,
            "end": 1176
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1186,
                  "end": 1188
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1191,
                    "end": 1195
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1196,
                        "end": 1197
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1198,
                        "end": 1199
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1196,
                      "end": 1199
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
                          "start": 1202,
                          "end": 1203
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1208,
                          "end": 1209
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1210,
                          "end": 1211
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1208,
                        "end": 1211
                      },
                      "id": null,
                      "generator": false,
                      "start": 1201,
                      "end": 1211
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
                          "start": 1214,
                          "end": 1215
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "F",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1220,
                          "end": 1221
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1222,
                          "end": 1223
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1220,
                        "end": 1223
                      },
                      "id": null,
                      "generator": false,
                      "start": 1213,
                      "end": 1223
                    }
                  ],
                  "optional": false,
                  "start": 1191,
                  "end": 1224
                },
                "definite": false,
                "start": 1186,
                "end": 1224
              }
            ],
            "declare": false,
            "start": 1182,
            "end": 1225
          }
        ],
        "start": 321,
        "end": 1236
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 305,
      "end": 1236
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TU",
        "optional": false,
        "typeAnnotation": null,
        "start": 1248,
        "end": 1250
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1266,
              "end": 1269
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
                    "start": 1270,
                    "end": 1271
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1270,
                  "end": 1271
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1273,
                    "end": 1274
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1273,
                  "end": 1274
                }
              ],
              "start": 1269,
              "end": 1275
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
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
                        "name": "x",
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
                              "start": 1283,
                              "end": 1284
                            },
                            "typeArguments": null,
                            "start": 1283,
                            "end": 1284
                          },
                          "start": 1281,
                          "end": 1284
                        },
                        "start": 1280,
                        "end": 1284
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
                          "start": 1289,
                          "end": 1290
                        },
                        "typeArguments": null,
                        "start": 1289,
                        "end": 1290
                      },
                      "start": 1286,
                      "end": 1290
                    },
                    "start": 1279,
                    "end": 1290
                  },
                  "start": 1277,
                  "end": 1290
                },
                "start": 1276,
                "end": 1290
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
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
                        "name": "x",
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
                              "start": 1299,
                              "end": 1300
                            },
                            "typeArguments": null,
                            "start": 1299,
                            "end": 1300
                          },
                          "start": 1297,
                          "end": 1300
                        },
                        "start": 1296,
                        "end": 1300
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
                          "start": 1305,
                          "end": 1306
                        },
                        "typeArguments": null,
                        "start": 1305,
                        "end": 1306
                      },
                      "start": 1302,
                      "end": 1306
                    },
                    "start": 1295,
                    "end": 1306
                  },
                  "start": 1293,
                  "end": 1306
                },
                "start": 1292,
                "end": 1306
              }
            ],
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
                        "name": "r",
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
                                "name": "x",
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
                                      "start": 1330,
                                      "end": 1331
                                    },
                                    "typeArguments": null,
                                    "start": 1330,
                                    "end": 1331
                                  },
                                  "start": 1328,
                                  "end": 1331
                                },
                                "start": 1327,
                                "end": 1331
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
                                  "start": 1336,
                                  "end": 1337
                                },
                                "typeArguments": null,
                                "start": 1336,
                                "end": 1337
                              },
                              "start": 1333,
                              "end": 1337
                            },
                            "start": 1326,
                            "end": 1337
                          },
                          "start": 1324,
                          "end": 1337
                        },
                        "start": 1322,
                        "end": 1337
                      },
                      "init": null,
                      "definite": true,
                      "start": 1322,
                      "end": 1337
                    }
                  ],
                  "declare": false,
                  "start": 1318,
                  "end": 1338
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1354,
                    "end": 1355
                  },
                  "start": 1347,
                  "end": 1356
                }
              ],
              "start": 1308,
              "end": 1362
            },
            "expression": false,
            "start": 1257,
            "end": 1362
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r1",
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "members": [],
                              "start": 1380,
                              "end": 1382
                            },
                            "start": 1378,
                            "end": 1382
                          },
                          "start": 1377,
                          "end": 1382
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "members": [],
                          "start": 1387,
                          "end": 1389
                        },
                        "start": 1384,
                        "end": 1389
                      },
                      "start": 1376,
                      "end": 1389
                    },
                    "start": 1374,
                    "end": 1389
                  },
                  "start": 1372,
                  "end": 1389
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1392,
                    "end": 1395
                  },
                  "typeArguments": null,
                  "arguments": [
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
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1400,
                              "end": 1406
                            },
                            "start": 1398,
                            "end": 1406
                          },
                          "start": 1397,
                          "end": 1406
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1411,
                        "end": 1412
                      },
                      "id": null,
                      "generator": false,
                      "start": 1396,
                      "end": 1412
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
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1418,
                              "end": 1424
                            },
                            "start": 1416,
                            "end": 1424
                          },
                          "start": 1415,
                          "end": 1424
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 1429,
                        "end": 1431
                      },
                      "id": null,
                      "generator": false,
                      "start": 1414,
                      "end": 1431
                    }
                  ],
                  "optional": false,
                  "start": 1392,
                  "end": 1432
                },
                "definite": false,
                "start": 1372,
                "end": 1432
              }
            ],
            "declare": false,
            "start": 1368,
            "end": 1433
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "other2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1448,
              "end": 1454
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
                    "start": 1455,
                    "end": 1456
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1465,
                      "end": 1469
                    },
                    "typeArguments": null,
                    "start": 1465,
                    "end": 1469
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1455,
                  "end": 1469
                }
              ],
              "start": 1454,
              "end": 1470
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
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
                      "start": 1474,
                      "end": 1475
                    },
                    "typeArguments": null,
                    "start": 1474,
                    "end": 1475
                  },
                  "start": 1472,
                  "end": 1475
                },
                "start": 1471,
                "end": 1475
              }
            ],
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
                        "name": "r7",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1491,
                        "end": 1493
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1496,
                          "end": 1499
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
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
                                      "start": 1504,
                                      "end": 1505
                                    },
                                    "typeArguments": null,
                                    "start": 1504,
                                    "end": 1505
                                  },
                                  "start": 1502,
                                  "end": 1505
                                },
                                "start": 1501,
                                "end": 1505
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1510,
                              "end": 1511
                            },
                            "id": null,
                            "generator": false,
                            "start": 1500,
                            "end": 1511
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
                                "name": "b",
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
                                      "start": 1517,
                                      "end": 1518
                                    },
                                    "typeArguments": null,
                                    "start": 1517,
                                    "end": 1518
                                  },
                                  "start": 1515,
                                  "end": 1518
                                },
                                "start": 1514,
                                "end": 1518
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1523,
                              "end": 1524
                            },
                            "id": null,
                            "generator": false,
                            "start": 1513,
                            "end": 1524
                          }
                        ],
                        "optional": false,
                        "start": 1496,
                        "end": 1525
                      },
                      "definite": false,
                      "start": 1491,
                      "end": 1525
                    }
                  ],
                  "declare": false,
                  "start": 1487,
                  "end": 1526
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r9",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1540,
                        "end": 1542
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "r7",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1545,
                          "end": 1547
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Date",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1552,
                              "end": 1556
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 1548,
                            "end": 1558
                          }
                        ],
                        "optional": false,
                        "start": 1545,
                        "end": 1559
                      },
                      "definite": false,
                      "start": 1540,
                      "end": 1559
                    }
                  ],
                  "declare": false,
                  "start": 1536,
                  "end": 1560
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r10",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1574,
                        "end": 1577
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "r7",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1580,
                          "end": 1582
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1583,
                            "end": 1584
                          }
                        ],
                        "optional": false,
                        "start": 1580,
                        "end": 1585
                      },
                      "definite": false,
                      "start": 1574,
                      "end": 1585
                    }
                  ],
                  "declare": false,
                  "start": 1570,
                  "end": 1586
                }
              ],
              "start": 1477,
              "end": 1593
            },
            "expression": false,
            "start": 1439,
            "end": 1593
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1608,
              "end": 1612
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
                    "start": 1613,
                    "end": 1614
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1623,
                      "end": 1627
                    },
                    "typeArguments": null,
                    "start": 1623,
                    "end": 1627
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1613,
                  "end": 1627
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1629,
                    "end": 1630
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1639,
                      "end": 1643
                    },
                    "typeArguments": null,
                    "start": 1639,
                    "end": 1643
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1629,
                  "end": 1643
                }
              ],
              "start": 1612,
              "end": 1644
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
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
                        "name": "x",
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
                              "start": 1652,
                              "end": 1653
                            },
                            "typeArguments": null,
                            "start": 1652,
                            "end": 1653
                          },
                          "start": 1650,
                          "end": 1653
                        },
                        "start": 1649,
                        "end": 1653
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
                          "start": 1658,
                          "end": 1659
                        },
                        "typeArguments": null,
                        "start": 1658,
                        "end": 1659
                      },
                      "start": 1655,
                      "end": 1659
                    },
                    "start": 1648,
                    "end": 1659
                  },
                  "start": 1646,
                  "end": 1659
                },
                "start": 1645,
                "end": 1659
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
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
                        "name": "x",
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
                              "start": 1668,
                              "end": 1669
                            },
                            "typeArguments": null,
                            "start": 1668,
                            "end": 1669
                          },
                          "start": 1666,
                          "end": 1669
                        },
                        "start": 1665,
                        "end": 1669
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
                          "start": 1674,
                          "end": 1675
                        },
                        "typeArguments": null,
                        "start": 1674,
                        "end": 1675
                      },
                      "start": 1671,
                      "end": 1675
                    },
                    "start": 1664,
                    "end": 1675
                  },
                  "start": 1662,
                  "end": 1675
                },
                "start": 1661,
                "end": 1675
              }
            ],
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
                        "name": "r",
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
                                "name": "x",
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
                                      "start": 1699,
                                      "end": 1700
                                    },
                                    "typeArguments": null,
                                    "start": 1699,
                                    "end": 1700
                                  },
                                  "start": 1697,
                                  "end": 1700
                                },
                                "start": 1696,
                                "end": 1700
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
                                  "start": 1705,
                                  "end": 1706
                                },
                                "typeArguments": null,
                                "start": 1705,
                                "end": 1706
                              },
                              "start": 1702,
                              "end": 1706
                            },
                            "start": 1695,
                            "end": 1706
                          },
                          "start": 1693,
                          "end": 1706
                        },
                        "start": 1691,
                        "end": 1706
                      },
                      "init": null,
                      "definite": true,
                      "start": 1691,
                      "end": 1706
                    }
                  ],
                  "declare": false,
                  "start": 1687,
                  "end": 1707
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1723,
                    "end": 1724
                  },
                  "start": 1716,
                  "end": 1725
                }
              ],
              "start": 1677,
              "end": 1731
            },
            "expression": false,
            "start": 1599,
            "end": 1731
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "other3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1746,
              "end": 1752
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
                    "start": 1753,
                    "end": 1754
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RegExp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1763,
                      "end": 1769
                    },
                    "typeArguments": null,
                    "start": 1763,
                    "end": 1769
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1753,
                  "end": 1769
                }
              ],
              "start": 1752,
              "end": 1770
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
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
                      "start": 1774,
                      "end": 1775
                    },
                    "typeArguments": null,
                    "start": 1774,
                    "end": 1775
                  },
                  "start": 1772,
                  "end": 1775
                },
                "start": 1771,
                "end": 1775
              }
            ],
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
                        "name": "r7",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1791,
                        "end": 1793
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1796,
                          "end": 1800
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
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
                                      "start": 1805,
                                      "end": 1806
                                    },
                                    "typeArguments": null,
                                    "start": 1805,
                                    "end": 1806
                                  },
                                  "start": 1803,
                                  "end": 1806
                                },
                                "start": 1802,
                                "end": 1806
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1811,
                              "end": 1812
                            },
                            "id": null,
                            "generator": false,
                            "start": 1801,
                            "end": 1812
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
                                "name": "b",
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
                                      "start": 1818,
                                      "end": 1819
                                    },
                                    "typeArguments": null,
                                    "start": 1818,
                                    "end": 1819
                                  },
                                  "start": 1816,
                                  "end": 1819
                                },
                                "start": 1815,
                                "end": 1819
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1824,
                              "end": 1825
                            },
                            "id": null,
                            "generator": false,
                            "start": 1814,
                            "end": 1825
                          }
                        ],
                        "optional": false,
                        "start": 1796,
                        "end": 1826
                      },
                      "definite": false,
                      "start": 1791,
                      "end": 1826
                    }
                  ],
                  "declare": false,
                  "start": 1787,
                  "end": 1827
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r7b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1841,
                        "end": 1844
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1847,
                          "end": 1851
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1853,
                                "end": 1854
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1859,
                              "end": 1860
                            },
                            "id": null,
                            "generator": false,
                            "start": 1852,
                            "end": 1860
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
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1863,
                                "end": 1864
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1869,
                              "end": 1870
                            },
                            "id": null,
                            "generator": false,
                            "start": 1862,
                            "end": 1870
                          }
                        ],
                        "optional": false,
                        "start": 1847,
                        "end": 1871
                      },
                      "definite": false,
                      "start": 1841,
                      "end": 1871
                    }
                  ],
                  "declare": false,
                  "start": 1837,
                  "end": 1872
                }
              ],
              "start": 1777,
              "end": 1879
            },
            "expression": false,
            "start": 1737,
            "end": 1879
          },
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 1890,
              "end": 1891
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1894,
                    "end": 1895
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 1894,
                  "end": 1895
                }
              ],
              "start": 1892,
              "end": 1897
            },
            "const": false,
            "declare": false,
            "start": 1885,
            "end": 1897
          },
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 1907,
              "end": 1908
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1911,
                    "end": 1912
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 1911,
                  "end": 1912
                }
              ],
              "start": 1909,
              "end": 1914
            },
            "const": false,
            "declare": false,
            "start": 1902,
            "end": 1914
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1929,
              "end": 1933
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
                    "start": 1934,
                    "end": 1935
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1934,
                  "end": 1935
                }
              ],
              "start": 1933,
              "end": 1936
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
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
                      "start": 1940,
                      "end": 1941
                    },
                    "typeArguments": null,
                    "start": 1940,
                    "end": 1941
                  },
                  "start": 1938,
                  "end": 1941
                },
                "start": 1937,
                "end": 1941
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
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
                        "name": "x",
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
                              "start": 1950,
                              "end": 1951
                            },
                            "typeArguments": null,
                            "start": 1950,
                            "end": 1951
                          },
                          "start": 1948,
                          "end": 1951
                        },
                        "start": 1947,
                        "end": 1951
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
                          "start": 1956,
                          "end": 1957
                        },
                        "typeArguments": null,
                        "start": 1956,
                        "end": 1957
                      },
                      "start": 1953,
                      "end": 1957
                    },
                    "start": 1946,
                    "end": 1957
                  },
                  "start": 1944,
                  "end": 1957
                },
                "start": 1943,
                "end": 1957
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
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
                        "name": "x",
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
                              "start": 1966,
                              "end": 1967
                            },
                            "typeArguments": null,
                            "start": 1966,
                            "end": 1967
                          },
                          "start": 1964,
                          "end": 1967
                        },
                        "start": 1963,
                        "end": 1967
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
                          "start": 1972,
                          "end": 1973
                        },
                        "typeArguments": null,
                        "start": 1972,
                        "end": 1973
                      },
                      "start": 1969,
                      "end": 1973
                    },
                    "start": 1962,
                    "end": 1973
                  },
                  "start": 1960,
                  "end": 1973
                },
                "start": 1959,
                "end": 1973
              }
            ],
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
                        "name": "r",
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
                                "name": "x",
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
                                      "start": 1997,
                                      "end": 1998
                                    },
                                    "typeArguments": null,
                                    "start": 1997,
                                    "end": 1998
                                  },
                                  "start": 1995,
                                  "end": 1998
                                },
                                "start": 1994,
                                "end": 1998
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
                                  "start": 2003,
                                  "end": 2004
                                },
                                "typeArguments": null,
                                "start": 2003,
                                "end": 2004
                              },
                              "start": 2000,
                              "end": 2004
                            },
                            "start": 1993,
                            "end": 2004
                          },
                          "start": 1991,
                          "end": 2004
                        },
                        "start": 1989,
                        "end": 2004
                      },
                      "init": null,
                      "definite": true,
                      "start": 1989,
                      "end": 2004
                    }
                  ],
                  "declare": false,
                  "start": 1985,
                  "end": 2005
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2021,
                    "end": 2022
                  },
                  "start": 2014,
                  "end": 2023
                }
              ],
              "start": 1975,
              "end": 2029
            },
            "expression": false,
            "start": 1920,
            "end": 2029
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2039,
                  "end": 2041
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2044,
                    "end": 2048
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2049,
                        "end": 2050
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2051,
                        "end": 2052
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2049,
                      "end": 2052
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
                          "start": 2055,
                          "end": 2056
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2061,
                          "end": 2062
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2063,
                          "end": 2064
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2061,
                        "end": 2064
                      },
                      "id": null,
                      "generator": false,
                      "start": 2054,
                      "end": 2064
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
                          "start": 2067,
                          "end": 2068
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "F",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2073,
                          "end": 2074
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2075,
                          "end": 2076
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2073,
                        "end": 2076
                      },
                      "id": null,
                      "generator": false,
                      "start": 2066,
                      "end": 2076
                    }
                  ],
                  "optional": false,
                  "start": 2044,
                  "end": 2077
                },
                "definite": false,
                "start": 2039,
                "end": 2077
              }
            ],
            "declare": false,
            "start": 2035,
            "end": 2078
          }
        ],
        "start": 1251,
        "end": 2080
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1238,
      "end": 2080
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 305,
  "end": 2080
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 305,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "onlyT",
    "start": 315,
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
    "value": "function",
    "start": 327,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 336,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "=>",
    "start": 353,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 369,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 375,
    "end": 376
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 385,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 400,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 404,
    "end": 405
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 414,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 428,
    "end": 429
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 435,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 439,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "{",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 451,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 459,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 467,
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
    "value": "=>",
    "start": 475,
    "end": 477
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 485,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 493,
    "end": 495
  },
  {
    "type": "String",
    "value": "''",
    "start": 496,
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
    "value": ";",
    "start": 499,
    "end": 500
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 506,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "other2",
    "start": 515,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 522,
    "end": 523
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 524,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 532,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 536,
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
    "value": "x",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 541,
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
    "value": "{",
    "start": 544,
    "end": 545
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 554,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 558,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 561,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 563,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 574,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 580,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 582,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 587,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 592,
    "end": 593
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 634,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 638,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 641,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 643,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 645,
    "end": 646
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 646,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 650,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 657,
    "end": 658
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 683,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 687,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 693,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 695,
    "end": 696
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 713,
    "end": 714
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 720,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 729,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 733,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 734,
    "end": 735
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 736,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 744,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 749,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 755,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 760,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 763,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 764,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 769,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 771,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 776,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 782,
    "end": 783
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 792,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Identifier",
    "value": "x",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 802,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 807,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 811,
    "end": 812
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 821,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 835,
    "end": 836
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 842,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "other3",
    "start": 851,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 857,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 858,
    "end": 859
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 860,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "RegExp",
    "start": 868,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 875,
    "end": 876
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 876,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 877,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 882,
    "end": 883
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 892,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 896,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 899,
    "end": 900
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 901,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 906,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 908,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 910,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 911,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 913,
    "end": 915
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 916,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 919,
    "end": 920
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 920,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 921,
    "end": 922
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 923,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 924,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 926,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": ";",
    "start": 931,
    "end": 932
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 950,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "r7b",
    "start": 954,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 958,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 960,
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
    "value": "(",
    "start": 965,
    "end": 966
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 967,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 969,
    "end": 971
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 972,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 975,
    "end": 976
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 979,
    "end": 981
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 982,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 983,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 984,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 1032,
    "end": 1036
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 1049,
    "end": 1053
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1067,
    "end": 1075
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1076,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1100,
    "end": 1102
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "type": "Punctuator",
    "value": "(",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1116,
    "end": 1118
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1132,
    "end": 1135
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1147,
    "end": 1149
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1161,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1182,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 1186,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1191,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1205,
    "end": 1207
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1217,
    "end": 1219
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1238,
    "end": 1247
  },
  {
    "type": "Identifier",
    "value": "TU",
    "start": 1248,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1257,
    "end": 1265
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1266,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1286,
    "end": 1288
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1302,
    "end": 1304
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1318,
    "end": 1321
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1333,
    "end": 1335
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1347,
    "end": 1353
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1368,
    "end": 1371
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 1372,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1384,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1392,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1400,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1408,
    "end": 1410
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1418,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1426,
    "end": 1428
  },
  {
    "type": "String",
    "value": "''",
    "start": 1429,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1439,
    "end": 1447
  },
  {
    "type": "Identifier",
    "value": "other2",
    "start": 1448,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1457,
    "end": 1464
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1465,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1487,
    "end": 1490
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 1491,
    "end": 1493
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1496,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1502,
    "end": 1503
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1504,
    "end": 1505
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1507,
    "end": 1509
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1520,
    "end": 1522
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1536,
    "end": 1539
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 1540,
    "end": 1542
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 1545,
    "end": 1547
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1548,
    "end": 1551
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1552,
    "end": 1556
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1570,
    "end": 1573
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 1574,
    "end": 1577
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1578,
    "end": 1579
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 1580,
    "end": 1582
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1599,
    "end": 1607
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1608,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1615,
    "end": 1622
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1623,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1631,
    "end": 1638
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1639,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1655,
    "end": 1657
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1658,
    "end": 1659
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1668,
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
    "value": "=>",
    "start": 1671,
    "end": 1673
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1674,
    "end": 1675
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1675,
    "end": 1676
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1687,
    "end": 1690
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1697,
    "end": 1698
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1702,
    "end": 1704
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1706,
    "end": 1707
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1716,
    "end": 1722
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1737,
    "end": 1745
  },
  {
    "type": "Identifier",
    "value": "other3",
    "start": 1746,
    "end": 1752
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1755,
    "end": 1762
  },
  {
    "type": "Identifier",
    "value": "RegExp",
    "start": 1763,
    "end": 1769
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1769,
    "end": 1770
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1774,
    "end": 1775
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1787,
    "end": 1790
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 1791,
    "end": 1793
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1796,
    "end": 1800
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1802,
    "end": 1803
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1803,
    "end": 1804
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1806,
    "end": 1807
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1808,
    "end": 1810
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1814,
    "end": 1815
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1818,
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
    "value": "=>",
    "start": 1821,
    "end": 1823
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1824,
    "end": 1825
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1825,
    "end": 1826
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1837,
    "end": 1840
  },
  {
    "type": "Identifier",
    "value": "r7b",
    "start": 1841,
    "end": 1844
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1847,
    "end": 1851
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1852,
    "end": 1853
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1853,
    "end": 1854
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1856,
    "end": 1858
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1859,
    "end": 1860
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1862,
    "end": 1863
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1863,
    "end": 1864
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1864,
    "end": 1865
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1866,
    "end": 1868
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1869,
    "end": 1870
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1870,
    "end": 1871
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1878,
    "end": 1879
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 1885,
    "end": 1889
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1890,
    "end": 1891
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1892,
    "end": 1893
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1894,
    "end": 1895
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1896,
    "end": 1897
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 1902,
    "end": 1906
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1909,
    "end": 1910
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1913,
    "end": 1914
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1920,
    "end": 1928
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1929,
    "end": 1933
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1934,
    "end": 1935
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1936,
    "end": 1937
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1938,
    "end": 1939
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1940,
    "end": 1941
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1941,
    "end": 1942
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1944,
    "end": 1945
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1946,
    "end": 1947
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1947,
    "end": 1948
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1948,
    "end": 1949
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1950,
    "end": 1951
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1953,
    "end": 1955
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1956,
    "end": 1957
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1957,
    "end": 1958
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1959,
    "end": 1960
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1960,
    "end": 1961
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1962,
    "end": 1963
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1963,
    "end": 1964
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1964,
    "end": 1965
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1966,
    "end": 1967
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1969,
    "end": 1971
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1972,
    "end": 1973
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1973,
    "end": 1974
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1975,
    "end": 1976
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1985,
    "end": 1988
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 1989,
    "end": 1990
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1990,
    "end": 1991
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1991,
    "end": 1992
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1993,
    "end": 1994
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1997,
    "end": 1998
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2000,
    "end": 2002
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2014,
    "end": 2020
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 2021,
    "end": 2022
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2022,
    "end": 2023
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2028,
    "end": 2029
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2035,
    "end": 2038
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 2039,
    "end": 2041
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2042,
    "end": 2043
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 2044,
    "end": 2048
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2048,
    "end": 2049
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 2049,
    "end": 2050
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2050,
    "end": 2051
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2051,
    "end": 2052
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2052,
    "end": 2053
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2054,
    "end": 2055
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2055,
    "end": 2056
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2056,
    "end": 2057
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2058,
    "end": 2060
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 2061,
    "end": 2062
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2062,
    "end": 2063
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2063,
    "end": 2064
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2064,
    "end": 2065
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2066,
    "end": 2067
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2068,
    "end": 2069
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2070,
    "end": 2072
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 2073,
    "end": 2074
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2074,
    "end": 2075
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2075,
    "end": 2076
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2077,
    "end": 2078
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2079,
    "end": 2080
  }
]
```
