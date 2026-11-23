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
        "name": "Fld",
        "optional": false,
        "typeAnnotation": null,
        "start": 369,
        "end": 372
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
              "start": 373,
              "end": 374
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 383,
              "end": 389
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 373,
            "end": 389
          }
        ],
        "start": 372,
        "end": 390
      },
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
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 393,
              "end": 394
            },
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
                  "start": 396,
                  "end": 397
                },
                "typeArguments": null,
                "start": 396,
                "end": 397
              },
              "start": 394,
              "end": 397
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 393,
            "end": 397
          }
        ],
        "start": 391,
        "end": 399
      },
      "abstract": false,
      "declare": true,
      "start": 355,
      "end": 399
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Sel",
        "optional": false,
        "typeAnnotation": null,
        "start": 405,
        "end": 408
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
              "start": 409,
              "end": 410
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 419,
              "end": 425
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 409,
            "end": 425
          }
        ],
        "start": 408,
        "end": 426
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
            "start": 429,
            "end": 430
          },
          "typeArguments": null,
          "start": 429,
          "end": 430
        },
        "extendsType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 441,
                "end": 442
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 444,
                    "end": 445
                  },
                  "start": 444,
                  "end": 445
                },
                "start": 442,
                "end": 445
              },
              "accessibility": null,
              "static": false,
              "start": 441,
              "end": 445
            }
          ],
          "start": 439,
          "end": 447
        },
        "trueType": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Lnk",
                "optional": false,
                "typeAnnotation": null,
                "start": 450,
                "end": 453
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
                      "start": 454,
                      "end": 455
                    },
                    "typeArguments": null,
                    "start": 454,
                    "end": 455
                  }
                ],
                "start": 453,
                "end": 456
              },
              "start": 450,
              "end": 456
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Fld",
                "optional": false,
                "typeAnnotation": null,
                "start": 459,
                "end": 462
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
                      "start": 463,
                      "end": 464
                    },
                    "typeArguments": null,
                    "start": 463,
                    "end": 464
                  }
                ],
                "start": 462,
                "end": 465
              },
              "start": 459,
              "end": 465
            }
          ],
          "start": 450,
          "end": 465
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 468,
              "end": 469
            },
            "typeArguments": null,
            "start": 468,
            "end": 469
          },
          "extendsType": {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 480,
                  "end": 481
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 483,
                      "end": 484
                    },
                    "start": 483,
                    "end": 484
                  },
                  "start": 481,
                  "end": 484
                },
                "accessibility": null,
                "static": false,
                "start": 480,
                "end": 484
              }
            ],
            "start": 478,
            "end": 486
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Fld",
              "optional": false,
              "typeAnnotation": null,
              "start": 489,
              "end": 492
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
                    "start": 493,
                    "end": 494
                  },
                  "typeArguments": null,
                  "start": 493,
                  "end": 494
                }
              ],
              "start": 492,
              "end": 495
            },
            "start": 489,
            "end": 495
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 498,
            "end": 503
          },
          "start": 468,
          "end": 503
        },
        "start": 429,
        "end": 503
      },
      "declare": false,
      "start": 400,
      "end": 504
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Api",
        "optional": false,
        "typeAnnotation": null,
        "start": 515,
        "end": 518
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
              "start": 519,
              "end": 520
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 529,
              "end": 535
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 519,
            "end": 535
          }
        ],
        "start": 518,
        "end": 536
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "rb",
              "optional": false,
              "typeAnnotation": null,
              "start": 541,
              "end": 543
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Rb",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 547,
                  "end": 549
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
                        "start": 550,
                        "end": 551
                      },
                      "typeArguments": null,
                      "start": 550,
                      "end": 551
                    }
                  ],
                  "start": 549,
                  "end": 552
                },
                "start": 547,
                "end": 552
              },
              "start": 545,
              "end": 552
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 541,
            "end": 553
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "builder",
              "optional": false,
              "typeAnnotation": null,
              "start": 556,
              "end": 563
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 568,
                  "end": 569
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
                      "start": 579,
                      "end": 580
                    },
                    "typeArguments": null,
                    "start": 579,
                    "end": 580
                  },
                  "start": 573,
                  "end": 580
                },
                "nameType": null,
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
                          "type": "TSIndexedAccessType",
                          "objectType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 593,
                              "end": 594
                            },
                            "typeArguments": null,
                            "start": 593,
                            "end": 594
                          },
                          "indexType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 595,
                              "end": 596
                            },
                            "typeArguments": null,
                            "start": 595,
                            "end": 596
                          },
                          "start": 593,
                          "end": 597
                        },
                        "start": 591,
                        "end": 597
                      },
                      "start": 586,
                      "end": 597
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 602,
                      "end": 606
                    },
                    "start": 599,
                    "end": 606
                  },
                  "start": 585,
                  "end": 606
                },
                "optional": "-",
                "readonly": null,
                "start": 565,
                "end": 608
              },
              "start": 563,
              "end": 608
            },
            "accessibility": null,
            "static": false,
            "start": 556,
            "end": 609
          }
        ],
        "start": 537,
        "end": 611
      },
      "declare": false,
      "start": 505,
      "end": 611
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Rb",
        "optional": false,
        "typeAnnotation": null,
        "start": 622,
        "end": 624
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
              "start": 625,
              "end": 626
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 635,
              "end": 641
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 625,
            "end": 641
          }
        ],
        "start": 624,
        "end": 642
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "select",
              "optional": false,
              "typeAnnotation": null,
              "start": 645,
              "end": 651
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Sel",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 655,
                      "end": 658
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
                            "start": 659,
                            "end": 660
                          },
                          "typeArguments": null,
                          "start": 659,
                          "end": 660
                        }
                      ],
                      "start": 658,
                      "end": 661
                    },
                    "start": 655,
                    "end": 661
                  },
                  "start": 653,
                  "end": 661
                },
                "start": 652,
                "end": 661
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 664,
                "end": 668
              },
              "start": 662,
              "end": 668
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 645,
            "end": 668
          }
        ],
        "start": 643,
        "end": 670
      },
      "declare": false,
      "start": 612,
      "end": 670
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Lnk",
        "optional": false,
        "typeAnnotation": null,
        "start": 685,
        "end": 688
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
              "start": 689,
              "end": 690
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 699,
              "end": 705
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 689,
            "end": 705
          }
        ],
        "start": 688,
        "end": 706
      },
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
              "name": "api",
              "optional": false,
              "typeAnnotation": null,
              "start": 711,
              "end": 714
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Api",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 716,
                  "end": 719
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
                        "start": 720,
                        "end": 721
                      },
                      "typeArguments": null,
                      "start": 720,
                      "end": 721
                    }
                  ],
                  "start": 719,
                  "end": 722
                },
                "start": 716,
                "end": 722
              },
              "start": 714,
              "end": 722
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 711,
            "end": 723
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sels",
              "optional": false,
              "typeAnnotation": null,
              "start": 726,
              "end": 730
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Sel",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 732,
                    "end": 735
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
                          "start": 736,
                          "end": 737
                        },
                        "typeArguments": null,
                        "start": 736,
                        "end": 737
                      }
                    ],
                    "start": 735,
                    "end": 738
                  },
                  "start": 732,
                  "end": 738
                },
                "start": 732,
                "end": 740
              },
              "start": 730,
              "end": 740
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 726,
            "end": 741
          }
        ],
        "start": 707,
        "end": 743
      },
      "abstract": false,
      "declare": true,
      "start": 671,
      "end": 743
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Lnk",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 762,
                  "end": 765
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "v",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 768,
                            "end": 769
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2",
                                "start": 771,
                                "end": 772
                              },
                              "start": 771,
                              "end": 772
                            },
                            "start": 769,
                            "end": 772
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 768,
                          "end": 773
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "id",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 774,
                            "end": 776
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 778,
                              "end": 784
                            },
                            "start": 776,
                            "end": 784
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 774,
                          "end": 784
                        }
                      ],
                      "start": 766,
                      "end": 786
                    }
                  ],
                  "start": 765,
                  "end": 787
                },
                "start": 762,
                "end": 787
              },
              "start": 760,
              "end": 787
            },
            "start": 759,
            "end": 787
          },
          "init": null,
          "definite": false,
          "start": 759,
          "end": 787
        }
      ],
      "declare": true,
      "start": 745,
      "end": 788
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
              "name": "b",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Lnk",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 805,
                    "end": 808
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 811,
                              "end": 812
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": 2,
                                  "raw": "2",
                                  "start": 814,
                                  "end": 815
                                },
                                "start": 814,
                                "end": 815
                              },
                              "start": 812,
                              "end": 815
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 811,
                            "end": 815
                          }
                        ],
                        "start": 809,
                        "end": 817
                      }
                    ],
                    "start": 808,
                    "end": 818
                  },
                  "start": 805,
                  "end": 818
                },
                "start": 803,
                "end": 818
              },
              "start": 802,
              "end": 818
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 821,
              "end": 822
            },
            "definite": false,
            "start": 802,
            "end": 822
          }
        ],
        "declare": false,
        "start": 796,
        "end": 823
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 789,
      "end": 823
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 823
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 355,
    "end": 362
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 363,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "Fld",
    "start": 369,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 373,
    "end": 374
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 375,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 383,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 400,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "Sel",
    "start": 405,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 409,
    "end": 410
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 411,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 419,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Keyword",
    "value": "extends",
    "start": 431,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "v",
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
    "type": "Numeric",
    "value": "2",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "Lnk",
    "start": 450,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "Fld",
    "start": 459,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 468,
    "end": 469
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 470,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 481,
    "end": 482
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "Fld",
    "start": 489,
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
    "value": "T",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 498,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 503,
    "end": 504
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 505,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "Api",
    "start": 515,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 519,
    "end": 520
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 521,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 529,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 537,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "rb",
    "start": 541,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "Rb",
    "start": 547,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 552,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "builder",
    "start": 556,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 568,
    "end": 569
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 570,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 573,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 585,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 586,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 599,
    "end": 601
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 602,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 610,
    "end": 611
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 612,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "Rb",
    "start": 622,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 624,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 625,
    "end": 626
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 627,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 635,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "select",
    "start": 645,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 651,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 653,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "Sel",
    "start": 655,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 658,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 662,
    "end": 663
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 664,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 671,
    "end": 678
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 679,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "Lnk",
    "start": 685,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 688,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 689,
    "end": 690
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 691,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 699,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 707,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "api",
    "start": 711,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 714,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "Api",
    "start": 716,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 719,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 721,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 722,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "sels",
    "start": 726,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 730,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "Sel",
    "start": 732,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 739,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 745,
    "end": 752
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 753,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 760,
    "end": 761
  },
  {
    "type": "Identifier",
    "value": "Lnk",
    "start": 762,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 766,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 769,
    "end": 770
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 772,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 774,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 776,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 778,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 787,
    "end": 788
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 789,
    "end": 795
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 796,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "Lnk",
    "start": 805,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 809,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 812,
    "end": 813
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 819,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 822,
    "end": 823
  }
]
```
