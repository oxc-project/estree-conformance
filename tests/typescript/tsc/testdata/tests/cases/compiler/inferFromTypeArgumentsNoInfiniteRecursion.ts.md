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
        "name": "IsEqual",
        "optional": false,
        "typeAnnotation": null,
        "start": 423,
        "end": 430
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 431,
              "end": 432
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 431,
            "end": 432
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 434,
              "end": 435
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 434,
            "end": 435
          }
        ],
        "start": 430,
        "end": 436
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSFunctionType",
          "typeParameters": {
            "type": "TSTypeParameterDeclaration",
            "params": [
              {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "G",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 445,
                  "end": 446
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 445,
                "end": 446
              }
            ],
            "start": 444,
            "end": 447
          },
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "G",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 453,
                  "end": 454
                },
                "typeArguments": null,
                "start": 453,
                "end": 454
              },
              "extendsType": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 463,
                          "end": 464
                        },
                        "typeArguments": null,
                        "start": 463,
                        "end": 464
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "G",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 467,
                          "end": 468
                        },
                        "typeArguments": null,
                        "start": 467,
                        "end": 468
                      }
                    ],
                    "start": 463,
                    "end": 468
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "G",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 471,
                      "end": 472
                    },
                    "typeArguments": null,
                    "start": 471,
                    "end": 472
                  }
                ],
                "start": 463,
                "end": 472
              },
              "trueType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 475,
                  "end": 476
                },
                "start": 475,
                "end": 476
              },
              "falseType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 479,
                  "end": 480
                },
                "start": 479,
                "end": 480
              },
              "start": 453,
              "end": 480
            },
            "start": 450,
            "end": 480
          },
          "start": 444,
          "end": 480
        },
        "extendsType": {
          "type": "TSFunctionType",
          "typeParameters": {
            "type": "TSTypeParameterDeclaration",
            "params": [
              {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "G",
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
            "start": 495,
            "end": 498
          },
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "G",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 504,
                  "end": 505
                },
                "typeArguments": null,
                "start": 504,
                "end": 505
              },
              "extendsType": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 514,
                          "end": 515
                        },
                        "typeArguments": null,
                        "start": 514,
                        "end": 515
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "G",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 518,
                          "end": 519
                        },
                        "typeArguments": null,
                        "start": 518,
                        "end": 519
                      }
                    ],
                    "start": 514,
                    "end": 519
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "G",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 522,
                      "end": 523
                    },
                    "typeArguments": null,
                    "start": 522,
                    "end": 523
                  }
                ],
                "start": 514,
                "end": 523
              },
              "trueType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 526,
                  "end": 527
                },
                "start": 526,
                "end": 527
              },
              "falseType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 530,
                  "end": 531
                },
                "start": 530,
                "end": 531
              },
              "start": 504,
              "end": 531
            },
            "start": 501,
            "end": 531
          },
          "start": 495,
          "end": 531
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 543,
            "end": 547
          },
          "start": 543,
          "end": 547
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 558,
            "end": 563
          },
          "start": 558,
          "end": 563
        },
        "start": 443,
        "end": 563
      },
      "declare": false,
      "start": 418,
      "end": 564
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 571,
        "end": 573
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "RestElement",
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": null,
              "start": 580,
              "end": 584
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 586,
                "end": 589
              },
              "start": 584,
              "end": 589
            },
            "value": null,
            "start": 577,
            "end": 589
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 594,
            "end": 597
          },
          "start": 591,
          "end": 597
        },
        "start": 576,
        "end": 597
      },
      "declare": false,
      "start": 566,
      "end": 598
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Next",
        "optional": false,
        "typeAnnotation": null,
        "start": 604,
        "end": 608
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TFn",
              "optional": false,
              "typeAnnotation": null,
              "start": 609,
              "end": 612
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Fn",
                "optional": false,
                "typeAnnotation": null,
                "start": 621,
                "end": 623
              },
              "typeArguments": null,
              "start": 621,
              "end": 623
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 609,
            "end": 623
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TStack",
              "optional": false,
              "typeAnnotation": null,
              "start": 625,
              "end": 631
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Fn",
                "optional": false,
                "typeAnnotation": null,
                "start": 640,
                "end": 642
              },
              "typeArguments": null,
              "start": 640,
              "end": 642
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 625,
            "end": 642
          }
        ],
        "start": 608,
        "end": 643
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "RestElement",
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": null,
              "start": 650,
              "end": 654
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Parameters",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 656,
                  "end": 666
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
                            "name": "TStack",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 667,
                            "end": 673
                          },
                          "typeArguments": null,
                          "start": 667,
                          "end": 673
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TFn",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 676,
                            "end": 679
                          },
                          "typeArguments": null,
                          "start": 676,
                          "end": 679
                        }
                      ],
                      "start": 667,
                      "end": 679
                    }
                  ],
                  "start": 666,
                  "end": 680
                },
                "start": 656,
                "end": 680
              },
              "start": 654,
              "end": 680
            },
            "value": null,
            "start": 647,
            "end": 680
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ReturnType",
              "optional": false,
              "typeAnnotation": null,
              "start": 685,
              "end": 695
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
                        "name": "TStack",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 696,
                        "end": 702
                      },
                      "typeArguments": null,
                      "start": 696,
                      "end": 702
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TFn",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 705,
                        "end": 708
                      },
                      "typeArguments": null,
                      "start": 705,
                      "end": 708
                    }
                  ],
                  "start": 696,
                  "end": 708
                }
              ],
              "start": 695,
              "end": 709
            },
            "start": 685,
            "end": 709
          },
          "start": 682,
          "end": 709
        },
        "start": 646,
        "end": 709
      },
      "declare": false,
      "start": 599,
      "end": 710
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Wrap",
        "optional": false,
        "typeAnnotation": null,
        "start": 716,
        "end": 720
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TFn",
              "optional": false,
              "typeAnnotation": null,
              "start": 721,
              "end": 724
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Fn",
                "optional": false,
                "typeAnnotation": null,
                "start": 733,
                "end": 735
              },
              "typeArguments": null,
              "start": 733,
              "end": 735
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 721,
            "end": 735
          }
        ],
        "start": 720,
        "end": 736
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TFn",
            "optional": false,
            "typeAnnotation": null,
            "start": 739,
            "end": 742
          },
          "typeArguments": null,
          "start": 739,
          "end": 742
        },
        "extendsType": {
          "type": "TSUnknownKeyword",
          "start": 751,
          "end": 758
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TFn",
            "optional": false,
            "typeAnnotation": null,
            "start": 761,
            "end": 764
          },
          "typeArguments": null,
          "start": 761,
          "end": 764
        },
        "falseType": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 773,
              "end": 777
            },
            "start": 770,
            "end": 777
          },
          "start": 767,
          "end": 777
        },
        "start": 739,
        "end": 777
      },
      "declare": false,
      "start": 711,
      "end": 778
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Inner",
        "optional": false,
        "typeAnnotation": null,
        "start": 785,
        "end": 790
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TFn",
              "optional": false,
              "typeAnnotation": null,
              "start": 791,
              "end": 794
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Fn",
                "optional": false,
                "typeAnnotation": null,
                "start": 803,
                "end": 805
              },
              "typeArguments": null,
              "start": 803,
              "end": 805
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 791,
            "end": 805
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TAcc",
              "optional": false,
              "typeAnnotation": null,
              "start": 807,
              "end": 811
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Fn",
                "optional": false,
                "typeAnnotation": null,
                "start": 820,
                "end": 822
              },
              "typeArguments": null,
              "start": 820,
              "end": 822
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 807,
            "end": 822
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TStack",
              "optional": false,
              "typeAnnotation": null,
              "start": 824,
              "end": 830
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Fn",
                "optional": false,
                "typeAnnotation": null,
                "start": 839,
                "end": 841
              },
              "typeArguments": null,
              "start": 839,
              "end": 841
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 824,
            "end": 841
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TPrevious",
              "optional": false,
              "typeAnnotation": null,
              "start": 843,
              "end": 852
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Fn",
                "optional": false,
                "typeAnnotation": null,
                "start": 861,
                "end": 863
              },
              "typeArguments": null,
              "start": 861,
              "end": 863
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 843,
            "end": 863
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TCurrent",
              "optional": false,
              "typeAnnotation": null,
              "start": 865,
              "end": 873
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Fn",
                "optional": false,
                "typeAnnotation": null,
                "start": 882,
                "end": 884
              },
              "typeArguments": null,
              "start": 882,
              "end": 884
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Next",
                "optional": false,
                "typeAnnotation": null,
                "start": 887,
                "end": 891
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TFn",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 892,
                      "end": 895
                    },
                    "typeArguments": null,
                    "start": 892,
                    "end": 895
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TStack",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 897,
                      "end": 903
                    },
                    "typeArguments": null,
                    "start": 897,
                    "end": 903
                  }
                ],
                "start": 891,
                "end": 904
              },
              "start": 887,
              "end": 904
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 865,
            "end": 904
          }
        ],
        "start": 790,
        "end": 905
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IsEqual",
            "optional": false,
            "typeAnnotation": null,
            "start": 912,
            "end": 919
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TCurrent",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 920,
                  "end": 928
                },
                "typeArguments": null,
                "start": 920,
                "end": 928
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TPrevious",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 930,
                  "end": 939
                },
                "typeArguments": null,
                "start": 930,
                "end": 939
              }
            ],
            "start": 919,
            "end": 940
          },
          "start": 912,
          "end": 940
        },
        "extendsType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 949,
            "end": 953
          },
          "start": 949,
          "end": 953
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TAcc",
            "optional": false,
            "typeAnnotation": null,
            "start": 956,
            "end": 960
          },
          "typeArguments": null,
          "start": 956,
          "end": 960
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Inner",
            "optional": false,
            "typeAnnotation": null,
            "start": 963,
            "end": 968
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TFn",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 969,
                  "end": 972
                },
                "typeArguments": null,
                "start": 969,
                "end": 972
              },
              {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TAcc",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 974,
                      "end": 978
                    },
                    "typeArguments": null,
                    "start": 974,
                    "end": 978
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Wrap",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 981,
                      "end": 985
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TCurrent",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 986,
                            "end": 994
                          },
                          "typeArguments": null,
                          "start": 986,
                          "end": 994
                        }
                      ],
                      "start": 985,
                      "end": 995
                    },
                    "start": 981,
                    "end": 995
                  }
                ],
                "start": 974,
                "end": 995
              },
              {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TCurrent",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 997,
                      "end": 1005
                    },
                    "typeArguments": null,
                    "start": 997,
                    "end": 1005
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TStack",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1008,
                      "end": 1014
                    },
                    "typeArguments": null,
                    "start": 1008,
                    "end": 1014
                  }
                ],
                "start": 997,
                "end": 1014
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TCurrent",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1016,
                  "end": 1024
                },
                "typeArguments": null,
                "start": 1016,
                "end": 1024
              }
            ],
            "start": 968,
            "end": 1025
          },
          "start": 963,
          "end": 1025
        },
        "start": 912,
        "end": 1025
      },
      "declare": false,
      "start": 780,
      "end": 1026
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OwnProperties",
        "optional": false,
        "typeAnnotation": null,
        "start": 1033,
        "end": 1046
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
              "start": 1047,
              "end": 1048
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1047,
            "end": 1048
          }
        ],
        "start": 1046,
        "end": 1049
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 1055,
          "end": 1056
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
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
          "start": 1060,
          "end": 1067
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1070,
              "end": 1071
            },
            "typeArguments": null,
            "start": 1070,
            "end": 1071
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1072,
              "end": 1073
            },
            "typeArguments": null,
            "start": 1072,
            "end": 1073
          },
          "start": 1070,
          "end": 1074
        },
        "optional": false,
        "readonly": null,
        "start": 1052,
        "end": 1076
      },
      "declare": false,
      "start": 1028,
      "end": 1077
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Unwrap",
        "optional": false,
        "typeAnnotation": null,
        "start": 1083,
        "end": 1089
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TFn",
              "optional": false,
              "typeAnnotation": null,
              "start": 1090,
              "end": 1093
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1090,
            "end": 1093
          }
        ],
        "start": 1089,
        "end": 1094
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TFn",
            "optional": false,
            "typeAnnotation": null,
            "start": 1097,
            "end": 1100
          },
          "typeArguments": null,
          "start": 1097,
          "end": 1100
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Fn",
            "optional": false,
            "typeAnnotation": null,
            "start": 1109,
            "end": 1111
          },
          "typeArguments": null,
          "start": 1109,
          "end": 1111
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TFn",
            "optional": false,
            "typeAnnotation": null,
            "start": 1114,
            "end": 1117
          },
          "typeArguments": null,
          "start": 1114,
          "end": 1117
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TFn",
            "optional": false,
            "typeAnnotation": null,
            "start": 1120,
            "end": 1123
          },
          "typeArguments": null,
          "start": 1120,
          "end": 1123
        },
        "start": 1097,
        "end": 1123
      },
      "declare": false,
      "start": 1078,
      "end": 1124
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tree",
        "optional": false,
        "typeAnnotation": null,
        "start": 1131,
        "end": 1135
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
              "start": 1136,
              "end": 1137
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1136,
            "end": 1137
          }
        ],
        "start": 1135,
        "end": 1138
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1141,
            "end": 1142
          },
          "typeArguments": null,
          "start": 1141,
          "end": 1142
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Fn",
            "optional": false,
            "typeAnnotation": null,
            "start": 1151,
            "end": 1153
          },
          "typeArguments": null,
          "start": 1151,
          "end": 1153
        },
        "trueType": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Unwrap",
                "optional": false,
                "typeAnnotation": null,
                "start": 1160,
                "end": 1166
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Inner",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1167,
                      "end": 1172
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
                            "start": 1173,
                            "end": 1174
                          },
                          "typeArguments": null,
                          "start": 1173,
                          "end": 1174
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Wrap",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1176,
                            "end": 1180
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
                                  "start": 1181,
                                  "end": 1182
                                },
                                "typeArguments": null,
                                "start": 1181,
                                "end": 1182
                              }
                            ],
                            "start": 1180,
                            "end": 1183
                          },
                          "start": 1176,
                          "end": 1183
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1185,
                            "end": 1186
                          },
                          "typeArguments": null,
                          "start": 1185,
                          "end": 1186
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1188,
                            "end": 1189
                          },
                          "typeArguments": null,
                          "start": 1188,
                          "end": 1189
                        }
                      ],
                      "start": 1172,
                      "end": 1190
                    },
                    "start": 1167,
                    "end": 1190
                  }
                ],
                "start": 1166,
                "end": 1191
              },
              "start": 1160,
              "end": 1191
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Tree",
                "optional": false,
                "typeAnnotation": null,
                "start": 1194,
                "end": 1198
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "OwnProperties",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1199,
                      "end": 1212
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
                            "start": 1213,
                            "end": 1214
                          },
                          "typeArguments": null,
                          "start": 1213,
                          "end": 1214
                        }
                      ],
                      "start": 1212,
                      "end": 1215
                    },
                    "start": 1199,
                    "end": 1215
                  }
                ],
                "start": 1198,
                "end": 1216
              },
              "start": 1194,
              "end": 1216
            }
          ],
          "start": 1160,
          "end": 1216
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1223,
            "end": 1224
          },
          "typeArguments": null,
          "start": 1223,
          "end": 1224
        },
        "start": 1141,
        "end": 1224
      },
      "declare": false,
      "start": 1126,
      "end": 1225
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Client",
        "optional": false,
        "typeAnnotation": null,
        "start": 1237,
        "end": 1243
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
              "start": 1244,
              "end": 1245
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1244,
            "end": 1245
          }
        ],
        "start": 1243,
        "end": 1246
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "call",
              "optional": false,
              "typeAnnotation": null,
              "start": 1253,
              "end": 1257
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Tree",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1259,
                  "end": 1263
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
                        "start": 1264,
                        "end": 1265
                      },
                      "typeArguments": null,
                      "start": 1264,
                      "end": 1265
                    }
                  ],
                  "start": 1263,
                  "end": 1266
                },
                "start": 1259,
                "end": 1266
              },
              "start": 1257,
              "end": 1266
            },
            "accessibility": null,
            "static": false,
            "start": 1253,
            "end": 1267
          }
        ],
        "start": 1247,
        "end": 1269
      },
      "declare": false,
      "start": 1227,
      "end": 1269
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createHandler",
        "optional": false,
        "typeAnnotation": null,
        "start": 1288,
        "end": 1301
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 1302,
              "end": 1303
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Fn",
                "optional": false,
                "typeAnnotation": null,
                "start": 1312,
                "end": 1314
              },
              "typeArguments": null,
              "start": 1312,
              "end": 1314
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1302,
            "end": 1314
          }
        ],
        "start": 1301,
        "end": 1315
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Client",
            "optional": false,
            "typeAnnotation": null,
            "start": 1319,
            "end": 1325
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
                  "start": 1326,
                  "end": 1327
                },
                "typeArguments": null,
                "start": 1326,
                "end": 1327
              }
            ],
            "start": 1325,
            "end": 1328
          },
          "start": 1319,
          "end": 1328
        },
        "start": 1317,
        "end": 1328
      },
      "body": null,
      "expression": false,
      "start": 1271,
      "end": 1329
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "R",
        "optional": false,
        "typeAnnotation": null,
        "start": 1336,
        "end": 1337
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReturnType",
          "optional": false,
          "typeAnnotation": null,
          "start": 1340,
          "end": 1350
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "createHandler",
                "optional": false,
                "typeAnnotation": null,
                "start": 1358,
                "end": 1371
              },
              "typeArguments": null,
              "start": 1351,
              "end": 1371
            }
          ],
          "start": 1350,
          "end": 1372
        },
        "start": 1340,
        "end": 1372
      },
      "declare": false,
      "start": 1331,
      "end": 1373
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1373
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 418,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "IsEqual",
    "start": 423,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 450,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 453,
    "end": 454
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 455,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 473,
    "end": 474
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 477,
    "end": 478
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 480,
    "end": 481
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 482,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "G",
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
    "type": "Punctuator",
    "value": ")",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 501,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 504,
    "end": 505
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 506,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 524,
    "end": 525
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 528,
    "end": 529
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 541,
    "end": 542
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 543,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 556,
    "end": 557
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 558,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 566,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "Fn",
    "start": 571,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 577,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 580,
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
    "value": "any",
    "start": 586,
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
    "value": "=>",
    "start": 591,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 594,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 599,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "Next",
    "start": 604,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "TFn",
    "start": 609,
    "end": 612
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 613,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "Fn",
    "start": 621,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 623,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "TStack",
    "start": 625,
    "end": 631
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 632,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "Fn",
    "start": 640,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 647,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 650,
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
    "value": "Parameters",
    "start": 656,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 666,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "TStack",
    "start": 667,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 674,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "TFn",
    "start": 676,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 682,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "ReturnType",
    "start": 685,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 695,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "TStack",
    "start": 696,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "TFn",
    "start": 705,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 708,
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
    "value": "type",
    "start": 711,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "Wrap",
    "start": 716,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 720,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "TFn",
    "start": 721,
    "end": 724
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 725,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "Fn",
    "start": 733,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 737,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "TFn",
    "start": 739,
    "end": 742
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 743,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 751,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 759,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "TFn",
    "start": 761,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 770,
    "end": 772
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 773,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 777,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 780,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "Inner",
    "start": 785,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 790,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "TFn",
    "start": 791,
    "end": 794
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 795,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "Fn",
    "start": 803,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 805,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "TAcc",
    "start": 807,
    "end": 811
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 812,
    "end": 819
  },
  {
    "type": "Identifier",
    "value": "Fn",
    "start": 820,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 822,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "TStack",
    "start": 824,
    "end": 830
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 831,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "Fn",
    "start": 839,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 841,
    "end": 842
  },
  {
    "type": "Identifier",
    "value": "TPrevious",
    "start": 843,
    "end": 852
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 853,
    "end": 860
  },
  {
    "type": "Identifier",
    "value": "Fn",
    "start": 861,
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
    "value": "TCurrent",
    "start": 865,
    "end": 873
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 874,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "Fn",
    "start": 882,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 885,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "Next",
    "start": 887,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 891,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "TFn",
    "start": 892,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 895,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "TStack",
    "start": 897,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 903,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 904,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 906,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "IsEqual",
    "start": 912,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 919,
    "end": 920
  },
  {
    "type": "Identifier",
    "value": "TCurrent",
    "start": 920,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 928,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "TPrevious",
    "start": 930,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 939,
    "end": 940
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 941,
    "end": 948
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 949,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 954,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "TAcc",
    "start": 956,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 961,
    "end": 962
  },
  {
    "type": "Identifier",
    "value": "Inner",
    "start": 963,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 968,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "TFn",
    "start": 969,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 972,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "TAcc",
    "start": 974,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 979,
    "end": 980
  },
  {
    "type": "Identifier",
    "value": "Wrap",
    "start": 981,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 985,
    "end": 986
  },
  {
    "type": "Identifier",
    "value": "TCurrent",
    "start": 986,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 994,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 995,
    "end": 996
  },
  {
    "type": "Identifier",
    "value": "TCurrent",
    "start": 997,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "TStack",
    "start": 1008,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Identifier",
    "value": "TCurrent",
    "start": 1016,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1028,
    "end": 1032
  },
  {
    "type": "Identifier",
    "value": "OwnProperties",
    "start": 1033,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1047,
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
    "value": "=",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1057,
    "end": 1059
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1060,
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
    "value": "]",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1078,
    "end": 1082
  },
  {
    "type": "Identifier",
    "value": "Unwrap",
    "start": 1083,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Identifier",
    "value": "TFn",
    "start": 1090,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Identifier",
    "value": "TFn",
    "start": 1097,
    "end": 1100
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1101,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "Fn",
    "start": 1109,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Identifier",
    "value": "TFn",
    "start": 1114,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Identifier",
    "value": "TFn",
    "start": 1120,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1126,
    "end": 1130
  },
  {
    "type": "Identifier",
    "value": "Tree",
    "start": 1131,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1143,
    "end": 1150
  },
  {
    "type": "Identifier",
    "value": "Fn",
    "start": 1151,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Identifier",
    "value": "Unwrap",
    "start": 1160,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "Inner",
    "start": 1167,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Identifier",
    "value": "Wrap",
    "start": 1176,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Identifier",
    "value": "Tree",
    "start": 1194,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Identifier",
    "value": "OwnProperties",
    "start": 1199,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Keyword",
    "value": "interface",
    "start": 1227,
    "end": 1236
  },
  {
    "type": "Identifier",
    "value": "Client",
    "start": 1237,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 1253,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Identifier",
    "value": "Tree",
    "start": 1259,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1271,
    "end": 1278
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1279,
    "end": 1287
  },
  {
    "type": "Identifier",
    "value": "createHandler",
    "start": 1288,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1304,
    "end": 1311
  },
  {
    "type": "Identifier",
    "value": "Fn",
    "start": 1312,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Identifier",
    "value": "Client",
    "start": 1319,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1331,
    "end": 1335
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Identifier",
    "value": "ReturnType",
    "start": 1340,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1351,
    "end": 1357
  },
  {
    "type": "Identifier",
    "value": "createHandler",
    "start": 1358,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1372,
    "end": 1373
  }
]
```
