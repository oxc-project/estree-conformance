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
        "name": "Prettify",
        "optional": false,
        "typeAnnotation": null,
        "start": 144,
        "end": 152
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
              "start": 153,
              "end": 154
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 153,
            "end": 154
          }
        ],
        "start": 152,
        "end": 155
      },
      "typeAnnotation": {
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
              "start": 161,
              "end": 162
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
                  "start": 172,
                  "end": 173
                },
                "typeArguments": null,
                "start": 172,
                "end": 173
              },
              "start": 166,
              "end": 173
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
                  "start": 176,
                  "end": 177
                },
                "typeArguments": null,
                "start": 176,
                "end": 177
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 178,
                  "end": 179
                },
                "typeArguments": null,
                "start": 178,
                "end": 179
              },
              "start": 176,
              "end": 180
            },
            "optional": false,
            "readonly": null,
            "start": 158,
            "end": 182
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 185,
            "end": 187
          }
        ],
        "start": 158,
        "end": 187
      },
      "declare": false,
      "start": 139,
      "end": 188
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExtractUndefined",
        "optional": false,
        "typeAnnotation": null,
        "start": 194,
        "end": 210
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
              "start": 211,
              "end": 212
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 211,
            "end": 212
          }
        ],
        "start": 210,
        "end": 213
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 219,
            "end": 220
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
                "start": 230,
                "end": 231
              },
              "typeArguments": null,
              "start": 230,
              "end": 231
            },
            "start": 224,
            "end": 231
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSUndefinedKeyword",
              "start": 234,
              "end": 243
            },
            "extendsType": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 252,
                  "end": 253
                },
                "typeArguments": null,
                "start": 252,
                "end": 253
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 254,
                  "end": 255
                },
                "typeArguments": null,
                "start": 254,
                "end": 255
              },
              "start": 252,
              "end": 256
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 259,
                "end": 260
              },
              "typeArguments": null,
              "start": 259,
              "end": 260
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 263,
              "end": 268
            },
            "start": 234,
            "end": 268
          },
          "optional": false,
          "readonly": null,
          "start": 216,
          "end": 270
        },
        "indexType": {
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
              "start": 277,
              "end": 278
            },
            "typeArguments": null,
            "start": 277,
            "end": 278
          },
          "start": 271,
          "end": 278
        },
        "start": 216,
        "end": 279
      },
      "declare": false,
      "start": 189,
      "end": 280
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExtractDefined",
        "optional": false,
        "typeAnnotation": null,
        "start": 286,
        "end": 300
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
              "start": 301,
              "end": 302
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 301,
            "end": 302
          }
        ],
        "start": 300,
        "end": 303
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 309,
            "end": 310
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
                "start": 320,
                "end": 321
              },
              "typeArguments": null,
              "start": 320,
              "end": 321
            },
            "start": 314,
            "end": 321
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSUndefinedKeyword",
              "start": 324,
              "end": 333
            },
            "extendsType": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 342,
                  "end": 343
                },
                "typeArguments": null,
                "start": 342,
                "end": 343
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 344,
                  "end": 345
                },
                "typeArguments": null,
                "start": 344,
                "end": 345
              },
              "start": 342,
              "end": 346
            },
            "trueType": {
              "type": "TSNeverKeyword",
              "start": 349,
              "end": 354
            },
            "falseType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 357,
                "end": 358
              },
              "typeArguments": null,
              "start": 357,
              "end": 358
            },
            "start": 324,
            "end": 358
          },
          "optional": false,
          "readonly": null,
          "start": 306,
          "end": 360
        },
        "indexType": {
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
              "start": 367,
              "end": 368
            },
            "typeArguments": null,
            "start": 367,
            "end": 368
          },
          "start": 361,
          "end": 368
        },
        "start": 306,
        "end": 369
      },
      "declare": false,
      "start": 281,
      "end": 370
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Next",
        "optional": false,
        "typeAnnotation": null,
        "start": 376,
        "end": 380
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 384,
              "end": 385
            },
            "start": 384,
            "end": 385
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 387,
              "end": 388
            },
            "start": 387,
            "end": 388
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 390,
              "end": 391
            },
            "start": 390,
            "end": 391
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 4,
              "raw": "4",
              "start": 393,
              "end": 394
            },
            "start": 393,
            "end": 394
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 5,
              "raw": "5",
              "start": 396,
              "end": 397
            },
            "start": 396,
            "end": 397
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 6,
              "raw": "6",
              "start": 399,
              "end": 400
            },
            "start": 399,
            "end": 400
          }
        ],
        "start": 383,
        "end": 401
      },
      "declare": false,
      "start": 371,
      "end": 402
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JSONPrimitives",
        "optional": false,
        "typeAnnotation": null,
        "start": 408,
        "end": 422
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 425,
            "end": 431
          },
          {
            "type": "TSNumberKeyword",
            "start": 434,
            "end": 440
          },
          {
            "type": "TSBigIntKeyword",
            "start": 443,
            "end": 449
          },
          {
            "type": "TSBooleanKeyword",
            "start": 452,
            "end": 459
          },
          {
            "type": "TSNullKeyword",
            "start": 462,
            "end": 466
          },
          {
            "type": "TSUndefinedKeyword",
            "start": 469,
            "end": 478
          }
        ],
        "start": 425,
        "end": 478
      },
      "declare": false,
      "start": 403,
      "end": 479
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JSONValues",
        "optional": false,
        "typeAnnotation": null,
        "start": 485,
        "end": 495
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
              "name": "JSONPrimitives",
              "optional": false,
              "typeAnnotation": null,
              "start": 498,
              "end": 512
            },
            "typeArguments": null,
            "start": 498,
            "end": 512
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "CanBeSerialized",
              "optional": false,
              "typeAnnotation": null,
              "start": 515,
              "end": 530
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 531,
                  "end": 534
                }
              ],
              "start": 530,
              "end": 535
            },
            "start": 515,
            "end": 535
          }
        ],
        "start": 498,
        "end": 535
      },
      "declare": false,
      "start": 480,
      "end": 536
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CanBeSerialized",
        "optional": false,
        "typeAnnotation": null,
        "start": 542,
        "end": 557
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
              "start": 558,
              "end": 559
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "JSONDataTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 568,
                "end": 581
              },
              "typeArguments": null,
              "start": 568,
              "end": 581
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 558,
            "end": 581
          }
        ],
        "start": 557,
        "end": 582
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toJSON",
              "optional": false,
              "typeAnnotation": null,
              "start": 591,
              "end": 597
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
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
                  "start": 601,
                  "end": 602
                },
                "typeArguments": null,
                "start": 601,
                "end": 602
              },
              "start": 599,
              "end": 602
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 591,
            "end": 603
          }
        ],
        "start": 585,
        "end": 605
      },
      "declare": false,
      "start": 537,
      "end": 606
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JSONDataTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 612,
        "end": 625
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
              "name": "JSONValues",
              "optional": false,
              "typeAnnotation": null,
              "start": 628,
              "end": 638
            },
            "typeArguments": null,
            "start": 628,
            "end": 638
          },
          {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "JSONDataTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 641,
                "end": 654
              },
              "typeArguments": null,
              "start": 641,
              "end": 654
            },
            "start": 641,
            "end": 656
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
                        "start": 671,
                        "end": 677
                      },
                      "start": 669,
                      "end": 677
                    },
                    "start": 666,
                    "end": 677
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "JSONDataTypes",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 680,
                      "end": 693
                    },
                    "typeArguments": null,
                    "start": 680,
                    "end": 693
                  },
                  "start": 678,
                  "end": 693
                },
                "readonly": false,
                "static": false,
                "accessibility": null,
                "start": 665,
                "end": 694
              }
            ],
            "start": 659,
            "end": 696
          }
        ],
        "start": 628,
        "end": 696
      },
      "declare": false,
      "start": 607,
      "end": 697
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SerializeJSONObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 703,
        "end": 722
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
              "start": 723,
              "end": 724
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 723,
            "end": 724
          }
        ],
        "start": 722,
        "end": 725
      },
      "typeAnnotation": {
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
              "start": 735,
              "end": 736
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ExtractDefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 740,
                "end": 754
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
                      "start": 755,
                      "end": 756
                    },
                    "typeArguments": null,
                    "start": 755,
                    "end": 756
                  }
                ],
                "start": 754,
                "end": 757
              },
              "start": 740,
              "end": 757
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "SerializeJSONTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 760,
                "end": 778
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
                        "start": 779,
                        "end": 780
                      },
                      "typeArguments": null,
                      "start": 779,
                      "end": 780
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 781,
                        "end": 782
                      },
                      "typeArguments": null,
                      "start": 781,
                      "end": 782
                    },
                    "start": 779,
                    "end": 783
                  }
                ],
                "start": 778,
                "end": 784
              },
              "start": 760,
              "end": 784
            },
            "optional": false,
            "readonly": null,
            "start": 728,
            "end": 787
          },
          {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 797,
              "end": 798
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ExtractUndefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 802,
                "end": 818
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
                      "start": 819,
                      "end": 820
                    },
                    "typeArguments": null,
                    "start": 819,
                    "end": 820
                  }
                ],
                "start": 818,
                "end": 821
              },
              "start": 802,
              "end": 821
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "SerializeJSONTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 825,
                "end": 843
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
                        "start": 844,
                        "end": 845
                      },
                      "typeArguments": null,
                      "start": 844,
                      "end": 845
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 846,
                        "end": 847
                      },
                      "typeArguments": null,
                      "start": 846,
                      "end": 847
                    },
                    "start": 844,
                    "end": 848
                  }
                ],
                "start": 843,
                "end": 849
              },
              "start": 825,
              "end": 849
            },
            "optional": true,
            "readonly": null,
            "start": 790,
            "end": 852
          }
        ],
        "start": 728,
        "end": 852
      },
      "declare": false,
      "start": 698,
      "end": 853
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExtendedJSONTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 864,
        "end": 881
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 882,
        "end": 885
      },
      "declare": false,
      "start": 854,
      "end": 885
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NonAllowedJSTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 891,
        "end": 908
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
              "name": "Map",
              "optional": false,
              "typeAnnotation": null,
              "start": 911,
              "end": 914
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 915,
                  "end": 918
                },
                {
                  "type": "TSAnyKeyword",
                  "start": 920,
                  "end": 923
                }
              ],
              "start": 914,
              "end": 924
            },
            "start": 911,
            "end": 924
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Set",
              "optional": false,
              "typeAnnotation": null,
              "start": 927,
              "end": 930
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 931,
                  "end": 934
                }
              ],
              "start": 930,
              "end": 935
            },
            "start": 927,
            "end": 935
          }
        ],
        "start": 911,
        "end": 935
      },
      "declare": false,
      "start": 886,
      "end": 936
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ForcefullyAllowedTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 942,
        "end": 964
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 974,
            "end": 975
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ExtendedJSONTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 985,
                "end": 1002
              },
              "typeArguments": null,
              "start": 985,
              "end": 1002
            },
            "start": 979,
            "end": 1002
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ExtendedJSONTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 1005,
                "end": 1022
              },
              "typeArguments": null,
              "start": 1005,
              "end": 1022
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 1023,
                "end": 1024
              },
              "typeArguments": null,
              "start": 1023,
              "end": 1024
            },
            "start": 1005,
            "end": 1025
          },
          "optional": false,
          "readonly": null,
          "start": 967,
          "end": 1028
        },
        "indexType": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ExtendedJSONTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 1035,
              "end": 1052
            },
            "typeArguments": null,
            "start": 1035,
            "end": 1052
          },
          "start": 1029,
          "end": 1052
        },
        "start": 967,
        "end": 1053
      },
      "declare": false,
      "start": 937,
      "end": 1054
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SerializeJSONOwnTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 1060,
        "end": 1081
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
              "start": 1082,
              "end": 1083
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1082,
            "end": 1083
          }
        ],
        "start": 1081,
        "end": 1084
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
            "start": 1087,
            "end": 1088
          },
          "typeArguments": null,
          "start": 1087,
          "end": 1088
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "JSONPrimitives",
            "optional": false,
            "typeAnnotation": null,
            "start": 1097,
            "end": 1111
          },
          "typeArguments": null,
          "start": 1097,
          "end": 1111
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1114,
            "end": 1115
          },
          "typeArguments": null,
          "start": 1114,
          "end": 1115
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1118,
              "end": 1119
            },
            "typeArguments": null,
            "start": 1118,
            "end": 1119
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ForcefullyAllowedTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 1128,
              "end": 1150
            },
            "typeArguments": null,
            "start": 1128,
            "end": 1150
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1153,
              "end": 1154
            },
            "typeArguments": null,
            "start": 1153,
            "end": 1154
          },
          "falseType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1157,
                "end": 1158
              },
              "typeArguments": null,
              "start": 1157,
              "end": 1158
            },
            "extendsType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NonAllowedJSTypes",
                "optional": false,
                "typeAnnotation": null,
                "start": 1167,
                "end": 1184
              },
              "typeArguments": null,
              "start": 1167,
              "end": 1184
            },
            "trueType": {
              "type": "TSNeverKeyword",
              "start": 1187,
              "end": 1192
            },
            "falseType": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1195,
                  "end": 1196
                },
                "typeArguments": null,
                "start": 1195,
                "end": 1196
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1205,
                  "end": 1210
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
                          "name": "item",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1217,
                          "end": 1221
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1217,
                        "end": 1221
                      },
                      "start": 1211,
                      "end": 1221
                    }
                  ],
                  "start": 1210,
                  "end": 1222
                },
                "start": 1205,
                "end": 1222
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1225,
                  "end": 1230
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SerializeJSONTypes",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1231,
                        "end": 1249
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "item",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1250,
                              "end": 1254
                            },
                            "typeArguments": null,
                            "start": 1250,
                            "end": 1254
                          }
                        ],
                        "start": 1249,
                        "end": 1255
                      },
                      "start": 1231,
                      "end": 1255
                    }
                  ],
                  "start": 1230,
                  "end": 1256
                },
                "start": 1225,
                "end": 1256
              },
              "falseType": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1259,
                    "end": 1260
                  },
                  "typeArguments": null,
                  "start": 1259,
                  "end": 1260
                },
                "extendsType": {
                  "type": "TSObjectKeyword",
                  "start": 1269,
                  "end": 1275
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Prettify",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1278,
                    "end": 1286
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "SerializeJSONObject",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1287,
                          "end": 1306
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
                                "start": 1307,
                                "end": 1308
                              },
                              "typeArguments": null,
                              "start": 1307,
                              "end": 1308
                            }
                          ],
                          "start": 1306,
                          "end": 1309
                        },
                        "start": 1287,
                        "end": 1309
                      }
                    ],
                    "start": 1286,
                    "end": 1310
                  },
                  "start": 1278,
                  "end": 1310
                },
                "falseType": {
                  "type": "TSNeverKeyword",
                  "start": 1313,
                  "end": 1318
                },
                "start": 1259,
                "end": 1318
              },
              "start": 1195,
              "end": 1318
            },
            "start": 1157,
            "end": 1318
          },
          "start": 1118,
          "end": 1318
        },
        "start": 1087,
        "end": 1318
      },
      "declare": false,
      "start": 1055,
      "end": 1319
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SerializeJSONTypes",
        "optional": false,
        "typeAnnotation": null,
        "start": 1325,
        "end": 1343
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
              "start": 1344,
              "end": 1345
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1344,
            "end": 1345
          }
        ],
        "start": 1343,
        "end": 1346
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
            "start": 1349,
            "end": 1350
          },
          "typeArguments": null,
          "start": 1349,
          "end": 1350
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ForcefullyAllowedTypes",
            "optional": false,
            "typeAnnotation": null,
            "start": 1359,
            "end": 1381
          },
          "typeArguments": null,
          "start": 1359,
          "end": 1381
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1384,
            "end": 1385
          },
          "typeArguments": null,
          "start": 1384,
          "end": 1385
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1388,
              "end": 1389
            },
            "typeArguments": null,
            "start": 1388,
            "end": 1389
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "CanBeSerialized",
              "optional": false,
              "typeAnnotation": null,
              "start": 1398,
              "end": 1413
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
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1420,
                      "end": 1421
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1420,
                    "end": 1421
                  },
                  "start": 1414,
                  "end": 1421
                }
              ],
              "start": 1413,
              "end": 1422
            },
            "start": 1398,
            "end": 1422
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "SerializeJSONOwnTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 1425,
              "end": 1446
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
                    "start": 1447,
                    "end": 1448
                  },
                  "typeArguments": null,
                  "start": 1447,
                  "end": 1448
                }
              ],
              "start": 1446,
              "end": 1449
            },
            "start": 1425,
            "end": 1449
          },
          "falseType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "SerializeJSONOwnTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 1452,
              "end": 1473
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
                    "start": 1474,
                    "end": 1475
                  },
                  "typeArguments": null,
                  "start": 1474,
                  "end": 1475
                }
              ],
              "start": 1473,
              "end": 1476
            },
            "start": 1452,
            "end": 1476
          },
          "start": 1388,
          "end": 1476
        },
        "start": 1349,
        "end": 1476
      },
      "declare": false,
      "start": 1320,
      "end": 1477
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ItemContract",
        "optional": false,
        "typeAnnotation": null,
        "start": 1488,
        "end": 1500
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Transformer",
              "optional": false,
              "typeAnnotation": null,
              "start": 1501,
              "end": 1512
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 1521,
                "end": 1527
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1528,
                    "end": 1534
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 1536,
                    "end": 1539
                  }
                ],
                "start": 1527,
                "end": 1540
              },
              "start": 1521,
              "end": 1540
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1501,
            "end": 1540
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "MaxDepth",
              "optional": false,
              "typeAnnotation": null,
              "start": 1542,
              "end": 1550
            },
            "constraint": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Next",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1559,
                  "end": 1563
                },
                "typeArguments": null,
                "start": 1559,
                "end": 1563
              },
              "indexType": {
                "type": "TSNumberKeyword",
                "start": 1564,
                "end": 1570
              },
              "start": 1559,
              "end": 1571
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1542,
            "end": 1571
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Variant",
              "optional": false,
              "typeAnnotation": null,
              "start": 1573,
              "end": 1580
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1589,
              "end": 1595
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1573,
            "end": 1595
          }
        ],
        "start": 1500,
        "end": 1596
      },
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
              "name": "$type",
              "optional": false,
              "typeAnnotation": null,
              "start": 1603,
              "end": 1608
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "item",
                  "raw": "'item'",
                  "start": 1610,
                  "end": 1616
                },
                "start": 1610,
                "end": 1616
              },
              "start": 1608,
              "end": 1616
            },
            "accessibility": null,
            "static": false,
            "start": 1603,
            "end": 1617
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "transformer",
              "optional": false,
              "typeAnnotation": null,
              "start": 1622,
              "end": 1633
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1653,
                          "end": 1657
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 1659,
                              "end": 1662
                            },
                            "start": 1659,
                            "end": 1664
                          },
                          "start": 1657,
                          "end": 1664
                        },
                        "value": null,
                        "start": 1650,
                        "end": 1664
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Transformer",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1667,
                          "end": 1678
                        },
                        "typeArguments": null,
                        "start": 1667,
                        "end": 1678
                      },
                      "start": 1665,
                      "end": 1678
                    },
                    "start": 1645,
                    "end": 1679
                  }
                ],
                "start": 1635,
                "end": 1685
              },
              "start": 1633,
              "end": 1685
            },
            "accessibility": null,
            "static": false,
            "start": 1622,
            "end": 1686
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "maxDepth",
              "optional": false,
              "typeAnnotation": null,
              "start": 1691,
              "end": 1699
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MaxDepth",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1701,
                  "end": 1709
                },
                "typeArguments": null,
                "start": 1701,
                "end": 1709
              },
              "start": 1699,
              "end": 1709
            },
            "accessibility": null,
            "static": false,
            "start": 1691,
            "end": 1710
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "variant",
              "optional": false,
              "typeAnnotation": null,
              "start": 1715,
              "end": 1722
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Variant",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1724,
                  "end": 1731
                },
                "typeArguments": null,
                "start": 1724,
                "end": 1731
              },
              "start": 1722,
              "end": 1731
            },
            "accessibility": null,
            "static": false,
            "start": 1715,
            "end": 1732
          }
        ],
        "start": 1597,
        "end": 1734
      },
      "declare": false,
      "start": 1478,
      "end": 1734
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnpackKeyValue",
        "optional": false,
        "typeAnnotation": null,
        "start": 1740,
        "end": 1754
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 1755,
              "end": 1760
            },
            "constraint": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSAnyKeyword",
                  "start": 1770,
                  "end": 1773
                },
                {
                  "type": "TSAnyKeyword",
                  "start": 1775,
                  "end": 1778
                }
              ],
              "start": 1769,
              "end": 1779
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1755,
            "end": 1779
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "MaxDepth",
              "optional": false,
              "typeAnnotation": null,
              "start": 1781,
              "end": 1789
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1798,
              "end": 1804
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1781,
            "end": 1804
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Depth",
              "optional": false,
              "typeAnnotation": null,
              "start": 1806,
              "end": 1811
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1820,
              "end": 1826
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1806,
            "end": 1826
          }
        ],
        "start": 1754,
        "end": 1827
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1831,
                  "end": 1836
                },
                "typeArguments": null,
                "start": 1831,
                "end": 1836
              },
              "indexType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1837,
                  "end": 1838
                },
                "start": 1837,
                "end": 1838
              },
              "start": 1831,
              "end": 1839
            }
          ],
          "start": 1830,
          "end": 1840
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNeverKeyword",
              "start": 1850,
              "end": 1855
            }
          ],
          "start": 1849,
          "end": 1856
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "SerializeJSONTypes",
            "optional": false,
            "typeAnnotation": null,
            "start": 1859,
            "end": 1877
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
                    "name": "Value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1878,
                    "end": 1883
                  },
                  "typeArguments": null,
                  "start": 1878,
                  "end": 1883
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1884,
                    "end": 1885
                  },
                  "start": 1884,
                  "end": 1885
                },
                "start": 1878,
                "end": 1886
              }
            ],
            "start": 1877,
            "end": 1887
          },
          "start": 1859,
          "end": 1887
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Value",
                "optional": false,
                "typeAnnotation": null,
                "start": 1890,
                "end": 1895
              },
              "typeArguments": null,
              "start": 1890,
              "end": 1895
            },
            "indexType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1896,
                "end": 1897
              },
              "start": 1896,
              "end": 1897
            },
            "start": 1890,
            "end": 1898
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ItemContract",
              "optional": false,
              "typeAnnotation": null,
              "start": 1907,
              "end": 1919
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
                      "name": "Transformer",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1926,
                      "end": 1937
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1926,
                    "end": 1937
                  },
                  "start": 1920,
                  "end": 1937
                },
                {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LocalMaxDepth",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1945,
                      "end": 1958
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1945,
                    "end": 1958
                  },
                  "start": 1939,
                  "end": 1958
                },
                {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Variant",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1966,
                      "end": 1973
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1966,
                    "end": 1973
                  },
                  "start": 1960,
                  "end": 1973
                }
              ],
              "start": 1919,
              "end": 1974
            },
            "start": 1907,
            "end": 1974
          },
          "trueType": {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "InferData",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1977,
                  "end": 1986
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Transformer",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1987,
                        "end": 1998
                      },
                      "typeArguments": null,
                      "start": 1987,
                      "end": 1998
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Variant",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2000,
                        "end": 2007
                      },
                      "typeArguments": null,
                      "start": 2000,
                      "end": 2007
                    },
                    {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MaxDepth",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2009,
                          "end": 2017
                        },
                        "typeArguments": null,
                        "start": 2009,
                        "end": 2017
                      },
                      "extendsType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "UnaryExpression",
                          "operator": "-",
                          "argument": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 2027,
                            "end": 2028
                          },
                          "prefix": true,
                          "start": 2026,
                          "end": 2028
                        },
                        "start": 2026,
                        "end": 2028
                      },
                      "trueType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "LocalMaxDepth",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2031,
                          "end": 2044
                        },
                        "typeArguments": null,
                        "start": 2031,
                        "end": 2044
                      },
                      "falseType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MaxDepth",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2047,
                          "end": 2055
                        },
                        "typeArguments": null,
                        "start": 2047,
                        "end": 2055
                      },
                      "start": 2009,
                      "end": 2055
                    },
                    {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Next",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2057,
                          "end": 2061
                        },
                        "typeArguments": null,
                        "start": 2057,
                        "end": 2061
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Depth",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2062,
                          "end": 2067
                        },
                        "typeArguments": null,
                        "start": 2062,
                        "end": 2067
                      },
                      "start": 2057,
                      "end": 2068
                    }
                  ],
                  "start": 1986,
                  "end": 2069
                },
                "start": 1977,
                "end": 2069
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SerializeJSONTypes",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2072,
                  "end": 2090
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
                          "name": "Value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2091,
                          "end": 2096
                        },
                        "typeArguments": null,
                        "start": 2091,
                        "end": 2096
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 2097,
                          "end": 2098
                        },
                        "start": 2097,
                        "end": 2098
                      },
                      "start": 2091,
                      "end": 2099
                    }
                  ],
                  "start": 2090,
                  "end": 2100
                },
                "start": 2072,
                "end": 2100
              }
            ],
            "start": 1977,
            "end": 2100
          },
          "falseType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "SerializeJSONTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 2103,
              "end": 2121
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
                      "name": "Value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2122,
                      "end": 2127
                    },
                    "typeArguments": null,
                    "start": 2122,
                    "end": 2127
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2128,
                      "end": 2129
                    },
                    "start": 2128,
                    "end": 2129
                  },
                  "start": 2122,
                  "end": 2130
                }
              ],
              "start": 2121,
              "end": 2131
            },
            "start": 2103,
            "end": 2131
          },
          "start": 1890,
          "end": 2131
        },
        "start": 1830,
        "end": 2131
      },
      "declare": false,
      "start": 1735,
      "end": 2132
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LimitDepth",
        "optional": false,
        "typeAnnotation": null,
        "start": 2138,
        "end": 2148
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Key",
              "optional": false,
              "typeAnnotation": null,
              "start": 2149,
              "end": 2152
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2149,
            "end": 2152
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 2154,
              "end": 2159
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2154,
            "end": 2159
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "MaxDepth",
              "optional": false,
              "typeAnnotation": null,
              "start": 2161,
              "end": 2169
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 2178,
              "end": 2184
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2161,
            "end": 2184
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Depth",
              "optional": false,
              "typeAnnotation": null,
              "start": 2186,
              "end": 2191
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 2200,
              "end": 2206
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2186,
            "end": 2206
          }
        ],
        "start": 2148,
        "end": 2207
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
                "name": "Value",
                "optional": false,
                "typeAnnotation": null,
                "start": 2216,
                "end": 2221
              },
              "typeArguments": null,
              "start": 2216,
              "end": 2221
            }
          ],
          "start": 2210,
          "end": 2223
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNeverKeyword",
              "start": 2233,
              "end": 2238
            }
          ],
          "start": 2232,
          "end": 2239
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Key",
            "optional": false,
            "typeAnnotation": null,
            "start": 2242,
            "end": 2245
          },
          "typeArguments": null,
          "start": 2242,
          "end": 2245
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 2248,
              "end": 2253
            },
            "typeArguments": null,
            "start": 2248,
            "end": 2253
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ItemContract",
              "optional": false,
              "typeAnnotation": null,
              "start": 2262,
              "end": 2274
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 2275,
                  "end": 2278
                },
                {
                  "type": "TSAnyKeyword",
                  "start": 2280,
                  "end": 2283
                },
                {
                  "type": "TSAnyKeyword",
                  "start": 2285,
                  "end": 2288
                }
              ],
              "start": 2274,
              "end": 2289
            },
            "start": 2262,
            "end": 2289
          },
          "trueType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MaxDepth",
                "optional": false,
                "typeAnnotation": null,
                "start": 2292,
                "end": 2300
              },
              "typeArguments": null,
              "start": 2292,
              "end": 2300
            },
            "extendsType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Depth",
                "optional": false,
                "typeAnnotation": null,
                "start": 2309,
                "end": 2314
              },
              "typeArguments": null,
              "start": 2309,
              "end": 2314
            },
            "trueType": {
              "type": "TSNeverKeyword",
              "start": 2317,
              "end": 2322
            },
            "falseType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Key",
                "optional": false,
                "typeAnnotation": null,
                "start": 2325,
                "end": 2328
              },
              "typeArguments": null,
              "start": 2325,
              "end": 2328
            },
            "start": 2292,
            "end": 2328
          },
          "falseType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Key",
              "optional": false,
              "typeAnnotation": null,
              "start": 2331,
              "end": 2334
            },
            "typeArguments": null,
            "start": 2331,
            "end": 2334
          },
          "start": 2248,
          "end": 2334
        },
        "start": 2210,
        "end": 2334
      },
      "declare": false,
      "start": 2133,
      "end": 2335
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnpackOptionalValues",
        "optional": false,
        "typeAnnotation": null,
        "start": 2341,
        "end": 2361
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Data",
              "optional": false,
              "typeAnnotation": null,
              "start": 2362,
              "end": 2366
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2362,
            "end": 2366
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "MaxDepth",
              "optional": false,
              "typeAnnotation": null,
              "start": 2368,
              "end": 2376
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 2385,
              "end": 2391
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2368,
            "end": 2391
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Depth",
              "optional": false,
              "typeAnnotation": null,
              "start": 2393,
              "end": 2398
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 2407,
              "end": 2413
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2393,
            "end": 2413
          }
        ],
        "start": 2361,
        "end": 2414
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "O",
          "optional": false,
          "typeAnnotation": null,
          "start": 2424,
          "end": 2425
        },
        "constraint": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 2440,
              "end": 2441
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Data",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2451,
                  "end": 2455
                },
                "typeArguments": null,
                "start": 2451,
                "end": 2455
              },
              "start": 2445,
              "end": 2455
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 2459,
                    "end": 2468
                  }
                ],
                "start": 2458,
                "end": 2469
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
                        "name": "Data",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2479,
                        "end": 2483
                      },
                      "typeArguments": null,
                      "start": 2479,
                      "end": 2483
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2484,
                        "end": 2485
                      },
                      "typeArguments": null,
                      "start": 2484,
                      "end": 2485
                    },
                    "start": 2479,
                    "end": 2486
                  }
                ],
                "start": 2478,
                "end": 2487
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "LimitDepth",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2490,
                  "end": 2500
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
                        "start": 2501,
                        "end": 2502
                      },
                      "typeArguments": null,
                      "start": 2501,
                      "end": 2502
                    },
                    {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "SplitItm",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2504,
                          "end": 2512
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
                                  "name": "Data",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2513,
                                  "end": 2517
                                },
                                "typeArguments": null,
                                "start": 2513,
                                "end": 2517
                              },
                              "indexType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "K",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2518,
                                  "end": 2519
                                },
                                "typeArguments": null,
                                "start": 2518,
                                "end": 2519
                              },
                              "start": 2513,
                              "end": 2520
                            }
                          ],
                          "start": 2512,
                          "end": 2521
                        },
                        "start": 2504,
                        "end": 2521
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 2522,
                          "end": 2523
                        },
                        "start": 2522,
                        "end": 2523
                      },
                      "start": 2504,
                      "end": 2524
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MaxDepth",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2526,
                        "end": 2534
                      },
                      "typeArguments": null,
                      "start": 2526,
                      "end": 2534
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Depth",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2536,
                        "end": 2541
                      },
                      "typeArguments": null,
                      "start": 2536,
                      "end": 2541
                    }
                  ],
                  "start": 2500,
                  "end": 2542
                },
                "start": 2490,
                "end": 2542
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 2545,
                "end": 2550
              },
              "start": 2458,
              "end": 2550
            },
            "optional": false,
            "readonly": null,
            "start": 2429,
            "end": 2557
          },
          "indexType": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Data",
                "optional": false,
                "typeAnnotation": null,
                "start": 2564,
                "end": 2568
              },
              "typeArguments": null,
              "start": 2564,
              "end": 2568
            },
            "start": 2558,
            "end": 2568
          },
          "start": 2429,
          "end": 2569
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "UnpackKeyValue",
            "optional": false,
            "typeAnnotation": null,
            "start": 2573,
            "end": 2587
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SplitItm",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2588,
                  "end": 2596
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
                          "name": "Data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2597,
                          "end": 2601
                        },
                        "typeArguments": null,
                        "start": 2597,
                        "end": 2601
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "O",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2602,
                          "end": 2603
                        },
                        "typeArguments": null,
                        "start": 2602,
                        "end": 2603
                      },
                      "start": 2597,
                      "end": 2604
                    }
                  ],
                  "start": 2596,
                  "end": 2605
                },
                "start": 2588,
                "end": 2605
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MaxDepth",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2607,
                  "end": 2615
                },
                "typeArguments": null,
                "start": 2607,
                "end": 2615
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Depth",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2617,
                  "end": 2622
                },
                "typeArguments": null,
                "start": 2617,
                "end": 2622
              }
            ],
            "start": 2587,
            "end": 2623
          },
          "start": 2573,
          "end": 2623
        },
        "optional": true,
        "readonly": null,
        "start": 2417,
        "end": 2626
      },
      "declare": false,
      "start": 2336,
      "end": 2627
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnpackRequiredValues",
        "optional": false,
        "typeAnnotation": null,
        "start": 2633,
        "end": 2653
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Data",
              "optional": false,
              "typeAnnotation": null,
              "start": 2654,
              "end": 2658
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2654,
            "end": 2658
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "MaxDepth",
              "optional": false,
              "typeAnnotation": null,
              "start": 2660,
              "end": 2668
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 2677,
              "end": 2683
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2660,
            "end": 2683
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Depth",
              "optional": false,
              "typeAnnotation": null,
              "start": 2685,
              "end": 2690
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 2699,
              "end": 2705
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2685,
            "end": 2705
          }
        ],
        "start": 2653,
        "end": 2706
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "O",
          "optional": false,
          "typeAnnotation": null,
          "start": 2716,
          "end": 2717
        },
        "constraint": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 2732,
              "end": 2733
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Data",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2743,
                  "end": 2747
                },
                "typeArguments": null,
                "start": 2743,
                "end": 2747
              },
              "start": 2737,
              "end": 2747
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 2751,
                    "end": 2760
                  }
                ],
                "start": 2750,
                "end": 2761
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
                        "name": "Data",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2771,
                        "end": 2775
                      },
                      "typeArguments": null,
                      "start": 2771,
                      "end": 2775
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2776,
                        "end": 2777
                      },
                      "typeArguments": null,
                      "start": 2776,
                      "end": 2777
                    },
                    "start": 2771,
                    "end": 2778
                  }
                ],
                "start": 2770,
                "end": 2779
              },
              "trueType": {
                "type": "TSNeverKeyword",
                "start": 2782,
                "end": 2787
              },
              "falseType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "LimitDepth",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2790,
                  "end": 2800
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
                        "start": 2801,
                        "end": 2802
                      },
                      "typeArguments": null,
                      "start": 2801,
                      "end": 2802
                    },
                    {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "SplitItm",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2804,
                          "end": 2812
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
                                  "name": "Data",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2813,
                                  "end": 2817
                                },
                                "typeArguments": null,
                                "start": 2813,
                                "end": 2817
                              },
                              "indexType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "K",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2818,
                                  "end": 2819
                                },
                                "typeArguments": null,
                                "start": 2818,
                                "end": 2819
                              },
                              "start": 2813,
                              "end": 2820
                            }
                          ],
                          "start": 2812,
                          "end": 2821
                        },
                        "start": 2804,
                        "end": 2821
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 2822,
                          "end": 2823
                        },
                        "start": 2822,
                        "end": 2823
                      },
                      "start": 2804,
                      "end": 2824
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MaxDepth",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2826,
                        "end": 2834
                      },
                      "typeArguments": null,
                      "start": 2826,
                      "end": 2834
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Depth",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2836,
                        "end": 2841
                      },
                      "typeArguments": null,
                      "start": 2836,
                      "end": 2841
                    }
                  ],
                  "start": 2800,
                  "end": 2842
                },
                "start": 2790,
                "end": 2842
              },
              "start": 2750,
              "end": 2842
            },
            "optional": false,
            "readonly": null,
            "start": 2721,
            "end": 2849
          },
          "indexType": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Data",
                "optional": false,
                "typeAnnotation": null,
                "start": 2856,
                "end": 2860
              },
              "typeArguments": null,
              "start": 2856,
              "end": 2860
            },
            "start": 2850,
            "end": 2860
          },
          "start": 2721,
          "end": 2861
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "UnpackKeyValue",
            "optional": false,
            "typeAnnotation": null,
            "start": 2864,
            "end": 2878
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SplitItm",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2879,
                  "end": 2887
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
                          "name": "Data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2888,
                          "end": 2892
                        },
                        "typeArguments": null,
                        "start": 2888,
                        "end": 2892
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "O",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2893,
                          "end": 2894
                        },
                        "typeArguments": null,
                        "start": 2893,
                        "end": 2894
                      },
                      "start": 2888,
                      "end": 2895
                    }
                  ],
                  "start": 2887,
                  "end": 2896
                },
                "start": 2879,
                "end": 2896
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MaxDepth",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2898,
                  "end": 2906
                },
                "typeArguments": null,
                "start": 2898,
                "end": 2906
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Depth",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2908,
                  "end": 2913
                },
                "typeArguments": null,
                "start": 2908,
                "end": 2913
              }
            ],
            "start": 2878,
            "end": 2914
          },
          "start": 2864,
          "end": 2914
        },
        "optional": false,
        "readonly": null,
        "start": 2709,
        "end": 2917
      },
      "declare": false,
      "start": 2628,
      "end": 2918
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SplitItm",
        "optional": false,
        "typeAnnotation": null,
        "start": 2924,
        "end": 2932
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
              "start": 2933,
              "end": 2934
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2933,
            "end": 2934
          }
        ],
        "start": 2932,
        "end": 2935
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Extract",
              "optional": false,
              "typeAnnotation": null,
              "start": 2944,
              "end": 2951
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
                    "start": 2952,
                    "end": 2953
                  },
                  "typeArguments": null,
                  "start": 2952,
                  "end": 2953
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ItemContract",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2955,
                    "end": 2967
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 2968,
                        "end": 2971
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 2973,
                        "end": 2976
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 2978,
                        "end": 2981
                      }
                    ],
                    "start": 2967,
                    "end": 2982
                  },
                  "start": 2955,
                  "end": 2982
                }
              ],
              "start": 2951,
              "end": 2983
            },
            "start": 2944,
            "end": 2983
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Exclude",
              "optional": false,
              "typeAnnotation": null,
              "start": 2989,
              "end": 2996
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
                    "start": 2997,
                    "end": 2998
                  },
                  "typeArguments": null,
                  "start": 2997,
                  "end": 2998
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ItemContract",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3000,
                    "end": 3012
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 3013,
                        "end": 3016
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 3018,
                        "end": 3021
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 3023,
                        "end": 3026
                      }
                    ],
                    "start": 3012,
                    "end": 3027
                  },
                  "start": 3000,
                  "end": 3027
                }
              ],
              "start": 2996,
              "end": 3028
            },
            "start": 2989,
            "end": 3028
          }
        ],
        "start": 2938,
        "end": 3030
      },
      "declare": false,
      "start": 2919,
      "end": 3031
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnpackAsTopLevelItem",
        "optional": false,
        "typeAnnotation": null,
        "start": 3037,
        "end": 3057
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
              "start": 3058,
              "end": 3059
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3058,
            "end": 3059
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Wrapper",
              "optional": false,
              "typeAnnotation": null,
              "start": 3061,
              "end": 3068
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 3077,
                  "end": 3083
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 3086,
                  "end": 3095
                }
              ],
              "start": 3077,
              "end": 3095
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3061,
            "end": 3095
          }
        ],
        "start": 3057,
        "end": 3096
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
            "start": 3099,
            "end": 3100
          },
          "typeArguments": null,
          "start": 3099,
          "end": 3100
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ItemContract",
            "optional": false,
            "typeAnnotation": null,
            "start": 3109,
            "end": 3121
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
                    "name": "Transformer",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3128,
                    "end": 3139
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3128,
                  "end": 3139
                },
                "start": 3122,
                "end": 3139
              },
              {
                "type": "TSAnyKeyword",
                "start": 3141,
                "end": 3144
              },
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Variant",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3152,
                    "end": 3159
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3152,
                  "end": 3159
                },
                "start": 3146,
                "end": 3159
              }
            ],
            "start": 3121,
            "end": 3160
          },
          "start": 3109,
          "end": 3160
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "InferData",
            "optional": false,
            "typeAnnotation": null,
            "start": 3163,
            "end": 3172
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Transformer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3173,
                  "end": 3184
                },
                "typeArguments": null,
                "start": 3173,
                "end": 3184
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Variant",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3186,
                  "end": 3193
                },
                "typeArguments": null,
                "start": 3186,
                "end": 3193
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 3196,
                    "end": 3197
                  },
                  "prefix": true,
                  "start": 3195,
                  "end": 3197
                },
                "start": 3195,
                "end": 3197
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 3199,
                  "end": 3200
                },
                "start": 3199,
                "end": 3200
              }
            ],
            "start": 3172,
            "end": 3201
          },
          "start": 3163,
          "end": 3201
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 3204,
          "end": 3209
        },
        "start": 3099,
        "end": 3209
      },
      "declare": false,
      "start": 3032,
      "end": 3210
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnpackValues",
        "optional": false,
        "typeAnnotation": null,
        "start": 3216,
        "end": 3228
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Data",
              "optional": false,
              "typeAnnotation": null,
              "start": 3229,
              "end": 3233
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3229,
            "end": 3233
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "MaxDepth",
              "optional": false,
              "typeAnnotation": null,
              "start": 3235,
              "end": 3243
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 3252,
              "end": 3258
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3235,
            "end": 3258
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Depth",
              "optional": false,
              "typeAnnotation": null,
              "start": 3260,
              "end": 3265
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 3274,
              "end": 3280
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3260,
            "end": 3280
          }
        ],
        "start": 3228,
        "end": 3281
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Prettify",
          "optional": false,
          "typeAnnotation": null,
          "start": 3284,
          "end": 3292
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "UnpackRequiredValues",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3293,
                    "end": 3313
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3314,
                          "end": 3318
                        },
                        "typeArguments": null,
                        "start": 3314,
                        "end": 3318
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MaxDepth",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3320,
                          "end": 3328
                        },
                        "typeArguments": null,
                        "start": 3320,
                        "end": 3328
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Depth",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3330,
                          "end": 3335
                        },
                        "typeArguments": null,
                        "start": 3330,
                        "end": 3335
                      }
                    ],
                    "start": 3313,
                    "end": 3336
                  },
                  "start": 3293,
                  "end": 3336
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "UnpackOptionalValues",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3339,
                    "end": 3359
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3360,
                          "end": 3364
                        },
                        "typeArguments": null,
                        "start": 3360,
                        "end": 3364
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MaxDepth",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3366,
                          "end": 3374
                        },
                        "typeArguments": null,
                        "start": 3366,
                        "end": 3374
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Depth",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3376,
                          "end": 3381
                        },
                        "typeArguments": null,
                        "start": 3376,
                        "end": 3381
                      }
                    ],
                    "start": 3359,
                    "end": 3382
                  },
                  "start": 3339,
                  "end": 3382
                }
              ],
              "start": 3293,
              "end": 3382
            }
          ],
          "start": 3292,
          "end": 3383
        },
        "start": 3284,
        "end": 3383
      },
      "declare": false,
      "start": 3211,
      "end": 3384
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InferData",
        "optional": false,
        "typeAnnotation": null,
        "start": 3390,
        "end": 3399
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Transformer",
              "optional": false,
              "typeAnnotation": null,
              "start": 3400,
              "end": 3411
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3400,
            "end": 3411
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Variant",
              "optional": false,
              "typeAnnotation": null,
              "start": 3413,
              "end": 3420
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 3429,
              "end": 3435
            },
            "default": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "toObject",
                "raw": "'toObject'",
                "start": 3438,
                "end": 3448
              },
              "start": 3438,
              "end": 3448
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 3413,
            "end": 3448
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "MaxDepth",
              "optional": false,
              "typeAnnotation": null,
              "start": 3450,
              "end": 3458
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 3467,
              "end": 3473
            },
            "default": {
              "type": "TSLiteralType",
              "literal": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 3477,
                  "end": 3478
                },
                "prefix": true,
                "start": 3476,
                "end": 3478
              },
              "start": 3476,
              "end": 3478
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 3450,
            "end": 3478
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Depth",
              "optional": false,
              "typeAnnotation": null,
              "start": 3480,
              "end": 3485
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 3494,
              "end": 3500
            },
            "default": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 3503,
                "end": 3504
              },
              "start": 3503,
              "end": 3504
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 3480,
            "end": 3504
          }
        ],
        "start": 3399,
        "end": 3505
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Transformer",
            "optional": false,
            "typeAnnotation": null,
            "start": 3508,
            "end": 3519
          },
          "typeArguments": null,
          "start": 3508,
          "end": 3519
        },
        "extendsType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null,
            "start": 3535,
            "end": 3536
          },
          "constraint": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Variant",
              "optional": false,
              "typeAnnotation": null,
              "start": 3540,
              "end": 3547
            },
            "typeArguments": null,
            "start": 3540,
            "end": 3547
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSFunctionType",
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3554,
                  "end": 3558
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 3560,
                      "end": 3563
                    },
                    "start": 3560,
                    "end": 3565
                  },
                  "start": 3558,
                  "end": 3565
                },
                "value": null,
                "start": 3551,
                "end": 3565
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 3570,
                "end": 3577
              },
              "start": 3567,
              "end": 3577
            },
            "start": 3550,
            "end": 3577
          },
          "optional": false,
          "readonly": null,
          "start": 3528,
          "end": 3580
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "UnpackValues",
            "optional": false,
            "typeAnnotation": null,
            "start": 3583,
            "end": 3595
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Awaited",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3596,
                  "end": 3603
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ReturnType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3604,
                        "end": 3614
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
                                "name": "Transformer",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3615,
                                "end": 3626
                              },
                              "typeArguments": null,
                              "start": 3615,
                              "end": 3626
                            },
                            "indexType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Variant",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3627,
                                "end": 3634
                              },
                              "typeArguments": null,
                              "start": 3627,
                              "end": 3634
                            },
                            "start": 3615,
                            "end": 3635
                          }
                        ],
                        "start": 3614,
                        "end": 3636
                      },
                      "start": 3604,
                      "end": 3636
                    }
                  ],
                  "start": 3603,
                  "end": 3637
                },
                "start": 3596,
                "end": 3637
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MaxDepth",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3639,
                  "end": 3647
                },
                "typeArguments": null,
                "start": 3639,
                "end": 3647
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Depth",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3649,
                  "end": 3654
                },
                "typeArguments": null,
                "start": 3649,
                "end": 3654
              }
            ],
            "start": 3595,
            "end": 3655
          },
          "start": 3583,
          "end": 3655
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 3658,
          "end": 3663
        },
        "start": 3508,
        "end": 3663
      },
      "declare": false,
      "start": 3385,
      "end": 3664
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Item",
        "optional": false,
        "typeAnnotation": null,
        "start": 3679,
        "end": 3683
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Transformer",
              "optional": false,
              "typeAnnotation": null,
              "start": 3684,
              "end": 3695
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 3704,
                "end": 3710
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 3711,
                    "end": 3717
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 3719,
                    "end": 3722
                  }
                ],
                "start": 3710,
                "end": 3723
              },
              "start": 3704,
              "end": 3723
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3684,
            "end": 3723
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "MaxDepth",
              "optional": false,
              "typeAnnotation": null,
              "start": 3725,
              "end": 3733
            },
            "constraint": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Next",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3742,
                  "end": 3746
                },
                "typeArguments": null,
                "start": 3742,
                "end": 3746
              },
              "indexType": {
                "type": "TSNumberKeyword",
                "start": 3747,
                "end": 3753
              },
              "start": 3742,
              "end": 3754
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3725,
            "end": 3754
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Variant",
              "optional": false,
              "typeAnnotation": null,
              "start": 3756,
              "end": 3763
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 3772,
              "end": 3778
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3756,
            "end": 3778
          }
        ],
        "start": 3683,
        "end": 3779
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "transformer",
              "optional": false,
              "typeAnnotation": null,
              "start": 3783,
              "end": 3794
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3806,
                          "end": 3810
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 3812,
                              "end": 3815
                            },
                            "start": 3812,
                            "end": 3817
                          },
                          "start": 3810,
                          "end": 3817
                        },
                        "value": null,
                        "start": 3803,
                        "end": 3817
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Transformer",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3820,
                          "end": 3831
                        },
                        "typeArguments": null,
                        "start": 3820,
                        "end": 3831
                      },
                      "start": 3818,
                      "end": 3831
                    },
                    "start": 3798,
                    "end": 3831
                  }
                ],
                "start": 3796,
                "end": 3833
              },
              "start": 3794,
              "end": 3833
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3783,
            "end": 3834
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "maxDepth",
              "optional": false,
              "typeAnnotation": null,
              "start": 3836,
              "end": 3844
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MaxDepth",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3846,
                  "end": 3854
                },
                "typeArguments": null,
                "start": 3846,
                "end": 3854
              },
              "start": 3844,
              "end": 3854
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3836,
            "end": 3855
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "variant",
              "optional": false,
              "typeAnnotation": null,
              "start": 3857,
              "end": 3864
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Variant",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3866,
                  "end": 3873
                },
                "typeArguments": null,
                "start": 3866,
                "end": 3873
              },
              "start": 3864,
              "end": 3873
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3857,
            "end": 3874
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "$type",
              "optional": false,
              "typeAnnotation": null,
              "start": 3876,
              "end": 3881
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "item",
                  "raw": "'item'",
                  "start": 3883,
                  "end": 3889
                },
                "start": 3883,
                "end": 3889
              },
              "start": 3881,
              "end": 3889
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 3876,
            "end": 3890
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "resolve",
              "optional": false,
              "typeAnnotation": null,
              "start": 3892,
              "end": 3899
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
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
                    "start": 3903,
                    "end": 3910
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "UnpackAsTopLevelItem",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3911,
                          "end": 3931
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSThisType",
                              "start": 3932,
                              "end": 3936
                            },
                            {
                              "type": "TSUndefinedKeyword",
                              "start": 3938,
                              "end": 3947
                            }
                          ],
                          "start": 3931,
                          "end": 3948
                        },
                        "start": 3911,
                        "end": 3948
                      }
                    ],
                    "start": 3910,
                    "end": 3949
                  },
                  "start": 3903,
                  "end": 3949
                },
                "start": 3901,
                "end": 3949
              },
              "body": null,
              "expression": false,
              "start": 3899,
              "end": 3950
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3892,
            "end": 3950
          }
        ],
        "start": 3780,
        "end": 3952
      },
      "abstract": false,
      "declare": true,
      "start": 3665,
      "end": 3952
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Ctor",
        "optional": false,
        "typeAnnotation": null,
        "start": 3958,
        "end": 3962
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "resource",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 3982,
                    "end": 3985
                  },
                  "start": 3980,
                  "end": 3985
                },
                "start": 3972,
                "end": 3985
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3990,
                  "end": 3994
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 3996,
                      "end": 3999
                    },
                    "start": 3996,
                    "end": 4001
                  },
                  "start": 3994,
                  "end": 4001
                },
                "value": null,
                "start": 3987,
                "end": 4001
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4004,
                "end": 4007
              },
              "start": 4002,
              "end": 4007
            },
            "start": 3967,
            "end": 4007
          }
        ],
        "start": 3965,
        "end": 4009
      },
      "declare": false,
      "start": 3953,
      "end": 4010
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseTransformer",
        "optional": false,
        "typeAnnotation": null,
        "start": 4034,
        "end": 4049
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
              "start": 4050,
              "end": 4051
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4050,
            "end": 4051
          }
        ],
        "start": 4049,
        "end": 4052
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "transform",
              "optional": false,
              "typeAnnotation": null,
              "start": 4063,
              "end": 4072
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
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
                      "name": "Self",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4073,
                      "end": 4077
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Ctor",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4086,
                        "end": 4090
                      },
                      "typeArguments": null,
                      "start": 4086,
                      "end": 4090
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 4073,
                    "end": 4090
                  }
                ],
                "start": 4072,
                "end": 4091
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Self",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4098,
                        "end": 4102
                      },
                      "typeArguments": null,
                      "start": 4098,
                      "end": 4102
                    },
                    "start": 4096,
                    "end": 4102
                  },
                  "start": 4092,
                  "end": 4102
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
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
                          "name": "ConstructorParameters",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4110,
                          "end": 4131
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Self",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4132,
                                "end": 4136
                              },
                              "typeArguments": null,
                              "start": 4132,
                              "end": 4136
                            }
                          ],
                          "start": 4131,
                          "end": 4137
                        },
                        "start": 4110,
                        "end": 4137
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 4138,
                          "end": 4139
                        },
                        "start": 4138,
                        "end": 4139
                      },
                      "start": 4110,
                      "end": 4140
                    },
                    "start": 4108,
                    "end": 4140
                  },
                  "start": 4104,
                  "end": 4140
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Item",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4143,
                    "end": 4147
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "InstanceType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4148,
                          "end": 4160
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Self",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4161,
                                "end": 4165
                              },
                              "typeArguments": null,
                              "start": 4161,
                              "end": 4165
                            }
                          ],
                          "start": 4160,
                          "end": 4166
                        },
                        "start": 4148,
                        "end": 4166
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 4168,
                          "end": 4169
                        },
                        "start": 4168,
                        "end": 4169
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "toObject",
                          "raw": "'toObject'",
                          "start": 4171,
                          "end": 4181
                        },
                        "start": 4171,
                        "end": 4181
                      }
                    ],
                    "start": 4147,
                    "end": 4182
                  },
                  "start": 4143,
                  "end": 4182
                },
                "start": 4141,
                "end": 4182
              },
              "body": null,
              "expression": false,
              "start": 4072,
              "end": 4183
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4056,
            "end": 4183
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 4185,
              "end": 4196
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "resource",
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
                        "start": 4207,
                        "end": 4208
                      },
                      "typeArguments": null,
                      "start": 4207,
                      "end": 4208
                    },
                    "start": 4205,
                    "end": 4208
                  },
                  "start": 4197,
                  "end": 4208
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 4196,
              "end": 4210
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4185,
            "end": 4210
          }
        ],
        "start": 4053,
        "end": 4212
      },
      "abstract": true,
      "declare": true,
      "start": 4011,
      "end": 4212
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Size",
        "optional": false,
        "typeAnnotation": null,
        "start": 4219,
        "end": 4223
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 4224,
        "end": 4227
      },
      "abstract": false,
      "declare": false,
      "start": 4213,
      "end": 4227
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SizeTransformer",
        "optional": false,
        "typeAnnotation": null,
        "start": 4234,
        "end": 4249
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseTransformer",
        "optional": false,
        "typeAnnotation": null,
        "start": 4258,
        "end": 4273
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Size",
              "optional": false,
              "typeAnnotation": null,
              "start": 4274,
              "end": 4278
            },
            "typeArguments": null,
            "start": 4274,
            "end": 4278
          }
        ],
        "start": 4273,
        "end": 4279
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toObject",
              "optional": false,
              "typeAnnotation": null,
              "start": 4283,
              "end": 4291
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 4294,
                "end": 4298
              },
              "expression": false,
              "start": 4291,
              "end": 4298
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4283,
            "end": 4298
          }
        ],
        "start": 4280,
        "end": 4300
      },
      "abstract": false,
      "declare": false,
      "start": 4228,
      "end": 4300
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "once",
        "optional": false,
        "typeAnnotation": null,
        "start": 4318,
        "end": 4322
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
              "start": 4323,
              "end": 4324
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4323,
            "end": 4324
          }
        ],
        "start": 4322,
        "end": 4325
      },
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 4333,
                "end": 4334
              },
              "typeArguments": null,
              "start": 4333,
              "end": 4334
            },
            "start": 4331,
            "end": 4334
          },
          "start": 4326,
          "end": 4334
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
            "start": 4337,
            "end": 4338
          },
          "typeArguments": null,
          "start": 4337,
          "end": 4338
        },
        "start": 4335,
        "end": 4338
      },
      "body": null,
      "expression": false,
      "start": 4301,
      "end": 4339
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "once",
          "optional": false,
          "typeAnnotation": null,
          "start": 4340,
          "end": 4344
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SizeTransformer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4351,
                  "end": 4366
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "transform",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4367,
                  "end": 4376
                },
                "optional": false,
                "computed": false,
                "start": 4351,
                "end": 4376
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Size",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4381,
                    "end": 4385
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 4377,
                  "end": 4387
                }
              ],
              "optional": false,
              "start": 4351,
              "end": 4388
            },
            "id": null,
            "generator": false,
            "start": 4345,
            "end": 4388
          }
        ],
        "optional": false,
        "start": 4340,
        "end": 4389
      },
      "directive": null,
      "start": 4340,
      "end": 4390
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 4390
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 139,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "Prettify",
    "start": 144,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 161,
    "end": 162
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 163,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 166,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 172,
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
    "value": ":",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 176,
    "end": 177
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
    "type": "Punctuator",
    "value": "]",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 189,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "ExtractUndefined",
    "start": 194,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 219,
    "end": 220
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 221,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 224,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 234,
    "end": 243
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 244,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 263,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 271,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 281,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "ExtractDefined",
    "start": 286,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 309,
    "end": 310
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 311,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 314,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 324,
    "end": 333
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 334,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 342,
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
    "value": "K",
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
    "value": "?",
    "start": 347,
    "end": 348
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
    "value": "K",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 361,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 371,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "Next",
    "start": 376,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 383,
    "end": 384
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 385,
    "end": 386
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 388,
    "end": 389
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 391,
    "end": 392
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 394,
    "end": 395
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 397,
    "end": 398
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "start": 403,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "JSONPrimitives",
    "start": 408,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 425,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 434,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 443,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 452,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 460,
    "end": 461
  },
  {
    "type": "Null",
    "value": "null",
    "start": 462,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 469,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 480,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "JSONValues",
    "start": 485,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "JSONPrimitives",
    "start": 498,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "CanBeSerialized",
    "start": 515,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 531,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 537,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "CanBeSerialized",
    "start": 542,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 557,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 558,
    "end": 559
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 560,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "JSONDataTypes",
    "start": 568,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 585,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "toJSON",
    "start": 591,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 599,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 605,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 607,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "JSONDataTypes",
    "start": 612,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 626,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "JSONValues",
    "start": 628,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 639,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "JSONDataTypes",
    "start": 641,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 665,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 666,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 671,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "JSONDataTypes",
    "start": 680,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 696,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 698,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "SerializeJSONObject",
    "start": 703,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 722,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 734,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 735,
    "end": 736
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 737,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "ExtractDefined",
    "start": 740,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 754,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 758,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "SerializeJSONTypes",
    "start": 760,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 778,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 780,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 797,
    "end": 798
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 799,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "ExtractUndefined",
    "start": 802,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 818,
    "end": 819
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 823,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "SerializeJSONTypes",
    "start": 825,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 843,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 845,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 852,
    "end": 853
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 854,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "ExtendedJSONTypes",
    "start": 864,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 882,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 884,
    "end": 885
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 886,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "NonAllowedJSTypes",
    "start": 891,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 909,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "Map",
    "start": 911,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 914,
    "end": 915
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 915,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 918,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 920,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "Set",
    "start": 927,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 930,
    "end": 931
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 931,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 935,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 937,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "ForcefullyAllowedTypes",
    "start": 942,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 965,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 967,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 973,
    "end": 974
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 974,
    "end": 975
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 976,
    "end": 978
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 979,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "ExtendedJSONTypes",
    "start": 985,
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
    "value": ":",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Identifier",
    "value": "ExtendedJSONTypes",
    "start": 1005,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1029,
    "end": 1034
  },
  {
    "type": "Identifier",
    "value": "ExtendedJSONTypes",
    "start": 1035,
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
    "value": ";",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1055,
    "end": 1059
  },
  {
    "type": "Identifier",
    "value": "SerializeJSONOwnTypes",
    "start": 1060,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1089,
    "end": 1096
  },
  {
    "type": "Identifier",
    "value": "JSONPrimitives",
    "start": 1097,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1120,
    "end": 1127
  },
  {
    "type": "Identifier",
    "value": "ForcefullyAllowedTypes",
    "start": 1128,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1159,
    "end": 1166
  },
  {
    "type": "Identifier",
    "value": "NonAllowedJSTypes",
    "start": 1167,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1187,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1197,
    "end": 1204
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1205,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": "<",
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
    "value": "item",
    "start": 1217,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1225,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Identifier",
    "value": "SerializeJSONTypes",
    "start": 1231,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 1250,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1261,
    "end": 1268
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 1269,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Identifier",
    "value": "Prettify",
    "start": 1278,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Identifier",
    "value": "SerializeJSONObject",
    "start": 1287,
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
    "value": "T",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1313,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1320,
    "end": 1324
  },
  {
    "type": "Identifier",
    "value": "SerializeJSONTypes",
    "start": 1325,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1351,
    "end": 1358
  },
  {
    "type": "Identifier",
    "value": "ForcefullyAllowedTypes",
    "start": 1359,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1390,
    "end": 1397
  },
  {
    "type": "Identifier",
    "value": "CanBeSerialized",
    "start": 1398,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1414,
    "end": 1419
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Identifier",
    "value": "SerializeJSONOwnTypes",
    "start": 1425,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Identifier",
    "value": "SerializeJSONOwnTypes",
    "start": 1452,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1478,
    "end": 1487
  },
  {
    "type": "Identifier",
    "value": "ItemContract",
    "start": 1488,
    "end": 1500
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Identifier",
    "value": "Transformer",
    "start": 1501,
    "end": 1512
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1513,
    "end": 1520
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 1521,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1528,
    "end": 1534
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1536,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Identifier",
    "value": "MaxDepth",
    "start": 1542,
    "end": 1550
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1551,
    "end": 1558
  },
  {
    "type": "Identifier",
    "value": "Next",
    "start": 1559,
    "end": 1563
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1563,
    "end": 1564
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1564,
    "end": 1570
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Identifier",
    "value": "Variant",
    "start": 1573,
    "end": 1580
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1581,
    "end": 1588
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1589,
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
    "value": "{",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Identifier",
    "value": "$type",
    "start": 1603,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "String",
    "value": "'item'",
    "start": 1610,
    "end": 1616
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "Identifier",
    "value": "transformer",
    "start": 1622,
    "end": 1633
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1645,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1650,
    "end": 1653
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1653,
    "end": 1657
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1659,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Identifier",
    "value": "Transformer",
    "start": 1667,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1684,
    "end": 1685
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1685,
    "end": 1686
  },
  {
    "type": "Identifier",
    "value": "maxDepth",
    "start": 1691,
    "end": 1699
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Identifier",
    "value": "MaxDepth",
    "start": 1701,
    "end": 1709
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1709,
    "end": 1710
  },
  {
    "type": "Identifier",
    "value": "variant",
    "start": 1715,
    "end": 1722
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1722,
    "end": 1723
  },
  {
    "type": "Identifier",
    "value": "Variant",
    "start": 1724,
    "end": 1731
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1731,
    "end": 1732
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1733,
    "end": 1734
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1735,
    "end": 1739
  },
  {
    "type": "Identifier",
    "value": "UnpackKeyValue",
    "start": 1740,
    "end": 1754
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 1755,
    "end": 1760
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1761,
    "end": 1768
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1769,
    "end": 1770
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1770,
    "end": 1773
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1773,
    "end": 1774
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1775,
    "end": 1778
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "MaxDepth",
    "start": 1781,
    "end": 1789
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1790,
    "end": 1797
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1798,
    "end": 1804
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "Identifier",
    "value": "Depth",
    "start": 1806,
    "end": 1811
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1812,
    "end": 1819
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1820,
    "end": 1826
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1830,
    "end": 1831
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 1831,
    "end": 1836
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1838,
    "end": 1839
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1839,
    "end": 1840
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1841,
    "end": 1848
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1849,
    "end": 1850
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1850,
    "end": 1855
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1855,
    "end": 1856
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1857,
    "end": 1858
  },
  {
    "type": "Identifier",
    "value": "SerializeJSONTypes",
    "start": 1859,
    "end": 1877
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1877,
    "end": 1878
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 1878,
    "end": 1883
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1883,
    "end": 1884
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1884,
    "end": 1885
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1888,
    "end": 1889
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 1890,
    "end": 1895
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1895,
    "end": 1896
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1896,
    "end": 1897
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1899,
    "end": 1906
  },
  {
    "type": "Identifier",
    "value": "ItemContract",
    "start": 1907,
    "end": 1919
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1919,
    "end": 1920
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1920,
    "end": 1925
  },
  {
    "type": "Identifier",
    "value": "Transformer",
    "start": 1926,
    "end": 1937
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1939,
    "end": 1944
  },
  {
    "type": "Identifier",
    "value": "LocalMaxDepth",
    "start": 1945,
    "end": 1958
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1958,
    "end": 1959
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1960,
    "end": 1965
  },
  {
    "type": "Identifier",
    "value": "Variant",
    "start": 1966,
    "end": 1973
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1973,
    "end": 1974
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1975,
    "end": 1976
  },
  {
    "type": "Identifier",
    "value": "InferData",
    "start": 1977,
    "end": 1986
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1986,
    "end": 1987
  },
  {
    "type": "Identifier",
    "value": "Transformer",
    "start": 1987,
    "end": 1998
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "Identifier",
    "value": "Variant",
    "start": 2000,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Identifier",
    "value": "MaxDepth",
    "start": 2009,
    "end": 2017
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2018,
    "end": 2025
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 2026,
    "end": 2027
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2027,
    "end": 2028
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2029,
    "end": 2030
  },
  {
    "type": "Identifier",
    "value": "LocalMaxDepth",
    "start": 2031,
    "end": 2044
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2045,
    "end": 2046
  },
  {
    "type": "Identifier",
    "value": "MaxDepth",
    "start": 2047,
    "end": 2055
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2055,
    "end": 2056
  },
  {
    "type": "Identifier",
    "value": "Next",
    "start": 2057,
    "end": 2061
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2061,
    "end": 2062
  },
  {
    "type": "Identifier",
    "value": "Depth",
    "start": 2062,
    "end": 2067
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2068,
    "end": 2069
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2070,
    "end": 2071
  },
  {
    "type": "Identifier",
    "value": "SerializeJSONTypes",
    "start": 2072,
    "end": 2090
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2090,
    "end": 2091
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 2091,
    "end": 2096
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2096,
    "end": 2097
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2097,
    "end": 2098
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2098,
    "end": 2099
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2099,
    "end": 2100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2101,
    "end": 2102
  },
  {
    "type": "Identifier",
    "value": "SerializeJSONTypes",
    "start": 2103,
    "end": 2121
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2121,
    "end": 2122
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 2122,
    "end": 2127
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2127,
    "end": 2128
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2128,
    "end": 2129
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2129,
    "end": 2130
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2130,
    "end": 2131
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2131,
    "end": 2132
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2133,
    "end": 2137
  },
  {
    "type": "Identifier",
    "value": "LimitDepth",
    "start": 2138,
    "end": 2148
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2148,
    "end": 2149
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 2149,
    "end": 2152
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2152,
    "end": 2153
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 2154,
    "end": 2159
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2159,
    "end": 2160
  },
  {
    "type": "Identifier",
    "value": "MaxDepth",
    "start": 2161,
    "end": 2169
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2170,
    "end": 2177
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2178,
    "end": 2184
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2184,
    "end": 2185
  },
  {
    "type": "Identifier",
    "value": "Depth",
    "start": 2186,
    "end": 2191
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2192,
    "end": 2199
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2200,
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
    "value": "=",
    "start": 2208,
    "end": 2209
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2210,
    "end": 2211
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 2216,
    "end": 2221
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2222,
    "end": 2223
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2224,
    "end": 2231
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2232,
    "end": 2233
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2233,
    "end": 2238
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2238,
    "end": 2239
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2240,
    "end": 2241
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 2242,
    "end": 2245
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2246,
    "end": 2247
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 2248,
    "end": 2253
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2254,
    "end": 2261
  },
  {
    "type": "Identifier",
    "value": "ItemContract",
    "start": 2262,
    "end": 2274
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2274,
    "end": 2275
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2275,
    "end": 2278
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2278,
    "end": 2279
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2280,
    "end": 2283
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2283,
    "end": 2284
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2285,
    "end": 2288
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2288,
    "end": 2289
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2290,
    "end": 2291
  },
  {
    "type": "Identifier",
    "value": "MaxDepth",
    "start": 2292,
    "end": 2300
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2301,
    "end": 2308
  },
  {
    "type": "Identifier",
    "value": "Depth",
    "start": 2309,
    "end": 2314
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2315,
    "end": 2316
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2317,
    "end": 2322
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2323,
    "end": 2324
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 2325,
    "end": 2328
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2329,
    "end": 2330
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 2331,
    "end": 2334
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2334,
    "end": 2335
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2336,
    "end": 2340
  },
  {
    "type": "Identifier",
    "value": "UnpackOptionalValues",
    "start": 2341,
    "end": 2361
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2361,
    "end": 2362
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 2362,
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
    "value": "MaxDepth",
    "start": 2368,
    "end": 2376
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2377,
    "end": 2384
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2385,
    "end": 2391
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2391,
    "end": 2392
  },
  {
    "type": "Identifier",
    "value": "Depth",
    "start": 2393,
    "end": 2398
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2399,
    "end": 2406
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2407,
    "end": 2413
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2413,
    "end": 2414
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2415,
    "end": 2416
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2417,
    "end": 2418
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2423,
    "end": 2424
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 2424,
    "end": 2425
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2426,
    "end": 2428
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2429,
    "end": 2430
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2439,
    "end": 2440
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2440,
    "end": 2441
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2442,
    "end": 2444
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2445,
    "end": 2450
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 2451,
    "end": 2455
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2455,
    "end": 2456
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2456,
    "end": 2457
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2458,
    "end": 2459
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2459,
    "end": 2468
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2468,
    "end": 2469
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2470,
    "end": 2477
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2478,
    "end": 2479
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 2479,
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
    "value": "K",
    "start": 2484,
    "end": 2485
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2485,
    "end": 2486
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2486,
    "end": 2487
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2488,
    "end": 2489
  },
  {
    "type": "Identifier",
    "value": "LimitDepth",
    "start": 2490,
    "end": 2500
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2500,
    "end": 2501
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2501,
    "end": 2502
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2502,
    "end": 2503
  },
  {
    "type": "Identifier",
    "value": "SplitItm",
    "start": 2504,
    "end": 2512
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2512,
    "end": 2513
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 2513,
    "end": 2517
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2517,
    "end": 2518
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2518,
    "end": 2519
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2519,
    "end": 2520
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2520,
    "end": 2521
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2521,
    "end": 2522
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2522,
    "end": 2523
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2523,
    "end": 2524
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2524,
    "end": 2525
  },
  {
    "type": "Identifier",
    "value": "MaxDepth",
    "start": 2526,
    "end": 2534
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2534,
    "end": 2535
  },
  {
    "type": "Identifier",
    "value": "Depth",
    "start": 2536,
    "end": 2541
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2541,
    "end": 2542
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2543,
    "end": 2544
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2545,
    "end": 2550
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2550,
    "end": 2551
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2556,
    "end": 2557
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2557,
    "end": 2558
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2558,
    "end": 2563
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 2564,
    "end": 2568
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2568,
    "end": 2569
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2569,
    "end": 2570
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2570,
    "end": 2571
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2571,
    "end": 2572
  },
  {
    "type": "Identifier",
    "value": "UnpackKeyValue",
    "start": 2573,
    "end": 2587
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2587,
    "end": 2588
  },
  {
    "type": "Identifier",
    "value": "SplitItm",
    "start": 2588,
    "end": 2596
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2596,
    "end": 2597
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 2597,
    "end": 2601
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2601,
    "end": 2602
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 2602,
    "end": 2603
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": ",",
    "start": 2605,
    "end": 2606
  },
  {
    "type": "Identifier",
    "value": "MaxDepth",
    "start": 2607,
    "end": 2615
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2615,
    "end": 2616
  },
  {
    "type": "Identifier",
    "value": "Depth",
    "start": 2617,
    "end": 2622
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2622,
    "end": 2623
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2623,
    "end": 2624
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2625,
    "end": 2626
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2626,
    "end": 2627
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2628,
    "end": 2632
  },
  {
    "type": "Identifier",
    "value": "UnpackRequiredValues",
    "start": 2633,
    "end": 2653
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2653,
    "end": 2654
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 2654,
    "end": 2658
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2658,
    "end": 2659
  },
  {
    "type": "Identifier",
    "value": "MaxDepth",
    "start": 2660,
    "end": 2668
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2669,
    "end": 2676
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2677,
    "end": 2683
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2683,
    "end": 2684
  },
  {
    "type": "Identifier",
    "value": "Depth",
    "start": 2685,
    "end": 2690
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2691,
    "end": 2698
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2699,
    "end": 2705
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2705,
    "end": 2706
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2707,
    "end": 2708
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2709,
    "end": 2710
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2715,
    "end": 2716
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 2716,
    "end": 2717
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2718,
    "end": 2720
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2721,
    "end": 2722
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2731,
    "end": 2732
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2732,
    "end": 2733
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2734,
    "end": 2736
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2737,
    "end": 2742
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 2743,
    "end": 2747
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2747,
    "end": 2748
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2748,
    "end": 2749
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2750,
    "end": 2751
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2751,
    "end": 2760
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2760,
    "end": 2761
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2762,
    "end": 2769
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2770,
    "end": 2771
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 2771,
    "end": 2775
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2775,
    "end": 2776
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2776,
    "end": 2777
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2777,
    "end": 2778
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2778,
    "end": 2779
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2780,
    "end": 2781
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2782,
    "end": 2787
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2788,
    "end": 2789
  },
  {
    "type": "Identifier",
    "value": "LimitDepth",
    "start": 2790,
    "end": 2800
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2800,
    "end": 2801
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2801,
    "end": 2802
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2802,
    "end": 2803
  },
  {
    "type": "Identifier",
    "value": "SplitItm",
    "start": 2804,
    "end": 2812
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2812,
    "end": 2813
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 2813,
    "end": 2817
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2817,
    "end": 2818
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2818,
    "end": 2819
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2819,
    "end": 2820
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2820,
    "end": 2821
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2821,
    "end": 2822
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2822,
    "end": 2823
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2823,
    "end": 2824
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2824,
    "end": 2825
  },
  {
    "type": "Identifier",
    "value": "MaxDepth",
    "start": 2826,
    "end": 2834
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2834,
    "end": 2835
  },
  {
    "type": "Identifier",
    "value": "Depth",
    "start": 2836,
    "end": 2841
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2841,
    "end": 2842
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2842,
    "end": 2843
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2848,
    "end": 2849
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2849,
    "end": 2850
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2850,
    "end": 2855
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 2856,
    "end": 2860
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2860,
    "end": 2861
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2861,
    "end": 2862
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2862,
    "end": 2863
  },
  {
    "type": "Identifier",
    "value": "UnpackKeyValue",
    "start": 2864,
    "end": 2878
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2878,
    "end": 2879
  },
  {
    "type": "Identifier",
    "value": "SplitItm",
    "start": 2879,
    "end": 2887
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2887,
    "end": 2888
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 2888,
    "end": 2892
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2892,
    "end": 2893
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 2893,
    "end": 2894
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2894,
    "end": 2895
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2895,
    "end": 2896
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2896,
    "end": 2897
  },
  {
    "type": "Identifier",
    "value": "MaxDepth",
    "start": 2898,
    "end": 2906
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2906,
    "end": 2907
  },
  {
    "type": "Identifier",
    "value": "Depth",
    "start": 2908,
    "end": 2913
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2913,
    "end": 2914
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2914,
    "end": 2915
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2916,
    "end": 2917
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2917,
    "end": 2918
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2919,
    "end": 2923
  },
  {
    "type": "Identifier",
    "value": "SplitItm",
    "start": 2924,
    "end": 2932
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2932,
    "end": 2933
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2933,
    "end": 2934
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2934,
    "end": 2935
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2936,
    "end": 2937
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2938,
    "end": 2939
  },
  {
    "type": "Identifier",
    "value": "Extract",
    "start": 2944,
    "end": 2951
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2951,
    "end": 2952
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2952,
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
    "value": "ItemContract",
    "start": 2955,
    "end": 2967
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2967,
    "end": 2968
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2968,
    "end": 2971
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2971,
    "end": 2972
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2973,
    "end": 2976
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2976,
    "end": 2977
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2978,
    "end": 2981
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2981,
    "end": 2982
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2982,
    "end": 2983
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2983,
    "end": 2984
  },
  {
    "type": "Identifier",
    "value": "Exclude",
    "start": 2989,
    "end": 2996
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2996,
    "end": 2997
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2997,
    "end": 2998
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2998,
    "end": 2999
  },
  {
    "type": "Identifier",
    "value": "ItemContract",
    "start": 3000,
    "end": 3012
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3012,
    "end": 3013
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3013,
    "end": 3016
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3016,
    "end": 3017
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3018,
    "end": 3021
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3021,
    "end": 3022
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3023,
    "end": 3026
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3026,
    "end": 3027
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3027,
    "end": 3028
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3029,
    "end": 3030
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3030,
    "end": 3031
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3032,
    "end": 3036
  },
  {
    "type": "Identifier",
    "value": "UnpackAsTopLevelItem",
    "start": 3037,
    "end": 3057
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3057,
    "end": 3058
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3058,
    "end": 3059
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3059,
    "end": 3060
  },
  {
    "type": "Identifier",
    "value": "Wrapper",
    "start": 3061,
    "end": 3068
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3069,
    "end": 3076
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3077,
    "end": 3083
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3084,
    "end": 3085
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3086,
    "end": 3095
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3095,
    "end": 3096
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3097,
    "end": 3098
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3099,
    "end": 3100
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3101,
    "end": 3108
  },
  {
    "type": "Identifier",
    "value": "ItemContract",
    "start": 3109,
    "end": 3121
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3121,
    "end": 3122
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3122,
    "end": 3127
  },
  {
    "type": "Identifier",
    "value": "Transformer",
    "start": 3128,
    "end": 3139
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3139,
    "end": 3140
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3141,
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
    "value": "infer",
    "start": 3146,
    "end": 3151
  },
  {
    "type": "Identifier",
    "value": "Variant",
    "start": 3152,
    "end": 3159
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3159,
    "end": 3160
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3161,
    "end": 3162
  },
  {
    "type": "Identifier",
    "value": "InferData",
    "start": 3163,
    "end": 3172
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3172,
    "end": 3173
  },
  {
    "type": "Identifier",
    "value": "Transformer",
    "start": 3173,
    "end": 3184
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3184,
    "end": 3185
  },
  {
    "type": "Identifier",
    "value": "Variant",
    "start": 3186,
    "end": 3193
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3193,
    "end": 3194
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 3195,
    "end": 3196
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3196,
    "end": 3197
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3197,
    "end": 3198
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3199,
    "end": 3200
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3200,
    "end": 3201
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3202,
    "end": 3203
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3204,
    "end": 3209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3209,
    "end": 3210
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3211,
    "end": 3215
  },
  {
    "type": "Identifier",
    "value": "UnpackValues",
    "start": 3216,
    "end": 3228
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3228,
    "end": 3229
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 3229,
    "end": 3233
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3233,
    "end": 3234
  },
  {
    "type": "Identifier",
    "value": "MaxDepth",
    "start": 3235,
    "end": 3243
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3244,
    "end": 3251
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3252,
    "end": 3258
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3258,
    "end": 3259
  },
  {
    "type": "Identifier",
    "value": "Depth",
    "start": 3260,
    "end": 3265
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3266,
    "end": 3273
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3274,
    "end": 3280
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3280,
    "end": 3281
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3282,
    "end": 3283
  },
  {
    "type": "Identifier",
    "value": "Prettify",
    "start": 3284,
    "end": 3292
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3292,
    "end": 3293
  },
  {
    "type": "Identifier",
    "value": "UnpackRequiredValues",
    "start": 3293,
    "end": 3313
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3313,
    "end": 3314
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 3314,
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
    "value": "MaxDepth",
    "start": 3320,
    "end": 3328
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3328,
    "end": 3329
  },
  {
    "type": "Identifier",
    "value": "Depth",
    "start": 3330,
    "end": 3335
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3335,
    "end": 3336
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 3337,
    "end": 3338
  },
  {
    "type": "Identifier",
    "value": "UnpackOptionalValues",
    "start": 3339,
    "end": 3359
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3359,
    "end": 3360
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 3360,
    "end": 3364
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3364,
    "end": 3365
  },
  {
    "type": "Identifier",
    "value": "MaxDepth",
    "start": 3366,
    "end": 3374
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3374,
    "end": 3375
  },
  {
    "type": "Identifier",
    "value": "Depth",
    "start": 3376,
    "end": 3381
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3381,
    "end": 3382
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3382,
    "end": 3383
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3383,
    "end": 3384
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3385,
    "end": 3389
  },
  {
    "type": "Identifier",
    "value": "InferData",
    "start": 3390,
    "end": 3399
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3399,
    "end": 3400
  },
  {
    "type": "Identifier",
    "value": "Transformer",
    "start": 3400,
    "end": 3411
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3411,
    "end": 3412
  },
  {
    "type": "Identifier",
    "value": "Variant",
    "start": 3413,
    "end": 3420
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3421,
    "end": 3428
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3429,
    "end": 3435
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3436,
    "end": 3437
  },
  {
    "type": "String",
    "value": "'toObject'",
    "start": 3438,
    "end": 3448
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3448,
    "end": 3449
  },
  {
    "type": "Identifier",
    "value": "MaxDepth",
    "start": 3450,
    "end": 3458
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3459,
    "end": 3466
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3467,
    "end": 3473
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3474,
    "end": 3475
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 3476,
    "end": 3477
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3477,
    "end": 3478
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3478,
    "end": 3479
  },
  {
    "type": "Identifier",
    "value": "Depth",
    "start": 3480,
    "end": 3485
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3486,
    "end": 3493
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3494,
    "end": 3500
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3501,
    "end": 3502
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 3503,
    "end": 3504
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3504,
    "end": 3505
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3506,
    "end": 3507
  },
  {
    "type": "Identifier",
    "value": "Transformer",
    "start": 3508,
    "end": 3519
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3520,
    "end": 3527
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3528,
    "end": 3529
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3534,
    "end": 3535
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3535,
    "end": 3536
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3537,
    "end": 3539
  },
  {
    "type": "Identifier",
    "value": "Variant",
    "start": 3540,
    "end": 3547
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3547,
    "end": 3548
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3548,
    "end": 3549
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3550,
    "end": 3551
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3551,
    "end": 3554
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 3554,
    "end": 3558
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3558,
    "end": 3559
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3560,
    "end": 3563
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3563,
    "end": 3564
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3564,
    "end": 3565
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3565,
    "end": 3566
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3567,
    "end": 3569
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 3570,
    "end": 3577
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3577,
    "end": 3578
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3579,
    "end": 3580
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3581,
    "end": 3582
  },
  {
    "type": "Identifier",
    "value": "UnpackValues",
    "start": 3583,
    "end": 3595
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3595,
    "end": 3596
  },
  {
    "type": "Identifier",
    "value": "Awaited",
    "start": 3596,
    "end": 3603
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3603,
    "end": 3604
  },
  {
    "type": "Identifier",
    "value": "ReturnType",
    "start": 3604,
    "end": 3614
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3614,
    "end": 3615
  },
  {
    "type": "Identifier",
    "value": "Transformer",
    "start": 3615,
    "end": 3626
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3626,
    "end": 3627
  },
  {
    "type": "Identifier",
    "value": "Variant",
    "start": 3627,
    "end": 3634
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3634,
    "end": 3635
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3635,
    "end": 3636
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3636,
    "end": 3637
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3637,
    "end": 3638
  },
  {
    "type": "Identifier",
    "value": "MaxDepth",
    "start": 3639,
    "end": 3647
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3647,
    "end": 3648
  },
  {
    "type": "Identifier",
    "value": "Depth",
    "start": 3649,
    "end": 3654
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3654,
    "end": 3655
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3656,
    "end": 3657
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3658,
    "end": 3663
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3663,
    "end": 3664
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3665,
    "end": 3672
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3673,
    "end": 3678
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 3679,
    "end": 3683
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3683,
    "end": 3684
  },
  {
    "type": "Identifier",
    "value": "Transformer",
    "start": 3684,
    "end": 3695
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3696,
    "end": 3703
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 3704,
    "end": 3710
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3710,
    "end": 3711
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3711,
    "end": 3717
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3717,
    "end": 3718
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3719,
    "end": 3722
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3722,
    "end": 3723
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3723,
    "end": 3724
  },
  {
    "type": "Identifier",
    "value": "MaxDepth",
    "start": 3725,
    "end": 3733
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3734,
    "end": 3741
  },
  {
    "type": "Identifier",
    "value": "Next",
    "start": 3742,
    "end": 3746
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3746,
    "end": 3747
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3747,
    "end": 3753
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3753,
    "end": 3754
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3754,
    "end": 3755
  },
  {
    "type": "Identifier",
    "value": "Variant",
    "start": 3756,
    "end": 3763
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3764,
    "end": 3771
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3772,
    "end": 3778
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3778,
    "end": 3779
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3780,
    "end": 3781
  },
  {
    "type": "Identifier",
    "value": "transformer",
    "start": 3783,
    "end": 3794
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3794,
    "end": 3795
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3796,
    "end": 3797
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3798,
    "end": 3801
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3802,
    "end": 3803
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3803,
    "end": 3806
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 3806,
    "end": 3810
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3810,
    "end": 3811
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3812,
    "end": 3815
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3815,
    "end": 3816
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3816,
    "end": 3817
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3817,
    "end": 3818
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3818,
    "end": 3819
  },
  {
    "type": "Identifier",
    "value": "Transformer",
    "start": 3820,
    "end": 3831
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3832,
    "end": 3833
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3833,
    "end": 3834
  },
  {
    "type": "Identifier",
    "value": "maxDepth",
    "start": 3836,
    "end": 3844
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3844,
    "end": 3845
  },
  {
    "type": "Identifier",
    "value": "MaxDepth",
    "start": 3846,
    "end": 3854
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3854,
    "end": 3855
  },
  {
    "type": "Identifier",
    "value": "variant",
    "start": 3857,
    "end": 3864
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3864,
    "end": 3865
  },
  {
    "type": "Identifier",
    "value": "Variant",
    "start": 3866,
    "end": 3873
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3873,
    "end": 3874
  },
  {
    "type": "Identifier",
    "value": "$type",
    "start": 3876,
    "end": 3881
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3881,
    "end": 3882
  },
  {
    "type": "String",
    "value": "'item'",
    "start": 3883,
    "end": 3889
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3889,
    "end": 3890
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 3892,
    "end": 3899
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3899,
    "end": 3900
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3900,
    "end": 3901
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3901,
    "end": 3902
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3903,
    "end": 3910
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3910,
    "end": 3911
  },
  {
    "type": "Identifier",
    "value": "UnpackAsTopLevelItem",
    "start": 3911,
    "end": 3931
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3931,
    "end": 3932
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3932,
    "end": 3936
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3936,
    "end": 3937
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3938,
    "end": 3947
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3947,
    "end": 3948
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3948,
    "end": 3949
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3949,
    "end": 3950
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3951,
    "end": 3952
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3953,
    "end": 3957
  },
  {
    "type": "Identifier",
    "value": "Ctor",
    "start": 3958,
    "end": 3962
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3963,
    "end": 3964
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3965,
    "end": 3966
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3967,
    "end": 3970
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3971,
    "end": 3972
  },
  {
    "type": "Identifier",
    "value": "resource",
    "start": 3972,
    "end": 3980
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3980,
    "end": 3981
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3982,
    "end": 3985
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3985,
    "end": 3986
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3987,
    "end": 3990
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 3990,
    "end": 3994
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3994,
    "end": 3995
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3996,
    "end": 3999
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3999,
    "end": 4000
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4000,
    "end": 4001
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4001,
    "end": 4002
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4002,
    "end": 4003
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4004,
    "end": 4007
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4008,
    "end": 4009
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4009,
    "end": 4010
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4011,
    "end": 4018
  },
  {
    "type": "Identifier",
    "value": "abstract",
    "start": 4019,
    "end": 4027
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4028,
    "end": 4033
  },
  {
    "type": "Identifier",
    "value": "BaseTransformer",
    "start": 4034,
    "end": 4049
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4049,
    "end": 4050
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4050,
    "end": 4051
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4051,
    "end": 4052
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4053,
    "end": 4054
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 4056,
    "end": 4062
  },
  {
    "type": "Identifier",
    "value": "transform",
    "start": 4063,
    "end": 4072
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4072,
    "end": 4073
  },
  {
    "type": "Identifier",
    "value": "Self",
    "start": 4073,
    "end": 4077
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4078,
    "end": 4085
  },
  {
    "type": "Identifier",
    "value": "Ctor",
    "start": 4086,
    "end": 4090
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4090,
    "end": 4091
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4091,
    "end": 4092
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 4092,
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
    "value": "Self",
    "start": 4098,
    "end": 4102
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4102,
    "end": 4103
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 4104,
    "end": 4108
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4108,
    "end": 4109
  },
  {
    "type": "Identifier",
    "value": "ConstructorParameters",
    "start": 4110,
    "end": 4131
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4131,
    "end": 4132
  },
  {
    "type": "Identifier",
    "value": "Self",
    "start": 4132,
    "end": 4136
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4136,
    "end": 4137
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4137,
    "end": 4138
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4138,
    "end": 4139
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4139,
    "end": 4140
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4140,
    "end": 4141
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4141,
    "end": 4142
  },
  {
    "type": "Identifier",
    "value": "Item",
    "start": 4143,
    "end": 4147
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4147,
    "end": 4148
  },
  {
    "type": "Identifier",
    "value": "InstanceType",
    "start": 4148,
    "end": 4160
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4160,
    "end": 4161
  },
  {
    "type": "Identifier",
    "value": "Self",
    "start": 4161,
    "end": 4165
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4165,
    "end": 4166
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4166,
    "end": 4167
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4168,
    "end": 4169
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4169,
    "end": 4170
  },
  {
    "type": "String",
    "value": "'toObject'",
    "start": 4171,
    "end": 4181
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4181,
    "end": 4182
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4182,
    "end": 4183
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 4185,
    "end": 4196
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4196,
    "end": 4197
  },
  {
    "type": "Identifier",
    "value": "resource",
    "start": 4197,
    "end": 4205
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4205,
    "end": 4206
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4207,
    "end": 4208
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4208,
    "end": 4209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4209,
    "end": 4210
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4211,
    "end": 4212
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4213,
    "end": 4218
  },
  {
    "type": "Identifier",
    "value": "Size",
    "start": 4219,
    "end": 4223
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4224,
    "end": 4225
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4226,
    "end": 4227
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4228,
    "end": 4233
  },
  {
    "type": "Identifier",
    "value": "SizeTransformer",
    "start": 4234,
    "end": 4249
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4250,
    "end": 4257
  },
  {
    "type": "Identifier",
    "value": "BaseTransformer",
    "start": 4258,
    "end": 4273
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4273,
    "end": 4274
  },
  {
    "type": "Identifier",
    "value": "Size",
    "start": 4274,
    "end": 4278
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4278,
    "end": 4279
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4280,
    "end": 4281
  },
  {
    "type": "Identifier",
    "value": "toObject",
    "start": 4283,
    "end": 4291
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4291,
    "end": 4292
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4292,
    "end": 4293
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4294,
    "end": 4295
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4297,
    "end": 4298
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4299,
    "end": 4300
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4301,
    "end": 4308
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4309,
    "end": 4317
  },
  {
    "type": "Identifier",
    "value": "once",
    "start": 4318,
    "end": 4322
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4322,
    "end": 4323
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4323,
    "end": 4324
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4324,
    "end": 4325
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4325,
    "end": 4326
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 4326,
    "end": 4331
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4331,
    "end": 4332
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4333,
    "end": 4334
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4334,
    "end": 4335
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4335,
    "end": 4336
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4337,
    "end": 4338
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4338,
    "end": 4339
  },
  {
    "type": "Identifier",
    "value": "once",
    "start": 4340,
    "end": 4344
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4344,
    "end": 4345
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4345,
    "end": 4346
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4346,
    "end": 4347
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4348,
    "end": 4350
  },
  {
    "type": "Identifier",
    "value": "SizeTransformer",
    "start": 4351,
    "end": 4366
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4366,
    "end": 4367
  },
  {
    "type": "Identifier",
    "value": "transform",
    "start": 4367,
    "end": 4376
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4376,
    "end": 4377
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4377,
    "end": 4380
  },
  {
    "type": "Identifier",
    "value": "Size",
    "start": 4381,
    "end": 4385
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4385,
    "end": 4386
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4386,
    "end": 4387
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4387,
    "end": 4388
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4388,
    "end": 4389
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4389,
    "end": 4390
  }
]
```
