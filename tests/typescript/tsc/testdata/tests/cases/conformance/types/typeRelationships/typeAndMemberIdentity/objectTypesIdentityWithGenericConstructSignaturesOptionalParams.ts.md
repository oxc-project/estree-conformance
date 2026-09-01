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
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 341,
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 343,
              "end": 344
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 343,
            "end": 344
          }
        ],
        "start": 342,
        "end": 345
      },
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
              "start": 352,
              "end": 363
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
                        "start": 367,
                        "end": 368
                      },
                      "typeArguments": null,
                      "start": 367,
                      "end": 368
                    },
                    "start": 365,
                    "end": 368
                  },
                  "start": 364,
                  "end": 368
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": true,
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
                        "start": 374,
                        "end": 375
                      },
                      "typeArguments": null,
                      "start": 374,
                      "end": 375
                    },
                    "start": 372,
                    "end": 375
                  },
                  "start": 370,
                  "end": 375
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 386,
                      "end": 390
                    },
                    "start": 379,
                    "end": 391
                  }
                ],
                "start": 377,
                "end": 393
              },
              "expression": false,
              "start": 363,
              "end": 393
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 352,
            "end": 393
          }
        ],
        "start": 346,
        "end": 395
      },
      "abstract": false,
      "declare": false,
      "start": 335,
      "end": 395
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 403,
        "end": 404
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
              "start": 405,
              "end": 406
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 405,
            "end": 406
          }
        ],
        "start": 404,
        "end": 407
      },
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
              "start": 414,
              "end": 425
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
                        "start": 429,
                        "end": 430
                      },
                      "typeArguments": null,
                      "start": 429,
                      "end": 430
                    },
                    "start": 427,
                    "end": 430
                  },
                  "start": 426,
                  "end": 430
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": true,
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
                        "start": 436,
                        "end": 437
                      },
                      "typeArguments": null,
                      "start": 436,
                      "end": 437
                    },
                    "start": 434,
                    "end": 437
                  },
                  "start": 432,
                  "end": 437
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 448,
                      "end": 452
                    },
                    "start": 441,
                    "end": 453
                  }
                ],
                "start": 439,
                "end": 455
              },
              "expression": false,
              "start": 425,
              "end": 455
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 414,
            "end": 455
          }
        ],
        "start": 408,
        "end": 457
      },
      "abstract": false,
      "declare": false,
      "start": 397,
      "end": 457
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 469,
        "end": 470
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
              "start": 471,
              "end": 472
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 471,
            "end": 472
          }
        ],
        "start": 470,
        "end": 473
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                      "start": 487,
                      "end": 488
                    },
                    "typeArguments": null,
                    "start": 487,
                    "end": 488
                  },
                  "start": 485,
                  "end": 488
                },
                "start": 484,
                "end": 488
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": true,
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
                      "start": 494,
                      "end": 495
                    },
                    "typeArguments": null,
                    "start": 494,
                    "end": 495
                  },
                  "start": 492,
                  "end": 495
                },
                "start": 490,
                "end": 495
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 498,
                  "end": 499
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
                        "start": 500,
                        "end": 501
                      },
                      "typeArguments": null,
                      "start": 500,
                      "end": 501
                    }
                  ],
                  "start": 499,
                  "end": 502
                },
                "start": 498,
                "end": 502
              },
              "start": 496,
              "end": 502
            },
            "start": 480,
            "end": 503
          }
        ],
        "start": 474,
        "end": 505
      },
      "declare": false,
      "start": 459,
      "end": 505
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 517,
        "end": 519
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 530,
                    "end": 531
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 530,
                  "end": 531
                }
              ],
              "start": 529,
              "end": 532
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
                      "start": 536,
                      "end": 537
                    },
                    "typeArguments": null,
                    "start": 536,
                    "end": 537
                  },
                  "start": 534,
                  "end": 537
                },
                "start": 533,
                "end": 537
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": true,
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
                      "start": 543,
                      "end": 544
                    },
                    "typeArguments": null,
                    "start": 543,
                    "end": 544
                  },
                  "start": 541,
                  "end": 544
                },
                "start": 539,
                "end": 544
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 547,
                  "end": 548
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
                        "start": 549,
                        "end": 550
                      },
                      "typeArguments": null,
                      "start": 549,
                      "end": 550
                    }
                  ],
                  "start": 548,
                  "end": 551
                },
                "start": 547,
                "end": 551
              },
              "start": 545,
              "end": 551
            },
            "start": 526,
            "end": 552
          }
        ],
        "start": 520,
        "end": 554
      },
      "declare": false,
      "start": 507,
      "end": 554
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
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
                            "start": 569,
                            "end": 570
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 569,
                          "end": 570
                        }
                      ],
                      "start": 568,
                      "end": 571
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
                              "start": 575,
                              "end": 576
                            },
                            "typeArguments": null,
                            "start": 575,
                            "end": 576
                          },
                          "start": 573,
                          "end": 576
                        },
                        "start": 572,
                        "end": 576
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": true,
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
                              "start": 582,
                              "end": 583
                            },
                            "typeArguments": null,
                            "start": 582,
                            "end": 583
                          },
                          "start": 580,
                          "end": 583
                        },
                        "start": 578,
                        "end": 583
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 586,
                          "end": 587
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
                                "start": 588,
                                "end": 589
                              },
                              "typeArguments": null,
                              "start": 588,
                              "end": 589
                            }
                          ],
                          "start": 587,
                          "end": 590
                        },
                        "start": 586,
                        "end": 590
                      },
                      "start": 584,
                      "end": 590
                    },
                    "start": 565,
                    "end": 590
                  }
                ],
                "start": 563,
                "end": 592
              },
              "start": 561,
              "end": 592
            },
            "start": 560,
            "end": 592
          },
          "init": null,
          "definite": false,
          "start": 560,
          "end": 592
        }
      ],
      "declare": false,
      "start": 556,
      "end": 592
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 597,
            "end": 598
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
                  "name": "new",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 603,
                  "end": 606
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                          "start": 607,
                          "end": 608
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 607,
                        "end": 608
                      }
                    ],
                    "start": 606,
                    "end": 609
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
                            "start": 613,
                            "end": 614
                          },
                          "typeArguments": null,
                          "start": 613,
                          "end": 614
                        },
                        "start": 611,
                        "end": 614
                      },
                      "start": 610,
                      "end": 614
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": true,
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
                            "start": 620,
                            "end": 621
                          },
                          "typeArguments": null,
                          "start": 620,
                          "end": 621
                        },
                        "start": 618,
                        "end": 621
                      },
                      "start": 616,
                      "end": 621
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 636,
                            "end": 637
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
                                  "start": 638,
                                  "end": 639
                                },
                                "typeArguments": null,
                                "start": 638,
                                "end": 639
                              }
                            ],
                            "start": 637,
                            "end": 640
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 641,
                              "end": 642
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 644,
                              "end": 645
                            }
                          ],
                          "start": 632,
                          "end": 646
                        },
                        "start": 625,
                        "end": 647
                      }
                    ],
                    "start": 623,
                    "end": 649
                  },
                  "expression": false,
                  "start": 606,
                  "end": 649
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 603,
                "end": 649
              }
            ],
            "start": 601,
            "end": 651
          },
          "definite": false,
          "start": 597,
          "end": 651
        }
      ],
      "declare": false,
      "start": 593,
      "end": 652
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 713,
        "end": 718
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 722,
                "end": 723
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 724,
                    "end": 730
                  }
                ],
                "start": 723,
                "end": 731
              },
              "start": 722,
              "end": 731
            },
            "start": 720,
            "end": 731
          },
          "start": 719,
          "end": 731
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 704,
      "end": 733
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 743,
        "end": 748
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 752,
                "end": 753
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 754,
                    "end": 760
                  }
                ],
                "start": 753,
                "end": 761
              },
              "start": 752,
              "end": 761
            },
            "start": 750,
            "end": 761
          },
          "start": 749,
          "end": 761
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 734,
      "end": 763
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 782,
        "end": 787
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
              "type": "TSAnyKeyword",
              "start": 791,
              "end": 794
            },
            "start": 789,
            "end": 794
          },
          "start": 788,
          "end": 794
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 796,
        "end": 799
      },
      "expression": false,
      "start": 773,
      "end": 799
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 810,
        "end": 815
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 819,
                "end": 820
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 821,
                    "end": 827
                  }
                ],
                "start": 820,
                "end": 828
              },
              "start": 819,
              "end": 828
            },
            "start": 817,
            "end": 828
          },
          "start": 816,
          "end": 828
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 801,
      "end": 830
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 840,
        "end": 845
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 849,
                "end": 850
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 851,
                    "end": 857
                  }
                ],
                "start": 850,
                "end": 858
              },
              "start": 849,
              "end": 858
            },
            "start": 847,
            "end": 858
          },
          "start": 846,
          "end": 858
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 831,
      "end": 860
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 879,
        "end": 884
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
              "type": "TSAnyKeyword",
              "start": 888,
              "end": 891
            },
            "start": 886,
            "end": 891
          },
          "start": 885,
          "end": 891
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 893,
        "end": 896
      },
      "expression": false,
      "start": 870,
      "end": 896
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 907,
        "end": 911
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 915,
                "end": 916
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 917,
                    "end": 923
                  }
                ],
                "start": 916,
                "end": 924
              },
              "start": 915,
              "end": 924
            },
            "start": 913,
            "end": 924
          },
          "start": 912,
          "end": 924
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 898,
      "end": 926
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 936,
        "end": 940
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 944,
                "end": 945
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 946,
                    "end": 952
                  }
                ],
                "start": 945,
                "end": 953
              },
              "start": 944,
              "end": 953
            },
            "start": 942,
            "end": 953
          },
          "start": 941,
          "end": 953
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 927,
      "end": 955
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 974,
        "end": 978
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
              "type": "TSAnyKeyword",
              "start": 982,
              "end": 985
            },
            "start": 980,
            "end": 985
          },
          "start": 979,
          "end": 985
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 987,
        "end": 990
      },
      "expression": false,
      "start": 965,
      "end": 990
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1001,
        "end": 1005
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1016,
                "end": 1017
              },
              "typeArguments": null,
              "start": 1009,
              "end": 1017
            },
            "start": 1007,
            "end": 1017
          },
          "start": 1006,
          "end": 1017
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 992,
      "end": 1019
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1029,
        "end": 1033
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1044,
                "end": 1045
              },
              "typeArguments": null,
              "start": 1037,
              "end": 1045
            },
            "start": 1035,
            "end": 1045
          },
          "start": 1034,
          "end": 1045
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1020,
      "end": 1047
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1066,
        "end": 1070
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
              "type": "TSAnyKeyword",
              "start": 1074,
              "end": 1077
            },
            "start": 1072,
            "end": 1077
          },
          "start": 1071,
          "end": 1077
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1079,
        "end": 1082
      },
      "expression": false,
      "start": 1057,
      "end": 1082
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1093,
        "end": 1097
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1108,
                "end": 1109
              },
              "typeArguments": null,
              "start": 1101,
              "end": 1109
            },
            "start": 1099,
            "end": 1109
          },
          "start": 1098,
          "end": 1109
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1084,
      "end": 1111
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1121,
        "end": 1125
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1136,
                "end": 1137
              },
              "typeArguments": null,
              "start": 1129,
              "end": 1137
            },
            "start": 1127,
            "end": 1137
          },
          "start": 1126,
          "end": 1137
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1112,
      "end": 1139
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1158,
        "end": 1162
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
              "type": "TSAnyKeyword",
              "start": 1166,
              "end": 1169
            },
            "start": 1164,
            "end": 1169
          },
          "start": 1163,
          "end": 1169
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1171,
        "end": 1174
      },
      "expression": false,
      "start": 1149,
      "end": 1174
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1185,
        "end": 1189
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1193,
                "end": 1194
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1195,
                    "end": 1201
                  }
                ],
                "start": 1194,
                "end": 1202
              },
              "start": 1193,
              "end": 1202
            },
            "start": 1191,
            "end": 1202
          },
          "start": 1190,
          "end": 1202
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 1205,
          "end": 1211
        },
        "start": 1203,
        "end": 1211
      },
      "body": null,
      "expression": false,
      "start": 1176,
      "end": 1212
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1222,
        "end": 1226
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 1230,
                "end": 1231
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1232,
                    "end": 1238
                  }
                ],
                "start": 1231,
                "end": 1239
              },
              "start": 1230,
              "end": 1239
            },
            "start": 1228,
            "end": 1239
          },
          "start": 1227,
          "end": 1239
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 1242,
          "end": 1248
        },
        "start": 1240,
        "end": 1248
      },
      "body": null,
      "expression": false,
      "start": 1213,
      "end": 1249
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1273,
        "end": 1277
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
              "type": "TSAnyKeyword",
              "start": 1281,
              "end": 1284
            },
            "start": 1279,
            "end": 1284
          },
          "start": 1278,
          "end": 1284
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1287,
          "end": 1290
        },
        "start": 1285,
        "end": 1290
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1291,
        "end": 1294
      },
      "expression": false,
      "start": 1264,
      "end": 1294
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1305,
        "end": 1309
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1313,
                "end": 1314
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1315,
                    "end": 1321
                  }
                ],
                "start": 1314,
                "end": 1322
              },
              "start": 1313,
              "end": 1322
            },
            "start": 1311,
            "end": 1322
          },
          "start": 1310,
          "end": 1322
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1296,
      "end": 1324
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1334,
        "end": 1338
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1342,
                "end": 1343
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1344,
                    "end": 1350
                  }
                ],
                "start": 1343,
                "end": 1351
              },
              "start": 1342,
              "end": 1351
            },
            "start": 1340,
            "end": 1351
          },
          "start": 1339,
          "end": 1351
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1325,
      "end": 1353
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1400,
        "end": 1404
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
              "type": "TSAnyKeyword",
              "start": 1408,
              "end": 1411
            },
            "start": 1406,
            "end": 1411
          },
          "start": 1405,
          "end": 1411
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1413,
        "end": 1416
      },
      "expression": false,
      "start": 1391,
      "end": 1416
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1427,
        "end": 1432
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1436,
                "end": 1437
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1438,
                    "end": 1444
                  }
                ],
                "start": 1437,
                "end": 1445
              },
              "start": 1436,
              "end": 1445
            },
            "start": 1434,
            "end": 1445
          },
          "start": 1433,
          "end": 1445
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1418,
      "end": 1447
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1457,
        "end": 1462
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1473,
                "end": 1474
              },
              "typeArguments": null,
              "start": 1466,
              "end": 1474
            },
            "start": 1464,
            "end": 1474
          },
          "start": 1463,
          "end": 1474
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1448,
      "end": 1476
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1500,
        "end": 1505
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
              "type": "TSAnyKeyword",
              "start": 1509,
              "end": 1512
            },
            "start": 1507,
            "end": 1512
          },
          "start": 1506,
          "end": 1512
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1514,
        "end": 1517
      },
      "expression": false,
      "start": 1491,
      "end": 1517
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1528,
        "end": 1533
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1537,
                "end": 1538
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1539,
                    "end": 1545
                  }
                ],
                "start": 1538,
                "end": 1546
              },
              "start": 1537,
              "end": 1546
            },
            "start": 1535,
            "end": 1546
          },
          "start": 1534,
          "end": 1546
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1519,
      "end": 1548
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1558,
        "end": 1563
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1574,
                "end": 1575
              },
              "typeArguments": null,
              "start": 1567,
              "end": 1575
            },
            "start": 1565,
            "end": 1575
          },
          "start": 1564,
          "end": 1575
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1549,
      "end": 1577
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1593,
        "end": 1598
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
              "type": "TSAnyKeyword",
              "start": 1602,
              "end": 1605
            },
            "start": 1600,
            "end": 1605
          },
          "start": 1599,
          "end": 1605
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1607,
        "end": 1610
      },
      "expression": false,
      "start": 1584,
      "end": 1610
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1621,
        "end": 1626
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 1630,
                "end": 1631
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1632,
                    "end": 1638
                  }
                ],
                "start": 1631,
                "end": 1639
              },
              "start": 1630,
              "end": 1639
            },
            "start": 1628,
            "end": 1639
          },
          "start": 1627,
          "end": 1639
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1612,
      "end": 1641
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1651,
        "end": 1656
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1660,
                "end": 1661
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1662,
                    "end": 1668
                  }
                ],
                "start": 1661,
                "end": 1669
              },
              "start": 1660,
              "end": 1669
            },
            "start": 1658,
            "end": 1669
          },
          "start": 1657,
          "end": 1669
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1642,
      "end": 1671
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1687,
        "end": 1692
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
              "type": "TSAnyKeyword",
              "start": 1696,
              "end": 1699
            },
            "start": 1694,
            "end": 1699
          },
          "start": 1693,
          "end": 1699
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1701,
        "end": 1704
      },
      "expression": false,
      "start": 1678,
      "end": 1704
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1715,
        "end": 1721
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1725,
                "end": 1727
              },
              "typeArguments": null,
              "start": 1725,
              "end": 1727
            },
            "start": 1723,
            "end": 1727
          },
          "start": 1722,
          "end": 1727
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1706,
      "end": 1729
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1739,
        "end": 1745
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1749,
                "end": 1750
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1751,
                    "end": 1757
                  }
                ],
                "start": 1750,
                "end": 1758
              },
              "start": 1749,
              "end": 1758
            },
            "start": 1747,
            "end": 1758
          },
          "start": 1746,
          "end": 1758
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1730,
      "end": 1760
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1784,
        "end": 1790
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
              "type": "TSAnyKeyword",
              "start": 1794,
              "end": 1797
            },
            "start": 1792,
            "end": 1797
          },
          "start": 1791,
          "end": 1797
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1799,
        "end": 1802
      },
      "expression": false,
      "start": 1775,
      "end": 1802
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1813,
        "end": 1818
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 1822,
                "end": 1823
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1824,
                    "end": 1830
                  }
                ],
                "start": 1823,
                "end": 1831
              },
              "start": 1822,
              "end": 1831
            },
            "start": 1820,
            "end": 1831
          },
          "start": 1819,
          "end": 1831
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1804,
      "end": 1833
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1843,
        "end": 1848
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1859,
                "end": 1860
              },
              "typeArguments": null,
              "start": 1852,
              "end": 1860
            },
            "start": 1850,
            "end": 1860
          },
          "start": 1849,
          "end": 1860
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1834,
      "end": 1862
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1886,
        "end": 1891
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
              "type": "TSAnyKeyword",
              "start": 1895,
              "end": 1898
            },
            "start": 1893,
            "end": 1898
          },
          "start": 1892,
          "end": 1898
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1900,
        "end": 1903
      },
      "expression": false,
      "start": 1877,
      "end": 1903
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1914,
        "end": 1919
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 1923,
                "end": 1924
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1925,
                    "end": 1931
                  }
                ],
                "start": 1924,
                "end": 1932
              },
              "start": 1923,
              "end": 1932
            },
            "start": 1921,
            "end": 1932
          },
          "start": 1920,
          "end": 1932
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1905,
      "end": 1934
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1944,
        "end": 1949
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1960,
                "end": 1961
              },
              "typeArguments": null,
              "start": 1953,
              "end": 1961
            },
            "start": 1951,
            "end": 1961
          },
          "start": 1950,
          "end": 1961
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1935,
      "end": 1963
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1979,
        "end": 1984
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
              "type": "TSAnyKeyword",
              "start": 1988,
              "end": 1991
            },
            "start": 1986,
            "end": 1991
          },
          "start": 1985,
          "end": 1991
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1993,
        "end": 1996
      },
      "expression": false,
      "start": 1970,
      "end": 1996
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 335,
  "end": 1996
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 335,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 341,
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
    "value": "T",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 352,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 377,
    "end": 378
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 379,
    "end": 385
  },
  {
    "type": "Null",
    "value": "null",
    "start": 386,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 394,
    "end": 395
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 397,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 414,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 439,
    "end": 440
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 441,
    "end": 447
  },
  {
    "type": "Null",
    "value": "null",
    "start": 448,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 456,
    "end": 457
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 459,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 474,
    "end": 475
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 480,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 488,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 492,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 504,
    "end": 505
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 507,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 517,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 520,
    "end": 521
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 526,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 534,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 537,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 541,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 545,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 553,
    "end": 554
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 556,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 563,
    "end": 564
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 565,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 573,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 580,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 591,
    "end": 592
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 593,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "new",
    "start": 603,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 609,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 611,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 614,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 618,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 623,
    "end": 624
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 625,
    "end": 631
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 632,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 637,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 640,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 642,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 651,
    "end": 652
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 704,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 713,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 718,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 720,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 723,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 724,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 732,
    "end": 733
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 734,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 743,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 750,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 754,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 762,
    "end": 763
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 773,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 782,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 787,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 789,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 791,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "type": "Keyword",
    "value": "function",
    "start": 801,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 810,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 815,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 817,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 820,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 821,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "function",
    "start": 831,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 840,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ":",
    "start": 847,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 850,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 851,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": ";",
    "start": 859,
    "end": 860
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 870,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 879,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 884,
    "end": 885
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 885,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 886,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 888,
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
    "value": "{",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 895,
    "end": 896
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 898,
    "end": 906
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 907,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 911,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 913,
    "end": 914
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 916,
    "end": 917
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 917,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": ";",
    "start": 925,
    "end": 926
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 927,
    "end": 935
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 936,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 940,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 942,
    "end": 943
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 945,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 946,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 953,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 954,
    "end": 955
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 965,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 974,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 978,
    "end": 979
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 979,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 980,
    "end": 981
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 982,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 985,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 987,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 989,
    "end": 990
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 992,
    "end": 1000
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1001,
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
    "value": "x",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1009,
    "end": 1015
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1020,
    "end": 1028
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1029,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1037,
    "end": 1043
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1057,
    "end": 1065
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1066,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1074,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1084,
    "end": 1092
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1093,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1101,
    "end": 1107
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1112,
    "end": 1120
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1121,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1129,
    "end": 1135
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": ";",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1149,
    "end": 1157
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1158,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ":",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1166,
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
    "value": "{",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1176,
    "end": 1184
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1185,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1195,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1205,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1213,
    "end": 1221
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1222,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1232,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1242,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1264,
    "end": 1272
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1273,
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
    "value": "x",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1281,
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
    "value": ":",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1287,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1296,
    "end": 1304
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1305,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1315,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1325,
    "end": 1333
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1334,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1344,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1391,
    "end": 1399
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1400,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1408,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1418,
    "end": 1426
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1427,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1438,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1448,
    "end": 1456
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1457,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1466,
    "end": 1472
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1491,
    "end": 1499
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1500,
    "end": 1505
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1506,
    "end": 1507
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1509,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1512,
    "end": 1513
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1519,
    "end": 1527
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1528,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1539,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1546,
    "end": 1547
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1549,
    "end": 1557
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1558,
    "end": 1563
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1563,
    "end": 1564
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1565,
    "end": 1566
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1567,
    "end": 1573
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1584,
    "end": 1592
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1593,
    "end": 1598
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1598,
    "end": 1599
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1602,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1612,
    "end": 1620
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1621,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1632,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1642,
    "end": 1650
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1651,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1656,
    "end": 1657
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1658,
    "end": 1659
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1662,
    "end": 1668
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": ";",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1678,
    "end": 1686
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1687,
    "end": 1692
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1696,
    "end": 1699
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1701,
    "end": 1702
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1703,
    "end": 1704
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1706,
    "end": 1714
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 1715,
    "end": 1721
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1721,
    "end": 1722
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1722,
    "end": 1723
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 1725,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1730,
    "end": 1738
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 1739,
    "end": 1745
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1745,
    "end": 1746
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1747,
    "end": 1748
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1751,
    "end": 1757
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1757,
    "end": 1758
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1775,
    "end": 1783
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 1784,
    "end": 1790
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1791,
    "end": 1792
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1792,
    "end": 1793
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1794,
    "end": 1797
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1797,
    "end": 1798
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1799,
    "end": 1800
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1804,
    "end": 1812
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 1813,
    "end": 1818
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1820,
    "end": 1821
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1823,
    "end": 1824
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1824,
    "end": 1830
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1830,
    "end": 1831
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1831,
    "end": 1832
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1834,
    "end": 1842
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 1843,
    "end": 1848
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1848,
    "end": 1849
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1849,
    "end": 1850
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1850,
    "end": 1851
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1852,
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
    "value": ")",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1861,
    "end": 1862
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1877,
    "end": 1885
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 1886,
    "end": 1891
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1892,
    "end": 1893
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1893,
    "end": 1894
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1895,
    "end": 1898
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1902,
    "end": 1903
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1905,
    "end": 1913
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 1914,
    "end": 1919
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1919,
    "end": 1920
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1920,
    "end": 1921
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1921,
    "end": 1922
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1924,
    "end": 1925
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1925,
    "end": 1931
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1931,
    "end": 1932
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1932,
    "end": 1933
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1935,
    "end": 1943
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 1944,
    "end": 1949
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1949,
    "end": 1950
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1950,
    "end": 1951
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1953,
    "end": 1959
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1960,
    "end": 1961
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1961,
    "end": 1962
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1962,
    "end": 1963
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1970,
    "end": 1978
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 1979,
    "end": 1984
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1984,
    "end": 1985
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1985,
    "end": 1986
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1986,
    "end": 1987
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1988,
    "end": 1991
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1991,
    "end": 1992
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1993,
    "end": 1994
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1995,
    "end": 1996
  }
]
```
