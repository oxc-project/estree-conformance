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
        "name": "Box",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 8
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
              "start": 9,
              "end": 10
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 9,
            "end": 10
          }
        ],
        "start": 8,
        "end": 11
      },
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 21
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
                  "start": 23,
                  "end": 24
                },
                "typeArguments": null,
                "start": 23,
                "end": 24
              },
              "start": 21,
              "end": 24
            },
            "accessibility": null,
            "static": false,
            "start": 16,
            "end": 24
          }
        ],
        "start": 14,
        "end": 26
      },
      "declare": false,
      "start": 0,
      "end": 27
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Boxified",
        "optional": false,
        "typeAnnotation": null,
        "start": 33,
        "end": 41
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
              "start": 42,
              "end": 43
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 42,
            "end": 43
          }
        ],
        "start": 41,
        "end": 44
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 50,
          "end": 51
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
              "start": 61,
              "end": 62
            },
            "typeArguments": null,
            "start": 61,
            "end": 62
          },
          "start": 55,
          "end": 62
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Box",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 68
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
                    "start": 69,
                    "end": 70
                  },
                  "typeArguments": null,
                  "start": 69,
                  "end": 70
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 71,
                    "end": 72
                  },
                  "typeArguments": null,
                  "start": 71,
                  "end": 72
                },
                "start": 69,
                "end": 73
              }
            ],
            "start": 68,
            "end": 74
          },
          "start": 65,
          "end": 74
        },
        "optional": false,
        "readonly": null,
        "start": 47,
        "end": 76
      },
      "declare": false,
      "start": 28,
      "end": 77
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T00",
        "optional": false,
        "typeAnnotation": null,
        "start": 84,
        "end": 87
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Boxified",
          "optional": false,
          "typeAnnotation": null,
          "start": 90,
          "end": 98
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 100,
                  "end": 106
                },
                {
                  "type": "TSOptionalType",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 108,
                    "end": 114
                  },
                  "start": 108,
                  "end": 115
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSBooleanKeyword",
                      "start": 120,
                      "end": 127
                    },
                    "start": 120,
                    "end": 129
                  },
                  "start": 117,
                  "end": 129
                }
              ],
              "start": 99,
              "end": 130
            }
          ],
          "start": 98,
          "end": 131
        },
        "start": 90,
        "end": 131
      },
      "declare": false,
      "start": 79,
      "end": 132
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T01",
        "optional": false,
        "typeAnnotation": null,
        "start": 138,
        "end": 141
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Partial",
          "optional": false,
          "typeAnnotation": null,
          "start": 144,
          "end": 151
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 153,
                  "end": 159
                },
                {
                  "type": "TSOptionalType",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 161,
                    "end": 167
                  },
                  "start": 161,
                  "end": 168
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSBooleanKeyword",
                      "start": 173,
                      "end": 180
                    },
                    "start": 173,
                    "end": 182
                  },
                  "start": 170,
                  "end": 182
                }
              ],
              "start": 152,
              "end": 183
            }
          ],
          "start": 151,
          "end": 184
        },
        "start": 144,
        "end": 184
      },
      "declare": false,
      "start": 133,
      "end": 185
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T02",
        "optional": false,
        "typeAnnotation": null,
        "start": 191,
        "end": 194
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Required",
          "optional": false,
          "typeAnnotation": null,
          "start": 197,
          "end": 205
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 207,
                  "end": 213
                },
                {
                  "type": "TSOptionalType",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 215,
                    "end": 221
                  },
                  "start": 215,
                  "end": 222
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSBooleanKeyword",
                      "start": 227,
                      "end": 234
                    },
                    "start": 227,
                    "end": 236
                  },
                  "start": 224,
                  "end": 236
                }
              ],
              "start": 206,
              "end": 237
            }
          ],
          "start": 205,
          "end": 238
        },
        "start": 197,
        "end": 238
      },
      "declare": false,
      "start": 186,
      "end": 239
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T10",
        "optional": false,
        "typeAnnotation": null,
        "start": 246,
        "end": 249
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Boxified",
          "optional": false,
          "typeAnnotation": null,
          "start": 252,
          "end": 260
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 261,
                "end": 267
              },
              "start": 261,
              "end": 269
            }
          ],
          "start": 260,
          "end": 270
        },
        "start": 252,
        "end": 270
      },
      "declare": false,
      "start": 241,
      "end": 271
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T11",
        "optional": false,
        "typeAnnotation": null,
        "start": 277,
        "end": 280
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Partial",
          "optional": false,
          "typeAnnotation": null,
          "start": 283,
          "end": 290
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 291,
                "end": 297
              },
              "start": 291,
              "end": 299
            }
          ],
          "start": 290,
          "end": 300
        },
        "start": 283,
        "end": 300
      },
      "declare": false,
      "start": 272,
      "end": 301
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T12",
        "optional": false,
        "typeAnnotation": null,
        "start": 307,
        "end": 310
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Required",
          "optional": false,
          "typeAnnotation": null,
          "start": 313,
          "end": 321
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 322,
                "end": 328
              },
              "start": 322,
              "end": 330
            }
          ],
          "start": 321,
          "end": 331
        },
        "start": 313,
        "end": 331
      },
      "declare": false,
      "start": 302,
      "end": 332
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T13",
        "optional": false,
        "typeAnnotation": null,
        "start": 338,
        "end": 341
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Boxified",
          "optional": false,
          "typeAnnotation": null,
          "start": 344,
          "end": 352
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReadonlyArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 353,
                "end": 366
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 367,
                    "end": 373
                  }
                ],
                "start": 366,
                "end": 374
              },
              "start": 353,
              "end": 374
            }
          ],
          "start": 352,
          "end": 375
        },
        "start": 344,
        "end": 375
      },
      "declare": false,
      "start": 333,
      "end": 376
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T14",
        "optional": false,
        "typeAnnotation": null,
        "start": 382,
        "end": 385
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Partial",
          "optional": false,
          "typeAnnotation": null,
          "start": 388,
          "end": 395
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReadonlyArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 396,
                "end": 409
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 410,
                    "end": 416
                  }
                ],
                "start": 409,
                "end": 417
              },
              "start": 396,
              "end": 417
            }
          ],
          "start": 395,
          "end": 418
        },
        "start": 388,
        "end": 418
      },
      "declare": false,
      "start": 377,
      "end": 419
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T15",
        "optional": false,
        "typeAnnotation": null,
        "start": 425,
        "end": 428
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Required",
          "optional": false,
          "typeAnnotation": null,
          "start": 431,
          "end": 439
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReadonlyArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 440,
                "end": 453
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 454,
                    "end": 460
                  }
                ],
                "start": 453,
                "end": 461
              },
              "start": 440,
              "end": 461
            }
          ],
          "start": 439,
          "end": 462
        },
        "start": 431,
        "end": 462
      },
      "declare": false,
      "start": 420,
      "end": 463
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T20",
        "optional": false,
        "typeAnnotation": null,
        "start": 470,
        "end": 473
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Boxified",
          "optional": false,
          "typeAnnotation": null,
          "start": 476,
          "end": 484
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 486,
                    "end": 492
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 495,
                    "end": 504
                  }
                ],
                "start": 486,
                "end": 504
              },
              "start": 485,
              "end": 507
            }
          ],
          "start": 484,
          "end": 508
        },
        "start": 476,
        "end": 508
      },
      "declare": false,
      "start": 465,
      "end": 509
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T21",
        "optional": false,
        "typeAnnotation": null,
        "start": 515,
        "end": 518
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Partial",
          "optional": false,
          "typeAnnotation": null,
          "start": 521,
          "end": 528
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 530,
                    "end": 536
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 539,
                    "end": 548
                  }
                ],
                "start": 530,
                "end": 548
              },
              "start": 529,
              "end": 551
            }
          ],
          "start": 528,
          "end": 552
        },
        "start": 521,
        "end": 552
      },
      "declare": false,
      "start": 510,
      "end": 553
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T22",
        "optional": false,
        "typeAnnotation": null,
        "start": 559,
        "end": 562
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Required",
          "optional": false,
          "typeAnnotation": null,
          "start": 565,
          "end": 573
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 575,
                    "end": 581
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 584,
                    "end": 593
                  }
                ],
                "start": 575,
                "end": 593
              },
              "start": 574,
              "end": 596
            }
          ],
          "start": 573,
          "end": 597
        },
        "start": 565,
        "end": 597
      },
      "declare": false,
      "start": 554,
      "end": 598
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T23",
        "optional": false,
        "typeAnnotation": null,
        "start": 604,
        "end": 607
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Boxified",
          "optional": false,
          "typeAnnotation": null,
          "start": 610,
          "end": 618
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReadonlyArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 619,
                "end": 632
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 633,
                        "end": 639
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 642,
                        "end": 651
                      }
                    ],
                    "start": 633,
                    "end": 651
                  }
                ],
                "start": 632,
                "end": 652
              },
              "start": 619,
              "end": 652
            }
          ],
          "start": 618,
          "end": 653
        },
        "start": 610,
        "end": 653
      },
      "declare": false,
      "start": 599,
      "end": 654
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T24",
        "optional": false,
        "typeAnnotation": null,
        "start": 660,
        "end": 663
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Partial",
          "optional": false,
          "typeAnnotation": null,
          "start": 666,
          "end": 673
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReadonlyArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 674,
                "end": 687
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 688,
                        "end": 694
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 697,
                        "end": 706
                      }
                    ],
                    "start": 688,
                    "end": 706
                  }
                ],
                "start": 687,
                "end": 707
              },
              "start": 674,
              "end": 707
            }
          ],
          "start": 673,
          "end": 708
        },
        "start": 666,
        "end": 708
      },
      "declare": false,
      "start": 655,
      "end": 709
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T25",
        "optional": false,
        "typeAnnotation": null,
        "start": 715,
        "end": 718
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Required",
          "optional": false,
          "typeAnnotation": null,
          "start": 721,
          "end": 729
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReadonlyArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 730,
                "end": 743
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 744,
                        "end": 750
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 753,
                        "end": 762
                      }
                    ],
                    "start": 744,
                    "end": 762
                  }
                ],
                "start": 743,
                "end": 763
              },
              "start": 730,
              "end": 763
            }
          ],
          "start": 729,
          "end": 764
        },
        "start": 721,
        "end": 764
      },
      "declare": false,
      "start": 710,
      "end": 765
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T30",
        "optional": false,
        "typeAnnotation": null,
        "start": 772,
        "end": 775
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Boxified",
          "optional": false,
          "typeAnnotation": null,
          "start": 778,
          "end": 786
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 787,
                "end": 794
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 795,
                      "end": 801
                    },
                    "start": 795,
                    "end": 803
                  }
                ],
                "start": 794,
                "end": 804
              },
              "start": 787,
              "end": 804
            }
          ],
          "start": 786,
          "end": 805
        },
        "start": 778,
        "end": 805
      },
      "declare": false,
      "start": 767,
      "end": 806
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T31",
        "optional": false,
        "typeAnnotation": null,
        "start": 812,
        "end": 815
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Partial",
          "optional": false,
          "typeAnnotation": null,
          "start": 818,
          "end": 825
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Boxified",
                "optional": false,
                "typeAnnotation": null,
                "start": 826,
                "end": 834
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 835,
                      "end": 841
                    },
                    "start": 835,
                    "end": 843
                  }
                ],
                "start": 834,
                "end": 844
              },
              "start": 826,
              "end": 844
            }
          ],
          "start": 825,
          "end": 845
        },
        "start": 818,
        "end": 845
      },
      "declare": false,
      "start": 807,
      "end": 846
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 853,
        "end": 854
      },
      "typeParameters": null,
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 859,
              "end": 860
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 862,
                "end": 868
              },
              "start": 860,
              "end": 868
            },
            "accessibility": null,
            "static": false,
            "start": 859,
            "end": 868
          }
        ],
        "start": 857,
        "end": 870
      },
      "declare": false,
      "start": 848,
      "end": 871
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 877,
        "end": 878
      },
      "typeParameters": null,
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 883,
              "end": 884
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 886,
                "end": 892
              },
              "start": 884,
              "end": 892
            },
            "accessibility": null,
            "static": false,
            "start": 883,
            "end": 892
          }
        ],
        "start": 881,
        "end": 894
      },
      "declare": false,
      "start": 872,
      "end": 895
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T40",
        "optional": false,
        "typeAnnotation": null,
        "start": 902,
        "end": 905
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Boxified",
          "optional": false,
          "typeAnnotation": null,
          "start": 908,
          "end": 916
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 917,
                    "end": 918
                  },
                  "typeArguments": null,
                  "start": 917,
                  "end": 918
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 921,
                      "end": 922
                    },
                    "typeArguments": null,
                    "start": 921,
                    "end": 922
                  },
                  "start": 921,
                  "end": 924
                },
                {
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
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 941,
                          "end": 942
                        },
                        "typeArguments": null,
                        "start": 941,
                        "end": 942
                      }
                    ],
                    "start": 940,
                    "end": 943
                  },
                  "start": 927,
                  "end": 943
                },
                {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 947,
                        "end": 948
                      },
                      "typeArguments": null,
                      "start": 947,
                      "end": 948
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 950,
                        "end": 951
                      },
                      "typeArguments": null,
                      "start": 950,
                      "end": 951
                    }
                  ],
                  "start": 946,
                  "end": 952
                },
                {
                  "type": "TSStringKeyword",
                  "start": 955,
                  "end": 961
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 964,
                    "end": 970
                  },
                  "start": 964,
                  "end": 972
                }
              ],
              "start": 917,
              "end": 972
            }
          ],
          "start": 916,
          "end": 973
        },
        "start": 908,
        "end": 973
      },
      "declare": false,
      "start": 897,
      "end": 974
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReadWrite",
        "optional": false,
        "typeAnnotation": null,
        "start": 981,
        "end": 990
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
              "start": 991,
              "end": 992
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 991,
            "end": 992
          }
        ],
        "start": 990,
        "end": 993
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 1009,
          "end": 1010
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
              "start": 1020,
              "end": 1021
            },
            "typeArguments": null,
            "start": 1020,
            "end": 1021
          },
          "start": 1014,
          "end": 1021
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
              "start": 1025,
              "end": 1026
            },
            "typeArguments": null,
            "start": 1025,
            "end": 1026
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 1027,
              "end": 1028
            },
            "typeArguments": null,
            "start": 1027,
            "end": 1028
          },
          "start": 1025,
          "end": 1029
        },
        "optional": false,
        "readonly": "-",
        "start": 996,
        "end": 1031
      },
      "declare": false,
      "start": 976,
      "end": 1032
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T50",
        "optional": false,
        "typeAnnotation": null,
        "start": 1039,
        "end": 1042
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Readonly",
          "optional": false,
          "typeAnnotation": null,
          "start": 1045,
          "end": 1053
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 1054,
                "end": 1060
              },
              "start": 1054,
              "end": 1062
            }
          ],
          "start": 1053,
          "end": 1063
        },
        "start": 1045,
        "end": 1063
      },
      "declare": false,
      "start": 1034,
      "end": 1064
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T51",
        "optional": false,
        "typeAnnotation": null,
        "start": 1070,
        "end": 1073
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Readonly",
          "optional": false,
          "typeAnnotation": null,
          "start": 1076,
          "end": 1084
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1086,
                  "end": 1092
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 1094,
                  "end": 1100
                }
              ],
              "start": 1085,
              "end": 1101
            }
          ],
          "start": 1084,
          "end": 1102
        },
        "start": 1076,
        "end": 1102
      },
      "declare": false,
      "start": 1065,
      "end": 1103
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T52",
        "optional": false,
        "typeAnnotation": null,
        "start": 1109,
        "end": 1112
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Partial",
          "optional": false,
          "typeAnnotation": null,
          "start": 1115,
          "end": 1122
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null,
                "start": 1123,
                "end": 1131
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1132,
                      "end": 1138
                    },
                    "start": 1132,
                    "end": 1140
                  }
                ],
                "start": 1131,
                "end": 1141
              },
              "start": 1123,
              "end": 1141
            }
          ],
          "start": 1122,
          "end": 1142
        },
        "start": 1115,
        "end": 1142
      },
      "declare": false,
      "start": 1104,
      "end": 1143
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T53",
        "optional": false,
        "typeAnnotation": null,
        "start": 1149,
        "end": 1152
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Readonly",
          "optional": false,
          "typeAnnotation": null,
          "start": 1155,
          "end": 1163
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 1164,
                "end": 1171
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1172,
                      "end": 1178
                    },
                    "start": 1172,
                    "end": 1180
                  }
                ],
                "start": 1171,
                "end": 1181
              },
              "start": 1164,
              "end": 1181
            }
          ],
          "start": 1163,
          "end": 1182
        },
        "start": 1155,
        "end": 1182
      },
      "declare": false,
      "start": 1144,
      "end": 1183
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T54",
        "optional": false,
        "typeAnnotation": null,
        "start": 1189,
        "end": 1192
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReadWrite",
          "optional": false,
          "typeAnnotation": null,
          "start": 1195,
          "end": 1204
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Required",
                "optional": false,
                "typeAnnotation": null,
                "start": 1205,
                "end": 1213
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T53",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1214,
                      "end": 1217
                    },
                    "typeArguments": null,
                    "start": 1214,
                    "end": 1217
                  }
                ],
                "start": 1213,
                "end": 1218
              },
              "start": 1205,
              "end": 1218
            }
          ],
          "start": 1204,
          "end": 1219
        },
        "start": 1195,
        "end": 1219
      },
      "declare": false,
      "start": 1184,
      "end": 1220
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "unboxify",
        "optional": false,
        "typeAnnotation": null,
        "start": 1239,
        "end": 1247
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
              "start": 1248,
              "end": 1249
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1248,
            "end": 1249
          }
        ],
        "start": 1247,
        "end": 1250
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
                "name": "Boxified",
                "optional": false,
                "typeAnnotation": null,
                "start": 1254,
                "end": 1262
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
                      "start": 1263,
                      "end": 1264
                    },
                    "typeArguments": null,
                    "start": 1263,
                    "end": 1264
                  }
                ],
                "start": 1262,
                "end": 1265
              },
              "start": 1254,
              "end": 1265
            },
            "start": 1252,
            "end": 1265
          },
          "start": 1251,
          "end": 1265
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
            "start": 1268,
            "end": 1269
          },
          "typeArguments": null,
          "start": 1268,
          "end": 1269
        },
        "start": 1266,
        "end": 1269
      },
      "body": null,
      "expression": false,
      "start": 1222,
      "end": 1270
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
            "name": "x10",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Box",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1290,
                      "end": 1293
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1294,
                          "end": 1300
                        }
                      ],
                      "start": 1293,
                      "end": 1301
                    },
                    "start": 1290,
                    "end": 1301
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Box",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1303,
                      "end": 1306
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1307,
                          "end": 1313
                        }
                      ],
                      "start": 1306,
                      "end": 1314
                    },
                    "start": 1303,
                    "end": 1314
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Box",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1319,
                          "end": 1322
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSBooleanKeyword",
                              "start": 1323,
                              "end": 1330
                            }
                          ],
                          "start": 1322,
                          "end": 1331
                        },
                        "start": 1319,
                        "end": 1331
                      },
                      "start": 1319,
                      "end": 1333
                    },
                    "start": 1316,
                    "end": 1333
                  }
                ],
                "start": 1289,
                "end": 1334
              },
              "start": 1287,
              "end": 1334
            },
            "start": 1284,
            "end": 1334
          },
          "init": null,
          "definite": false,
          "start": 1284,
          "end": 1334
        }
      ],
      "declare": true,
      "start": 1272,
      "end": 1335
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
            "name": "y10",
            "optional": false,
            "typeAnnotation": null,
            "start": 1340,
            "end": 1343
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "unboxify",
              "optional": false,
              "typeAnnotation": null,
              "start": 1346,
              "end": 1354
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x10",
                "optional": false,
                "typeAnnotation": null,
                "start": 1355,
                "end": 1358
              }
            ],
            "optional": false,
            "start": 1346,
            "end": 1359
          },
          "definite": false,
          "start": 1340,
          "end": 1359
        }
      ],
      "declare": false,
      "start": 1336,
      "end": 1360
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
            "name": "x11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Box",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1379,
                    "end": 1382
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 1383,
                        "end": 1389
                      }
                    ],
                    "start": 1382,
                    "end": 1390
                  },
                  "start": 1379,
                  "end": 1390
                },
                "start": 1379,
                "end": 1392
              },
              "start": 1377,
              "end": 1392
            },
            "start": 1374,
            "end": 1392
          },
          "init": null,
          "definite": false,
          "start": 1374,
          "end": 1392
        }
      ],
      "declare": true,
      "start": 1362,
      "end": 1393
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
            "name": "y11",
            "optional": false,
            "typeAnnotation": null,
            "start": 1398,
            "end": 1401
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "unboxify",
              "optional": false,
              "typeAnnotation": null,
              "start": 1404,
              "end": 1412
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x11",
                "optional": false,
                "typeAnnotation": null,
                "start": 1413,
                "end": 1416
              }
            ],
            "optional": false,
            "start": 1404,
            "end": 1417
          },
          "definite": false,
          "start": 1398,
          "end": 1417
        }
      ],
      "declare": false,
      "start": 1394,
      "end": 1418
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
            "name": "x12",
            "optional": false,
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1439,
                      "end": 1440
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Box",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1442,
                          "end": 1445
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 1446,
                              "end": 1452
                            }
                          ],
                          "start": 1445,
                          "end": 1453
                        },
                        "start": 1442,
                        "end": 1453
                      },
                      "start": 1440,
                      "end": 1453
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1439,
                    "end": 1454
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1455,
                      "end": 1456
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Box",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1458,
                          "end": 1461
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSStringKeyword",
                                "start": 1462,
                                "end": 1468
                              },
                              "start": 1462,
                              "end": 1470
                            }
                          ],
                          "start": 1461,
                          "end": 1471
                        },
                        "start": 1458,
                        "end": 1471
                      },
                      "start": 1456,
                      "end": 1471
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1455,
                    "end": 1471
                  }
                ],
                "start": 1437,
                "end": 1473
              },
              "start": 1435,
              "end": 1473
            },
            "start": 1432,
            "end": 1473
          },
          "init": null,
          "definite": false,
          "start": 1432,
          "end": 1473
        }
      ],
      "declare": true,
      "start": 1420,
      "end": 1474
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
            "name": "y12",
            "optional": false,
            "typeAnnotation": null,
            "start": 1479,
            "end": 1482
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "unboxify",
              "optional": false,
              "typeAnnotation": null,
              "start": 1485,
              "end": 1493
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x12",
                "optional": false,
                "typeAnnotation": null,
                "start": 1494,
                "end": 1497
              }
            ],
            "optional": false,
            "start": 1485,
            "end": 1498
          },
          "definite": false,
          "start": 1479,
          "end": 1498
        }
      ],
      "declare": false,
      "start": 1475,
      "end": 1499
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "nonpartial",
        "optional": false,
        "typeAnnotation": null,
        "start": 1518,
        "end": 1528
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
              "start": 1529,
              "end": 1530
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1529,
            "end": 1530
          }
        ],
        "start": 1528,
        "end": 1531
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
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 1535,
                "end": 1542
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
                      "start": 1543,
                      "end": 1544
                    },
                    "typeArguments": null,
                    "start": 1543,
                    "end": 1544
                  }
                ],
                "start": 1542,
                "end": 1545
              },
              "start": 1535,
              "end": 1545
            },
            "start": 1533,
            "end": 1545
          },
          "start": 1532,
          "end": 1545
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
            "start": 1548,
            "end": 1549
          },
          "typeArguments": null,
          "start": 1548,
          "end": 1549
        },
        "start": 1546,
        "end": 1549
      },
      "body": null,
      "expression": false,
      "start": 1501,
      "end": 1550
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
            "name": "x20",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 1570,
                        "end": 1576
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 1579,
                        "end": 1588
                      }
                    ],
                    "start": 1570,
                    "end": 1588
                  },
                  {
                    "type": "TSOptionalType",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1590,
                      "end": 1596
                    },
                    "start": 1590,
                    "end": 1597
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSBooleanKeyword",
                        "start": 1602,
                        "end": 1609
                      },
                      "start": 1602,
                      "end": 1611
                    },
                    "start": 1599,
                    "end": 1611
                  }
                ],
                "start": 1569,
                "end": 1612
              },
              "start": 1567,
              "end": 1612
            },
            "start": 1564,
            "end": 1612
          },
          "init": null,
          "definite": false,
          "start": 1564,
          "end": 1612
        }
      ],
      "declare": true,
      "start": 1552,
      "end": 1613
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
            "name": "y20",
            "optional": false,
            "typeAnnotation": null,
            "start": 1618,
            "end": 1621
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonpartial",
              "optional": false,
              "typeAnnotation": null,
              "start": 1624,
              "end": 1634
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x20",
                "optional": false,
                "typeAnnotation": null,
                "start": 1635,
                "end": 1638
              }
            ],
            "optional": false,
            "start": 1624,
            "end": 1639
          },
          "definite": false,
          "start": 1618,
          "end": 1639
        }
      ],
      "declare": false,
      "start": 1614,
      "end": 1640
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
            "name": "x21",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1660,
                      "end": 1666
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 1669,
                      "end": 1678
                    }
                  ],
                  "start": 1660,
                  "end": 1678
                },
                "start": 1659,
                "end": 1681
              },
              "start": 1657,
              "end": 1681
            },
            "start": 1654,
            "end": 1681
          },
          "init": null,
          "definite": false,
          "start": 1654,
          "end": 1681
        }
      ],
      "declare": true,
      "start": 1642,
      "end": 1682
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
            "name": "y21",
            "optional": false,
            "typeAnnotation": null,
            "start": 1687,
            "end": 1690
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonpartial",
              "optional": false,
              "typeAnnotation": null,
              "start": 1693,
              "end": 1703
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x21",
                "optional": false,
                "typeAnnotation": null,
                "start": 1704,
                "end": 1707
              }
            ],
            "optional": false,
            "start": 1693,
            "end": 1708
          },
          "definite": false,
          "start": 1687,
          "end": 1708
        }
      ],
      "declare": false,
      "start": 1683,
      "end": 1709
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
            "name": "x22",
            "optional": false,
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1730,
                      "end": 1731
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 1733,
                            "end": 1739
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 1742,
                            "end": 1751
                          }
                        ],
                        "start": 1733,
                        "end": 1751
                      },
                      "start": 1731,
                      "end": 1751
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1730,
                    "end": 1752
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1753,
                      "end": 1754
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 1757,
                          "end": 1763
                        },
                        "start": 1757,
                        "end": 1765
                      },
                      "start": 1755,
                      "end": 1765
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1753,
                    "end": 1765
                  }
                ],
                "start": 1728,
                "end": 1767
              },
              "start": 1726,
              "end": 1767
            },
            "start": 1723,
            "end": 1767
          },
          "init": null,
          "definite": false,
          "start": 1723,
          "end": 1767
        }
      ],
      "declare": true,
      "start": 1711,
      "end": 1768
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
            "name": "y22",
            "optional": false,
            "typeAnnotation": null,
            "start": 1773,
            "end": 1776
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonpartial",
              "optional": false,
              "typeAnnotation": null,
              "start": 1779,
              "end": 1789
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x22",
                "optional": false,
                "typeAnnotation": null,
                "start": 1790,
                "end": 1793
              }
            ],
            "optional": false,
            "start": 1779,
            "end": 1794
          },
          "definite": false,
          "start": 1773,
          "end": 1794
        }
      ],
      "declare": false,
      "start": 1769,
      "end": 1795
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "__Awaited",
        "optional": false,
        "typeAnnotation": null,
        "start": 1802,
        "end": 1811
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
              "start": 1812,
              "end": 1813
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1812,
            "end": 1813
          }
        ],
        "start": 1811,
        "end": 1814
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
            "start": 1817,
            "end": 1818
          },
          "typeArguments": null,
          "start": 1817,
          "end": 1818
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "PromiseLike",
            "optional": false,
            "typeAnnotation": null,
            "start": 1827,
            "end": 1838
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
                    "start": 1845,
                    "end": 1846
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1845,
                  "end": 1846
                },
                "start": 1839,
                "end": 1846
              }
            ],
            "start": 1838,
            "end": 1847
          },
          "start": 1827,
          "end": 1847
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 1850,
            "end": 1851
          },
          "typeArguments": null,
          "start": 1850,
          "end": 1851
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1854,
            "end": 1855
          },
          "typeArguments": null,
          "start": 1854,
          "end": 1855
        },
        "start": 1817,
        "end": 1855
      },
      "declare": false,
      "start": 1797,
      "end": 1856
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Awaitified",
        "optional": false,
        "typeAnnotation": null,
        "start": 1862,
        "end": 1872
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
              "start": 1873,
              "end": 1874
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1873,
            "end": 1874
          }
        ],
        "start": 1872,
        "end": 1875
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 1881,
          "end": 1882
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
              "start": 1892,
              "end": 1893
            },
            "typeArguments": null,
            "start": 1892,
            "end": 1893
          },
          "start": 1886,
          "end": 1893
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "__Awaited",
            "optional": false,
            "typeAnnotation": null,
            "start": 1896,
            "end": 1905
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
                    "start": 1906,
                    "end": 1907
                  },
                  "typeArguments": null,
                  "start": 1906,
                  "end": 1907
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1908,
                    "end": 1909
                  },
                  "typeArguments": null,
                  "start": 1908,
                  "end": 1909
                },
                "start": 1906,
                "end": 1910
              }
            ],
            "start": 1905,
            "end": 1911
          },
          "start": 1896,
          "end": 1911
        },
        "optional": false,
        "readonly": null,
        "start": 1878,
        "end": 1913
      },
      "declare": false,
      "start": 1857,
      "end": 1914
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "all",
        "optional": false,
        "typeAnnotation": null,
        "start": 1933,
        "end": 1936
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
              "start": 1937,
              "end": 1938
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 1947,
                "end": 1950
              },
              "start": 1947,
              "end": 1952
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1937,
            "end": 1952
          }
        ],
        "start": 1936,
        "end": 1953
      },
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "values",
            "optional": false,
            "typeAnnotation": null,
            "start": 1957,
            "end": 1963
          },
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
                "start": 1965,
                "end": 1966
              },
              "typeArguments": null,
              "start": 1965,
              "end": 1966
            },
            "start": 1963,
            "end": 1966
          },
          "value": null,
          "start": 1954,
          "end": 1966
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1969,
            "end": 1976
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Awaitified",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1977,
                  "end": 1987
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
                        "start": 1988,
                        "end": 1989
                      },
                      "typeArguments": null,
                      "start": 1988,
                      "end": 1989
                    }
                  ],
                  "start": 1987,
                  "end": 1990
                },
                "start": 1977,
                "end": 1990
              }
            ],
            "start": 1976,
            "end": 1991
          },
          "start": 1969,
          "end": 1991
        },
        "start": 1967,
        "end": 1991
      },
      "body": null,
      "expression": false,
      "start": 1916,
      "end": 1992
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2003,
        "end": 2005
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSNumberKeyword",
              "start": 2009,
              "end": 2015
            },
            "start": 2007,
            "end": 2015
          },
          "start": 2006,
          "end": 2015
        },
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
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 2020,
                "end": 2027
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 2028,
                    "end": 2034
                  }
                ],
                "start": 2027,
                "end": 2035
              },
              "start": 2020,
              "end": 2035
            },
            "start": 2018,
            "end": 2035
          },
          "start": 2017,
          "end": 2035
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 2040,
                "end": 2046
              },
              "start": 2040,
              "end": 2048
            },
            "start": 2038,
            "end": 2048
          },
          "start": 2037,
          "end": 2048
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 2053,
                "end": 2060
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 2061,
                      "end": 2067
                    },
                    "start": 2061,
                    "end": 2069
                  }
                ],
                "start": 2060,
                "end": 2070
              },
              "start": 2053,
              "end": 2070
            },
            "start": 2051,
            "end": 2070
          },
          "start": 2050,
          "end": 2070
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2082,
                  "end": 2084
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "all",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2087,
                    "end": 2090
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2091,
                      "end": 2092
                    }
                  ],
                  "optional": false,
                  "start": 2087,
                  "end": 2093
                },
                "definite": false,
                "start": 2082,
                "end": 2093
              }
            ],
            "declare": false,
            "start": 2078,
            "end": 2094
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
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2103,
                  "end": 2105
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "all",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2108,
                    "end": 2111
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2112,
                      "end": 2113
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2115,
                      "end": 2116
                    }
                  ],
                  "optional": false,
                  "start": 2108,
                  "end": 2117
                },
                "definite": false,
                "start": 2103,
                "end": 2117
              }
            ],
            "declare": false,
            "start": 2099,
            "end": 2118
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
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2127,
                  "end": 2129
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "all",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2132,
                    "end": 2135
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2136,
                      "end": 2137
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2139,
                      "end": 2140
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2142,
                      "end": 2143
                    }
                  ],
                  "optional": false,
                  "start": 2132,
                  "end": 2144
                },
                "definite": false,
                "start": 2127,
                "end": 2144
              }
            ],
            "declare": false,
            "start": 2123,
            "end": 2145
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
                  "name": "x4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2154,
                  "end": 2156
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "all",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2159,
                    "end": 2162
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2163,
                      "end": 2164
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2166,
                      "end": 2167
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2169,
                      "end": 2170
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2172,
                      "end": 2173
                    }
                  ],
                  "optional": false,
                  "start": 2159,
                  "end": 2174
                },
                "definite": false,
                "start": 2154,
                "end": 2174
              }
            ],
            "declare": false,
            "start": 2150,
            "end": 2175
          }
        ],
        "start": 2072,
        "end": 2177
      },
      "expression": false,
      "start": 1994,
      "end": 2177
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2188,
        "end": 2190
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
              "start": 2191,
              "end": 2192
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 2201,
                "end": 2204
              },
              "start": 2201,
              "end": 2206
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2191,
            "end": 2206
          }
        ],
        "start": 2190,
        "end": 2207
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Boxified",
                "optional": false,
                "typeAnnotation": null,
                "start": 2211,
                "end": 2219
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
                      "start": 2220,
                      "end": 2221
                    },
                    "typeArguments": null,
                    "start": 2220,
                    "end": 2221
                  }
                ],
                "start": 2219,
                "end": 2222
              },
              "start": 2211,
              "end": 2222
            },
            "start": 2209,
            "end": 2222
          },
          "start": 2208,
          "end": 2222
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Box",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2237,
                            "end": 2240
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSAnyKeyword",
                                "start": 2241,
                                "end": 2244
                              }
                            ],
                            "start": 2240,
                            "end": 2245
                          },
                          "start": 2237,
                          "end": 2245
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 2248,
                          "end": 2257
                        }
                      ],
                      "start": 2237,
                      "end": 2257
                    },
                    "start": 2235,
                    "end": 2257
                  },
                  "start": 2234,
                  "end": 2257
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2260,
                      "end": 2261
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "pop",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2262,
                      "end": 2265
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2260,
                    "end": 2265
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 2260,
                  "end": 2267
                },
                "definite": false,
                "start": 2234,
                "end": 2267
              }
            ],
            "declare": false,
            "start": 2230,
            "end": 2268
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Box",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2280,
                          "end": 2283
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSAnyKeyword",
                              "start": 2284,
                              "end": 2287
                            }
                          ],
                          "start": 2283,
                          "end": 2288
                        },
                        "start": 2280,
                        "end": 2288
                      },
                      "start": 2280,
                      "end": 2290
                    },
                    "start": 2278,
                    "end": 2290
                  },
                  "start": 2277,
                  "end": 2290
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2293,
                      "end": 2294
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "concat",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2295,
                      "end": 2301
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2293,
                    "end": 2301
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2302,
                      "end": 2303
                    }
                  ],
                  "optional": false,
                  "start": 2293,
                  "end": 2304
                },
                "definite": false,
                "start": 2277,
                "end": 2304
              }
            ],
            "declare": false,
            "start": 2273,
            "end": 2305
          }
        ],
        "start": 2224,
        "end": 2307
      },
      "expression": false,
      "start": 2179,
      "end": 2307
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ElementType",
        "optional": false,
        "typeAnnotation": null,
        "start": 2336,
        "end": 2347
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
              "start": 2348,
              "end": 2349
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2348,
            "end": 2349
          }
        ],
        "start": 2347,
        "end": 2350
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
            "start": 2353,
            "end": 2354
          },
          "typeArguments": null,
          "start": 2353,
          "end": 2354
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 2363,
            "end": 2368
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
                    "start": 2375,
                    "end": 2376
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2375,
                  "end": 2376
                },
                "start": 2369,
                "end": 2376
              }
            ],
            "start": 2368,
            "end": 2377
          },
          "start": 2363,
          "end": 2377
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 2380,
            "end": 2381
          },
          "typeArguments": null,
          "start": 2380,
          "end": 2381
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 2384,
          "end": 2389
        },
        "start": 2353,
        "end": 2389
      },
      "declare": false,
      "start": 2331,
      "end": 2390
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mapped",
        "optional": false,
        "typeAnnotation": null,
        "start": 2396,
        "end": 2402
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
              "start": 2403,
              "end": 2404
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2403,
            "end": 2404
          }
        ],
        "start": 2402,
        "end": 2405
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 2411,
          "end": 2412
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
              "start": 2422,
              "end": 2423
            },
            "typeArguments": null,
            "start": 2422,
            "end": 2423
          },
          "start": 2416,
          "end": 2423
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
              "start": 2426,
              "end": 2427
            },
            "typeArguments": null,
            "start": 2426,
            "end": 2427
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 2428,
              "end": 2429
            },
            "typeArguments": null,
            "start": 2428,
            "end": 2429
          },
          "start": 2426,
          "end": 2430
        },
        "optional": false,
        "readonly": null,
        "start": 2408,
        "end": 2432
      },
      "declare": false,
      "start": 2391,
      "end": 2433
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 2440,
        "end": 2441
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
              "start": 2442,
              "end": 2443
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2442,
            "end": 2443
          }
        ],
        "start": 2441,
        "end": 2444
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ElementType",
          "optional": false,
          "typeAnnotation": null,
          "start": 2447,
          "end": 2458
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mapped",
                "optional": false,
                "typeAnnotation": null,
                "start": 2459,
                "end": 2465
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
                      "start": 2466,
                      "end": 2467
                    },
                    "typeArguments": null,
                    "start": 2466,
                    "end": 2467
                  }
                ],
                "start": 2465,
                "end": 2468
              },
              "start": 2459,
              "end": 2468
            }
          ],
          "start": 2458,
          "end": 2469
        },
        "start": 2447,
        "end": 2469
      },
      "declare": false,
      "start": 2435,
      "end": 2470
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "R1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2476,
        "end": 2478
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "F",
          "optional": false,
          "typeAnnotation": null,
          "start": 2481,
          "end": 2482
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 2484,
                  "end": 2490
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 2492,
                  "end": 2498
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 2500,
                  "end": 2507
                }
              ],
              "start": 2483,
              "end": 2508
            }
          ],
          "start": 2482,
          "end": 2509
        },
        "start": 2481,
        "end": 2509
      },
      "declare": false,
      "start": 2471,
      "end": 2510
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "R2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2546,
        "end": 2548
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ElementType",
          "optional": false,
          "typeAnnotation": null,
          "start": 2551,
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
                "name": "Mapped",
                "optional": false,
                "typeAnnotation": null,
                "start": 2563,
                "end": 2569
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSStringKeyword",
                        "start": 2571,
                        "end": 2577
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 2579,
                        "end": 2585
                      },
                      {
                        "type": "TSBooleanKeyword",
                        "start": 2587,
                        "end": 2594
                      }
                    ],
                    "start": 2570,
                    "end": 2595
                  }
                ],
                "start": 2569,
                "end": 2596
              },
              "start": 2563,
              "end": 2596
            }
          ],
          "start": 2562,
          "end": 2597
        },
        "start": 2551,
        "end": 2597
      },
      "declare": false,
      "start": 2541,
      "end": 2598
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "acceptArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 2669,
        "end": 2680
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arr",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 2686,
                "end": 2689
              },
              "start": 2686,
              "end": 2691
            },
            "start": 2684,
            "end": 2691
          },
          "start": 2681,
          "end": 2691
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 2694,
          "end": 2698
        },
        "start": 2692,
        "end": 2698
      },
      "body": null,
      "expression": false,
      "start": 2652,
      "end": 2699
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mapArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 2717,
        "end": 2725
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
              "start": 2726,
              "end": 2727
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 2736,
                "end": 2739
              },
              "start": 2736,
              "end": 2741
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2726,
            "end": 2741
          }
        ],
        "start": 2725,
        "end": 2742
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arr",
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
                "start": 2748,
                "end": 2749
              },
              "typeArguments": null,
              "start": 2748,
              "end": 2749
            },
            "start": 2746,
            "end": 2749
          },
          "start": 2743,
          "end": 2749
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Mapped",
            "optional": false,
            "typeAnnotation": null,
            "start": 2752,
            "end": 2758
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
                  "start": 2759,
                  "end": 2760
                },
                "typeArguments": null,
                "start": 2759,
                "end": 2760
              }
            ],
            "start": 2758,
            "end": 2761
          },
          "start": 2752,
          "end": 2761
        },
        "start": 2750,
        "end": 2761
      },
      "body": null,
      "expression": false,
      "start": 2700,
      "end": 2762
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "acceptMappedArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 2772,
        "end": 2789
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
              "start": 2790,
              "end": 2791
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 2800,
                "end": 2803
              },
              "start": 2800,
              "end": 2805
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2790,
            "end": 2805
          }
        ],
        "start": 2789,
        "end": 2806
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arr",
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
                "start": 2812,
                "end": 2813
              },
              "typeArguments": null,
              "start": 2812,
              "end": 2813
            },
            "start": 2810,
            "end": 2813
          },
          "start": 2807,
          "end": 2813
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "acceptArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 2821,
                "end": 2832
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mapArray",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2833,
                    "end": 2841
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arr",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2842,
                      "end": 2845
                    }
                  ],
                  "optional": false,
                  "start": 2833,
                  "end": 2846
                }
              ],
              "optional": false,
              "start": 2821,
              "end": 2847
            },
            "directive": null,
            "start": 2821,
            "end": 2848
          }
        ],
        "start": 2815,
        "end": 2850
      },
      "expression": false,
      "start": 2763,
      "end": 2850
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Unconstrained",
        "optional": false,
        "typeAnnotation": null,
        "start": 2879,
        "end": 2892
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
              "start": 2893,
              "end": 2894
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2893,
            "end": 2894
          }
        ],
        "start": 2892,
        "end": 2895
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ElementType",
          "optional": false,
          "typeAnnotation": null,
          "start": 2898,
          "end": 2909
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mapped",
                "optional": false,
                "typeAnnotation": null,
                "start": 2910,
                "end": 2916
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
                      "start": 2917,
                      "end": 2918
                    },
                    "typeArguments": null,
                    "start": 2917,
                    "end": 2918
                  }
                ],
                "start": 2916,
                "end": 2919
              },
              "start": 2910,
              "end": 2919
            }
          ],
          "start": 2909,
          "end": 2920
        },
        "start": 2898,
        "end": 2920
      },
      "declare": false,
      "start": 2874,
      "end": 2921
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2927,
        "end": 2929
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Unconstrained",
          "optional": false,
          "typeAnnotation": null,
          "start": 2932,
          "end": 2945
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 2947,
                  "end": 2953
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 2955,
                  "end": 2961
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 2963,
                  "end": 2970
                }
              ],
              "start": 2946,
              "end": 2971
            }
          ],
          "start": 2945,
          "end": 2972
        },
        "start": 2932,
        "end": 2972
      },
      "declare": false,
      "start": 2922,
      "end": 2973
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Constrained",
        "optional": false,
        "typeAnnotation": null,
        "start": 3010,
        "end": 3021
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
              "start": 3022,
              "end": 3023
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 3032,
                "end": 3035
              },
              "start": 3032,
              "end": 3037
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3022,
            "end": 3037
          }
        ],
        "start": 3021,
        "end": 3038
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ElementType",
          "optional": false,
          "typeAnnotation": null,
          "start": 3041,
          "end": 3052
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mapped",
                "optional": false,
                "typeAnnotation": null,
                "start": 3053,
                "end": 3059
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
                      "start": 3060,
                      "end": 3061
                    },
                    "typeArguments": null,
                    "start": 3060,
                    "end": 3061
                  }
                ],
                "start": 3059,
                "end": 3062
              },
              "start": 3053,
              "end": 3062
            }
          ],
          "start": 3052,
          "end": 3063
        },
        "start": 3041,
        "end": 3063
      },
      "declare": false,
      "start": 3005,
      "end": 3064
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3070,
        "end": 3072
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Constrained",
          "optional": false,
          "typeAnnotation": null,
          "start": 3075,
          "end": 3086
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 3088,
                  "end": 3094
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 3096,
                  "end": 3102
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 3104,
                  "end": 3111
                }
              ],
              "start": 3087,
              "end": 3112
            }
          ],
          "start": 3086,
          "end": 3113
        },
        "start": 3075,
        "end": 3113
      },
      "declare": false,
      "start": 3065,
      "end": 3114
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3144
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
    "value": "Box",
    "start": 5,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 16,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 28,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "Boxified",
    "start": 33,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 50,
    "end": 51
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 52,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 55,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 65,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 79,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "T00",
    "start": 84,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "Boxified",
    "start": 90,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 100,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 108,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 117,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 120,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 133,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "T01",
    "start": 138,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 144,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 153,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 161,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 170,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 173,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 186,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "T02",
    "start": 191,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "Required",
    "start": 197,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 207,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 215,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 224,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 227,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 241,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "T10",
    "start": 246,
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
    "value": "Boxified",
    "start": 252,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 261,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 272,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "T11",
    "start": 277,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 283,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 291,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 300,
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
    "value": "T12",
    "start": 307,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "Required",
    "start": 313,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 322,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 333,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "T13",
    "start": 338,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "Boxified",
    "start": 344,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "ReadonlyArray",
    "start": 353,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 367,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 377,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "T14",
    "start": 382,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 388,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "ReadonlyArray",
    "start": 396,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 410,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 420,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "T15",
    "start": 425,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "Required",
    "start": 431,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "ReadonlyArray",
    "start": 440,
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
    "value": "string",
    "start": 454,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 465,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "T20",
    "start": 470,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "Boxified",
    "start": 476,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 486,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 495,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 510,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "T21",
    "start": 515,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 521,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 530,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 537,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 539,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "type",
    "start": 554,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "T22",
    "start": 559,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "Required",
    "start": 565,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 575,
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
    "value": "undefined",
    "start": 584,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "]",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 596,
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
    "value": "T23",
    "start": 604,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "Boxified",
    "start": 610,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 618,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "ReadonlyArray",
    "start": 619,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 633,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 640,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 642,
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
    "value": ">",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 653,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 655,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "T24",
    "start": 660,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 666,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 673,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "ReadonlyArray",
    "start": 674,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 688,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 695,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 697,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": ";",
    "start": 708,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 710,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "T25",
    "start": 715,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 719,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "Required",
    "start": 721,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 729,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "ReadonlyArray",
    "start": 730,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 743,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 744,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 751,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 753,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 763,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 764,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 767,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "T30",
    "start": 772,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 776,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "Boxified",
    "start": 778,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 786,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 787,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 794,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 795,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 802,
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
    "value": ">",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 805,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 807,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "T31",
    "start": 812,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 816,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 818,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 825,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "Boxified",
    "start": 826,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 834,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 835,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 845,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 848,
    "end": 852
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 853,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 857,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 860,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 862,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 870,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 872,
    "end": 876
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 877,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 881,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "string",
    "start": 886,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 894,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 897,
    "end": 901
  },
  {
    "type": "Identifier",
    "value": "T40",
    "start": 902,
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
    "value": "Boxified",
    "start": 908,
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
    "value": "A",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 919,
    "end": 920
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 921,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 922,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 923,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 925,
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
    "value": "A",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 942,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 946,
    "end": 947
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 948,
    "end": 949
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 951,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 953,
    "end": 954
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 955,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 962,
    "end": 963
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 964,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 970,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 971,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 972,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 973,
    "end": 974
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 976,
    "end": 980
  },
  {
    "type": "Identifier",
    "value": "ReadWrite",
    "start": 981,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 990,
    "end": 991
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 991,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 992,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 994,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 998,
    "end": 999
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 999,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1011,
    "end": 1013
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1014,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1034,
    "end": 1038
  },
  {
    "type": "Identifier",
    "value": "T50",
    "start": 1039,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 1045,
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
    "value": "string",
    "start": 1054,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1065,
    "end": 1069
  },
  {
    "type": "Identifier",
    "value": "T51",
    "start": 1070,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 1076,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1086,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1094,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1104,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "T52",
    "start": 1109,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 1115,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 1123,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1132,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1144,
    "end": 1148
  },
  {
    "type": "Identifier",
    "value": "T53",
    "start": 1149,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 1155,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 1164,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1172,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1184,
    "end": 1188
  },
  {
    "type": "Identifier",
    "value": "T54",
    "start": 1189,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Identifier",
    "value": "ReadWrite",
    "start": 1195,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Identifier",
    "value": "Required",
    "start": 1205,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "T53",
    "start": 1214,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "declare",
    "start": 1222,
    "end": 1229
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1230,
    "end": 1238
  },
  {
    "type": "Identifier",
    "value": "unboxify",
    "start": 1239,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Identifier",
    "value": "Boxified",
    "start": 1254,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1272,
    "end": 1279
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1280,
    "end": 1283
  },
  {
    "type": "Identifier",
    "value": "x10",
    "start": 1284,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 1290,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1294,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 1303,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1307,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1316,
    "end": 1319
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 1319,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1323,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1336,
    "end": 1339
  },
  {
    "type": "Identifier",
    "value": "y10",
    "start": 1340,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Identifier",
    "value": "unboxify",
    "start": 1346,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Identifier",
    "value": "x10",
    "start": 1355,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1362,
    "end": 1369
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1370,
    "end": 1373
  },
  {
    "type": "Identifier",
    "value": "x11",
    "start": 1374,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 1379,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1383,
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
    "value": "[",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1394,
    "end": 1397
  },
  {
    "type": "Identifier",
    "value": "y11",
    "start": 1398,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Identifier",
    "value": "unboxify",
    "start": 1404,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Identifier",
    "value": "x11",
    "start": 1413,
    "end": 1416
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1420,
    "end": 1427
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1428,
    "end": 1431
  },
  {
    "type": "Identifier",
    "value": "x12",
    "start": 1432,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 1442,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1446,
    "end": 1452
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 1458,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1462,
    "end": 1468
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1475,
    "end": 1478
  },
  {
    "type": "Identifier",
    "value": "y12",
    "start": 1479,
    "end": 1482
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Identifier",
    "value": "unboxify",
    "start": 1485,
    "end": 1493
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Identifier",
    "value": "x12",
    "start": 1494,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1501,
    "end": 1508
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1509,
    "end": 1517
  },
  {
    "type": "Identifier",
    "value": "nonpartial",
    "start": 1518,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 1535,
    "end": 1542
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1546,
    "end": 1547
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1552,
    "end": 1559
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1560,
    "end": 1563
  },
  {
    "type": "Identifier",
    "value": "x20",
    "start": 1564,
    "end": 1567
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1567,
    "end": 1568
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1570,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1579,
    "end": 1588
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1590,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1599,
    "end": 1602
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1602,
    "end": 1609
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1614,
    "end": 1617
  },
  {
    "type": "Identifier",
    "value": "y20",
    "start": 1618,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Identifier",
    "value": "nonpartial",
    "start": 1624,
    "end": 1634
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Identifier",
    "value": "x20",
    "start": 1635,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1642,
    "end": 1649
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1650,
    "end": 1653
  },
  {
    "type": "Identifier",
    "value": "x21",
    "start": 1654,
    "end": 1657
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1660,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1667,
    "end": 1668
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1669,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1683,
    "end": 1686
  },
  {
    "type": "Identifier",
    "value": "y21",
    "start": 1687,
    "end": 1690
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Identifier",
    "value": "nonpartial",
    "start": 1693,
    "end": 1703
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1703,
    "end": 1704
  },
  {
    "type": "Identifier",
    "value": "x21",
    "start": 1704,
    "end": 1707
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1707,
    "end": 1708
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1711,
    "end": 1718
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1719,
    "end": 1722
  },
  {
    "type": "Identifier",
    "value": "x22",
    "start": 1723,
    "end": 1726
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1731,
    "end": 1732
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1733,
    "end": 1739
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1742,
    "end": 1751
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1751,
    "end": 1752
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1757,
    "end": 1763
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1763,
    "end": 1764
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1764,
    "end": 1765
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1767,
    "end": 1768
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1769,
    "end": 1772
  },
  {
    "type": "Identifier",
    "value": "y22",
    "start": 1773,
    "end": 1776
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Identifier",
    "value": "nonpartial",
    "start": 1779,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Identifier",
    "value": "x22",
    "start": 1790,
    "end": 1793
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1793,
    "end": 1794
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1797,
    "end": 1801
  },
  {
    "type": "Identifier",
    "value": "__Awaited",
    "start": 1802,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1812,
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
    "value": "=",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1819,
    "end": 1826
  },
  {
    "type": "Identifier",
    "value": "PromiseLike",
    "start": 1827,
    "end": 1838
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1838,
    "end": 1839
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1839,
    "end": 1844
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1848,
    "end": 1849
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1850,
    "end": 1851
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1852,
    "end": 1853
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1855,
    "end": 1856
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1857,
    "end": 1861
  },
  {
    "type": "Identifier",
    "value": "Awaitified",
    "start": 1862,
    "end": 1872
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1873,
    "end": 1874
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1874,
    "end": 1875
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1876,
    "end": 1877
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1878,
    "end": 1879
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1880,
    "end": 1881
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1883,
    "end": 1885
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1886,
    "end": 1891
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1892,
    "end": 1893
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1893,
    "end": 1894
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1894,
    "end": 1895
  },
  {
    "type": "Identifier",
    "value": "__Awaited",
    "start": 1896,
    "end": 1905
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1905,
    "end": 1906
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1908,
    "end": 1909
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1909,
    "end": 1910
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1910,
    "end": 1911
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1912,
    "end": 1913
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1913,
    "end": 1914
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1916,
    "end": 1923
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1924,
    "end": 1932
  },
  {
    "type": "Identifier",
    "value": "all",
    "start": 1933,
    "end": 1936
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1936,
    "end": 1937
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1939,
    "end": 1946
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1947,
    "end": 1950
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1950,
    "end": 1951
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1952,
    "end": 1953
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1953,
    "end": 1954
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1954,
    "end": 1957
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 1957,
    "end": 1963
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1963,
    "end": 1964
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1965,
    "end": 1966
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1966,
    "end": 1967
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1969,
    "end": 1976
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Identifier",
    "value": "Awaitified",
    "start": 1977,
    "end": 1987
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1987,
    "end": 1988
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1988,
    "end": 1989
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1989,
    "end": 1990
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1990,
    "end": 1991
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1991,
    "end": 1992
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1994,
    "end": 2002
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 2003,
    "end": 2005
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2009,
    "end": 2015
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2015,
    "end": 2016
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2017,
    "end": 2018
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2018,
    "end": 2019
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2020,
    "end": 2027
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2027,
    "end": 2028
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2028,
    "end": 2034
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2034,
    "end": 2035
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2035,
    "end": 2036
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2037,
    "end": 2038
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2038,
    "end": 2039
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2040,
    "end": 2046
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2046,
    "end": 2047
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2047,
    "end": 2048
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2048,
    "end": 2049
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 2050,
    "end": 2051
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2051,
    "end": 2052
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2053,
    "end": 2060
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2060,
    "end": 2061
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2061,
    "end": 2067
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2068,
    "end": 2069
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2069,
    "end": 2070
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2070,
    "end": 2071
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2072,
    "end": 2073
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2078,
    "end": 2081
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 2082,
    "end": 2084
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2085,
    "end": 2086
  },
  {
    "type": "Identifier",
    "value": "all",
    "start": 2087,
    "end": 2090
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2090,
    "end": 2091
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2091,
    "end": 2092
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2092,
    "end": 2093
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2093,
    "end": 2094
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2099,
    "end": 2102
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 2103,
    "end": 2105
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2106,
    "end": 2107
  },
  {
    "type": "Identifier",
    "value": "all",
    "start": 2108,
    "end": 2111
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2111,
    "end": 2112
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2112,
    "end": 2113
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2113,
    "end": 2114
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2115,
    "end": 2116
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2116,
    "end": 2117
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2117,
    "end": 2118
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2123,
    "end": 2126
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 2127,
    "end": 2129
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2130,
    "end": 2131
  },
  {
    "type": "Identifier",
    "value": "all",
    "start": 2132,
    "end": 2135
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2135,
    "end": 2136
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2136,
    "end": 2137
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2137,
    "end": 2138
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2139,
    "end": 2140
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2140,
    "end": 2141
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2142,
    "end": 2143
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2143,
    "end": 2144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2144,
    "end": 2145
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2150,
    "end": 2153
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 2154,
    "end": 2156
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2157,
    "end": 2158
  },
  {
    "type": "Identifier",
    "value": "all",
    "start": 2159,
    "end": 2162
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2162,
    "end": 2163
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2163,
    "end": 2164
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2164,
    "end": 2165
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2166,
    "end": 2167
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2167,
    "end": 2168
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2169,
    "end": 2170
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2170,
    "end": 2171
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 2172,
    "end": 2173
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2173,
    "end": 2174
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2174,
    "end": 2175
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2176,
    "end": 2177
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2179,
    "end": 2187
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 2188,
    "end": 2190
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2190,
    "end": 2191
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2191,
    "end": 2192
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2193,
    "end": 2200
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2201,
    "end": 2204
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2204,
    "end": 2205
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2205,
    "end": 2206
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2206,
    "end": 2207
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2207,
    "end": 2208
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2208,
    "end": 2209
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2209,
    "end": 2210
  },
  {
    "type": "Identifier",
    "value": "Boxified",
    "start": 2211,
    "end": 2219
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2219,
    "end": 2220
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2220,
    "end": 2221
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2221,
    "end": 2222
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2222,
    "end": 2223
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2224,
    "end": 2225
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2230,
    "end": 2233
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2234,
    "end": 2235
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2235,
    "end": 2236
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 2237,
    "end": 2240
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2240,
    "end": 2241
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2241,
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
    "value": "|",
    "start": 2246,
    "end": 2247
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2248,
    "end": 2257
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2258,
    "end": 2259
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2260,
    "end": 2261
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2261,
    "end": 2262
  },
  {
    "type": "Identifier",
    "value": "pop",
    "start": 2262,
    "end": 2265
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2265,
    "end": 2266
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2266,
    "end": 2267
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2267,
    "end": 2268
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2273,
    "end": 2276
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2277,
    "end": 2278
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2278,
    "end": 2279
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 2280,
    "end": 2283
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2283,
    "end": 2284
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2284,
    "end": 2287
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2287,
    "end": 2288
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2288,
    "end": 2289
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2289,
    "end": 2290
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2291,
    "end": 2292
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2293,
    "end": 2294
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2294,
    "end": 2295
  },
  {
    "type": "Identifier",
    "value": "concat",
    "start": 2295,
    "end": 2301
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2301,
    "end": 2302
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2302,
    "end": 2303
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2303,
    "end": 2304
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2304,
    "end": 2305
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2306,
    "end": 2307
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2331,
    "end": 2335
  },
  {
    "type": "Identifier",
    "value": "ElementType",
    "start": 2336,
    "end": 2347
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2347,
    "end": 2348
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2348,
    "end": 2349
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2349,
    "end": 2350
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2351,
    "end": 2352
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2353,
    "end": 2354
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2355,
    "end": 2362
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2363,
    "end": 2368
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2368,
    "end": 2369
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2369,
    "end": 2374
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2375,
    "end": 2376
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2376,
    "end": 2377
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2378,
    "end": 2379
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2380,
    "end": 2381
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2382,
    "end": 2383
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2384,
    "end": 2389
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2389,
    "end": 2390
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2391,
    "end": 2395
  },
  {
    "type": "Identifier",
    "value": "Mapped",
    "start": 2396,
    "end": 2402
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2402,
    "end": 2403
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2403,
    "end": 2404
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2404,
    "end": 2405
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2406,
    "end": 2407
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2408,
    "end": 2409
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2410,
    "end": 2411
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2411,
    "end": 2412
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2413,
    "end": 2415
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2416,
    "end": 2421
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2422,
    "end": 2423
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2423,
    "end": 2424
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2424,
    "end": 2425
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2426,
    "end": 2427
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2427,
    "end": 2428
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2428,
    "end": 2429
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2429,
    "end": 2430
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2431,
    "end": 2432
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2432,
    "end": 2433
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2435,
    "end": 2439
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 2440,
    "end": 2441
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2441,
    "end": 2442
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2442,
    "end": 2443
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2443,
    "end": 2444
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2445,
    "end": 2446
  },
  {
    "type": "Identifier",
    "value": "ElementType",
    "start": 2447,
    "end": 2458
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2458,
    "end": 2459
  },
  {
    "type": "Identifier",
    "value": "Mapped",
    "start": 2459,
    "end": 2465
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2465,
    "end": 2466
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2466,
    "end": 2467
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2467,
    "end": 2468
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2468,
    "end": 2469
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2469,
    "end": 2470
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2471,
    "end": 2475
  },
  {
    "type": "Identifier",
    "value": "R1",
    "start": 2476,
    "end": 2478
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2479,
    "end": 2480
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 2481,
    "end": 2482
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2482,
    "end": 2483
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2483,
    "end": 2484
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2484,
    "end": 2490
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2490,
    "end": 2491
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2492,
    "end": 2498
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2498,
    "end": 2499
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2500,
    "end": 2507
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2507,
    "end": 2508
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2508,
    "end": 2509
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2509,
    "end": 2510
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2541,
    "end": 2545
  },
  {
    "type": "Identifier",
    "value": "R2",
    "start": 2546,
    "end": 2548
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2549,
    "end": 2550
  },
  {
    "type": "Identifier",
    "value": "ElementType",
    "start": 2551,
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
    "value": "Mapped",
    "start": 2563,
    "end": 2569
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2569,
    "end": 2570
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2570,
    "end": 2571
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2571,
    "end": 2577
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2577,
    "end": 2578
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2579,
    "end": 2585
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2585,
    "end": 2586
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2587,
    "end": 2594
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2594,
    "end": 2595
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2595,
    "end": 2596
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2596,
    "end": 2597
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2597,
    "end": 2598
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2652,
    "end": 2659
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2660,
    "end": 2668
  },
  {
    "type": "Identifier",
    "value": "acceptArray",
    "start": 2669,
    "end": 2680
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2680,
    "end": 2681
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 2681,
    "end": 2684
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2684,
    "end": 2685
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2686,
    "end": 2689
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2689,
    "end": 2690
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2690,
    "end": 2691
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2691,
    "end": 2692
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2692,
    "end": 2693
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2694,
    "end": 2698
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2698,
    "end": 2699
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2700,
    "end": 2707
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2708,
    "end": 2716
  },
  {
    "type": "Identifier",
    "value": "mapArray",
    "start": 2717,
    "end": 2725
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2725,
    "end": 2726
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2726,
    "end": 2727
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2728,
    "end": 2735
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2736,
    "end": 2739
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2739,
    "end": 2740
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2740,
    "end": 2741
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2741,
    "end": 2742
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2742,
    "end": 2743
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 2743,
    "end": 2746
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2746,
    "end": 2747
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2748,
    "end": 2749
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2749,
    "end": 2750
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2750,
    "end": 2751
  },
  {
    "type": "Identifier",
    "value": "Mapped",
    "start": 2752,
    "end": 2758
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2758,
    "end": 2759
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2759,
    "end": 2760
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2760,
    "end": 2761
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2761,
    "end": 2762
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2763,
    "end": 2771
  },
  {
    "type": "Identifier",
    "value": "acceptMappedArray",
    "start": 2772,
    "end": 2789
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2789,
    "end": 2790
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2790,
    "end": 2791
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2792,
    "end": 2799
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2800,
    "end": 2803
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2803,
    "end": 2804
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2804,
    "end": 2805
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2805,
    "end": 2806
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2806,
    "end": 2807
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 2807,
    "end": 2810
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2810,
    "end": 2811
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2812,
    "end": 2813
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2813,
    "end": 2814
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2815,
    "end": 2816
  },
  {
    "type": "Identifier",
    "value": "acceptArray",
    "start": 2821,
    "end": 2832
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2832,
    "end": 2833
  },
  {
    "type": "Identifier",
    "value": "mapArray",
    "start": 2833,
    "end": 2841
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2841,
    "end": 2842
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 2842,
    "end": 2845
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2845,
    "end": 2846
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2846,
    "end": 2847
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2847,
    "end": 2848
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2849,
    "end": 2850
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2874,
    "end": 2878
  },
  {
    "type": "Identifier",
    "value": "Unconstrained",
    "start": 2879,
    "end": 2892
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2892,
    "end": 2893
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2893,
    "end": 2894
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2894,
    "end": 2895
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2896,
    "end": 2897
  },
  {
    "type": "Identifier",
    "value": "ElementType",
    "start": 2898,
    "end": 2909
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2909,
    "end": 2910
  },
  {
    "type": "Identifier",
    "value": "Mapped",
    "start": 2910,
    "end": 2916
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2916,
    "end": 2917
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2917,
    "end": 2918
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2918,
    "end": 2919
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2919,
    "end": 2920
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2920,
    "end": 2921
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2922,
    "end": 2926
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 2927,
    "end": 2929
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2930,
    "end": 2931
  },
  {
    "type": "Identifier",
    "value": "Unconstrained",
    "start": 2932,
    "end": 2945
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2945,
    "end": 2946
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2946,
    "end": 2947
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2947,
    "end": 2953
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2953,
    "end": 2954
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2955,
    "end": 2961
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2961,
    "end": 2962
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2963,
    "end": 2970
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2970,
    "end": 2971
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2971,
    "end": 2972
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2972,
    "end": 2973
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3005,
    "end": 3009
  },
  {
    "type": "Identifier",
    "value": "Constrained",
    "start": 3010,
    "end": 3021
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3021,
    "end": 3022
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3022,
    "end": 3023
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3024,
    "end": 3031
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3032,
    "end": 3035
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3035,
    "end": 3036
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3036,
    "end": 3037
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3037,
    "end": 3038
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3039,
    "end": 3040
  },
  {
    "type": "Identifier",
    "value": "ElementType",
    "start": 3041,
    "end": 3052
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3052,
    "end": 3053
  },
  {
    "type": "Identifier",
    "value": "Mapped",
    "start": 3053,
    "end": 3059
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3059,
    "end": 3060
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3060,
    "end": 3061
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3061,
    "end": 3062
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3062,
    "end": 3063
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3063,
    "end": 3064
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3065,
    "end": 3069
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 3070,
    "end": 3072
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3073,
    "end": 3074
  },
  {
    "type": "Identifier",
    "value": "Constrained",
    "start": 3075,
    "end": 3086
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3086,
    "end": 3087
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3087,
    "end": 3088
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3088,
    "end": 3094
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3094,
    "end": 3095
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3096,
    "end": 3102
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3102,
    "end": 3103
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3104,
    "end": 3111
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3111,
    "end": 3112
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3112,
    "end": 3113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3113,
    "end": 3114
  }
]
```
