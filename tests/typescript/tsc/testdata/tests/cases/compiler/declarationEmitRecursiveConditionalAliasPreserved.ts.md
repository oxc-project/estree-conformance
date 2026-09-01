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
        "name": "_BuildPowersOf2LengthArrays",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 32
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Length",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 44
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 53,
              "end": 59
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 38,
            "end": 59
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "AccumulatedArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 81
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNeverKeyword",
                  "start": 90,
                  "end": 95
                },
                "start": 90,
                "end": 97
              },
              "start": 90,
              "end": 99
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 65,
            "end": 99
          }
        ],
        "start": 32,
        "end": 102
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AccumulatedArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 105,
                "end": 121
              },
              "typeArguments": null,
              "start": 105,
              "end": 121
            },
            "indexType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 122,
                "end": 123
              },
              "start": 122,
              "end": 123
            },
            "start": 105,
            "end": 124
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Length",
              "optional": false,
              "typeAnnotation": null,
              "start": 125,
              "end": 131
            },
            "typeArguments": null,
            "start": 125,
            "end": 131
          },
          "start": 105,
          "end": 132
        },
        "extendsType": {
          "type": "TSNeverKeyword",
          "start": 141,
          "end": 146
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AccumulatedArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 153,
            "end": 169
          },
          "typeArguments": null,
          "start": 153,
          "end": 169
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "_BuildPowersOf2LengthArrays",
            "optional": false,
            "typeAnnotation": null,
            "start": 176,
            "end": 203
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 213,
                  "end": 219
                },
                "typeArguments": null,
                "start": 213,
                "end": 219
              },
              {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSRestType",
                        "typeAnnotation": {
                          "type": "TSIndexedAccessType",
                          "objectType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AccumulatedArray",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 234,
                              "end": 250
                            },
                            "typeArguments": null,
                            "start": 234,
                            "end": 250
                          },
                          "indexType": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 251,
                              "end": 252
                            },
                            "start": 251,
                            "end": 252
                          },
                          "start": 234,
                          "end": 253
                        },
                        "start": 231,
                        "end": 253
                      },
                      {
                        "type": "TSRestType",
                        "typeAnnotation": {
                          "type": "TSIndexedAccessType",
                          "objectType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AccumulatedArray",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 258,
                              "end": 274
                            },
                            "typeArguments": null,
                            "start": 258,
                            "end": 274
                          },
                          "indexType": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 275,
                              "end": 276
                            },
                            "start": 275,
                            "end": 276
                          },
                          "start": 258,
                          "end": 277
                        },
                        "start": 255,
                        "end": 277
                      }
                    ],
                    "start": 230,
                    "end": 278
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AccumulatedArray",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 283,
                        "end": 299
                      },
                      "typeArguments": null,
                      "start": 283,
                      "end": 299
                    },
                    "start": 280,
                    "end": 299
                  }
                ],
                "start": 229,
                "end": 300
              }
            ],
            "start": 203,
            "end": 306
          },
          "start": 176,
          "end": 306
        },
        "start": 105,
        "end": 306
      },
      "declare": false,
      "start": 0,
      "end": 307
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_ConcatLargestUntilDone",
        "optional": false,
        "typeAnnotation": null,
        "start": 314,
        "end": 337
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Length",
              "optional": false,
              "typeAnnotation": null,
              "start": 343,
              "end": 349
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 358,
              "end": 364
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 343,
            "end": 364
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "AccumulatedArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 370,
              "end": 386
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNeverKeyword",
                  "start": 395,
                  "end": 400
                },
                "start": 395,
                "end": 402
              },
              "start": 395,
              "end": 404
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 370,
            "end": 404
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "NextArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 410,
              "end": 419
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSNeverKeyword",
                "start": 428,
                "end": 433
              },
              "start": 428,
              "end": 435
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 410,
            "end": 435
          }
        ],
        "start": 337,
        "end": 438
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "NextArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 441,
              "end": 450
            },
            "typeArguments": null,
            "start": 441,
            "end": 450
          },
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "length",
              "raw": "'length'",
              "start": 451,
              "end": 459
            },
            "start": 451,
            "end": 459
          },
          "start": 441,
          "end": 460
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Length",
            "optional": false,
            "typeAnnotation": null,
            "start": 469,
            "end": 475
          },
          "typeArguments": null,
          "start": 469,
          "end": 475
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "NextArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 482,
            "end": 491
          },
          "typeArguments": null,
          "start": 482,
          "end": 491
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AccumulatedArray",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 502,
                        "end": 518
                      },
                      "typeArguments": null,
                      "start": 502,
                      "end": 518
                    },
                    "indexType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 519,
                        "end": 520
                      },
                      "start": 519,
                      "end": 520
                    },
                    "start": 502,
                    "end": 521
                  },
                  "start": 499,
                  "end": 521
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NextArray",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 526,
                      "end": 535
                    },
                    "typeArguments": null,
                    "start": 526,
                    "end": 535
                  },
                  "start": 523,
                  "end": 535
                }
              ],
              "start": 498,
              "end": 536
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Length",
                "optional": false,
                "typeAnnotation": null,
                "start": 537,
                "end": 543
              },
              "typeArguments": null,
              "start": 537,
              "end": 543
            },
            "start": 498,
            "end": 544
          },
          "extendsType": {
            "type": "TSNeverKeyword",
            "start": 553,
            "end": 558
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "_ConcatLargestUntilDone",
              "optional": false,
              "typeAnnotation": null,
              "start": 565,
              "end": 588
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 598,
                    "end": 604
                  },
                  "typeArguments": null,
                  "start": 598,
                  "end": 604
                },
                {
                  "type": "TSConditionalType",
                  "checkType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AccumulatedArray",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 614,
                      "end": 630
                    },
                    "typeArguments": null,
                    "start": 614,
                    "end": 630
                  },
                  "extendsType": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "AccumulatedArray",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 640,
                            "end": 656
                          },
                          "typeArguments": null,
                          "start": 640,
                          "end": 656
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 657,
                            "end": 658
                          },
                          "start": 657,
                          "end": 658
                        },
                        "start": 640,
                        "end": 659
                      },
                      {
                        "type": "TSRestType",
                        "typeAnnotation": {
                          "type": "TSInferType",
                          "typeParameter": {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 670,
                              "end": 671
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 670,
                            "end": 671
                          },
                          "start": 664,
                          "end": 671
                        },
                        "start": 661,
                        "end": 671
                      }
                    ],
                    "start": 639,
                    "end": 672
                  },
                  "trueType": {
                    "type": "TSConditionalType",
                    "checkType": {
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
                    },
                    "extendsType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNeverKeyword",
                          "start": 693,
                          "end": 698
                        },
                        "start": 693,
                        "end": 700
                      },
                      "start": 693,
                      "end": 702
                    },
                    "trueType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 713,
                        "end": 714
                      },
                      "typeArguments": null,
                      "start": 713,
                      "end": 714
                    },
                    "falseType": {
                      "type": "TSNeverKeyword",
                      "start": 725,
                      "end": 730
                    },
                    "start": 683,
                    "end": 730
                  },
                  "falseType": {
                    "type": "TSNeverKeyword",
                    "start": 741,
                    "end": 746
                  },
                  "start": 614,
                  "end": 746
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NextArray",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 756,
                    "end": 765
                  },
                  "typeArguments": null,
                  "start": 756,
                  "end": 765
                }
              ],
              "start": 588,
              "end": 771
            },
            "start": 565,
            "end": 771
          },
          "falseType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "_ConcatLargestUntilDone",
              "optional": false,
              "typeAnnotation": null,
              "start": 778,
              "end": 801
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 811,
                    "end": 817
                  },
                  "typeArguments": null,
                  "start": 811,
                  "end": 817
                },
                {
                  "type": "TSConditionalType",
                  "checkType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AccumulatedArray",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 827,
                      "end": 843
                    },
                    "typeArguments": null,
                    "start": 827,
                    "end": 843
                  },
                  "extendsType": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "AccumulatedArray",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 853,
                            "end": 869
                          },
                          "typeArguments": null,
                          "start": 853,
                          "end": 869
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 870,
                            "end": 871
                          },
                          "start": 870,
                          "end": 871
                        },
                        "start": 853,
                        "end": 872
                      },
                      {
                        "type": "TSRestType",
                        "typeAnnotation": {
                          "type": "TSInferType",
                          "typeParameter": {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 883,
                              "end": 884
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 883,
                            "end": 884
                          },
                          "start": 877,
                          "end": 884
                        },
                        "start": 874,
                        "end": 884
                      }
                    ],
                    "start": 852,
                    "end": 885
                  },
                  "trueType": {
                    "type": "TSConditionalType",
                    "checkType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 896,
                        "end": 897
                      },
                      "typeArguments": null,
                      "start": 896,
                      "end": 897
                    },
                    "extendsType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNeverKeyword",
                          "start": 906,
                          "end": 911
                        },
                        "start": 906,
                        "end": 913
                      },
                      "start": 906,
                      "end": 915
                    },
                    "trueType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 926,
                        "end": 927
                      },
                      "typeArguments": null,
                      "start": 926,
                      "end": 927
                    },
                    "falseType": {
                      "type": "TSNeverKeyword",
                      "start": 938,
                      "end": 943
                    },
                    "start": 896,
                    "end": 943
                  },
                  "falseType": {
                    "type": "TSNeverKeyword",
                    "start": 954,
                    "end": 959
                  },
                  "start": 827,
                  "end": 959
                },
                {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSRestType",
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "AccumulatedArray",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 973,
                            "end": 989
                          },
                          "typeArguments": null,
                          "start": 973,
                          "end": 989
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 990,
                            "end": 991
                          },
                          "start": 990,
                          "end": 991
                        },
                        "start": 973,
                        "end": 992
                      },
                      "start": 970,
                      "end": 992
                    },
                    {
                      "type": "TSRestType",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "NextArray",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 997,
                          "end": 1006
                        },
                        "typeArguments": null,
                        "start": 997,
                        "end": 1006
                      },
                      "start": 994,
                      "end": 1006
                    }
                  ],
                  "start": 969,
                  "end": 1007
                }
              ],
              "start": 801,
              "end": 1013
            },
            "start": 778,
            "end": 1013
          },
          "start": 498,
          "end": 1013
        },
        "start": 441,
        "end": 1013
      },
      "declare": false,
      "start": 309,
      "end": 1013
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_Replace",
        "optional": false,
        "typeAnnotation": null,
        "start": 1020,
        "end": 1028
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 1029,
              "end": 1030
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 1039,
                "end": 1046
              },
              "start": 1039,
              "end": 1048
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1029,
            "end": 1048
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1050,
              "end": 1051
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1050,
            "end": 1051
          }
        ],
        "start": 1028,
        "end": 1052
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 1058,
          "end": 1059
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 1069,
              "end": 1070
            },
            "typeArguments": null,
            "start": 1069,
            "end": 1070
          },
          "start": 1063,
          "end": 1070
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1073,
            "end": 1074
          },
          "typeArguments": null,
          "start": 1073,
          "end": 1074
        },
        "optional": false,
        "readonly": null,
        "start": 1055,
        "end": 1076
      },
      "declare": false,
      "start": 1015,
      "end": 1077
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TupleOf",
          "optional": false,
          "typeAnnotation": null,
          "start": 1091,
          "end": 1098
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Type",
                "optional": false,
                "typeAnnotation": null,
                "start": 1099,
                "end": 1103
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1099,
              "end": 1103
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Length",
                "optional": false,
                "typeAnnotation": null,
                "start": 1105,
                "end": 1111
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 1120,
                "end": 1126
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1105,
              "end": 1126
            }
          ],
          "start": 1098,
          "end": 1127
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSNumberKeyword",
            "start": 1130,
            "end": 1136
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Length",
              "optional": false,
              "typeAnnotation": null,
              "start": 1145,
              "end": 1151
            },
            "typeArguments": null,
            "start": 1145,
            "end": 1151
          },
          "trueType": {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Type",
                "optional": false,
                "typeAnnotation": null,
                "start": 1158,
                "end": 1162
              },
              "typeArguments": null,
              "start": 1158,
              "end": 1162
            },
            "start": 1158,
            "end": 1164
          },
          "falseType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "LengthKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 1219,
                "end": 1228
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1232,
                  "end": 1238
                },
                "typeArguments": null,
                "start": 1232,
                "end": 1238
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_BuildPowersOf2LengthArrays",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1241,
                    "end": 1268
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "LengthKey",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1282,
                          "end": 1291
                        },
                        "typeArguments": null,
                        "start": 1282,
                        "end": 1291
                      },
                      {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSTupleType",
                            "elementTypes": [
                              {
                                "type": "TSNeverKeyword",
                                "start": 1307,
                                "end": 1312
                              }
                            ],
                            "start": 1306,
                            "end": 1313
                          }
                        ],
                        "start": 1305,
                        "end": 1314
                      }
                    ],
                    "start": 1268,
                    "end": 1324
                  },
                  "start": 1241,
                  "end": 1324
                },
                "extendsType": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TwoDimensionalArray",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1339,
                      "end": 1358
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1339,
                    "end": 1358
                  },
                  "start": 1333,
                  "end": 1358
                },
                "trueType": {
                  "type": "TSConditionalType",
                  "checkType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TwoDimensionalArray",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1369,
                      "end": 1388
                    },
                    "typeArguments": null,
                    "start": 1369,
                    "end": 1388
                  },
                  "extendsType": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNeverKeyword",
                        "start": 1397,
                        "end": 1402
                      },
                      "start": 1397,
                      "end": 1404
                    },
                    "start": 1397,
                    "end": 1406
                  },
                  "trueType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_Replace",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1417,
                      "end": 1425
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_ConcatLargestUntilDone",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1426,
                            "end": 1449
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "LengthKey",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1450,
                                  "end": 1459
                                },
                                "typeArguments": null,
                                "start": 1450,
                                "end": 1459
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "TwoDimensionalArray",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1461,
                                  "end": 1480
                                },
                                "typeArguments": null,
                                "start": 1461,
                                "end": 1480
                              },
                              {
                                "type": "TSTupleType",
                                "elementTypes": [],
                                "start": 1482,
                                "end": 1484
                              }
                            ],
                            "start": 1449,
                            "end": 1485
                          },
                          "start": 1426,
                          "end": 1485
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Type",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1487,
                            "end": 1491
                          },
                          "typeArguments": null,
                          "start": 1487,
                          "end": 1491
                        }
                      ],
                      "start": 1425,
                      "end": 1492
                    },
                    "start": 1417,
                    "end": 1492
                  },
                  "falseType": {
                    "type": "TSNeverKeyword",
                    "start": 1503,
                    "end": 1508
                  },
                  "start": 1369,
                  "end": 1508
                },
                "falseType": {
                  "type": "TSNeverKeyword",
                  "start": 1519,
                  "end": 1524
                },
                "start": 1241,
                "end": 1524
              },
              "optional": false,
              "readonly": null,
              "start": 1171,
              "end": 1530
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Length",
                "optional": false,
                "typeAnnotation": null,
                "start": 1531,
                "end": 1537
              },
              "typeArguments": null,
              "start": 1531,
              "end": 1537
            },
            "start": 1171,
            "end": 1538
          },
          "start": 1130,
          "end": 1538
        },
        "declare": false,
        "start": 1086,
        "end": 1539
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1079,
      "end": 1539
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Subtract",
          "optional": false,
          "typeAnnotation": null,
          "start": 1553,
          "end": 1561
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "N1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1562,
                "end": 1564
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 1573,
                "end": 1579
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1562,
              "end": 1579
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "N2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1581,
                "end": 1583
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 1592,
                "end": 1598
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1581,
              "end": 1598
            }
          ],
          "start": 1561,
          "end": 1599
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TupleOf",
              "optional": false,
              "typeAnnotation": null,
              "start": 1602,
              "end": 1609
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSNeverKeyword",
                  "start": 1610,
                  "end": 1615
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "N1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1617,
                    "end": 1619
                  },
                  "typeArguments": null,
                  "start": 1617,
                  "end": 1619
                }
              ],
              "start": 1609,
              "end": 1620
            },
            "start": 1602,
            "end": 1620
          },
          "extendsType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSRestType",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TupleOf",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1638,
                    "end": 1645
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSNeverKeyword",
                        "start": 1646,
                        "end": 1651
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "N2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1653,
                          "end": 1655
                        },
                        "typeArguments": null,
                        "start": 1653,
                        "end": 1655
                      }
                    ],
                    "start": 1645,
                    "end": 1656
                  },
                  "start": 1638,
                  "end": 1656
                },
                "start": 1635,
                "end": 1656
              },
              {
                "type": "TSRestType",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1671,
                      "end": 1672
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1671,
                    "end": 1672
                  },
                  "start": 1665,
                  "end": 1672
                },
                "start": 1662,
                "end": 1672
              }
            ],
            "start": 1629,
            "end": 1675
          },
          "trueType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "R",
                "optional": false,
                "typeAnnotation": null,
                "start": 1682,
                "end": 1683
              },
              "typeArguments": null,
              "start": 1682,
              "end": 1683
            },
            "indexType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "length",
                "raw": "'length'",
                "start": 1684,
                "end": 1692
              },
              "start": 1684,
              "end": 1692
            },
            "start": 1682,
            "end": 1693
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1700,
            "end": 1705
          },
          "start": 1602,
          "end": 1705
        },
        "declare": false,
        "start": 1548,
        "end": 1706
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1541,
      "end": 1706
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Decrement",
          "optional": false,
          "typeAnnotation": null,
          "start": 1720,
          "end": 1729
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
                "start": 1730,
                "end": 1731
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 1740,
                "end": 1746
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1730,
              "end": 1746
            }
          ],
          "start": 1729,
          "end": 1747
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Subtract",
            "optional": false,
            "typeAnnotation": null,
            "start": 1750,
            "end": 1758
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
                  "start": 1759,
                  "end": 1760
                },
                "typeArguments": null,
                "start": 1759,
                "end": 1760
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1762,
                  "end": 1763
                },
                "start": 1762,
                "end": 1763
              }
            ],
            "start": 1758,
            "end": 1764
          },
          "start": 1750,
          "end": 1764
        },
        "declare": false,
        "start": 1715,
        "end": 1765
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1708,
      "end": 1765
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Add",
          "optional": false,
          "typeAnnotation": null,
          "start": 1779,
          "end": 1782
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "N1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1783,
                "end": 1785
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 1794,
                "end": 1800
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1783,
              "end": 1800
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "N2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1802,
                "end": 1804
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 1813,
                "end": 1819
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1802,
              "end": 1819
            }
          ],
          "start": 1782,
          "end": 1820
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TupleOf",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1832,
                        "end": 1839
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNeverKeyword",
                            "start": 1840,
                            "end": 1845
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "N1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1847,
                              "end": 1849
                            },
                            "typeArguments": null,
                            "start": 1847,
                            "end": 1849
                          }
                        ],
                        "start": 1839,
                        "end": 1850
                      },
                      "start": 1832,
                      "end": 1850
                    },
                    "start": 1829,
                    "end": 1850
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TupleOf",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1859,
                        "end": 1866
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNeverKeyword",
                            "start": 1867,
                            "end": 1872
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "N2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1874,
                              "end": 1876
                            },
                            "typeArguments": null,
                            "start": 1874,
                            "end": 1876
                          }
                        ],
                        "start": 1866,
                        "end": 1877
                      },
                      "start": 1859,
                      "end": 1877
                    },
                    "start": 1856,
                    "end": 1877
                  }
                ],
                "start": 1823,
                "end": 1880
              },
              "indexType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "length",
                  "raw": "'length'",
                  "start": 1881,
                  "end": 1889
                },
                "start": 1881,
                "end": 1889
              },
              "start": 1823,
              "end": 1890
            },
            {
              "type": "TSNumberKeyword",
              "start": 1952,
              "end": 1958
            }
          ],
          "start": 1823,
          "end": 1958
        },
        "declare": false,
        "start": 1774,
        "end": 1959
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1767,
      "end": 1959
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_MultiAdd",
        "optional": false,
        "typeAnnotation": null,
        "start": 1966,
        "end": 1975
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Num",
              "optional": false,
              "typeAnnotation": null,
              "start": 1981,
              "end": 1984
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1993,
              "end": 1999
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1981,
            "end": 1999
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Accumulator",
              "optional": false,
              "typeAnnotation": null,
              "start": 2005,
              "end": 2016
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 2025,
              "end": 2031
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2005,
            "end": 2031
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "IterationsLeft",
              "optional": false,
              "typeAnnotation": null,
              "start": 2037,
              "end": 2051
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 2060,
              "end": 2066
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2037,
            "end": 2066
          }
        ],
        "start": 1975,
        "end": 2069
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IterationsLeft",
            "optional": false,
            "typeAnnotation": null,
            "start": 2072,
            "end": 2086
          },
          "typeArguments": null,
          "start": 2072,
          "end": 2086
        },
        "extendsType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 2095,
            "end": 2096
          },
          "start": 2095,
          "end": 2096
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Accumulator",
            "optional": false,
            "typeAnnotation": null,
            "start": 2103,
            "end": 2114
          },
          "typeArguments": null,
          "start": 2103,
          "end": 2114
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "_MultiAdd",
            "optional": false,
            "typeAnnotation": null,
            "start": 2121,
            "end": 2130
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Num",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2131,
                  "end": 2134
                },
                "typeArguments": null,
                "start": 2131,
                "end": 2134
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Add",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2136,
                  "end": 2139
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Num",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2140,
                        "end": 2143
                      },
                      "typeArguments": null,
                      "start": 2140,
                      "end": 2143
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Accumulator",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2145,
                        "end": 2156
                      },
                      "typeArguments": null,
                      "start": 2145,
                      "end": 2156
                    }
                  ],
                  "start": 2139,
                  "end": 2157
                },
                "start": 2136,
                "end": 2157
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Decrement",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2159,
                  "end": 2168
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IterationsLeft",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2169,
                        "end": 2183
                      },
                      "typeArguments": null,
                      "start": 2169,
                      "end": 2183
                    }
                  ],
                  "start": 2168,
                  "end": 2184
                },
                "start": 2159,
                "end": 2184
              }
            ],
            "start": 2130,
            "end": 2185
          },
          "start": 2121,
          "end": 2185
        },
        "start": 2072,
        "end": 2185
      },
      "declare": false,
      "start": 1961,
      "end": 2185
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Multiply",
          "optional": false,
          "typeAnnotation": null,
          "start": 2199,
          "end": 2207
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "N1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2208,
                "end": 2210
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 2219,
                "end": 2225
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 2208,
              "end": 2225
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "N2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2227,
                "end": 2229
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 2238,
                "end": 2244
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 2227,
              "end": 2244
            }
          ],
          "start": 2207,
          "end": 2245
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSNumberKeyword",
            "start": 2248,
            "end": 2254
          },
          "extendsType": {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2263,
                  "end": 2265
                },
                "typeArguments": null,
                "start": 2263,
                "end": 2265
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2268,
                  "end": 2270
                },
                "typeArguments": null,
                "start": 2268,
                "end": 2270
              }
            ],
            "start": 2263,
            "end": 2270
          },
          "trueType": {
            "type": "TSNumberKeyword",
            "start": 2277,
            "end": 2283
          },
          "falseType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2301,
                "end": 2303
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2307,
                  "end": 2309
                },
                "typeArguments": null,
                "start": 2307,
                "end": 2309
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSMappedType",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2315,
                    "end": 2317
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "N1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2321,
                      "end": 2323
                    },
                    "typeArguments": null,
                    "start": 2321,
                    "end": 2323
                  },
                  "nameType": null,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_MultiAdd",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2326,
                      "end": 2335
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2336,
                            "end": 2338
                          },
                          "typeArguments": null,
                          "start": 2336,
                          "end": 2338
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 2340,
                            "end": 2341
                          },
                          "start": 2340,
                          "end": 2341
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "N2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2343,
                            "end": 2345
                          },
                          "typeArguments": null,
                          "start": 2343,
                          "end": 2345
                        }
                      ],
                      "start": 2335,
                      "end": 2346
                    },
                    "start": 2326,
                    "end": 2346
                  },
                  "optional": false,
                  "readonly": null,
                  "start": 2312,
                  "end": 2348
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "N1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2349,
                    "end": 2351
                  },
                  "typeArguments": null,
                  "start": 2349,
                  "end": 2351
                },
                "start": 2312,
                "end": 2352
              },
              "optional": false,
              "readonly": null,
              "start": 2290,
              "end": 2358
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "N2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2359,
                "end": 2361
              },
              "typeArguments": null,
              "start": 2359,
              "end": 2361
            },
            "start": 2290,
            "end": 2362
          },
          "start": 2248,
          "end": 2362
        },
        "declare": false,
        "start": 2194,
        "end": 2362
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2187,
      "end": 2362
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PowerTailRec",
        "optional": false,
        "typeAnnotation": null,
        "start": 2369,
        "end": 2381
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Num",
              "optional": false,
              "typeAnnotation": null,
              "start": 2387,
              "end": 2390
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 2399,
              "end": 2405
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2387,
            "end": 2405
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "PowerOf",
              "optional": false,
              "typeAnnotation": null,
              "start": 2411,
              "end": 2418
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 2427,
              "end": 2433
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2411,
            "end": 2433
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Result",
              "optional": false,
              "typeAnnotation": null,
              "start": 2439,
              "end": 2445
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 2454,
              "end": 2460
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2439,
            "end": 2460
          }
        ],
        "start": 2381,
        "end": 2463
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSNumberKeyword",
          "start": 2466,
          "end": 2472
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "PowerOf",
            "optional": false,
            "typeAnnotation": null,
            "start": 2481,
            "end": 2488
          },
          "typeArguments": null,
          "start": 2481,
          "end": 2488
        },
        "trueType": {
          "type": "TSNumberKeyword",
          "start": 2495,
          "end": 2501
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "PowerOf",
              "optional": false,
              "typeAnnotation": null,
              "start": 2508,
              "end": 2515
            },
            "typeArguments": null,
            "start": 2508,
            "end": 2515
          },
          "extendsType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2524,
              "end": 2525
            },
            "start": 2524,
            "end": 2525
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Result",
              "optional": false,
              "typeAnnotation": null,
              "start": 2532,
              "end": 2538
            },
            "typeArguments": null,
            "start": 2532,
            "end": 2538
          },
          "falseType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "PowerTailRec",
              "optional": false,
              "typeAnnotation": null,
              "start": 2545,
              "end": 2557
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Num",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2558,
                    "end": 2561
                  },
                  "typeArguments": null,
                  "start": 2558,
                  "end": 2561
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Decrement",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2563,
                    "end": 2572
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "PowerOf",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2573,
                          "end": 2580
                        },
                        "typeArguments": null,
                        "start": 2573,
                        "end": 2580
                      }
                    ],
                    "start": 2572,
                    "end": 2581
                  },
                  "start": 2563,
                  "end": 2581
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Multiply",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2583,
                    "end": 2591
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Result",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2592,
                          "end": 2598
                        },
                        "typeArguments": null,
                        "start": 2592,
                        "end": 2598
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Num",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2600,
                          "end": 2603
                        },
                        "typeArguments": null,
                        "start": 2600,
                        "end": 2603
                      }
                    ],
                    "start": 2591,
                    "end": 2604
                  },
                  "start": 2583,
                  "end": 2604
                }
              ],
              "start": 2557,
              "end": 2605
            },
            "start": 2545,
            "end": 2605
          },
          "start": 2508,
          "end": 2605
        },
        "start": 2466,
        "end": 2605
      },
      "declare": false,
      "start": 2364,
      "end": 2606
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Power",
          "optional": false,
          "typeAnnotation": null,
          "start": 2620,
          "end": 2625
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Num",
                "optional": false,
                "typeAnnotation": null,
                "start": 2626,
                "end": 2629
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 2638,
                "end": 2644
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 2626,
              "end": 2644
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "PowerOf",
                "optional": false,
                "typeAnnotation": null,
                "start": 2646,
                "end": 2653
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 2662,
                "end": 2668
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 2646,
              "end": 2668
            }
          ],
          "start": 2625,
          "end": 2669
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "PowerTailRec",
            "optional": false,
            "typeAnnotation": null,
            "start": 2672,
            "end": 2684
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Num",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2685,
                  "end": 2688
                },
                "typeArguments": null,
                "start": 2685,
                "end": 2688
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PowerOf",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2690,
                  "end": 2697
                },
                "typeArguments": null,
                "start": 2690,
                "end": 2697
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2699,
                  "end": 2700
                },
                "start": 2699,
                "end": 2700
              }
            ],
            "start": 2684,
            "end": 2701
          },
          "start": 2672,
          "end": 2701
        },
        "declare": false,
        "start": 2615,
        "end": 2702
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2608,
      "end": 2702
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 2703
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "_BuildPowersOf2LengthArrays",
    "start": 5,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "Length",
    "start": 38,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 45,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 53,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "AccumulatedArray",
    "start": 65,
    "end": 81
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 82,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 90,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "AccumulatedArray",
    "start": 105,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 121,
    "end": 122
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "Length",
    "start": 125,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 131,
    "end": 132
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 133,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 141,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "AccumulatedArray",
    "start": 153,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "_BuildPowersOf2LengthArrays",
    "start": 176,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "Length",
    "start": 213,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 231,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "AccumulatedArray",
    "start": 234,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 250,
    "end": 251
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 255,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "AccumulatedArray",
    "start": 258,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 274,
    "end": 275
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 280,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "AccumulatedArray",
    "start": 283,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 309,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "_ConcatLargestUntilDone",
    "start": 314,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "Length",
    "start": 343,
    "end": 349
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 350,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "number",
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
    "value": "AccumulatedArray",
    "start": 370,
    "end": 386
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 387,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 395,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "NextArray",
    "start": 410,
    "end": 419
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 420,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 428,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "NextArray",
    "start": 441,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 450,
    "end": 451
  },
  {
    "type": "String",
    "value": "'length'",
    "start": 451,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 459,
    "end": 460
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 461,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "Length",
    "start": 469,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "NextArray",
    "start": 482,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 499,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "AccumulatedArray",
    "start": 502,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 518,
    "end": 519
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 523,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "NextArray",
    "start": 526,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 536,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "Length",
    "start": 537,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 543,
    "end": 544
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 545,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 553,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "_ConcatLargestUntilDone",
    "start": 565,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 588,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "Length",
    "start": 598,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "AccumulatedArray",
    "start": 614,
    "end": 630
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 631,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 639,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "AccumulatedArray",
    "start": 640,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 656,
    "end": 657
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 661,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 664,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "type": "Keyword",
    "value": "extends",
    "start": 685,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 693,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 711,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 723,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 725,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 739,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 741,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "NextArray",
    "start": 756,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 776,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "_ConcatLargestUntilDone",
    "start": 778,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 801,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "Length",
    "start": 811,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 817,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "AccumulatedArray",
    "start": 827,
    "end": 843
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 844,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 852,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "AccumulatedArray",
    "start": 853,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 869,
    "end": 870
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 871,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 872,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 874,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 877,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 894,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 896,
    "end": 897
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 898,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 906,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 911,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 913,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 914,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 924,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 936,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 938,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 952,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 954,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 970,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "AccumulatedArray",
    "start": 973,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 989,
    "end": 990
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 990,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 991,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 992,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 994,
    "end": 997
  },
  {
    "type": "Identifier",
    "value": "NextArray",
    "start": 997,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1015,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "_Replace",
    "start": 1020,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1031,
    "end": 1038
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1039,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1060,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1063,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Keyword",
    "value": "export",
    "start": 1079,
    "end": 1085
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1086,
    "end": 1090
  },
  {
    "type": "Identifier",
    "value": "TupleOf",
    "start": 1091,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 1099,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Identifier",
    "value": "Length",
    "start": 1105,
    "end": 1111
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1112,
    "end": 1119
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1120,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1130,
    "end": 1136
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1137,
    "end": 1144
  },
  {
    "type": "Identifier",
    "value": "Length",
    "start": 1145,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 1158,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "value": "[",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Identifier",
    "value": "LengthKey",
    "start": 1219,
    "end": 1228
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1229,
    "end": 1231
  },
  {
    "type": "Identifier",
    "value": "Length",
    "start": 1232,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Identifier",
    "value": "_BuildPowersOf2LengthArrays",
    "start": 1241,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Identifier",
    "value": "LengthKey",
    "start": 1282,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1307,
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
    "value": "]",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1325,
    "end": 1332
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1333,
    "end": 1338
  },
  {
    "type": "Identifier",
    "value": "TwoDimensionalArray",
    "start": 1339,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Identifier",
    "value": "TwoDimensionalArray",
    "start": 1369,
    "end": 1388
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1389,
    "end": 1396
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1397,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Identifier",
    "value": "_Replace",
    "start": 1417,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Identifier",
    "value": "_ConcatLargestUntilDone",
    "start": 1426,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Identifier",
    "value": "LengthKey",
    "start": 1450,
    "end": 1459
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Identifier",
    "value": "TwoDimensionalArray",
    "start": 1461,
    "end": 1480
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 1487,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1501,
    "end": 1502
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1503,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1519,
    "end": 1524
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Identifier",
    "value": "Length",
    "start": 1531,
    "end": 1537
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1541,
    "end": 1547
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1548,
    "end": 1552
  },
  {
    "type": "Identifier",
    "value": "Subtract",
    "start": 1553,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Identifier",
    "value": "N1",
    "start": 1562,
    "end": 1564
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1565,
    "end": 1572
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1573,
    "end": 1579
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Identifier",
    "value": "N2",
    "start": 1581,
    "end": 1583
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1584,
    "end": 1591
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1592,
    "end": 1598
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1598,
    "end": 1599
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Identifier",
    "value": "TupleOf",
    "start": 1602,
    "end": 1609
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1610,
    "end": 1615
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1615,
    "end": 1616
  },
  {
    "type": "Identifier",
    "value": "N1",
    "start": 1617,
    "end": 1619
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1621,
    "end": 1628
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1635,
    "end": 1638
  },
  {
    "type": "Identifier",
    "value": "TupleOf",
    "start": 1638,
    "end": 1645
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1646,
    "end": 1651
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Identifier",
    "value": "N2",
    "start": 1653,
    "end": 1655
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1656,
    "end": 1657
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1662,
    "end": 1665
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1665,
    "end": 1670
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1671,
    "end": 1672
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1674,
    "end": 1675
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "String",
    "value": "'length'",
    "start": 1684,
    "end": 1692
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1700,
    "end": 1705
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1708,
    "end": 1714
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1715,
    "end": 1719
  },
  {
    "type": "Identifier",
    "value": "Decrement",
    "start": 1720,
    "end": 1729
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1732,
    "end": 1739
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1740,
    "end": 1746
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Identifier",
    "value": "Subtract",
    "start": 1750,
    "end": 1758
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1760,
    "end": 1761
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1762,
    "end": 1763
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1763,
    "end": 1764
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1764,
    "end": 1765
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1767,
    "end": 1773
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1774,
    "end": 1778
  },
  {
    "type": "Identifier",
    "value": "Add",
    "start": 1779,
    "end": 1782
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "Identifier",
    "value": "N1",
    "start": 1783,
    "end": 1785
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1786,
    "end": 1793
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1794,
    "end": 1800
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Identifier",
    "value": "N2",
    "start": 1802,
    "end": 1804
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1805,
    "end": 1812
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1813,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1823,
    "end": 1824
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1829,
    "end": 1832
  },
  {
    "type": "Identifier",
    "value": "TupleOf",
    "start": 1832,
    "end": 1839
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1839,
    "end": 1840
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1840,
    "end": 1845
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Identifier",
    "value": "N1",
    "start": 1847,
    "end": 1849
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1849,
    "end": 1850
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1850,
    "end": 1851
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1856,
    "end": 1859
  },
  {
    "type": "Identifier",
    "value": "TupleOf",
    "start": 1859,
    "end": 1866
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1866,
    "end": 1867
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1867,
    "end": 1872
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Identifier",
    "value": "N2",
    "start": 1874,
    "end": 1876
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1876,
    "end": 1877
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1877,
    "end": 1878
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1879,
    "end": 1880
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1880,
    "end": 1881
  },
  {
    "type": "String",
    "value": "'length'",
    "start": 1881,
    "end": 1889
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1889,
    "end": 1890
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1952,
    "end": 1958
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1958,
    "end": 1959
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1961,
    "end": 1965
  },
  {
    "type": "Identifier",
    "value": "_MultiAdd",
    "start": 1966,
    "end": 1975
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1975,
    "end": 1976
  },
  {
    "type": "Identifier",
    "value": "Num",
    "start": 1981,
    "end": 1984
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1985,
    "end": 1992
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1993,
    "end": 1999
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1999,
    "end": 2000
  },
  {
    "type": "Identifier",
    "value": "Accumulator",
    "start": 2005,
    "end": 2016
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2017,
    "end": 2024
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2025,
    "end": 2031
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2031,
    "end": 2032
  },
  {
    "type": "Identifier",
    "value": "IterationsLeft",
    "start": 2037,
    "end": 2051
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2052,
    "end": 2059
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2060,
    "end": 2066
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2066,
    "end": 2067
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2068,
    "end": 2069
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2070,
    "end": 2071
  },
  {
    "type": "Identifier",
    "value": "IterationsLeft",
    "start": 2072,
    "end": 2086
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2087,
    "end": 2094
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2095,
    "end": 2096
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2101,
    "end": 2102
  },
  {
    "type": "Identifier",
    "value": "Accumulator",
    "start": 2103,
    "end": 2114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2119,
    "end": 2120
  },
  {
    "type": "Identifier",
    "value": "_MultiAdd",
    "start": 2121,
    "end": 2130
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2130,
    "end": 2131
  },
  {
    "type": "Identifier",
    "value": "Num",
    "start": 2131,
    "end": 2134
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2134,
    "end": 2135
  },
  {
    "type": "Identifier",
    "value": "Add",
    "start": 2136,
    "end": 2139
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2139,
    "end": 2140
  },
  {
    "type": "Identifier",
    "value": "Num",
    "start": 2140,
    "end": 2143
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2143,
    "end": 2144
  },
  {
    "type": "Identifier",
    "value": "Accumulator",
    "start": 2145,
    "end": 2156
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2156,
    "end": 2157
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2157,
    "end": 2158
  },
  {
    "type": "Identifier",
    "value": "Decrement",
    "start": 2159,
    "end": 2168
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2168,
    "end": 2169
  },
  {
    "type": "Identifier",
    "value": "IterationsLeft",
    "start": 2169,
    "end": 2183
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2183,
    "end": 2184
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2184,
    "end": 2185
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2187,
    "end": 2193
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2194,
    "end": 2198
  },
  {
    "type": "Identifier",
    "value": "Multiply",
    "start": 2199,
    "end": 2207
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2207,
    "end": 2208
  },
  {
    "type": "Identifier",
    "value": "N1",
    "start": 2208,
    "end": 2210
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2211,
    "end": 2218
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2219,
    "end": 2225
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2225,
    "end": 2226
  },
  {
    "type": "Identifier",
    "value": "N2",
    "start": 2227,
    "end": 2229
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2230,
    "end": 2237
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2238,
    "end": 2244
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2244,
    "end": 2245
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2246,
    "end": 2247
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2248,
    "end": 2254
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2255,
    "end": 2262
  },
  {
    "type": "Identifier",
    "value": "N1",
    "start": 2263,
    "end": 2265
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2266,
    "end": 2267
  },
  {
    "type": "Identifier",
    "value": "N2",
    "start": 2268,
    "end": 2270
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2275,
    "end": 2276
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2277,
    "end": 2283
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2288,
    "end": 2289
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2290,
    "end": 2291
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2300,
    "end": 2301
  },
  {
    "type": "Identifier",
    "value": "K2",
    "start": 2301,
    "end": 2303
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2304,
    "end": 2306
  },
  {
    "type": "Identifier",
    "value": "N2",
    "start": 2307,
    "end": 2309
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2309,
    "end": 2310
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2310,
    "end": 2311
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2312,
    "end": 2313
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2314,
    "end": 2315
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 2315,
    "end": 2317
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2318,
    "end": 2320
  },
  {
    "type": "Identifier",
    "value": "N1",
    "start": 2321,
    "end": 2323
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2323,
    "end": 2324
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2324,
    "end": 2325
  },
  {
    "type": "Identifier",
    "value": "_MultiAdd",
    "start": 2326,
    "end": 2335
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2335,
    "end": 2336
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 2336,
    "end": 2338
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2338,
    "end": 2339
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2340,
    "end": 2341
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2341,
    "end": 2342
  },
  {
    "type": "Identifier",
    "value": "N2",
    "start": 2343,
    "end": 2345
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2345,
    "end": 2346
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2347,
    "end": 2348
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2348,
    "end": 2349
  },
  {
    "type": "Identifier",
    "value": "N1",
    "start": 2349,
    "end": 2351
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2351,
    "end": 2352
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2357,
    "end": 2358
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2358,
    "end": 2359
  },
  {
    "type": "Identifier",
    "value": "N2",
    "start": 2359,
    "end": 2361
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2361,
    "end": 2362
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2364,
    "end": 2368
  },
  {
    "type": "Identifier",
    "value": "PowerTailRec",
    "start": 2369,
    "end": 2381
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2381,
    "end": 2382
  },
  {
    "type": "Identifier",
    "value": "Num",
    "start": 2387,
    "end": 2390
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2391,
    "end": 2398
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2399,
    "end": 2405
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2405,
    "end": 2406
  },
  {
    "type": "Identifier",
    "value": "PowerOf",
    "start": 2411,
    "end": 2418
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2419,
    "end": 2426
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2427,
    "end": 2433
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2433,
    "end": 2434
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 2439,
    "end": 2445
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2446,
    "end": 2453
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2454,
    "end": 2460
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2460,
    "end": 2461
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2462,
    "end": 2463
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2464,
    "end": 2465
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2466,
    "end": 2472
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2473,
    "end": 2480
  },
  {
    "type": "Identifier",
    "value": "PowerOf",
    "start": 2481,
    "end": 2488
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2493,
    "end": 2494
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2495,
    "end": 2501
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2506,
    "end": 2507
  },
  {
    "type": "Identifier",
    "value": "PowerOf",
    "start": 2508,
    "end": 2515
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2516,
    "end": 2523
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2524,
    "end": 2525
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2530,
    "end": 2531
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 2532,
    "end": 2538
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2543,
    "end": 2544
  },
  {
    "type": "Identifier",
    "value": "PowerTailRec",
    "start": 2545,
    "end": 2557
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2557,
    "end": 2558
  },
  {
    "type": "Identifier",
    "value": "Num",
    "start": 2558,
    "end": 2561
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2561,
    "end": 2562
  },
  {
    "type": "Identifier",
    "value": "Decrement",
    "start": 2563,
    "end": 2572
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2572,
    "end": 2573
  },
  {
    "type": "Identifier",
    "value": "PowerOf",
    "start": 2573,
    "end": 2580
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2580,
    "end": 2581
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2581,
    "end": 2582
  },
  {
    "type": "Identifier",
    "value": "Multiply",
    "start": 2583,
    "end": 2591
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2591,
    "end": 2592
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 2592,
    "end": 2598
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2598,
    "end": 2599
  },
  {
    "type": "Identifier",
    "value": "Num",
    "start": 2600,
    "end": 2603
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2603,
    "end": 2604
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2604,
    "end": 2605
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2605,
    "end": 2606
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2608,
    "end": 2614
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2615,
    "end": 2619
  },
  {
    "type": "Identifier",
    "value": "Power",
    "start": 2620,
    "end": 2625
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2625,
    "end": 2626
  },
  {
    "type": "Identifier",
    "value": "Num",
    "start": 2626,
    "end": 2629
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2630,
    "end": 2637
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2638,
    "end": 2644
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2644,
    "end": 2645
  },
  {
    "type": "Identifier",
    "value": "PowerOf",
    "start": 2646,
    "end": 2653
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2654,
    "end": 2661
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2662,
    "end": 2668
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2668,
    "end": 2669
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2670,
    "end": 2671
  },
  {
    "type": "Identifier",
    "value": "PowerTailRec",
    "start": 2672,
    "end": 2684
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2684,
    "end": 2685
  },
  {
    "type": "Identifier",
    "value": "Num",
    "start": 2685,
    "end": 2688
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2688,
    "end": 2689
  },
  {
    "type": "Identifier",
    "value": "PowerOf",
    "start": 2690,
    "end": 2697
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2697,
    "end": 2698
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2699,
    "end": 2700
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2700,
    "end": 2701
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2701,
    "end": 2702
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Power",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 14
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Power",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 14
          },
          "importKind": "value",
          "start": 9,
          "end": 14
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./input",
        "raw": "\"./input\"",
        "start": 22,
        "end": 31
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 32
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
              "name": "power",
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 52
            },
            "init": {
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
                      "name": "Num",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 56,
                      "end": 59
                    },
                    "constraint": {
                      "type": "TSNumberKeyword",
                      "start": 68,
                      "end": 74
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 56,
                    "end": 74
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PowerOf",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 76,
                      "end": 83
                    },
                    "constraint": {
                      "type": "TSNumberKeyword",
                      "start": 92,
                      "end": 98
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 76,
                    "end": 98
                  }
                ],
                "start": 55,
                "end": 99
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "num",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Num",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 110,
                        "end": 113
                      },
                      "typeArguments": null,
                      "start": 110,
                      "end": 113
                    },
                    "start": 108,
                    "end": 113
                  },
                  "start": 105,
                  "end": 113
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "powerOf",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "PowerOf",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 128,
                        "end": 135
                      },
                      "typeArguments": null,
                      "start": 128,
                      "end": 135
                    },
                    "start": 126,
                    "end": 135
                  },
                  "start": 119,
                  "end": 135
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Power",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 139,
                    "end": 144
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Num",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 145,
                          "end": 148
                        },
                        "typeArguments": null,
                        "start": 145,
                        "end": 148
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "PowerOf",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 150,
                          "end": 157
                        },
                        "typeArguments": null,
                        "start": 150,
                        "end": 157
                      }
                    ],
                    "start": 144,
                    "end": 158
                  },
                  "start": 139,
                  "end": 158
                },
                "start": 137,
                "end": 158
              },
              "body": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "num",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 163,
                    "end": 166
                  },
                  "operator": "**",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "powerOf",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 170,
                    "end": 177
                  },
                  "start": 163,
                  "end": 177
                },
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "start": 182,
                  "end": 187
                },
                "start": 162,
                "end": 187
              },
              "id": null,
              "generator": false,
              "start": 55,
              "end": 187
            },
            "definite": false,
            "start": 47,
            "end": 187
          }
        ],
        "declare": false,
        "start": 41,
        "end": 188
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 34,
      "end": 188
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 188
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "Power",
    "start": 9,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 17,
    "end": 21
  },
  {
    "type": "String",
    "value": "\"./input\"",
    "start": 22,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 34,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 41,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "power",
    "start": 47,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "Num",
    "start": 56,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 60,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 68,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "PowerOf",
    "start": 76,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 84,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 92,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 105,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "Num",
    "start": 110,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "powerOf",
    "start": 119,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "PowerOf",
    "start": 128,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "Power",
    "start": 139,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "Num",
    "start": 145,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "PowerOf",
    "start": 150,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 159,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 163,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 167,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "powerOf",
    "start": 170,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 179,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 182,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 187,
    "end": 188
  }
]
```
