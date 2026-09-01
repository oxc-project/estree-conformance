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
        "name": "Map",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 70
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
              "start": 71,
              "end": 72
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 71,
            "end": 72
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 74,
              "end": 75
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 74,
            "end": 75
          }
        ],
        "start": 70,
        "end": 76
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 77,
        "end": 91
      },
      "declare": false,
      "start": 57,
      "end": 91
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ImmutableTypes",
          "optional": false,
          "typeAnnotation": null,
          "start": 105,
          "end": 119
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IImmutableMap",
            "optional": false,
            "typeAnnotation": null,
            "start": 122,
            "end": 135
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 136,
                "end": 139
              }
            ],
            "start": 135,
            "end": 140
          },
          "start": 122,
          "end": 140
        },
        "declare": false,
        "start": 100,
        "end": 141
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 93,
      "end": 141
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ImmutableModel",
          "optional": false,
          "typeAnnotation": null,
          "start": 155,
          "end": 169
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
                "start": 170,
                "end": 171
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 170,
              "end": 171
            }
          ],
          "start": 169,
          "end": 172
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 178,
            "end": 179
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
                "start": 189,
                "end": 190
              },
              "typeArguments": null,
              "start": 189,
              "end": 190
            },
            "start": 183,
            "end": 190
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 193,
                  "end": 194
                },
                "typeArguments": null,
                "start": 193,
                "end": 194
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 195,
                  "end": 196
                },
                "typeArguments": null,
                "start": 195,
                "end": 196
              },
              "start": 193,
              "end": 197
            },
            "extendsType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ImmutableTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 206,
                "end": 220
              },
              "typeArguments": null,
              "start": 206,
              "end": 220
            },
            "trueType": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 223,
                  "end": 224
                },
                "typeArguments": null,
                "start": 223,
                "end": 224
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 225,
                  "end": 226
                },
                "typeArguments": null,
                "start": 225,
                "end": 226
              },
              "start": 223,
              "end": 227
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 230,
              "end": 235
            },
            "start": 193,
            "end": 235
          },
          "optional": false,
          "readonly": null,
          "start": 175,
          "end": 237
        },
        "declare": false,
        "start": 150,
        "end": 238
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 143,
      "end": 238
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IImmutableMap",
          "optional": false,
          "typeAnnotation": null,
          "start": 257,
          "end": 270
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
                "start": 271,
                "end": 272
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ImmutableModel",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 281,
                  "end": 295
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
                        "start": 296,
                        "end": 297
                      },
                      "typeArguments": null,
                      "start": 296,
                      "end": 297
                    }
                  ],
                  "start": 295,
                  "end": 298
                },
                "start": 281,
                "end": 298
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 271,
              "end": 298
            }
          ],
          "start": 270,
          "end": 299
        },
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Map",
              "optional": false,
              "typeAnnotation": null,
              "start": 308,
              "end": 311
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 312,
                  "end": 318
                },
                {
                  "type": "TSAnyKeyword",
                  "start": 320,
                  "end": 323
                }
              ],
              "start": 311,
              "end": 324
            },
            "start": 308,
            "end": 324
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "set",
                "optional": false,
                "typeAnnotation": null,
                "start": 331,
                "end": 334
              },
              "computed": false,
              "optional": false,
              "kind": "method",
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
                      "start": 335,
                      "end": 336
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
                          "start": 351,
                          "end": 352
                        },
                        "typeArguments": null,
                        "start": 351,
                        "end": 352
                      },
                      "start": 345,
                      "end": 352
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 335,
                    "end": 352
                  }
                ],
                "start": 334,
                "end": 353
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
                        "start": 359,
                        "end": 360
                      },
                      "typeArguments": null,
                      "start": 359,
                      "end": 360
                    },
                    "start": 357,
                    "end": 360
                  },
                  "start": 354,
                  "end": 360
                },
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
                          "start": 369,
                          "end": 370
                        },
                        "typeArguments": null,
                        "start": 369,
                        "end": 370
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 371,
                          "end": 372
                        },
                        "typeArguments": null,
                        "start": 371,
                        "end": 372
                      },
                      "start": 369,
                      "end": 373
                    },
                    "start": 367,
                    "end": 373
                  },
                  "start": 362,
                  "end": 373
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IImmutableMap",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 376,
                    "end": 389
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
                          "start": 390,
                          "end": 391
                        },
                        "typeArguments": null,
                        "start": 390,
                        "end": 391
                      }
                    ],
                    "start": 389,
                    "end": 392
                  },
                  "start": 376,
                  "end": 392
                },
                "start": 374,
                "end": 392
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 331,
              "end": 393
            }
          ],
          "start": 325,
          "end": 395
        },
        "declare": false,
        "start": 247,
        "end": 395
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 240,
      "end": 395
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ImmutableTypes2",
          "optional": false,
          "typeAnnotation": null,
          "start": 409,
          "end": 424
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IImmutableMap2",
            "optional": false,
            "typeAnnotation": null,
            "start": 427,
            "end": 441
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 442,
                "end": 445
              }
            ],
            "start": 441,
            "end": 446
          },
          "start": 427,
          "end": 446
        },
        "declare": false,
        "start": 404,
        "end": 447
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 397,
      "end": 447
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isImmutableType",
        "optional": false,
        "typeAnnotation": null,
        "start": 453,
        "end": 468
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
              "start": 469,
              "end": 470
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 469,
            "end": 470
          }
        ],
        "start": 468,
        "end": 471
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 475,
                "end": 476
              },
              "typeArguments": null,
              "start": 475,
              "end": 476
            }
          ],
          "start": 474,
          "end": 477
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ImmutableTypes2",
                "optional": false,
                "typeAnnotation": null,
                "start": 487,
                "end": 502
              },
              "typeArguments": null,
              "start": 487,
              "end": 502
            }
          ],
          "start": 486,
          "end": 503
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 506,
            "end": 507
          },
          "typeArguments": null,
          "start": 506,
          "end": 507
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 510,
          "end": 515
        },
        "start": 474,
        "end": 515
      },
      "declare": false,
      "start": 448,
      "end": 516
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ImmutableModel2",
          "optional": false,
          "typeAnnotation": null,
          "start": 529,
          "end": 544
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
                "start": 545,
                "end": 546
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 545,
              "end": 546
            }
          ],
          "start": 544,
          "end": 547
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 553,
            "end": 554
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
                "start": 564,
                "end": 565
              },
              "typeArguments": null,
              "start": 564,
              "end": 565
            },
            "start": 558,
            "end": 565
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "isImmutableType",
              "optional": false,
              "typeAnnotation": null,
              "start": 568,
              "end": 583
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
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
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
                  "end": 588
                }
              ],
              "start": 583,
              "end": 589
            },
            "start": 568,
            "end": 589
          },
          "optional": false,
          "readonly": null,
          "start": 550,
          "end": 591
        },
        "declare": false,
        "start": 524,
        "end": 592
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 517,
      "end": 592
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IImmutableMap2",
          "optional": false,
          "typeAnnotation": null,
          "start": 610,
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ImmutableModel2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 635,
                  "end": 650
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
                        "start": 651,
                        "end": 652
                      },
                      "typeArguments": null,
                      "start": 651,
                      "end": 652
                    }
                  ],
                  "start": 650,
                  "end": 653
                },
                "start": 635,
                "end": 653
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 625,
              "end": 653
            }
          ],
          "start": 624,
          "end": 654
        },
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Map",
              "optional": false,
              "typeAnnotation": null,
              "start": 663,
              "end": 666
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 667,
                  "end": 673
                },
                {
                  "type": "TSAnyKeyword",
                  "start": 675,
                  "end": 678
                }
              ],
              "start": 666,
              "end": 679
            },
            "start": 663,
            "end": 679
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "set",
                "optional": false,
                "typeAnnotation": null,
                "start": 686,
                "end": 689
              },
              "computed": false,
              "optional": false,
              "kind": "method",
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
                      "start": 690,
                      "end": 691
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
                          "start": 706,
                          "end": 707
                        },
                        "typeArguments": null,
                        "start": 706,
                        "end": 707
                      },
                      "start": 700,
                      "end": 707
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 690,
                    "end": 707
                  }
                ],
                "start": 689,
                "end": 708
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
                        "start": 714,
                        "end": 715
                      },
                      "typeArguments": null,
                      "start": 714,
                      "end": 715
                    },
                    "start": 712,
                    "end": 715
                  },
                  "start": 709,
                  "end": 715
                },
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
                          "start": 724,
                          "end": 725
                        },
                        "typeArguments": null,
                        "start": 724,
                        "end": 725
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 726,
                          "end": 727
                        },
                        "typeArguments": null,
                        "start": 726,
                        "end": 727
                      },
                      "start": 724,
                      "end": 728
                    },
                    "start": 722,
                    "end": 728
                  },
                  "start": 717,
                  "end": 728
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IImmutableMap2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 731,
                    "end": 745
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
                          "start": 746,
                          "end": 747
                        },
                        "typeArguments": null,
                        "start": 746,
                        "end": 747
                      }
                    ],
                    "start": 745,
                    "end": 748
                  },
                  "start": 731,
                  "end": 748
                },
                "start": 729,
                "end": 748
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 686,
              "end": 749
            }
          ],
          "start": 680,
          "end": 751
        },
        "declare": false,
        "start": 600,
        "end": 751
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 593,
      "end": 751
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 57,
  "end": 751
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 57,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "Map",
    "start": 67,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 90,
    "end": 91
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 93,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 100,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "ImmutableTypes",
    "start": 105,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "IImmutableMap",
    "start": 122,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 136,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 143,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 150,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "ImmutableModel",
    "start": 155,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 178,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 180,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 183,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 196,
    "end": 197
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 198,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "ImmutableTypes",
    "start": 206,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 230,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 237,
    "end": 238
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 240,
    "end": 246
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 247,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "IImmutableMap",
    "start": 257,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 271,
    "end": 272
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 273,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "ImmutableModel",
    "start": 281,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 298,
    "end": 299
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 300,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "Map",
    "start": 308,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 312,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 320,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 331,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 335,
    "end": 336
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 337,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 345,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 354,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 362,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": ":",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "IImmutableMap",
    "start": 376,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "value": "export",
    "start": 397,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 404,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "ImmutableTypes2",
    "start": 409,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "IImmutableMap2",
    "start": 427,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 442,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 448,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "isImmutableType",
    "start": 453,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 476,
    "end": 477
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 478,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "ImmutableTypes2",
    "start": 487,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 510,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 515,
    "end": 516
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 517,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 524,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "ImmutableModel2",
    "start": 529,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 544,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 552,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 553,
    "end": 554
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 555,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 558,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "isImmutableType",
    "start": 568,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 585,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 591,
    "end": 592
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 593,
    "end": 599
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 600,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "IImmutableMap2",
    "start": 610,
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
    "value": "ImmutableModel2",
    "start": 635,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 653,
    "end": 654
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 655,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "Map",
    "start": 663,
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
    "value": "string",
    "start": 667,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ",",
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
    "value": "{",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 686,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 689,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 690,
    "end": 691
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 692,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 700,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 708,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 709,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 712,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 715,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 717,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 722,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 725,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "K",
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
    "value": ")",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 729,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "IImmutableMap2",
    "start": 731,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 745,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 750,
    "end": 751
  }
]
```
