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
        "name": "K",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 73
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
        "start": 73,
        "end": 76
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 82,
          "end": 83
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
              "start": 93,
              "end": 94
            },
            "typeArguments": null,
            "start": 93,
            "end": 94
          },
          "start": 87,
          "end": 94
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 97,
            "end": 98
          },
          "typeArguments": null,
          "start": 97,
          "end": 98
        },
        "optional": false,
        "readonly": null,
        "start": 79,
        "end": 100
      },
      "declare": false,
      "start": 67,
      "end": 101
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 107,
        "end": 108
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
              "start": 109,
              "end": 110
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 109,
            "end": 110
          }
        ],
        "start": 108,
        "end": 111
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 117,
          "end": 118
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
              "start": 128,
              "end": 129
            },
            "typeArguments": null,
            "start": 128,
            "end": 129
          },
          "start": 122,
          "end": 129
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
              "start": 132,
              "end": 133
            },
            "typeArguments": null,
            "start": 132,
            "end": 133
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 134,
              "end": 135
            },
            "typeArguments": null,
            "start": 134,
            "end": 135
          },
          "start": 132,
          "end": 136
        },
        "optional": false,
        "readonly": null,
        "start": 114,
        "end": 138
      },
      "declare": false,
      "start": 102,
      "end": 139
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "KA",
        "optional": false,
        "typeAnnotation": null,
        "start": 146,
        "end": 148
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 151,
          "end": 152
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 154,
                  "end": 160
                },
                {
                  "type": "TSStringKeyword",
                  "start": 162,
                  "end": 168
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 170,
                  "end": 177
                }
              ],
              "start": 153,
              "end": 178
            }
          ],
          "start": 152,
          "end": 179
        },
        "start": 151,
        "end": 179
      },
      "declare": false,
      "start": 141,
      "end": 180
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "KB",
        "optional": false,
        "typeAnnotation": null,
        "start": 206,
        "end": 208
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 211,
          "end": 212
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 214,
                  "end": 220
                },
                {
                  "type": "TSStringKeyword",
                  "start": 222,
                  "end": 228
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 233,
                      "end": 239
                    },
                    "start": 233,
                    "end": 241
                  },
                  "start": 230,
                  "end": 241
                },
                {
                  "type": "TSStringKeyword",
                  "start": 243,
                  "end": 249
                }
              ],
              "start": 213,
              "end": 250
            }
          ],
          "start": 212,
          "end": 251
        },
        "start": 211,
        "end": 251
      },
      "declare": false,
      "start": 201,
      "end": 252
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "KC",
        "optional": false,
        "typeAnnotation": null,
        "start": 294,
        "end": 296
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 299,
          "end": 300
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 305,
                      "end": 311
                    },
                    "start": 305,
                    "end": 313
                  },
                  "start": 302,
                  "end": 313
                }
              ],
              "start": 301,
              "end": 314
            }
          ],
          "start": 300,
          "end": 315
        },
        "start": 299,
        "end": 315
      },
      "declare": false,
      "start": 289,
      "end": 316
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "KD",
        "optional": false,
        "typeAnnotation": null,
        "start": 335,
        "end": 337
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 340,
          "end": 341
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 342,
                "end": 348
              },
              "start": 342,
              "end": 350
            }
          ],
          "start": 341,
          "end": 351
        },
        "start": 340,
        "end": 351
      },
      "declare": false,
      "start": 330,
      "end": 352
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 372,
        "end": 373
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
              "start": 378,
              "end": 379
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 381,
                "end": 387
              },
              "start": 379,
              "end": 387
            },
            "accessibility": null,
            "static": false,
            "start": 378,
            "end": 387
          }
        ],
        "start": 376,
        "end": 389
      },
      "declare": false,
      "start": 367,
      "end": 390
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 396,
        "end": 397
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
              "start": 402,
              "end": 403
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 405,
                "end": 411
              },
              "start": 403,
              "end": 411
            },
            "accessibility": null,
            "static": false,
            "start": 402,
            "end": 411
          }
        ],
        "start": 400,
        "end": 413
      },
      "declare": false,
      "start": 391,
      "end": 414
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 420,
        "end": 421
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
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 426,
              "end": 427
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 429,
                "end": 435
              },
              "start": 427,
              "end": 435
            },
            "accessibility": null,
            "static": false,
            "start": 426,
            "end": 435
          }
        ],
        "start": 424,
        "end": 437
      },
      "declare": false,
      "start": 415,
      "end": 438
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 444,
        "end": 445
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
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 450,
              "end": 451
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 453,
                "end": 459
              },
              "start": 451,
              "end": 459
            },
            "accessibility": null,
            "static": false,
            "start": 450,
            "end": 459
          }
        ],
        "start": 448,
        "end": 461
      },
      "declare": false,
      "start": 439,
      "end": 462
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "V0",
        "optional": false,
        "typeAnnotation": null,
        "start": 469,
        "end": 471
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
              "start": 472,
              "end": 473
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 482,
                "end": 489
              },
              "start": 482,
              "end": 491
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 472,
            "end": 491
          }
        ],
        "start": 471,
        "end": 492
      },
      "typeAnnotation": {
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
              "start": 496,
              "end": 497
            },
            "typeArguments": null,
            "start": 496,
            "end": 497
          },
          {
            "type": "TSOptionalType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 499,
                "end": 500
              },
              "typeArguments": null,
              "start": 499,
              "end": 500
            },
            "start": 499,
            "end": 501
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
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
            "start": 503,
            "end": 507
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
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 512,
                  "end": 513
                },
                "typeArguments": null,
                "start": 512,
                "end": 513
              },
              "start": 512,
              "end": 515
            },
            "start": 509,
            "end": 515
          }
        ],
        "start": 495,
        "end": 516
      },
      "declare": false,
      "start": 464,
      "end": 516
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "V1",
        "optional": false,
        "typeAnnotation": null,
        "start": 522,
        "end": 524
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
              "start": 525,
              "end": 526
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 535,
                "end": 542
              },
              "start": 535,
              "end": 544
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 525,
            "end": 544
          }
        ],
        "start": 524,
        "end": 545
      },
      "typeAnnotation": {
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
              "start": 549,
              "end": 550
            },
            "typeArguments": null,
            "start": 549,
            "end": 550
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 555,
                "end": 556
              },
              "typeArguments": null,
              "start": 555,
              "end": 556
            },
            "start": 552,
            "end": 556
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 558,
              "end": 559
            },
            "typeArguments": null,
            "start": 558,
            "end": 559
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
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 564,
                  "end": 565
                },
                "typeArguments": null,
                "start": 564,
                "end": 565
              },
              "start": 564,
              "end": 567
            },
            "start": 561,
            "end": 567
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 569,
              "end": 570
            },
            "typeArguments": null,
            "start": 569,
            "end": 570
          }
        ],
        "start": 548,
        "end": 571
      },
      "declare": false,
      "start": 517,
      "end": 571
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "K0",
        "optional": false,
        "typeAnnotation": null,
        "start": 578,
        "end": 580
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
              "start": 581,
              "end": 582
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 591,
                "end": 598
              },
              "start": 591,
              "end": 600
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 581,
            "end": 600
          }
        ],
        "start": 580,
        "end": 601
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 604,
          "end": 605
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V0",
                "optional": false,
                "typeAnnotation": null,
                "start": 606,
                "end": 608
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
                      "start": 609,
                      "end": 610
                    },
                    "typeArguments": null,
                    "start": 609,
                    "end": 610
                  }
                ],
                "start": 608,
                "end": 611
              },
              "start": 606,
              "end": 611
            }
          ],
          "start": 605,
          "end": 612
        },
        "start": 604,
        "end": 612
      },
      "declare": false,
      "start": 573,
      "end": 613
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "K1",
        "optional": false,
        "typeAnnotation": null,
        "start": 657,
        "end": 659
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
              "start": 660,
              "end": 661
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 670,
                "end": 677
              },
              "start": 670,
              "end": 679
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 660,
            "end": 679
          }
        ],
        "start": 659,
        "end": 680
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 683,
          "end": 684
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V1",
                "optional": false,
                "typeAnnotation": null,
                "start": 685,
                "end": 687
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
                      "start": 688,
                      "end": 689
                    },
                    "typeArguments": null,
                    "start": 688,
                    "end": 689
                  }
                ],
                "start": 687,
                "end": 690
              },
              "start": 685,
              "end": 690
            }
          ],
          "start": 684,
          "end": 691
        },
        "start": 683,
        "end": 691
      },
      "declare": false,
      "start": 652,
      "end": 692
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M0",
        "optional": false,
        "typeAnnotation": null,
        "start": 747,
        "end": 749
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
              "start": 750,
              "end": 751
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 760,
                "end": 767
              },
              "start": 760,
              "end": 769
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 750,
            "end": 769
          }
        ],
        "start": 749,
        "end": 770
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null,
          "start": 773,
          "end": 774
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V0",
                "optional": false,
                "typeAnnotation": null,
                "start": 775,
                "end": 777
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
                      "start": 778,
                      "end": 779
                    },
                    "typeArguments": null,
                    "start": 778,
                    "end": 779
                  }
                ],
                "start": 777,
                "end": 780
              },
              "start": 775,
              "end": 780
            }
          ],
          "start": 774,
          "end": 781
        },
        "start": 773,
        "end": 781
      },
      "declare": false,
      "start": 742,
      "end": 782
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M1",
        "optional": false,
        "typeAnnotation": null,
        "start": 817,
        "end": 819
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
              "start": 820,
              "end": 821
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 830,
                "end": 837
              },
              "start": 830,
              "end": 839
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 820,
            "end": 839
          }
        ],
        "start": 819,
        "end": 840
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null,
          "start": 843,
          "end": 844
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V1",
                "optional": false,
                "typeAnnotation": null,
                "start": 845,
                "end": 847
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
                      "start": 848,
                      "end": 849
                    },
                    "typeArguments": null,
                    "start": 848,
                    "end": 849
                  }
                ],
                "start": 847,
                "end": 850
              },
              "start": 845,
              "end": 850
            }
          ],
          "start": 844,
          "end": 851
        },
        "start": 843,
        "end": 851
      },
      "declare": false,
      "start": 812,
      "end": 852
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Keys",
        "optional": false,
        "typeAnnotation": null,
        "start": 912,
        "end": 916
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 917,
              "end": 918
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 927,
                "end": 934
              },
              "start": 927,
              "end": 936
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 917,
            "end": 936
          }
        ],
        "start": 916,
        "end": 937
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 943,
          "end": 944
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 954,
              "end": 955
            },
            "typeArguments": null,
            "start": 954,
            "end": 955
          },
          "start": 948,
          "end": 955
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 958,
            "end": 959
          },
          "typeArguments": null,
          "start": 958,
          "end": 959
        },
        "optional": false,
        "readonly": null,
        "start": 940,
        "end": 961
      },
      "declare": false,
      "start": 907,
      "end": 962
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Keys1",
        "optional": false,
        "typeAnnotation": null,
        "start": 969,
        "end": 974
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Keys",
          "optional": false,
          "typeAnnotation": null,
          "start": 977,
          "end": 981
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 983,
                  "end": 989
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 994,
                      "end": 1000
                    },
                    "start": 994,
                    "end": 1002
                  },
                  "start": 991,
                  "end": 1002
                }
              ],
              "start": 982,
              "end": 1003
            }
          ],
          "start": 981,
          "end": 1004
        },
        "start": 977,
        "end": 1004
      },
      "declare": false,
      "start": 964,
      "end": 1005
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Keys2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1011,
        "end": 1016
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Keys",
          "optional": false,
          "typeAnnotation": null,
          "start": 1019,
          "end": 1023
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 1025,
                  "end": 1031
                },
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1036,
                      "end": 1042
                    },
                    "start": 1036,
                    "end": 1044
                  },
                  "start": 1033,
                  "end": 1044
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 1046,
                  "end": 1052
                }
              ],
              "start": 1024,
              "end": 1053
            }
          ],
          "start": 1023,
          "end": 1054
        },
        "start": 1019,
        "end": 1054
      },
      "declare": false,
      "start": 1006,
      "end": 1055
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1084,
        "end": 1086
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 1090,
                "end": 1093
              },
              "start": 1090,
              "end": 1093
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "b",
                "raw": "'b'",
                "start": 1095,
                "end": 1098
              },
              "start": 1095,
              "end": 1098
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "c",
                "raw": "'c'",
                "start": 1100,
                "end": 1103
              },
              "start": 1100,
              "end": 1103
            }
          ],
          "start": 1089,
          "end": 1104
        },
        "extendsType": {
          "type": "TSTypeOperator",
          "operator": "readonly",
          "typeAnnotation": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "H",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1129,
                    "end": 1130
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1129,
                  "end": 1130
                },
                "start": 1123,
                "end": 1130
              },
              {
                "type": "TSRestType",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSUnknownKeyword",
                    "start": 1135,
                    "end": 1142
                  },
                  "start": 1135,
                  "end": 1144
                },
                "start": 1132,
                "end": 1144
              }
            ],
            "start": 1122,
            "end": 1145
          },
          "start": 1113,
          "end": 1145
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "H",
            "optional": false,
            "typeAnnotation": null,
            "start": 1148,
            "end": 1149
          },
          "typeArguments": null,
          "start": 1148,
          "end": 1149
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1152,
          "end": 1157
        },
        "start": 1089,
        "end": 1157
      },
      "declare": false,
      "start": 1079,
      "end": 1158
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1172,
        "end": 1174
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 1178,
                "end": 1181
              },
              "start": 1178,
              "end": 1181
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "b",
                "raw": "'b'",
                "start": 1183,
                "end": 1186
              },
              "start": 1183,
              "end": 1186
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "c",
                "raw": "'c'",
                "start": 1188,
                "end": 1191
              },
              "start": 1188,
              "end": 1191
            }
          ],
          "start": 1177,
          "end": 1192
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Readonly",
            "optional": false,
            "typeAnnotation": null,
            "start": 1201,
            "end": 1209
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSInferType",
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "H",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1217,
                        "end": 1218
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1217,
                      "end": 1218
                    },
                    "start": 1211,
                    "end": 1218
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSUnknownKeyword",
                        "start": 1223,
                        "end": 1230
                      },
                      "start": 1223,
                      "end": 1232
                    },
                    "start": 1220,
                    "end": 1232
                  }
                ],
                "start": 1210,
                "end": 1233
              }
            ],
            "start": 1209,
            "end": 1234
          },
          "start": 1201,
          "end": 1234
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "H",
            "optional": false,
            "typeAnnotation": null,
            "start": 1237,
            "end": 1238
          },
          "typeArguments": null,
          "start": 1237,
          "end": 1238
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1241,
          "end": 1246
        },
        "start": 1177,
        "end": 1246
      },
      "declare": false,
      "start": 1167,
      "end": 1247
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1261,
        "end": 1263
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 1267,
                "end": 1270
              },
              "start": 1267,
              "end": 1270
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "b",
                "raw": "'b'",
                "start": 1272,
                "end": 1275
              },
              "start": 1272,
              "end": 1275
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "c",
                "raw": "'c'",
                "start": 1277,
                "end": 1280
              },
              "start": 1277,
              "end": 1280
            }
          ],
          "start": 1266,
          "end": 1281
        },
        "extendsType": {
          "type": "TSTypeOperator",
          "operator": "readonly",
          "typeAnnotation": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSRestType",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSUnknownKeyword",
                    "start": 1303,
                    "end": 1310
                  },
                  "start": 1303,
                  "end": 1312
                },
                "start": 1300,
                "end": 1312
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "L",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1320,
                    "end": 1321
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1320,
                  "end": 1321
                },
                "start": 1314,
                "end": 1321
              }
            ],
            "start": 1299,
            "end": 1322
          },
          "start": 1290,
          "end": 1322
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "L",
            "optional": false,
            "typeAnnotation": null,
            "start": 1325,
            "end": 1326
          },
          "typeArguments": null,
          "start": 1325,
          "end": 1326
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1329,
          "end": 1334
        },
        "start": 1266,
        "end": 1334
      },
      "declare": false,
      "start": 1256,
      "end": 1335
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1349,
        "end": 1351
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 1355,
                "end": 1358
              },
              "start": 1355,
              "end": 1358
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "b",
                "raw": "'b'",
                "start": 1360,
                "end": 1363
              },
              "start": 1360,
              "end": 1363
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "c",
                "raw": "'c'",
                "start": 1365,
                "end": 1368
              },
              "start": 1365,
              "end": 1368
            }
          ],
          "start": 1354,
          "end": 1369
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Readonly",
            "optional": false,
            "typeAnnotation": null,
            "start": 1378,
            "end": 1386
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSUnknownKeyword",
                        "start": 1391,
                        "end": 1398
                      },
                      "start": 1391,
                      "end": 1400
                    },
                    "start": 1388,
                    "end": 1400
                  },
                  {
                    "type": "TSInferType",
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "L",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1408,
                        "end": 1409
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1408,
                      "end": 1409
                    },
                    "start": 1402,
                    "end": 1409
                  }
                ],
                "start": 1387,
                "end": 1410
              }
            ],
            "start": 1386,
            "end": 1411
          },
          "start": 1378,
          "end": 1411
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "L",
            "optional": false,
            "typeAnnotation": null,
            "start": 1414,
            "end": 1415
          },
          "typeArguments": null,
          "start": 1414,
          "end": 1415
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1418,
          "end": 1423
        },
        "start": 1354,
        "end": 1423
      },
      "declare": false,
      "start": 1344,
      "end": 1424
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "R1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1461,
        "end": 1463
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
              "start": 1464,
              "end": 1465
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1464,
            "end": 1465
          }
        ],
        "start": 1463,
        "end": 1466
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "readonly",
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 1482,
                  "end": 1489
                },
                "start": 1482,
                "end": 1491
              },
              "start": 1479,
              "end": 1491
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1493,
                "end": 1494
              },
              "typeArguments": null,
              "start": 1493,
              "end": 1494
            }
          ],
          "start": 1478,
          "end": 1495
        },
        "start": 1469,
        "end": 1495
      },
      "declare": false,
      "start": 1456,
      "end": 1496
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "R2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1533,
        "end": 1535
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
              "start": 1536,
              "end": 1537
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1536,
            "end": 1537
          }
        ],
        "start": 1535,
        "end": 1538
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Readonly",
          "optional": false,
          "typeAnnotation": null,
          "start": 1541,
          "end": 1549
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSUnknownKeyword",
                      "start": 1554,
                      "end": 1561
                    },
                    "start": 1554,
                    "end": 1563
                  },
                  "start": 1551,
                  "end": 1563
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1565,
                    "end": 1566
                  },
                  "typeArguments": null,
                  "start": 1565,
                  "end": 1566
                }
              ],
              "start": 1550,
              "end": 1567
            }
          ],
          "start": 1549,
          "end": 1568
        },
        "start": 1541,
        "end": 1568
      },
      "declare": false,
      "start": 1528,
      "end": 1569
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 67,
  "end": 1600
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 67,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "=",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 82,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 84,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 87,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 102,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 117,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 119,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 122,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": ":",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 141,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "KA",
    "start": 146,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 154,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 162,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 170,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 201,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "KB",
    "start": 206,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 214,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 222,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 230,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 233,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 243,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 289,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "KC",
    "start": 294,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 302,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 305,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 330,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "KD",
    "start": 335,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 342,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 367,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 381,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 391,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 400,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 405,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "start": 415,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "c",
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
    "value": "string",
    "start": 429,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 439,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 453,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 464,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "V0",
    "start": 469,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 472,
    "end": 473
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 474,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 482,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 503,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 509,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 517,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "V1",
    "start": 522,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 525,
    "end": 526
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 527,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 535,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 552,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 556,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 561,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 573,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "K0",
    "start": 578,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 580,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 581,
    "end": 582
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 583,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 591,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 602,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 605,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "V0",
    "start": 606,
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
    "value": "T",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 612,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 652,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 657,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 659,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 660,
    "end": 661
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 662,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 670,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 678,
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
    "value": "=",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 684,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "V1",
    "start": 685,
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
    "value": "T",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 742,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "M0",
    "start": 747,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 749,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 750,
    "end": 751
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 752,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 760,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 771,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 774,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "V0",
    "start": 775,
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
    "type": "Punctuator",
    "value": ">",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 781,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 812,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "M1",
    "start": 817,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 819,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 820,
    "end": 821
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 822,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 830,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 837,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 841,
    "end": 842
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 844,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "V1",
    "start": 845,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 847,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 851,
    "end": 852
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 907,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "Keys",
    "start": 912,
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
    "value": "O",
    "start": 917,
    "end": 918
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 919,
    "end": 926
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 927,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 935,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 936,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 942,
    "end": 943
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 943,
    "end": 944
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 945,
    "end": 947
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 948,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 954,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 955,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 956,
    "end": 957
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 958,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 960,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 961,
    "end": 962
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 964,
    "end": 968
  },
  {
    "type": "Identifier",
    "value": "Keys1",
    "start": 969,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 975,
    "end": 976
  },
  {
    "type": "Identifier",
    "value": "Keys",
    "start": 977,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 982,
    "end": 983
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 983,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 989,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 991,
    "end": 994
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 994,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1006,
    "end": 1010
  },
  {
    "type": "Identifier",
    "value": "Keys2",
    "start": 1011,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Identifier",
    "value": "Keys",
    "start": 1019,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1025,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1033,
    "end": 1036
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1036,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1046,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1079,
    "end": 1083
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 1084,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1090,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 1095,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "String",
    "value": "'c'",
    "start": 1100,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1105,
    "end": 1112
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1113,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1123,
    "end": 1128
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1132,
    "end": 1135
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1135,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1152,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1167,
    "end": 1171
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 1172,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1178,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 1183,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "String",
    "value": "'c'",
    "start": 1188,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1193,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 1201,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1211,
    "end": 1216
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1220,
    "end": 1223
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1223,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Identifier",
    "value": "H",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1241,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1256,
    "end": 1260
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 1261,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1267,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 1272,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "String",
    "value": "'c'",
    "start": 1277,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1282,
    "end": 1289
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1290,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1300,
    "end": 1303
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1303,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1314,
    "end": 1319
  },
  {
    "type": "Identifier",
    "value": "L",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Identifier",
    "value": "L",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1329,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1344,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "T4",
    "start": 1349,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 1355,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 1360,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "String",
    "value": "'c'",
    "start": 1365,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1370,
    "end": 1377
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 1378,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1388,
    "end": 1391
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1391,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1402,
    "end": 1407
  },
  {
    "type": "Identifier",
    "value": "L",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Identifier",
    "value": "L",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1418,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1456,
    "end": 1460
  },
  {
    "type": "Identifier",
    "value": "R1",
    "start": 1461,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1469,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1479,
    "end": 1482
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1482,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1528,
    "end": 1532
  },
  {
    "type": "Identifier",
    "value": "R2",
    "start": 1533,
    "end": 1535
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 1541,
    "end": 1549
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1551,
    "end": 1554
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1554,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1561,
    "end": 1562
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1563,
    "end": 1564
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1565,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1567,
    "end": 1568
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1568,
    "end": 1569
  }
]
```
