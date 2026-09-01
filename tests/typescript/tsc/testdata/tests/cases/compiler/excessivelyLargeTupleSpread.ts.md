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
        "name": "BuildTuple",
        "optional": false,
        "typeAnnotation": null,
        "start": 16,
        "end": 26
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "L",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 28
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 37,
              "end": 43
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 27,
            "end": 43
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 45,
              "end": 46
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 55,
                "end": 58
              },
              "start": 55,
              "end": 60
            },
            "default": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSAnyKeyword",
                  "start": 64,
                  "end": 67
                }
              ],
              "start": 63,
              "end": 68
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 45,
            "end": 68
          }
        ],
        "start": 26,
        "end": 69
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 78
            },
            "typeArguments": null,
            "start": 77,
            "end": 78
          },
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "length",
              "raw": "'length'",
              "start": 79,
              "end": 87
            },
            "start": 79,
            "end": 87
          },
          "start": 77,
          "end": 88
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "L",
            "optional": false,
            "typeAnnotation": null,
            "start": 97,
            "end": 98
          },
          "typeArguments": null,
          "start": 97,
          "end": 98
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 101,
            "end": 102
          },
          "typeArguments": null,
          "start": 101,
          "end": 102
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "BuildTuple",
            "optional": false,
            "typeAnnotation": null,
            "start": 105,
            "end": 115
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "L",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 116,
                  "end": 117
                },
                "typeArguments": null,
                "start": 116,
                "end": 117
              },
              {
                "type": "TSTupleType",
                "elementTypes": [
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
                        "start": 123,
                        "end": 124
                      },
                      "typeArguments": null,
                      "start": 123,
                      "end": 124
                    },
                    "start": 120,
                    "end": 124
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
                        "start": 129,
                        "end": 130
                      },
                      "typeArguments": null,
                      "start": 129,
                      "end": 130
                    },
                    "start": 126,
                    "end": 130
                  }
                ],
                "start": 119,
                "end": 131
              }
            ],
            "start": 115,
            "end": 132
          },
          "start": 105,
          "end": 132
        },
        "start": 77,
        "end": 132
      },
      "declare": false,
      "start": 11,
      "end": 133
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 140,
        "end": 141
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "BuildTuple",
          "optional": false,
          "typeAnnotation": null,
          "start": 144,
          "end": 154
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 155,
                "end": 156
              },
              "start": 155,
              "end": 156
            }
          ],
          "start": 154,
          "end": 157
        },
        "start": 144,
        "end": 157
      },
      "declare": false,
      "start": 135,
      "end": 157
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T0",
        "optional": false,
        "typeAnnotation": null,
        "start": 164,
        "end": 166
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSAnyKeyword",
            "start": 170,
            "end": 173
          }
        ],
        "start": 169,
        "end": 174
      },
      "declare": false,
      "start": 159,
      "end": 175
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 181,
        "end": 183
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T0",
                "optional": false,
                "typeAnnotation": null,
                "start": 190,
                "end": 192
              },
              "typeArguments": null,
              "start": 190,
              "end": 192
            },
            "start": 187,
            "end": 192
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T0",
                "optional": false,
                "typeAnnotation": null,
                "start": 197,
                "end": 199
              },
              "typeArguments": null,
              "start": 197,
              "end": 199
            },
            "start": 194,
            "end": 199
          }
        ],
        "start": 186,
        "end": 200
      },
      "declare": false,
      "start": 176,
      "end": 201
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 207,
        "end": 209
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T1",
                "optional": false,
                "typeAnnotation": null,
                "start": 216,
                "end": 218
              },
              "typeArguments": null,
              "start": 216,
              "end": 218
            },
            "start": 213,
            "end": 218
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T1",
                "optional": false,
                "typeAnnotation": null,
                "start": 223,
                "end": 225
              },
              "typeArguments": null,
              "start": 223,
              "end": 225
            },
            "start": 220,
            "end": 225
          }
        ],
        "start": 212,
        "end": 226
      },
      "declare": false,
      "start": 202,
      "end": 227
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 233,
        "end": 235
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T2",
                "optional": false,
                "typeAnnotation": null,
                "start": 242,
                "end": 244
              },
              "typeArguments": null,
              "start": 242,
              "end": 244
            },
            "start": 239,
            "end": 244
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T2",
                "optional": false,
                "typeAnnotation": null,
                "start": 249,
                "end": 251
              },
              "typeArguments": null,
              "start": 249,
              "end": 251
            },
            "start": 246,
            "end": 251
          }
        ],
        "start": 238,
        "end": 252
      },
      "declare": false,
      "start": 228,
      "end": 253
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T4",
        "optional": false,
        "typeAnnotation": null,
        "start": 259,
        "end": 261
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T3",
                "optional": false,
                "typeAnnotation": null,
                "start": 268,
                "end": 270
              },
              "typeArguments": null,
              "start": 268,
              "end": 270
            },
            "start": 265,
            "end": 270
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T3",
                "optional": false,
                "typeAnnotation": null,
                "start": 275,
                "end": 277
              },
              "typeArguments": null,
              "start": 275,
              "end": 277
            },
            "start": 272,
            "end": 277
          }
        ],
        "start": 264,
        "end": 278
      },
      "declare": false,
      "start": 254,
      "end": 279
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T5",
        "optional": false,
        "typeAnnotation": null,
        "start": 285,
        "end": 287
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T4",
                "optional": false,
                "typeAnnotation": null,
                "start": 294,
                "end": 296
              },
              "typeArguments": null,
              "start": 294,
              "end": 296
            },
            "start": 291,
            "end": 296
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T4",
                "optional": false,
                "typeAnnotation": null,
                "start": 301,
                "end": 303
              },
              "typeArguments": null,
              "start": 301,
              "end": 303
            },
            "start": 298,
            "end": 303
          }
        ],
        "start": 290,
        "end": 304
      },
      "declare": false,
      "start": 280,
      "end": 305
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T6",
        "optional": false,
        "typeAnnotation": null,
        "start": 311,
        "end": 313
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T5",
                "optional": false,
                "typeAnnotation": null,
                "start": 320,
                "end": 322
              },
              "typeArguments": null,
              "start": 320,
              "end": 322
            },
            "start": 317,
            "end": 322
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T5",
                "optional": false,
                "typeAnnotation": null,
                "start": 327,
                "end": 329
              },
              "typeArguments": null,
              "start": 327,
              "end": 329
            },
            "start": 324,
            "end": 329
          }
        ],
        "start": 316,
        "end": 330
      },
      "declare": false,
      "start": 306,
      "end": 331
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T7",
        "optional": false,
        "typeAnnotation": null,
        "start": 337,
        "end": 339
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T6",
                "optional": false,
                "typeAnnotation": null,
                "start": 346,
                "end": 348
              },
              "typeArguments": null,
              "start": 346,
              "end": 348
            },
            "start": 343,
            "end": 348
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T6",
                "optional": false,
                "typeAnnotation": null,
                "start": 353,
                "end": 355
              },
              "typeArguments": null,
              "start": 353,
              "end": 355
            },
            "start": 350,
            "end": 355
          }
        ],
        "start": 342,
        "end": 356
      },
      "declare": false,
      "start": 332,
      "end": 357
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T8",
        "optional": false,
        "typeAnnotation": null,
        "start": 363,
        "end": 365
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T7",
                "optional": false,
                "typeAnnotation": null,
                "start": 372,
                "end": 374
              },
              "typeArguments": null,
              "start": 372,
              "end": 374
            },
            "start": 369,
            "end": 374
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T7",
                "optional": false,
                "typeAnnotation": null,
                "start": 379,
                "end": 381
              },
              "typeArguments": null,
              "start": 379,
              "end": 381
            },
            "start": 376,
            "end": 381
          }
        ],
        "start": 368,
        "end": 382
      },
      "declare": false,
      "start": 358,
      "end": 383
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T9",
        "optional": false,
        "typeAnnotation": null,
        "start": 389,
        "end": 391
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T8",
                "optional": false,
                "typeAnnotation": null,
                "start": 398,
                "end": 400
              },
              "typeArguments": null,
              "start": 398,
              "end": 400
            },
            "start": 395,
            "end": 400
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T8",
                "optional": false,
                "typeAnnotation": null,
                "start": 405,
                "end": 407
              },
              "typeArguments": null,
              "start": 405,
              "end": 407
            },
            "start": 402,
            "end": 407
          }
        ],
        "start": 394,
        "end": 408
      },
      "declare": false,
      "start": 384,
      "end": 409
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T10",
        "optional": false,
        "typeAnnotation": null,
        "start": 415,
        "end": 418
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T9",
                "optional": false,
                "typeAnnotation": null,
                "start": 425,
                "end": 427
              },
              "typeArguments": null,
              "start": 425,
              "end": 427
            },
            "start": 422,
            "end": 427
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T9",
                "optional": false,
                "typeAnnotation": null,
                "start": 432,
                "end": 434
              },
              "typeArguments": null,
              "start": 432,
              "end": 434
            },
            "start": 429,
            "end": 434
          }
        ],
        "start": 421,
        "end": 435
      },
      "declare": false,
      "start": 410,
      "end": 436
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T11",
        "optional": false,
        "typeAnnotation": null,
        "start": 442,
        "end": 445
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T10",
                "optional": false,
                "typeAnnotation": null,
                "start": 452,
                "end": 455
              },
              "typeArguments": null,
              "start": 452,
              "end": 455
            },
            "start": 449,
            "end": 455
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T10",
                "optional": false,
                "typeAnnotation": null,
                "start": 460,
                "end": 463
              },
              "typeArguments": null,
              "start": 460,
              "end": 463
            },
            "start": 457,
            "end": 463
          }
        ],
        "start": 448,
        "end": 464
      },
      "declare": false,
      "start": 437,
      "end": 465
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T12",
        "optional": false,
        "typeAnnotation": null,
        "start": 471,
        "end": 474
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T11",
                "optional": false,
                "typeAnnotation": null,
                "start": 481,
                "end": 484
              },
              "typeArguments": null,
              "start": 481,
              "end": 484
            },
            "start": 478,
            "end": 484
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T11",
                "optional": false,
                "typeAnnotation": null,
                "start": 489,
                "end": 492
              },
              "typeArguments": null,
              "start": 489,
              "end": 492
            },
            "start": 486,
            "end": 492
          }
        ],
        "start": 477,
        "end": 493
      },
      "declare": false,
      "start": 466,
      "end": 494
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T13",
        "optional": false,
        "typeAnnotation": null,
        "start": 500,
        "end": 503
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T12",
                "optional": false,
                "typeAnnotation": null,
                "start": 510,
                "end": 513
              },
              "typeArguments": null,
              "start": 510,
              "end": 513
            },
            "start": 507,
            "end": 513
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T12",
                "optional": false,
                "typeAnnotation": null,
                "start": 518,
                "end": 521
              },
              "typeArguments": null,
              "start": 518,
              "end": 521
            },
            "start": 515,
            "end": 521
          }
        ],
        "start": 506,
        "end": 522
      },
      "declare": false,
      "start": 495,
      "end": 523
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T14",
        "optional": false,
        "typeAnnotation": null,
        "start": 529,
        "end": 532
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T13",
                "optional": false,
                "typeAnnotation": null,
                "start": 539,
                "end": 542
              },
              "typeArguments": null,
              "start": 539,
              "end": 542
            },
            "start": 536,
            "end": 542
          },
          {
            "type": "TSRestType",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T13",
                "optional": false,
                "typeAnnotation": null,
                "start": 547,
                "end": 550
              },
              "typeArguments": null,
              "start": 547,
              "end": 550
            },
            "start": 544,
            "end": 550
          }
        ],
        "start": 535,
        "end": 551
      },
      "declare": false,
      "start": 524,
      "end": 552
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
            "name": "a0",
            "optional": false,
            "typeAnnotation": null,
            "start": 577,
            "end": 579
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 583,
                  "end": 584
                }
              ],
              "start": 582,
              "end": 585
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 589,
                "end": 594
              },
              "typeArguments": null,
              "start": 589,
              "end": 594
            },
            "start": 582,
            "end": 594
          },
          "definite": false,
          "start": 577,
          "end": 594
        }
      ],
      "declare": false,
      "start": 571,
      "end": 595
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
            "name": "a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 602,
            "end": 604
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a0",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 611,
                    "end": 613
                  },
                  "start": 608,
                  "end": 613
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a0",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 618,
                    "end": 620
                  },
                  "start": 615,
                  "end": 620
                }
              ],
              "start": 607,
              "end": 621
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 625,
                "end": 630
              },
              "typeArguments": null,
              "start": 625,
              "end": 630
            },
            "start": 607,
            "end": 630
          },
          "definite": false,
          "start": 602,
          "end": 630
        }
      ],
      "declare": false,
      "start": 596,
      "end": 631
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
            "name": "a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 638,
            "end": 640
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 647,
                    "end": 649
                  },
                  "start": 644,
                  "end": 649
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 654,
                    "end": 656
                  },
                  "start": 651,
                  "end": 656
                }
              ],
              "start": 643,
              "end": 657
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 661,
                "end": 666
              },
              "typeArguments": null,
              "start": 661,
              "end": 666
            },
            "start": 643,
            "end": 666
          },
          "definite": false,
          "start": 638,
          "end": 666
        }
      ],
      "declare": false,
      "start": 632,
      "end": 667
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
            "name": "a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 674,
            "end": 676
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 683,
                    "end": 685
                  },
                  "start": 680,
                  "end": 685
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 690,
                    "end": 692
                  },
                  "start": 687,
                  "end": 692
                }
              ],
              "start": 679,
              "end": 693
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 697,
                "end": 702
              },
              "typeArguments": null,
              "start": 697,
              "end": 702
            },
            "start": 679,
            "end": 702
          },
          "definite": false,
          "start": 674,
          "end": 702
        }
      ],
      "declare": false,
      "start": 668,
      "end": 703
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
            "name": "a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 710,
            "end": 712
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 719,
                    "end": 721
                  },
                  "start": 716,
                  "end": 721
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 726,
                    "end": 728
                  },
                  "start": 723,
                  "end": 728
                }
              ],
              "start": 715,
              "end": 729
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 733,
                "end": 738
              },
              "typeArguments": null,
              "start": 733,
              "end": 738
            },
            "start": 715,
            "end": 738
          },
          "definite": false,
          "start": 710,
          "end": 738
        }
      ],
      "declare": false,
      "start": 704,
      "end": 739
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
            "name": "a5",
            "optional": false,
            "typeAnnotation": null,
            "start": 746,
            "end": 748
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 755,
                    "end": 757
                  },
                  "start": 752,
                  "end": 757
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 762,
                    "end": 764
                  },
                  "start": 759,
                  "end": 764
                }
              ],
              "start": 751,
              "end": 765
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 769,
                "end": 774
              },
              "typeArguments": null,
              "start": 769,
              "end": 774
            },
            "start": 751,
            "end": 774
          },
          "definite": false,
          "start": 746,
          "end": 774
        }
      ],
      "declare": false,
      "start": 740,
      "end": 775
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
            "name": "a6",
            "optional": false,
            "typeAnnotation": null,
            "start": 782,
            "end": 784
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 791,
                    "end": 793
                  },
                  "start": 788,
                  "end": 793
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 798,
                    "end": 800
                  },
                  "start": 795,
                  "end": 800
                }
              ],
              "start": 787,
              "end": 801
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 805,
                "end": 810
              },
              "typeArguments": null,
              "start": 805,
              "end": 810
            },
            "start": 787,
            "end": 810
          },
          "definite": false,
          "start": 782,
          "end": 810
        }
      ],
      "declare": false,
      "start": 776,
      "end": 811
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
            "name": "a7",
            "optional": false,
            "typeAnnotation": null,
            "start": 818,
            "end": 820
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 827,
                    "end": 829
                  },
                  "start": 824,
                  "end": 829
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 834,
                    "end": 836
                  },
                  "start": 831,
                  "end": 836
                }
              ],
              "start": 823,
              "end": 837
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 841,
                "end": 846
              },
              "typeArguments": null,
              "start": 841,
              "end": 846
            },
            "start": 823,
            "end": 846
          },
          "definite": false,
          "start": 818,
          "end": 846
        }
      ],
      "declare": false,
      "start": 812,
      "end": 847
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
            "name": "a8",
            "optional": false,
            "typeAnnotation": null,
            "start": 854,
            "end": 856
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 863,
                    "end": 865
                  },
                  "start": 860,
                  "end": 865
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 870,
                    "end": 872
                  },
                  "start": 867,
                  "end": 872
                }
              ],
              "start": 859,
              "end": 873
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 877,
                "end": 882
              },
              "typeArguments": null,
              "start": 877,
              "end": 882
            },
            "start": 859,
            "end": 882
          },
          "definite": false,
          "start": 854,
          "end": 882
        }
      ],
      "declare": false,
      "start": 848,
      "end": 883
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
            "name": "a9",
            "optional": false,
            "typeAnnotation": null,
            "start": 890,
            "end": 892
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a8",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 899,
                    "end": 901
                  },
                  "start": 896,
                  "end": 901
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a8",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 906,
                    "end": 908
                  },
                  "start": 903,
                  "end": 908
                }
              ],
              "start": 895,
              "end": 909
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 913,
                "end": 918
              },
              "typeArguments": null,
              "start": 913,
              "end": 918
            },
            "start": 895,
            "end": 918
          },
          "definite": false,
          "start": 890,
          "end": 918
        }
      ],
      "declare": false,
      "start": 884,
      "end": 919
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
            "name": "a10",
            "optional": false,
            "typeAnnotation": null,
            "start": 926,
            "end": 929
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a9",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 936,
                    "end": 938
                  },
                  "start": 933,
                  "end": 938
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a9",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 943,
                    "end": 945
                  },
                  "start": 940,
                  "end": 945
                }
              ],
              "start": 932,
              "end": 946
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 950,
                "end": 955
              },
              "typeArguments": null,
              "start": 950,
              "end": 955
            },
            "start": 932,
            "end": 955
          },
          "definite": false,
          "start": 926,
          "end": 955
        }
      ],
      "declare": false,
      "start": 920,
      "end": 956
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
            "name": "a11",
            "optional": false,
            "typeAnnotation": null,
            "start": 963,
            "end": 966
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a10",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 973,
                    "end": 976
                  },
                  "start": 970,
                  "end": 976
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a10",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 981,
                    "end": 984
                  },
                  "start": 978,
                  "end": 984
                }
              ],
              "start": 969,
              "end": 985
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 989,
                "end": 994
              },
              "typeArguments": null,
              "start": 989,
              "end": 994
            },
            "start": 969,
            "end": 994
          },
          "definite": false,
          "start": 963,
          "end": 994
        }
      ],
      "declare": false,
      "start": 957,
      "end": 995
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
            "name": "a12",
            "optional": false,
            "typeAnnotation": null,
            "start": 1002,
            "end": 1005
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a11",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1012,
                    "end": 1015
                  },
                  "start": 1009,
                  "end": 1015
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a11",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1020,
                    "end": 1023
                  },
                  "start": 1017,
                  "end": 1023
                }
              ],
              "start": 1008,
              "end": 1024
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 1028,
                "end": 1033
              },
              "typeArguments": null,
              "start": 1028,
              "end": 1033
            },
            "start": 1008,
            "end": 1033
          },
          "definite": false,
          "start": 1002,
          "end": 1033
        }
      ],
      "declare": false,
      "start": 996,
      "end": 1034
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
            "name": "a13",
            "optional": false,
            "typeAnnotation": null,
            "start": 1041,
            "end": 1044
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a12",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1051,
                    "end": 1054
                  },
                  "start": 1048,
                  "end": 1054
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a12",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1059,
                    "end": 1062
                  },
                  "start": 1056,
                  "end": 1062
                }
              ],
              "start": 1047,
              "end": 1063
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 1067,
                "end": 1072
              },
              "typeArguments": null,
              "start": 1067,
              "end": 1072
            },
            "start": 1047,
            "end": 1072
          },
          "definite": false,
          "start": 1041,
          "end": 1072
        }
      ],
      "declare": false,
      "start": 1035,
      "end": 1073
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
            "name": "a14",
            "optional": false,
            "typeAnnotation": null,
            "start": 1080,
            "end": 1083
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a13",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1090,
                    "end": 1093
                  },
                  "start": 1087,
                  "end": 1093
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a13",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1098,
                    "end": 1101
                  },
                  "start": 1095,
                  "end": 1101
                }
              ],
              "start": 1086,
              "end": 1102
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 1106,
                "end": 1111
              },
              "typeArguments": null,
              "start": 1106,
              "end": 1111
            },
            "start": 1086,
            "end": 1111
          },
          "definite": false,
          "start": 1080,
          "end": 1111
        }
      ],
      "declare": false,
      "start": 1074,
      "end": 1112
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 11,
  "end": 1129
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 11,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "BuildTuple",
    "start": 16,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "L",
    "start": 27,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 29,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 37,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 45,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 47,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 55,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 64,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 78,
    "end": 79
  },
  {
    "type": "String",
    "value": "'length'",
    "start": 79,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 89,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "L",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "BuildTuple",
    "start": 105,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "L",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 120,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 126,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 135,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 140,
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
    "value": "BuildTuple",
    "start": 144,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 154,
    "end": 155
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 159,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "T0",
    "start": 164,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 170,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 176,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 181,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 187,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "T0",
    "start": 190,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 194,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "T0",
    "start": 197,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 202,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 207,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 213,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 216,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 220,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 223,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 228,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 233,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 239,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 242,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 246,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 249,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 254,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "T4",
    "start": 259,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 265,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 268,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 272,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 275,
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
    "value": ";",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 280,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "T5",
    "start": 285,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 291,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "T4",
    "start": 294,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 298,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "T4",
    "start": 301,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 306,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "T6",
    "start": 311,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 317,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "T5",
    "start": 320,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 324,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "T5",
    "start": 327,
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
    "value": ";",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 332,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "T7",
    "start": 337,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 343,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "T6",
    "start": 346,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 350,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "T6",
    "start": 353,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 358,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "T8",
    "start": 363,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 369,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "T7",
    "start": 372,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 376,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "T7",
    "start": 379,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 384,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "T9",
    "start": 389,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 395,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "T8",
    "start": 398,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 402,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "T8",
    "start": 405,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 410,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "T10",
    "start": 415,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 422,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "T9",
    "start": 425,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 429,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "T9",
    "start": 432,
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
    "value": ";",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 437,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "T11",
    "start": 442,
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
    "value": "[",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 449,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "T10",
    "start": 452,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 457,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "T10",
    "start": 460,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 466,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "T12",
    "start": 471,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 478,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "T11",
    "start": 481,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 486,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "T11",
    "start": 489,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 495,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "T13",
    "start": 500,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 507,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "T12",
    "start": 510,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 515,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "T12",
    "start": 518,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 522,
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
    "value": "T14",
    "start": 529,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 536,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "T13",
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
    "type": "Punctuator",
    "value": "...",
    "start": 544,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "T13",
    "start": 547,
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
    "value": ";",
    "start": 551,
    "end": 552
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 571,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "a0",
    "start": 577,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 582,
    "end": 583
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 586,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 589,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 594,
    "end": 595
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 596,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 602,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 608,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "a0",
    "start": 611,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 615,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "a0",
    "start": 618,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 622,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 625,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 630,
    "end": 631
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 632,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 638,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 644,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 647,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 651,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 654,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 656,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 658,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 661,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 666,
    "end": 667
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 668,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 674,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 680,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 683,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 687,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 690,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 692,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 694,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 697,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 702,
    "end": 703
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 704,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 710,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 716,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 719,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 721,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 723,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 726,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 730,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 733,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 738,
    "end": 739
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 740,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 746,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 752,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 755,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 759,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 762,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 764,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 766,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 769,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 774,
    "end": 775
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 776,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 782,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 788,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 791,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 795,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 798,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 800,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 802,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 805,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 810,
    "end": 811
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 812,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "a7",
    "start": 818,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 823,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 824,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 827,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 831,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 834,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 838,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 841,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 846,
    "end": 847
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 848,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "a8",
    "start": 854,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 860,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "a7",
    "start": 863,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 867,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "a7",
    "start": 870,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 872,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 874,
    "end": 876
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 877,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 882,
    "end": 883
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 884,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "a9",
    "start": 890,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 895,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 896,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "a8",
    "start": 899,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 903,
    "end": 906
  },
  {
    "type": "Identifier",
    "value": "a8",
    "start": 906,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 908,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 910,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 913,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 918,
    "end": 919
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 920,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "a10",
    "start": 926,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 930,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 932,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 933,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "a9",
    "start": 936,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 938,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 940,
    "end": 943
  },
  {
    "type": "Identifier",
    "value": "a9",
    "start": 943,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 945,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 947,
    "end": 949
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 950,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 955,
    "end": 956
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 957,
    "end": 962
  },
  {
    "type": "Identifier",
    "value": "a11",
    "start": 963,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 967,
    "end": 968
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
    "value": "a10",
    "start": 973,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 978,
    "end": 981
  },
  {
    "type": "Identifier",
    "value": "a10",
    "start": 981,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 984,
    "end": 985
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 986,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 989,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 994,
    "end": 995
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 996,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "a12",
    "start": 1002,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1009,
    "end": 1012
  },
  {
    "type": "Identifier",
    "value": "a11",
    "start": 1012,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1017,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "a11",
    "start": 1020,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1025,
    "end": 1027
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1028,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1035,
    "end": 1040
  },
  {
    "type": "Identifier",
    "value": "a13",
    "start": 1041,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1048,
    "end": 1051
  },
  {
    "type": "Identifier",
    "value": "a12",
    "start": 1051,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1056,
    "end": 1059
  },
  {
    "type": "Identifier",
    "value": "a12",
    "start": 1059,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1064,
    "end": 1066
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1067,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1074,
    "end": 1079
  },
  {
    "type": "Identifier",
    "value": "a14",
    "start": 1080,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1087,
    "end": 1090
  },
  {
    "type": "Identifier",
    "value": "a13",
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
    "type": "Punctuator",
    "value": "...",
    "start": 1095,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "a13",
    "start": 1098,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1103,
    "end": 1105
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 1106,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1111,
    "end": 1112
  }
]
```
