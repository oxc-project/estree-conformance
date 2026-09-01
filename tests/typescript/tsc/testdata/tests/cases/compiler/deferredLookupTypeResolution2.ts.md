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
        "name": "StringContains",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
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
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 43
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 52,
              "end": 58
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 42,
            "end": 58
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "L",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 61
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 70,
              "end": 76
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 60,
            "end": 76
          }
        ],
        "start": 41,
        "end": 77
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 84,
                "end": 85
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 89,
                  "end": 90
                },
                "typeArguments": null,
                "start": 89,
                "end": 90
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "true",
                  "raw": "'true'",
                  "start": 93,
                  "end": 99
                },
                "start": 93,
                "end": 99
              },
              "optional": false,
              "readonly": null,
              "start": 81,
              "end": 101
            },
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 112,
                          "end": 118
                        },
                        "start": 110,
                        "end": 118
                      },
                      "start": 107,
                      "end": 118
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "false",
                        "raw": "'false'",
                        "start": 121,
                        "end": 128
                      },
                      "start": 121,
                      "end": 128
                    },
                    "start": 119,
                    "end": 128
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 106,
                  "end": 128
                }
              ],
              "start": 104,
              "end": 129
            }
          ],
          "start": 81,
          "end": 129
        },
        "indexType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "L",
            "optional": false,
            "typeAnnotation": null,
            "start": 131,
            "end": 132
          },
          "typeArguments": null,
          "start": 131,
          "end": 132
        },
        "start": 80,
        "end": 133
      },
      "declare": false,
      "start": 22,
      "end": 134
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ObjectHasKey",
        "optional": false,
        "typeAnnotation": null,
        "start": 141,
        "end": 153
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
              "start": 154,
              "end": 155
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 154,
            "end": 155
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "L",
              "optional": false,
              "typeAnnotation": null,
              "start": 157,
              "end": 158
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 167,
              "end": 173
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 157,
            "end": 173
          }
        ],
        "start": 153,
        "end": 174
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "StringContains",
          "optional": false,
          "typeAnnotation": null,
          "start": 177,
          "end": 191
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Extract",
                "optional": false,
                "typeAnnotation": null,
                "start": 192,
                "end": 199
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
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
                        "start": 206,
                        "end": 207
                      },
                      "typeArguments": null,
                      "start": 206,
                      "end": 207
                    },
                    "start": 200,
                    "end": 207
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 209,
                    "end": 215
                  }
                ],
                "start": 199,
                "end": 216
              },
              "start": 192,
              "end": 216
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "L",
                "optional": false,
                "typeAnnotation": null,
                "start": 218,
                "end": 219
              },
              "typeArguments": null,
              "start": 218,
              "end": 219
            }
          ],
          "start": 191,
          "end": 220
        },
        "start": 177,
        "end": 220
      },
      "declare": false,
      "start": 136,
      "end": 221
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 228,
        "end": 229
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
              "start": 230,
              "end": 231
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 230,
            "end": 231
          }
        ],
        "start": 229,
        "end": 232
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ObjectHasKey",
          "optional": false,
          "typeAnnotation": null,
          "start": 235,
          "end": 247
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
                "start": 248,
                "end": 249
              },
              "typeArguments": null,
              "start": 248,
              "end": 249
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "0",
                "raw": "'0'",
                "start": 251,
                "end": 254
              },
              "start": 251,
              "end": 254
            }
          ],
          "start": 247,
          "end": 255
        },
        "start": 235,
        "end": 255
      },
      "declare": false,
      "start": 223,
      "end": 256
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 263,
        "end": 264
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ObjectHasKey",
          "optional": false,
          "typeAnnotation": null,
          "start": 267,
          "end": 279
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 281,
                  "end": 287
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 289,
                  "end": 295
                }
              ],
              "start": 280,
              "end": 296
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "1",
                "raw": "'1'",
                "start": 298,
                "end": 301
              },
              "start": 298,
              "end": 301
            }
          ],
          "start": 279,
          "end": 302
        },
        "start": 267,
        "end": 302
      },
      "declare": false,
      "start": 258,
      "end": 303
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 320,
        "end": 321
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ObjectHasKey",
          "optional": false,
          "typeAnnotation": null,
          "start": 324,
          "end": 336
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 338,
                  "end": 344
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 346,
                  "end": 352
                }
              ],
              "start": 337,
              "end": 353
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "2",
                "raw": "'2'",
                "start": 355,
                "end": 358
              },
              "start": 355,
              "end": 358
            }
          ],
          "start": 336,
          "end": 359
        },
        "start": 324,
        "end": 359
      },
      "declare": false,
      "start": 315,
      "end": 360
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 378,
        "end": 379
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 382,
          "end": 383
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 385,
                  "end": 391
                }
              ],
              "start": 384,
              "end": 392
            }
          ],
          "start": 383,
          "end": 393
        },
        "start": 382,
        "end": 393
      },
      "declare": false,
      "start": 373,
      "end": 394
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 442,
        "end": 443
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
              "start": 444,
              "end": 445
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 444,
            "end": 445
          }
        ],
        "start": 443,
        "end": 446
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
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
                "name": "true",
                "optional": false,
                "typeAnnotation": null,
                "start": 451,
                "end": 455
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "true",
                    "raw": "'true'",
                    "start": 457,
                    "end": 463
                  },
                  "start": 457,
                  "end": 463
                },
                "start": 455,
                "end": 463
              },
              "accessibility": null,
              "static": false,
              "start": 451,
              "end": 463
            }
          ],
          "start": 449,
          "end": 465
        },
        "indexType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ObjectHasKey",
            "optional": false,
            "typeAnnotation": null,
            "start": 466,
            "end": 478
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
                  "start": 479,
                  "end": 480
                },
                "typeArguments": null,
                "start": 479,
                "end": 480
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "1",
                  "raw": "'1'",
                  "start": 482,
                  "end": 485
                },
                "start": 482,
                "end": 485
              }
            ],
            "start": 478,
            "end": 486
          },
          "start": 466,
          "end": 486
        },
        "start": 449,
        "end": 487
      },
      "declare": false,
      "start": 437,
      "end": 488
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Juxtapose",
        "optional": false,
        "typeAnnotation": null,
        "start": 495,
        "end": 504
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
              "start": 505,
              "end": 506
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 505,
            "end": 506
          }
        ],
        "start": 504,
        "end": 507
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSIntersectionType",
          "types": [
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
                    "name": "true",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 513,
                    "end": 517
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "otherwise",
                        "raw": "'otherwise'",
                        "start": 519,
                        "end": 530
                      },
                      "start": 519,
                      "end": 530
                    },
                    "start": 517,
                    "end": 530
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 513,
                  "end": 530
                }
              ],
              "start": 511,
              "end": 532
            },
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "k",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 541,
                          "end": 547
                        },
                        "start": 539,
                        "end": 547
                      },
                      "start": 538,
                      "end": 547
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "true",
                        "raw": "'true'",
                        "start": 550,
                        "end": 556
                      },
                      "start": 550,
                      "end": 556
                    },
                    "start": 548,
                    "end": 556
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 537,
                  "end": 556
                }
              ],
              "start": 535,
              "end": 558
            }
          ],
          "start": 511,
          "end": 558
        },
        "indexType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ObjectHasKey",
            "optional": false,
            "typeAnnotation": null,
            "start": 560,
            "end": 572
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
                  "start": 573,
                  "end": 574
                },
                "typeArguments": null,
                "start": 573,
                "end": 574
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "1",
                  "raw": "'1'",
                  "start": 576,
                  "end": 579
                },
                "start": 576,
                "end": 579
              }
            ],
            "start": 572,
            "end": 580
          },
          "start": 560,
          "end": 580
        },
        "start": 510,
        "end": 581
      },
      "declare": false,
      "start": 490,
      "end": 582
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DeepError",
        "optional": false,
        "typeAnnotation": null,
        "start": 622,
        "end": 631
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
              "start": 632,
              "end": 633
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 632,
            "end": 633
          }
        ],
        "start": 631,
        "end": 634
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
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
                "name": "true",
                "optional": false,
                "typeAnnotation": null,
                "start": 639,
                "end": 643
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "true",
                    "raw": "'true'",
                    "start": 645,
                    "end": 651
                  },
                  "start": 645,
                  "end": 651
                },
                "start": 643,
                "end": 651
              },
              "accessibility": null,
              "static": false,
              "start": 639,
              "end": 651
            }
          ],
          "start": 637,
          "end": 653
        },
        "indexType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Juxtapose",
            "optional": false,
            "typeAnnotation": null,
            "start": 654,
            "end": 663
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
                  "start": 664,
                  "end": 665
                },
                "typeArguments": null,
                "start": 664,
                "end": 665
              }
            ],
            "start": 663,
            "end": 666
          },
          "start": 654,
          "end": 666
        },
        "start": 637,
        "end": 667
      },
      "declare": false,
      "start": 617,
      "end": 668
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DeepOK",
        "optional": false,
        "typeAnnotation": null,
        "start": 675,
        "end": 681
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
              "start": 682,
              "end": 683
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 682,
            "end": 683
          }
        ],
        "start": 681,
        "end": 684
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
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
                "name": "true",
                "optional": false,
                "typeAnnotation": null,
                "start": 689,
                "end": 693
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "true",
                    "raw": "'true'",
                    "start": 695,
                    "end": 701
                  },
                  "start": 695,
                  "end": 701
                },
                "start": 693,
                "end": 701
              },
              "accessibility": null,
              "static": false,
              "start": 689,
              "end": 702
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "otherwise",
                "optional": false,
                "typeAnnotation": null,
                "start": 703,
                "end": 712
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "false",
                    "raw": "'false'",
                    "start": 714,
                    "end": 721
                  },
                  "start": 714,
                  "end": 721
                },
                "start": 712,
                "end": 721
              },
              "accessibility": null,
              "static": false,
              "start": 703,
              "end": 721
            }
          ],
          "start": 687,
          "end": 723
        },
        "indexType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Juxtapose",
            "optional": false,
            "typeAnnotation": null,
            "start": 724,
            "end": 733
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
                  "start": 734,
                  "end": 735
                },
                "typeArguments": null,
                "start": 734,
                "end": 735
              }
            ],
            "start": 733,
            "end": 736
          },
          "start": 724,
          "end": 736
        },
        "start": 687,
        "end": 737
      },
      "declare": false,
      "start": 670,
      "end": 738
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 738
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 22,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "StringContains",
    "start": 27,
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
    "value": "S",
    "start": 42,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 44,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 52,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "L",
    "start": 60,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 62,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 70,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 84,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 86,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 91,
    "end": 92
  },
  {
    "type": "String",
    "value": "'true'",
    "start": 93,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 107,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 112,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 119,
    "end": 120
  },
  {
    "type": "String",
    "value": "'false'",
    "start": 121,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "L",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 136,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "ObjectHasKey",
    "start": 141,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "L",
    "start": 157,
    "end": 158
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 159,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 167,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "StringContains",
    "start": 177,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "Extract",
    "start": 192,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 200,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 209,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "L",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 223,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "ObjectHasKey",
    "start": 235,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 249,
    "end": 250
  },
  {
    "type": "String",
    "value": "'0'",
    "start": 251,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 258,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "ObjectHasKey",
    "start": 267,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 281,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 289,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 296,
    "end": 297
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 298,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 315,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "ObjectHasKey",
    "start": 324,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 338,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 346,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 353,
    "end": 354
  },
  {
    "type": "String",
    "value": "'2'",
    "start": 355,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 373,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 385,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 437,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 444,
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
    "value": "=",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "true",
    "start": 451,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 455,
    "end": 456
  },
  {
    "type": "String",
    "value": "'true'",
    "start": 457,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "ObjectHasKey",
    "start": 466,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 480,
    "end": 481
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 482,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 490,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "Juxtapose",
    "start": 495,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "true",
    "start": 513,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 517,
    "end": 518
  },
  {
    "type": "String",
    "value": "'otherwise'",
    "start": 519,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 537,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 541,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 548,
    "end": 549
  },
  {
    "type": "String",
    "value": "'true'",
    "start": 550,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "ObjectHasKey",
    "start": 560,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 574,
    "end": 575
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 576,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": ";",
    "start": 581,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 617,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "DeepError",
    "start": 622,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 631,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 637,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "true",
    "start": 639,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 643,
    "end": 644
  },
  {
    "type": "String",
    "value": "'true'",
    "start": 645,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 653,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "Juxtapose",
    "start": 654,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 667,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 670,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "DeepOK",
    "start": 675,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "true",
    "start": 689,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 693,
    "end": 694
  },
  {
    "type": "String",
    "value": "'true'",
    "start": 695,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 701,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "otherwise",
    "start": 703,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 712,
    "end": 713
  },
  {
    "type": "String",
    "value": "'false'",
    "start": 714,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 723,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "Juxtapose",
    "start": 724,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 733,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 734,
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
    "value": "]",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 737,
    "end": 738
  }
]
```
