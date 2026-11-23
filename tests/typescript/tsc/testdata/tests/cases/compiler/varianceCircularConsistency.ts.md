__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Query",
        "optional": false,
        "typeAnnotation": null,
        "start": 223,
        "end": 228
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 229,
        "end": 231
      },
      "declare": false,
      "start": 213,
      "end": 231
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null,
        "start": 237,
        "end": 246
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 247,
              "end": 248
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 247,
            "end": 248
          }
        ],
        "start": 246,
        "end": 249
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 252,
              "end": 253
            },
            "typeArguments": null,
            "start": 252,
            "end": 253
          },
          {
            "type": "TSFunctionType",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 265,
                      "end": 266
                    },
                    "typeArguments": null,
                    "start": 265,
                    "end": 266
                  },
                  "start": 263,
                  "end": 266
                },
                "start": 258,
                "end": 266
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 271,
                "end": 275
              },
              "start": 268,
              "end": 275
            },
            "start": 257,
            "end": 275
          }
        ],
        "start": 252,
        "end": 276
      },
      "declare": false,
      "start": 232,
      "end": 277
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Ref",
        "optional": false,
        "typeAnnotation": null,
        "start": 288,
        "end": 291
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
              "start": 292,
              "end": 293
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 292,
            "end": 293
          }
        ],
        "start": 291,
        "end": 294
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 301,
              "end": 306
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
                  "start": 308,
                  "end": 309
                },
                "typeArguments": null,
                "start": 308,
                "end": 309
              },
              "start": 306,
              "end": 309
            },
            "accessibility": null,
            "static": false,
            "start": 301,
            "end": 310
          }
        ],
        "start": 295,
        "end": 312
      },
      "declare": false,
      "start": 278,
      "end": 312
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Rep",
        "optional": false,
        "typeAnnotation": null,
        "start": 323,
        "end": 326
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Params",
              "optional": false,
              "typeAnnotation": null,
              "start": 327,
              "end": 333
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 327,
            "end": 333
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Queries",
              "optional": false,
              "typeAnnotation": null,
              "start": 335,
              "end": 342
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 351,
                "end": 357
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 358,
                    "end": 364
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Query",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 366,
                      "end": 371
                    },
                    "typeArguments": null,
                    "start": 366,
                    "end": 371
                  }
                ],
                "start": 357,
                "end": 372
              },
              "start": 351,
              "end": 372
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 335,
            "end": 372
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Nested",
              "optional": false,
              "typeAnnotation": null,
              "start": 374,
              "end": 380
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 374,
            "end": 380
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Runtime",
              "optional": false,
              "typeAnnotation": null,
              "start": 382,
              "end": 389
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 382,
            "end": 389
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Extra",
              "optional": false,
              "typeAnnotation": null,
              "start": 391,
              "end": 396
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 391,
            "end": 396
          }
        ],
        "start": 326,
        "end": 397
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Readonly",
            "optional": false,
            "typeAnnotation": null,
            "start": 406,
            "end": 414
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
                      "name": "root",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 421,
                      "end": 425
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Ref",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 427,
                          "end": 430
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "EntryPointComponent",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 431,
                                "end": 450
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Queries",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 451,
                                      "end": 458
                                    },
                                    "typeArguments": null,
                                    "start": 451,
                                    "end": 458
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Nested",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 460,
                                      "end": 466
                                    },
                                    "typeArguments": null,
                                    "start": 460,
                                    "end": 466
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Runtime",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 468,
                                      "end": 475
                                    },
                                    "typeArguments": null,
                                    "start": 468,
                                    "end": 475
                                  }
                                ],
                                "start": 450,
                                "end": 476
                              },
                              "start": 431,
                              "end": 476
                            }
                          ],
                          "start": 430,
                          "end": 477
                        },
                        "start": 427,
                        "end": 477
                      },
                      "start": 425,
                      "end": 477
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 421,
                    "end": 478
                  }
                ],
                "start": 415,
                "end": 480
              }
            ],
            "start": 414,
            "end": 481
          },
          "start": 406,
          "end": 481
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 482,
        "end": 484
      },
      "declare": false,
      "start": 313,
      "end": 484
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Preloaded",
        "optional": false,
        "typeAnnotation": null,
        "start": 490,
        "end": 499
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
              "start": 500,
              "end": 501
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 500,
            "end": 501
          }
        ],
        "start": 499,
        "end": 502
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
            "start": 505,
            "end": 506
          },
          "typeArguments": null,
          "start": 505,
          "end": 506
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Record",
            "optional": false,
            "typeAnnotation": null,
            "start": 515,
            "end": 521
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 522,
                "end": 528
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Rep",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 530,
                  "end": 533
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 534,
                      "end": 537
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 539,
                      "end": 542
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 544,
                      "end": 547
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 549,
                      "end": 552
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 554,
                      "end": 557
                    }
                  ],
                  "start": 533,
                  "end": 558
                },
                "start": 530,
                "end": 558
              }
            ],
            "start": 521,
            "end": 559
          },
          "start": 515,
          "end": 559
        },
        "trueType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 565,
            "end": 566
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
                "start": 576,
                "end": 577
              },
              "typeArguments": null,
              "start": 576,
              "end": 577
            },
            "start": 570,
            "end": 577
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Unwrap",
              "optional": false,
              "typeAnnotation": null,
              "start": 580,
              "end": 586
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "GetComponent",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 587,
                    "end": 599
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
                          "start": 600,
                          "end": 601
                        },
                        "typeArguments": null,
                        "start": 600,
                        "end": 601
                      }
                    ],
                    "start": 599,
                    "end": 602
                  },
                  "start": 587,
                  "end": 602
                }
              ],
              "start": 586,
              "end": 603
            },
            "start": 580,
            "end": 603
          },
          "optional": false,
          "readonly": null,
          "start": 562,
          "end": 605
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 608,
          "end": 613
        },
        "start": 505,
        "end": 613
      },
      "declare": false,
      "start": 485,
      "end": 614
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 625,
        "end": 630
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Queries",
              "optional": false,
              "typeAnnotation": null,
              "start": 631,
              "end": 638
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 631,
            "end": 638
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Nested",
              "optional": false,
              "typeAnnotation": null,
              "start": 640,
              "end": 646
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 640,
            "end": 646
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Runtime",
              "optional": false,
              "typeAnnotation": null,
              "start": 648,
              "end": 655
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 648,
            "end": 655
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Extra",
              "optional": false,
              "typeAnnotation": null,
              "start": 657,
              "end": 662
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 657,
            "end": 662
          }
        ],
        "start": 630,
        "end": 663
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Readonly",
            "optional": false,
            "typeAnnotation": null,
            "start": 672,
            "end": 680
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
                      "name": "nested",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 687,
                      "end": 693
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Preloaded",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 695,
                          "end": 704
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Nested",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 705,
                                "end": 711
                              },
                              "typeArguments": null,
                              "start": 705,
                              "end": 711
                            }
                          ],
                          "start": 704,
                          "end": 712
                        },
                        "start": 695,
                        "end": 712
                      },
                      "start": 693,
                      "end": 712
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 687,
                    "end": 713
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "queries",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 718,
                      "end": 725
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Queries",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 727,
                          "end": 734
                        },
                        "typeArguments": null,
                        "start": 727,
                        "end": 734
                      },
                      "start": 725,
                      "end": 734
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 718,
                    "end": 735
                  }
                ],
                "start": 681,
                "end": 737
              }
            ],
            "start": 680,
            "end": 738
          },
          "start": 672,
          "end": 738
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 739,
        "end": 741
      },
      "declare": false,
      "start": 615,
      "end": 741
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EntryPointComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 747,
        "end": 766
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Queries",
              "optional": false,
              "typeAnnotation": null,
              "start": 767,
              "end": 774
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 783,
                "end": 789
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 790,
                    "end": 796
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Query",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 798,
                      "end": 803
                    },
                    "typeArguments": null,
                    "start": 798,
                    "end": 803
                  }
                ],
                "start": 789,
                "end": 804
              },
              "start": 783,
              "end": 804
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 767,
            "end": 804
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Nested",
              "optional": false,
              "typeAnnotation": null,
              "start": 806,
              "end": 812
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 806,
            "end": 812
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Runtime",
              "optional": false,
              "typeAnnotation": null,
              "start": 814,
              "end": 821
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 814,
            "end": 821
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Extra",
              "optional": false,
              "typeAnnotation": null,
              "start": 823,
              "end": 828
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 831,
              "end": 833
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 823,
            "end": 833
          }
        ],
        "start": 766,
        "end": 834
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 837,
          "end": 846
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Props",
                "optional": false,
                "typeAnnotation": null,
                "start": 847,
                "end": 852
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Queries",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 853,
                      "end": 860
                    },
                    "typeArguments": null,
                    "start": 853,
                    "end": 860
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Nested",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 862,
                      "end": 868
                    },
                    "typeArguments": null,
                    "start": 862,
                    "end": 868
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Runtime",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 870,
                      "end": 877
                    },
                    "typeArguments": null,
                    "start": 870,
                    "end": 877
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Extra",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 879,
                      "end": 884
                    },
                    "typeArguments": null,
                    "start": 879,
                    "end": 884
                  }
                ],
                "start": 852,
                "end": 885
              },
              "start": 847,
              "end": 885
            }
          ],
          "start": 846,
          "end": 886
        },
        "start": 837,
        "end": 886
      },
      "declare": false,
      "start": 742,
      "end": 887
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Unwrap",
        "optional": false,
        "typeAnnotation": null,
        "start": 893,
        "end": 899
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 900,
              "end": 901
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 900,
            "end": 901
          }
        ],
        "start": 899,
        "end": 902
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 905,
            "end": 906
          },
          "typeArguments": null,
          "start": 905,
          "end": 906
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "EntryPointComponent",
            "optional": false,
            "typeAnnotation": null,
            "start": 915,
            "end": 934
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Q",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 941,
                    "end": 942
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 941,
                  "end": 942
                },
                "start": 935,
                "end": 942
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 950,
                    "end": 951
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 950,
                  "end": 951
                },
                "start": 944,
                "end": 951
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 959,
                    "end": 960
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 959,
                  "end": 960
                },
                "start": 953,
                "end": 960
              }
            ],
            "start": 934,
            "end": 961
          },
          "start": 915,
          "end": 961
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Readonly",
            "optional": false,
            "typeAnnotation": null,
            "start": 964,
            "end": 972
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 973,
                "end": 975
              }
            ],
            "start": 972,
            "end": 976
          },
          "start": 964,
          "end": 976
        },
        "falseType": {
          "type": "TSTypeLiteral",
          "members": [],
          "start": 979,
          "end": 981
        },
        "start": 905,
        "end": 981
      },
      "declare": false,
      "start": 888,
      "end": 982
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EntryPoint",
        "optional": false,
        "typeAnnotation": null,
        "start": 988,
        "end": 998
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 999,
              "end": 1000
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 999,
            "end": 1000
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Params",
              "optional": false,
              "typeAnnotation": null,
              "start": 1002,
              "end": 1008
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1002,
            "end": 1008
          }
        ],
        "start": 998,
        "end": 1009
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Rep",
          "optional": false,
          "typeAnnotation": null,
          "start": 1012,
          "end": 1015
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Params",
                "optional": false,
                "typeAnnotation": null,
                "start": 1016,
                "end": 1022
              },
              "typeArguments": null,
              "start": 1016,
              "end": 1022
            },
            {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1024,
                  "end": 1025
                },
                "typeArguments": null,
                "start": 1024,
                "end": 1025
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "EntryPointComponent",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1034,
                  "end": 1053
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSInferType",
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Q",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1060,
                          "end": 1061
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1060,
                        "end": 1061
                      },
                      "start": 1054,
                      "end": 1061
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 1063,
                      "end": 1066
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 1068,
                      "end": 1071
                    }
                  ],
                  "start": 1053,
                  "end": 1072
                },
                "start": 1034,
                "end": 1072
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Q",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1075,
                  "end": 1076
                },
                "typeArguments": null,
                "start": 1075,
                "end": 1076
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 1079,
                "end": 1084
              },
              "start": 1024,
              "end": 1084
            },
            {
              "type": "TSNeverKeyword",
              "start": 1086,
              "end": 1091
            },
            {
              "type": "TSNeverKeyword",
              "start": 1093,
              "end": 1098
            },
            {
              "type": "TSNeverKeyword",
              "start": 1100,
              "end": 1105
            }
          ],
          "start": 1015,
          "end": 1106
        },
        "start": 1012,
        "end": 1106
      },
      "declare": false,
      "start": 983,
      "end": 1107
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GetComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 1113,
        "end": 1125
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
              "start": 1126,
              "end": 1127
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1126,
            "end": 1127
          }
        ],
        "start": 1125,
        "end": 1128
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
            "start": 1131,
            "end": 1132
          },
          "typeArguments": null,
          "start": 1131,
          "end": 1132
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "EntryPoint",
            "optional": false,
            "typeAnnotation": null,
            "start": 1141,
            "end": 1151
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1158,
                    "end": 1159
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1158,
                  "end": 1159
                },
                "start": 1152,
                "end": 1159
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1167,
                    "end": 1168
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1167,
                  "end": 1168
                },
                "start": 1161,
                "end": 1168
              }
            ],
            "start": 1151,
            "end": 1169
          },
          "start": 1141,
          "end": 1169
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 1172,
            "end": 1173
          },
          "typeArguments": null,
          "start": 1172,
          "end": 1173
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1176,
          "end": 1181
        },
        "start": 1131,
        "end": 1181
      },
      "declare": false,
      "start": 1108,
      "end": 1182
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "EntryPointComponent",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1201,
                  "end": 1220
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
                            "name": "q",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1223,
                            "end": 1224
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "members": [
                                {
                                  "type": "TSPropertySignature",
                                  "computed": false,
                                  "optional": false,
                                  "readonly": true,
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "variables",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1237,
                                    "end": 1246
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
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
                                            "name": "slug",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1250,
                                            "end": 1254
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSStringKeyword",
                                              "start": 1256,
                                              "end": 1262
                                            },
                                            "start": 1254,
                                            "end": 1262
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 1250,
                                          "end": 1262
                                        }
                                      ],
                                      "start": 1248,
                                      "end": 1264
                                    },
                                    "start": 1246,
                                    "end": 1264
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 1228,
                                  "end": 1264
                                }
                              ],
                              "start": 1226,
                              "end": 1266
                            },
                            "start": 1224,
                            "end": 1266
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1223,
                          "end": 1266
                        }
                      ],
                      "start": 1221,
                      "end": 1268
                    },
                    {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 1270,
                      "end": 1272
                    },
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
                            "name": "onClick",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1276,
                            "end": 1283
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "typeParameters": null,
                              "params": [],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "start": 1291,
                                  "end": 1295
                                },
                                "start": 1288,
                                "end": 1295
                              },
                              "start": 1285,
                              "end": 1295
                            },
                            "start": 1283,
                            "end": 1295
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1276,
                          "end": 1295
                        }
                      ],
                      "start": 1274,
                      "end": 1297
                    }
                  ],
                  "start": 1220,
                  "end": 1298
                },
                "start": 1201,
                "end": 1298
              },
              "start": 1199,
              "end": 1298
            },
            "start": 1198,
            "end": 1298
          },
          "init": null,
          "definite": false,
          "start": 1198,
          "end": 1298
        }
      ],
      "declare": true,
      "start": 1184,
      "end": 1299
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
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "EntryPoint",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1317,
                  "end": 1327
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1335,
                        "end": 1336
                      },
                      "typeArguments": null,
                      "start": 1328,
                      "end": 1336
                    },
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
                            "name": "slug",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1340,
                            "end": 1344
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1346,
                              "end": 1352
                            },
                            "start": 1344,
                            "end": 1352
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1340,
                          "end": 1352
                        }
                      ],
                      "start": 1338,
                      "end": 1354
                    }
                  ],
                  "start": 1327,
                  "end": 1355
                },
                "start": 1317,
                "end": 1355
              },
              "start": 1315,
              "end": 1355
            },
            "start": 1314,
            "end": 1355
          },
          "init": null,
          "definite": false,
          "start": 1314,
          "end": 1355
        }
      ],
      "declare": true,
      "start": 1300,
      "end": 1356
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
            "name": "whole",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "EntryPoint",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1370,
                  "end": 1380
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 1381,
                      "end": 1384
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 1386,
                      "end": 1389
                    }
                  ],
                  "start": 1380,
                  "end": 1390
                },
                "start": 1370,
                "end": 1390
              },
              "start": 1368,
              "end": 1390
            },
            "start": 1363,
            "end": 1390
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 1393,
            "end": 1394
          },
          "definite": false,
          "start": 1363,
          "end": 1394
        }
      ],
      "declare": false,
      "start": 1357,
      "end": 1395
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
            "name": "root",
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
                    "name": "EntryPoint",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1408,
                    "end": 1418
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 1419,
                        "end": 1422
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 1424,
                        "end": 1427
                      }
                    ],
                    "start": 1418,
                    "end": 1428
                  },
                  "start": 1408,
                  "end": 1428
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "root",
                    "raw": "\"root\"",
                    "start": 1429,
                    "end": 1435
                  },
                  "start": 1429,
                  "end": 1435
                },
                "start": 1408,
                "end": 1436
              },
              "start": 1406,
              "end": 1436
            },
            "start": 1402,
            "end": 1436
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 1439,
              "end": 1440
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "root",
              "optional": false,
              "typeAnnotation": null,
              "start": 1441,
              "end": 1445
            },
            "optional": false,
            "computed": false,
            "start": 1439,
            "end": 1445
          },
          "definite": false,
          "start": 1402,
          "end": 1445
        }
      ],
      "declare": false,
      "start": 1396,
      "end": 1446
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1446
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 213,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "Query",
    "start": 223,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 232,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 237,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 258,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 268,
    "end": 270
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 271,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 276,
    "end": 277
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 278,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "Ref",
    "start": 288,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 301,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 311,
    "end": 312
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 313,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "Rep",
    "start": 323,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "Params",
    "start": 327,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "Queries",
    "start": 335,
    "end": 342
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 343,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 351,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 358,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "Query",
    "start": 366,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "Nested",
    "start": 374,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "Runtime",
    "start": 382,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "Extra",
    "start": 391,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 396,
    "end": 397
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 398,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 406,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "root",
    "start": 421,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "Ref",
    "start": 427,
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
    "value": "EntryPointComponent",
    "start": 431,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "Queries",
    "start": 451,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "Nested",
    "start": 460,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "Runtime",
    "start": 468,
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
    "value": ">",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 485,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "Preloaded",
    "start": 490,
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
    "value": "=",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 505,
    "end": 506
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 507,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "Record",
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
    "value": "string",
    "start": 522,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "Rep",
    "start": 530,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 534,
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
    "value": "any",
    "start": 539,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 544,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 549,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 552,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 554,
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
    "value": ">",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 565,
    "end": 566
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 567,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 570,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "Unwrap",
    "start": 580,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 586,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "GetComponent",
    "start": 587,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 599,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": ":",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 608,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 613,
    "end": 614
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 615,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 625,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 630,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "Queries",
    "start": 631,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 638,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "Nested",
    "start": 640,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "Runtime",
    "start": 648,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 655,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "Extra",
    "start": 657,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 662,
    "end": 663
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 664,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 672,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "nested",
    "start": 687,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "Preloaded",
    "start": 695,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 704,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "Nested",
    "start": 705,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 712,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "queries",
    "start": 718,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 725,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "Queries",
    "start": 727,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "{",
    "start": 739,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 740,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 742,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "EntryPointComponent",
    "start": 747,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 766,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "Queries",
    "start": 767,
    "end": 774
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 775,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 783,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 789,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 790,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "Query",
    "start": 798,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 804,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "Nested",
    "start": 806,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 812,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "Runtime",
    "start": 814,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 821,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "Extra",
    "start": 823,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 835,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 837,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 846,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 847,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 852,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "Queries",
    "start": 853,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 860,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "Nested",
    "start": 862,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 868,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "Runtime",
    "start": 870,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 877,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "Extra",
    "start": 879,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 885,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 886,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 888,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "Unwrap",
    "start": 893,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 899,
    "end": 900
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 900,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 903,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 905,
    "end": 906
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 907,
    "end": 914
  },
  {
    "type": "Identifier",
    "value": "EntryPointComponent",
    "start": 915,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 934,
    "end": 935
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 935,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 942,
    "end": 943
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 944,
    "end": 949
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 951,
    "end": 952
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 953,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 960,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 962,
    "end": 963
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 964,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 972,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 974,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 979,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 980,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 981,
    "end": 982
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 983,
    "end": 987
  },
  {
    "type": "Identifier",
    "value": "EntryPoint",
    "start": 988,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 998,
    "end": 999
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "Params",
    "start": 1002,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Identifier",
    "value": "Rep",
    "start": 1012,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Identifier",
    "value": "Params",
    "start": 1016,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1026,
    "end": 1033
  },
  {
    "type": "Identifier",
    "value": "EntryPointComponent",
    "start": 1034,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1054,
    "end": 1059
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1063,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1066,
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
    "value": ">",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1079,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1086,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1093,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1100,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1108,
    "end": 1112
  },
  {
    "type": "Identifier",
    "value": "GetComponent",
    "start": 1113,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1133,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "EntryPoint",
    "start": 1141,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1152,
    "end": 1157
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1161,
    "end": 1166
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1176,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1184,
    "end": 1191
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1192,
    "end": 1197
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "EntryPointComponent",
    "start": 1201,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1228,
    "end": 1236
  },
  {
    "type": "Identifier",
    "value": "variables",
    "start": 1237,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Identifier",
    "value": "slug",
    "start": 1250,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1256,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Identifier",
    "value": "onClick",
    "start": 1276,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1288,
    "end": 1290
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1291,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1300,
    "end": 1307
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1308,
    "end": 1313
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Identifier",
    "value": "EntryPoint",
    "start": 1317,
    "end": 1327
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1328,
    "end": 1334
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Identifier",
    "value": "slug",
    "start": 1340,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1346,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Keyword",
    "value": "const",
    "start": 1357,
    "end": 1362
  },
  {
    "type": "Identifier",
    "value": "whole",
    "start": 1363,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Identifier",
    "value": "EntryPoint",
    "start": 1370,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1381,
    "end": 1384
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1386,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1396,
    "end": 1401
  },
  {
    "type": "Identifier",
    "value": "root",
    "start": 1402,
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
    "value": "EntryPoint",
    "start": 1408,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1419,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1424,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "String",
    "value": "\"root\"",
    "start": 1429,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Identifier",
    "value": "root",
    "start": 1441,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1445,
    "end": 1446
  }
]
```
