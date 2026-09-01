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
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 353,
                "end": 354
              },
              "typeArguments": null,
              "start": 353,
              "end": 354
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 343,
            "end": 354
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 356,
              "end": 357
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 366,
                "end": 371
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 372,
                    "end": 378
                  }
                ],
                "start": 371,
                "end": 379
              },
              "start": 366,
              "end": 379
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 356,
            "end": 379
          }
        ],
        "start": 342,
        "end": 380
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
              "start": 387,
              "end": 398
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
                        "start": 402,
                        "end": 403
                      },
                      "typeArguments": null,
                      "start": 402,
                      "end": 403
                    },
                    "start": 400,
                    "end": 403
                  },
                  "start": 399,
                  "end": 403
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
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
                        "start": 408,
                        "end": 409
                      },
                      "typeArguments": null,
                      "start": 408,
                      "end": 409
                    },
                    "start": 406,
                    "end": 409
                  },
                  "start": 405,
                  "end": 409
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
                      "start": 420,
                      "end": 424
                    },
                    "start": 413,
                    "end": 425
                  }
                ],
                "start": 411,
                "end": 427
              },
              "expression": false,
              "start": 398,
              "end": 427
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 387,
            "end": 427
          }
        ],
        "start": 381,
        "end": 429
      },
      "abstract": false,
      "declare": false,
      "start": 335,
      "end": 429
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
        "start": 437,
        "end": 438
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
              "start": 439,
              "end": 440
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 449,
                "end": 450
              },
              "typeArguments": null,
              "start": 449,
              "end": 450
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 439,
            "end": 450
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 452,
              "end": 453
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "String",
                "optional": false,
                "typeAnnotation": null,
                "start": 462,
                "end": 468
              },
              "typeArguments": null,
              "start": 462,
              "end": 468
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 452,
            "end": 468
          }
        ],
        "start": 438,
        "end": 469
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
              "start": 476,
              "end": 487
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
                        "start": 491,
                        "end": 492
                      },
                      "typeArguments": null,
                      "start": 491,
                      "end": 492
                    },
                    "start": 489,
                    "end": 492
                  },
                  "start": 488,
                  "end": 492
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
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
                        "start": 497,
                        "end": 498
                      },
                      "typeArguments": null,
                      "start": 497,
                      "end": 498
                    },
                    "start": 495,
                    "end": 498
                  },
                  "start": 494,
                  "end": 498
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
                      "start": 509,
                      "end": 513
                    },
                    "start": 502,
                    "end": 514
                  }
                ],
                "start": 500,
                "end": 516
              },
              "expression": false,
              "start": 487,
              "end": 516
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 476,
            "end": 516
          }
        ],
        "start": 470,
        "end": 518
      },
      "abstract": false,
      "declare": false,
      "start": 431,
      "end": 518
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 526,
        "end": 527
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
              "start": 528,
              "end": 529
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 538,
                "end": 539
              },
              "typeArguments": null,
              "start": 538,
              "end": 539
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 528,
            "end": 539
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 541,
              "end": 542
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Number",
                "optional": false,
                "typeAnnotation": null,
                "start": 551,
                "end": 557
              },
              "typeArguments": null,
              "start": 551,
              "end": 557
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 541,
            "end": 557
          }
        ],
        "start": 527,
        "end": 558
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
              "start": 565,
              "end": 576
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
                        "start": 580,
                        "end": 581
                      },
                      "typeArguments": null,
                      "start": 580,
                      "end": 581
                    },
                    "start": 578,
                    "end": 581
                  },
                  "start": 577,
                  "end": 581
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
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
                        "start": 586,
                        "end": 587
                      },
                      "typeArguments": null,
                      "start": 586,
                      "end": 587
                    },
                    "start": 584,
                    "end": 587
                  },
                  "start": 583,
                  "end": 587
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
                      "start": 598,
                      "end": 602
                    },
                    "start": 591,
                    "end": 603
                  }
                ],
                "start": 589,
                "end": 605
              },
              "expression": false,
              "start": 576,
              "end": 605
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 565,
            "end": 605
          }
        ],
        "start": 559,
        "end": 607
      },
      "abstract": false,
      "declare": false,
      "start": 520,
      "end": 607
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 619,
        "end": 620
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
              "start": 621,
              "end": 622
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 631,
                "end": 632
              },
              "typeArguments": null,
              "start": 631,
              "end": 632
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 621,
            "end": 632
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 634,
              "end": 635
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Number",
                "optional": false,
                "typeAnnotation": null,
                "start": 644,
                "end": 650
              },
              "typeArguments": null,
              "start": 644,
              "end": 650
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 634,
            "end": 650
          }
        ],
        "start": 620,
        "end": 651
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
                      "start": 665,
                      "end": 666
                    },
                    "typeArguments": null,
                    "start": 665,
                    "end": 666
                  },
                  "start": 663,
                  "end": 666
                },
                "start": 662,
                "end": 666
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
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
                      "start": 671,
                      "end": 672
                    },
                    "typeArguments": null,
                    "start": 671,
                    "end": 672
                  },
                  "start": 669,
                  "end": 672
                },
                "start": 668,
                "end": 672
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 675,
                "end": 681
              },
              "start": 673,
              "end": 681
            },
            "start": 658,
            "end": 682
          }
        ],
        "start": 652,
        "end": 684
      },
      "declare": false,
      "start": 609,
      "end": 684
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 696,
        "end": 698
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
                    "start": 709,
                    "end": 710
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 719,
                      "end": 720
                    },
                    "typeArguments": null,
                    "start": 719,
                    "end": 720
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 709,
                  "end": 720
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 722,
                    "end": 723
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Boolean",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 732,
                      "end": 739
                    },
                    "typeArguments": null,
                    "start": 732,
                    "end": 739
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 722,
                  "end": 739
                }
              ],
              "start": 708,
              "end": 740
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
                      "start": 744,
                      "end": 745
                    },
                    "typeArguments": null,
                    "start": 744,
                    "end": 745
                  },
                  "start": 742,
                  "end": 745
                },
                "start": 741,
                "end": 745
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
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
                      "start": 750,
                      "end": 751
                    },
                    "typeArguments": null,
                    "start": 750,
                    "end": 751
                  },
                  "start": 748,
                  "end": 751
                },
                "start": 747,
                "end": 751
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 754,
                "end": 760
              },
              "start": 752,
              "end": 760
            },
            "start": 705,
            "end": 761
          }
        ],
        "start": 699,
        "end": 763
      },
      "declare": false,
      "start": 686,
      "end": 763
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
                            "start": 778,
                            "end": 779
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 788,
                              "end": 789
                            },
                            "typeArguments": null,
                            "start": 788,
                            "end": 789
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 778,
                          "end": 789
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 791,
                            "end": 792
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Array",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 801,
                              "end": 806
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 807,
                                  "end": 813
                                }
                              ],
                              "start": 806,
                              "end": 814
                            },
                            "start": 801,
                            "end": 814
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 791,
                          "end": 814
                        }
                      ],
                      "start": 777,
                      "end": 815
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
                              "start": 819,
                              "end": 820
                            },
                            "typeArguments": null,
                            "start": 819,
                            "end": 820
                          },
                          "start": 817,
                          "end": 820
                        },
                        "start": 816,
                        "end": 820
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
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
                              "start": 825,
                              "end": 826
                            },
                            "typeArguments": null,
                            "start": 825,
                            "end": 826
                          },
                          "start": 823,
                          "end": 826
                        },
                        "start": 822,
                        "end": 826
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 829,
                        "end": 835
                      },
                      "start": 827,
                      "end": 835
                    },
                    "start": 774,
                    "end": 835
                  }
                ],
                "start": 772,
                "end": 837
              },
              "start": 770,
              "end": 837
            },
            "start": 769,
            "end": 837
          },
          "init": null,
          "definite": false,
          "start": 769,
          "end": 837
        }
      ],
      "declare": false,
      "start": 765,
      "end": 837
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
            "start": 842,
            "end": 843
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
                  "start": 848,
                  "end": 851
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
                          "start": 852,
                          "end": 853
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 862,
                            "end": 863
                          },
                          "typeArguments": null,
                          "start": 862,
                          "end": 863
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 852,
                        "end": 863
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 865,
                          "end": 866
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RegExp",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 875,
                            "end": 881
                          },
                          "typeArguments": null,
                          "start": 875,
                          "end": 881
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 865,
                        "end": 881
                      }
                    ],
                    "start": 851,
                    "end": 882
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
                            "start": 886,
                            "end": 887
                          },
                          "typeArguments": null,
                          "start": 886,
                          "end": 887
                        },
                        "start": 884,
                        "end": 887
                      },
                      "start": 883,
                      "end": 887
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
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
                            "start": 892,
                            "end": 893
                          },
                          "typeArguments": null,
                          "start": 892,
                          "end": 893
                        },
                        "start": 890,
                        "end": 893
                      },
                      "start": 889,
                      "end": 893
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
                          "value": "",
                          "raw": "''",
                          "start": 904,
                          "end": 906
                        },
                        "start": 897,
                        "end": 907
                      }
                    ],
                    "start": 895,
                    "end": 909
                  },
                  "expression": false,
                  "start": 851,
                  "end": 909
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 848,
                "end": 909
              }
            ],
            "start": 846,
            "end": 911
          },
          "definite": false,
          "start": 842,
          "end": 911
        }
      ],
      "declare": false,
      "start": 838,
      "end": 912
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 973,
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 982,
                "end": 983
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 984,
                      "end": 989
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 990,
                          "end": 996
                        }
                      ],
                      "start": 989,
                      "end": 997
                    },
                    "start": 984,
                    "end": 997
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 999,
                      "end": 1004
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1005,
                          "end": 1011
                        }
                      ],
                      "start": 1004,
                      "end": 1012
                    },
                    "start": 999,
                    "end": 1012
                  }
                ],
                "start": 983,
                "end": 1013
              },
              "start": 982,
              "end": 1013
            },
            "start": 980,
            "end": 1013
          },
          "start": 979,
          "end": 1013
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 964,
      "end": 1015
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1025,
        "end": 1030
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
                "start": 1034,
                "end": 1035
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1036,
                      "end": 1041
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1042,
                          "end": 1048
                        }
                      ],
                      "start": 1041,
                      "end": 1049
                    },
                    "start": 1036,
                    "end": 1049
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1051,
                      "end": 1056
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1057,
                          "end": 1063
                        }
                      ],
                      "start": 1056,
                      "end": 1064
                    },
                    "start": 1051,
                    "end": 1064
                  }
                ],
                "start": 1035,
                "end": 1065
              },
              "start": 1034,
              "end": 1065
            },
            "start": 1032,
            "end": 1065
          },
          "start": 1031,
          "end": 1065
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1016,
      "end": 1067
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1086,
        "end": 1091
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
              "start": 1095,
              "end": 1098
            },
            "start": 1093,
            "end": 1098
          },
          "start": 1092,
          "end": 1098
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1100,
        "end": 1103
      },
      "expression": false,
      "start": 1077,
      "end": 1103
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1114,
        "end": 1119
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
                "start": 1123,
                "end": 1124
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1125,
                      "end": 1131
                    },
                    "typeArguments": null,
                    "start": 1125,
                    "end": 1131
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1133,
                      "end": 1139
                    },
                    "typeArguments": null,
                    "start": 1133,
                    "end": 1139
                  }
                ],
                "start": 1124,
                "end": 1140
              },
              "start": 1123,
              "end": 1140
            },
            "start": 1121,
            "end": 1140
          },
          "start": 1120,
          "end": 1140
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1105,
      "end": 1142
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1152,
        "end": 1157
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
                "start": 1161,
                "end": 1162
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1163,
                      "end": 1169
                    },
                    "typeArguments": null,
                    "start": 1163,
                    "end": 1169
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1171,
                      "end": 1177
                    },
                    "typeArguments": null,
                    "start": 1171,
                    "end": 1177
                  }
                ],
                "start": 1162,
                "end": 1178
              },
              "start": 1161,
              "end": 1178
            },
            "start": 1159,
            "end": 1178
          },
          "start": 1158,
          "end": 1178
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1143,
      "end": 1180
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1199,
        "end": 1204
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
              "start": 1208,
              "end": 1211
            },
            "start": 1206,
            "end": 1211
          },
          "start": 1205,
          "end": 1211
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1213,
        "end": 1216
      },
      "expression": false,
      "start": 1190,
      "end": 1216
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1227,
        "end": 1231
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
                "start": 1235,
                "end": 1236
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1237,
                      "end": 1243
                    },
                    "typeArguments": null,
                    "start": 1237,
                    "end": 1243
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1245,
                      "end": 1251
                    },
                    "typeArguments": null,
                    "start": 1245,
                    "end": 1251
                  }
                ],
                "start": 1236,
                "end": 1252
              },
              "start": 1235,
              "end": 1252
            },
            "start": 1233,
            "end": 1252
          },
          "start": 1232,
          "end": 1252
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1218,
      "end": 1254
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1264,
        "end": 1268
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
                "start": 1272,
                "end": 1273
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1274,
                      "end": 1280
                    },
                    "typeArguments": null,
                    "start": 1274,
                    "end": 1280
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1282,
                      "end": 1288
                    },
                    "typeArguments": null,
                    "start": 1282,
                    "end": 1288
                  }
                ],
                "start": 1273,
                "end": 1289
              },
              "start": 1272,
              "end": 1289
            },
            "start": 1270,
            "end": 1289
          },
          "start": 1269,
          "end": 1289
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1255,
      "end": 1291
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1310,
        "end": 1314
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
              "start": 1318,
              "end": 1321
            },
            "start": 1316,
            "end": 1321
          },
          "start": 1315,
          "end": 1321
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1323,
        "end": 1326
      },
      "expression": false,
      "start": 1301,
      "end": 1326
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1337,
        "end": 1341
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
                "start": 1352,
                "end": 1353
              },
              "typeArguments": null,
              "start": 1345,
              "end": 1353
            },
            "start": 1343,
            "end": 1353
          },
          "start": 1342,
          "end": 1353
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1328,
      "end": 1355
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1365,
        "end": 1369
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
                "start": 1380,
                "end": 1381
              },
              "typeArguments": null,
              "start": 1373,
              "end": 1381
            },
            "start": 1371,
            "end": 1381
          },
          "start": 1370,
          "end": 1381
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1356,
      "end": 1383
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1402,
        "end": 1406
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
              "start": 1410,
              "end": 1413
            },
            "start": 1408,
            "end": 1413
          },
          "start": 1407,
          "end": 1413
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1415,
        "end": 1418
      },
      "expression": false,
      "start": 1393,
      "end": 1418
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1429,
        "end": 1433
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
                "start": 1444,
                "end": 1445
              },
              "typeArguments": null,
              "start": 1437,
              "end": 1445
            },
            "start": 1435,
            "end": 1445
          },
          "start": 1434,
          "end": 1445
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1420,
      "end": 1447
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1457,
        "end": 1461
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
                "start": 1472,
                "end": 1473
              },
              "typeArguments": null,
              "start": 1465,
              "end": 1473
            },
            "start": 1463,
            "end": 1473
          },
          "start": 1462,
          "end": 1473
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1448,
      "end": 1475
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1494,
        "end": 1498
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
              "start": 1502,
              "end": 1505
            },
            "start": 1500,
            "end": 1505
          },
          "start": 1499,
          "end": 1505
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1507,
        "end": 1510
      },
      "expression": false,
      "start": 1485,
      "end": 1510
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1521,
        "end": 1526
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
                "start": 1530,
                "end": 1531
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1532,
                      "end": 1538
                    },
                    "typeArguments": null,
                    "start": 1532,
                    "end": 1538
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1540,
                      "end": 1546
                    },
                    "typeArguments": null,
                    "start": 1540,
                    "end": 1546
                  }
                ],
                "start": 1531,
                "end": 1547
              },
              "start": 1530,
              "end": 1547
            },
            "start": 1528,
            "end": 1547
          },
          "start": 1527,
          "end": 1547
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1512,
      "end": 1549
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1559,
        "end": 1564
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
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 1568,
                "end": 1569
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1570,
                      "end": 1576
                    },
                    "typeArguments": null,
                    "start": 1570,
                    "end": 1576
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1578,
                      "end": 1584
                    },
                    "typeArguments": null,
                    "start": 1578,
                    "end": 1584
                  }
                ],
                "start": 1569,
                "end": 1585
              },
              "start": 1568,
              "end": 1585
            },
            "start": 1566,
            "end": 1585
          },
          "start": 1565,
          "end": 1585
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1550,
      "end": 1587
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1603,
        "end": 1608
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
              "start": 1612,
              "end": 1615
            },
            "start": 1610,
            "end": 1615
          },
          "start": 1609,
          "end": 1615
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1617,
        "end": 1620
      },
      "expression": false,
      "start": 1594,
      "end": 1620
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1631,
        "end": 1636
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
                "start": 1640,
                "end": 1641
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1642,
                      "end": 1648
                    },
                    "typeArguments": null,
                    "start": 1642,
                    "end": 1648
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1650,
                      "end": 1656
                    },
                    "typeArguments": null,
                    "start": 1650,
                    "end": 1656
                  }
                ],
                "start": 1641,
                "end": 1657
              },
              "start": 1640,
              "end": 1657
            },
            "start": 1638,
            "end": 1657
          },
          "start": 1637,
          "end": 1657
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1622,
      "end": 1659
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1669,
        "end": 1674
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
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 1678,
                "end": 1679
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 1680,
                    "end": 1683
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1685,
                      "end": 1691
                    },
                    "typeArguments": null,
                    "start": 1685,
                    "end": 1691
                  }
                ],
                "start": 1679,
                "end": 1692
              },
              "start": 1678,
              "end": 1692
            },
            "start": 1676,
            "end": 1692
          },
          "start": 1675,
          "end": 1692
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1660,
      "end": 1694
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1710,
        "end": 1715
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
              "start": 1719,
              "end": 1722
            },
            "start": 1717,
            "end": 1722
          },
          "start": 1716,
          "end": 1722
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1724,
        "end": 1727
      },
      "expression": false,
      "start": 1701,
      "end": 1727
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1738,
        "end": 1742
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
                "start": 1746,
                "end": 1747
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1748,
                      "end": 1753
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1754,
                          "end": 1760
                        }
                      ],
                      "start": 1753,
                      "end": 1761
                    },
                    "start": 1748,
                    "end": 1761
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1763,
                      "end": 1768
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1769,
                          "end": 1775
                        }
                      ],
                      "start": 1768,
                      "end": 1776
                    },
                    "start": 1763,
                    "end": 1776
                  }
                ],
                "start": 1747,
                "end": 1777
              },
              "start": 1746,
              "end": 1777
            },
            "start": 1744,
            "end": 1777
          },
          "start": 1743,
          "end": 1777
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1729,
      "end": 1779
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1789,
        "end": 1793
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
                "start": 1797,
                "end": 1798
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1799,
                      "end": 1805
                    },
                    "typeArguments": null,
                    "start": 1799,
                    "end": 1805
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1807,
                      "end": 1813
                    },
                    "typeArguments": null,
                    "start": 1807,
                    "end": 1813
                  }
                ],
                "start": 1798,
                "end": 1814
              },
              "start": 1797,
              "end": 1814
            },
            "start": 1795,
            "end": 1814
          },
          "start": 1794,
          "end": 1814
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1780,
      "end": 1816
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1832,
        "end": 1836
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
              "start": 1840,
              "end": 1843
            },
            "start": 1838,
            "end": 1843
          },
          "start": 1837,
          "end": 1843
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1845,
        "end": 1848
      },
      "expression": false,
      "start": 1823,
      "end": 1848
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1859,
        "end": 1863
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
                "start": 1867,
                "end": 1868
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1869,
                      "end": 1874
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1875,
                          "end": 1881
                        }
                      ],
                      "start": 1874,
                      "end": 1882
                    },
                    "start": 1869,
                    "end": 1882
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1884,
                      "end": 1889
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1890,
                          "end": 1896
                        }
                      ],
                      "start": 1889,
                      "end": 1897
                    },
                    "start": 1884,
                    "end": 1897
                  }
                ],
                "start": 1868,
                "end": 1898
              },
              "start": 1867,
              "end": 1898
            },
            "start": 1865,
            "end": 1898
          },
          "start": 1864,
          "end": 1898
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1850,
      "end": 1900
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1910,
        "end": 1914
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
                "start": 1918,
                "end": 1919
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1920,
                      "end": 1926
                    },
                    "typeArguments": null,
                    "start": 1920,
                    "end": 1926
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1928,
                      "end": 1934
                    },
                    "typeArguments": null,
                    "start": 1928,
                    "end": 1934
                  }
                ],
                "start": 1919,
                "end": 1935
              },
              "start": 1918,
              "end": 1935
            },
            "start": 1916,
            "end": 1935
          },
          "start": 1915,
          "end": 1935
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1901,
      "end": 1937
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1986,
        "end": 1990
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
              "start": 1994,
              "end": 1997
            },
            "start": 1992,
            "end": 1997
          },
          "start": 1991,
          "end": 1997
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1999,
        "end": 2002
      },
      "expression": false,
      "start": 1977,
      "end": 2002
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 2013,
        "end": 2018
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
                "start": 2022,
                "end": 2023
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2024,
                      "end": 2029
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 2030,
                          "end": 2036
                        }
                      ],
                      "start": 2029,
                      "end": 2037
                    },
                    "start": 2024,
                    "end": 2037
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2039,
                      "end": 2044
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 2045,
                          "end": 2051
                        }
                      ],
                      "start": 2044,
                      "end": 2052
                    },
                    "start": 2039,
                    "end": 2052
                  }
                ],
                "start": 2023,
                "end": 2053
              },
              "start": 2022,
              "end": 2053
            },
            "start": 2020,
            "end": 2053
          },
          "start": 2019,
          "end": 2053
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2004,
      "end": 2055
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 2065,
        "end": 2070
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
                "start": 2081,
                "end": 2082
              },
              "typeArguments": null,
              "start": 2074,
              "end": 2082
            },
            "start": 2072,
            "end": 2082
          },
          "start": 2071,
          "end": 2082
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2056,
      "end": 2084
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 2100,
        "end": 2105
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
              "start": 2109,
              "end": 2112
            },
            "start": 2107,
            "end": 2112
          },
          "start": 2106,
          "end": 2112
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2114,
        "end": 2117
      },
      "expression": false,
      "start": 2091,
      "end": 2117
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2128,
        "end": 2133
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
                "start": 2137,
                "end": 2138
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2139,
                      "end": 2144
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 2145,
                          "end": 2151
                        }
                      ],
                      "start": 2144,
                      "end": 2152
                    },
                    "start": 2139,
                    "end": 2152
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2154,
                      "end": 2159
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 2160,
                          "end": 2166
                        }
                      ],
                      "start": 2159,
                      "end": 2167
                    },
                    "start": 2154,
                    "end": 2167
                  }
                ],
                "start": 2138,
                "end": 2168
              },
              "start": 2137,
              "end": 2168
            },
            "start": 2135,
            "end": 2168
          },
          "start": 2134,
          "end": 2168
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2119,
      "end": 2170
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2180,
        "end": 2185
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
                "start": 2196,
                "end": 2197
              },
              "typeArguments": null,
              "start": 2189,
              "end": 2197
            },
            "start": 2187,
            "end": 2197
          },
          "start": 2186,
          "end": 2197
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2171,
      "end": 2199
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2215,
        "end": 2220
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
              "start": 2224,
              "end": 2227
            },
            "start": 2222,
            "end": 2227
          },
          "start": 2221,
          "end": 2227
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2229,
        "end": 2232
      },
      "expression": false,
      "start": 2206,
      "end": 2232
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2243,
        "end": 2248
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
                "start": 2252,
                "end": 2253
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2254,
                      "end": 2260
                    },
                    "typeArguments": null,
                    "start": 2254,
                    "end": 2260
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2262,
                      "end": 2268
                    },
                    "typeArguments": null,
                    "start": 2262,
                    "end": 2268
                  }
                ],
                "start": 2253,
                "end": 2269
              },
              "start": 2252,
              "end": 2269
            },
            "start": 2250,
            "end": 2269
          },
          "start": 2249,
          "end": 2269
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2234,
      "end": 2271
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2281,
        "end": 2286
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
                "start": 2290,
                "end": 2291
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2292,
                      "end": 2298
                    },
                    "typeArguments": null,
                    "start": 2292,
                    "end": 2298
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2300,
                      "end": 2306
                    },
                    "typeArguments": null,
                    "start": 2300,
                    "end": 2306
                  }
                ],
                "start": 2291,
                "end": 2307
              },
              "start": 2290,
              "end": 2307
            },
            "start": 2288,
            "end": 2307
          },
          "start": 2287,
          "end": 2307
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2272,
      "end": 2309
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2325,
        "end": 2330
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
              "start": 2334,
              "end": 2337
            },
            "start": 2332,
            "end": 2337
          },
          "start": 2331,
          "end": 2337
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2339,
        "end": 2342
      },
      "expression": false,
      "start": 2316,
      "end": 2342
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 2353,
        "end": 2359
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
                "start": 2363,
                "end": 2365
              },
              "typeArguments": null,
              "start": 2363,
              "end": 2365
            },
            "start": 2361,
            "end": 2365
          },
          "start": 2360,
          "end": 2365
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2344,
      "end": 2367
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 2377,
        "end": 2383
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
                "start": 2387,
                "end": 2388
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2389,
                      "end": 2395
                    },
                    "typeArguments": null,
                    "start": 2389,
                    "end": 2395
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2397,
                      "end": 2403
                    },
                    "typeArguments": null,
                    "start": 2397,
                    "end": 2403
                  }
                ],
                "start": 2388,
                "end": 2404
              },
              "start": 2387,
              "end": 2404
            },
            "start": 2385,
            "end": 2404
          },
          "start": 2384,
          "end": 2404
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2368,
      "end": 2406
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 2422,
        "end": 2428
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
              "start": 2432,
              "end": 2435
            },
            "start": 2430,
            "end": 2435
          },
          "start": 2429,
          "end": 2435
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2437,
        "end": 2440
      },
      "expression": false,
      "start": 2413,
      "end": 2440
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2451,
        "end": 2456
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
                "start": 2460,
                "end": 2461
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2462,
                      "end": 2468
                    },
                    "typeArguments": null,
                    "start": 2462,
                    "end": 2468
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2470,
                      "end": 2476
                    },
                    "typeArguments": null,
                    "start": 2470,
                    "end": 2476
                  }
                ],
                "start": 2461,
                "end": 2477
              },
              "start": 2460,
              "end": 2477
            },
            "start": 2458,
            "end": 2477
          },
          "start": 2457,
          "end": 2477
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2442,
      "end": 2479
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2489,
        "end": 2494
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
                "start": 2505,
                "end": 2506
              },
              "typeArguments": null,
              "start": 2498,
              "end": 2506
            },
            "start": 2496,
            "end": 2506
          },
          "start": 2495,
          "end": 2506
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2480,
      "end": 2508
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2524,
        "end": 2529
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
              "start": 2533,
              "end": 2536
            },
            "start": 2531,
            "end": 2536
          },
          "start": 2530,
          "end": 2536
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2538,
        "end": 2541
      },
      "expression": false,
      "start": 2515,
      "end": 2541
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2552,
        "end": 2557
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
                "start": 2561,
                "end": 2562
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2563,
                      "end": 2569
                    },
                    "typeArguments": null,
                    "start": 2563,
                    "end": 2569
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2571,
                      "end": 2577
                    },
                    "typeArguments": null,
                    "start": 2571,
                    "end": 2577
                  }
                ],
                "start": 2562,
                "end": 2578
              },
              "start": 2561,
              "end": 2578
            },
            "start": 2559,
            "end": 2578
          },
          "start": 2558,
          "end": 2578
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2543,
      "end": 2580
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2590,
        "end": 2595
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
                "start": 2606,
                "end": 2607
              },
              "typeArguments": null,
              "start": 2599,
              "end": 2607
            },
            "start": 2597,
            "end": 2607
          },
          "start": 2596,
          "end": 2607
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2581,
      "end": 2609
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2625,
        "end": 2630
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
              "start": 2634,
              "end": 2637
            },
            "start": 2632,
            "end": 2637
          },
          "start": 2631,
          "end": 2637
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2639,
        "end": 2642
      },
      "expression": false,
      "start": 2616,
      "end": 2642
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 335,
  "end": 2642
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
    "type": "Keyword",
    "value": "extends",
    "start": 345,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 356,
    "end": 357
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 358,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 366,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 372,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 387,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 400,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 411,
    "end": 412
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 413,
    "end": 419
  },
  {
    "type": "Null",
    "value": "null",
    "start": 420,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 428,
    "end": 429
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 431,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 439,
    "end": 440
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 441,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 452,
    "end": 453
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 454,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 462,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 476,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 492,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 497,
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
    "start": 502,
    "end": 508
  },
  {
    "type": "Null",
    "value": "null",
    "start": 509,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 517,
    "end": 518
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 520,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 528,
    "end": 529
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 530,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "U",
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
    "value": "U",
    "start": 541,
    "end": 542
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 543,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 551,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 565,
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
    "value": "x",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 578,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 581,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "y",
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
    "value": "U",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 589,
    "end": 590
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 591,
    "end": 597
  },
  {
    "type": "Null",
    "value": "null",
    "start": 598,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 602,
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
    "value": "}",
    "start": 606,
    "end": 607
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 609,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 621,
    "end": 622
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 623,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 634,
    "end": 635
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 636,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 644,
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
    "value": "{",
    "start": 652,
    "end": 653
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 658,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 661,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 666,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 673,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 675,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 683,
    "end": 684
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 686,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 696,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 699,
    "end": 700
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 705,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 708,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 709,
    "end": 710
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 711,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 720,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 722,
    "end": 723
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 724,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "Boolean",
    "start": 732,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 739,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 740,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 745,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 754,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 762,
    "end": 763
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 765,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 772,
    "end": 773
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 774,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 777,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 778,
    "end": 779
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 780,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 789,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 791,
    "end": 792
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 793,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 801,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 806,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 807,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 814,
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
    "value": "T",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 820,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 823,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 827,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 829,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 836,
    "end": 837
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 838,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 846,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "new",
    "start": 848,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 851,
    "end": 852
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 852,
    "end": 853
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 854,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 863,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 865,
    "end": 866
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 867,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "RegExp",
    "start": 875,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 882,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 884,
    "end": 885
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 887,
    "end": 888
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 890,
    "end": 891
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 895,
    "end": 896
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 897,
    "end": 903
  },
  {
    "type": "String",
    "value": "''",
    "start": 904,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 906,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 908,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 910,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 911,
    "end": 912
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 964,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 973,
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
    "value": "B",
    "start": 982,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 983,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 984,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 989,
    "end": 990
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 990,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 997,
    "end": 998
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 999,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1005,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1016,
    "end": 1024
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 1025,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1036,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1042,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1051,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1057,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1077,
    "end": 1085
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 1086,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1095,
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
    "value": "{",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1105,
    "end": 1113
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 1114,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 1125,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 1133,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1143,
    "end": 1151
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 1152,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 1163,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 1171,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1190,
    "end": 1198
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 1199,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1208,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1218,
    "end": 1226
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1227,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 1237,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 1245,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1255,
    "end": 1263
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1264,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 1274,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 1282,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1301,
    "end": 1309
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1310,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1318,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1328,
    "end": 1336
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1337,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1345,
    "end": 1351
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1356,
    "end": 1364
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1365,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1373,
    "end": 1379
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1393,
    "end": 1401
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1402,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1410,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1420,
    "end": 1428
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1429,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1437,
    "end": 1443
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "foo4",
    "start": 1457,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1465,
    "end": 1471
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1485,
    "end": 1493
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1494,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1502,
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
    "value": "{",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1512,
    "end": 1520
  },
  {
    "type": "Identifier",
    "value": "foo5c",
    "start": 1521,
    "end": 1526
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 1532,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 1540,
    "end": 1546
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1546,
    "end": 1547
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1550,
    "end": 1558
  },
  {
    "type": "Identifier",
    "value": "foo5c",
    "start": 1559,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1565,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 1570,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 1578,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1586,
    "end": 1587
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1594,
    "end": 1602
  },
  {
    "type": "Identifier",
    "value": "foo5c",
    "start": 1603,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1612,
    "end": 1615
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1615,
    "end": 1616
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1622,
    "end": 1630
  },
  {
    "type": "Identifier",
    "value": "foo6c",
    "start": 1631,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 1642,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 1650,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1656,
    "end": 1657
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1658,
    "end": 1659
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1660,
    "end": 1668
  },
  {
    "type": "Identifier",
    "value": "foo6c",
    "start": 1669,
    "end": 1674
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1674,
    "end": 1675
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1675,
    "end": 1676
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1680,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 1685,
    "end": 1691
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1701,
    "end": 1709
  },
  {
    "type": "Identifier",
    "value": "foo6c",
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
    "type": "Identifier",
    "value": "x",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1717,
    "end": 1718
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1719,
    "end": 1722
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1722,
    "end": 1723
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1729,
    "end": 1737
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1738,
    "end": 1742
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1742,
    "end": 1743
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1743,
    "end": 1744
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1744,
    "end": 1745
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1747,
    "end": 1748
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1748,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1754,
    "end": 1760
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1760,
    "end": 1761
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1761,
    "end": 1762
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1763,
    "end": 1768
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1768,
    "end": 1769
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1769,
    "end": 1775
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1776,
    "end": 1777
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1778,
    "end": 1779
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1780,
    "end": 1788
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1789,
    "end": 1793
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1793,
    "end": 1794
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1795,
    "end": 1796
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1797,
    "end": 1798
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1798,
    "end": 1799
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 1799,
    "end": 1805
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 1807,
    "end": 1813
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1814,
    "end": 1815
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1823,
    "end": 1831
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1832,
    "end": 1836
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1838,
    "end": 1839
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1840,
    "end": 1843
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1850,
    "end": 1858
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1859,
    "end": 1863
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1863,
    "end": 1864
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1864,
    "end": 1865
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1865,
    "end": 1866
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1867,
    "end": 1868
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1868,
    "end": 1869
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1869,
    "end": 1874
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1874,
    "end": 1875
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1875,
    "end": 1881
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1882,
    "end": 1883
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1884,
    "end": 1889
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1889,
    "end": 1890
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1890,
    "end": 1896
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1896,
    "end": 1897
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1897,
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
    "value": ";",
    "start": 1899,
    "end": 1900
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1901,
    "end": 1909
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1910,
    "end": 1914
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1914,
    "end": 1915
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1915,
    "end": 1916
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1918,
    "end": 1919
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1919,
    "end": 1920
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 1920,
    "end": 1926
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1926,
    "end": 1927
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 1928,
    "end": 1934
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1934,
    "end": 1935
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1936,
    "end": 1937
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1977,
    "end": 1985
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1986,
    "end": 1990
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1990,
    "end": 1991
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1991,
    "end": 1992
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1992,
    "end": 1993
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1994,
    "end": 1997
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1997,
    "end": 1998
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1999,
    "end": 2000
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2001,
    "end": 2002
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2004,
    "end": 2012
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 2013,
    "end": 2018
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2018,
    "end": 2019
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2019,
    "end": 2020
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2020,
    "end": 2021
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2022,
    "end": 2023
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2023,
    "end": 2024
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2024,
    "end": 2029
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2029,
    "end": 2030
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2030,
    "end": 2036
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2036,
    "end": 2037
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2037,
    "end": 2038
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2039,
    "end": 2044
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2045,
    "end": 2051
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2051,
    "end": 2052
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2052,
    "end": 2053
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2053,
    "end": 2054
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2054,
    "end": 2055
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2056,
    "end": 2064
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 2065,
    "end": 2070
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2070,
    "end": 2071
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2071,
    "end": 2072
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2072,
    "end": 2073
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2074,
    "end": 2080
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2081,
    "end": 2082
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2082,
    "end": 2083
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2083,
    "end": 2084
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2091,
    "end": 2099
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 2100,
    "end": 2105
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2105,
    "end": 2106
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2106,
    "end": 2107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2107,
    "end": 2108
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2109,
    "end": 2112
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2112,
    "end": 2113
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2114,
    "end": 2115
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2116,
    "end": 2117
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2119,
    "end": 2127
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 2128,
    "end": 2133
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2133,
    "end": 2134
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2134,
    "end": 2135
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2135,
    "end": 2136
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2137,
    "end": 2138
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2138,
    "end": 2139
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2139,
    "end": 2144
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2144,
    "end": 2145
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2145,
    "end": 2151
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2151,
    "end": 2152
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2152,
    "end": 2153
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2154,
    "end": 2159
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2159,
    "end": 2160
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2160,
    "end": 2166
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2166,
    "end": 2167
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2167,
    "end": 2168
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2168,
    "end": 2169
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2169,
    "end": 2170
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2171,
    "end": 2179
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 2180,
    "end": 2185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2185,
    "end": 2186
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2186,
    "end": 2187
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2187,
    "end": 2188
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2189,
    "end": 2195
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2196,
    "end": 2197
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2197,
    "end": 2198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2198,
    "end": 2199
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2206,
    "end": 2214
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 2215,
    "end": 2220
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2220,
    "end": 2221
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2221,
    "end": 2222
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2222,
    "end": 2223
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2224,
    "end": 2227
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2227,
    "end": 2228
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2229,
    "end": 2230
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2231,
    "end": 2232
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2234,
    "end": 2242
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 2243,
    "end": 2248
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2248,
    "end": 2249
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2249,
    "end": 2250
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2250,
    "end": 2251
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2252,
    "end": 2253
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2253,
    "end": 2254
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 2254,
    "end": 2260
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2260,
    "end": 2261
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 2262,
    "end": 2268
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2268,
    "end": 2269
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2269,
    "end": 2270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2270,
    "end": 2271
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2272,
    "end": 2280
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 2281,
    "end": 2286
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2286,
    "end": 2287
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2287,
    "end": 2288
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2288,
    "end": 2289
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2290,
    "end": 2291
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2291,
    "end": 2292
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 2292,
    "end": 2298
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2298,
    "end": 2299
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 2300,
    "end": 2306
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2306,
    "end": 2307
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2307,
    "end": 2308
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2308,
    "end": 2309
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2316,
    "end": 2324
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 2325,
    "end": 2330
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2330,
    "end": 2331
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2331,
    "end": 2332
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2332,
    "end": 2333
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2334,
    "end": 2337
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2337,
    "end": 2338
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2339,
    "end": 2340
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2341,
    "end": 2342
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2344,
    "end": 2352
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 2353,
    "end": 2359
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2359,
    "end": 2360
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2360,
    "end": 2361
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2361,
    "end": 2362
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 2363,
    "end": 2365
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2365,
    "end": 2366
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2366,
    "end": 2367
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2368,
    "end": 2376
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 2377,
    "end": 2383
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2383,
    "end": 2384
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2384,
    "end": 2385
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2385,
    "end": 2386
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2387,
    "end": 2388
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2388,
    "end": 2389
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 2389,
    "end": 2395
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2395,
    "end": 2396
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 2397,
    "end": 2403
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2403,
    "end": 2404
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2404,
    "end": 2405
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2405,
    "end": 2406
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2413,
    "end": 2421
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 2422,
    "end": 2428
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2428,
    "end": 2429
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2429,
    "end": 2430
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2430,
    "end": 2431
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2432,
    "end": 2435
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2435,
    "end": 2436
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2437,
    "end": 2438
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2439,
    "end": 2440
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2442,
    "end": 2450
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 2451,
    "end": 2456
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2456,
    "end": 2457
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2457,
    "end": 2458
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2458,
    "end": 2459
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2460,
    "end": 2461
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2461,
    "end": 2462
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 2462,
    "end": 2468
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2468,
    "end": 2469
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 2470,
    "end": 2476
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2476,
    "end": 2477
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2477,
    "end": 2478
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2478,
    "end": 2479
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2480,
    "end": 2488
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 2489,
    "end": 2494
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2494,
    "end": 2495
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2495,
    "end": 2496
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2496,
    "end": 2497
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2498,
    "end": 2504
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2505,
    "end": 2506
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2506,
    "end": 2507
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2507,
    "end": 2508
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2515,
    "end": 2523
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 2524,
    "end": 2529
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2529,
    "end": 2530
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2530,
    "end": 2531
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2531,
    "end": 2532
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2533,
    "end": 2536
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2536,
    "end": 2537
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2538,
    "end": 2539
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2540,
    "end": 2541
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2543,
    "end": 2551
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 2552,
    "end": 2557
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2557,
    "end": 2558
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2558,
    "end": 2559
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2559,
    "end": 2560
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2561,
    "end": 2562
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2562,
    "end": 2563
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 2563,
    "end": 2569
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2569,
    "end": 2570
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 2571,
    "end": 2577
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2577,
    "end": 2578
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2578,
    "end": 2579
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2579,
    "end": 2580
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2581,
    "end": 2589
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 2590,
    "end": 2595
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2595,
    "end": 2596
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2596,
    "end": 2597
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2597,
    "end": 2598
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2599,
    "end": 2605
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2606,
    "end": 2607
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2607,
    "end": 2608
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2608,
    "end": 2609
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2616,
    "end": 2624
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 2625,
    "end": 2630
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2630,
    "end": 2631
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2631,
    "end": 2632
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2632,
    "end": 2633
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2634,
    "end": 2637
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2637,
    "end": 2638
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2639,
    "end": 2640
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2641,
    "end": 2642
  }
]
```
