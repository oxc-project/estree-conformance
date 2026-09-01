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
        "name": "spected",
        "optional": false,
        "typeAnnotation": null,
        "start": 260,
        "end": 267
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
              "name": "ROOTINPUT",
              "optional": false,
              "typeAnnotation": null,
              "start": 268,
              "end": 277
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 268,
            "end": 277
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "SPEC",
              "optional": false,
              "typeAnnotation": null,
              "start": 279,
              "end": 283
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "SpecValue",
                "optional": false,
                "typeAnnotation": null,
                "start": 292,
                "end": 301
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ROOTINPUT",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 302,
                      "end": 311
                    },
                    "typeArguments": null,
                    "start": 302,
                    "end": 311
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ROOTINPUT",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 313,
                      "end": 322
                    },
                    "typeArguments": null,
                    "start": 313,
                    "end": 322
                  }
                ],
                "start": 301,
                "end": 323
              },
              "start": 292,
              "end": 323
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "SpecValue",
                "optional": false,
                "typeAnnotation": null,
                "start": 326,
                "end": 335
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ROOTINPUT",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 336,
                      "end": 345
                    },
                    "typeArguments": null,
                    "start": 336,
                    "end": 345
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ROOTINPUT",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 347,
                      "end": 356
                    },
                    "typeArguments": null,
                    "start": 347,
                    "end": 356
                  }
                ],
                "start": 335,
                "end": 357
              },
              "start": 326,
              "end": 357
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 279,
            "end": 357
          }
        ],
        "start": 267,
        "end": 358
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "spec",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "SPEC",
                "optional": false,
                "typeAnnotation": null,
                "start": 365,
                "end": 369
              },
              "typeArguments": null,
              "start": 365,
              "end": 369
            },
            "start": 363,
            "end": 369
          },
          "start": 359,
          "end": 369
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "input",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ROOTINPUT",
                "optional": false,
                "typeAnnotation": null,
                "start": 378,
                "end": 387
              },
              "typeArguments": null,
              "start": 378,
              "end": 387
            },
            "start": 376,
            "end": 387
          },
          "start": 371,
          "end": 387
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Result",
            "optional": false,
            "typeAnnotation": null,
            "start": 390,
            "end": 396
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ROOTINPUT",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 397,
                  "end": 406
                },
                "typeArguments": null,
                "start": 397,
                "end": 406
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SPEC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 408,
                  "end": 412
                },
                "typeArguments": null,
                "start": 408,
                "end": 412
              }
            ],
            "start": 396,
            "end": 413
          },
          "start": 390,
          "end": 413
        },
        "start": 388,
        "end": 413
      },
      "body": null,
      "expression": false,
      "start": 243,
      "end": 414
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Predicate",
        "optional": false,
        "typeAnnotation": null,
        "start": 421,
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
              "name": "INPUT",
              "optional": false,
              "typeAnnotation": null,
              "start": 431,
              "end": 436
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 431,
            "end": 436
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "ROOTINPUT",
              "optional": false,
              "typeAnnotation": null,
              "start": 438,
              "end": 447
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 438,
            "end": 447
          }
        ],
        "start": 430,
        "end": 448
      },
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
                  "name": "INPUT",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 459,
                  "end": 464
                },
                "typeArguments": null,
                "start": 459,
                "end": 464
              },
              "start": 457,
              "end": 464
            },
            "start": 452,
            "end": 464
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "inputs",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ROOTINPUT",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 474,
                  "end": 483
                },
                "typeArguments": null,
                "start": 474,
                "end": 483
              },
              "start": 472,
              "end": 483
            },
            "start": 466,
            "end": 483
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSBooleanKeyword",
            "start": 488,
            "end": 495
          },
          "start": 485,
          "end": 495
        },
        "start": 451,
        "end": 495
      },
      "declare": false,
      "start": 416,
      "end": 496
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ErrorMsg",
        "optional": false,
        "typeAnnotation": null,
        "start": 503,
        "end": 511
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "INPUT",
              "optional": false,
              "typeAnnotation": null,
              "start": 512,
              "end": 517
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 512,
            "end": 517
          }
        ],
        "start": 511,
        "end": 518
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSStringKeyword",
                "start": 528,
                "end": 534
              },
              {
                "type": "TSNumberKeyword",
                "start": 537,
                "end": 543
              },
              {
                "type": "TSBooleanKeyword",
                "start": 546,
                "end": 553
              },
              {
                "type": "TSSymbolKeyword",
                "start": 556,
                "end": 562
              },
              {
                "type": "TSNullKeyword",
                "start": 565,
                "end": 569
              },
              {
                "type": "TSUndefinedKeyword",
                "start": 572,
                "end": 581
              },
              {
                "type": "TSObjectKeyword",
                "start": 584,
                "end": 590
              }
            ],
            "start": 528,
            "end": 590
          },
          {
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
                      "name": "INPUT",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 607,
                      "end": 612
                    },
                    "typeArguments": null,
                    "start": 607,
                    "end": 612
                  },
                  "start": 605,
                  "end": 612
                },
                "start": 600,
                "end": 612
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "field",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 621,
                    "end": 627
                  },
                  "start": 619,
                  "end": 627
                },
                "start": 614,
                "end": 627
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 632,
                "end": 635
              },
              "start": 629,
              "end": 635
            },
            "start": 599,
            "end": 635
          }
        ],
        "start": 525,
        "end": 636
      },
      "declare": false,
      "start": 498,
      "end": 637
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Spec",
          "optional": false,
          "typeAnnotation": null,
          "start": 651,
          "end": 655
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "INPUT",
                "optional": false,
                "typeAnnotation": null,
                "start": 656,
                "end": 661
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 656,
              "end": 661
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "ROOTINPUT",
                "optional": false,
                "typeAnnotation": null,
                "start": 663,
                "end": 672
              },
              "constraint": null,
              "default": {
                "type": "TSAnyKeyword",
                "start": 675,
                "end": 678
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 663,
              "end": 678
            }
          ],
          "start": 655,
          "end": 679
        },
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Predicate",
                "optional": false,
                "typeAnnotation": null,
                "start": 683,
                "end": 692
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "INPUT",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 693,
                      "end": 698
                    },
                    "typeArguments": null,
                    "start": 693,
                    "end": 698
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ROOTINPUT",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 700,
                      "end": 709
                    },
                    "typeArguments": null,
                    "start": 700,
                    "end": 709
                  }
                ],
                "start": 692,
                "end": 710
              },
              "start": 683,
              "end": 710
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ErrorMsg",
                "optional": false,
                "typeAnnotation": null,
                "start": 712,
                "end": 720
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "INPUT",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 721,
                      "end": 726
                    },
                    "typeArguments": null,
                    "start": 721,
                    "end": 726
                  }
                ],
                "start": 720,
                "end": 727
              },
              "start": 712,
              "end": 727
            }
          ],
          "start": 682,
          "end": 728
        },
        "declare": false,
        "start": 646,
        "end": 729
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 639,
      "end": 729
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "SpecArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 743,
          "end": 752
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "INPUT",
                "optional": false,
                "typeAnnotation": null,
                "start": 753,
                "end": 758
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 753,
              "end": 758
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "ROOTINPUT",
                "optional": false,
                "typeAnnotation": null,
                "start": 760,
                "end": 769
              },
              "constraint": null,
              "default": {
                "type": "TSAnyKeyword",
                "start": 772,
                "end": 775
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 760,
              "end": 775
            }
          ],
          "start": 752,
          "end": 776
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 779,
            "end": 784
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Spec",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 785,
                  "end": 789
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "INPUT",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 790,
                        "end": 795
                      },
                      "typeArguments": null,
                      "start": 790,
                      "end": 795
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ROOTINPUT",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 797,
                        "end": 806
                      },
                      "typeArguments": null,
                      "start": 797,
                      "end": 806
                    }
                  ],
                  "start": 789,
                  "end": 807
                },
                "start": 785,
                "end": 807
              }
            ],
            "start": 784,
            "end": 808
          },
          "start": 779,
          "end": 808
        },
        "declare": false,
        "start": 738,
        "end": 809
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 731,
      "end": 809
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "SpecFunction",
          "optional": false,
          "typeAnnotation": null,
          "start": 823,
          "end": 835
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "INPUT",
                "optional": false,
                "typeAnnotation": null,
                "start": 836,
                "end": 841
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 836,
              "end": 841
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "ROOTINPUT",
                "optional": false,
                "typeAnnotation": null,
                "start": 843,
                "end": 852
              },
              "constraint": null,
              "default": {
                "type": "TSAnyKeyword",
                "start": 855,
                "end": 858
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 843,
              "end": 858
            }
          ],
          "start": 835,
          "end": 859
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "INPUT",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 863,
                  "end": 868
                },
                "typeArguments": null,
                "start": 863,
                "end": 868
              }
            ],
            "start": 862,
            "end": 869
          },
          "extendsType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ReadonlyArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 879,
                  "end": 892
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
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 899,
                          "end": 900
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 899,
                        "end": 900
                      },
                      "start": 893,
                      "end": 900
                    }
                  ],
                  "start": 892,
                  "end": 901
                },
                "start": 879,
                "end": 901
              }
            ],
            "start": 878,
            "end": 902
          },
          "trueType": {
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
                      "name": "INPUT",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 917,
                      "end": 922
                    },
                    "typeArguments": null,
                    "start": 917,
                    "end": 922
                  },
                  "start": 915,
                  "end": 922
                },
                "start": 910,
                "end": 922
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ReadonlyArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 927,
                  "end": 940
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SpecArray",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 941,
                        "end": 950
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
                              "start": 951,
                              "end": 952
                            },
                            "typeArguments": null,
                            "start": 951,
                            "end": 952
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ROOTINPUT",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 954,
                              "end": 963
                            },
                            "typeArguments": null,
                            "start": 954,
                            "end": 963
                          }
                        ],
                        "start": 950,
                        "end": 964
                      },
                      "start": 941,
                      "end": 964
                    }
                  ],
                  "start": 940,
                  "end": 965
                },
                "start": 927,
                "end": 965
              },
              "start": 924,
              "end": 965
            },
            "start": 909,
            "end": 965
          },
          "falseType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "INPUT",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 973,
                    "end": 978
                  },
                  "typeArguments": null,
                  "start": 973,
                  "end": 978
                }
              ],
              "start": 972,
              "end": 979
            },
            "extendsType": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSObjectKeyword",
                  "start": 989,
                  "end": 995
                }
              ],
              "start": 988,
              "end": 996
            },
            "trueType": {
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
                        "name": "INPUT",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1015,
                        "end": 1020
                      },
                      "typeArguments": null,
                      "start": 1015,
                      "end": 1020
                    },
                    "start": 1013,
                    "end": 1020
                  },
                  "start": 1008,
                  "end": 1020
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SpecObject",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1025,
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
                          "name": "INPUT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1036,
                          "end": 1041
                        },
                        "typeArguments": null,
                        "start": 1036,
                        "end": 1041
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ROOTINPUT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1043,
                          "end": 1052
                        },
                        "typeArguments": null,
                        "start": 1043,
                        "end": 1052
                      }
                    ],
                    "start": 1035,
                    "end": 1053
                  },
                  "start": 1025,
                  "end": 1053
                },
                "start": 1022,
                "end": 1053
              },
              "start": 1007,
              "end": 1053
            },
            "falseType": {
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
                        "name": "INPUT",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1072,
                        "end": 1077
                      },
                      "typeArguments": null,
                      "start": 1072,
                      "end": 1077
                    },
                    "start": 1070,
                    "end": 1077
                  },
                  "start": 1065,
                  "end": 1077
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SpecArray",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1082,
                    "end": 1091
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "INPUT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1092,
                          "end": 1097
                        },
                        "typeArguments": null,
                        "start": 1092,
                        "end": 1097
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ROOTINPUT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1099,
                          "end": 1108
                        },
                        "typeArguments": null,
                        "start": 1099,
                        "end": 1108
                      }
                    ],
                    "start": 1091,
                    "end": 1109
                  },
                  "start": 1082,
                  "end": 1109
                },
                "start": 1079,
                "end": 1109
              },
              "start": 1064,
              "end": 1109
            },
            "start": 972,
            "end": 1109
          },
          "start": 862,
          "end": 1109
        },
        "declare": false,
        "start": 818,
        "end": 1110
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 811,
      "end": 1110
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "SpecObject",
          "optional": false,
          "typeAnnotation": null,
          "start": 1124,
          "end": 1134
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "INPUT",
                "optional": false,
                "typeAnnotation": null,
                "start": 1135,
                "end": 1140
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1135,
              "end": 1140
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "ROOTINPUT",
                "optional": false,
                "typeAnnotation": null,
                "start": 1142,
                "end": 1151
              },
              "constraint": null,
              "default": {
                "type": "TSAnyKeyword",
                "start": 1154,
                "end": 1157
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 1142,
              "end": 1157
            }
          ],
          "start": 1134,
          "end": 1158
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Partial",
            "optional": false,
            "typeAnnotation": null,
            "start": 1161,
            "end": 1168
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1171,
                  "end": 1174
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "INPUT",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1184,
                      "end": 1189
                    },
                    "typeArguments": null,
                    "start": 1184,
                    "end": 1189
                  },
                  "start": 1178,
                  "end": 1189
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SpecValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1192,
                    "end": 1201
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "INPUT",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1202,
                            "end": 1207
                          },
                          "typeArguments": null,
                          "start": 1202,
                          "end": 1207
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1208,
                            "end": 1211
                          },
                          "typeArguments": null,
                          "start": 1208,
                          "end": 1211
                        },
                        "start": 1202,
                        "end": 1212
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ROOTINPUT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1214,
                          "end": 1223
                        },
                        "typeArguments": null,
                        "start": 1214,
                        "end": 1223
                      }
                    ],
                    "start": 1201,
                    "end": 1224
                  },
                  "start": 1192,
                  "end": 1224
                },
                "optional": false,
                "readonly": null,
                "start": 1169,
                "end": 1225
              }
            ],
            "start": 1168,
            "end": 1226
          },
          "start": 1161,
          "end": 1226
        },
        "declare": false,
        "start": 1119,
        "end": 1227
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1112,
      "end": 1227
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "SpecValue",
          "optional": false,
          "typeAnnotation": null,
          "start": 1241,
          "end": 1250
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "INPUT",
                "optional": false,
                "typeAnnotation": null,
                "start": 1251,
                "end": 1256
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1251,
              "end": 1256
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "ROOTINPUT",
                "optional": false,
                "typeAnnotation": null,
                "start": 1258,
                "end": 1267
              },
              "constraint": null,
              "default": {
                "type": "TSAnyKeyword",
                "start": 1270,
                "end": 1273
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 1258,
              "end": 1273
            }
          ],
          "start": 1250,
          "end": 1274
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "INPUT",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1278,
                  "end": 1283
                },
                "typeArguments": null,
                "start": 1278,
                "end": 1283
              }
            ],
            "start": 1277,
            "end": 1284
          },
          "extendsType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ReadonlyArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1294,
                  "end": 1307
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 1308,
                      "end": 1311
                    }
                  ],
                  "start": 1307,
                  "end": 1312
                },
                "start": 1294,
                "end": 1312
              }
            ],
            "start": 1293,
            "end": 1313
          },
          "trueType": {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SpecArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1320,
                  "end": 1329
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "INPUT",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1330,
                        "end": 1335
                      },
                      "typeArguments": null,
                      "start": 1330,
                      "end": 1335
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ROOTINPUT",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1337,
                        "end": 1346
                      },
                      "typeArguments": null,
                      "start": 1337,
                      "end": 1346
                    }
                  ],
                  "start": 1329,
                  "end": 1347
                },
                "start": 1320,
                "end": 1347
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SpecFunction",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1350,
                  "end": 1362
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "INPUT",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1363,
                        "end": 1368
                      },
                      "typeArguments": null,
                      "start": 1363,
                      "end": 1368
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ROOTINPUT",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1370,
                        "end": 1379
                      },
                      "typeArguments": null,
                      "start": 1370,
                      "end": 1379
                    }
                  ],
                  "start": 1362,
                  "end": 1380
                },
                "start": 1350,
                "end": 1380
              }
            ],
            "start": 1320,
            "end": 1380
          },
          "falseType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "INPUT",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1392,
                    "end": 1397
                  },
                  "typeArguments": null,
                  "start": 1392,
                  "end": 1397
                }
              ],
              "start": 1391,
              "end": 1398
            },
            "extendsType": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSObjectKeyword",
                  "start": 1408,
                  "end": 1414
                }
              ],
              "start": 1407,
              "end": 1415
            },
            "trueType": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SpecArray",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1430,
                    "end": 1439
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "INPUT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1440,
                          "end": 1445
                        },
                        "typeArguments": null,
                        "start": 1440,
                        "end": 1445
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ROOTINPUT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1447,
                          "end": 1456
                        },
                        "typeArguments": null,
                        "start": 1447,
                        "end": 1456
                      }
                    ],
                    "start": 1439,
                    "end": 1457
                  },
                  "start": 1430,
                  "end": 1457
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SpecFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1460,
                    "end": 1472
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "INPUT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1473,
                          "end": 1478
                        },
                        "typeArguments": null,
                        "start": 1473,
                        "end": 1478
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ROOTINPUT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1480,
                          "end": 1489
                        },
                        "typeArguments": null,
                        "start": 1480,
                        "end": 1489
                      }
                    ],
                    "start": 1472,
                    "end": 1490
                  },
                  "start": 1460,
                  "end": 1490
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SpecObject",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1493,
                    "end": 1503
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "INPUT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1504,
                          "end": 1509
                        },
                        "typeArguments": null,
                        "start": 1504,
                        "end": 1509
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ROOTINPUT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1511,
                          "end": 1520
                        },
                        "typeArguments": null,
                        "start": 1511,
                        "end": 1520
                      }
                    ],
                    "start": 1503,
                    "end": 1521
                  },
                  "start": 1493,
                  "end": 1521
                }
              ],
              "start": 1430,
              "end": 1521
            },
            "falseType": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SpecArray",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1536,
                    "end": 1545
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "INPUT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1546,
                          "end": 1551
                        },
                        "typeArguments": null,
                        "start": 1546,
                        "end": 1551
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ROOTINPUT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1553,
                          "end": 1562
                        },
                        "typeArguments": null,
                        "start": 1553,
                        "end": 1562
                      }
                    ],
                    "start": 1545,
                    "end": 1563
                  },
                  "start": 1536,
                  "end": 1563
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SpecFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1566,
                    "end": 1578
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "INPUT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1579,
                          "end": 1584
                        },
                        "typeArguments": null,
                        "start": 1579,
                        "end": 1584
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ROOTINPUT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1586,
                          "end": 1595
                        },
                        "typeArguments": null,
                        "start": 1586,
                        "end": 1595
                      }
                    ],
                    "start": 1578,
                    "end": 1596
                  },
                  "start": 1566,
                  "end": 1596
                }
              ],
              "start": 1536,
              "end": 1596
            },
            "start": 1391,
            "end": 1596
          },
          "start": 1277,
          "end": 1596
        },
        "declare": false,
        "start": 1236,
        "end": 1597
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1229,
      "end": 1597
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Result",
          "optional": false,
          "typeAnnotation": null,
          "start": 1611,
          "end": 1617
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "INPUT",
                "optional": false,
                "typeAnnotation": null,
                "start": 1618,
                "end": 1623
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1618,
              "end": 1623
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "SPEC",
                "optional": false,
                "typeAnnotation": null,
                "start": 1625,
                "end": 1629
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1625,
              "end": 1629
            }
          ],
          "start": 1617,
          "end": 1630
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "key",
            "optional": false,
            "typeAnnotation": null,
            "start": 1635,
            "end": 1638
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "INPUT",
                "optional": false,
                "typeAnnotation": null,
                "start": 1648,
                "end": 1653
              },
              "typeArguments": null,
              "start": 1648,
              "end": 1653
            },
            "start": 1642,
            "end": 1653
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 1656,
                  "end": 1660
                },
                "start": 1656,
                "end": 1660
              },
              {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 1663,
                  "end": 1666
                },
                "start": 1663,
                "end": 1668
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Result",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1671,
                  "end": 1677
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "INPUT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1678,
                          "end": 1683
                        },
                        "typeArguments": null,
                        "start": 1678,
                        "end": 1683
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1684,
                          "end": 1687
                        },
                        "typeArguments": null,
                        "start": 1684,
                        "end": 1687
                      },
                      "start": 1678,
                      "end": 1688
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 1690,
                      "end": 1693
                    }
                  ],
                  "start": 1677,
                  "end": 1694
                },
                "start": 1671,
                "end": 1694
              }
            ],
            "start": 1656,
            "end": 1694
          },
          "optional": false,
          "readonly": null,
          "start": 1633,
          "end": 1695
        },
        "declare": false,
        "start": 1606,
        "end": 1696
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1599,
      "end": 1696
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "spected",
        "optional": false,
        "typeAnnotation": null,
        "start": 1713,
        "end": 1720
      },
      "exportKind": "value",
      "start": 1698,
      "end": 1721
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 243,
  "end": 1721
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 243,
    "end": 250
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 251,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "spected",
    "start": 260,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "ROOTINPUT",
    "start": 268,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "SPEC",
    "start": 279,
    "end": 283
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 284,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "SpecValue",
    "start": 292,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "ROOTINPUT",
    "start": 302,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "ROOTINPUT",
    "start": 313,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "SpecValue",
    "start": 326,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "ROOTINPUT",
    "start": 336,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "ROOTINPUT",
    "start": 347,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "spec",
    "start": 359,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "SPEC",
    "start": 365,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 371,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "ROOTINPUT",
    "start": 378,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 390,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "ROOTINPUT",
    "start": 397,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "SPEC",
    "start": 408,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 416,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "Predicate",
    "start": 421,
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
    "value": "INPUT",
    "start": 431,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "ROOTINPUT",
    "start": 438,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 452,
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
    "value": "INPUT",
    "start": 459,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "inputs",
    "start": 466,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "ROOTINPUT",
    "start": 474,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 485,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 488,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 498,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "ErrorMsg",
    "start": 503,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "INPUT",
    "start": 512,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 528,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 537,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 544,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 546,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 556,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 563,
    "end": 564
  },
  {
    "type": "Null",
    "value": "null",
    "start": 565,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 572,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 582,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 584,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 599,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 600,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 605,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "INPUT",
    "start": 607,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 612,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 614,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 619,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 621,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 629,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 632,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 636,
    "end": 637
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 639,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 646,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "Spec",
    "start": 651,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 655,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "INPUT",
    "start": 656,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 661,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "ROOTINPUT",
    "start": 663,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 673,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 675,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "Predicate",
    "start": 683,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 692,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "INPUT",
    "start": 693,
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
    "value": "ROOTINPUT",
    "start": 700,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 710,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "ErrorMsg",
    "start": 712,
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
    "value": "INPUT",
    "start": 721,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 728,
    "end": 729
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 731,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 738,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "SpecArray",
    "start": 743,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "INPUT",
    "start": 753,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 758,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "ROOTINPUT",
    "start": 760,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 770,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 772,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 777,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 779,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 784,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "Spec",
    "start": 785,
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
    "value": "INPUT",
    "start": 790,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 795,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "ROOTINPUT",
    "start": 797,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 808,
    "end": 809
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 811,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 818,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "SpecFunction",
    "start": 823,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 835,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "INPUT",
    "start": 836,
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
    "value": "ROOTINPUT",
    "start": 843,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 853,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 855,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 858,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 862,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "INPUT",
    "start": 863,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 868,
    "end": 869
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 870,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 878,
    "end": 879
  },
  {
    "type": "Identifier",
    "value": "ReadonlyArray",
    "start": 879,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 892,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 893,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 900,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 909,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 910,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 915,
    "end": 916
  },
  {
    "type": "Identifier",
    "value": "INPUT",
    "start": 917,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 922,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 924,
    "end": 926
  },
  {
    "type": "Identifier",
    "value": "ReadonlyArray",
    "start": 927,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 940,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "SpecArray",
    "start": 941,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 950,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 951,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 952,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "ROOTINPUT",
    "start": 954,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 970,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 972,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "INPUT",
    "start": 973,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 978,
    "end": 979
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 980,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 988,
    "end": 989
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 989,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 995,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1008,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Identifier",
    "value": "INPUT",
    "start": 1015,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1022,
    "end": 1024
  },
  {
    "type": "Identifier",
    "value": "SpecObject",
    "start": 1025,
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
    "value": "INPUT",
    "start": 1036,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Identifier",
    "value": "ROOTINPUT",
    "start": 1043,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1065,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "INPUT",
    "start": 1072,
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
    "value": "=>",
    "start": 1079,
    "end": 1081
  },
  {
    "type": "Identifier",
    "value": "SpecArray",
    "start": 1082,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Identifier",
    "value": "INPUT",
    "start": 1092,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "ROOTINPUT",
    "start": 1099,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1112,
    "end": 1118
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1119,
    "end": 1123
  },
  {
    "type": "Identifier",
    "value": "SpecObject",
    "start": 1124,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Identifier",
    "value": "INPUT",
    "start": 1135,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Identifier",
    "value": "ROOTINPUT",
    "start": 1142,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1154,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 1161,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1171,
    "end": 1174
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1175,
    "end": 1177
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1178,
    "end": 1183
  },
  {
    "type": "Identifier",
    "value": "INPUT",
    "start": 1184,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Identifier",
    "value": "SpecValue",
    "start": 1192,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Identifier",
    "value": "INPUT",
    "start": 1202,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1208,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Identifier",
    "value": "ROOTINPUT",
    "start": 1214,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1229,
    "end": 1235
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1236,
    "end": 1240
  },
  {
    "type": "Identifier",
    "value": "SpecValue",
    "start": 1241,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Identifier",
    "value": "INPUT",
    "start": 1251,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Identifier",
    "value": "ROOTINPUT",
    "start": 1258,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1270,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Identifier",
    "value": "INPUT",
    "start": 1278,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1285,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Identifier",
    "value": "ReadonlyArray",
    "start": 1294,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1308,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Identifier",
    "value": "SpecArray",
    "start": 1320,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Identifier",
    "value": "INPUT",
    "start": 1330,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Identifier",
    "value": "ROOTINPUT",
    "start": 1337,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Identifier",
    "value": "SpecFunction",
    "start": 1350,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Identifier",
    "value": "INPUT",
    "start": 1363,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Identifier",
    "value": "ROOTINPUT",
    "start": 1370,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Identifier",
    "value": "INPUT",
    "start": 1392,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1399,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 1408,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Identifier",
    "value": "SpecArray",
    "start": 1430,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Identifier",
    "value": "INPUT",
    "start": 1440,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Identifier",
    "value": "ROOTINPUT",
    "start": 1447,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Identifier",
    "value": "SpecFunction",
    "start": 1460,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Identifier",
    "value": "INPUT",
    "start": 1473,
    "end": 1478
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Identifier",
    "value": "ROOTINPUT",
    "start": 1480,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Identifier",
    "value": "SpecObject",
    "start": 1493,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Identifier",
    "value": "INPUT",
    "start": 1504,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Identifier",
    "value": "ROOTINPUT",
    "start": 1511,
    "end": 1520
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Identifier",
    "value": "SpecArray",
    "start": 1536,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Identifier",
    "value": "INPUT",
    "start": 1546,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Identifier",
    "value": "ROOTINPUT",
    "start": 1553,
    "end": 1562
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Identifier",
    "value": "SpecFunction",
    "start": 1566,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1578,
    "end": 1579
  },
  {
    "type": "Identifier",
    "value": "INPUT",
    "start": 1579,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Identifier",
    "value": "ROOTINPUT",
    "start": 1586,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1599,
    "end": 1605
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1606,
    "end": 1610
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 1611,
    "end": 1617
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Identifier",
    "value": "INPUT",
    "start": 1618,
    "end": 1623
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Identifier",
    "value": "SPEC",
    "start": 1625,
    "end": 1629
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1635,
    "end": 1638
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1639,
    "end": 1641
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1642,
    "end": 1647
  },
  {
    "type": "Identifier",
    "value": "INPUT",
    "start": 1648,
    "end": 1653
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1654,
    "end": 1655
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1656,
    "end": 1660
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1663,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1667,
    "end": 1668
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 1671,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Identifier",
    "value": "INPUT",
    "start": 1678,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1684,
    "end": 1687
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1687,
    "end": 1688
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1690,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1698,
    "end": 1704
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 1705,
    "end": 1712
  },
  {
    "type": "Identifier",
    "value": "spected",
    "start": 1713,
    "end": 1720
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1720,
    "end": 1721
  }
]
```
