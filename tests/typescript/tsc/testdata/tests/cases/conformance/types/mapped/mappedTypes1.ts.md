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
        "name": "Item",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 9
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
              "start": 14,
              "end": 15
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 17,
                "end": 23
              },
              "start": 15,
              "end": 23
            },
            "accessibility": null,
            "static": false,
            "start": 14,
            "end": 24
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
              "start": 25,
              "end": 26
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 28,
                "end": 34
              },
              "start": 26,
              "end": 34
            },
            "accessibility": null,
            "static": false,
            "start": 25,
            "end": 35
          },
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
              "start": 36,
              "end": 37
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 39,
                "end": 46
              },
              "start": 37,
              "end": 46
            },
            "accessibility": null,
            "static": false,
            "start": 36,
            "end": 46
          }
        ],
        "start": 12,
        "end": 48
      },
      "declare": false,
      "start": 0,
      "end": 49
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T00",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 59
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 65,
          "end": 66
        },
        "constraint": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "x",
                "raw": "\"x\"",
                "start": 70,
                "end": 73
              },
              "start": 70,
              "end": 73
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "y",
                "raw": "\"y\"",
                "start": 76,
                "end": 79
              },
              "start": 76,
              "end": 79
            }
          ],
          "start": 70,
          "end": 79
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 82,
          "end": 88
        },
        "optional": false,
        "readonly": null,
        "start": 62,
        "end": 90
      },
      "declare": false,
      "start": 51,
      "end": 91
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T01",
        "optional": false,
        "typeAnnotation": null,
        "start": 97,
        "end": 100
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 106,
          "end": 107
        },
        "constraint": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "x",
                "raw": "\"x\"",
                "start": 111,
                "end": 114
              },
              "start": 111,
              "end": 114
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "y",
                "raw": "\"y\"",
                "start": 117,
                "end": 120
              },
              "start": 117,
              "end": 120
            }
          ],
          "start": 111,
          "end": 120
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
            "start": 123,
            "end": 124
          },
          "typeArguments": null,
          "start": 123,
          "end": 124
        },
        "optional": false,
        "readonly": null,
        "start": 103,
        "end": 126
      },
      "declare": false,
      "start": 92,
      "end": 127
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T02",
        "optional": false,
        "typeAnnotation": null,
        "start": 133,
        "end": 136
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 142,
          "end": 143
        },
        "constraint": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 147,
                "end": 150
              },
              "start": 147,
              "end": 150
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "b",
                "raw": "\"b\"",
                "start": 153,
                "end": 156
              },
              "start": 153,
              "end": 156
            }
          ],
          "start": 147,
          "end": 156
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Item",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 163
            },
            "typeArguments": null,
            "start": 159,
            "end": 163
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 164,
              "end": 165
            },
            "typeArguments": null,
            "start": 164,
            "end": 165
          },
          "start": 159,
          "end": 166
        },
        "optional": false,
        "readonly": null,
        "start": 139,
        "end": 169
      },
      "declare": false,
      "start": 128,
      "end": 169
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T03",
        "optional": false,
        "typeAnnotation": null,
        "start": 175,
        "end": 178
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 184,
          "end": 185
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Item",
              "optional": false,
              "typeAnnotation": null,
              "start": 195,
              "end": 199
            },
            "typeArguments": null,
            "start": 195,
            "end": 199
          },
          "start": 189,
          "end": 199
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Date",
            "optional": false,
            "typeAnnotation": null,
            "start": 202,
            "end": 206
          },
          "typeArguments": null,
          "start": 202,
          "end": 206
        },
        "optional": false,
        "readonly": null,
        "start": 181,
        "end": 208
      },
      "declare": false,
      "start": 170,
      "end": 209
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T10",
        "optional": false,
        "typeAnnotation": null,
        "start": 216,
        "end": 219
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 225,
          "end": 226
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Item",
              "optional": false,
              "typeAnnotation": null,
              "start": 236,
              "end": 240
            },
            "typeArguments": null,
            "start": 236,
            "end": 240
          },
          "start": 230,
          "end": 240
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Item",
              "optional": false,
              "typeAnnotation": null,
              "start": 243,
              "end": 247
            },
            "typeArguments": null,
            "start": 243,
            "end": 247
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 248,
              "end": 249
            },
            "typeArguments": null,
            "start": 248,
            "end": 249
          },
          "start": 243,
          "end": 250
        },
        "optional": false,
        "readonly": null,
        "start": 222,
        "end": 252
      },
      "declare": false,
      "start": 211,
      "end": 253
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T11",
        "optional": false,
        "typeAnnotation": null,
        "start": 259,
        "end": 262
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 268,
          "end": 269
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Item",
              "optional": false,
              "typeAnnotation": null,
              "start": 279,
              "end": 283
            },
            "typeArguments": null,
            "start": 279,
            "end": 283
          },
          "start": 273,
          "end": 283
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Item",
              "optional": false,
              "typeAnnotation": null,
              "start": 287,
              "end": 291
            },
            "typeArguments": null,
            "start": 287,
            "end": 291
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 292,
              "end": 293
            },
            "typeArguments": null,
            "start": 292,
            "end": 293
          },
          "start": 287,
          "end": 294
        },
        "optional": true,
        "readonly": null,
        "start": 265,
        "end": 296
      },
      "declare": false,
      "start": 254,
      "end": 297
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T12",
        "optional": false,
        "typeAnnotation": null,
        "start": 303,
        "end": 306
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 321,
          "end": 322
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Item",
              "optional": false,
              "typeAnnotation": null,
              "start": 332,
              "end": 336
            },
            "typeArguments": null,
            "start": 332,
            "end": 336
          },
          "start": 326,
          "end": 336
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Item",
              "optional": false,
              "typeAnnotation": null,
              "start": 339,
              "end": 343
            },
            "typeArguments": null,
            "start": 339,
            "end": 343
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 344,
              "end": 345
            },
            "typeArguments": null,
            "start": 344,
            "end": 345
          },
          "start": 339,
          "end": 346
        },
        "optional": false,
        "readonly": true,
        "start": 309,
        "end": 348
      },
      "declare": false,
      "start": 298,
      "end": 349
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T13",
        "optional": false,
        "typeAnnotation": null,
        "start": 355,
        "end": 358
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 373,
          "end": 374
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Item",
              "optional": false,
              "typeAnnotation": null,
              "start": 384,
              "end": 388
            },
            "typeArguments": null,
            "start": 384,
            "end": 388
          },
          "start": 378,
          "end": 388
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Item",
              "optional": false,
              "typeAnnotation": null,
              "start": 392,
              "end": 396
            },
            "typeArguments": null,
            "start": 392,
            "end": 396
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 397,
              "end": 398
            },
            "typeArguments": null,
            "start": 397,
            "end": 398
          },
          "start": 392,
          "end": 399
        },
        "optional": true,
        "readonly": true,
        "start": 361,
        "end": 401
      },
      "declare": false,
      "start": 350,
      "end": 402
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T20",
        "optional": false,
        "typeAnnotation": null,
        "start": 409,
        "end": 412
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 418,
          "end": 419
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Item",
              "optional": false,
              "typeAnnotation": null,
              "start": 429,
              "end": 433
            },
            "typeArguments": null,
            "start": 429,
            "end": 433
          },
          "start": 423,
          "end": 433
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Item",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 436,
                  "end": 440
                },
                "typeArguments": null,
                "start": 436,
                "end": 440
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 441,
                  "end": 442
                },
                "typeArguments": null,
                "start": 441,
                "end": 442
              },
              "start": 436,
              "end": 443
            },
            {
              "type": "TSNullKeyword",
              "start": 446,
              "end": 450
            }
          ],
          "start": 436,
          "end": 450
        },
        "optional": false,
        "readonly": null,
        "start": 415,
        "end": 452
      },
      "declare": false,
      "start": 404,
      "end": 453
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T21",
        "optional": false,
        "typeAnnotation": null,
        "start": 459,
        "end": 462
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 468,
          "end": 469
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Item",
              "optional": false,
              "typeAnnotation": null,
              "start": 479,
              "end": 483
            },
            "typeArguments": null,
            "start": 479,
            "end": 483
          },
          "start": 473,
          "end": 483
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 486,
            "end": 491
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
                    "name": "Item",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 492,
                    "end": 496
                  },
                  "typeArguments": null,
                  "start": 492,
                  "end": 496
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 497,
                    "end": 498
                  },
                  "typeArguments": null,
                  "start": 497,
                  "end": 498
                },
                "start": 492,
                "end": 499
              }
            ],
            "start": 491,
            "end": 500
          },
          "start": 486,
          "end": 500
        },
        "optional": false,
        "readonly": null,
        "start": 465,
        "end": 502
      },
      "declare": false,
      "start": 454,
      "end": 503
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T30",
        "optional": false,
        "typeAnnotation": null,
        "start": 510,
        "end": 513
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 519,
          "end": 520
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 530,
            "end": 533
          },
          "start": 524,
          "end": 533
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 536,
          "end": 540
        },
        "optional": false,
        "readonly": null,
        "start": 516,
        "end": 542
      },
      "declare": false,
      "start": 505,
      "end": 543
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T31",
        "optional": false,
        "typeAnnotation": null,
        "start": 549,
        "end": 552
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 558,
          "end": 559
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 569,
            "end": 575
          },
          "start": 563,
          "end": 575
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 578,
          "end": 582
        },
        "optional": false,
        "readonly": null,
        "start": 555,
        "end": 584
      },
      "declare": false,
      "start": 544,
      "end": 585
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T32",
        "optional": false,
        "typeAnnotation": null,
        "start": 591,
        "end": 594
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 600,
          "end": 601
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 611,
            "end": 617
          },
          "start": 605,
          "end": 617
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 620,
          "end": 624
        },
        "optional": false,
        "readonly": null,
        "start": 597,
        "end": 626
      },
      "declare": false,
      "start": 586,
      "end": 627
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T33",
        "optional": false,
        "typeAnnotation": null,
        "start": 633,
        "end": 636
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 642,
          "end": 643
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSBooleanKeyword",
            "start": 653,
            "end": 660
          },
          "start": 647,
          "end": 660
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 663,
          "end": 667
        },
        "optional": false,
        "readonly": null,
        "start": 639,
        "end": 669
      },
      "declare": false,
      "start": 628,
      "end": 670
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T34",
        "optional": false,
        "typeAnnotation": null,
        "start": 676,
        "end": 679
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 685,
          "end": 686
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSUndefinedKeyword",
            "start": 696,
            "end": 705
          },
          "start": 690,
          "end": 705
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 708,
          "end": 712
        },
        "optional": false,
        "readonly": null,
        "start": 682,
        "end": 714
      },
      "declare": false,
      "start": 671,
      "end": 715
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T35",
        "optional": false,
        "typeAnnotation": null,
        "start": 721,
        "end": 724
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 730,
          "end": 731
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSNullKeyword",
            "start": 741,
            "end": 745
          },
          "start": 735,
          "end": 745
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 748,
          "end": 752
        },
        "optional": false,
        "readonly": null,
        "start": 727,
        "end": 754
      },
      "declare": false,
      "start": 716,
      "end": 755
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T36",
        "optional": false,
        "typeAnnotation": null,
        "start": 761,
        "end": 764
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 770,
          "end": 771
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 781,
            "end": 785
          },
          "start": 775,
          "end": 785
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 788,
          "end": 792
        },
        "optional": false,
        "readonly": null,
        "start": 767,
        "end": 794
      },
      "declare": false,
      "start": 756,
      "end": 795
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T37",
        "optional": false,
        "typeAnnotation": null,
        "start": 801,
        "end": 804
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 810,
          "end": 811
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSSymbolKeyword",
            "start": 821,
            "end": 827
          },
          "start": 815,
          "end": 827
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 830,
          "end": 834
        },
        "optional": false,
        "readonly": null,
        "start": 807,
        "end": 836
      },
      "declare": false,
      "start": 796,
      "end": 837
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T38",
        "optional": false,
        "typeAnnotation": null,
        "start": 843,
        "end": 846
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 852,
          "end": 853
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSNeverKeyword",
            "start": 863,
            "end": 868
          },
          "start": 857,
          "end": 868
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 871,
          "end": 875
        },
        "optional": false,
        "readonly": null,
        "start": 849,
        "end": 877
      },
      "declare": false,
      "start": 838,
      "end": 878
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T40",
        "optional": false,
        "typeAnnotation": null,
        "start": 885,
        "end": 888
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 894,
          "end": 895
        },
        "constraint": {
          "type": "TSStringKeyword",
          "start": 899,
          "end": 905
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 908,
          "end": 912
        },
        "optional": false,
        "readonly": null,
        "start": 891,
        "end": 914
      },
      "declare": false,
      "start": 880,
      "end": 915
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T43",
        "optional": false,
        "typeAnnotation": null,
        "start": 921,
        "end": 924
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 930,
          "end": 931
        },
        "constraint": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 935,
                "end": 938
              },
              "start": 935,
              "end": 938
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "b",
                "raw": "\"b\"",
                "start": 941,
                "end": 944
              },
              "start": 941,
              "end": 944
            }
          ],
          "start": 935,
          "end": 944
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 947,
          "end": 951
        },
        "optional": false,
        "readonly": null,
        "start": 927,
        "end": 953
      },
      "declare": false,
      "start": 916,
      "end": 954
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T44",
        "optional": false,
        "typeAnnotation": null,
        "start": 960,
        "end": 963
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 969,
          "end": 970
        },
        "constraint": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 974,
                "end": 977
              },
              "start": 974,
              "end": 977
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "b",
                "raw": "\"b\"",
                "start": 980,
                "end": 983
              },
              "start": 980,
              "end": 983
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "0",
                "raw": "\"0\"",
                "start": 986,
                "end": 989
              },
              "start": 986,
              "end": 989
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "1",
                "raw": "\"1\"",
                "start": 992,
                "end": 995
              },
              "start": 992,
              "end": 995
            }
          ],
          "start": 974,
          "end": 995
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 998,
          "end": 1002
        },
        "optional": false,
        "readonly": null,
        "start": 966,
        "end": 1004
      },
      "declare": false,
      "start": 955,
      "end": 1005
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T47",
        "optional": false,
        "typeAnnotation": null,
        "start": 1011,
        "end": 1014
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 1020,
          "end": 1021
        },
        "constraint": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 1025,
              "end": 1031
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 1034,
                "end": 1037
              },
              "start": 1034,
              "end": 1037
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "b",
                "raw": "\"b\"",
                "start": 1040,
                "end": 1043
              },
              "start": 1040,
              "end": 1043
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "0",
                "raw": "\"0\"",
                "start": 1046,
                "end": 1049
              },
              "start": 1046,
              "end": 1049
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "1",
                "raw": "\"1\"",
                "start": 1052,
                "end": 1055
              },
              "start": 1052,
              "end": 1055
            }
          ],
          "start": 1025,
          "end": 1055
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1058,
          "end": 1062
        },
        "optional": false,
        "readonly": null,
        "start": 1017,
        "end": 1064
      },
      "declare": false,
      "start": 1006,
      "end": 1065
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1084,
        "end": 1086
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
              "name": "T1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1087,
              "end": 1089
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1087,
            "end": 1089
          }
        ],
        "start": 1086,
        "end": 1090
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 1097,
            "end": 1098
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1108,
                "end": 1110
              },
              "typeArguments": null,
              "start": 1108,
              "end": 1110
            },
            "start": 1102,
            "end": 1110
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 1113,
            "end": 1117
          },
          "optional": false,
          "readonly": null,
          "start": 1094,
          "end": 1119
        },
        "start": 1092,
        "end": 1119
      },
      "body": null,
      "expression": false,
      "start": 1067,
      "end": 1120
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1138,
        "end": 1140
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
              "name": "T1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1141,
              "end": 1143
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1152,
              "end": 1158
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1141,
            "end": 1158
          }
        ],
        "start": 1140,
        "end": 1159
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 1166,
            "end": 1167
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1177,
                "end": 1179
              },
              "typeArguments": null,
              "start": 1177,
              "end": 1179
            },
            "start": 1171,
            "end": 1179
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 1182,
            "end": 1186
          },
          "optional": false,
          "readonly": null,
          "start": 1163,
          "end": 1188
        },
        "start": 1161,
        "end": 1188
      },
      "body": null,
      "expression": false,
      "start": 1121,
      "end": 1189
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1207,
        "end": 1209
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
              "name": "T1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1210,
              "end": 1212
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1221,
              "end": 1227
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1210,
            "end": 1227
          }
        ],
        "start": 1209,
        "end": 1228
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 1235,
            "end": 1236
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1246,
                "end": 1248
              },
              "typeArguments": null,
              "start": 1246,
              "end": 1248
            },
            "start": 1240,
            "end": 1248
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 1251,
            "end": 1255
          },
          "optional": false,
          "readonly": null,
          "start": 1232,
          "end": 1257
        },
        "start": 1230,
        "end": 1257
      },
      "body": null,
      "expression": false,
      "start": 1190,
      "end": 1258
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1276,
        "end": 1278
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
              "name": "T1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1279,
              "end": 1281
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Number",
                "optional": false,
                "typeAnnotation": null,
                "start": 1290,
                "end": 1296
              },
              "typeArguments": null,
              "start": 1290,
              "end": 1296
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1279,
            "end": 1296
          }
        ],
        "start": 1278,
        "end": 1297
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 1304,
            "end": 1305
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1315,
                "end": 1317
              },
              "typeArguments": null,
              "start": 1315,
              "end": 1317
            },
            "start": 1309,
            "end": 1317
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 1320,
            "end": 1324
          },
          "optional": false,
          "readonly": null,
          "start": 1301,
          "end": 1326
        },
        "start": 1299,
        "end": 1326
      },
      "body": null,
      "expression": false,
      "start": 1259,
      "end": 1327
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1333,
            "end": 1335
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1338,
              "end": 1340
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1338,
            "end": 1342
          },
          "definite": false,
          "start": 1333,
          "end": 1342
        }
      ],
      "declare": false,
      "start": 1329,
      "end": 1343
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
            "start": 1348,
            "end": 1350
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1353,
              "end": 1355
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1353,
            "end": 1357
          },
          "definite": false,
          "start": 1348,
          "end": 1357
        }
      ],
      "declare": false,
      "start": 1344,
      "end": 1358
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
            "start": 1363,
            "end": 1365
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1368,
              "end": 1370
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1368,
            "end": 1372
          },
          "definite": false,
          "start": 1363,
          "end": 1372
        }
      ],
      "declare": false,
      "start": 1359,
      "end": 1373
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
            "start": 1378,
            "end": 1380
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1383,
              "end": 1385
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1383,
            "end": 1387
          },
          "definite": false,
          "start": 1378,
          "end": 1387
        }
      ],
      "declare": false,
      "start": 1374,
      "end": 1388
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1388
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
    "value": "Item",
    "start": 5,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 17,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 28,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 39,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 51,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "T00",
    "start": 56,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 65,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 67,
    "end": 69
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 70,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 74,
    "end": 75
  },
  {
    "type": "String",
    "value": "\"y\"",
    "start": 76,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 82,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 92,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "T01",
    "start": 97,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 106,
    "end": 107
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 108,
    "end": 110
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 111,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 115,
    "end": 116
  },
  {
    "type": "String",
    "value": "\"y\"",
    "start": 117,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 128,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "T02",
    "start": 133,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 142,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 144,
    "end": 146
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 147,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 151,
    "end": 152
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 153,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 159,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 170,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "T03",
    "start": 175,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 184,
    "end": 185
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 186,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 189,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 195,
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
    "value": ":",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 202,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 211,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "T10",
    "start": 216,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 225,
    "end": 226
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 227,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 230,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 236,
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
    "value": ":",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 243,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 248,
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
    "value": "}",
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
    "value": "T11",
    "start": 259,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 268,
    "end": 269
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 270,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 273,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 279,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 287,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 298,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "T12",
    "start": 303,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 311,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 321,
    "end": 322
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 323,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 326,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 332,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 339,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 350,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "T13",
    "start": 355,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 363,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 373,
    "end": 374
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 375,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 378,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 384,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 392,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 404,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "T20",
    "start": 409,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 418,
    "end": 419
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 420,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 423,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 429,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 436,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 444,
    "end": 445
  },
  {
    "type": "Null",
    "value": "null",
    "start": 446,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 454,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "T21",
    "start": 459,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 468,
    "end": 469
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 470,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 473,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 479,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 486,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 492,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 505,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "T30",
    "start": 510,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 519,
    "end": 520
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 521,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 524,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 530,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 534,
    "end": 535
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 536,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 544,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "T31",
    "start": 549,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 557,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 558,
    "end": 559
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 560,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 563,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 569,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 576,
    "end": 577
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 578,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 586,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "T32",
    "start": 591,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 599,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 600,
    "end": 601
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 602,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 605,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 611,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 618,
    "end": 619
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 620,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 626,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 628,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "T33",
    "start": 633,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 641,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 642,
    "end": 643
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 644,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 647,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 653,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 661,
    "end": 662
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 663,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 671,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "T34",
    "start": 676,
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
    "value": "{",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 684,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 685,
    "end": 686
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 687,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 690,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 696,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 706,
    "end": 707
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 708,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 714,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 716,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "T35",
    "start": 721,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 729,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 730,
    "end": 731
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 732,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 735,
    "end": 740
  },
  {
    "type": "Null",
    "value": "null",
    "start": 741,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 746,
    "end": 747
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 748,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 754,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 756,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "T36",
    "start": 761,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 769,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 770,
    "end": 771
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 772,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 775,
    "end": 780
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 781,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 786,
    "end": 787
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 788,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 794,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 796,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "T37",
    "start": 801,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 809,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 810,
    "end": 811
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 812,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 815,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 821,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 828,
    "end": 829
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 830,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 838,
    "end": 842
  },
  {
    "type": "Identifier",
    "value": "T38",
    "start": 843,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 851,
    "end": 852
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 852,
    "end": 853
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 854,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 857,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "never",
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
    "type": "Punctuator",
    "value": ":",
    "start": 869,
    "end": 870
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 871,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 876,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 877,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 880,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "T40",
    "start": 885,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 891,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 893,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 894,
    "end": 895
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 896,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 899,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 906,
    "end": 907
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 908,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 913,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 914,
    "end": 915
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 916,
    "end": 920
  },
  {
    "type": "Identifier",
    "value": "T43",
    "start": 921,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 925,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 927,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 929,
    "end": 930
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 930,
    "end": 931
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 932,
    "end": 934
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 935,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 939,
    "end": 940
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 941,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 945,
    "end": 946
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 947,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 953,
    "end": 954
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 955,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "T44",
    "start": 960,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 968,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 969,
    "end": 970
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 971,
    "end": 973
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 974,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 978,
    "end": 979
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 980,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 984,
    "end": 985
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 986,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 990,
    "end": 991
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 992,
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
    "value": ":",
    "start": 996,
    "end": 997
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 998,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "T47",
    "start": 1011,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1022,
    "end": 1024
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1025,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1034,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 1040,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 1046,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 1052,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1058,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1067,
    "end": 1074
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1075,
    "end": 1083
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1084,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 1087,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1099,
    "end": 1101
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1102,
    "end": 1107
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 1108,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1113,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1121,
    "end": 1128
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1129,
    "end": 1137
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 1138,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 1141,
    "end": 1143
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1144,
    "end": 1151
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1152,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1168,
    "end": 1170
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1171,
    "end": 1176
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 1177,
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
    "value": ":",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1182,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1190,
    "end": 1197
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1198,
    "end": 1206
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 1207,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 1210,
    "end": 1212
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1213,
    "end": 1220
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1221,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1237,
    "end": 1239
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1240,
    "end": 1245
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 1246,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1251,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1259,
    "end": 1266
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1267,
    "end": 1275
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 1276,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 1279,
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
    "value": "Number",
    "start": 1290,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1306,
    "end": 1308
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1309,
    "end": 1314
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 1315,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1320,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1329,
    "end": 1332
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 1333,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1338,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1344,
    "end": 1347
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 1348,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 1353,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1359,
    "end": 1362
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 1363,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 1368,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1374,
    "end": 1377
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 1378,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 1383,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1387,
    "end": 1388
  }
]
```
