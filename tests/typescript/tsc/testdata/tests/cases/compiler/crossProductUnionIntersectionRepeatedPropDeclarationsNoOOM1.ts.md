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
        "name": "JsonPrimitive",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 18
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSBooleanKeyword",
            "start": 21,
            "end": 28
          },
          {
            "type": "TSNullKeyword",
            "start": 31,
            "end": 35
          },
          {
            "type": "TSNumberKeyword",
            "start": 38,
            "end": 44
          },
          {
            "type": "TSStringKeyword",
            "start": 47,
            "end": 53
          }
        ],
        "start": 21,
        "end": 53
      },
      "declare": false,
      "start": 0,
      "end": 54
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JsonArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 69
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSArrayType",
        "elementType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "JsonValue",
            "optional": false,
            "typeAnnotation": null,
            "start": 72,
            "end": 81
          },
          "typeArguments": null,
          "start": 72,
          "end": 81
        },
        "start": 72,
        "end": 83
      },
      "declare": false,
      "start": 55,
      "end": 84
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JsonValue",
        "optional": false,
        "typeAnnotation": null,
        "start": 90,
        "end": 99
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "JsonArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 102,
              "end": 111
            },
            "typeArguments": null,
            "start": 102,
            "end": 111
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "JsonObject",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 124
            },
            "typeArguments": null,
            "start": 114,
            "end": 124
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "JsonPrimitive",
              "optional": false,
              "typeAnnotation": null,
              "start": 127,
              "end": 140
            },
            "typeArguments": null,
            "start": 127,
            "end": 140
          }
        ],
        "start": 102,
        "end": 140
      },
      "declare": false,
      "start": 85,
      "end": 141
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JsonObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 152,
        "end": 162
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
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
                    "start": 173,
                    "end": 179
                  },
                  "start": 171,
                  "end": 179
                },
                "start": 168,
                "end": 179
              }
            ],
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
                      "name": "JsonValue",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 182,
                      "end": 191
                    },
                    "typeArguments": null,
                    "start": 182,
                    "end": 191
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 194,
                    "end": 203
                  }
                ],
                "start": 182,
                "end": 203
              },
              "start": 180,
              "end": 203
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 167,
            "end": 204
          }
        ],
        "start": 163,
        "end": 206
      },
      "declare": false,
      "start": 142,
      "end": 206
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IndexKey",
        "optional": false,
        "typeAnnotation": null,
        "start": 212,
        "end": 220
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 223,
            "end": 229
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
                  "name": "__brand",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 236,
                  "end": 243
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "indexKey",
                      "raw": "\"indexKey\"",
                      "start": 245,
                      "end": 255
                    },
                    "start": 245,
                    "end": 255
                  },
                  "start": 243,
                  "end": 255
                },
                "accessibility": null,
                "static": false,
                "start": 236,
                "end": 256
              }
            ],
            "start": 232,
            "end": 258
          }
        ],
        "start": 223,
        "end": 258
      },
      "declare": false,
      "start": 207,
      "end": 259
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLBaseAsset",
        "optional": false,
        "typeAnnotation": null,
        "start": 271,
        "end": 282
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
              "start": 283,
              "end": 287
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 296,
              "end": 302
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 283,
            "end": 302
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Props",
              "optional": false,
              "typeAnnotation": null,
              "start": 304,
              "end": 309
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 304,
            "end": 309
          }
        ],
        "start": 282,
        "end": 310
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "BaseRecord",
            "optional": false,
            "typeAnnotation": null,
            "start": 321,
            "end": 331
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "asset",
                  "raw": "\"asset\"",
                  "start": 332,
                  "end": 339
                },
                "start": 332,
                "end": 339
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TLAssetId",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 341,
                  "end": 350
                },
                "typeArguments": null,
                "start": 341,
                "end": 350
              }
            ],
            "start": 331,
            "end": 351
          },
          "start": 321,
          "end": 351
        }
      ],
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 356,
              "end": 360
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 362,
                  "end": 366
                },
                "typeArguments": null,
                "start": 362,
                "end": 366
              },
              "start": 360,
              "end": 366
            },
            "accessibility": null,
            "static": false,
            "start": 356,
            "end": 367
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "props",
              "optional": false,
              "typeAnnotation": null,
              "start": 370,
              "end": 375
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Props",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 377,
                  "end": 382
                },
                "typeArguments": null,
                "start": 377,
                "end": 382
              },
              "start": 375,
              "end": 382
            },
            "accessibility": null,
            "static": false,
            "start": 370,
            "end": 383
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "meta",
              "optional": false,
              "typeAnnotation": null,
              "start": 386,
              "end": 390
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "JsonObject",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 392,
                  "end": 402
                },
                "typeArguments": null,
                "start": 392,
                "end": 402
              },
              "start": 390,
              "end": 402
            },
            "accessibility": null,
            "static": false,
            "start": 386,
            "end": 403
          }
        ],
        "start": 352,
        "end": 405
      },
      "declare": false,
      "start": 261,
      "end": 405
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLAssetId",
        "optional": false,
        "typeAnnotation": null,
        "start": 411,
        "end": 420
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "RecordId",
          "optional": false,
          "typeAnnotation": null,
          "start": 423,
          "end": 431
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TLBaseAsset",
                "optional": false,
                "typeAnnotation": null,
                "start": 432,
                "end": 443
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 444,
                    "end": 447
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 449,
                    "end": 452
                  }
                ],
                "start": 443,
                "end": 453
              },
              "start": 432,
              "end": 453
            }
          ],
          "start": 431,
          "end": 454
        },
        "start": 423,
        "end": 454
      },
      "declare": false,
      "start": 406,
      "end": 455
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "VecModel",
        "optional": false,
        "typeAnnotation": null,
        "start": 467,
        "end": 475
      },
      "typeParameters": null,
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 480,
              "end": 481
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 483,
                "end": 489
              },
              "start": 481,
              "end": 489
            },
            "accessibility": null,
            "static": false,
            "start": 480,
            "end": 490
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 493,
              "end": 494
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 496,
                "end": 502
              },
              "start": 494,
              "end": 502
            },
            "accessibility": null,
            "static": false,
            "start": 493,
            "end": 503
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 506,
              "end": 507
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 510,
                "end": 516
              },
              "start": 508,
              "end": 516
            },
            "accessibility": null,
            "static": false,
            "start": 506,
            "end": 517
          }
        ],
        "start": 476,
        "end": 519
      },
      "declare": false,
      "start": 457,
      "end": 519
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLShapeCrop",
        "optional": false,
        "typeAnnotation": null,
        "start": 531,
        "end": 542
      },
      "typeParameters": null,
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
              "name": "topLeft",
              "optional": false,
              "typeAnnotation": null,
              "start": 547,
              "end": 554
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "VecModel",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 556,
                  "end": 564
                },
                "typeArguments": null,
                "start": 556,
                "end": 564
              },
              "start": 554,
              "end": 564
            },
            "accessibility": null,
            "static": false,
            "start": 547,
            "end": 565
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bottomRight",
              "optional": false,
              "typeAnnotation": null,
              "start": 568,
              "end": 579
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "VecModel",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 581,
                  "end": 589
                },
                "typeArguments": null,
                "start": 581,
                "end": 589
              },
              "start": 579,
              "end": 589
            },
            "accessibility": null,
            "static": false,
            "start": 568,
            "end": 590
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isCircle",
              "optional": false,
              "typeAnnotation": null,
              "start": 593,
              "end": 601
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 604,
                "end": 611
              },
              "start": 602,
              "end": 611
            },
            "accessibility": null,
            "static": false,
            "start": 593,
            "end": 612
          }
        ],
        "start": 543,
        "end": 614
      },
      "declare": false,
      "start": 521,
      "end": 614
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLRichText",
        "optional": false,
        "typeAnnotation": null,
        "start": 621,
        "end": 631
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "attrs",
              "optional": false,
              "typeAnnotation": null,
              "start": 638,
              "end": 643
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 646,
                "end": 649
              },
              "start": 644,
              "end": 649
            },
            "accessibility": null,
            "static": false,
            "start": 638,
            "end": 650
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "content",
              "optional": false,
              "typeAnnotation": null,
              "start": 653,
              "end": 660
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 662,
                  "end": 669
                },
                "start": 662,
                "end": 671
              },
              "start": 660,
              "end": 671
            },
            "accessibility": null,
            "static": false,
            "start": 653,
            "end": 672
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 675,
              "end": 679
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 681,
                "end": 687
              },
              "start": 679,
              "end": 687
            },
            "accessibility": null,
            "static": false,
            "start": 675,
            "end": 688
          }
        ],
        "start": 634,
        "end": 690
      },
      "declare": false,
      "start": 616,
      "end": 691
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLDefaultColorStyle",
        "optional": false,
        "typeAnnotation": null,
        "start": 698,
        "end": 717
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "black",
              "raw": "\"black\"",
              "start": 724,
              "end": 731
            },
            "start": 724,
            "end": 731
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "blue",
              "raw": "\"blue\"",
              "start": 736,
              "end": 742
            },
            "start": 736,
            "end": 742
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "green",
              "raw": "\"green\"",
              "start": 747,
              "end": 754
            },
            "start": 747,
            "end": 754
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "grey",
              "raw": "\"grey\"",
              "start": 759,
              "end": 765
            },
            "start": 759,
            "end": 765
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "light-blue",
              "raw": "\"light-blue\"",
              "start": 770,
              "end": 782
            },
            "start": 770,
            "end": 782
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "light-green",
              "raw": "\"light-green\"",
              "start": 787,
              "end": 800
            },
            "start": 787,
            "end": 800
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "light-red",
              "raw": "\"light-red\"",
              "start": 805,
              "end": 816
            },
            "start": 805,
            "end": 816
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "light-violet",
              "raw": "\"light-violet\"",
              "start": 821,
              "end": 835
            },
            "start": 821,
            "end": 835
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "orange",
              "raw": "\"orange\"",
              "start": 840,
              "end": 848
            },
            "start": 840,
            "end": 848
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "red",
              "raw": "\"red\"",
              "start": 853,
              "end": 858
            },
            "start": 853,
            "end": 858
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "violet",
              "raw": "\"violet\"",
              "start": 863,
              "end": 871
            },
            "start": 863,
            "end": 871
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "white",
              "raw": "\"white\"",
              "start": 876,
              "end": 883
            },
            "start": 876,
            "end": 883
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "yellow",
              "raw": "\"yellow\"",
              "start": 888,
              "end": 896
            },
            "start": 888,
            "end": 896
          }
        ],
        "start": 722,
        "end": 896
      },
      "declare": false,
      "start": 693,
      "end": 897
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLDefaultFillStyle",
        "optional": false,
        "typeAnnotation": null,
        "start": 903,
        "end": 921
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "fill",
              "raw": "\"fill\"",
              "start": 928,
              "end": 934
            },
            "start": 928,
            "end": 934
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "lined-fill",
              "raw": "\"lined-fill\"",
              "start": 939,
              "end": 951
            },
            "start": 939,
            "end": 951
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "none",
              "raw": "\"none\"",
              "start": 956,
              "end": 962
            },
            "start": 956,
            "end": 962
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "pattern",
              "raw": "\"pattern\"",
              "start": 967,
              "end": 976
            },
            "start": 967,
            "end": 976
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "semi",
              "raw": "\"semi\"",
              "start": 981,
              "end": 987
            },
            "start": 981,
            "end": 987
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "solid",
              "raw": "\"solid\"",
              "start": 992,
              "end": 999
            },
            "start": 992,
            "end": 999
          }
        ],
        "start": 926,
        "end": 999
      },
      "declare": false,
      "start": 898,
      "end": 1000
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLDefaultDashStyle",
        "optional": false,
        "typeAnnotation": null,
        "start": 1006,
        "end": 1024
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "solid",
              "raw": "\"solid\"",
              "start": 1027,
              "end": 1034
            },
            "start": 1027,
            "end": 1034
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "draw",
              "raw": "\"draw\"",
              "start": 1037,
              "end": 1043
            },
            "start": 1037,
            "end": 1043
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "dashed",
              "raw": "\"dashed\"",
              "start": 1046,
              "end": 1054
            },
            "start": 1046,
            "end": 1054
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "dotted",
              "raw": "\"dotted\"",
              "start": 1057,
              "end": 1065
            },
            "start": 1057,
            "end": 1065
          }
        ],
        "start": 1027,
        "end": 1065
      },
      "declare": false,
      "start": 1001,
      "end": 1066
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLDefaultSizeStyle",
        "optional": false,
        "typeAnnotation": null,
        "start": 1072,
        "end": 1090
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "l",
              "raw": "\"l\"",
              "start": 1093,
              "end": 1096
            },
            "start": 1093,
            "end": 1096
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "m",
              "raw": "\"m\"",
              "start": 1099,
              "end": 1102
            },
            "start": 1099,
            "end": 1102
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "s",
              "raw": "\"s\"",
              "start": 1105,
              "end": 1108
            },
            "start": 1105,
            "end": 1108
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "xl",
              "raw": "\"xl\"",
              "start": 1111,
              "end": 1115
            },
            "start": 1111,
            "end": 1115
          }
        ],
        "start": 1093,
        "end": 1115
      },
      "declare": false,
      "start": 1067,
      "end": 1116
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLLineShapeSplineStyle",
        "optional": false,
        "typeAnnotation": null,
        "start": 1122,
        "end": 1144
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "line",
              "raw": "\"line\"",
              "start": 1147,
              "end": 1153
            },
            "start": 1147,
            "end": 1153
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "cubic",
              "raw": "\"cubic\"",
              "start": 1156,
              "end": 1163
            },
            "start": 1156,
            "end": 1163
          }
        ],
        "start": 1147,
        "end": 1163
      },
      "declare": false,
      "start": 1117,
      "end": 1164
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLDefaultFontStyle",
        "optional": false,
        "typeAnnotation": null,
        "start": 1170,
        "end": 1188
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "draw",
              "raw": "\"draw\"",
              "start": 1191,
              "end": 1197
            },
            "start": 1191,
            "end": 1197
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "mono",
              "raw": "\"mono\"",
              "start": 1200,
              "end": 1206
            },
            "start": 1200,
            "end": 1206
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "sans",
              "raw": "\"sans\"",
              "start": 1209,
              "end": 1215
            },
            "start": 1209,
            "end": 1215
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "serif",
              "raw": "\"serif\"",
              "start": 1218,
              "end": 1225
            },
            "start": 1218,
            "end": 1225
          }
        ],
        "start": 1191,
        "end": 1225
      },
      "declare": false,
      "start": 1165,
      "end": 1226
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLDefaultHorizontalAlignStyle",
        "optional": false,
        "typeAnnotation": null,
        "start": 1232,
        "end": 1261
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "end-legacy",
              "raw": "\"end-legacy\"",
              "start": 1268,
              "end": 1280
            },
            "start": 1268,
            "end": 1280
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "end",
              "raw": "\"end\"",
              "start": 1285,
              "end": 1290
            },
            "start": 1285,
            "end": 1290
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "middle-legacy",
              "raw": "\"middle-legacy\"",
              "start": 1295,
              "end": 1310
            },
            "start": 1295,
            "end": 1310
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "middle",
              "raw": "\"middle\"",
              "start": 1315,
              "end": 1323
            },
            "start": 1315,
            "end": 1323
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "start-legacy",
              "raw": "\"start-legacy\"",
              "start": 1328,
              "end": 1342
            },
            "start": 1328,
            "end": 1342
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "start",
              "raw": "\"start\"",
              "start": 1347,
              "end": 1354
            },
            "start": 1347,
            "end": 1354
          }
        ],
        "start": 1266,
        "end": 1354
      },
      "declare": false,
      "start": 1227,
      "end": 1355
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLDefaultVerticalAlignStyle",
        "optional": false,
        "typeAnnotation": null,
        "start": 1361,
        "end": 1388
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "end",
              "raw": "\"end\"",
              "start": 1391,
              "end": 1396
            },
            "start": 1391,
            "end": 1396
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "middle",
              "raw": "\"middle\"",
              "start": 1399,
              "end": 1407
            },
            "start": 1399,
            "end": 1407
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "start",
              "raw": "\"start\"",
              "start": 1410,
              "end": 1417
            },
            "start": 1410,
            "end": 1417
          }
        ],
        "start": 1391,
        "end": 1417
      },
      "declare": false,
      "start": 1356,
      "end": 1418
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLDefaultTextAlignStyle",
        "optional": false,
        "typeAnnotation": null,
        "start": 1424,
        "end": 1447
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "end",
              "raw": "\"end\"",
              "start": 1450,
              "end": 1455
            },
            "start": 1450,
            "end": 1455
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "middle",
              "raw": "\"middle\"",
              "start": 1458,
              "end": 1466
            },
            "start": 1458,
            "end": 1466
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "start",
              "raw": "\"start\"",
              "start": 1469,
              "end": 1476
            },
            "start": 1469,
            "end": 1476
          }
        ],
        "start": 1450,
        "end": 1476
      },
      "declare": false,
      "start": 1419,
      "end": 1477
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLArrowShapeKind",
        "optional": false,
        "typeAnnotation": null,
        "start": 1483,
        "end": 1499
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "arc",
              "raw": "\"arc\"",
              "start": 1502,
              "end": 1507
            },
            "start": 1502,
            "end": 1507
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "elbow",
              "raw": "\"elbow\"",
              "start": 1510,
              "end": 1517
            },
            "start": 1510,
            "end": 1517
          }
        ],
        "start": 1502,
        "end": 1517
      },
      "declare": false,
      "start": 1478,
      "end": 1518
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLArrowShapeArrowheadStyle",
        "optional": false,
        "typeAnnotation": null,
        "start": 1524,
        "end": 1550
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "arrow",
              "raw": "\"arrow\"",
              "start": 1557,
              "end": 1564
            },
            "start": 1557,
            "end": 1564
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "bar",
              "raw": "\"bar\"",
              "start": 1569,
              "end": 1574
            },
            "start": 1569,
            "end": 1574
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "diamond",
              "raw": "\"diamond\"",
              "start": 1579,
              "end": 1588
            },
            "start": 1579,
            "end": 1588
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "dot",
              "raw": "\"dot\"",
              "start": 1593,
              "end": 1598
            },
            "start": 1593,
            "end": 1598
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "inverted",
              "raw": "\"inverted\"",
              "start": 1603,
              "end": 1613
            },
            "start": 1603,
            "end": 1613
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "none",
              "raw": "\"none\"",
              "start": 1618,
              "end": 1624
            },
            "start": 1618,
            "end": 1624
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "pipe",
              "raw": "\"pipe\"",
              "start": 1629,
              "end": 1635
            },
            "start": 1629,
            "end": 1635
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "square",
              "raw": "\"square\"",
              "start": 1640,
              "end": 1648
            },
            "start": 1640,
            "end": 1648
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "triangle",
              "raw": "\"triangle\"",
              "start": 1653,
              "end": 1663
            },
            "start": 1653,
            "end": 1663
          }
        ],
        "start": 1555,
        "end": 1663
      },
      "declare": false,
      "start": 1519,
      "end": 1664
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLGeoShapeGeoStyle",
        "optional": false,
        "typeAnnotation": null,
        "start": 1670,
        "end": 1688
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "arrow-down",
              "raw": "\"arrow-down\"",
              "start": 1695,
              "end": 1707
            },
            "start": 1695,
            "end": 1707
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "arrow-left",
              "raw": "\"arrow-left\"",
              "start": 1712,
              "end": 1724
            },
            "start": 1712,
            "end": 1724
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "arrow-right",
              "raw": "\"arrow-right\"",
              "start": 1729,
              "end": 1742
            },
            "start": 1729,
            "end": 1742
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "arrow-up",
              "raw": "\"arrow-up\"",
              "start": 1747,
              "end": 1757
            },
            "start": 1747,
            "end": 1757
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "check-box",
              "raw": "\"check-box\"",
              "start": 1762,
              "end": 1773
            },
            "start": 1762,
            "end": 1773
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "cloud",
              "raw": "\"cloud\"",
              "start": 1778,
              "end": 1785
            },
            "start": 1778,
            "end": 1785
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "diamond",
              "raw": "\"diamond\"",
              "start": 1790,
              "end": 1799
            },
            "start": 1790,
            "end": 1799
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "ellipse",
              "raw": "\"ellipse\"",
              "start": 1804,
              "end": 1813
            },
            "start": 1804,
            "end": 1813
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "heart",
              "raw": "\"heart\"",
              "start": 1818,
              "end": 1825
            },
            "start": 1818,
            "end": 1825
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "hexagon",
              "raw": "\"hexagon\"",
              "start": 1830,
              "end": 1839
            },
            "start": 1830,
            "end": 1839
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "octagon",
              "raw": "\"octagon\"",
              "start": 1844,
              "end": 1853
            },
            "start": 1844,
            "end": 1853
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "oval",
              "raw": "\"oval\"",
              "start": 1858,
              "end": 1864
            },
            "start": 1858,
            "end": 1864
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "pentagon",
              "raw": "\"pentagon\"",
              "start": 1869,
              "end": 1879
            },
            "start": 1869,
            "end": 1879
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "rectangle",
              "raw": "\"rectangle\"",
              "start": 1884,
              "end": 1895
            },
            "start": 1884,
            "end": 1895
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "rhombus",
              "raw": "\"rhombus\"",
              "start": 1900,
              "end": 1909
            },
            "start": 1900,
            "end": 1909
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "rhombus-2",
              "raw": "\"rhombus-2\"",
              "start": 1914,
              "end": 1925
            },
            "start": 1914,
            "end": 1925
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "star",
              "raw": "\"star\"",
              "start": 1930,
              "end": 1936
            },
            "start": 1930,
            "end": 1936
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "trapezoid",
              "raw": "\"trapezoid\"",
              "start": 1941,
              "end": 1952
            },
            "start": 1941,
            "end": 1952
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "triangle",
              "raw": "\"triangle\"",
              "start": 1957,
              "end": 1967
            },
            "start": 1957,
            "end": 1967
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "x-box",
              "raw": "\"x-box\"",
              "start": 1972,
              "end": 1979
            },
            "start": 1972,
            "end": 1979
          }
        ],
        "start": 1693,
        "end": 1979
      },
      "declare": false,
      "start": 1665,
      "end": 1980
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLOpacityType",
        "optional": false,
        "typeAnnotation": null,
        "start": 1986,
        "end": 1999
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSNumberKeyword",
        "start": 2002,
        "end": 2008
      },
      "declare": false,
      "start": 1981,
      "end": 2009
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLPageId",
        "optional": false,
        "typeAnnotation": null,
        "start": 2015,
        "end": 2023
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "RecordId",
          "optional": false,
          "typeAnnotation": null,
          "start": 2026,
          "end": 2034
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TLPage",
                "optional": false,
                "typeAnnotation": null,
                "start": 2035,
                "end": 2041
              },
              "typeArguments": null,
              "start": 2035,
              "end": 2041
            }
          ],
          "start": 2034,
          "end": 2042
        },
        "start": 2026,
        "end": 2042
      },
      "declare": false,
      "start": 2010,
      "end": 2043
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLParentId",
        "optional": false,
        "typeAnnotation": null,
        "start": 2049,
        "end": 2059
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TLPageId",
              "optional": false,
              "typeAnnotation": null,
              "start": 2062,
              "end": 2070
            },
            "typeArguments": null,
            "start": 2062,
            "end": 2070
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TLShapeId",
              "optional": false,
              "typeAnnotation": null,
              "start": 2073,
              "end": 2082
            },
            "typeArguments": null,
            "start": 2073,
            "end": 2082
          }
        ],
        "start": 2062,
        "end": 2082
      },
      "declare": false,
      "start": 2044,
      "end": 2083
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLPage",
        "optional": false,
        "typeAnnotation": null,
        "start": 2094,
        "end": 2100
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "BaseRecord",
            "optional": false,
            "typeAnnotation": null,
            "start": 2109,
            "end": 2119
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "page",
                  "raw": "\"page\"",
                  "start": 2120,
                  "end": 2126
                },
                "start": 2120,
                "end": 2126
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TLPageId",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2128,
                  "end": 2136
                },
                "typeArguments": null,
                "start": 2128,
                "end": 2136
              }
            ],
            "start": 2119,
            "end": 2137
          },
          "start": 2109,
          "end": 2137
        }
      ],
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 2142,
              "end": 2146
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2148,
                "end": 2154
              },
              "start": 2146,
              "end": 2154
            },
            "accessibility": null,
            "static": false,
            "start": 2142,
            "end": 2155
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "index",
              "optional": false,
              "typeAnnotation": null,
              "start": 2158,
              "end": 2163
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IndexKey",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2165,
                  "end": 2173
                },
                "typeArguments": null,
                "start": 2165,
                "end": 2173
              },
              "start": 2163,
              "end": 2173
            },
            "accessibility": null,
            "static": false,
            "start": 2158,
            "end": 2174
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "meta",
              "optional": false,
              "typeAnnotation": null,
              "start": 2177,
              "end": 2181
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "JsonObject",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2183,
                  "end": 2193
                },
                "typeArguments": null,
                "start": 2183,
                "end": 2193
              },
              "start": 2181,
              "end": 2193
            },
            "accessibility": null,
            "static": false,
            "start": 2177,
            "end": 2194
          }
        ],
        "start": 2138,
        "end": 2196
      },
      "declare": false,
      "start": 2084,
      "end": 2196
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLLineShapePoint",
        "optional": false,
        "typeAnnotation": null,
        "start": 2208,
        "end": 2224
      },
      "typeParameters": null,
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
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 2229,
              "end": 2231
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2233,
                "end": 2239
              },
              "start": 2231,
              "end": 2239
            },
            "accessibility": null,
            "static": false,
            "start": 2229,
            "end": 2240
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "index",
              "optional": false,
              "typeAnnotation": null,
              "start": 2243,
              "end": 2248
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IndexKey",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2250,
                  "end": 2258
                },
                "typeArguments": null,
                "start": 2250,
                "end": 2258
              },
              "start": 2248,
              "end": 2258
            },
            "accessibility": null,
            "static": false,
            "start": 2243,
            "end": 2259
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2262,
              "end": 2263
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2265,
                "end": 2271
              },
              "start": 2263,
              "end": 2271
            },
            "accessibility": null,
            "static": false,
            "start": 2262,
            "end": 2272
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 2275,
              "end": 2276
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2278,
                "end": 2284
              },
              "start": 2276,
              "end": 2284
            },
            "accessibility": null,
            "static": false,
            "start": 2275,
            "end": 2285
          }
        ],
        "start": 2225,
        "end": 2287
      },
      "declare": false,
      "start": 2198,
      "end": 2287
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLGlobalShapePropsMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 2299,
        "end": 2320
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 2321,
        "end": 2323
      },
      "declare": false,
      "start": 2289,
      "end": 2323
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLBaseShape",
        "optional": false,
        "typeAnnotation": null,
        "start": 2335,
        "end": 2346
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
              "start": 2347,
              "end": 2351
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 2360,
              "end": 2366
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2347,
            "end": 2366
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Props",
              "optional": false,
              "typeAnnotation": null,
              "start": 2368,
              "end": 2373
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 2382,
              "end": 2388
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2368,
            "end": 2388
          }
        ],
        "start": 2346,
        "end": 2389
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 2403,
              "end": 2405
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TLShapeId",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2407,
                  "end": 2416
                },
                "typeArguments": null,
                "start": 2407,
                "end": 2416
              },
              "start": 2405,
              "end": 2416
            },
            "accessibility": null,
            "static": false,
            "start": 2394,
            "end": 2417
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "typeName",
              "optional": false,
              "typeAnnotation": null,
              "start": 2429,
              "end": 2437
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "shape",
                  "raw": "\"shape\"",
                  "start": 2439,
                  "end": 2446
                },
                "start": 2439,
                "end": 2446
              },
              "start": 2437,
              "end": 2446
            },
            "accessibility": null,
            "static": false,
            "start": 2420,
            "end": 2447
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 2450,
              "end": 2454
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2456,
                  "end": 2460
                },
                "typeArguments": null,
                "start": 2456,
                "end": 2460
              },
              "start": 2454,
              "end": 2460
            },
            "accessibility": null,
            "static": false,
            "start": 2450,
            "end": 2461
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2464,
              "end": 2465
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2467,
                "end": 2473
              },
              "start": 2465,
              "end": 2473
            },
            "accessibility": null,
            "static": false,
            "start": 2464,
            "end": 2474
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 2477,
              "end": 2478
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2480,
                "end": 2486
              },
              "start": 2478,
              "end": 2486
            },
            "accessibility": null,
            "static": false,
            "start": 2477,
            "end": 2487
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "rotation",
              "optional": false,
              "typeAnnotation": null,
              "start": 2490,
              "end": 2498
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2500,
                "end": 2506
              },
              "start": 2498,
              "end": 2506
            },
            "accessibility": null,
            "static": false,
            "start": 2490,
            "end": 2507
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "index",
              "optional": false,
              "typeAnnotation": null,
              "start": 2510,
              "end": 2515
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IndexKey",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2517,
                  "end": 2525
                },
                "typeArguments": null,
                "start": 2517,
                "end": 2525
              },
              "start": 2515,
              "end": 2525
            },
            "accessibility": null,
            "static": false,
            "start": 2510,
            "end": 2526
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "parentId",
              "optional": false,
              "typeAnnotation": null,
              "start": 2529,
              "end": 2537
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TLParentId",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2539,
                  "end": 2549
                },
                "typeArguments": null,
                "start": 2539,
                "end": 2549
              },
              "start": 2537,
              "end": 2549
            },
            "accessibility": null,
            "static": false,
            "start": 2529,
            "end": 2550
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isLocked",
              "optional": false,
              "typeAnnotation": null,
              "start": 2553,
              "end": 2561
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2563,
                "end": 2570
              },
              "start": 2561,
              "end": 2570
            },
            "accessibility": null,
            "static": false,
            "start": 2553,
            "end": 2571
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "opacity",
              "optional": false,
              "typeAnnotation": null,
              "start": 2574,
              "end": 2581
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TLOpacityType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2583,
                  "end": 2596
                },
                "typeArguments": null,
                "start": 2583,
                "end": 2596
              },
              "start": 2581,
              "end": 2596
            },
            "accessibility": null,
            "static": false,
            "start": 2574,
            "end": 2597
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "props",
              "optional": false,
              "typeAnnotation": null,
              "start": 2600,
              "end": 2605
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Props",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2607,
                  "end": 2612
                },
                "typeArguments": null,
                "start": 2607,
                "end": 2612
              },
              "start": 2605,
              "end": 2612
            },
            "accessibility": null,
            "static": false,
            "start": 2600,
            "end": 2613
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "meta",
              "optional": false,
              "typeAnnotation": null,
              "start": 2616,
              "end": 2620
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "JsonObject",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2622,
                  "end": 2632
                },
                "typeArguments": null,
                "start": 2622,
                "end": 2632
              },
              "start": 2620,
              "end": 2632
            },
            "accessibility": null,
            "static": false,
            "start": 2616,
            "end": 2633
          }
        ],
        "start": 2390,
        "end": 2635
      },
      "declare": false,
      "start": 2325,
      "end": 2635
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLArrowShapeProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 2647,
        "end": 2664
      },
      "typeParameters": null,
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 2669,
              "end": 2673
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TLArrowShapeKind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2675,
                  "end": 2691
                },
                "typeArguments": null,
                "start": 2675,
                "end": 2691
              },
              "start": 2673,
              "end": 2691
            },
            "accessibility": null,
            "static": false,
            "start": 2669,
            "end": 2692
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "labelColor",
              "optional": false,
              "typeAnnotation": null,
              "start": 2695,
              "end": 2705
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TLDefaultColorStyle",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2707,
                  "end": 2726
                },
                "typeArguments": null,
                "start": 2707,
                "end": 2726
              },
              "start": 2705,
              "end": 2726
            },
            "accessibility": null,
            "static": false,
            "start": 2695,
            "end": 2727
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "color",
              "optional": false,
              "typeAnnotation": null,
              "start": 2730,
              "end": 2735
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TLDefaultColorStyle",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2737,
                  "end": 2756
                },
                "typeArguments": null,
                "start": 2737,
                "end": 2756
              },
              "start": 2735,
              "end": 2756
            },
            "accessibility": null,
            "static": false,
            "start": 2730,
            "end": 2757
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fill",
              "optional": false,
              "typeAnnotation": null,
              "start": 2760,
              "end": 2764
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TLDefaultFillStyle",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2766,
                  "end": 2784
                },
                "typeArguments": null,
                "start": 2766,
                "end": 2784
              },
              "start": 2764,
              "end": 2784
            },
            "accessibility": null,
            "static": false,
            "start": 2760,
            "end": 2785
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "dash",
              "optional": false,
              "typeAnnotation": null,
              "start": 2788,
              "end": 2792
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TLDefaultDashStyle",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2794,
                  "end": 2812
                },
                "typeArguments": null,
                "start": 2794,
                "end": 2812
              },
              "start": 2792,
              "end": 2812
            },
            "accessibility": null,
            "static": false,
            "start": 2788,
            "end": 2813
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "size",
              "optional": false,
              "typeAnnotation": null,
              "start": 2816,
              "end": 2820
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TLDefaultSizeStyle",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2822,
                  "end": 2840
                },
                "typeArguments": null,
                "start": 2822,
                "end": 2840
              },
              "start": 2820,
              "end": 2840
            },
            "accessibility": null,
            "static": false,
            "start": 2816,
            "end": 2841
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "arrowheadStart",
              "optional": false,
              "typeAnnotation": null,
              "start": 2844,
              "end": 2858
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TLArrowShapeArrowheadStyle",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2860,
                  "end": 2886
                },
                "typeArguments": null,
                "start": 2860,
                "end": 2886
              },
              "start": 2858,
              "end": 2886
            },
            "accessibility": null,
            "static": false,
            "start": 2844,
            "end": 2887
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "arrowheadEnd",
              "optional": false,
              "typeAnnotation": null,
              "start": 2890,
              "end": 2902
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TLArrowShapeArrowheadStyle",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2904,
                  "end": 2930
                },
                "typeArguments": null,
                "start": 2904,
                "end": 2930
              },
              "start": 2902,
              "end": 2930
            },
            "accessibility": null,
            "static": false,
            "start": 2890,
            "end": 2931
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "font",
              "optional": false,
              "typeAnnotation": null,
              "start": 2934,
              "end": 2938
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TLDefaultFontStyle",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2940,
                  "end": 2958
                },
                "typeArguments": null,
                "start": 2940,
                "end": 2958
              },
              "start": 2938,
              "end": 2958
            },
            "accessibility": null,
            "static": false,
            "start": 2934,
            "end": 2959
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "start",
              "optional": false,
              "typeAnnotation": null,
              "start": 2962,
              "end": 2967
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "VecModel",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2969,
                  "end": 2977
                },
                "typeArguments": null,
                "start": 2969,
                "end": 2977
              },
              "start": 2967,
              "end": 2977
            },
            "accessibility": null,
            "static": false,
            "start": 2962,
            "end": 2978
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "end",
              "optional": false,
              "typeAnnotation": null,
              "start": 2981,
              "end": 2984
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "VecModel",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2986,
                  "end": 2994
                },
                "typeArguments": null,
                "start": 2986,
                "end": 2994
              },
              "start": 2984,
              "end": 2994
            },
            "accessibility": null,
            "static": false,
            "start": 2981,
            "end": 2995
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bend",
              "optional": false,
              "typeAnnotation": null,
              "start": 2998,
              "end": 3002
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3004,
                "end": 3010
              },
              "start": 3002,
              "end": 3010
            },
            "accessibility": null,
            "static": false,
            "start": 2998,
            "end": 3011
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "richText",
              "optional": false,
              "typeAnnotation": null,
              "start": 3014,
              "end": 3022
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TLRichText",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3024,
                  "end": 3034
                },
                "typeArguments": null,
                "start": 3024,
                "end": 3034
              },
              "start": 3022,
              "end": 3034
            },
            "accessibility": null,
            "static": false,
            "start": 3014,
            "end": 3035
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "labelPosition",
              "optional": false,
              "typeAnnotation": null,
              "start": 3038,
              "end": 3051
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3053,
                "end": 3059
              },
              "start": 3051,
              "end": 3059
            },
            "accessibility": null,
            "static": false,
            "start": 3038,
            "end": 3060
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "scale",
              "optional": false,
              "typeAnnotation": null,
              "start": 3063,
              "end": 3068
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3070,
                "end": 3076
              },
              "start": 3068,
              "end": 3076
            },
            "accessibility": null,
            "static": false,
            "start": 3063,
            "end": 3077
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "elbowMidPoint",
              "optional": false,
              "typeAnnotation": null,
              "start": 3080,
              "end": 3093
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3095,
                "end": 3101
              },
              "start": 3093,
              "end": 3101
            },
            "accessibility": null,
            "static": false,
            "start": 3080,
            "end": 3102
          }
        ],
        "start": 2665,
        "end": 3104
      },
      "declare": false,
      "start": 2637,
      "end": 3104
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLArrowShape",
        "optional": false,
        "typeAnnotation": null,
        "start": 3110,
        "end": 3122
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "TLBaseShape",
          "optional": false,
          "typeAnnotation": null,
          "start": 3125,
          "end": 3136
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "arrow",
                "raw": "\"arrow\"",
                "start": 3137,
                "end": 3144
              },
              "start": 3137,
              "end": 3144
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TLArrowShapeProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 3146,
                "end": 3163
              },
              "typeArguments": null,
              "start": 3146,
              "end": 3163
            }
          ],
          "start": 3136,
          "end": 3164
        },
        "start": 3125,
        "end": 3164
      },
      "declare": false,
      "start": 3105,
      "end": 3165
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLBookmarkShapeProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 3177,
        "end": 3197
      },
      "typeParameters": null,
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 3202,
              "end": 3203
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3205,
                "end": 3211
              },
              "start": 3203,
              "end": 3211
            },
            "accessibility": null,
            "static": false,
            "start": 3202,
            "end": 3212
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null,
              "start": 3215,
              "end": 3216
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3218,
                "end": 3224
              },
              "start": 3216,
              "end": 3224
            },
            "accessibility": null,
            "static": false,
            "start": 3215,
            "end": 3225
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "assetId",
              "optional": false,
              "typeAnnotation": null,
              "start": 3228,
              "end": 3235
            },
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
                      "name": "TLAssetId",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3237,
                      "end": 3246
                    },
                    "typeArguments": null,
                    "start": 3237,
                    "end": 3246
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 3249,
                    "end": 3253
                  }
                ],
                "start": 3237,
                "end": 3253
              },
              "start": 3235,
              "end": 3253
            },
            "accessibility": null,
            "static": false,
            "start": 3228,
            "end": 3254
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "url",
              "optional": false,
              "typeAnnotation": null,
              "start": 3257,
              "end": 3260
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3262,
                "end": 3268
              },
              "start": 3260,
              "end": 3268
            },
            "accessibility": null,
            "static": false,
            "start": 3257,
            "end": 3269
          }
        ],
        "start": 3198,
        "end": 3271
      },
      "declare": false,
      "start": 3167,
      "end": 3271
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLBookmarkShape",
        "optional": false,
        "typeAnnotation": null,
        "start": 3278,
        "end": 3293
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "TLBaseShape",
          "optional": false,
          "typeAnnotation": null,
          "start": 3296,
          "end": 3307
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "bookmark",
                "raw": "\"bookmark\"",
                "start": 3308,
                "end": 3318
              },
              "start": 3308,
              "end": 3318
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TLBookmarkShapeProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 3320,
                "end": 3340
              },
              "typeArguments": null,
              "start": 3320,
              "end": 3340
            }
          ],
          "start": 3307,
          "end": 3341
        },
        "start": 3296,
        "end": 3341
      },
      "declare": false,
      "start": 3273,
      "end": 3342
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TLDrawShapeProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 3361,
          "end": 3377
        },
        "typeParameters": null,
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
                "name": "color",
                "optional": false,
                "typeAnnotation": null,
                "start": 3382,
                "end": 3387
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TLDefaultColorStyle",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3389,
                    "end": 3408
                  },
                  "typeArguments": null,
                  "start": 3389,
                  "end": 3408
                },
                "start": 3387,
                "end": 3408
              },
              "accessibility": null,
              "static": false,
              "start": 3382,
              "end": 3409
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fill",
                "optional": false,
                "typeAnnotation": null,
                "start": 3412,
                "end": 3416
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TLDefaultFillStyle",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3418,
                    "end": 3436
                  },
                  "typeArguments": null,
                  "start": 3418,
                  "end": 3436
                },
                "start": 3416,
                "end": 3436
              },
              "accessibility": null,
              "static": false,
              "start": 3412,
              "end": 3437
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "dash",
                "optional": false,
                "typeAnnotation": null,
                "start": 3440,
                "end": 3444
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TLDefaultDashStyle",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3446,
                    "end": 3464
                  },
                  "typeArguments": null,
                  "start": 3446,
                  "end": 3464
                },
                "start": 3444,
                "end": 3464
              },
              "accessibility": null,
              "static": false,
              "start": 3440,
              "end": 3465
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "size",
                "optional": false,
                "typeAnnotation": null,
                "start": 3468,
                "end": 3472
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TLDefaultSizeStyle",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3474,
                    "end": 3492
                  },
                  "typeArguments": null,
                  "start": 3474,
                  "end": 3492
                },
                "start": 3472,
                "end": 3492
              },
              "accessibility": null,
              "static": false,
              "start": 3468,
              "end": 3493
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "segments",
                "optional": false,
                "typeAnnotation": null,
                "start": 3496,
                "end": 3504
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TLDrawShapeSegment",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3506,
                      "end": 3524
                    },
                    "typeArguments": null,
                    "start": 3506,
                    "end": 3524
                  },
                  "start": 3506,
                  "end": 3526
                },
                "start": 3504,
                "end": 3526
              },
              "accessibility": null,
              "static": false,
              "start": 3496,
              "end": 3527
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "isComplete",
                "optional": false,
                "typeAnnotation": null,
                "start": 3530,
                "end": 3540
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 3542,
                  "end": 3549
                },
                "start": 3540,
                "end": 3549
              },
              "accessibility": null,
              "static": false,
              "start": 3530,
              "end": 3550
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "isClosed",
                "optional": false,
                "typeAnnotation": null,
                "start": 3553,
                "end": 3561
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 3563,
                  "end": 3570
                },
                "start": 3561,
                "end": 3570
              },
              "accessibility": null,
              "static": false,
              "start": 3553,
              "end": 3571
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "isPen",
                "optional": false,
                "typeAnnotation": null,
                "start": 3574,
                "end": 3579
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 3581,
                  "end": 3588
                },
                "start": 3579,
                "end": 3588
              },
              "accessibility": null,
              "static": false,
              "start": 3574,
              "end": 3589
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "scale",
                "optional": false,
                "typeAnnotation": null,
                "start": 3592,
                "end": 3597
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 3599,
                  "end": 3605
                },
                "start": 3597,
                "end": 3605
              },
              "accessibility": null,
              "static": false,
              "start": 3592,
              "end": 3606
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "scaleX",
                "optional": false,
                "typeAnnotation": null,
                "start": 3609,
                "end": 3615
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 3617,
                  "end": 3623
                },
                "start": 3615,
                "end": 3623
              },
              "accessibility": null,
              "static": false,
              "start": 3609,
              "end": 3624
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "scaleY",
                "optional": false,
                "typeAnnotation": null,
                "start": 3627,
                "end": 3633
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 3635,
                  "end": 3641
                },
                "start": 3633,
                "end": 3641
              },
              "accessibility": null,
              "static": false,
              "start": 3627,
              "end": 3642
            }
          ],
          "start": 3378,
          "end": 3644
        },
        "declare": false,
        "start": 3351,
        "end": 3644
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 3344,
      "end": 3644
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLDrawShape",
        "optional": false,
        "typeAnnotation": null,
        "start": 3651,
        "end": 3662
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "TLBaseShape",
          "optional": false,
          "typeAnnotation": null,
          "start": 3665,
          "end": 3676
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "draw",
                "raw": "\"draw\"",
                "start": 3677,
                "end": 3683
              },
              "start": 3677,
              "end": 3683
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TLDrawShapeProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 3685,
                "end": 3701
              },
              "typeArguments": null,
              "start": 3685,
              "end": 3701
            }
          ],
          "start": 3676,
          "end": 3702
        },
        "start": 3665,
        "end": 3702
      },
      "declare": false,
      "start": 3646,
      "end": 3703
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLEmbedShapeProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 3715,
        "end": 3732
      },
      "typeParameters": null,
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 3737,
              "end": 3738
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3740,
                "end": 3746
              },
              "start": 3738,
              "end": 3746
            },
            "accessibility": null,
            "static": false,
            "start": 3737,
            "end": 3747
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null,
              "start": 3750,
              "end": 3751
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3753,
                "end": 3759
              },
              "start": 3751,
              "end": 3759
            },
            "accessibility": null,
            "static": false,
            "start": 3750,
            "end": 3760
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "url",
              "optional": false,
              "typeAnnotation": null,
              "start": 3763,
              "end": 3766
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3768,
                "end": 3774
              },
              "start": 3766,
              "end": 3774
            },
            "accessibility": null,
            "static": false,
            "start": 3763,
            "end": 3775
          }
        ],
        "start": 3733,
        "end": 3777
      },
      "declare": false,
      "start": 3705,
      "end": 3777
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLEmbedShape",
        "optional": false,
        "typeAnnotation": null,
        "start": 3784,
        "end": 3796
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "TLBaseShape",
          "optional": false,
          "typeAnnotation": null,
          "start": 3799,
          "end": 3810
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "embed",
                "raw": "\"embed\"",
                "start": 3811,
                "end": 3818
              },
              "start": 3811,
              "end": 3818
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TLEmbedShapeProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 3820,
                "end": 3837
              },
              "typeArguments": null,
              "start": 3820,
              "end": 3837
            }
          ],
          "start": 3810,
          "end": 3838
        },
        "start": 3799,
        "end": 3838
      },
      "declare": false,
      "start": 3779,
      "end": 3839
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLFrameShapeProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 3851,
        "end": 3868
      },
      "typeParameters": null,
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 3873,
              "end": 3874
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3876,
                "end": 3882
              },
              "start": 3874,
              "end": 3882
            },
            "accessibility": null,
            "static": false,
            "start": 3873,
            "end": 3883
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null,
              "start": 3886,
              "end": 3887
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3889,
                "end": 3895
              },
              "start": 3887,
              "end": 3895
            },
            "accessibility": null,
            "static": false,
            "start": 3886,
            "end": 3896
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 3899,
              "end": 3903
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3905,
                "end": 3911
              },
              "start": 3903,
              "end": 3911
            },
            "accessibility": null,
            "static": false,
            "start": 3899,
            "end": 3912
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "color",
              "optional": false,
              "typeAnnotation": null,
              "start": 3915,
              "end": 3920
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TLDefaultColorStyle",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3922,
                  "end": 3941
                },
                "typeArguments": null,
                "start": 3922,
                "end": 3941
              },
              "start": 3920,
              "end": 3941
            },
            "accessibility": null,
            "static": false,
            "start": 3915,
            "end": 3942
          }
        ],
        "start": 3869,
        "end": 3944
      },
      "declare": false,
      "start": 3841,
      "end": 3944
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLFrameShape",
        "optional": false,
        "typeAnnotation": null,
        "start": 3951,
        "end": 3963
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "TLBaseShape",
          "optional": false,
          "typeAnnotation": null,
          "start": 3966,
          "end": 3977
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "frame",
                "raw": "\"frame\"",
                "start": 3978,
                "end": 3985
              },
              "start": 3978,
              "end": 3985
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TLFrameShapeProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 3987,
                "end": 4004
              },
              "typeArguments": null,
              "start": 3987,
              "end": 4004
            }
          ],
          "start": 3977,
          "end": 4005
        },
        "start": 3966,
        "end": 4005
      },
      "declare": false,
      "start": 3946,
      "end": 4006
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLGeoShapeProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 4018,
        "end": 4033
      },
      "typeParameters": null,
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
              "name": "geo",
              "optional": false,
              "typeAnnotation": null,
              "start": 4038,
              "end": 4041
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TLGeoShapeGeoStyle",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4043,
                  "end": 4061
                },
                "typeArguments": null,
                "start": 4043,
                "end": 4061
              },
              "start": 4041,
              "end": 4061
            },
            "accessibility": null,
            "static": false,
            "start": 4038,
            "end": 4062
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "dash",
              "optional": false,
              "typeAnnotation": null,
              "start": 4065,
              "end": 4069
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TLDefaultDashStyle",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4071,
                  "end": 4089
                },
                "typeArguments": null,
                "start": 4071,
                "end": 4089
              },
              "start": 4069,
              "end": 4089
            },
            "accessibility": null,
            "static": false,
            "start": 4065,
            "end": 4090
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "url",
              "optional": false,
              "typeAnnotation": null,
              "start": 4093,
              "end": 4096
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 4098,
                "end": 4104
              },
              "start": 4096,
              "end": 4104
            },
            "accessibility": null,
            "static": false,
            "start": 4093,
            "end": 4105
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 4108,
              "end": 4109
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 4111,
                "end": 4117
              },
              "start": 4109,
              "end": 4117
            },
            "accessibility": null,
            "static": false,
            "start": 4108,
            "end": 4118
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null,
              "start": 4121,
              "end": 4122
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 4124,
                "end": 4130
              },
              "start": 4122,
              "end": 4130
            },
            "accessibility": null,
            "static": false,
            "start": 4121,
            "end": 4131
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "growY",
              "optional": false,
              "typeAnnotation": null,
              "start": 4134,
              "end": 4139
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 4141,
                "end": 4147
              },
              "start": 4139,
              "end": 4147
            },
            "accessibility": null,
            "static": false,
            "start": 4134,
            "end": 4148
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "scale",
              "optional": false,
              "typeAnnotation": null,
              "start": 4151,
              "end": 4156
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 4158,
                "end": 4164
              },
              "start": 4156,
              "end": 4164
            },
            "accessibility": null,
            "static": false,
            "start": 4151,
            "end": 4165
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "labelColor",
              "optional": false,
              "typeAnnotation": null,
              "start": 4168,
              "end": 4178
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TLDefaultColorStyle",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4180,
                  "end": 4199
                },
                "typeArguments": null,
                "start": 4180,
                "end": 4199
              },
              "start": 4178,
              "end": 4199
            },
            "accessibility": null,
            "static": false,
            "start": 4168,
            "end": 4200
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "color",
              "optional": false,
              "typeAnnotation": null,
              "start": 4203,
              "end": 4208
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TLDefaultColorStyle",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4210,
                  "end": 4229
                },
                "typeArguments": null,
                "start": 4210,
                "end": 4229
              },
              "start": 4208,
              "end": 4229
            },
            "accessibility": null,
            "static": false,
            "start": 4203,
            "end": 4230
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fill",
              "optional": false,
              "typeAnnotation": null,
              "start": 4233,
              "end": 4237
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TLDefaultFillStyle",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4239,
                  "end": 4257
                },
                "typeArguments": null,
                "start": 4239,
                "end": 4257
              },
              "start": 4237,
              "end": 4257
            },
            "accessibility": null,
            "static": false,
            "start": 4233,
            "end": 4258
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "size",
              "optional": false,
              "typeAnnotation": null,
              "start": 4261,
              "end": 4265
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TLDefaultSizeStyle",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4267,
                  "end": 4285
                },
                "typeArguments": null,
                "start": 4267,
                "end": 4285
              },
              "start": 4265,
              "end": 4285
            },
            "accessibility": null,
            "static": false,
            "start": 4261,
            "end": 4286
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "font",
              "optional": false,
              "typeAnnotation": null,
              "start": 4289,
              "end": 4293
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TLDefaultFontStyle",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4295,
                  "end": 4313
                },
                "typeArguments": null,
                "start": 4295,
                "end": 4313
              },
              "start": 4293,
              "end": 4313
            },
            "accessibility": null,
            "static": false,
            "start": 4289,
            "end": 4314
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "align",
              "optional": false,
              "typeAnnotation": null,
              "start": 4317,
              "end": 4322
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TLDefaultHorizontalAlignStyle",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4324,
                  "end": 4353
                },
                "typeArguments": null,
                "start": 4324,
                "end": 4353
              },
              "start": 4322,
              "end": 4353
            },
            "accessibility": null,
            "static": false,
            "start": 4317,
            "end": 4354
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "verticalAlign",
              "optional": false,
              "typeAnnotation": null,
              "start": 4357,
              "end": 4370
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TLDefaultVerticalAlignStyle",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4372,
                  "end": 4399
                },
                "typeArguments": null,
                "start": 4372,
                "end": 4399
              },
              "start": 4370,
              "end": 4399
            },
            "accessibility": null,
            "static": false,
            "start": 4357,
            "end": 4400
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "richText",
              "optional": false,
              "typeAnnotation": null,
              "start": 4403,
              "end": 4411
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TLRichText",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4413,
                  "end": 4423
                },
                "typeArguments": null,
                "start": 4413,
                "end": 4423
              },
              "start": 4411,
              "end": 4423
            },
            "accessibility": null,
            "static": false,
            "start": 4403,
            "end": 4424
          }
        ],
        "start": 4034,
        "end": 4426
      },
      "declare": false,
      "start": 4008,
      "end": 4426
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLGeoShape",
        "optional": false,
        "typeAnnotation": null,
        "start": 4433,
        "end": 4443
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "TLBaseShape",
          "optional": false,
          "typeAnnotation": null,
          "start": 4446,
          "end": 4457
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "geo",
                "raw": "\"geo\"",
                "start": 4458,
                "end": 4463
              },
              "start": 4458,
              "end": 4463
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TLGeoShapeProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 4465,
                "end": 4480
              },
              "typeArguments": null,
              "start": 4465,
              "end": 4480
            }
          ],
          "start": 4457,
          "end": 4481
        },
        "start": 4446,
        "end": 4481
      },
      "declare": false,
      "start": 4428,
      "end": 4482
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLGroupShapeProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 4494,
        "end": 4511
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 4512,
        "end": 4514
      },
      "declare": false,
      "start": 4484,
      "end": 4514
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLGroupShape",
        "optional": false,
        "typeAnnotation": null,
        "start": 4521,
        "end": 4533
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "TLBaseShape",
          "optional": false,
          "typeAnnotation": null,
          "start": 4536,
          "end": 4547
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "group",
                "raw": "\"group\"",
                "start": 4548,
                "end": 4555
              },
              "start": 4548,
              "end": 4555
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TLGroupShapeProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 4557,
                "end": 4574
              },
              "typeArguments": null,
              "start": 4557,
              "end": 4574
            }
          ],
          "start": 4547,
          "end": 4575
        },
        "start": 4536,
        "end": 4575
      },
      "declare": false,
      "start": 4516,
      "end": 4576
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLDrawShapeSegment",
        "optional": false,
        "typeAnnotation": null,
        "start": 4588,
        "end": 4606
      },
      "typeParameters": null,
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 4611,
              "end": 4615
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "free",
                      "raw": "\"free\"",
                      "start": 4617,
                      "end": 4623
                    },
                    "start": 4617,
                    "end": 4623
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "straight",
                      "raw": "\"straight\"",
                      "start": 4626,
                      "end": 4636
                    },
                    "start": 4626,
                    "end": 4636
                  }
                ],
                "start": 4617,
                "end": 4636
              },
              "start": 4615,
              "end": 4636
            },
            "accessibility": null,
            "static": false,
            "start": 4611,
            "end": 4637
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "path",
              "optional": false,
              "typeAnnotation": null,
              "start": 4640,
              "end": 4644
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 4646,
                "end": 4652
              },
              "start": 4644,
              "end": 4652
            },
            "accessibility": null,
            "static": false,
            "start": 4640,
            "end": 4653
          }
        ],
        "start": 4607,
        "end": 4655
      },
      "declare": false,
      "start": 4578,
      "end": 4655
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLHighlightShapeProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 4667,
        "end": 4688
      },
      "typeParameters": null,
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
              "name": "color",
              "optional": false,
              "typeAnnotation": null,
              "start": 4693,
              "end": 4698
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TLDefaultColorStyle",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4700,
                  "end": 4719
                },
                "typeArguments": null,
                "start": 4700,
                "end": 4719
              },
              "start": 4698,
              "end": 4719
            },
            "accessibility": null,
            "static": false,
            "start": 4693,
            "end": 4720
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "size",
              "optional": false,
              "typeAnnotation": null,
              "start": 4723,
              "end": 4727
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TLDefaultSizeStyle",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4729,
                  "end": 4747
                },
                "typeArguments": null,
                "start": 4729,
                "end": 4747
              },
              "start": 4727,
              "end": 4747
            },
            "accessibility": null,
            "static": false,
            "start": 4723,
            "end": 4748
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "segments",
              "optional": false,
              "typeAnnotation": null,
              "start": 4751,
              "end": 4759
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TLDrawShapeSegment",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4761,
                    "end": 4779
                  },
                  "typeArguments": null,
                  "start": 4761,
                  "end": 4779
                },
                "start": 4761,
                "end": 4781
              },
              "start": 4759,
              "end": 4781
            },
            "accessibility": null,
            "static": false,
            "start": 4751,
            "end": 4782
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isComplete",
              "optional": false,
              "typeAnnotation": null,
              "start": 4785,
              "end": 4795
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 4797,
                "end": 4804
              },
              "start": 4795,
              "end": 4804
            },
            "accessibility": null,
            "static": false,
            "start": 4785,
            "end": 4805
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isPen",
              "optional": false,
              "typeAnnotation": null,
              "start": 4808,
              "end": 4813
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 4815,
                "end": 4822
              },
              "start": 4813,
              "end": 4822
            },
            "accessibility": null,
            "static": false,
            "start": 4808,
            "end": 4823
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "scale",
              "optional": false,
              "typeAnnotation": null,
              "start": 4826,
              "end": 4831
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 4833,
                "end": 4839
              },
              "start": 4831,
              "end": 4839
            },
            "accessibility": null,
            "static": false,
            "start": 4826,
            "end": 4840
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "scaleX",
              "optional": false,
              "typeAnnotation": null,
              "start": 4843,
              "end": 4849
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 4851,
                "end": 4857
              },
              "start": 4849,
              "end": 4857
            },
            "accessibility": null,
            "static": false,
            "start": 4843,
            "end": 4858
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "scaleY",
              "optional": false,
              "typeAnnotation": null,
              "start": 4861,
              "end": 4867
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 4869,
                "end": 4875
              },
              "start": 4867,
              "end": 4875
            },
            "accessibility": null,
            "static": false,
            "start": 4861,
            "end": 4876
          }
        ],
        "start": 4689,
        "end": 4878
      },
      "declare": false,
      "start": 4657,
      "end": 4878
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLHighlightShape",
        "optional": false,
        "typeAnnotation": null,
        "start": 4885,
        "end": 4901
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "TLBaseShape",
          "optional": false,
          "typeAnnotation": null,
          "start": 4904,
          "end": 4915
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "highlight",
                "raw": "\"highlight\"",
                "start": 4916,
                "end": 4927
              },
              "start": 4916,
              "end": 4927
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TLHighlightShapeProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 4929,
                "end": 4950
              },
              "typeArguments": null,
              "start": 4929,
              "end": 4950
            }
          ],
          "start": 4915,
          "end": 4951
        },
        "start": 4904,
        "end": 4951
      },
      "declare": false,
      "start": 4880,
      "end": 4952
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLImageShapeProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 4964,
        "end": 4981
      },
      "typeParameters": null,
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 4986,
              "end": 4987
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 4989,
                "end": 4995
              },
              "start": 4987,
              "end": 4995
            },
            "accessibility": null,
            "static": false,
            "start": 4986,
            "end": 4996
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null,
              "start": 5000,
              "end": 5001
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 5003,
                "end": 5009
              },
              "start": 5001,
              "end": 5009
            },
            "accessibility": null,
            "static": false,
            "start": 5000,
            "end": 5010
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "playing",
              "optional": false,
              "typeAnnotation": null,
              "start": 5014,
              "end": 5021
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 5023,
                "end": 5030
              },
              "start": 5021,
              "end": 5030
            },
            "accessibility": null,
            "static": false,
            "start": 5014,
            "end": 5031
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "url",
              "optional": false,
              "typeAnnotation": null,
              "start": 5035,
              "end": 5038
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 5040,
                "end": 5046
              },
              "start": 5038,
              "end": 5046
            },
            "accessibility": null,
            "static": false,
            "start": 5035,
            "end": 5047
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "assetId",
              "optional": false,
              "typeAnnotation": null,
              "start": 5051,
              "end": 5058
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNullKeyword",
                    "start": 5060,
                    "end": 5064
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TLAssetId",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5067,
                      "end": 5076
                    },
                    "typeArguments": null,
                    "start": 5067,
                    "end": 5076
                  }
                ],
                "start": 5060,
                "end": 5076
              },
              "start": 5058,
              "end": 5076
            },
            "accessibility": null,
            "static": false,
            "start": 5051,
            "end": 5077
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "crop",
              "optional": false,
              "typeAnnotation": null,
              "start": 5081,
              "end": 5085
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNullKeyword",
                    "start": 5087,
                    "end": 5091
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TLShapeCrop",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5094,
                      "end": 5105
                    },
                    "typeArguments": null,
                    "start": 5094,
                    "end": 5105
                  }
                ],
                "start": 5087,
                "end": 5105
              },
              "start": 5085,
              "end": 5105
            },
            "accessibility": null,
            "static": false,
            "start": 5081,
            "end": 5106
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "flipX",
              "optional": false,
              "typeAnnotation": null,
              "start": 5110,
              "end": 5115
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 5117,
                "end": 5124
              },
              "start": 5115,
              "end": 5124
            },
            "accessibility": null,
            "static": false,
            "start": 5110,
            "end": 5125
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "flipY",
              "optional": false,
              "typeAnnotation": null,
              "start": 5129,
              "end": 5134
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 5136,
                "end": 5143
              },
              "start": 5134,
              "end": 5143
            },
            "accessibility": null,
            "static": false,
            "start": 5129,
            "end": 5144
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "altText",
              "optional": false,
              "typeAnnotation": null,
              "start": 5148,
              "end": 5155
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 5157,
                "end": 5163
              },
              "start": 5155,
              "end": 5163
            },
            "accessibility": null,
            "static": false,
            "start": 5148,
            "end": 5164
          }
        ],
        "start": 4982,
        "end": 5166
      },
      "declare": false,
      "start": 4954,
      "end": 5166
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLImageShape",
        "optional": false,
        "typeAnnotation": null,
        "start": 5173,
        "end": 5185
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "TLBaseShape",
          "optional": false,
          "typeAnnotation": null,
          "start": 5188,
          "end": 5199
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "image",
                "raw": "\"image\"",
                "start": 5200,
                "end": 5207
              },
              "start": 5200,
              "end": 5207
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TLImageShapeProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 5209,
                "end": 5226
              },
              "typeArguments": null,
              "start": 5209,
              "end": 5226
            }
          ],
          "start": 5199,
          "end": 5227
        },
        "start": 5188,
        "end": 5227
      },
      "declare": false,
      "start": 5168,
      "end": 5228
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLLineShapeProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 5240,
        "end": 5256
      },
      "typeParameters": null,
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
              "name": "color",
              "optional": false,
              "typeAnnotation": null,
              "start": 5261,
              "end": 5266
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TLDefaultColorStyle",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5268,
                  "end": 5287
                },
                "typeArguments": null,
                "start": 5268,
                "end": 5287
              },
              "start": 5266,
              "end": 5287
            },
            "accessibility": null,
            "static": false,
            "start": 5261,
            "end": 5288
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "dash",
              "optional": false,
              "typeAnnotation": null,
              "start": 5291,
              "end": 5295
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TLDefaultDashStyle",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5297,
                  "end": 5315
                },
                "typeArguments": null,
                "start": 5297,
                "end": 5315
              },
              "start": 5295,
              "end": 5315
            },
            "accessibility": null,
            "static": false,
            "start": 5291,
            "end": 5316
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "size",
              "optional": false,
              "typeAnnotation": null,
              "start": 5319,
              "end": 5323
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TLDefaultSizeStyle",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5325,
                  "end": 5343
                },
                "typeArguments": null,
                "start": 5325,
                "end": 5343
              },
              "start": 5323,
              "end": 5343
            },
            "accessibility": null,
            "static": false,
            "start": 5319,
            "end": 5344
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "spline",
              "optional": false,
              "typeAnnotation": null,
              "start": 5347,
              "end": 5353
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TLLineShapeSplineStyle",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5355,
                  "end": 5377
                },
                "typeArguments": null,
                "start": 5355,
                "end": 5377
              },
              "start": 5353,
              "end": 5377
            },
            "accessibility": null,
            "static": false,
            "start": 5347,
            "end": 5378
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "points",
              "optional": false,
              "typeAnnotation": null,
              "start": 5381,
              "end": 5387
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5389,
                  "end": 5395
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 5396,
                      "end": 5402
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TLLineShapePoint",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5404,
                        "end": 5420
                      },
                      "typeArguments": null,
                      "start": 5404,
                      "end": 5420
                    }
                  ],
                  "start": 5395,
                  "end": 5421
                },
                "start": 5389,
                "end": 5421
              },
              "start": 5387,
              "end": 5421
            },
            "accessibility": null,
            "static": false,
            "start": 5381,
            "end": 5422
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "scale",
              "optional": false,
              "typeAnnotation": null,
              "start": 5425,
              "end": 5430
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 5432,
                "end": 5438
              },
              "start": 5430,
              "end": 5438
            },
            "accessibility": null,
            "static": false,
            "start": 5425,
            "end": 5439
          }
        ],
        "start": 5257,
        "end": 5441
      },
      "declare": false,
      "start": 5230,
      "end": 5441
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLLineShape",
        "optional": false,
        "typeAnnotation": null,
        "start": 5448,
        "end": 5459
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "TLBaseShape",
          "optional": false,
          "typeAnnotation": null,
          "start": 5462,
          "end": 5473
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "line",
                "raw": "\"line\"",
                "start": 5474,
                "end": 5480
              },
              "start": 5474,
              "end": 5480
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TLLineShapeProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 5482,
                "end": 5498
              },
              "typeArguments": null,
              "start": 5482,
              "end": 5498
            }
          ],
          "start": 5473,
          "end": 5499
        },
        "start": 5462,
        "end": 5499
      },
      "declare": false,
      "start": 5443,
      "end": 5500
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLNoteShapeProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 5512,
        "end": 5528
      },
      "typeParameters": null,
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
              "name": "color",
              "optional": false,
              "typeAnnotation": null,
              "start": 5533,
              "end": 5538
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TLDefaultColorStyle",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5540,
                  "end": 5559
                },
                "typeArguments": null,
                "start": 5540,
                "end": 5559
              },
              "start": 5538,
              "end": 5559
            },
            "accessibility": null,
            "static": false,
            "start": 5533,
            "end": 5560
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "labelColor",
              "optional": false,
              "typeAnnotation": null,
              "start": 5563,
              "end": 5573
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TLDefaultColorStyle",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5575,
                  "end": 5594
                },
                "typeArguments": null,
                "start": 5575,
                "end": 5594
              },
              "start": 5573,
              "end": 5594
            },
            "accessibility": null,
            "static": false,
            "start": 5563,
            "end": 5595
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "size",
              "optional": false,
              "typeAnnotation": null,
              "start": 5598,
              "end": 5602
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TLDefaultSizeStyle",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5604,
                  "end": 5622
                },
                "typeArguments": null,
                "start": 5604,
                "end": 5622
              },
              "start": 5602,
              "end": 5622
            },
            "accessibility": null,
            "static": false,
            "start": 5598,
            "end": 5623
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "font",
              "optional": false,
              "typeAnnotation": null,
              "start": 5626,
              "end": 5630
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TLDefaultFontStyle",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5632,
                  "end": 5650
                },
                "typeArguments": null,
                "start": 5632,
                "end": 5650
              },
              "start": 5630,
              "end": 5650
            },
            "accessibility": null,
            "static": false,
            "start": 5626,
            "end": 5651
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fontSizeAdjustment",
              "optional": false,
              "typeAnnotation": null,
              "start": 5654,
              "end": 5672
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 5674,
                "end": 5680
              },
              "start": 5672,
              "end": 5680
            },
            "accessibility": null,
            "static": false,
            "start": 5654,
            "end": 5681
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "align",
              "optional": false,
              "typeAnnotation": null,
              "start": 5684,
              "end": 5689
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TLDefaultHorizontalAlignStyle",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5691,
                  "end": 5720
                },
                "typeArguments": null,
                "start": 5691,
                "end": 5720
              },
              "start": 5689,
              "end": 5720
            },
            "accessibility": null,
            "static": false,
            "start": 5684,
            "end": 5721
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "verticalAlign",
              "optional": false,
              "typeAnnotation": null,
              "start": 5724,
              "end": 5737
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TLDefaultVerticalAlignStyle",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5739,
                  "end": 5766
                },
                "typeArguments": null,
                "start": 5739,
                "end": 5766
              },
              "start": 5737,
              "end": 5766
            },
            "accessibility": null,
            "static": false,
            "start": 5724,
            "end": 5767
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "growY",
              "optional": false,
              "typeAnnotation": null,
              "start": 5770,
              "end": 5775
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 5777,
                "end": 5783
              },
              "start": 5775,
              "end": 5783
            },
            "accessibility": null,
            "static": false,
            "start": 5770,
            "end": 5784
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "url",
              "optional": false,
              "typeAnnotation": null,
              "start": 5787,
              "end": 5790
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 5792,
                "end": 5798
              },
              "start": 5790,
              "end": 5798
            },
            "accessibility": null,
            "static": false,
            "start": 5787,
            "end": 5799
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "richText",
              "optional": false,
              "typeAnnotation": null,
              "start": 5802,
              "end": 5810
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TLRichText",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5812,
                  "end": 5822
                },
                "typeArguments": null,
                "start": 5812,
                "end": 5822
              },
              "start": 5810,
              "end": 5822
            },
            "accessibility": null,
            "static": false,
            "start": 5802,
            "end": 5823
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "scale",
              "optional": false,
              "typeAnnotation": null,
              "start": 5826,
              "end": 5831
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 5833,
                "end": 5839
              },
              "start": 5831,
              "end": 5839
            },
            "accessibility": null,
            "static": false,
            "start": 5826,
            "end": 5840
          }
        ],
        "start": 5529,
        "end": 5842
      },
      "declare": false,
      "start": 5502,
      "end": 5842
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLNoteShape",
        "optional": false,
        "typeAnnotation": null,
        "start": 5849,
        "end": 5860
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "TLBaseShape",
          "optional": false,
          "typeAnnotation": null,
          "start": 5863,
          "end": 5874
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "note",
                "raw": "\"note\"",
                "start": 5875,
                "end": 5881
              },
              "start": 5875,
              "end": 5881
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TLNoteShapeProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 5883,
                "end": 5899
              },
              "typeArguments": null,
              "start": 5883,
              "end": 5899
            }
          ],
          "start": 5874,
          "end": 5900
        },
        "start": 5863,
        "end": 5900
      },
      "declare": false,
      "start": 5844,
      "end": 5901
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLTextShapeProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 5913,
        "end": 5929
      },
      "typeParameters": null,
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
              "name": "color",
              "optional": false,
              "typeAnnotation": null,
              "start": 5934,
              "end": 5939
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TLDefaultColorStyle",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5941,
                  "end": 5960
                },
                "typeArguments": null,
                "start": 5941,
                "end": 5960
              },
              "start": 5939,
              "end": 5960
            },
            "accessibility": null,
            "static": false,
            "start": 5934,
            "end": 5961
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "size",
              "optional": false,
              "typeAnnotation": null,
              "start": 5964,
              "end": 5968
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TLDefaultSizeStyle",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5970,
                  "end": 5988
                },
                "typeArguments": null,
                "start": 5970,
                "end": 5988
              },
              "start": 5968,
              "end": 5988
            },
            "accessibility": null,
            "static": false,
            "start": 5964,
            "end": 5989
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "font",
              "optional": false,
              "typeAnnotation": null,
              "start": 5992,
              "end": 5996
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TLDefaultFontStyle",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5998,
                  "end": 6016
                },
                "typeArguments": null,
                "start": 5998,
                "end": 6016
              },
              "start": 5996,
              "end": 6016
            },
            "accessibility": null,
            "static": false,
            "start": 5992,
            "end": 6017
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "textAlign",
              "optional": false,
              "typeAnnotation": null,
              "start": 6020,
              "end": 6029
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TLDefaultTextAlignStyle",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6031,
                  "end": 6054
                },
                "typeArguments": null,
                "start": 6031,
                "end": 6054
              },
              "start": 6029,
              "end": 6054
            },
            "accessibility": null,
            "static": false,
            "start": 6020,
            "end": 6055
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 6058,
              "end": 6059
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 6061,
                "end": 6067
              },
              "start": 6059,
              "end": 6067
            },
            "accessibility": null,
            "static": false,
            "start": 6058,
            "end": 6068
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "richText",
              "optional": false,
              "typeAnnotation": null,
              "start": 6071,
              "end": 6079
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TLRichText",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6081,
                  "end": 6091
                },
                "typeArguments": null,
                "start": 6081,
                "end": 6091
              },
              "start": 6079,
              "end": 6091
            },
            "accessibility": null,
            "static": false,
            "start": 6071,
            "end": 6092
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "scale",
              "optional": false,
              "typeAnnotation": null,
              "start": 6095,
              "end": 6100
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 6102,
                "end": 6108
              },
              "start": 6100,
              "end": 6108
            },
            "accessibility": null,
            "static": false,
            "start": 6095,
            "end": 6109
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "autoSize",
              "optional": false,
              "typeAnnotation": null,
              "start": 6112,
              "end": 6120
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 6122,
                "end": 6129
              },
              "start": 6120,
              "end": 6129
            },
            "accessibility": null,
            "static": false,
            "start": 6112,
            "end": 6130
          }
        ],
        "start": 5930,
        "end": 6132
      },
      "declare": false,
      "start": 5903,
      "end": 6132
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLTextShape",
        "optional": false,
        "typeAnnotation": null,
        "start": 6139,
        "end": 6150
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "TLBaseShape",
          "optional": false,
          "typeAnnotation": null,
          "start": 6153,
          "end": 6164
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "text",
                "raw": "\"text\"",
                "start": 6165,
                "end": 6171
              },
              "start": 6165,
              "end": 6171
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TLTextShapeProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 6173,
                "end": 6189
              },
              "typeArguments": null,
              "start": 6173,
              "end": 6189
            }
          ],
          "start": 6164,
          "end": 6190
        },
        "start": 6153,
        "end": 6190
      },
      "declare": false,
      "start": 6134,
      "end": 6191
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLVideoShapeProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 6203,
        "end": 6220
      },
      "typeParameters": null,
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 6225,
              "end": 6226
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 6228,
                "end": 6234
              },
              "start": 6226,
              "end": 6234
            },
            "accessibility": null,
            "static": false,
            "start": 6225,
            "end": 6235
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null,
              "start": 6238,
              "end": 6239
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 6241,
                "end": 6247
              },
              "start": 6239,
              "end": 6247
            },
            "accessibility": null,
            "static": false,
            "start": 6238,
            "end": 6248
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "time",
              "optional": false,
              "typeAnnotation": null,
              "start": 6251,
              "end": 6255
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 6257,
                "end": 6263
              },
              "start": 6255,
              "end": 6263
            },
            "accessibility": null,
            "static": false,
            "start": 6251,
            "end": 6264
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "playing",
              "optional": false,
              "typeAnnotation": null,
              "start": 6267,
              "end": 6274
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 6276,
                "end": 6283
              },
              "start": 6274,
              "end": 6283
            },
            "accessibility": null,
            "static": false,
            "start": 6267,
            "end": 6284
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "autoplay",
              "optional": false,
              "typeAnnotation": null,
              "start": 6287,
              "end": 6295
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 6297,
                "end": 6304
              },
              "start": 6295,
              "end": 6304
            },
            "accessibility": null,
            "static": false,
            "start": 6287,
            "end": 6305
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "url",
              "optional": false,
              "typeAnnotation": null,
              "start": 6308,
              "end": 6311
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 6313,
                "end": 6319
              },
              "start": 6311,
              "end": 6319
            },
            "accessibility": null,
            "static": false,
            "start": 6308,
            "end": 6320
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "assetId",
              "optional": false,
              "typeAnnotation": null,
              "start": 6323,
              "end": 6330
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNullKeyword",
                    "start": 6332,
                    "end": 6336
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TLAssetId",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6339,
                      "end": 6348
                    },
                    "typeArguments": null,
                    "start": 6339,
                    "end": 6348
                  }
                ],
                "start": 6332,
                "end": 6348
              },
              "start": 6330,
              "end": 6348
            },
            "accessibility": null,
            "static": false,
            "start": 6323,
            "end": 6349
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "altText",
              "optional": false,
              "typeAnnotation": null,
              "start": 6352,
              "end": 6359
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 6361,
                "end": 6367
              },
              "start": 6359,
              "end": 6367
            },
            "accessibility": null,
            "static": false,
            "start": 6352,
            "end": 6368
          }
        ],
        "start": 6221,
        "end": 6370
      },
      "declare": false,
      "start": 6193,
      "end": 6370
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLVideoShape",
        "optional": false,
        "typeAnnotation": null,
        "start": 6377,
        "end": 6389
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "TLBaseShape",
          "optional": false,
          "typeAnnotation": null,
          "start": 6392,
          "end": 6403
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "video",
                "raw": "\"video\"",
                "start": 6404,
                "end": 6411
              },
              "start": 6404,
              "end": 6411
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TLVideoShapeProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 6413,
                "end": 6430
              },
              "typeArguments": null,
              "start": 6413,
              "end": 6430
            }
          ],
          "start": 6403,
          "end": 6431
        },
        "start": 6392,
        "end": 6431
      },
      "declare": false,
      "start": 6372,
      "end": 6432
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLDefaultShape",
        "optional": false,
        "typeAnnotation": null,
        "start": 6439,
        "end": 6453
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TLArrowShape",
              "optional": false,
              "typeAnnotation": null,
              "start": 6460,
              "end": 6472
            },
            "typeArguments": null,
            "start": 6460,
            "end": 6472
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TLBookmarkShape",
              "optional": false,
              "typeAnnotation": null,
              "start": 6477,
              "end": 6492
            },
            "typeArguments": null,
            "start": 6477,
            "end": 6492
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TLDrawShape",
              "optional": false,
              "typeAnnotation": null,
              "start": 6497,
              "end": 6508
            },
            "typeArguments": null,
            "start": 6497,
            "end": 6508
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TLEmbedShape",
              "optional": false,
              "typeAnnotation": null,
              "start": 6513,
              "end": 6525
            },
            "typeArguments": null,
            "start": 6513,
            "end": 6525
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TLFrameShape",
              "optional": false,
              "typeAnnotation": null,
              "start": 6530,
              "end": 6542
            },
            "typeArguments": null,
            "start": 6530,
            "end": 6542
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TLGeoShape",
              "optional": false,
              "typeAnnotation": null,
              "start": 6547,
              "end": 6557
            },
            "typeArguments": null,
            "start": 6547,
            "end": 6557
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TLGroupShape",
              "optional": false,
              "typeAnnotation": null,
              "start": 6562,
              "end": 6574
            },
            "typeArguments": null,
            "start": 6562,
            "end": 6574
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TLHighlightShape",
              "optional": false,
              "typeAnnotation": null,
              "start": 6579,
              "end": 6595
            },
            "typeArguments": null,
            "start": 6579,
            "end": 6595
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TLImageShape",
              "optional": false,
              "typeAnnotation": null,
              "start": 6600,
              "end": 6612
            },
            "typeArguments": null,
            "start": 6600,
            "end": 6612
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TLLineShape",
              "optional": false,
              "typeAnnotation": null,
              "start": 6617,
              "end": 6628
            },
            "typeArguments": null,
            "start": 6617,
            "end": 6628
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TLNoteShape",
              "optional": false,
              "typeAnnotation": null,
              "start": 6633,
              "end": 6644
            },
            "typeArguments": null,
            "start": 6633,
            "end": 6644
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TLTextShape",
              "optional": false,
              "typeAnnotation": null,
              "start": 6649,
              "end": 6660
            },
            "typeArguments": null,
            "start": 6649,
            "end": 6660
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TLVideoShape",
              "optional": false,
              "typeAnnotation": null,
              "start": 6665,
              "end": 6677
            },
            "typeArguments": null,
            "start": 6665,
            "end": 6677
          }
        ],
        "start": 6458,
        "end": 6677
      },
      "declare": false,
      "start": 6434,
      "end": 6678
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLIndexedShapes",
        "optional": false,
        "typeAnnotation": null,
        "start": 6685,
        "end": 6700
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 6708,
          "end": 6709
        },
        "constraint": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TLGlobalShapePropsMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6725,
                  "end": 6746
                },
                "typeArguments": null,
                "start": 6725,
                "end": 6746
              },
              "start": 6719,
              "end": 6746
            },
            {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TLDefaultShape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6753,
                  "end": 6767
                },
                "typeArguments": null,
                "start": 6753,
                "end": 6767
              },
              "indexType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "type",
                  "raw": "\"type\"",
                  "start": 6768,
                  "end": 6774
                },
                "start": 6768,
                "end": 6774
              },
              "start": 6753,
              "end": 6775
            }
          ],
          "start": 6717,
          "end": 6775
        },
        "nameType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 6779,
              "end": 6780
            },
            "typeArguments": null,
            "start": 6779,
            "end": 6780
          },
          "extendsType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TLDefaultShape",
                "optional": false,
                "typeAnnotation": null,
                "start": 6789,
                "end": 6803
              },
              "typeArguments": null,
              "start": 6789,
              "end": 6803
            },
            "indexType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "type",
                "raw": "\"type\"",
                "start": 6804,
                "end": 6810
              },
              "start": 6804,
              "end": 6810
            },
            "start": 6789,
            "end": 6811
          },
          "trueType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 6818,
                "end": 6819
              },
              "typeArguments": null,
              "start": 6818,
              "end": 6819
            },
            "extendsType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "group",
                "raw": "\"group\"",
                "start": 6828,
                "end": 6835
              },
              "start": 6828,
              "end": 6835
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 6844,
                "end": 6845
              },
              "typeArguments": null,
              "start": 6844,
              "end": 6845
            },
            "falseType": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6854,
                  "end": 6855
                },
                "typeArguments": null,
                "start": 6854,
                "end": 6855
              },
              "extendsType": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TLGlobalShapePropsMap",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6870,
                    "end": 6891
                  },
                  "typeArguments": null,
                  "start": 6870,
                  "end": 6891
                },
                "start": 6864,
                "end": 6891
              },
              "trueType": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TLGlobalShapePropsMap",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6900,
                      "end": 6921
                    },
                    "typeArguments": null,
                    "start": 6900,
                    "end": 6921
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6922,
                      "end": 6923
                    },
                    "typeArguments": null,
                    "start": 6922,
                    "end": 6923
                  },
                  "start": 6900,
                  "end": 6924
                },
                "extendsType": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSNullKeyword",
                      "start": 6933,
                      "end": 6937
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 6940,
                      "end": 6949
                    }
                  ],
                  "start": 6933,
                  "end": 6949
                },
                "trueType": {
                  "type": "TSNeverKeyword",
                  "start": 6960,
                  "end": 6965
                },
                "falseType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6976,
                    "end": 6977
                  },
                  "typeArguments": null,
                  "start": 6976,
                  "end": 6977
                },
                "start": 6900,
                "end": 6977
              },
              "falseType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6986,
                  "end": 6987
                },
                "typeArguments": null,
                "start": 6986,
                "end": 6987
              },
              "start": 6854,
              "end": 6987
            },
            "start": 6818,
            "end": 6987
          },
          "falseType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 6994,
              "end": 6995
            },
            "typeArguments": null,
            "start": 6994,
            "end": 6995
          },
          "start": 6779,
          "end": 6995
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 6998,
              "end": 6999
            },
            "typeArguments": null,
            "start": 6998,
            "end": 6999
          },
          "extendsType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "group",
              "raw": "\"group\"",
              "start": 7008,
              "end": 7015
            },
            "start": 7008,
            "end": 7015
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Extract",
              "optional": false,
              "typeAnnotation": null,
              "start": 7022,
              "end": 7029
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TLDefaultShape",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7039,
                    "end": 7053
                  },
                  "typeArguments": null,
                  "start": 7039,
                  "end": 7053
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
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7075,
                        "end": 7079
                      },
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
                            "start": 7081,
                            "end": 7082
                          },
                          "typeArguments": null,
                          "start": 7081,
                          "end": 7082
                        },
                        "start": 7079,
                        "end": 7082
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 7075,
                      "end": 7083
                    }
                  ],
                  "start": 7063,
                  "end": 7093
                }
              ],
              "start": 7029,
              "end": 7101
            },
            "start": 7022,
            "end": 7101
          },
          "falseType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 7108,
                "end": 7109
              },
              "typeArguments": null,
              "start": 7108,
              "end": 7109
            },
            "extendsType": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TLDefaultShape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7118,
                  "end": 7132
                },
                "typeArguments": null,
                "start": 7118,
                "end": 7132
              },
              "indexType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "type",
                  "raw": "\"type\"",
                  "start": 7133,
                  "end": 7139
                },
                "start": 7133,
                "end": 7139
              },
              "start": 7118,
              "end": 7140
            },
            "trueType": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7147,
                  "end": 7148
                },
                "typeArguments": null,
                "start": 7147,
                "end": 7148
              },
              "extendsType": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TLGlobalShapePropsMap",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7163,
                    "end": 7184
                  },
                  "typeArguments": null,
                  "start": 7163,
                  "end": 7184
                },
                "start": 7157,
                "end": 7184
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TLBaseShape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7193,
                  "end": 7204
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7205,
                        "end": 7206
                      },
                      "typeArguments": null,
                      "start": 7205,
                      "end": 7206
                    },
                    {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TLGlobalShapePropsMap",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7208,
                          "end": 7229
                        },
                        "typeArguments": null,
                        "start": 7208,
                        "end": 7229
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7230,
                          "end": 7231
                        },
                        "typeArguments": null,
                        "start": 7230,
                        "end": 7231
                      },
                      "start": 7208,
                      "end": 7232
                    }
                  ],
                  "start": 7204,
                  "end": 7233
                },
                "start": 7193,
                "end": 7233
              },
              "falseType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Extract",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7242,
                  "end": 7249
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TLDefaultShape",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7261,
                        "end": 7275
                      },
                      "typeArguments": null,
                      "start": 7261,
                      "end": 7275
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
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7301,
                            "end": 7305
                          },
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
                                "start": 7307,
                                "end": 7308
                              },
                              "typeArguments": null,
                              "start": 7307,
                              "end": 7308
                            },
                            "start": 7305,
                            "end": 7308
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 7301,
                          "end": 7309
                        }
                      ],
                      "start": 7287,
                      "end": 7321
                    }
                  ],
                  "start": 7249,
                  "end": 7331
                },
                "start": 7242,
                "end": 7331
              },
              "start": 7147,
              "end": 7331
            },
            "falseType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TLBaseShape",
                "optional": false,
                "typeAnnotation": null,
                "start": 7338,
                "end": 7349
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7350,
                      "end": 7351
                    },
                    "typeArguments": null,
                    "start": 7350,
                    "end": 7351
                  },
                  {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TLGlobalShapePropsMap",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7353,
                        "end": 7374
                      },
                      "typeArguments": null,
                      "start": 7353,
                      "end": 7374
                    },
                    "indexType": {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7375,
                            "end": 7376
                          },
                          "typeArguments": null,
                          "start": 7375,
                          "end": 7376
                        },
                        {
                          "type": "TSTypeOperator",
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TLGlobalShapePropsMap",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 7385,
                              "end": 7406
                            },
                            "typeArguments": null,
                            "start": 7385,
                            "end": 7406
                          },
                          "start": 7379,
                          "end": 7406
                        }
                      ],
                      "start": 7375,
                      "end": 7406
                    },
                    "start": 7353,
                    "end": 7407
                  }
                ],
                "start": 7349,
                "end": 7408
              },
              "start": 7338,
              "end": 7408
            },
            "start": 7108,
            "end": 7408
          },
          "start": 6998,
          "end": 7408
        },
        "optional": false,
        "readonly": null,
        "start": 6703,
        "end": 7411
      },
      "declare": false,
      "start": 6680,
      "end": 7412
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLShape",
        "optional": false,
        "typeAnnotation": null,
        "start": 7419,
        "end": 7426
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
              "start": 7427,
              "end": 7428
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TLIndexedShapes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7443,
                  "end": 7458
                },
                "typeArguments": null,
                "start": 7443,
                "end": 7458
              },
              "start": 7437,
              "end": 7458
            },
            "default": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TLIndexedShapes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7467,
                  "end": 7482
                },
                "typeArguments": null,
                "start": 7467,
                "end": 7482
              },
              "start": 7461,
              "end": 7482
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 7427,
            "end": 7482
          }
        ],
        "start": 7426,
        "end": 7483
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TLIndexedShapes",
            "optional": false,
            "typeAnnotation": null,
            "start": 7488,
            "end": 7503
          },
          "typeArguments": null,
          "start": 7488,
          "end": 7503
        },
        "indexType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 7504,
            "end": 7505
          },
          "typeArguments": null,
          "start": 7504,
          "end": 7505
        },
        "start": 7488,
        "end": 7506
      },
      "declare": false,
      "start": 7414,
      "end": 7507
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseRecord",
        "optional": false,
        "typeAnnotation": null,
        "start": 7519,
        "end": 7529
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TypeName",
              "optional": false,
              "typeAnnotation": null,
              "start": 7533,
              "end": 7541
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 7550,
              "end": 7556
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 7533,
            "end": 7556
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Id",
              "optional": false,
              "typeAnnotation": null,
              "start": 7560,
              "end": 7562
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "RecordId",
                "optional": false,
                "typeAnnotation": null,
                "start": 7571,
                "end": 7579
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "UnknownRecord",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7580,
                      "end": 7593
                    },
                    "typeArguments": null,
                    "start": 7580,
                    "end": 7593
                  }
                ],
                "start": 7579,
                "end": 7594
              },
              "start": 7571,
              "end": 7594
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 7560,
            "end": 7594
          }
        ],
        "start": 7529,
        "end": 7597
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 7611,
              "end": 7613
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Id",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7615,
                  "end": 7617
                },
                "typeArguments": null,
                "start": 7615,
                "end": 7617
              },
              "start": 7613,
              "end": 7617
            },
            "accessibility": null,
            "static": false,
            "start": 7602,
            "end": 7618
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "typeName",
              "optional": false,
              "typeAnnotation": null,
              "start": 7630,
              "end": 7638
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TypeName",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7640,
                  "end": 7648
                },
                "typeArguments": null,
                "start": 7640,
                "end": 7648
              },
              "start": 7638,
              "end": 7648
            },
            "accessibility": null,
            "static": false,
            "start": 7621,
            "end": 7649
          }
        ],
        "start": 7598,
        "end": 7651
      },
      "declare": false,
      "start": 7509,
      "end": 7651
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnknownRecord",
        "optional": false,
        "typeAnnotation": null,
        "start": 7658,
        "end": 7671
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "BaseRecord",
          "optional": false,
          "typeAnnotation": null,
          "start": 7674,
          "end": 7684
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 7685,
              "end": 7691
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "RecordId",
                "optional": false,
                "typeAnnotation": null,
                "start": 7693,
                "end": 7701
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "UnknownRecord",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7702,
                      "end": 7715
                    },
                    "typeArguments": null,
                    "start": 7702,
                    "end": 7715
                  }
                ],
                "start": 7701,
                "end": 7716
              },
              "start": 7693,
              "end": 7716
            }
          ],
          "start": 7684,
          "end": 7717
        },
        "start": 7674,
        "end": 7717
      },
      "declare": false,
      "start": 7653,
      "end": 7718
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RecordId",
        "optional": false,
        "typeAnnotation": null,
        "start": 7725,
        "end": 7733
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
              "start": 7734,
              "end": 7735
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnknownRecord",
                "optional": false,
                "typeAnnotation": null,
                "start": 7744,
                "end": 7757
              },
              "typeArguments": null,
              "start": 7744,
              "end": 7757
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 7734,
            "end": 7757
          }
        ],
        "start": 7733,
        "end": 7758
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 7761,
            "end": 7767
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
                  "name": "__type__",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7774,
                  "end": 7782
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7784,
                      "end": 7785
                    },
                    "typeArguments": null,
                    "start": 7784,
                    "end": 7785
                  },
                  "start": 7782,
                  "end": 7785
                },
                "accessibility": null,
                "static": false,
                "start": 7774,
                "end": 7786
              }
            ],
            "start": 7770,
            "end": 7788
          }
        ],
        "start": 7761,
        "end": 7788
      },
      "declare": false,
      "start": 7720,
      "end": 7789
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLShapeId",
        "optional": false,
        "typeAnnotation": null,
        "start": 7796,
        "end": 7805
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "RecordId",
          "optional": false,
          "typeAnnotation": null,
          "start": 7808,
          "end": 7816
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TLShape",
                "optional": false,
                "typeAnnotation": null,
                "start": 7817,
                "end": 7824
              },
              "typeArguments": null,
              "start": 7817,
              "end": 7824
            }
          ],
          "start": 7816,
          "end": 7825
        },
        "start": 7808,
        "end": 7825
      },
      "declare": false,
      "start": 7791,
      "end": 7826
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLShapePartial",
        "optional": false,
        "typeAnnotation": null,
        "start": 7833,
        "end": 7847
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
              "start": 7848,
              "end": 7849
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TLShape",
                "optional": false,
                "typeAnnotation": null,
                "start": 7858,
                "end": 7865
              },
              "typeArguments": null,
              "start": 7858,
              "end": 7865
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TLShape",
                "optional": false,
                "typeAnnotation": null,
                "start": 7868,
                "end": 7875
              },
              "typeArguments": null,
              "start": 7868,
              "end": 7875
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 7848,
            "end": 7875
          }
        ],
        "start": 7847,
        "end": 7876
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
            "start": 7879,
            "end": 7880
          },
          "typeArguments": null,
          "start": 7879,
          "end": 7880
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 7889,
            "end": 7890
          },
          "typeArguments": null,
          "start": 7889,
          "end": 7890
        },
        "trueType": {
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
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7903,
                    "end": 7905
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TLShapeId",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7907,
                        "end": 7916
                      },
                      "typeArguments": null,
                      "start": 7907,
                      "end": 7916
                    },
                    "start": 7905,
                    "end": 7916
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 7903,
                  "end": 7917
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "meta",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7924,
                    "end": 7928
                  },
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
                        "start": 7931,
                        "end": 7938
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
                                "start": 7939,
                                "end": 7940
                              },
                              "typeArguments": null,
                              "start": 7939,
                              "end": 7940
                            },
                            "indexType": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "meta",
                                "raw": "\"meta\"",
                                "start": 7941,
                                "end": 7947
                              },
                              "start": 7941,
                              "end": 7947
                            },
                            "start": 7939,
                            "end": 7948
                          }
                        ],
                        "start": 7938,
                        "end": 7949
                      },
                      "start": 7931,
                      "end": 7949
                    },
                    "start": 7929,
                    "end": 7949
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 7924,
                  "end": 7950
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7957,
                    "end": 7962
                  },
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
                        "start": 7965,
                        "end": 7972
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
                                "start": 7973,
                                "end": 7974
                              },
                              "typeArguments": null,
                              "start": 7973,
                              "end": 7974
                            },
                            "indexType": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "props",
                                "raw": "\"props\"",
                                "start": 7975,
                                "end": 7982
                              },
                              "start": 7975,
                              "end": 7982
                            },
                            "start": 7973,
                            "end": 7983
                          }
                        ],
                        "start": 7972,
                        "end": 7984
                      },
                      "start": 7965,
                      "end": 7984
                    },
                    "start": 7963,
                    "end": 7984
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 7957,
                  "end": 7985
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7992,
                    "end": 7996
                  },
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
                          "start": 7998,
                          "end": 7999
                        },
                        "typeArguments": null,
                        "start": 7998,
                        "end": 7999
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "type",
                          "raw": "\"type\"",
                          "start": 8000,
                          "end": 8006
                        },
                        "start": 8000,
                        "end": 8006
                      },
                      "start": 7998,
                      "end": 8007
                    },
                    "start": 7996,
                    "end": 8007
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 7992,
                  "end": 8008
                }
              ],
              "start": 7895,
              "end": 8014
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 8017,
                "end": 8024
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Omit",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8025,
                      "end": 8029
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
                            "start": 8030,
                            "end": 8031
                          },
                          "typeArguments": null,
                          "start": 8030,
                          "end": 8031
                        },
                        {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "id",
                                "raw": "\"id\"",
                                "start": 8033,
                                "end": 8037
                              },
                              "start": 8033,
                              "end": 8037
                            },
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "meta",
                                "raw": "\"meta\"",
                                "start": 8040,
                                "end": 8046
                              },
                              "start": 8040,
                              "end": 8046
                            },
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "props",
                                "raw": "\"props\"",
                                "start": 8049,
                                "end": 8056
                              },
                              "start": 8049,
                              "end": 8056
                            },
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "type",
                                "raw": "\"type\"",
                                "start": 8059,
                                "end": 8065
                              },
                              "start": 8059,
                              "end": 8065
                            }
                          ],
                          "start": 8033,
                          "end": 8065
                        }
                      ],
                      "start": 8029,
                      "end": 8066
                    },
                    "start": 8025,
                    "end": 8066
                  }
                ],
                "start": 8024,
                "end": 8067
              },
              "start": 8017,
              "end": 8067
            }
          ],
          "start": 7895,
          "end": 8067
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 8072,
          "end": 8077
        },
        "start": 7879,
        "end": 8077
      },
      "declare": false,
      "start": 7828,
      "end": 8078
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TLGlobalShapePropsMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 8090,
        "end": 8111
      },
      "typeParameters": null,
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
              "name": "html",
              "optional": false,
              "typeAnnotation": null,
              "start": 8116,
              "end": 8120
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
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8128,
                      "end": 8129
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 8131,
                        "end": 8137
                      },
                      "start": 8129,
                      "end": 8137
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 8128,
                    "end": 8138
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "h",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8143,
                      "end": 8144
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 8146,
                        "end": 8152
                      },
                      "start": 8144,
                      "end": 8152
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 8143,
                    "end": 8153
                  }
                ],
                "start": 8122,
                "end": 8157
              },
              "start": 8120,
              "end": 8157
            },
            "accessibility": null,
            "static": false,
            "start": 8116,
            "end": 8158
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "container_section",
              "optional": false,
              "typeAnnotation": null,
              "start": 8161,
              "end": 8178
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
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8186,
                      "end": 8187
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 8189,
                        "end": 8195
                      },
                      "start": 8187,
                      "end": 8195
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 8186,
                    "end": 8196
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "h",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8201,
                      "end": 8202
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 8204,
                        "end": 8210
                      },
                      "start": 8202,
                      "end": 8210
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 8201,
                    "end": 8211
                  }
                ],
                "start": 8180,
                "end": 8215
              },
              "start": 8178,
              "end": 8215
            },
            "accessibility": null,
            "static": false,
            "start": 8161,
            "end": 8216
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "container",
              "optional": false,
              "typeAnnotation": null,
              "start": 8219,
              "end": 8228
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
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8236,
                      "end": 8237
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 8239,
                        "end": 8245
                      },
                      "start": 8237,
                      "end": 8245
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 8236,
                    "end": 8246
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "h",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8251,
                      "end": 8252
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 8254,
                        "end": 8260
                      },
                      "start": 8252,
                      "end": 8260
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 8251,
                    "end": 8261
                  }
                ],
                "start": 8230,
                "end": 8265
              },
              "start": 8228,
              "end": 8265
            },
            "accessibility": null,
            "static": false,
            "start": 8219,
            "end": 8266
          }
        ],
        "start": 8112,
        "end": 8268
      },
      "declare": false,
      "start": 8080,
      "end": 8268
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Dimensions",
        "optional": false,
        "typeAnnotation": null,
        "start": 8275,
        "end": 8285
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
              "name": "w",
              "optional": false,
              "typeAnnotation": null,
              "start": 8292,
              "end": 8293
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 8295,
                "end": 8301
              },
              "start": 8293,
              "end": 8301
            },
            "accessibility": null,
            "static": false,
            "start": 8292,
            "end": 8302
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null,
              "start": 8305,
              "end": 8306
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 8308,
                "end": 8314
              },
              "start": 8306,
              "end": 8314
            },
            "accessibility": null,
            "static": false,
            "start": 8305,
            "end": 8315
          }
        ],
        "start": 8288,
        "end": 8317
      },
      "declare": false,
      "start": 8270,
      "end": 8318
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ShapeWithDimensions",
          "optional": false,
          "typeAnnotation": null,
          "start": 8332,
          "end": 8351
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
                "start": 8352,
                "end": 8353
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TLShape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8362,
                  "end": 8369
                },
                "typeArguments": null,
                "start": 8362,
                "end": 8369
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 8352,
              "end": 8369
            }
          ],
          "start": 8351,
          "end": 8370
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 8373,
                "end": 8374
              },
              "typeArguments": null,
              "start": 8373,
              "end": 8374
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
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8381,
                    "end": 8386
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIntersectionType",
                      "types": [
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
                              "start": 8388,
                              "end": 8389
                            },
                            "typeArguments": null,
                            "start": 8388,
                            "end": 8389
                          },
                          "indexType": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "props",
                              "raw": "\"props\"",
                              "start": 8390,
                              "end": 8397
                            },
                            "start": 8390,
                            "end": 8397
                          },
                          "start": 8388,
                          "end": 8398
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Dimensions",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8401,
                            "end": 8411
                          },
                          "typeArguments": null,
                          "start": 8401,
                          "end": 8411
                        }
                      ],
                      "start": 8388,
                      "end": 8411
                    },
                    "start": 8386,
                    "end": 8411
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 8381,
                  "end": 8412
                }
              ],
              "start": 8377,
              "end": 8414
            }
          ],
          "start": 8373,
          "end": 8414
        },
        "declare": false,
        "start": 8327,
        "end": 8415
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 8320,
      "end": 8415
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ShapePartialWithDimensions",
          "optional": false,
          "typeAnnotation": null,
          "start": 8429,
          "end": 8455
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
                "start": 8456,
                "end": 8457
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TLShape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8466,
                  "end": 8473
                },
                "typeArguments": null,
                "start": 8466,
                "end": 8473
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 8456,
              "end": 8473
            }
          ],
          "start": 8455,
          "end": 8474
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TLShapePartial",
                "optional": false,
                "typeAnnotation": null,
                "start": 8477,
                "end": 8491
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ShapeWithDimensions",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8495,
                      "end": 8514
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
                            "start": 8515,
                            "end": 8516
                          },
                          "typeArguments": null,
                          "start": 8515,
                          "end": 8516
                        }
                      ],
                      "start": 8514,
                      "end": 8517
                    },
                    "start": 8495,
                    "end": 8517
                  }
                ],
                "start": 8491,
                "end": 8519
              },
              "start": 8477,
              "end": 8519
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
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8526,
                    "end": 8531
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSIndexedAccessType",
                          "objectType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TLShapePartial",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8533,
                              "end": 8547
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ShapeWithDimensions",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 8548,
                                    "end": 8567
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
                                          "start": 8568,
                                          "end": 8569
                                        },
                                        "typeArguments": null,
                                        "start": 8568,
                                        "end": 8569
                                      }
                                    ],
                                    "start": 8567,
                                    "end": 8570
                                  },
                                  "start": 8548,
                                  "end": 8570
                                }
                              ],
                              "start": 8547,
                              "end": 8571
                            },
                            "start": 8533,
                            "end": 8571
                          },
                          "indexType": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "props",
                              "raw": "\"props\"",
                              "start": 8572,
                              "end": 8579
                            },
                            "start": 8572,
                            "end": 8579
                          },
                          "start": 8533,
                          "end": 8580
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Dimensions",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8583,
                            "end": 8593
                          },
                          "typeArguments": null,
                          "start": 8583,
                          "end": 8593
                        }
                      ],
                      "start": 8533,
                      "end": 8593
                    },
                    "start": 8531,
                    "end": 8593
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 8526,
                  "end": 8594
                }
              ],
              "start": 8522,
              "end": 8596
            }
          ],
          "start": 8477,
          "end": 8596
        },
        "declare": false,
        "start": 8424,
        "end": 8597
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 8417,
      "end": 8597
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "createShapeAtNearestAdjacentEmptyPosition",
          "optional": false,
          "typeAnnotation": null,
          "start": 8615,
          "end": 8656
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
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 8660,
                "end": 8661
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ShapeWithDimensions",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8670,
                  "end": 8689
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TLShape",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8690,
                        "end": 8697
                      },
                      "typeArguments": null,
                      "start": 8690,
                      "end": 8697
                    }
                  ],
                  "start": 8689,
                  "end": 8698
                },
                "start": 8670,
                "end": 8698
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 8660,
              "end": 8698
            }
          ],
          "start": 8656,
          "end": 8701
        },
        "params": [
          {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "newShape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8706,
                  "end": 8714
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "newShapePartial",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8716,
                  "end": 8731
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 8706,
                "end": 8731
              }
            ],
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
                      "name": "newShape",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8740,
                      "end": 8748
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ShapePartialWithDimensions",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 8750,
                          "end": 8776
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "N",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 8777,
                                "end": 8778
                              },
                              "typeArguments": null,
                              "start": 8777,
                              "end": 8778
                            }
                          ],
                          "start": 8776,
                          "end": 8779
                        },
                        "start": 8750,
                        "end": 8779
                      },
                      "start": 8748,
                      "end": 8779
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 8740,
                    "end": 8780
                  }
                ],
                "start": 8736,
                "end": 8782
              },
              "start": 8734,
              "end": 8782
            },
            "start": 8702,
            "end": 8782
          }
        ],
        "returnType": {
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
                  "name": "newShape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8789,
                  "end": 8797
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "N",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8799,
                      "end": 8800
                    },
                    "typeArguments": null,
                    "start": 8799,
                    "end": 8800
                  },
                  "start": 8797,
                  "end": 8800
                },
                "accessibility": null,
                "static": false,
                "start": 8789,
                "end": 8801
              }
            ],
            "start": 8785,
            "end": 8803
          },
          "start": 8783,
          "end": 8803
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "newShapePartial",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8808,
                      "end": 8823
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8824,
                      "end": 8829
                    },
                    "optional": false,
                    "computed": false,
                    "start": 8808,
                    "end": 8829
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "w",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8831,
                    "end": 8832
                  },
                  "optional": true,
                  "computed": false,
                  "start": 8808,
                  "end": 8832
                },
                "start": 8808,
                "end": 8832
              },
              "directive": null,
              "start": 8808,
              "end": 8833
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8843,
                  "end": 8852
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 8856,
                  "end": 8859
                },
                "start": 8843,
                "end": 8859
              },
              "start": 8836,
              "end": 8860
            }
          ],
          "start": 8804,
          "end": 8862
        },
        "expression": false,
        "start": 8606,
        "end": 8862
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 8599,
      "end": 8862
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 8862
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
    "value": "JsonPrimitive",
    "start": 5,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 21,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 29,
    "end": 30
  },
  {
    "type": "Null",
    "value": "null",
    "start": 31,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 38,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 47,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 55,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "JsonArray",
    "start": 60,
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
    "value": "JsonValue",
    "start": 72,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 85,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "JsonValue",
    "start": 90,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "JsonArray",
    "start": 102,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "JsonObject",
    "start": 114,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "JsonPrimitive",
    "start": 127,
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
    "value": "interface",
    "start": 142,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "JsonObject",
    "start": 152,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 168,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 173,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "JsonValue",
    "start": 182,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 194,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 207,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "IndexKey",
    "start": 212,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 223,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "__brand",
    "start": 236,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 243,
    "end": 244
  },
  {
    "type": "String",
    "value": "\"indexKey\"",
    "start": 245,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 258,
    "end": 259
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 261,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "TLBaseAsset",
    "start": 271,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 283,
    "end": 287
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 288,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 296,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 304,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 309,
    "end": 310
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 313,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "BaseRecord",
    "start": 321,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 331,
    "end": 332
  },
  {
    "type": "String",
    "value": "\"asset\"",
    "start": 332,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "TLAssetId",
    "start": 341,
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
    "value": "{",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 356,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 362,
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
    "value": "props",
    "start": 370,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 377,
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
    "value": "meta",
    "start": 386,
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
    "value": "JsonObject",
    "start": 392,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 406,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "TLAssetId",
    "start": 411,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "RecordId",
    "start": 423,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "TLBaseAsset",
    "start": 432,
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
    "value": "any",
    "start": 444,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 449,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 454,
    "end": 455
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 457,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "VecModel",
    "start": 467,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 476,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 483,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 496,
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
    "value": "z",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 510,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 518,
    "end": 519
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 521,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "TLShapeCrop",
    "start": 531,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "topLeft",
    "start": 547,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "VecModel",
    "start": 556,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "bottomRight",
    "start": 568,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "VecModel",
    "start": 581,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "isCircle",
    "start": 593,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 602,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 604,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 613,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 616,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "TLRichText",
    "start": 621,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 634,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "attrs",
    "start": 638,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 644,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 646,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 649,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "content",
    "start": 653,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 660,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 662,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 671,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 675,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 679,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 681,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 690,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 693,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "TLDefaultColorStyle",
    "start": 698,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 722,
    "end": 723
  },
  {
    "type": "String",
    "value": "\"black\"",
    "start": 724,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 734,
    "end": 735
  },
  {
    "type": "String",
    "value": "\"blue\"",
    "start": 736,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 745,
    "end": 746
  },
  {
    "type": "String",
    "value": "\"green\"",
    "start": 747,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 757,
    "end": 758
  },
  {
    "type": "String",
    "value": "\"grey\"",
    "start": 759,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 768,
    "end": 769
  },
  {
    "type": "String",
    "value": "\"light-blue\"",
    "start": 770,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 785,
    "end": 786
  },
  {
    "type": "String",
    "value": "\"light-green\"",
    "start": 787,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 803,
    "end": 804
  },
  {
    "type": "String",
    "value": "\"light-red\"",
    "start": 805,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 819,
    "end": 820
  },
  {
    "type": "String",
    "value": "\"light-violet\"",
    "start": 821,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 838,
    "end": 839
  },
  {
    "type": "String",
    "value": "\"orange\"",
    "start": 840,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 851,
    "end": 852
  },
  {
    "type": "String",
    "value": "\"red\"",
    "start": 853,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 861,
    "end": 862
  },
  {
    "type": "String",
    "value": "\"violet\"",
    "start": 863,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 874,
    "end": 875
  },
  {
    "type": "String",
    "value": "\"white\"",
    "start": 876,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 886,
    "end": 887
  },
  {
    "type": "String",
    "value": "\"yellow\"",
    "start": 888,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 896,
    "end": 897
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 898,
    "end": 902
  },
  {
    "type": "Identifier",
    "value": "TLDefaultFillStyle",
    "start": 903,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 922,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 926,
    "end": 927
  },
  {
    "type": "String",
    "value": "\"fill\"",
    "start": 928,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 937,
    "end": 938
  },
  {
    "type": "String",
    "value": "\"lined-fill\"",
    "start": 939,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 954,
    "end": 955
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 956,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 965,
    "end": 966
  },
  {
    "type": "String",
    "value": "\"pattern\"",
    "start": 967,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 979,
    "end": 980
  },
  {
    "type": "String",
    "value": "\"semi\"",
    "start": 981,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 990,
    "end": 991
  },
  {
    "type": "String",
    "value": "\"solid\"",
    "start": 992,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1001,
    "end": 1005
  },
  {
    "type": "Identifier",
    "value": "TLDefaultDashStyle",
    "start": 1006,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "String",
    "value": "\"solid\"",
    "start": 1027,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "String",
    "value": "\"draw\"",
    "start": 1037,
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
    "value": "\"dashed\"",
    "start": 1046,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "String",
    "value": "\"dotted\"",
    "start": 1057,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1067,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "TLDefaultSizeStyle",
    "start": 1072,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "String",
    "value": "\"l\"",
    "start": 1093,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "String",
    "value": "\"m\"",
    "start": 1099,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "String",
    "value": "\"s\"",
    "start": 1105,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "String",
    "value": "\"xl\"",
    "start": 1111,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1117,
    "end": 1121
  },
  {
    "type": "Identifier",
    "value": "TLLineShapeSplineStyle",
    "start": 1122,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "String",
    "value": "\"line\"",
    "start": 1147,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "String",
    "value": "\"cubic\"",
    "start": 1156,
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
    "start": 1165,
    "end": 1169
  },
  {
    "type": "Identifier",
    "value": "TLDefaultFontStyle",
    "start": 1170,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "String",
    "value": "\"draw\"",
    "start": 1191,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "String",
    "value": "\"mono\"",
    "start": 1200,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "String",
    "value": "\"sans\"",
    "start": 1209,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "String",
    "value": "\"serif\"",
    "start": 1218,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1227,
    "end": 1231
  },
  {
    "type": "Identifier",
    "value": "TLDefaultHorizontalAlignStyle",
    "start": 1232,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "String",
    "value": "\"end-legacy\"",
    "start": 1268,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "String",
    "value": "\"end\"",
    "start": 1285,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "String",
    "value": "\"middle-legacy\"",
    "start": 1295,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "String",
    "value": "\"middle\"",
    "start": 1315,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "String",
    "value": "\"start-legacy\"",
    "start": 1328,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "String",
    "value": "\"start\"",
    "start": 1347,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1356,
    "end": 1360
  },
  {
    "type": "Identifier",
    "value": "TLDefaultVerticalAlignStyle",
    "start": 1361,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "String",
    "value": "\"end\"",
    "start": 1391,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "String",
    "value": "\"middle\"",
    "start": 1399,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "String",
    "value": "\"start\"",
    "start": 1410,
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
    "value": "type",
    "start": 1419,
    "end": 1423
  },
  {
    "type": "Identifier",
    "value": "TLDefaultTextAlignStyle",
    "start": 1424,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "String",
    "value": "\"end\"",
    "start": 1450,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "String",
    "value": "\"middle\"",
    "start": 1458,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "String",
    "value": "\"start\"",
    "start": 1469,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1478,
    "end": 1482
  },
  {
    "type": "Identifier",
    "value": "TLArrowShapeKind",
    "start": 1483,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "String",
    "value": "\"arc\"",
    "start": 1502,
    "end": 1507
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "String",
    "value": "\"elbow\"",
    "start": 1510,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1519,
    "end": 1523
  },
  {
    "type": "Identifier",
    "value": "TLArrowShapeArrowheadStyle",
    "start": 1524,
    "end": 1550
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "String",
    "value": "\"arrow\"",
    "start": 1557,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1567,
    "end": 1568
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 1569,
    "end": 1574
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "String",
    "value": "\"diamond\"",
    "start": 1579,
    "end": 1588
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1591,
    "end": 1592
  },
  {
    "type": "String",
    "value": "\"dot\"",
    "start": 1593,
    "end": 1598
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "String",
    "value": "\"inverted\"",
    "start": 1603,
    "end": 1613
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "String",
    "value": "\"none\"",
    "start": 1618,
    "end": 1624
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "String",
    "value": "\"pipe\"",
    "start": 1629,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "String",
    "value": "\"square\"",
    "start": 1640,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "String",
    "value": "\"triangle\"",
    "start": 1653,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1665,
    "end": 1669
  },
  {
    "type": "Identifier",
    "value": "TLGeoShapeGeoStyle",
    "start": 1670,
    "end": 1688
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "String",
    "value": "\"arrow-down\"",
    "start": 1695,
    "end": 1707
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1710,
    "end": 1711
  },
  {
    "type": "String",
    "value": "\"arrow-left\"",
    "start": 1712,
    "end": 1724
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "String",
    "value": "\"arrow-right\"",
    "start": 1729,
    "end": 1742
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1745,
    "end": 1746
  },
  {
    "type": "String",
    "value": "\"arrow-up\"",
    "start": 1747,
    "end": 1757
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1760,
    "end": 1761
  },
  {
    "type": "String",
    "value": "\"check-box\"",
    "start": 1762,
    "end": 1773
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1776,
    "end": 1777
  },
  {
    "type": "String",
    "value": "\"cloud\"",
    "start": 1778,
    "end": 1785
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "String",
    "value": "\"diamond\"",
    "start": 1790,
    "end": 1799
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1802,
    "end": 1803
  },
  {
    "type": "String",
    "value": "\"ellipse\"",
    "start": 1804,
    "end": 1813
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "String",
    "value": "\"heart\"",
    "start": 1818,
    "end": 1825
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "String",
    "value": "\"hexagon\"",
    "start": 1830,
    "end": 1839
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "String",
    "value": "\"octagon\"",
    "start": 1844,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1856,
    "end": 1857
  },
  {
    "type": "String",
    "value": "\"oval\"",
    "start": 1858,
    "end": 1864
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1867,
    "end": 1868
  },
  {
    "type": "String",
    "value": "\"pentagon\"",
    "start": 1869,
    "end": 1879
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1882,
    "end": 1883
  },
  {
    "type": "String",
    "value": "\"rectangle\"",
    "start": 1884,
    "end": 1895
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "String",
    "value": "\"rhombus\"",
    "start": 1900,
    "end": 1909
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1912,
    "end": 1913
  },
  {
    "type": "String",
    "value": "\"rhombus-2\"",
    "start": 1914,
    "end": 1925
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1928,
    "end": 1929
  },
  {
    "type": "String",
    "value": "\"star\"",
    "start": 1930,
    "end": 1936
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1939,
    "end": 1940
  },
  {
    "type": "String",
    "value": "\"trapezoid\"",
    "start": 1941,
    "end": 1952
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1955,
    "end": 1956
  },
  {
    "type": "String",
    "value": "\"triangle\"",
    "start": 1957,
    "end": 1967
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1970,
    "end": 1971
  },
  {
    "type": "String",
    "value": "\"x-box\"",
    "start": 1972,
    "end": 1979
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1979,
    "end": 1980
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1981,
    "end": 1985
  },
  {
    "type": "Identifier",
    "value": "TLOpacityType",
    "start": 1986,
    "end": 1999
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2000,
    "end": 2001
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2002,
    "end": 2008
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2008,
    "end": 2009
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2010,
    "end": 2014
  },
  {
    "type": "Identifier",
    "value": "TLPageId",
    "start": 2015,
    "end": 2023
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2024,
    "end": 2025
  },
  {
    "type": "Identifier",
    "value": "RecordId",
    "start": 2026,
    "end": 2034
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2034,
    "end": 2035
  },
  {
    "type": "Identifier",
    "value": "TLPage",
    "start": 2035,
    "end": 2041
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2041,
    "end": 2042
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2042,
    "end": 2043
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2044,
    "end": 2048
  },
  {
    "type": "Identifier",
    "value": "TLParentId",
    "start": 2049,
    "end": 2059
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2060,
    "end": 2061
  },
  {
    "type": "Identifier",
    "value": "TLPageId",
    "start": 2062,
    "end": 2070
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2071,
    "end": 2072
  },
  {
    "type": "Identifier",
    "value": "TLShapeId",
    "start": 2073,
    "end": 2082
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2082,
    "end": 2083
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2084,
    "end": 2093
  },
  {
    "type": "Identifier",
    "value": "TLPage",
    "start": 2094,
    "end": 2100
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2101,
    "end": 2108
  },
  {
    "type": "Identifier",
    "value": "BaseRecord",
    "start": 2109,
    "end": 2119
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2119,
    "end": 2120
  },
  {
    "type": "String",
    "value": "\"page\"",
    "start": 2120,
    "end": 2126
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2126,
    "end": 2127
  },
  {
    "type": "Identifier",
    "value": "TLPageId",
    "start": 2128,
    "end": 2136
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2136,
    "end": 2137
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2138,
    "end": 2139
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 2142,
    "end": 2146
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2146,
    "end": 2147
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2148,
    "end": 2154
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2154,
    "end": 2155
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 2158,
    "end": 2163
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2163,
    "end": 2164
  },
  {
    "type": "Identifier",
    "value": "IndexKey",
    "start": 2165,
    "end": 2173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2173,
    "end": 2174
  },
  {
    "type": "Identifier",
    "value": "meta",
    "start": 2177,
    "end": 2181
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2181,
    "end": 2182
  },
  {
    "type": "Identifier",
    "value": "JsonObject",
    "start": 2183,
    "end": 2193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2193,
    "end": 2194
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2195,
    "end": 2196
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2198,
    "end": 2207
  },
  {
    "type": "Identifier",
    "value": "TLLineShapePoint",
    "start": 2208,
    "end": 2224
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2225,
    "end": 2226
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 2229,
    "end": 2231
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2231,
    "end": 2232
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2233,
    "end": 2239
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2239,
    "end": 2240
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 2243,
    "end": 2248
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2248,
    "end": 2249
  },
  {
    "type": "Identifier",
    "value": "IndexKey",
    "start": 2250,
    "end": 2258
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2258,
    "end": 2259
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2262,
    "end": 2263
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2263,
    "end": 2264
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2265,
    "end": 2271
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2271,
    "end": 2272
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2275,
    "end": 2276
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2276,
    "end": 2277
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2278,
    "end": 2284
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2284,
    "end": 2285
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2286,
    "end": 2287
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2289,
    "end": 2298
  },
  {
    "type": "Identifier",
    "value": "TLGlobalShapePropsMap",
    "start": 2299,
    "end": 2320
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2321,
    "end": 2322
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2322,
    "end": 2323
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2325,
    "end": 2334
  },
  {
    "type": "Identifier",
    "value": "TLBaseShape",
    "start": 2335,
    "end": 2346
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2346,
    "end": 2347
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 2347,
    "end": 2351
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2352,
    "end": 2359
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2360,
    "end": 2366
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2366,
    "end": 2367
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 2368,
    "end": 2373
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2374,
    "end": 2381
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 2382,
    "end": 2388
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2388,
    "end": 2389
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2390,
    "end": 2391
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 2394,
    "end": 2402
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 2403,
    "end": 2405
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2405,
    "end": 2406
  },
  {
    "type": "Identifier",
    "value": "TLShapeId",
    "start": 2407,
    "end": 2416
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2416,
    "end": 2417
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 2420,
    "end": 2428
  },
  {
    "type": "Identifier",
    "value": "typeName",
    "start": 2429,
    "end": 2437
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2437,
    "end": 2438
  },
  {
    "type": "String",
    "value": "\"shape\"",
    "start": 2439,
    "end": 2446
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2446,
    "end": 2447
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2450,
    "end": 2454
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2454,
    "end": 2455
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 2456,
    "end": 2460
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2460,
    "end": 2461
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2464,
    "end": 2465
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2465,
    "end": 2466
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2467,
    "end": 2473
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2473,
    "end": 2474
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2477,
    "end": 2478
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2478,
    "end": 2479
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2480,
    "end": 2486
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2486,
    "end": 2487
  },
  {
    "type": "Identifier",
    "value": "rotation",
    "start": 2490,
    "end": 2498
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2498,
    "end": 2499
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2500,
    "end": 2506
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2506,
    "end": 2507
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 2510,
    "end": 2515
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2515,
    "end": 2516
  },
  {
    "type": "Identifier",
    "value": "IndexKey",
    "start": 2517,
    "end": 2525
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2525,
    "end": 2526
  },
  {
    "type": "Identifier",
    "value": "parentId",
    "start": 2529,
    "end": 2537
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2537,
    "end": 2538
  },
  {
    "type": "Identifier",
    "value": "TLParentId",
    "start": 2539,
    "end": 2549
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2549,
    "end": 2550
  },
  {
    "type": "Identifier",
    "value": "isLocked",
    "start": 2553,
    "end": 2561
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2561,
    "end": 2562
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2563,
    "end": 2570
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2570,
    "end": 2571
  },
  {
    "type": "Identifier",
    "value": "opacity",
    "start": 2574,
    "end": 2581
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2581,
    "end": 2582
  },
  {
    "type": "Identifier",
    "value": "TLOpacityType",
    "start": 2583,
    "end": 2596
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2596,
    "end": 2597
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 2600,
    "end": 2605
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2605,
    "end": 2606
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 2607,
    "end": 2612
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2612,
    "end": 2613
  },
  {
    "type": "Identifier",
    "value": "meta",
    "start": 2616,
    "end": 2620
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2620,
    "end": 2621
  },
  {
    "type": "Identifier",
    "value": "JsonObject",
    "start": 2622,
    "end": 2632
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2632,
    "end": 2633
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2634,
    "end": 2635
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2637,
    "end": 2646
  },
  {
    "type": "Identifier",
    "value": "TLArrowShapeProps",
    "start": 2647,
    "end": 2664
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2665,
    "end": 2666
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 2669,
    "end": 2673
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2673,
    "end": 2674
  },
  {
    "type": "Identifier",
    "value": "TLArrowShapeKind",
    "start": 2675,
    "end": 2691
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2691,
    "end": 2692
  },
  {
    "type": "Identifier",
    "value": "labelColor",
    "start": 2695,
    "end": 2705
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2705,
    "end": 2706
  },
  {
    "type": "Identifier",
    "value": "TLDefaultColorStyle",
    "start": 2707,
    "end": 2726
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2726,
    "end": 2727
  },
  {
    "type": "Identifier",
    "value": "color",
    "start": 2730,
    "end": 2735
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2735,
    "end": 2736
  },
  {
    "type": "Identifier",
    "value": "TLDefaultColorStyle",
    "start": 2737,
    "end": 2756
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2756,
    "end": 2757
  },
  {
    "type": "Identifier",
    "value": "fill",
    "start": 2760,
    "end": 2764
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2764,
    "end": 2765
  },
  {
    "type": "Identifier",
    "value": "TLDefaultFillStyle",
    "start": 2766,
    "end": 2784
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2784,
    "end": 2785
  },
  {
    "type": "Identifier",
    "value": "dash",
    "start": 2788,
    "end": 2792
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2792,
    "end": 2793
  },
  {
    "type": "Identifier",
    "value": "TLDefaultDashStyle",
    "start": 2794,
    "end": 2812
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2812,
    "end": 2813
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 2816,
    "end": 2820
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2820,
    "end": 2821
  },
  {
    "type": "Identifier",
    "value": "TLDefaultSizeStyle",
    "start": 2822,
    "end": 2840
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2840,
    "end": 2841
  },
  {
    "type": "Identifier",
    "value": "arrowheadStart",
    "start": 2844,
    "end": 2858
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2858,
    "end": 2859
  },
  {
    "type": "Identifier",
    "value": "TLArrowShapeArrowheadStyle",
    "start": 2860,
    "end": 2886
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2886,
    "end": 2887
  },
  {
    "type": "Identifier",
    "value": "arrowheadEnd",
    "start": 2890,
    "end": 2902
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2902,
    "end": 2903
  },
  {
    "type": "Identifier",
    "value": "TLArrowShapeArrowheadStyle",
    "start": 2904,
    "end": 2930
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2930,
    "end": 2931
  },
  {
    "type": "Identifier",
    "value": "font",
    "start": 2934,
    "end": 2938
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2938,
    "end": 2939
  },
  {
    "type": "Identifier",
    "value": "TLDefaultFontStyle",
    "start": 2940,
    "end": 2958
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2958,
    "end": 2959
  },
  {
    "type": "Identifier",
    "value": "start",
    "start": 2962,
    "end": 2967
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2967,
    "end": 2968
  },
  {
    "type": "Identifier",
    "value": "VecModel",
    "start": 2969,
    "end": 2977
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2977,
    "end": 2978
  },
  {
    "type": "Identifier",
    "value": "end",
    "start": 2981,
    "end": 2984
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2984,
    "end": 2985
  },
  {
    "type": "Identifier",
    "value": "VecModel",
    "start": 2986,
    "end": 2994
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2994,
    "end": 2995
  },
  {
    "type": "Identifier",
    "value": "bend",
    "start": 2998,
    "end": 3002
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3002,
    "end": 3003
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3004,
    "end": 3010
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3010,
    "end": 3011
  },
  {
    "type": "Identifier",
    "value": "richText",
    "start": 3014,
    "end": 3022
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3022,
    "end": 3023
  },
  {
    "type": "Identifier",
    "value": "TLRichText",
    "start": 3024,
    "end": 3034
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3034,
    "end": 3035
  },
  {
    "type": "Identifier",
    "value": "labelPosition",
    "start": 3038,
    "end": 3051
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3051,
    "end": 3052
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3053,
    "end": 3059
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3059,
    "end": 3060
  },
  {
    "type": "Identifier",
    "value": "scale",
    "start": 3063,
    "end": 3068
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3068,
    "end": 3069
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3070,
    "end": 3076
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3076,
    "end": 3077
  },
  {
    "type": "Identifier",
    "value": "elbowMidPoint",
    "start": 3080,
    "end": 3093
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3093,
    "end": 3094
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3095,
    "end": 3101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3101,
    "end": 3102
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3103,
    "end": 3104
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3105,
    "end": 3109
  },
  {
    "type": "Identifier",
    "value": "TLArrowShape",
    "start": 3110,
    "end": 3122
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3123,
    "end": 3124
  },
  {
    "type": "Identifier",
    "value": "TLBaseShape",
    "start": 3125,
    "end": 3136
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3136,
    "end": 3137
  },
  {
    "type": "String",
    "value": "\"arrow\"",
    "start": 3137,
    "end": 3144
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3144,
    "end": 3145
  },
  {
    "type": "Identifier",
    "value": "TLArrowShapeProps",
    "start": 3146,
    "end": 3163
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3163,
    "end": 3164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3164,
    "end": 3165
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3167,
    "end": 3176
  },
  {
    "type": "Identifier",
    "value": "TLBookmarkShapeProps",
    "start": 3177,
    "end": 3197
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3198,
    "end": 3199
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 3202,
    "end": 3203
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3203,
    "end": 3204
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3205,
    "end": 3211
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3211,
    "end": 3212
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 3215,
    "end": 3216
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3216,
    "end": 3217
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3218,
    "end": 3224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3224,
    "end": 3225
  },
  {
    "type": "Identifier",
    "value": "assetId",
    "start": 3228,
    "end": 3235
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3235,
    "end": 3236
  },
  {
    "type": "Identifier",
    "value": "TLAssetId",
    "start": 3237,
    "end": 3246
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3247,
    "end": 3248
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3249,
    "end": 3253
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3253,
    "end": 3254
  },
  {
    "type": "Identifier",
    "value": "url",
    "start": 3257,
    "end": 3260
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3260,
    "end": 3261
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3262,
    "end": 3268
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3268,
    "end": 3269
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3270,
    "end": 3271
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3273,
    "end": 3277
  },
  {
    "type": "Identifier",
    "value": "TLBookmarkShape",
    "start": 3278,
    "end": 3293
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3294,
    "end": 3295
  },
  {
    "type": "Identifier",
    "value": "TLBaseShape",
    "start": 3296,
    "end": 3307
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3307,
    "end": 3308
  },
  {
    "type": "String",
    "value": "\"bookmark\"",
    "start": 3308,
    "end": 3318
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3318,
    "end": 3319
  },
  {
    "type": "Identifier",
    "value": "TLBookmarkShapeProps",
    "start": 3320,
    "end": 3340
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3340,
    "end": 3341
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3341,
    "end": 3342
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3344,
    "end": 3350
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3351,
    "end": 3360
  },
  {
    "type": "Identifier",
    "value": "TLDrawShapeProps",
    "start": 3361,
    "end": 3377
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3378,
    "end": 3379
  },
  {
    "type": "Identifier",
    "value": "color",
    "start": 3382,
    "end": 3387
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3387,
    "end": 3388
  },
  {
    "type": "Identifier",
    "value": "TLDefaultColorStyle",
    "start": 3389,
    "end": 3408
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3408,
    "end": 3409
  },
  {
    "type": "Identifier",
    "value": "fill",
    "start": 3412,
    "end": 3416
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3416,
    "end": 3417
  },
  {
    "type": "Identifier",
    "value": "TLDefaultFillStyle",
    "start": 3418,
    "end": 3436
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3436,
    "end": 3437
  },
  {
    "type": "Identifier",
    "value": "dash",
    "start": 3440,
    "end": 3444
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3444,
    "end": 3445
  },
  {
    "type": "Identifier",
    "value": "TLDefaultDashStyle",
    "start": 3446,
    "end": 3464
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3464,
    "end": 3465
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 3468,
    "end": 3472
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3472,
    "end": 3473
  },
  {
    "type": "Identifier",
    "value": "TLDefaultSizeStyle",
    "start": 3474,
    "end": 3492
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3492,
    "end": 3493
  },
  {
    "type": "Identifier",
    "value": "segments",
    "start": 3496,
    "end": 3504
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3504,
    "end": 3505
  },
  {
    "type": "Identifier",
    "value": "TLDrawShapeSegment",
    "start": 3506,
    "end": 3524
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3524,
    "end": 3525
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3525,
    "end": 3526
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3526,
    "end": 3527
  },
  {
    "type": "Identifier",
    "value": "isComplete",
    "start": 3530,
    "end": 3540
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3540,
    "end": 3541
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3542,
    "end": 3549
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3549,
    "end": 3550
  },
  {
    "type": "Identifier",
    "value": "isClosed",
    "start": 3553,
    "end": 3561
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3561,
    "end": 3562
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3563,
    "end": 3570
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3570,
    "end": 3571
  },
  {
    "type": "Identifier",
    "value": "isPen",
    "start": 3574,
    "end": 3579
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3579,
    "end": 3580
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3581,
    "end": 3588
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3588,
    "end": 3589
  },
  {
    "type": "Identifier",
    "value": "scale",
    "start": 3592,
    "end": 3597
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3597,
    "end": 3598
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3599,
    "end": 3605
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3605,
    "end": 3606
  },
  {
    "type": "Identifier",
    "value": "scaleX",
    "start": 3609,
    "end": 3615
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3615,
    "end": 3616
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3617,
    "end": 3623
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3623,
    "end": 3624
  },
  {
    "type": "Identifier",
    "value": "scaleY",
    "start": 3627,
    "end": 3633
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3633,
    "end": 3634
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3635,
    "end": 3641
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3641,
    "end": 3642
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3643,
    "end": 3644
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3646,
    "end": 3650
  },
  {
    "type": "Identifier",
    "value": "TLDrawShape",
    "start": 3651,
    "end": 3662
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3663,
    "end": 3664
  },
  {
    "type": "Identifier",
    "value": "TLBaseShape",
    "start": 3665,
    "end": 3676
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3676,
    "end": 3677
  },
  {
    "type": "String",
    "value": "\"draw\"",
    "start": 3677,
    "end": 3683
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3683,
    "end": 3684
  },
  {
    "type": "Identifier",
    "value": "TLDrawShapeProps",
    "start": 3685,
    "end": 3701
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3701,
    "end": 3702
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3702,
    "end": 3703
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3705,
    "end": 3714
  },
  {
    "type": "Identifier",
    "value": "TLEmbedShapeProps",
    "start": 3715,
    "end": 3732
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3733,
    "end": 3734
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 3737,
    "end": 3738
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3738,
    "end": 3739
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3740,
    "end": 3746
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3746,
    "end": 3747
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 3750,
    "end": 3751
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3751,
    "end": 3752
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3753,
    "end": 3759
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3759,
    "end": 3760
  },
  {
    "type": "Identifier",
    "value": "url",
    "start": 3763,
    "end": 3766
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3766,
    "end": 3767
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3768,
    "end": 3774
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3774,
    "end": 3775
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3776,
    "end": 3777
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3779,
    "end": 3783
  },
  {
    "type": "Identifier",
    "value": "TLEmbedShape",
    "start": 3784,
    "end": 3796
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3797,
    "end": 3798
  },
  {
    "type": "Identifier",
    "value": "TLBaseShape",
    "start": 3799,
    "end": 3810
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3810,
    "end": 3811
  },
  {
    "type": "String",
    "value": "\"embed\"",
    "start": 3811,
    "end": 3818
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3818,
    "end": 3819
  },
  {
    "type": "Identifier",
    "value": "TLEmbedShapeProps",
    "start": 3820,
    "end": 3837
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3837,
    "end": 3838
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3838,
    "end": 3839
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3841,
    "end": 3850
  },
  {
    "type": "Identifier",
    "value": "TLFrameShapeProps",
    "start": 3851,
    "end": 3868
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3869,
    "end": 3870
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 3873,
    "end": 3874
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3874,
    "end": 3875
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3876,
    "end": 3882
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3882,
    "end": 3883
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 3886,
    "end": 3887
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3887,
    "end": 3888
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3889,
    "end": 3895
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3895,
    "end": 3896
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3899,
    "end": 3903
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3903,
    "end": 3904
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3905,
    "end": 3911
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3911,
    "end": 3912
  },
  {
    "type": "Identifier",
    "value": "color",
    "start": 3915,
    "end": 3920
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3920,
    "end": 3921
  },
  {
    "type": "Identifier",
    "value": "TLDefaultColorStyle",
    "start": 3922,
    "end": 3941
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3941,
    "end": 3942
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3943,
    "end": 3944
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3946,
    "end": 3950
  },
  {
    "type": "Identifier",
    "value": "TLFrameShape",
    "start": 3951,
    "end": 3963
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3964,
    "end": 3965
  },
  {
    "type": "Identifier",
    "value": "TLBaseShape",
    "start": 3966,
    "end": 3977
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3977,
    "end": 3978
  },
  {
    "type": "String",
    "value": "\"frame\"",
    "start": 3978,
    "end": 3985
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3985,
    "end": 3986
  },
  {
    "type": "Identifier",
    "value": "TLFrameShapeProps",
    "start": 3987,
    "end": 4004
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4004,
    "end": 4005
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4005,
    "end": 4006
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4008,
    "end": 4017
  },
  {
    "type": "Identifier",
    "value": "TLGeoShapeProps",
    "start": 4018,
    "end": 4033
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4034,
    "end": 4035
  },
  {
    "type": "Identifier",
    "value": "geo",
    "start": 4038,
    "end": 4041
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4041,
    "end": 4042
  },
  {
    "type": "Identifier",
    "value": "TLGeoShapeGeoStyle",
    "start": 4043,
    "end": 4061
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4061,
    "end": 4062
  },
  {
    "type": "Identifier",
    "value": "dash",
    "start": 4065,
    "end": 4069
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4069,
    "end": 4070
  },
  {
    "type": "Identifier",
    "value": "TLDefaultDashStyle",
    "start": 4071,
    "end": 4089
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4089,
    "end": 4090
  },
  {
    "type": "Identifier",
    "value": "url",
    "start": 4093,
    "end": 4096
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4096,
    "end": 4097
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4098,
    "end": 4104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4104,
    "end": 4105
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 4108,
    "end": 4109
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4109,
    "end": 4110
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4111,
    "end": 4117
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4117,
    "end": 4118
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 4121,
    "end": 4122
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4122,
    "end": 4123
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4124,
    "end": 4130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4130,
    "end": 4131
  },
  {
    "type": "Identifier",
    "value": "growY",
    "start": 4134,
    "end": 4139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4139,
    "end": 4140
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4141,
    "end": 4147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4147,
    "end": 4148
  },
  {
    "type": "Identifier",
    "value": "scale",
    "start": 4151,
    "end": 4156
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4156,
    "end": 4157
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4158,
    "end": 4164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4164,
    "end": 4165
  },
  {
    "type": "Identifier",
    "value": "labelColor",
    "start": 4168,
    "end": 4178
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4178,
    "end": 4179
  },
  {
    "type": "Identifier",
    "value": "TLDefaultColorStyle",
    "start": 4180,
    "end": 4199
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4199,
    "end": 4200
  },
  {
    "type": "Identifier",
    "value": "color",
    "start": 4203,
    "end": 4208
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4208,
    "end": 4209
  },
  {
    "type": "Identifier",
    "value": "TLDefaultColorStyle",
    "start": 4210,
    "end": 4229
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4229,
    "end": 4230
  },
  {
    "type": "Identifier",
    "value": "fill",
    "start": 4233,
    "end": 4237
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4237,
    "end": 4238
  },
  {
    "type": "Identifier",
    "value": "TLDefaultFillStyle",
    "start": 4239,
    "end": 4257
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4257,
    "end": 4258
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 4261,
    "end": 4265
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4265,
    "end": 4266
  },
  {
    "type": "Identifier",
    "value": "TLDefaultSizeStyle",
    "start": 4267,
    "end": 4285
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4285,
    "end": 4286
  },
  {
    "type": "Identifier",
    "value": "font",
    "start": 4289,
    "end": 4293
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4293,
    "end": 4294
  },
  {
    "type": "Identifier",
    "value": "TLDefaultFontStyle",
    "start": 4295,
    "end": 4313
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4313,
    "end": 4314
  },
  {
    "type": "Identifier",
    "value": "align",
    "start": 4317,
    "end": 4322
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4322,
    "end": 4323
  },
  {
    "type": "Identifier",
    "value": "TLDefaultHorizontalAlignStyle",
    "start": 4324,
    "end": 4353
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4353,
    "end": 4354
  },
  {
    "type": "Identifier",
    "value": "verticalAlign",
    "start": 4357,
    "end": 4370
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4370,
    "end": 4371
  },
  {
    "type": "Identifier",
    "value": "TLDefaultVerticalAlignStyle",
    "start": 4372,
    "end": 4399
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4399,
    "end": 4400
  },
  {
    "type": "Identifier",
    "value": "richText",
    "start": 4403,
    "end": 4411
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4411,
    "end": 4412
  },
  {
    "type": "Identifier",
    "value": "TLRichText",
    "start": 4413,
    "end": 4423
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4423,
    "end": 4424
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4425,
    "end": 4426
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4428,
    "end": 4432
  },
  {
    "type": "Identifier",
    "value": "TLGeoShape",
    "start": 4433,
    "end": 4443
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4444,
    "end": 4445
  },
  {
    "type": "Identifier",
    "value": "TLBaseShape",
    "start": 4446,
    "end": 4457
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4457,
    "end": 4458
  },
  {
    "type": "String",
    "value": "\"geo\"",
    "start": 4458,
    "end": 4463
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4463,
    "end": 4464
  },
  {
    "type": "Identifier",
    "value": "TLGeoShapeProps",
    "start": 4465,
    "end": 4480
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4480,
    "end": 4481
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4481,
    "end": 4482
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4484,
    "end": 4493
  },
  {
    "type": "Identifier",
    "value": "TLGroupShapeProps",
    "start": 4494,
    "end": 4511
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4512,
    "end": 4513
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4513,
    "end": 4514
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4516,
    "end": 4520
  },
  {
    "type": "Identifier",
    "value": "TLGroupShape",
    "start": 4521,
    "end": 4533
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4534,
    "end": 4535
  },
  {
    "type": "Identifier",
    "value": "TLBaseShape",
    "start": 4536,
    "end": 4547
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4547,
    "end": 4548
  },
  {
    "type": "String",
    "value": "\"group\"",
    "start": 4548,
    "end": 4555
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4555,
    "end": 4556
  },
  {
    "type": "Identifier",
    "value": "TLGroupShapeProps",
    "start": 4557,
    "end": 4574
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4574,
    "end": 4575
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4575,
    "end": 4576
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4578,
    "end": 4587
  },
  {
    "type": "Identifier",
    "value": "TLDrawShapeSegment",
    "start": 4588,
    "end": 4606
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4607,
    "end": 4608
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4611,
    "end": 4615
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4615,
    "end": 4616
  },
  {
    "type": "String",
    "value": "\"free\"",
    "start": 4617,
    "end": 4623
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4624,
    "end": 4625
  },
  {
    "type": "String",
    "value": "\"straight\"",
    "start": 4626,
    "end": 4636
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4636,
    "end": 4637
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 4640,
    "end": 4644
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4644,
    "end": 4645
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4646,
    "end": 4652
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4652,
    "end": 4653
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4654,
    "end": 4655
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4657,
    "end": 4666
  },
  {
    "type": "Identifier",
    "value": "TLHighlightShapeProps",
    "start": 4667,
    "end": 4688
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4689,
    "end": 4690
  },
  {
    "type": "Identifier",
    "value": "color",
    "start": 4693,
    "end": 4698
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4698,
    "end": 4699
  },
  {
    "type": "Identifier",
    "value": "TLDefaultColorStyle",
    "start": 4700,
    "end": 4719
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4719,
    "end": 4720
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 4723,
    "end": 4727
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4727,
    "end": 4728
  },
  {
    "type": "Identifier",
    "value": "TLDefaultSizeStyle",
    "start": 4729,
    "end": 4747
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4747,
    "end": 4748
  },
  {
    "type": "Identifier",
    "value": "segments",
    "start": 4751,
    "end": 4759
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4759,
    "end": 4760
  },
  {
    "type": "Identifier",
    "value": "TLDrawShapeSegment",
    "start": 4761,
    "end": 4779
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4779,
    "end": 4780
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4780,
    "end": 4781
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4781,
    "end": 4782
  },
  {
    "type": "Identifier",
    "value": "isComplete",
    "start": 4785,
    "end": 4795
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4795,
    "end": 4796
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 4797,
    "end": 4804
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4804,
    "end": 4805
  },
  {
    "type": "Identifier",
    "value": "isPen",
    "start": 4808,
    "end": 4813
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4813,
    "end": 4814
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 4815,
    "end": 4822
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4822,
    "end": 4823
  },
  {
    "type": "Identifier",
    "value": "scale",
    "start": 4826,
    "end": 4831
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4831,
    "end": 4832
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4833,
    "end": 4839
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4839,
    "end": 4840
  },
  {
    "type": "Identifier",
    "value": "scaleX",
    "start": 4843,
    "end": 4849
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4849,
    "end": 4850
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4851,
    "end": 4857
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4857,
    "end": 4858
  },
  {
    "type": "Identifier",
    "value": "scaleY",
    "start": 4861,
    "end": 4867
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4867,
    "end": 4868
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4869,
    "end": 4875
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4875,
    "end": 4876
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4877,
    "end": 4878
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4880,
    "end": 4884
  },
  {
    "type": "Identifier",
    "value": "TLHighlightShape",
    "start": 4885,
    "end": 4901
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4902,
    "end": 4903
  },
  {
    "type": "Identifier",
    "value": "TLBaseShape",
    "start": 4904,
    "end": 4915
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4915,
    "end": 4916
  },
  {
    "type": "String",
    "value": "\"highlight\"",
    "start": 4916,
    "end": 4927
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4927,
    "end": 4928
  },
  {
    "type": "Identifier",
    "value": "TLHighlightShapeProps",
    "start": 4929,
    "end": 4950
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4950,
    "end": 4951
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4951,
    "end": 4952
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4954,
    "end": 4963
  },
  {
    "type": "Identifier",
    "value": "TLImageShapeProps",
    "start": 4964,
    "end": 4981
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4982,
    "end": 4983
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 4986,
    "end": 4987
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4987,
    "end": 4988
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4989,
    "end": 4995
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4995,
    "end": 4996
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 5000,
    "end": 5001
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5001,
    "end": 5002
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5003,
    "end": 5009
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5009,
    "end": 5010
  },
  {
    "type": "Identifier",
    "value": "playing",
    "start": 5014,
    "end": 5021
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5021,
    "end": 5022
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 5023,
    "end": 5030
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5030,
    "end": 5031
  },
  {
    "type": "Identifier",
    "value": "url",
    "start": 5035,
    "end": 5038
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5038,
    "end": 5039
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5040,
    "end": 5046
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5046,
    "end": 5047
  },
  {
    "type": "Identifier",
    "value": "assetId",
    "start": 5051,
    "end": 5058
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5058,
    "end": 5059
  },
  {
    "type": "Null",
    "value": "null",
    "start": 5060,
    "end": 5064
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5065,
    "end": 5066
  },
  {
    "type": "Identifier",
    "value": "TLAssetId",
    "start": 5067,
    "end": 5076
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5076,
    "end": 5077
  },
  {
    "type": "Identifier",
    "value": "crop",
    "start": 5081,
    "end": 5085
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5085,
    "end": 5086
  },
  {
    "type": "Null",
    "value": "null",
    "start": 5087,
    "end": 5091
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5092,
    "end": 5093
  },
  {
    "type": "Identifier",
    "value": "TLShapeCrop",
    "start": 5094,
    "end": 5105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5105,
    "end": 5106
  },
  {
    "type": "Identifier",
    "value": "flipX",
    "start": 5110,
    "end": 5115
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5115,
    "end": 5116
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 5117,
    "end": 5124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5124,
    "end": 5125
  },
  {
    "type": "Identifier",
    "value": "flipY",
    "start": 5129,
    "end": 5134
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5134,
    "end": 5135
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 5136,
    "end": 5143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5143,
    "end": 5144
  },
  {
    "type": "Identifier",
    "value": "altText",
    "start": 5148,
    "end": 5155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5155,
    "end": 5156
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5157,
    "end": 5163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5163,
    "end": 5164
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5165,
    "end": 5166
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5168,
    "end": 5172
  },
  {
    "type": "Identifier",
    "value": "TLImageShape",
    "start": 5173,
    "end": 5185
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5186,
    "end": 5187
  },
  {
    "type": "Identifier",
    "value": "TLBaseShape",
    "start": 5188,
    "end": 5199
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5199,
    "end": 5200
  },
  {
    "type": "String",
    "value": "\"image\"",
    "start": 5200,
    "end": 5207
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5207,
    "end": 5208
  },
  {
    "type": "Identifier",
    "value": "TLImageShapeProps",
    "start": 5209,
    "end": 5226
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5226,
    "end": 5227
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5227,
    "end": 5228
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5230,
    "end": 5239
  },
  {
    "type": "Identifier",
    "value": "TLLineShapeProps",
    "start": 5240,
    "end": 5256
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5257,
    "end": 5258
  },
  {
    "type": "Identifier",
    "value": "color",
    "start": 5261,
    "end": 5266
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5266,
    "end": 5267
  },
  {
    "type": "Identifier",
    "value": "TLDefaultColorStyle",
    "start": 5268,
    "end": 5287
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5287,
    "end": 5288
  },
  {
    "type": "Identifier",
    "value": "dash",
    "start": 5291,
    "end": 5295
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5295,
    "end": 5296
  },
  {
    "type": "Identifier",
    "value": "TLDefaultDashStyle",
    "start": 5297,
    "end": 5315
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5315,
    "end": 5316
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 5319,
    "end": 5323
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5323,
    "end": 5324
  },
  {
    "type": "Identifier",
    "value": "TLDefaultSizeStyle",
    "start": 5325,
    "end": 5343
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5343,
    "end": 5344
  },
  {
    "type": "Identifier",
    "value": "spline",
    "start": 5347,
    "end": 5353
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5353,
    "end": 5354
  },
  {
    "type": "Identifier",
    "value": "TLLineShapeSplineStyle",
    "start": 5355,
    "end": 5377
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5377,
    "end": 5378
  },
  {
    "type": "Identifier",
    "value": "points",
    "start": 5381,
    "end": 5387
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5387,
    "end": 5388
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 5389,
    "end": 5395
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5395,
    "end": 5396
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5396,
    "end": 5402
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5402,
    "end": 5403
  },
  {
    "type": "Identifier",
    "value": "TLLineShapePoint",
    "start": 5404,
    "end": 5420
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5420,
    "end": 5421
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5421,
    "end": 5422
  },
  {
    "type": "Identifier",
    "value": "scale",
    "start": 5425,
    "end": 5430
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5430,
    "end": 5431
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5432,
    "end": 5438
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5438,
    "end": 5439
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5440,
    "end": 5441
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5443,
    "end": 5447
  },
  {
    "type": "Identifier",
    "value": "TLLineShape",
    "start": 5448,
    "end": 5459
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5460,
    "end": 5461
  },
  {
    "type": "Identifier",
    "value": "TLBaseShape",
    "start": 5462,
    "end": 5473
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5473,
    "end": 5474
  },
  {
    "type": "String",
    "value": "\"line\"",
    "start": 5474,
    "end": 5480
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5480,
    "end": 5481
  },
  {
    "type": "Identifier",
    "value": "TLLineShapeProps",
    "start": 5482,
    "end": 5498
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5498,
    "end": 5499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5499,
    "end": 5500
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5502,
    "end": 5511
  },
  {
    "type": "Identifier",
    "value": "TLNoteShapeProps",
    "start": 5512,
    "end": 5528
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5529,
    "end": 5530
  },
  {
    "type": "Identifier",
    "value": "color",
    "start": 5533,
    "end": 5538
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5538,
    "end": 5539
  },
  {
    "type": "Identifier",
    "value": "TLDefaultColorStyle",
    "start": 5540,
    "end": 5559
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5559,
    "end": 5560
  },
  {
    "type": "Identifier",
    "value": "labelColor",
    "start": 5563,
    "end": 5573
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5573,
    "end": 5574
  },
  {
    "type": "Identifier",
    "value": "TLDefaultColorStyle",
    "start": 5575,
    "end": 5594
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5594,
    "end": 5595
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 5598,
    "end": 5602
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5602,
    "end": 5603
  },
  {
    "type": "Identifier",
    "value": "TLDefaultSizeStyle",
    "start": 5604,
    "end": 5622
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5622,
    "end": 5623
  },
  {
    "type": "Identifier",
    "value": "font",
    "start": 5626,
    "end": 5630
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5630,
    "end": 5631
  },
  {
    "type": "Identifier",
    "value": "TLDefaultFontStyle",
    "start": 5632,
    "end": 5650
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5650,
    "end": 5651
  },
  {
    "type": "Identifier",
    "value": "fontSizeAdjustment",
    "start": 5654,
    "end": 5672
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5672,
    "end": 5673
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5674,
    "end": 5680
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5680,
    "end": 5681
  },
  {
    "type": "Identifier",
    "value": "align",
    "start": 5684,
    "end": 5689
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5689,
    "end": 5690
  },
  {
    "type": "Identifier",
    "value": "TLDefaultHorizontalAlignStyle",
    "start": 5691,
    "end": 5720
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5720,
    "end": 5721
  },
  {
    "type": "Identifier",
    "value": "verticalAlign",
    "start": 5724,
    "end": 5737
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5737,
    "end": 5738
  },
  {
    "type": "Identifier",
    "value": "TLDefaultVerticalAlignStyle",
    "start": 5739,
    "end": 5766
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5766,
    "end": 5767
  },
  {
    "type": "Identifier",
    "value": "growY",
    "start": 5770,
    "end": 5775
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5775,
    "end": 5776
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5777,
    "end": 5783
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5783,
    "end": 5784
  },
  {
    "type": "Identifier",
    "value": "url",
    "start": 5787,
    "end": 5790
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5790,
    "end": 5791
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5792,
    "end": 5798
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5798,
    "end": 5799
  },
  {
    "type": "Identifier",
    "value": "richText",
    "start": 5802,
    "end": 5810
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5810,
    "end": 5811
  },
  {
    "type": "Identifier",
    "value": "TLRichText",
    "start": 5812,
    "end": 5822
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5822,
    "end": 5823
  },
  {
    "type": "Identifier",
    "value": "scale",
    "start": 5826,
    "end": 5831
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5831,
    "end": 5832
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5833,
    "end": 5839
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5839,
    "end": 5840
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5841,
    "end": 5842
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5844,
    "end": 5848
  },
  {
    "type": "Identifier",
    "value": "TLNoteShape",
    "start": 5849,
    "end": 5860
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5861,
    "end": 5862
  },
  {
    "type": "Identifier",
    "value": "TLBaseShape",
    "start": 5863,
    "end": 5874
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5874,
    "end": 5875
  },
  {
    "type": "String",
    "value": "\"note\"",
    "start": 5875,
    "end": 5881
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5881,
    "end": 5882
  },
  {
    "type": "Identifier",
    "value": "TLNoteShapeProps",
    "start": 5883,
    "end": 5899
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5899,
    "end": 5900
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5900,
    "end": 5901
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5903,
    "end": 5912
  },
  {
    "type": "Identifier",
    "value": "TLTextShapeProps",
    "start": 5913,
    "end": 5929
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5930,
    "end": 5931
  },
  {
    "type": "Identifier",
    "value": "color",
    "start": 5934,
    "end": 5939
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5939,
    "end": 5940
  },
  {
    "type": "Identifier",
    "value": "TLDefaultColorStyle",
    "start": 5941,
    "end": 5960
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5960,
    "end": 5961
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 5964,
    "end": 5968
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5968,
    "end": 5969
  },
  {
    "type": "Identifier",
    "value": "TLDefaultSizeStyle",
    "start": 5970,
    "end": 5988
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5988,
    "end": 5989
  },
  {
    "type": "Identifier",
    "value": "font",
    "start": 5992,
    "end": 5996
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5996,
    "end": 5997
  },
  {
    "type": "Identifier",
    "value": "TLDefaultFontStyle",
    "start": 5998,
    "end": 6016
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6016,
    "end": 6017
  },
  {
    "type": "Identifier",
    "value": "textAlign",
    "start": 6020,
    "end": 6029
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6029,
    "end": 6030
  },
  {
    "type": "Identifier",
    "value": "TLDefaultTextAlignStyle",
    "start": 6031,
    "end": 6054
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6054,
    "end": 6055
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 6058,
    "end": 6059
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6059,
    "end": 6060
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6061,
    "end": 6067
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6067,
    "end": 6068
  },
  {
    "type": "Identifier",
    "value": "richText",
    "start": 6071,
    "end": 6079
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6079,
    "end": 6080
  },
  {
    "type": "Identifier",
    "value": "TLRichText",
    "start": 6081,
    "end": 6091
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6091,
    "end": 6092
  },
  {
    "type": "Identifier",
    "value": "scale",
    "start": 6095,
    "end": 6100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6100,
    "end": 6101
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6102,
    "end": 6108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6108,
    "end": 6109
  },
  {
    "type": "Identifier",
    "value": "autoSize",
    "start": 6112,
    "end": 6120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6120,
    "end": 6121
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 6122,
    "end": 6129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6129,
    "end": 6130
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6131,
    "end": 6132
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6134,
    "end": 6138
  },
  {
    "type": "Identifier",
    "value": "TLTextShape",
    "start": 6139,
    "end": 6150
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6151,
    "end": 6152
  },
  {
    "type": "Identifier",
    "value": "TLBaseShape",
    "start": 6153,
    "end": 6164
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6164,
    "end": 6165
  },
  {
    "type": "String",
    "value": "\"text\"",
    "start": 6165,
    "end": 6171
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6171,
    "end": 6172
  },
  {
    "type": "Identifier",
    "value": "TLTextShapeProps",
    "start": 6173,
    "end": 6189
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6189,
    "end": 6190
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6190,
    "end": 6191
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 6193,
    "end": 6202
  },
  {
    "type": "Identifier",
    "value": "TLVideoShapeProps",
    "start": 6203,
    "end": 6220
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6221,
    "end": 6222
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 6225,
    "end": 6226
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6226,
    "end": 6227
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6228,
    "end": 6234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6234,
    "end": 6235
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 6238,
    "end": 6239
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6239,
    "end": 6240
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6241,
    "end": 6247
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6247,
    "end": 6248
  },
  {
    "type": "Identifier",
    "value": "time",
    "start": 6251,
    "end": 6255
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6255,
    "end": 6256
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6257,
    "end": 6263
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6263,
    "end": 6264
  },
  {
    "type": "Identifier",
    "value": "playing",
    "start": 6267,
    "end": 6274
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6274,
    "end": 6275
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 6276,
    "end": 6283
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6283,
    "end": 6284
  },
  {
    "type": "Identifier",
    "value": "autoplay",
    "start": 6287,
    "end": 6295
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6295,
    "end": 6296
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 6297,
    "end": 6304
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6304,
    "end": 6305
  },
  {
    "type": "Identifier",
    "value": "url",
    "start": 6308,
    "end": 6311
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6311,
    "end": 6312
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6313,
    "end": 6319
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6319,
    "end": 6320
  },
  {
    "type": "Identifier",
    "value": "assetId",
    "start": 6323,
    "end": 6330
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6330,
    "end": 6331
  },
  {
    "type": "Null",
    "value": "null",
    "start": 6332,
    "end": 6336
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 6337,
    "end": 6338
  },
  {
    "type": "Identifier",
    "value": "TLAssetId",
    "start": 6339,
    "end": 6348
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6348,
    "end": 6349
  },
  {
    "type": "Identifier",
    "value": "altText",
    "start": 6352,
    "end": 6359
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6359,
    "end": 6360
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6361,
    "end": 6367
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6367,
    "end": 6368
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6369,
    "end": 6370
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6372,
    "end": 6376
  },
  {
    "type": "Identifier",
    "value": "TLVideoShape",
    "start": 6377,
    "end": 6389
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6390,
    "end": 6391
  },
  {
    "type": "Identifier",
    "value": "TLBaseShape",
    "start": 6392,
    "end": 6403
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6403,
    "end": 6404
  },
  {
    "type": "String",
    "value": "\"video\"",
    "start": 6404,
    "end": 6411
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6411,
    "end": 6412
  },
  {
    "type": "Identifier",
    "value": "TLVideoShapeProps",
    "start": 6413,
    "end": 6430
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6430,
    "end": 6431
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6431,
    "end": 6432
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6434,
    "end": 6438
  },
  {
    "type": "Identifier",
    "value": "TLDefaultShape",
    "start": 6439,
    "end": 6453
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6454,
    "end": 6455
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 6458,
    "end": 6459
  },
  {
    "type": "Identifier",
    "value": "TLArrowShape",
    "start": 6460,
    "end": 6472
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 6475,
    "end": 6476
  },
  {
    "type": "Identifier",
    "value": "TLBookmarkShape",
    "start": 6477,
    "end": 6492
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 6495,
    "end": 6496
  },
  {
    "type": "Identifier",
    "value": "TLDrawShape",
    "start": 6497,
    "end": 6508
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 6511,
    "end": 6512
  },
  {
    "type": "Identifier",
    "value": "TLEmbedShape",
    "start": 6513,
    "end": 6525
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 6528,
    "end": 6529
  },
  {
    "type": "Identifier",
    "value": "TLFrameShape",
    "start": 6530,
    "end": 6542
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 6545,
    "end": 6546
  },
  {
    "type": "Identifier",
    "value": "TLGeoShape",
    "start": 6547,
    "end": 6557
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 6560,
    "end": 6561
  },
  {
    "type": "Identifier",
    "value": "TLGroupShape",
    "start": 6562,
    "end": 6574
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 6577,
    "end": 6578
  },
  {
    "type": "Identifier",
    "value": "TLHighlightShape",
    "start": 6579,
    "end": 6595
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 6598,
    "end": 6599
  },
  {
    "type": "Identifier",
    "value": "TLImageShape",
    "start": 6600,
    "end": 6612
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 6615,
    "end": 6616
  },
  {
    "type": "Identifier",
    "value": "TLLineShape",
    "start": 6617,
    "end": 6628
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 6631,
    "end": 6632
  },
  {
    "type": "Identifier",
    "value": "TLNoteShape",
    "start": 6633,
    "end": 6644
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 6647,
    "end": 6648
  },
  {
    "type": "Identifier",
    "value": "TLTextShape",
    "start": 6649,
    "end": 6660
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 6663,
    "end": 6664
  },
  {
    "type": "Identifier",
    "value": "TLVideoShape",
    "start": 6665,
    "end": 6677
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6677,
    "end": 6678
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6680,
    "end": 6684
  },
  {
    "type": "Identifier",
    "value": "TLIndexedShapes",
    "start": 6685,
    "end": 6700
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6701,
    "end": 6702
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6703,
    "end": 6704
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6707,
    "end": 6708
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 6708,
    "end": 6709
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 6710,
    "end": 6712
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 6717,
    "end": 6718
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 6719,
    "end": 6724
  },
  {
    "type": "Identifier",
    "value": "TLGlobalShapePropsMap",
    "start": 6725,
    "end": 6746
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 6751,
    "end": 6752
  },
  {
    "type": "Identifier",
    "value": "TLDefaultShape",
    "start": 6753,
    "end": 6767
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6767,
    "end": 6768
  },
  {
    "type": "String",
    "value": "\"type\"",
    "start": 6768,
    "end": 6774
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6774,
    "end": 6775
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 6776,
    "end": 6778
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 6779,
    "end": 6780
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6781,
    "end": 6788
  },
  {
    "type": "Identifier",
    "value": "TLDefaultShape",
    "start": 6789,
    "end": 6803
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6803,
    "end": 6804
  },
  {
    "type": "String",
    "value": "\"type\"",
    "start": 6804,
    "end": 6810
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6810,
    "end": 6811
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 6816,
    "end": 6817
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 6818,
    "end": 6819
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6820,
    "end": 6827
  },
  {
    "type": "String",
    "value": "\"group\"",
    "start": 6828,
    "end": 6835
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 6842,
    "end": 6843
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 6844,
    "end": 6845
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6852,
    "end": 6853
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 6854,
    "end": 6855
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6856,
    "end": 6863
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 6864,
    "end": 6869
  },
  {
    "type": "Identifier",
    "value": "TLGlobalShapePropsMap",
    "start": 6870,
    "end": 6891
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 6898,
    "end": 6899
  },
  {
    "type": "Identifier",
    "value": "TLGlobalShapePropsMap",
    "start": 6900,
    "end": 6921
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6921,
    "end": 6922
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 6922,
    "end": 6923
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6923,
    "end": 6924
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6925,
    "end": 6932
  },
  {
    "type": "Null",
    "value": "null",
    "start": 6933,
    "end": 6937
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 6938,
    "end": 6939
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 6940,
    "end": 6949
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 6958,
    "end": 6959
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 6960,
    "end": 6965
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6974,
    "end": 6975
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 6976,
    "end": 6977
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6984,
    "end": 6985
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 6986,
    "end": 6987
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6992,
    "end": 6993
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 6994,
    "end": 6995
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6995,
    "end": 6996
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6996,
    "end": 6997
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 6998,
    "end": 6999
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7000,
    "end": 7007
  },
  {
    "type": "String",
    "value": "\"group\"",
    "start": 7008,
    "end": 7015
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 7020,
    "end": 7021
  },
  {
    "type": "Identifier",
    "value": "Extract",
    "start": 7022,
    "end": 7029
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7029,
    "end": 7030
  },
  {
    "type": "Identifier",
    "value": "TLDefaultShape",
    "start": 7039,
    "end": 7053
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7053,
    "end": 7054
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7063,
    "end": 7064
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7075,
    "end": 7079
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7079,
    "end": 7080
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 7081,
    "end": 7082
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7082,
    "end": 7083
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7092,
    "end": 7093
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7100,
    "end": 7101
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7106,
    "end": 7107
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 7108,
    "end": 7109
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7110,
    "end": 7117
  },
  {
    "type": "Identifier",
    "value": "TLDefaultShape",
    "start": 7118,
    "end": 7132
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7132,
    "end": 7133
  },
  {
    "type": "String",
    "value": "\"type\"",
    "start": 7133,
    "end": 7139
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7139,
    "end": 7140
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 7145,
    "end": 7146
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 7147,
    "end": 7148
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7149,
    "end": 7156
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 7157,
    "end": 7162
  },
  {
    "type": "Identifier",
    "value": "TLGlobalShapePropsMap",
    "start": 7163,
    "end": 7184
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 7191,
    "end": 7192
  },
  {
    "type": "Identifier",
    "value": "TLBaseShape",
    "start": 7193,
    "end": 7204
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7204,
    "end": 7205
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 7205,
    "end": 7206
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7206,
    "end": 7207
  },
  {
    "type": "Identifier",
    "value": "TLGlobalShapePropsMap",
    "start": 7208,
    "end": 7229
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7229,
    "end": 7230
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 7230,
    "end": 7231
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7231,
    "end": 7232
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7232,
    "end": 7233
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7240,
    "end": 7241
  },
  {
    "type": "Identifier",
    "value": "Extract",
    "start": 7242,
    "end": 7249
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7249,
    "end": 7250
  },
  {
    "type": "Identifier",
    "value": "TLDefaultShape",
    "start": 7261,
    "end": 7275
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7275,
    "end": 7276
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7287,
    "end": 7288
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7301,
    "end": 7305
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7305,
    "end": 7306
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 7307,
    "end": 7308
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7308,
    "end": 7309
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7320,
    "end": 7321
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7330,
    "end": 7331
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7336,
    "end": 7337
  },
  {
    "type": "Identifier",
    "value": "TLBaseShape",
    "start": 7338,
    "end": 7349
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7349,
    "end": 7350
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 7350,
    "end": 7351
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7351,
    "end": 7352
  },
  {
    "type": "Identifier",
    "value": "TLGlobalShapePropsMap",
    "start": 7353,
    "end": 7374
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7374,
    "end": 7375
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 7375,
    "end": 7376
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 7377,
    "end": 7378
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 7379,
    "end": 7384
  },
  {
    "type": "Identifier",
    "value": "TLGlobalShapePropsMap",
    "start": 7385,
    "end": 7406
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7406,
    "end": 7407
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7407,
    "end": 7408
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7408,
    "end": 7409
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7410,
    "end": 7411
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7411,
    "end": 7412
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7414,
    "end": 7418
  },
  {
    "type": "Identifier",
    "value": "TLShape",
    "start": 7419,
    "end": 7426
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7426,
    "end": 7427
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 7427,
    "end": 7428
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7429,
    "end": 7436
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 7437,
    "end": 7442
  },
  {
    "type": "Identifier",
    "value": "TLIndexedShapes",
    "start": 7443,
    "end": 7458
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7459,
    "end": 7460
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 7461,
    "end": 7466
  },
  {
    "type": "Identifier",
    "value": "TLIndexedShapes",
    "start": 7467,
    "end": 7482
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7482,
    "end": 7483
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7484,
    "end": 7485
  },
  {
    "type": "Identifier",
    "value": "TLIndexedShapes",
    "start": 7488,
    "end": 7503
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7503,
    "end": 7504
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 7504,
    "end": 7505
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7505,
    "end": 7506
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7506,
    "end": 7507
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 7509,
    "end": 7518
  },
  {
    "type": "Identifier",
    "value": "BaseRecord",
    "start": 7519,
    "end": 7529
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7529,
    "end": 7530
  },
  {
    "type": "Identifier",
    "value": "TypeName",
    "start": 7533,
    "end": 7541
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7542,
    "end": 7549
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 7550,
    "end": 7556
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7556,
    "end": 7557
  },
  {
    "type": "Identifier",
    "value": "Id",
    "start": 7560,
    "end": 7562
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7563,
    "end": 7570
  },
  {
    "type": "Identifier",
    "value": "RecordId",
    "start": 7571,
    "end": 7579
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7579,
    "end": 7580
  },
  {
    "type": "Identifier",
    "value": "UnknownRecord",
    "start": 7580,
    "end": 7593
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7593,
    "end": 7594
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7594,
    "end": 7595
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7596,
    "end": 7597
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7598,
    "end": 7599
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 7602,
    "end": 7610
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 7611,
    "end": 7613
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7613,
    "end": 7614
  },
  {
    "type": "Identifier",
    "value": "Id",
    "start": 7615,
    "end": 7617
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7617,
    "end": 7618
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 7621,
    "end": 7629
  },
  {
    "type": "Identifier",
    "value": "typeName",
    "start": 7630,
    "end": 7638
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7638,
    "end": 7639
  },
  {
    "type": "Identifier",
    "value": "TypeName",
    "start": 7640,
    "end": 7648
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7648,
    "end": 7649
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7650,
    "end": 7651
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7653,
    "end": 7657
  },
  {
    "type": "Identifier",
    "value": "UnknownRecord",
    "start": 7658,
    "end": 7671
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7672,
    "end": 7673
  },
  {
    "type": "Identifier",
    "value": "BaseRecord",
    "start": 7674,
    "end": 7684
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7684,
    "end": 7685
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 7685,
    "end": 7691
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7691,
    "end": 7692
  },
  {
    "type": "Identifier",
    "value": "RecordId",
    "start": 7693,
    "end": 7701
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7701,
    "end": 7702
  },
  {
    "type": "Identifier",
    "value": "UnknownRecord",
    "start": 7702,
    "end": 7715
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7715,
    "end": 7716
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7716,
    "end": 7717
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7717,
    "end": 7718
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7720,
    "end": 7724
  },
  {
    "type": "Identifier",
    "value": "RecordId",
    "start": 7725,
    "end": 7733
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7733,
    "end": 7734
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 7734,
    "end": 7735
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7736,
    "end": 7743
  },
  {
    "type": "Identifier",
    "value": "UnknownRecord",
    "start": 7744,
    "end": 7757
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7757,
    "end": 7758
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7759,
    "end": 7760
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 7761,
    "end": 7767
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 7768,
    "end": 7769
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7770,
    "end": 7771
  },
  {
    "type": "Identifier",
    "value": "__type__",
    "start": 7774,
    "end": 7782
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7782,
    "end": 7783
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 7784,
    "end": 7785
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7785,
    "end": 7786
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7787,
    "end": 7788
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7788,
    "end": 7789
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7791,
    "end": 7795
  },
  {
    "type": "Identifier",
    "value": "TLShapeId",
    "start": 7796,
    "end": 7805
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7806,
    "end": 7807
  },
  {
    "type": "Identifier",
    "value": "RecordId",
    "start": 7808,
    "end": 7816
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7816,
    "end": 7817
  },
  {
    "type": "Identifier",
    "value": "TLShape",
    "start": 7817,
    "end": 7824
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7824,
    "end": 7825
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7825,
    "end": 7826
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7828,
    "end": 7832
  },
  {
    "type": "Identifier",
    "value": "TLShapePartial",
    "start": 7833,
    "end": 7847
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7847,
    "end": 7848
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 7848,
    "end": 7849
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7850,
    "end": 7857
  },
  {
    "type": "Identifier",
    "value": "TLShape",
    "start": 7858,
    "end": 7865
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7866,
    "end": 7867
  },
  {
    "type": "Identifier",
    "value": "TLShape",
    "start": 7868,
    "end": 7875
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7875,
    "end": 7876
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7877,
    "end": 7878
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 7879,
    "end": 7880
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7881,
    "end": 7888
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 7889,
    "end": 7890
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 7893,
    "end": 7894
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7895,
    "end": 7896
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 7903,
    "end": 7905
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7905,
    "end": 7906
  },
  {
    "type": "Identifier",
    "value": "TLShapeId",
    "start": 7907,
    "end": 7916
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7916,
    "end": 7917
  },
  {
    "type": "Identifier",
    "value": "meta",
    "start": 7924,
    "end": 7928
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 7928,
    "end": 7929
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7929,
    "end": 7930
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 7931,
    "end": 7938
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7938,
    "end": 7939
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 7939,
    "end": 7940
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7940,
    "end": 7941
  },
  {
    "type": "String",
    "value": "\"meta\"",
    "start": 7941,
    "end": 7947
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7947,
    "end": 7948
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7948,
    "end": 7949
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7949,
    "end": 7950
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 7957,
    "end": 7962
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 7962,
    "end": 7963
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7963,
    "end": 7964
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 7965,
    "end": 7972
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7972,
    "end": 7973
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 7973,
    "end": 7974
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7974,
    "end": 7975
  },
  {
    "type": "String",
    "value": "\"props\"",
    "start": 7975,
    "end": 7982
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7982,
    "end": 7983
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7983,
    "end": 7984
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7984,
    "end": 7985
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7992,
    "end": 7996
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7996,
    "end": 7997
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 7998,
    "end": 7999
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7999,
    "end": 8000
  },
  {
    "type": "String",
    "value": "\"type\"",
    "start": 8000,
    "end": 8006
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 8006,
    "end": 8007
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8007,
    "end": 8008
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8013,
    "end": 8014
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 8015,
    "end": 8016
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 8017,
    "end": 8024
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8024,
    "end": 8025
  },
  {
    "type": "Identifier",
    "value": "Omit",
    "start": 8025,
    "end": 8029
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8029,
    "end": 8030
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8030,
    "end": 8031
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8031,
    "end": 8032
  },
  {
    "type": "String",
    "value": "\"id\"",
    "start": 8033,
    "end": 8037
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 8038,
    "end": 8039
  },
  {
    "type": "String",
    "value": "\"meta\"",
    "start": 8040,
    "end": 8046
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 8047,
    "end": 8048
  },
  {
    "type": "String",
    "value": "\"props\"",
    "start": 8049,
    "end": 8056
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 8057,
    "end": 8058
  },
  {
    "type": "String",
    "value": "\"type\"",
    "start": 8059,
    "end": 8065
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8065,
    "end": 8066
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8066,
    "end": 8067
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8070,
    "end": 8071
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 8072,
    "end": 8077
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8077,
    "end": 8078
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 8080,
    "end": 8089
  },
  {
    "type": "Identifier",
    "value": "TLGlobalShapePropsMap",
    "start": 8090,
    "end": 8111
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8112,
    "end": 8113
  },
  {
    "type": "Identifier",
    "value": "html",
    "start": 8116,
    "end": 8120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8120,
    "end": 8121
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8122,
    "end": 8123
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 8128,
    "end": 8129
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8129,
    "end": 8130
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 8131,
    "end": 8137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8137,
    "end": 8138
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 8143,
    "end": 8144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8144,
    "end": 8145
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 8146,
    "end": 8152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8152,
    "end": 8153
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8156,
    "end": 8157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8157,
    "end": 8158
  },
  {
    "type": "Identifier",
    "value": "container_section",
    "start": 8161,
    "end": 8178
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8178,
    "end": 8179
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8180,
    "end": 8181
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 8186,
    "end": 8187
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8187,
    "end": 8188
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 8189,
    "end": 8195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8195,
    "end": 8196
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 8201,
    "end": 8202
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8202,
    "end": 8203
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 8204,
    "end": 8210
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8210,
    "end": 8211
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8214,
    "end": 8215
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8215,
    "end": 8216
  },
  {
    "type": "Identifier",
    "value": "container",
    "start": 8219,
    "end": 8228
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8228,
    "end": 8229
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8230,
    "end": 8231
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 8236,
    "end": 8237
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8237,
    "end": 8238
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 8239,
    "end": 8245
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8245,
    "end": 8246
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 8251,
    "end": 8252
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8252,
    "end": 8253
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 8254,
    "end": 8260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8260,
    "end": 8261
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8264,
    "end": 8265
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8265,
    "end": 8266
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8267,
    "end": 8268
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 8270,
    "end": 8274
  },
  {
    "type": "Identifier",
    "value": "Dimensions",
    "start": 8275,
    "end": 8285
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8286,
    "end": 8287
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8288,
    "end": 8289
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 8292,
    "end": 8293
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8293,
    "end": 8294
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 8295,
    "end": 8301
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8301,
    "end": 8302
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 8305,
    "end": 8306
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8306,
    "end": 8307
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 8308,
    "end": 8314
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8314,
    "end": 8315
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8316,
    "end": 8317
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8317,
    "end": 8318
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 8320,
    "end": 8326
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 8327,
    "end": 8331
  },
  {
    "type": "Identifier",
    "value": "ShapeWithDimensions",
    "start": 8332,
    "end": 8351
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8351,
    "end": 8352
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8352,
    "end": 8353
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8354,
    "end": 8361
  },
  {
    "type": "Identifier",
    "value": "TLShape",
    "start": 8362,
    "end": 8369
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8369,
    "end": 8370
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8371,
    "end": 8372
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8373,
    "end": 8374
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 8375,
    "end": 8376
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8377,
    "end": 8378
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 8381,
    "end": 8386
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8386,
    "end": 8387
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8388,
    "end": 8389
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 8389,
    "end": 8390
  },
  {
    "type": "String",
    "value": "\"props\"",
    "start": 8390,
    "end": 8397
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 8397,
    "end": 8398
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 8399,
    "end": 8400
  },
  {
    "type": "Identifier",
    "value": "Dimensions",
    "start": 8401,
    "end": 8411
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8411,
    "end": 8412
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8413,
    "end": 8414
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8414,
    "end": 8415
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 8417,
    "end": 8423
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 8424,
    "end": 8428
  },
  {
    "type": "Identifier",
    "value": "ShapePartialWithDimensions",
    "start": 8429,
    "end": 8455
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8455,
    "end": 8456
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8456,
    "end": 8457
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8458,
    "end": 8465
  },
  {
    "type": "Identifier",
    "value": "TLShape",
    "start": 8466,
    "end": 8473
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8473,
    "end": 8474
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8475,
    "end": 8476
  },
  {
    "type": "Identifier",
    "value": "TLShapePartial",
    "start": 8477,
    "end": 8491
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8491,
    "end": 8492
  },
  {
    "type": "Identifier",
    "value": "ShapeWithDimensions",
    "start": 8495,
    "end": 8514
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8514,
    "end": 8515
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8515,
    "end": 8516
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8516,
    "end": 8517
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8518,
    "end": 8519
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 8520,
    "end": 8521
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8522,
    "end": 8523
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 8526,
    "end": 8531
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8531,
    "end": 8532
  },
  {
    "type": "Identifier",
    "value": "TLShapePartial",
    "start": 8533,
    "end": 8547
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8547,
    "end": 8548
  },
  {
    "type": "Identifier",
    "value": "ShapeWithDimensions",
    "start": 8548,
    "end": 8567
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8567,
    "end": 8568
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8568,
    "end": 8569
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8569,
    "end": 8570
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8570,
    "end": 8571
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 8571,
    "end": 8572
  },
  {
    "type": "String",
    "value": "\"props\"",
    "start": 8572,
    "end": 8579
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 8579,
    "end": 8580
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 8581,
    "end": 8582
  },
  {
    "type": "Identifier",
    "value": "Dimensions",
    "start": 8583,
    "end": 8593
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8593,
    "end": 8594
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8595,
    "end": 8596
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8596,
    "end": 8597
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 8599,
    "end": 8605
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8606,
    "end": 8614
  },
  {
    "type": "Identifier",
    "value": "createShapeAtNearestAdjacentEmptyPosition",
    "start": 8615,
    "end": 8656
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8656,
    "end": 8657
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 8660,
    "end": 8661
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8662,
    "end": 8669
  },
  {
    "type": "Identifier",
    "value": "ShapeWithDimensions",
    "start": 8670,
    "end": 8689
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8689,
    "end": 8690
  },
  {
    "type": "Identifier",
    "value": "TLShape",
    "start": 8690,
    "end": 8697
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8697,
    "end": 8698
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8698,
    "end": 8699
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8700,
    "end": 8701
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8701,
    "end": 8702
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8702,
    "end": 8703
  },
  {
    "type": "Identifier",
    "value": "newShape",
    "start": 8706,
    "end": 8714
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8714,
    "end": 8715
  },
  {
    "type": "Identifier",
    "value": "newShapePartial",
    "start": 8716,
    "end": 8731
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8731,
    "end": 8732
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8733,
    "end": 8734
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8734,
    "end": 8735
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8736,
    "end": 8737
  },
  {
    "type": "Identifier",
    "value": "newShape",
    "start": 8740,
    "end": 8748
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8748,
    "end": 8749
  },
  {
    "type": "Identifier",
    "value": "ShapePartialWithDimensions",
    "start": 8750,
    "end": 8776
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8776,
    "end": 8777
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 8777,
    "end": 8778
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8778,
    "end": 8779
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8779,
    "end": 8780
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8781,
    "end": 8782
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8782,
    "end": 8783
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8783,
    "end": 8784
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8785,
    "end": 8786
  },
  {
    "type": "Identifier",
    "value": "newShape",
    "start": 8789,
    "end": 8797
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8797,
    "end": 8798
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 8799,
    "end": 8800
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8800,
    "end": 8801
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8802,
    "end": 8803
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8804,
    "end": 8805
  },
  {
    "type": "Identifier",
    "value": "newShapePartial",
    "start": 8808,
    "end": 8823
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8823,
    "end": 8824
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 8824,
    "end": 8829
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 8829,
    "end": 8831
  },
  {
    "type": "Identifier",
    "value": "w",
    "start": 8831,
    "end": 8832
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8832,
    "end": 8833
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 8836,
    "end": 8842
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 8843,
    "end": 8852
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 8853,
    "end": 8855
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 8856,
    "end": 8859
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8859,
    "end": 8860
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8861,
    "end": 8862
  }
]
```
