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
        "name": "Show",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 66
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
              "start": 67,
              "end": 68
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 67,
            "end": 68
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 70,
              "end": 71
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 80,
                "end": 81
              },
              "typeArguments": null,
              "start": 80,
              "end": 81
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 70,
            "end": 81
          }
        ],
        "start": 66,
        "end": 82
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
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
                  "start": 86,
                  "end": 87
                },
                "typeArguments": null,
                "start": 86,
                "end": 87
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 89,
                  "end": 90
                },
                "typeArguments": null,
                "start": 89,
                "end": 90
              }
            ],
            "start": 85,
            "end": 91
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 94,
            "end": 96
          }
        ],
        "start": 85,
        "end": 96
      },
      "declare": false,
      "start": 57,
      "end": 97
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Issue1",
        "optional": false,
        "typeAnnotation": null,
        "start": 104,
        "end": 110
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
              "start": 111,
              "end": 112
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 111,
            "end": 112
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 115
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 124,
                "end": 125
              },
              "typeArguments": null,
              "start": 124,
              "end": 125
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 114,
            "end": 125
          }
        ],
        "start": 110,
        "end": 126
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 131,
            "end": 132
          },
          "typeArguments": null,
          "start": 131,
          "end": 132
        },
        "extendsType": {
          "type": "TSUnknownKeyword",
          "start": 141,
          "end": 148
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 155,
              "end": 156
            },
            "typeArguments": null,
            "start": 155,
            "end": 156
          },
          "extendsType": {
            "type": "TSUnknownKeyword",
            "start": 165,
            "end": 172
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Show",
              "optional": false,
              "typeAnnotation": null,
              "start": 183,
              "end": 187
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
                    "start": 188,
                    "end": 189
                  },
                  "typeArguments": null,
                  "start": 188,
                  "end": 189
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 191,
                    "end": 192
                  },
                  "typeArguments": null,
                  "start": 191,
                  "end": 192
                }
              ],
              "start": 187,
              "end": 193
            },
            "start": 183,
            "end": 193
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 214,
            "end": 219
          },
          "start": 155,
          "end": 219
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 226,
          "end": 231
        },
        "start": 131,
        "end": 231
      },
      "declare": false,
      "start": 99,
      "end": 232
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Issue2",
        "optional": false,
        "typeAnnotation": null,
        "start": 239,
        "end": 245
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
              "start": 246,
              "end": 247
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 246,
            "end": 247
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 249,
              "end": 250
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 259,
                "end": 260
              },
              "typeArguments": null,
              "start": 259,
              "end": 260
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 249,
            "end": 260
          }
        ],
        "start": 245,
        "end": 261
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 266,
            "end": 267
          },
          "typeArguments": null,
          "start": 266,
          "end": 267
        },
        "extendsType": {
          "type": "TSUnknownKeyword",
          "start": 276,
          "end": 283
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 290,
              "end": 291
            },
            "typeArguments": null,
            "start": 290,
            "end": 291
          },
          "extendsType": {
            "type": "TSUnknownKeyword",
            "start": 300,
            "end": 307
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Show",
              "optional": false,
              "typeAnnotation": null,
              "start": 318,
              "end": 322
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
                    "start": 323,
                    "end": 324
                  },
                  "typeArguments": null,
                  "start": 323,
                  "end": 324
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 326,
                    "end": 327
                  },
                  "typeArguments": null,
                  "start": 326,
                  "end": 327
                }
              ],
              "start": 322,
              "end": 328
            },
            "start": 318,
            "end": 328
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 349,
            "end": 354
          },
          "start": 290,
          "end": 354
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 361,
          "end": 366
        },
        "start": 266,
        "end": 366
      },
      "declare": false,
      "start": 234,
      "end": 367
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Issue3",
        "optional": false,
        "typeAnnotation": null,
        "start": 374,
        "end": 380
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
              "start": 381,
              "end": 382
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 381,
            "end": 382
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 384,
              "end": 385
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 384,
            "end": 385
          }
        ],
        "start": 380,
        "end": 386
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 391,
            "end": 392
          },
          "typeArguments": null,
          "start": 391,
          "end": 392
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 401,
            "end": 402
          },
          "typeArguments": null,
          "start": 401,
          "end": 402
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 409,
              "end": 410
            },
            "typeArguments": null,
            "start": 409,
            "end": 410
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 419,
              "end": 420
            },
            "typeArguments": null,
            "start": 419,
            "end": 420
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Show",
              "optional": false,
              "typeAnnotation": null,
              "start": 431,
              "end": 435
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
                    "start": 436,
                    "end": 437
                  },
                  "typeArguments": null,
                  "start": 436,
                  "end": 437
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 439,
                    "end": 440
                  },
                  "typeArguments": null,
                  "start": 439,
                  "end": 440
                }
              ],
              "start": 435,
              "end": 441
            },
            "start": 431,
            "end": 441
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 452,
            "end": 457
          },
          "start": 409,
          "end": 457
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 464,
          "end": 469
        },
        "start": 391,
        "end": 469
      },
      "declare": false,
      "start": 369,
      "end": 470
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Issue4",
        "optional": false,
        "typeAnnotation": null,
        "start": 477,
        "end": 483
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
              "start": 484,
              "end": 485
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 484,
            "end": 485
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 487,
              "end": 488
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 487,
            "end": 488
          }
        ],
        "start": 483,
        "end": 489
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 494,
            "end": 495
          },
          "typeArguments": null,
          "start": 494,
          "end": 495
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 504,
            "end": 505
          },
          "typeArguments": null,
          "start": 504,
          "end": 505
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 512,
              "end": 513
            },
            "typeArguments": null,
            "start": 512,
            "end": 513
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 522,
              "end": 523
            },
            "typeArguments": null,
            "start": 522,
            "end": 523
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Show",
              "optional": false,
              "typeAnnotation": null,
              "start": 534,
              "end": 538
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
                    "start": 539,
                    "end": 540
                  },
                  "typeArguments": null,
                  "start": 539,
                  "end": 540
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 542,
                    "end": 543
                  },
                  "typeArguments": null,
                  "start": 542,
                  "end": 543
                }
              ],
              "start": 538,
              "end": 544
            },
            "start": 534,
            "end": 544
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 565,
            "end": 570
          },
          "start": 512,
          "end": 570
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 577,
          "end": 582
        },
        "start": 494,
        "end": 582
      },
      "declare": false,
      "start": 472,
      "end": 583
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X1",
        "optional": false,
        "typeAnnotation": null,
        "start": 590,
        "end": 592
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Issue1",
          "optional": false,
          "typeAnnotation": null,
          "start": 595,
          "end": 601
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 602,
                    "end": 603
                  },
                  "start": 602,
                  "end": 603
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 606,
                    "end": 607
                  },
                  "start": 606,
                  "end": 607
                }
              ],
              "start": 602,
              "end": 607
            },
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 609,
                    "end": 610
                  },
                  "start": 609,
                  "end": 610
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 613,
                    "end": 614
                  },
                  "start": 613,
                  "end": 614
                }
              ],
              "start": 609,
              "end": 614
            }
          ],
          "start": 601,
          "end": 615
        },
        "start": 595,
        "end": 615
      },
      "declare": false,
      "start": 585,
      "end": 616
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X2",
        "optional": false,
        "typeAnnotation": null,
        "start": 622,
        "end": 624
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Issue2",
          "optional": false,
          "typeAnnotation": null,
          "start": 627,
          "end": 633
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 634,
                    "end": 635
                  },
                  "start": 634,
                  "end": 635
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 638,
                    "end": 639
                  },
                  "start": 638,
                  "end": 639
                }
              ],
              "start": 634,
              "end": 639
            },
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 641,
                    "end": 642
                  },
                  "start": 641,
                  "end": 642
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 645,
                    "end": 646
                  },
                  "start": 645,
                  "end": 646
                }
              ],
              "start": 641,
              "end": 646
            }
          ],
          "start": 633,
          "end": 647
        },
        "start": 627,
        "end": 647
      },
      "declare": false,
      "start": 617,
      "end": 648
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X3",
        "optional": false,
        "typeAnnotation": null,
        "start": 654,
        "end": 656
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Issue3",
          "optional": false,
          "typeAnnotation": null,
          "start": 659,
          "end": 665
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 666,
                    "end": 667
                  },
                  "start": 666,
                  "end": 667
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 670,
                    "end": 671
                  },
                  "start": 670,
                  "end": 671
                }
              ],
              "start": 666,
              "end": 671
            },
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 673,
                    "end": 674
                  },
                  "start": 673,
                  "end": 674
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 677,
                    "end": 678
                  },
                  "start": 677,
                  "end": 678
                }
              ],
              "start": 673,
              "end": 678
            }
          ],
          "start": 665,
          "end": 679
        },
        "start": 659,
        "end": 679
      },
      "declare": false,
      "start": 649,
      "end": 680
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X4",
        "optional": false,
        "typeAnnotation": null,
        "start": 686,
        "end": 688
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Issue4",
          "optional": false,
          "typeAnnotation": null,
          "start": 691,
          "end": 697
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 698,
                    "end": 699
                  },
                  "start": 698,
                  "end": 699
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 702,
                    "end": 703
                  },
                  "start": 702,
                  "end": 703
                }
              ],
              "start": 698,
              "end": 703
            },
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 705,
                    "end": 706
                  },
                  "start": 705,
                  "end": 706
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 709,
                    "end": 710
                  },
                  "start": 709,
                  "end": 710
                }
              ],
              "start": 705,
              "end": 710
            }
          ],
          "start": 697,
          "end": 711
        },
        "start": 691,
        "end": 711
      },
      "declare": false,
      "start": 681,
      "end": 712
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 719,
        "end": 721
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
              "start": 722,
              "end": 723
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 732,
              "end": 738
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 722,
            "end": 738
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 740,
              "end": 741
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 750,
                "end": 751
              },
              "typeArguments": null,
              "start": 750,
              "end": 751
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 740,
            "end": 751
          }
        ],
        "start": 721,
        "end": 752
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 757,
            "end": 758
          },
          "typeArguments": null,
          "start": 757,
          "end": 758
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 767,
            "end": 768
          },
          "typeArguments": null,
          "start": 767,
          "end": 768
        },
        "trueType": {
          "type": "TSNeverKeyword",
          "start": 775,
          "end": 780
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Show",
            "optional": false,
            "typeAnnotation": null,
            "start": 787,
            "end": 791
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
                  "start": 792,
                  "end": 793
                },
                "typeArguments": null,
                "start": 792,
                "end": 793
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 795,
                  "end": 796
                },
                "typeArguments": null,
                "start": 795,
                "end": 796
              }
            ],
            "start": 791,
            "end": 797
          },
          "start": 787,
          "end": 797
        },
        "start": 757,
        "end": 797
      },
      "declare": false,
      "start": 714,
      "end": 798
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 815,
        "end": 817
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
              "start": 818,
              "end": 819
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 828,
              "end": 834
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 818,
            "end": 834
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 836,
              "end": 837
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 846,
                "end": 847
              },
              "typeArguments": null,
              "start": 846,
              "end": 847
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 836,
            "end": 847
          }
        ],
        "start": 817,
        "end": 848
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 853,
            "end": 854
          },
          "typeArguments": null,
          "start": 853,
          "end": 854
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 863,
            "end": 864
          },
          "typeArguments": null,
          "start": 863,
          "end": 864
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Show",
            "optional": false,
            "typeAnnotation": null,
            "start": 871,
            "end": 875
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
                  "start": 876,
                  "end": 877
                },
                "typeArguments": null,
                "start": 876,
                "end": 877
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 879,
                  "end": 880
                },
                "typeArguments": null,
                "start": 879,
                "end": 880
              }
            ],
            "start": 875,
            "end": 881
          },
          "start": 871,
          "end": 881
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 898,
          "end": 903
        },
        "start": 853,
        "end": 903
      },
      "declare": false,
      "start": 810,
      "end": 904
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 911,
        "end": 913
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
              "start": 914,
              "end": 915
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 914,
            "end": 915
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 917,
              "end": 918
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 927,
                "end": 928
              },
              "typeArguments": null,
              "start": 927,
              "end": 928
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 917,
            "end": 928
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 930,
              "end": 931
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 940,
                "end": 941
              },
              "typeArguments": null,
              "start": 940,
              "end": 941
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 930,
            "end": 941
          }
        ],
        "start": 913,
        "end": 942
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
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
        "extendsType": {
          "type": "TSUnknownKeyword",
          "start": 957,
          "end": 964
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Show",
            "optional": false,
            "typeAnnotation": null,
            "start": 971,
            "end": 975
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
                  "start": 976,
                  "end": 977
                },
                "typeArguments": null,
                "start": 976,
                "end": 977
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 979,
                  "end": 980
                },
                "typeArguments": null,
                "start": 979,
                "end": 980
              }
            ],
            "start": 975,
            "end": 981
          },
          "start": 971,
          "end": 981
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Show",
            "optional": false,
            "typeAnnotation": null,
            "start": 998,
            "end": 1002
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1003,
                  "end": 1004
                },
                "typeArguments": null,
                "start": 1003,
                "end": 1004
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1006,
                  "end": 1007
                },
                "typeArguments": null,
                "start": 1006,
                "end": 1007
              }
            ],
            "start": 1002,
            "end": 1008
          },
          "start": 998,
          "end": 1008
        },
        "start": 947,
        "end": 1008
      },
      "declare": false,
      "start": 906,
      "end": 1009
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1016,
        "end": 1018
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
              "start": 1019,
              "end": 1020
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1019,
            "end": 1020
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 1022,
              "end": 1023
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1032,
                "end": 1033
              },
              "typeArguments": null,
              "start": 1032,
              "end": 1033
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1022,
            "end": 1033
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 1035,
              "end": 1036
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1045,
                "end": 1046
              },
              "typeArguments": null,
              "start": 1045,
              "end": 1046
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1035,
            "end": 1046
          }
        ],
        "start": 1018,
        "end": 1047
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 1052,
            "end": 1053
          },
          "typeArguments": null,
          "start": 1052,
          "end": 1053
        },
        "extendsType": {
          "type": "TSUnknownKeyword",
          "start": 1062,
          "end": 1069
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 1076,
              "end": 1077
            },
            "typeArguments": null,
            "start": 1076,
            "end": 1077
          },
          "extendsType": {
            "type": "TSUnknownKeyword",
            "start": 1086,
            "end": 1093
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Show",
              "optional": false,
              "typeAnnotation": null,
              "start": 1102,
              "end": 1106
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
                    "start": 1107,
                    "end": 1108
                  },
                  "typeArguments": null,
                  "start": 1107,
                  "end": 1108
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1110,
                    "end": 1111
                  },
                  "typeArguments": null,
                  "start": 1110,
                  "end": 1111
                }
              ],
              "start": 1106,
              "end": 1112
            },
            "start": 1102,
            "end": 1112
          },
          "falseType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Show",
              "optional": false,
              "typeAnnotation": null,
              "start": 1131,
              "end": 1135
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1136,
                    "end": 1137
                  },
                  "typeArguments": null,
                  "start": 1136,
                  "end": 1137
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1139,
                    "end": 1140
                  },
                  "typeArguments": null,
                  "start": 1139,
                  "end": 1140
                }
              ],
              "start": 1135,
              "end": 1141
            },
            "start": 1131,
            "end": 1141
          },
          "start": 1076,
          "end": 1141
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1158,
          "end": 1163
        },
        "start": 1052,
        "end": 1163
      },
      "declare": false,
      "start": 1011,
      "end": 1164
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1171,
        "end": 1173
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
              "start": 1174,
              "end": 1175
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1184,
              "end": 1190
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1174,
            "end": 1190
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 1192,
              "end": 1193
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1202,
                "end": 1203
              },
              "typeArguments": null,
              "start": 1202,
              "end": 1203
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1192,
            "end": 1203
          }
        ],
        "start": 1173,
        "end": 1204
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1210,
                "end": 1211
              },
              "typeArguments": null,
              "start": 1210,
              "end": 1211
            }
          ],
          "start": 1209,
          "end": 1212
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1222,
                "end": 1223
              },
              "typeArguments": null,
              "start": 1222,
              "end": 1223
            }
          ],
          "start": 1221,
          "end": 1224
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Show",
            "optional": false,
            "typeAnnotation": null,
            "start": 1231,
            "end": 1235
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
                  "start": 1236,
                  "end": 1237
                },
                "typeArguments": null,
                "start": 1236,
                "end": 1237
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1239,
                  "end": 1240
                },
                "typeArguments": null,
                "start": 1239,
                "end": 1240
              }
            ],
            "start": 1235,
            "end": 1241
          },
          "start": 1231,
          "end": 1241
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 1248,
          "end": 1253
        },
        "start": 1209,
        "end": 1253
      },
      "declare": false,
      "start": 1166,
      "end": 1254
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IsReadonlyKeyOf",
        "optional": false,
        "typeAnnotation": null,
        "start": 1341,
        "end": 1356
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
              "start": 1357,
              "end": 1361
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 1370,
              "end": 1376
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1357,
            "end": 1376
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Key",
              "optional": false,
              "typeAnnotation": null,
              "start": 1378,
              "end": 1381
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1396,
                  "end": 1400
                },
                "typeArguments": null,
                "start": 1396,
                "end": 1400
              },
              "start": 1390,
              "end": 1400
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1378,
            "end": 1400
          }
        ],
        "start": 1356,
        "end": 1401
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IsAny",
            "optional": false,
            "typeAnnotation": null,
            "start": 1405,
            "end": 1410
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
                      "name": "Type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1411,
                      "end": 1415
                    },
                    "typeArguments": null,
                    "start": 1411,
                    "end": 1415
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1418,
                      "end": 1421
                    },
                    "typeArguments": null,
                    "start": 1418,
                    "end": 1421
                  }
                ],
                "start": 1411,
                "end": 1421
              }
            ],
            "start": 1410,
            "end": 1422
          },
          "start": 1405,
          "end": 1422
        },
        "extendsType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1431,
            "end": 1435
          },
          "start": 1431,
          "end": 1435
        },
        "trueType": {
          "type": "TSNeverKeyword",
          "start": 1438,
          "end": 1443
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Key",
              "optional": false,
              "typeAnnotation": null,
              "start": 1448,
              "end": 1451
            },
            "typeArguments": null,
            "start": 1448,
            "end": 1451
          },
          "extendsType": {
            "type": "TSUnknownKeyword",
            "start": 1460,
            "end": 1467
          },
          "trueType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Type",
                "optional": false,
                "typeAnnotation": null,
                "start": 1499,
                "end": 1503
              },
              "typeArguments": null,
              "start": 1499,
              "end": 1503
            },
            "extendsType": {
              "type": "TSUnknownKeyword",
              "start": 1512,
              "end": 1519
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IsEqual",
                "optional": false,
                "typeAnnotation": null,
                "start": 1553,
                "end": 1560
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSMappedType",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1569,
                      "end": 1570
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Key",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1574,
                        "end": 1577
                      },
                      "typeArguments": null,
                      "start": 1574,
                      "end": 1577
                    },
                    "nameType": null,
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Type",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1580,
                          "end": 1584
                        },
                        "typeArguments": null,
                        "start": 1580,
                        "end": 1584
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Key",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1585,
                          "end": 1588
                        },
                        "typeArguments": null,
                        "start": 1585,
                        "end": 1588
                      },
                      "start": 1580,
                      "end": 1589
                    },
                    "optional": false,
                    "readonly": null,
                    "start": 1567,
                    "end": 1590
                  },
                  {
                    "type": "TSMappedType",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1608,
                      "end": 1609
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Key",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1613,
                        "end": 1616
                      },
                      "typeArguments": null,
                      "start": 1613,
                      "end": 1616
                    },
                    "nameType": null,
                    "typeAnnotation": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Type",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1619,
                          "end": 1623
                        },
                        "typeArguments": null,
                        "start": 1619,
                        "end": 1623
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Key",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1624,
                          "end": 1627
                        },
                        "typeArguments": null,
                        "start": 1624,
                        "end": 1627
                      },
                      "start": 1619,
                      "end": 1628
                    },
                    "optional": false,
                    "readonly": true,
                    "start": 1597,
                    "end": 1629
                  }
                ],
                "start": 1560,
                "end": 1635
              },
              "start": 1553,
              "end": 1635
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 1642,
              "end": 1647
            },
            "start": 1499,
            "end": 1647
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1676,
            "end": 1681
          },
          "start": 1448,
          "end": 1681
        },
        "start": 1405,
        "end": 1681
      },
      "declare": false,
      "start": 1336,
      "end": 1682
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IsAny",
        "optional": false,
        "typeAnnotation": null,
        "start": 1712,
        "end": 1717
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
              "start": 1718,
              "end": 1719
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1718,
            "end": 1719
          }
        ],
        "start": 1717,
        "end": 1720
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 1723,
            "end": 1724
          },
          "start": 1723,
          "end": 1724
        },
        "extendsType": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1733,
                "end": 1734
              },
              "start": 1733,
              "end": 1734
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NoInfer",
                "optional": false,
                "typeAnnotation": null,
                "start": 1737,
                "end": 1744
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
                      "start": 1745,
                      "end": 1746
                    },
                    "typeArguments": null,
                    "start": 1745,
                    "end": 1746
                  }
                ],
                "start": 1744,
                "end": 1747
              },
              "start": 1737,
              "end": 1747
            }
          ],
          "start": 1733,
          "end": 1747
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1750,
            "end": 1754
          },
          "start": 1750,
          "end": 1754
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 1757,
            "end": 1762
          },
          "start": 1757,
          "end": 1762
        },
        "start": 1723,
        "end": 1762
      },
      "declare": false,
      "start": 1707,
      "end": 1763
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IsEqual",
        "optional": false,
        "typeAnnotation": null,
        "start": 1770,
        "end": 1777
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
              "start": 1778,
              "end": 1779
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1778,
            "end": 1779
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 1781,
              "end": 1782
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1781,
            "end": 1782
          }
        ],
        "start": 1777,
        "end": 1783
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1788,
                "end": 1789
              },
              "typeArguments": null,
              "start": 1788,
              "end": 1789
            }
          ],
          "start": 1787,
          "end": 1790
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1800,
                "end": 1801
              },
              "typeArguments": null,
              "start": 1800,
              "end": 1801
            }
          ],
          "start": 1799,
          "end": 1802
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1808,
                  "end": 1809
                },
                "typeArguments": null,
                "start": 1808,
                "end": 1809
              }
            ],
            "start": 1807,
            "end": 1810
          },
          "extendsType": {
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
                  "start": 1820,
                  "end": 1821
                },
                "typeArguments": null,
                "start": 1820,
                "end": 1821
              }
            ],
            "start": 1819,
            "end": 1822
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "_IsEqual",
              "optional": false,
              "typeAnnotation": null,
              "start": 1828,
              "end": 1836
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
                    "start": 1837,
                    "end": 1838
                  },
                  "typeArguments": null,
                  "start": 1837,
                  "end": 1838
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1840,
                    "end": 1841
                  },
                  "typeArguments": null,
                  "start": 1840,
                  "end": 1841
                }
              ],
              "start": 1836,
              "end": 1842
            },
            "start": 1828,
            "end": 1842
          },
          "falseType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 1848,
              "end": 1853
            },
            "start": 1848,
            "end": 1853
          },
          "start": 1807,
          "end": 1853
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 1858,
            "end": 1863
          },
          "start": 1858,
          "end": 1863
        },
        "start": 1787,
        "end": 1863
      },
      "declare": false,
      "start": 1765,
      "end": 1864
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_IsEqual",
        "optional": false,
        "typeAnnotation": null,
        "start": 1871,
        "end": 1879
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
              "start": 1880,
              "end": 1881
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1880,
            "end": 1881
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 1883,
              "end": 1884
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1883,
            "end": 1884
          }
        ],
        "start": 1879,
        "end": 1885
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
                  "start": 1891,
                  "end": 1892
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 1891,
                "end": 1892
              }
            ],
            "start": 1890,
            "end": 1893
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
                  "start": 1899,
                  "end": 1900
                },
                "typeArguments": null,
                "start": 1899,
                "end": 1900
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
                          "start": 1909,
                          "end": 1910
                        },
                        "typeArguments": null,
                        "start": 1909,
                        "end": 1910
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "G",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1913,
                          "end": 1914
                        },
                        "typeArguments": null,
                        "start": 1913,
                        "end": 1914
                      }
                    ],
                    "start": 1909,
                    "end": 1914
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "G",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1917,
                      "end": 1918
                    },
                    "typeArguments": null,
                    "start": 1917,
                    "end": 1918
                  }
                ],
                "start": 1909,
                "end": 1918
              },
              "trueType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1921,
                  "end": 1922
                },
                "start": 1921,
                "end": 1922
              },
              "falseType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1925,
                  "end": 1926
                },
                "start": 1925,
                "end": 1926
              },
              "start": 1899,
              "end": 1926
            },
            "start": 1896,
            "end": 1926
          },
          "start": 1890,
          "end": 1926
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
                  "start": 1939,
                  "end": 1940
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 1939,
                "end": 1940
              }
            ],
            "start": 1938,
            "end": 1941
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
                  "start": 1947,
                  "end": 1948
                },
                "typeArguments": null,
                "start": 1947,
                "end": 1948
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
                          "start": 1957,
                          "end": 1958
                        },
                        "typeArguments": null,
                        "start": 1957,
                        "end": 1958
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "G",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1961,
                          "end": 1962
                        },
                        "typeArguments": null,
                        "start": 1961,
                        "end": 1962
                      }
                    ],
                    "start": 1957,
                    "end": 1962
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "G",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1965,
                      "end": 1966
                    },
                    "typeArguments": null,
                    "start": 1965,
                    "end": 1966
                  }
                ],
                "start": 1957,
                "end": 1966
              },
              "trueType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1969,
                  "end": 1970
                },
                "start": 1969,
                "end": 1970
              },
              "falseType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1973,
                  "end": 1974
                },
                "start": 1973,
                "end": 1974
              },
              "start": 1947,
              "end": 1974
            },
            "start": 1944,
            "end": 1974
          },
          "start": 1938,
          "end": 1974
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1980,
            "end": 1984
          },
          "start": 1980,
          "end": 1984
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 1989,
            "end": 1994
          },
          "start": 1989,
          "end": 1994
        },
        "start": 1889,
        "end": 1994
      },
      "declare": false,
      "start": 1866,
      "end": 1995
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T10",
        "optional": false,
        "typeAnnotation": null,
        "start": 2002,
        "end": 2005
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "IsReadonlyKeyOf",
          "optional": false,
          "typeAnnotation": null,
          "start": 2008,
          "end": 2023
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2026,
                    "end": 2027
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2029,
                      "end": 2035
                    },
                    "start": 2027,
                    "end": 2035
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2026,
                  "end": 2035
                }
              ],
              "start": 2024,
              "end": 2037
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 2039,
                "end": 2042
              },
              "start": 2039,
              "end": 2042
            }
          ],
          "start": 2023,
          "end": 2043
        },
        "start": 2008,
        "end": 2043
      },
      "declare": false,
      "start": 1997,
      "end": 2044
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2060,
        "end": 2063
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "IsReadonlyKeyOf",
          "optional": false,
          "typeAnnotation": null,
          "start": 2066,
          "end": 2081
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
                  "readonly": true,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2093,
                    "end": 2094
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2096,
                      "end": 2102
                    },
                    "start": 2094,
                    "end": 2102
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2084,
                  "end": 2102
                }
              ],
              "start": 2082,
              "end": 2104
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "b",
                "raw": "'b'",
                "start": 2106,
                "end": 2109
              },
              "start": 2106,
              "end": 2109
            }
          ],
          "start": 2081,
          "end": 2110
        },
        "start": 2066,
        "end": 2110
      },
      "declare": false,
      "start": 2055,
      "end": 2111
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 2120
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 57,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "Show",
    "start": 62,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 70,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 72,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "B",
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
    "value": "&",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 99,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "Issue1",
    "start": 104,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 114,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 116,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "A",
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
    "value": "unknown",
    "start": 141,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 155,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 157,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 165,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "Show",
    "start": 183,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 214,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 226,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 234,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "Issue2",
    "start": 239,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 249,
    "end": 250
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 251,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 266,
    "end": 267
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 268,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 276,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 290,
    "end": 291
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 292,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 300,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "Show",
    "start": 318,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 349,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 361,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 369,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "Issue3",
    "start": 374,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 391,
    "end": 392
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 393,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "B",
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
    "value": "A",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "Show",
    "start": 431,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 452,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 464,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 472,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "Issue4",
    "start": 477,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 494,
    "end": 495
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 496,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 512,
    "end": 513
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 514,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "B",
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
    "type": "Identifier",
    "value": "Show",
    "start": 534,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 538,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 545,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 565,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 577,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 582,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 585,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "X1",
    "start": 590,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 593,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "Issue1",
    "start": 595,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 601,
    "end": 602
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 604,
    "end": 605
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 607,
    "end": 608
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 611,
    "end": 612
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 617,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "X2",
    "start": 622,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "Issue2",
    "start": 627,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 633,
    "end": 634
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 636,
    "end": 637
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 639,
    "end": 640
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 643,
    "end": 644
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 649,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "X3",
    "start": 654,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "Issue3",
    "start": 659,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 665,
    "end": 666
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 668,
    "end": 669
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 671,
    "end": 672
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 675,
    "end": 676
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 677,
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
    "value": ";",
    "start": 679,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 681,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "X4",
    "start": 686,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 689,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "Issue4",
    "start": 691,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 697,
    "end": 698
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 700,
    "end": 701
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 703,
    "end": 704
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 707,
    "end": 708
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 711,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 714,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 719,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 721,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "A",
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
    "value": "number",
    "start": 732,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 738,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 740,
    "end": 741
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 742,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 757,
    "end": 758
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 759,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 769,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 775,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 781,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "Show",
    "start": 787,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 791,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 792,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 793,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 797,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 810,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 815,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 817,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 818,
    "end": 819
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 820,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 828,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 834,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 836,
    "end": 837
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 838,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 849,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 853,
    "end": 854
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 855,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 865,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "Show",
    "start": 871,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 875,
    "end": 876
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 876,
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
    "value": "B",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 882,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 898,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 903,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 906,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 911,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 913,
    "end": 914
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 914,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 915,
    "end": 916
  },
  {
    "type": "Identifier",
    "value": "B",
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
    "value": "A",
    "start": 927,
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
    "value": "C",
    "start": 930,
    "end": 931
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 932,
    "end": 939
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 943,
    "end": 944
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 947,
    "end": 948
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 949,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 957,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 965,
    "end": 966
  },
  {
    "type": "Identifier",
    "value": "Show",
    "start": 971,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 975,
    "end": 976
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 977,
    "end": 978
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 979,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 980,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 982,
    "end": 983
  },
  {
    "type": "Identifier",
    "value": "Show",
    "start": 998,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1011,
    "end": 1015
  },
  {
    "type": "Identifier",
    "value": "T4",
    "start": 1016,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1024,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1037,
    "end": 1044
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1054,
    "end": 1061
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1062,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1078,
    "end": 1085
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1086,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Identifier",
    "value": "Show",
    "start": 1102,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Identifier",
    "value": "Show",
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
    "value": "B",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Identifier",
    "value": "C",
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
    "value": ":",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1158,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1166,
    "end": 1170
  },
  {
    "type": "Identifier",
    "value": "T5",
    "start": 1171,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1176,
    "end": 1183
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1184,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1194,
    "end": 1201
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1213,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Identifier",
    "value": "Show",
    "start": 1231,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1248,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1336,
    "end": 1340
  },
  {
    "type": "Identifier",
    "value": "IsReadonlyKeyOf",
    "start": 1341,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 1357,
    "end": 1361
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1362,
    "end": 1369
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 1370,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 1378,
    "end": 1381
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1382,
    "end": 1389
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1390,
    "end": 1395
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 1396,
    "end": 1400
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1400,
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
    "value": "IsAny",
    "start": 1405,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 1411,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 1418,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1423,
    "end": 1430
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1431,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1438,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 1448,
    "end": 1451
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1452,
    "end": 1459
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1460,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 1499,
    "end": 1503
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1504,
    "end": 1511
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1512,
    "end": 1519
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Identifier",
    "value": "IsEqual",
    "start": 1553,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1567,
    "end": 1568
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1571,
    "end": 1573
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 1574,
    "end": 1577
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1578,
    "end": 1579
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 1580,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 1585,
    "end": 1588
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1598,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1610,
    "end": 1612
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 1613,
    "end": 1616
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 1619,
    "end": 1623
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 1624,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1642,
    "end": 1647
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1674,
    "end": 1675
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1676,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1707,
    "end": 1711
  },
  {
    "type": "Identifier",
    "value": "IsAny",
    "start": 1712,
    "end": 1717
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1717,
    "end": 1718
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1721,
    "end": 1722
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1725,
    "end": 1732
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1733,
    "end": 1734
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Identifier",
    "value": "NoInfer",
    "start": 1737,
    "end": 1744
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1744,
    "end": 1745
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1745,
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
    "value": "?",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1750,
    "end": 1754
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1757,
    "end": 1762
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1762,
    "end": 1763
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1765,
    "end": 1769
  },
  {
    "type": "Identifier",
    "value": "IsEqual",
    "start": 1770,
    "end": 1777
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1778,
    "end": 1779
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1779,
    "end": 1780
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1781,
    "end": 1782
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1784,
    "end": 1785
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1787,
    "end": 1788
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1791,
    "end": 1798
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1799,
    "end": 1800
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1807,
    "end": 1808
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1811,
    "end": 1818
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1820,
    "end": 1821
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Identifier",
    "value": "_IsEqual",
    "start": 1828,
    "end": 1836
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1838,
    "end": 1839
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1840,
    "end": 1841
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1848,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1856,
    "end": 1857
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1858,
    "end": 1863
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1863,
    "end": 1864
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1866,
    "end": 1870
  },
  {
    "type": "Identifier",
    "value": "_IsEqual",
    "start": 1871,
    "end": 1879
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1879,
    "end": 1880
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1880,
    "end": 1881
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1883,
    "end": 1884
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1884,
    "end": 1885
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1889,
    "end": 1890
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1890,
    "end": 1891
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1892,
    "end": 1893
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1893,
    "end": 1894
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1894,
    "end": 1895
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1896,
    "end": 1898
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 1899,
    "end": 1900
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1901,
    "end": 1908
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1909,
    "end": 1910
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 1913,
    "end": 1914
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1915,
    "end": 1916
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 1917,
    "end": 1918
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1919,
    "end": 1920
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1921,
    "end": 1922
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1926,
    "end": 1927
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1928,
    "end": 1935
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1938,
    "end": 1939
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 1939,
    "end": 1940
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1940,
    "end": 1941
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1941,
    "end": 1942
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1942,
    "end": 1943
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1944,
    "end": 1946
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 1947,
    "end": 1948
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1949,
    "end": 1956
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1957,
    "end": 1958
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1959,
    "end": 1960
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 1961,
    "end": 1962
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1963,
    "end": 1964
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 1965,
    "end": 1966
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1969,
    "end": 1970
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1971,
    "end": 1972
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1973,
    "end": 1974
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1974,
    "end": 1975
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1978,
    "end": 1979
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1980,
    "end": 1984
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1987,
    "end": 1988
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1989,
    "end": 1994
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1997,
    "end": 2001
  },
  {
    "type": "Identifier",
    "value": "T10",
    "start": 2002,
    "end": 2005
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "Identifier",
    "value": "IsReadonlyKeyOf",
    "start": 2008,
    "end": 2023
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2023,
    "end": 2024
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2024,
    "end": 2025
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2026,
    "end": 2027
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2027,
    "end": 2028
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2029,
    "end": 2035
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "String",
    "value": "'a'",
    "start": 2039,
    "end": 2042
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2042,
    "end": 2043
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2043,
    "end": 2044
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2055,
    "end": 2059
  },
  {
    "type": "Identifier",
    "value": "T11",
    "start": 2060,
    "end": 2063
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2064,
    "end": 2065
  },
  {
    "type": "Identifier",
    "value": "IsReadonlyKeyOf",
    "start": 2066,
    "end": 2081
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2081,
    "end": 2082
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2082,
    "end": 2083
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 2084,
    "end": 2092
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2093,
    "end": 2094
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2094,
    "end": 2095
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2096,
    "end": 2102
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2103,
    "end": 2104
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2104,
    "end": 2105
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 2106,
    "end": 2109
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2109,
    "end": 2110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2110,
    "end": 2111
  }
]
```
