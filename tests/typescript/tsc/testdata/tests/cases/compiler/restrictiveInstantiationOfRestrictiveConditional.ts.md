__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ArraySlice",
            "optional": false,
            "typeAnnotation": null,
            "start": 13,
            "end": 23
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "ArraySlice",
            "optional": false,
            "typeAnnotation": null,
            "start": 13,
            "end": 23
          },
          "exportKind": "value",
          "start": 13,
          "end": 23
        }
      ],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 25
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
            "name": "tag",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 52,
                  "end": 58
                },
                "start": 45,
                "end": 58
              },
              "start": 43,
              "end": 58
            },
            "start": 40,
            "end": 58
          },
          "init": null,
          "definite": false,
          "start": 40,
          "end": 58
        }
      ],
      "declare": true,
      "start": 26,
      "end": 59
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IsNever",
        "optional": false,
        "typeAnnotation": null,
        "start": 65,
        "end": 72
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
              "start": 73,
              "end": 74
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 73,
            "end": 74
          }
        ],
        "start": 72,
        "end": 75
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
                "start": 79,
                "end": 80
              },
              "typeArguments": null,
              "start": 79,
              "end": 80
            }
          ],
          "start": 78,
          "end": 81
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNeverKeyword",
              "start": 91,
              "end": 96
            }
          ],
          "start": 90,
          "end": 97
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 100,
            "end": 104
          },
          "start": 100,
          "end": 104
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 107,
            "end": 112
          },
          "start": 107,
          "end": 112
        },
        "start": 78,
        "end": 112
      },
      "declare": false,
      "start": 60,
      "end": 113
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IsEqual",
        "optional": false,
        "typeAnnotation": null,
        "start": 119,
        "end": 126
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
              "start": 127,
              "end": 128
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 127,
            "end": 128
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 130,
              "end": 131
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 130,
            "end": 131
          }
        ],
        "start": 126,
        "end": 132
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
                "start": 137,
                "end": 138
              },
              "typeArguments": null,
              "start": 137,
              "end": 138
            }
          ],
          "start": 136,
          "end": 139
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
                "start": 149,
                "end": 150
              },
              "typeArguments": null,
              "start": 149,
              "end": 150
            }
          ],
          "start": 148,
          "end": 151
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
                  "start": 157,
                  "end": 158
                },
                "typeArguments": null,
                "start": 157,
                "end": 158
              }
            ],
            "start": 156,
            "end": 159
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
                  "start": 169,
                  "end": 170
                },
                "typeArguments": null,
                "start": 169,
                "end": 170
              }
            ],
            "start": 168,
            "end": 171
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "_IsEqual",
              "optional": false,
              "typeAnnotation": null,
              "start": 177,
              "end": 185
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
                    "start": 186,
                    "end": 187
                  },
                  "typeArguments": null,
                  "start": 186,
                  "end": 187
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 189,
                    "end": 190
                  },
                  "typeArguments": null,
                  "start": 189,
                  "end": 190
                }
              ],
              "start": 185,
              "end": 191
            },
            "start": 177,
            "end": 191
          },
          "falseType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 197,
              "end": 202
            },
            "start": 197,
            "end": 202
          },
          "start": 156,
          "end": 202
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 207,
            "end": 212
          },
          "start": 207,
          "end": 212
        },
        "start": 136,
        "end": 212
      },
      "declare": false,
      "start": 114,
      "end": 213
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_IsEqual",
        "optional": false,
        "typeAnnotation": null,
        "start": 219,
        "end": 227
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
              "start": 228,
              "end": 229
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 228,
            "end": 229
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 231,
              "end": 232
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 231,
            "end": 232
          }
        ],
        "start": 227,
        "end": 233
      },
      "typeAnnotation": {
        "type": "TSNeverKeyword",
        "start": 236,
        "end": 241
      },
      "declare": false,
      "start": 214,
      "end": 242
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Primitive",
        "optional": false,
        "typeAnnotation": null,
        "start": 248,
        "end": 257
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSNullKeyword",
            "start": 263,
            "end": 267
          },
          {
            "type": "TSUndefinedKeyword",
            "start": 271,
            "end": 280
          },
          {
            "type": "TSStringKeyword",
            "start": 284,
            "end": 290
          },
          {
            "type": "TSNumberKeyword",
            "start": 294,
            "end": 300
          },
          {
            "type": "TSBooleanKeyword",
            "start": 304,
            "end": 311
          },
          {
            "type": "TSSymbolKeyword",
            "start": 315,
            "end": 321
          },
          {
            "type": "TSBigIntKeyword",
            "start": 325,
            "end": 331
          }
        ],
        "start": 261,
        "end": 331
      },
      "declare": false,
      "start": 243,
      "end": 332
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnknownArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 338,
        "end": 350
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSAnyKeyword",
        "start": 353,
        "end": 356
      },
      "declare": false,
      "start": 333,
      "end": 357
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IfNotAnyOrNever",
        "optional": false,
        "typeAnnotation": null,
        "start": 363,
        "end": 378
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
              "start": 379,
              "end": 380
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 379,
            "end": 380
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Cases",
              "optional": false,
              "typeAnnotation": null,
              "start": 382,
              "end": 387
            },
            "constraint": {
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
                    "name": "ifNot",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 397,
                    "end": 402
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 404,
                      "end": 411
                    },
                    "start": 402,
                    "end": 411
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 397,
                  "end": 412
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ifAny",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 413,
                    "end": 418
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 421,
                      "end": 428
                    },
                    "start": 419,
                    "end": 428
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 413,
                  "end": 429
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ifNever",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 430,
                    "end": 437
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 440,
                      "end": 447
                    },
                    "start": 438,
                    "end": 447
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 430,
                  "end": 447
                }
              ],
              "start": 396,
              "end": 448
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 382,
            "end": 448
          }
        ],
        "start": 378,
        "end": 449
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IsNever",
            "optional": false,
            "typeAnnotation": null,
            "start": 453,
            "end": 460
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
                  "start": 461,
                  "end": 462
                },
                "typeArguments": null,
                "start": 461,
                "end": 462
              }
            ],
            "start": 460,
            "end": 463
          },
          "start": 453,
          "end": 463
        },
        "extendsType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 472,
            "end": 476
          },
          "start": 472,
          "end": 476
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "ifNever",
              "raw": "'ifNever'",
              "start": 482,
              "end": 491
            },
            "start": 482,
            "end": 491
          },
          "extendsType": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Cases",
                "optional": false,
                "typeAnnotation": null,
                "start": 506,
                "end": 511
              },
              "typeArguments": null,
              "start": 506,
              "end": 511
            },
            "start": 500,
            "end": 511
          },
          "trueType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Cases",
                "optional": false,
                "typeAnnotation": null,
                "start": 518,
                "end": 523
              },
              "typeArguments": null,
              "start": 518,
              "end": 523
            },
            "indexType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "ifNever",
                "raw": "'ifNever'",
                "start": 524,
                "end": 533
              },
              "start": 524,
              "end": 533
            },
            "start": 518,
            "end": 534
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 541,
            "end": 546
          },
          "start": 482,
          "end": 546
        },
        "falseType": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Cases",
              "optional": false,
              "typeAnnotation": null,
              "start": 552,
              "end": 557
            },
            "typeArguments": null,
            "start": 552,
            "end": 557
          },
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "ifNot",
              "raw": "'ifNot'",
              "start": 558,
              "end": 565
            },
            "start": 558,
            "end": 565
          },
          "start": 552,
          "end": 566
        },
        "start": 453,
        "end": 566
      },
      "declare": false,
      "start": 358,
      "end": 567
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "And",
        "optional": false,
        "typeAnnotation": null,
        "start": 573,
        "end": 576
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
              "start": 577,
              "end": 578
            },
            "constraint": {
              "type": "TSBooleanKeyword",
              "start": 587,
              "end": 594
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 577,
            "end": 594
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 596,
              "end": 597
            },
            "constraint": {
              "type": "TSBooleanKeyword",
              "start": 606,
              "end": 613
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 596,
            "end": 613
          }
        ],
        "start": 576,
        "end": 614
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 617,
          "end": 618
        },
        "typeArguments": null,
        "start": 617,
        "end": 618
      },
      "declare": false,
      "start": 568,
      "end": 619
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Not",
        "optional": false,
        "typeAnnotation": null,
        "start": 625,
        "end": 628
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
              "start": 629,
              "end": 630
            },
            "constraint": {
              "type": "TSBooleanKeyword",
              "start": 639,
              "end": 646
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 629,
            "end": 646
          }
        ],
        "start": 628,
        "end": 647
      },
      "typeAnnotation": {
        "type": "TSAnyKeyword",
        "start": 650,
        "end": 653
      },
      "declare": false,
      "start": 620,
      "end": 654
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MaxLength",
        "optional": false,
        "typeAnnotation": null,
        "start": 660,
        "end": 669
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Array_",
              "optional": false,
              "typeAnnotation": null,
              "start": 670,
              "end": 676
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnknownArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 685,
                "end": 697
              },
              "typeArguments": null,
              "start": 685,
              "end": 697
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 670,
            "end": 697
          }
        ],
        "start": 669,
        "end": 698
      },
      "typeAnnotation": {
        "type": "TSNeverKeyword",
        "start": 701,
        "end": 706
      },
      "declare": false,
      "start": 655,
      "end": 707
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "HasNoStaticElements",
        "optional": false,
        "typeAnnotation": null,
        "start": 713,
        "end": 732
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Array_",
              "optional": false,
              "typeAnnotation": null,
              "start": 733,
              "end": 739
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnknownArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 748,
                "end": 760
              },
              "typeArguments": null,
              "start": 748,
              "end": 760
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 733,
            "end": 760
          }
        ],
        "start": 732,
        "end": 761
      },
      "typeAnnotation": {
        "type": "TSUnknownKeyword",
        "start": 764,
        "end": 771
      },
      "declare": false,
      "start": 708,
      "end": 772
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CollapseLiterals",
        "optional": false,
        "typeAnnotation": null,
        "start": 778,
        "end": 794
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Union",
              "optional": false,
              "typeAnnotation": null,
              "start": 795,
              "end": 800
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 795,
            "end": 800
          }
        ],
        "start": 794,
        "end": 801
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Union",
            "optional": false,
            "typeAnnotation": null,
            "start": 804,
            "end": 809
          },
          "typeArguments": null,
          "start": 804,
          "end": 809
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Primitive",
            "optional": false,
            "typeAnnotation": null,
            "start": 818,
            "end": 827
          },
          "typeArguments": null,
          "start": 818,
          "end": 827
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Union",
              "optional": false,
              "typeAnnotation": null,
              "start": 831,
              "end": 836
            },
            "typeArguments": null,
            "start": 831,
            "end": 836
          },
          "extendsType": {
            "type": "TSIntersectionType",
            "types": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Collapsed",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 851,
                    "end": 860
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 851,
                  "end": 860
                },
                "start": 845,
                "end": 860
              },
              {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 863,
                "end": 865
              }
            ],
            "start": 845,
            "end": 865
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Collapsed",
              "optional": false,
              "typeAnnotation": null,
              "start": 870,
              "end": 879
            },
            "typeArguments": null,
            "start": 870,
            "end": 879
          },
          "falseType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Union",
              "optional": false,
              "typeAnnotation": null,
              "start": 884,
              "end": 889
            },
            "typeArguments": null,
            "start": 884,
            "end": 889
          },
          "start": 831,
          "end": 889
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Union",
            "optional": false,
            "typeAnnotation": null,
            "start": 893,
            "end": 898
          },
          "typeArguments": null,
          "start": 893,
          "end": 898
        },
        "start": 804,
        "end": 898
      },
      "declare": false,
      "start": 773,
      "end": 899
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PositiveNumericStringGt",
        "optional": false,
        "typeAnnotation": null,
        "start": 905,
        "end": 928
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
              "start": 929,
              "end": 930
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 939,
              "end": 945
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 929,
            "end": 945
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 947,
              "end": 948
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 957,
              "end": 963
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 947,
            "end": 963
          }
        ],
        "start": 928,
        "end": 964
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 967,
          "end": 968
        },
        "typeArguments": null,
        "start": 967,
        "end": 968
      },
      "declare": false,
      "start": 900,
      "end": 969
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Absolute",
        "optional": false,
        "typeAnnotation": null,
        "start": 975,
        "end": 983
      },
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
              "start": 984,
              "end": 985
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 994,
                  "end": 1000
                },
                {
                  "type": "TSBigIntKeyword",
                  "start": 1003,
                  "end": 1009
                }
              ],
              "start": 994,
              "end": 1009
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 984,
            "end": 1009
          }
        ],
        "start": 983,
        "end": 1010
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "_Absolute",
          "optional": false,
          "typeAnnotation": null,
          "start": 1013,
          "end": 1022
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1023,
                  "end": 1024
                },
                "typeArguments": null,
                "start": 1023,
                "end": 1024
              },
              "extendsType": {
                "type": "TSObjectKeyword",
                "start": 1033,
                "end": 1039
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "UnwrapBrand",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1042,
                  "end": 1053
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
                        "start": 1054,
                        "end": 1055
                      },
                      "typeArguments": null,
                      "start": 1054,
                      "end": 1055
                    }
                  ],
                  "start": 1053,
                  "end": 1056
                },
                "start": 1042,
                "end": 1056
              },
              "falseType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1059,
                  "end": 1060
                },
                "typeArguments": null,
                "start": 1059,
                "end": 1060
              },
              "start": 1023,
              "end": 1060
            }
          ],
          "start": 1022,
          "end": 1061
        },
        "start": 1013,
        "end": 1061
      },
      "declare": false,
      "start": 970,
      "end": 1062
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_Absolute",
        "optional": false,
        "typeAnnotation": null,
        "start": 1068,
        "end": 1077
      },
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
              "start": 1078,
              "end": 1079
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1088,
                  "end": 1094
                },
                {
                  "type": "TSBigIntKeyword",
                  "start": 1097,
                  "end": 1103
                }
              ],
              "start": 1088,
              "end": 1103
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1078,
            "end": 1103
          }
        ],
        "start": 1077,
        "end": 1104
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 1107,
            "end": 1108
          },
          "typeArguments": null,
          "start": 1107,
          "end": 1108
        },
        "extendsType": {
          "type": "TSBigIntKeyword",
          "start": 1117,
          "end": 1123
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 1127,
                "end": 1130
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 1131,
                "end": 1133
              }
            ],
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1130,
                  "end": 1131
                },
                "typeArguments": null,
                "start": 1130,
                "end": 1131
              }
            ],
            "start": 1127,
            "end": 1133
          },
          "extendsType": {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "-",
                  "cooked": "-"
                },
                "tail": false,
                "start": 1142,
                "end": 1146
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 1176,
                "end": 1178
              }
            ],
            "types": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Magnitude",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1152,
                    "end": 1161
                  },
                  "constraint": {
                    "type": "TSBigIntKeyword",
                    "start": 1170,
                    "end": 1176
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1152,
                  "end": 1176
                },
                "start": 1146,
                "end": 1176
              }
            ],
            "start": 1142,
            "end": 1178
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Magnitude",
              "optional": false,
              "typeAnnotation": null,
              "start": 1183,
              "end": 1192
            },
            "typeArguments": null,
            "start": 1183,
            "end": 1192
          },
          "falseType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 1197,
              "end": 1198
            },
            "typeArguments": null,
            "start": 1197,
            "end": 1198
          },
          "start": 1127,
          "end": 1198
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 1202,
                "end": 1205
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 1206,
                "end": 1208
              }
            ],
            "types": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1205,
                  "end": 1206
                },
                "typeArguments": null,
                "start": 1205,
                "end": 1206
              }
            ],
            "start": 1202,
            "end": 1208
          },
          "extendsType": {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "-",
                  "cooked": "-"
                },
                "tail": false,
                "start": 1217,
                "end": 1221
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 1251,
                "end": 1253
              }
            ],
            "types": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Magnitude",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1227,
                    "end": 1236
                  },
                  "constraint": {
                    "type": "TSNumberKeyword",
                    "start": 1245,
                    "end": 1251
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1227,
                  "end": 1251
                },
                "start": 1221,
                "end": 1251
              }
            ],
            "start": 1217,
            "end": 1253
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Magnitude",
              "optional": false,
              "typeAnnotation": null,
              "start": 1258,
              "end": 1267
            },
            "typeArguments": null,
            "start": 1258,
            "end": 1267
          },
          "falseType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1272,
                  "end": 1275
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 1276,
                  "end": 1278
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "N",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1275,
                    "end": 1276
                  },
                  "typeArguments": null,
                  "start": 1275,
                  "end": 1276
                }
              ],
              "start": 1272,
              "end": 1278
            },
            "extendsType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "-Infinity",
                "raw": "'-Infinity'",
                "start": 1287,
                "end": 1298
              },
              "start": 1287,
              "end": 1298
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PositiveInfinity",
                "optional": false,
                "typeAnnotation": null,
                "start": 1304,
                "end": 1320
              },
              "typeArguments": null,
              "start": 1304,
              "end": 1320
            },
            "falseType": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTemplateLiteralType",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": false,
                    "start": 1326,
                    "end": 1329
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 1335,
                    "end": 1337
                  }
                ],
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 1329,
                    "end": 1335
                  }
                ],
                "start": 1326,
                "end": 1337
              },
              "extendsType": {
                "type": "TSTemplateLiteralType",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": false,
                    "start": 1346,
                    "end": 1349
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 1350,
                    "end": 1352
                  }
                ],
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "N",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1349,
                      "end": 1350
                    },
                    "typeArguments": null,
                    "start": 1349,
                    "end": 1350
                  }
                ],
                "start": 1346,
                "end": 1352
              },
              "trueType": {
                "type": "TSNumberKeyword",
                "start": 1355,
                "end": 1361
              },
              "falseType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1364,
                  "end": 1365
                },
                "typeArguments": null,
                "start": 1364,
                "end": 1365
              },
              "start": 1326,
              "end": 1365
            },
            "start": 1272,
            "end": 1365
          },
          "start": 1202,
          "end": 1365
        },
        "start": 1107,
        "end": 1365
      },
      "declare": false,
      "start": 1063,
      "end": 1366
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GreaterThan",
        "optional": false,
        "typeAnnotation": null,
        "start": 1372,
        "end": 1383
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
              "start": 1384,
              "end": 1385
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "_Numeric",
                "optional": false,
                "typeAnnotation": null,
                "start": 1394,
                "end": 1402
              },
              "typeArguments": null,
              "start": 1394,
              "end": 1402
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1384,
            "end": 1402
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 1404,
              "end": 1405
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "_Numeric",
                "optional": false,
                "typeAnnotation": null,
                "start": 1414,
                "end": 1422
              },
              "typeArguments": null,
              "start": 1414,
              "end": 1422
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1404,
            "end": 1422
          }
        ],
        "start": 1383,
        "end": 1423
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "_GreaterThan",
          "optional": false,
          "typeAnnotation": null,
          "start": 1427,
          "end": 1439
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1440,
                  "end": 1441
                },
                "typeArguments": null,
                "start": 1440,
                "end": 1441
              },
              "extendsType": {
                "type": "TSObjectKeyword",
                "start": 1450,
                "end": 1456
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "UnwrapBrand",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1459,
                  "end": 1470
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
                        "start": 1471,
                        "end": 1472
                      },
                      "typeArguments": null,
                      "start": 1471,
                      "end": 1472
                    }
                  ],
                  "start": 1470,
                  "end": 1473
                },
                "start": 1459,
                "end": 1473
              },
              "falseType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1476,
                  "end": 1477
                },
                "typeArguments": null,
                "start": 1476,
                "end": 1477
              },
              "start": 1440,
              "end": 1477
            },
            {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1479,
                  "end": 1480
                },
                "typeArguments": null,
                "start": 1479,
                "end": 1480
              },
              "extendsType": {
                "type": "TSObjectKeyword",
                "start": 1489,
                "end": 1495
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "UnwrapBrand",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1498,
                  "end": 1509
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
                        "start": 1510,
                        "end": 1511
                      },
                      "typeArguments": null,
                      "start": 1510,
                      "end": 1511
                    }
                  ],
                  "start": 1509,
                  "end": 1512
                },
                "start": 1498,
                "end": 1512
              },
              "falseType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1515,
                  "end": 1516
                },
                "typeArguments": null,
                "start": 1515,
                "end": 1516
              },
              "start": 1479,
              "end": 1516
            }
          ],
          "start": 1439,
          "end": 1517
        },
        "start": 1427,
        "end": 1517
      },
      "declare": false,
      "start": 1367,
      "end": 1518
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_GreaterThan",
        "optional": false,
        "typeAnnotation": null,
        "start": 1524,
        "end": 1536
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
              "start": 1537,
              "end": 1538
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "_Numeric",
                "optional": false,
                "typeAnnotation": null,
                "start": 1547,
                "end": 1555
              },
              "typeArguments": null,
              "start": 1547,
              "end": 1555
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1537,
            "end": 1555
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 1557,
              "end": 1558
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "_Numeric",
                "optional": false,
                "typeAnnotation": null,
                "start": 1567,
                "end": 1575
              },
              "typeArguments": null,
              "start": 1567,
              "end": 1575
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1557,
            "end": 1575
          }
        ],
        "start": 1536,
        "end": 1576
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
            "start": 1580,
            "end": 1581
          },
          "typeArguments": null,
          "start": 1580,
          "end": 1581
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "_Numeric",
            "optional": false,
            "typeAnnotation": null,
            "start": 1590,
            "end": 1598
          },
          "typeArguments": null,
          "start": 1590,
          "end": 1598
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
              "start": 1603,
              "end": 1604
            },
            "typeArguments": null,
            "start": 1603,
            "end": 1604
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "_Numeric",
              "optional": false,
              "typeAnnotation": null,
              "start": 1613,
              "end": 1621
            },
            "typeArguments": null,
            "start": 1613,
            "end": 1621
          },
          "trueType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1627,
                  "end": 1630
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 1636,
                  "end": 1638
                }
              ],
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1630,
                  "end": 1636
                }
              ],
              "start": 1627,
              "end": 1638
            },
            "extendsType": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1647,
                  "end": 1650
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 1655,
                  "end": 1657
                }
              ],
              "types": [
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
                        "start": 1650,
                        "end": 1651
                      },
                      "typeArguments": null,
                      "start": 1650,
                      "end": 1651
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1654,
                        "end": 1655
                      },
                      "typeArguments": null,
                      "start": 1654,
                      "end": 1655
                    }
                  ],
                  "start": 1650,
                  "end": 1655
                }
              ],
              "start": 1647,
              "end": 1657
            },
            "trueType": {
              "type": "TSBooleanKeyword",
              "start": 1664,
              "end": 1671
            },
            "falseType": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSBigIntKeyword",
                "start": 1678,
                "end": 1684
              },
              "extendsType": {
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
                      "start": 1693,
                      "end": 1694
                    },
                    "typeArguments": null,
                    "start": 1693,
                    "end": 1694
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1697,
                      "end": 1698
                    },
                    "typeArguments": null,
                    "start": 1697,
                    "end": 1698
                  }
                ],
                "start": 1693,
                "end": 1698
              },
              "trueType": {
                "type": "TSBooleanKeyword",
                "start": 1706,
                "end": 1713
              },
              "falseType": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1721,
                    "end": 1722
                  },
                  "typeArguments": null,
                  "start": 1721,
                  "end": 1722
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PositiveInfinity",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1731,
                    "end": 1747
                  },
                  "typeArguments": null,
                  "start": 1731,
                  "end": 1747
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
                      "start": 1757,
                      "end": 1758
                    },
                    "typeArguments": null,
                    "start": 1757,
                    "end": 1758
                  },
                  "extendsType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PositiveInfinity",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1767,
                      "end": 1783
                    },
                    "typeArguments": null,
                    "start": 1767,
                    "end": 1783
                  },
                  "trueType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 1786,
                      "end": 1791
                    },
                    "start": 1786,
                    "end": 1791
                  },
                  "falseType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 1794,
                      "end": 1798
                    },
                    "start": 1794,
                    "end": 1798
                  },
                  "start": 1757,
                  "end": 1798
                },
                "falseType": {
                  "type": "TSConditionalType",
                  "checkType": {
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
                  },
                  "extendsType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NegativeInfinity",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1818,
                      "end": 1834
                    },
                    "typeArguments": null,
                    "start": 1818,
                    "end": 1834
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
                        "start": 1845,
                        "end": 1846
                      },
                      "typeArguments": null,
                      "start": 1845,
                      "end": 1846
                    },
                    "extendsType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NegativeInfinity",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1855,
                        "end": 1871
                      },
                      "typeArguments": null,
                      "start": 1855,
                      "end": 1871
                    },
                    "trueType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 1874,
                        "end": 1879
                      },
                      "start": 1874,
                      "end": 1879
                    },
                    "falseType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 1882,
                        "end": 1886
                      },
                      "start": 1882,
                      "end": 1886
                    },
                    "start": 1845,
                    "end": 1886
                  },
                  "falseType": {
                    "type": "TSConditionalType",
                    "checkType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1897,
                        "end": 1898
                      },
                      "typeArguments": null,
                      "start": 1897,
                      "end": 1898
                    },
                    "extendsType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NegativeInfinity",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1907,
                        "end": 1923
                      },
                      "typeArguments": null,
                      "start": 1907,
                      "end": 1923
                    },
                    "trueType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": false,
                        "raw": "false",
                        "start": 1935,
                        "end": 1940
                      },
                      "start": 1935,
                      "end": 1940
                    },
                    "falseType": {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1952,
                          "end": 1953
                        },
                        "typeArguments": null,
                        "start": 1952,
                        "end": 1953
                      },
                      "extendsType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "PositiveInfinity",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1962,
                          "end": 1978
                        },
                        "typeArguments": null,
                        "start": 1962,
                        "end": 1978
                      },
                      "trueType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": false,
                          "raw": "false",
                          "start": 1991,
                          "end": 1996
                        },
                        "start": 1991,
                        "end": 1996
                      },
                      "falseType": {
                        "type": "TSConditionalType",
                        "checkType": {
                          "type": "TSTupleType",
                          "elementTypes": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "IsNegative",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2010,
                                "end": 2020
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
                                      "start": 2021,
                                      "end": 2022
                                    },
                                    "typeArguments": null,
                                    "start": 2021,
                                    "end": 2022
                                  }
                                ],
                                "start": 2020,
                                "end": 2023
                              },
                              "start": 2010,
                              "end": 2023
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "IsNegative",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2025,
                                "end": 2035
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
                                      "start": 2036,
                                      "end": 2037
                                    },
                                    "typeArguments": null,
                                    "start": 2036,
                                    "end": 2037
                                  }
                                ],
                                "start": 2035,
                                "end": 2038
                              },
                              "start": 2025,
                              "end": 2038
                            }
                          ],
                          "start": 2009,
                          "end": 2039
                        },
                        "extendsType": {
                          "type": "TSInferType",
                          "typeParameter": {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Signs",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2054,
                              "end": 2059
                            },
                            "constraint": {
                              "type": "TSTupleType",
                              "elementTypes": [
                                {
                                  "type": "TSBooleanKeyword",
                                  "start": 2069,
                                  "end": 2076
                                },
                                {
                                  "type": "TSBooleanKeyword",
                                  "start": 2078,
                                  "end": 2085
                                }
                              ],
                              "start": 2068,
                              "end": 2086
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2054,
                            "end": 2086
                          },
                          "start": 2048,
                          "end": 2086
                        },
                        "trueType": {
                          "type": "TSConditionalType",
                          "checkType": {
                            "type": "TSTupleType",
                            "elementTypes": [
                              {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": true,
                                  "raw": "true",
                                  "start": 2101,
                                  "end": 2105
                                },
                                "start": 2101,
                                "end": 2105
                              },
                              {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": false,
                                  "raw": "false",
                                  "start": 2107,
                                  "end": 2112
                                },
                                "start": 2107,
                                "end": 2112
                              }
                            ],
                            "start": 2100,
                            "end": 2113
                          },
                          "extendsType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Signs",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2122,
                              "end": 2127
                            },
                            "typeArguments": null,
                            "start": 2122,
                            "end": 2127
                          },
                          "trueType": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": false,
                              "raw": "false",
                              "start": 2142,
                              "end": 2147
                            },
                            "start": 2142,
                            "end": 2147
                          },
                          "falseType": {
                            "type": "TSConditionalType",
                            "checkType": {
                              "type": "TSTupleType",
                              "elementTypes": [
                                {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": false,
                                    "raw": "false",
                                    "start": 2163,
                                    "end": 2168
                                  },
                                  "start": 2163,
                                  "end": 2168
                                },
                                {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": true,
                                    "raw": "true",
                                    "start": 2170,
                                    "end": 2174
                                  },
                                  "start": 2170,
                                  "end": 2174
                                }
                              ],
                              "start": 2162,
                              "end": 2175
                            },
                            "extendsType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Signs",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2184,
                                "end": 2189
                              },
                              "typeArguments": null,
                              "start": 2184,
                              "end": 2189
                            },
                            "trueType": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": true,
                                "raw": "true",
                                "start": 2205,
                                "end": 2209
                              },
                              "start": 2205,
                              "end": 2209
                            },
                            "falseType": {
                              "type": "TSConditionalType",
                              "checkType": {
                                "type": "TSTupleType",
                                "elementTypes": [
                                  {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": false,
                                      "raw": "false",
                                      "start": 2226,
                                      "end": 2231
                                    },
                                    "start": 2226,
                                    "end": 2231
                                  },
                                  {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": false,
                                      "raw": "false",
                                      "start": 2233,
                                      "end": 2238
                                    },
                                    "start": 2233,
                                    "end": 2238
                                  }
                                ],
                                "start": 2225,
                                "end": 2239
                              },
                              "extendsType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Signs",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2248,
                                  "end": 2253
                                },
                                "typeArguments": null,
                                "start": 2248,
                                "end": 2253
                              },
                              "trueType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "PositiveNumericStringGt",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2270,
                                  "end": 2293
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTemplateLiteralType",
                                      "quasis": [
                                        {
                                          "type": "TemplateElement",
                                          "value": {
                                            "raw": "",
                                            "cooked": ""
                                          },
                                          "tail": false,
                                          "start": 2294,
                                          "end": 2297
                                        },
                                        {
                                          "type": "TemplateElement",
                                          "value": {
                                            "raw": "",
                                            "cooked": ""
                                          },
                                          "tail": true,
                                          "start": 2298,
                                          "end": 2300
                                        }
                                      ],
                                      "types": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "A",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2297,
                                            "end": 2298
                                          },
                                          "typeArguments": null,
                                          "start": 2297,
                                          "end": 2298
                                        }
                                      ],
                                      "start": 2294,
                                      "end": 2300
                                    },
                                    {
                                      "type": "TSTemplateLiteralType",
                                      "quasis": [
                                        {
                                          "type": "TemplateElement",
                                          "value": {
                                            "raw": "",
                                            "cooked": ""
                                          },
                                          "tail": false,
                                          "start": 2302,
                                          "end": 2305
                                        },
                                        {
                                          "type": "TemplateElement",
                                          "value": {
                                            "raw": "",
                                            "cooked": ""
                                          },
                                          "tail": true,
                                          "start": 2306,
                                          "end": 2308
                                        }
                                      ],
                                      "types": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "B",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2305,
                                            "end": 2306
                                          },
                                          "typeArguments": null,
                                          "start": 2305,
                                          "end": 2306
                                        }
                                      ],
                                      "start": 2302,
                                      "end": 2308
                                    }
                                  ],
                                  "start": 2293,
                                  "end": 2309
                                },
                                "start": 2270,
                                "end": 2309
                              },
                              "falseType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "PositiveNumericStringGt",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2326,
                                  "end": 2349
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTemplateLiteralType",
                                      "quasis": [
                                        {
                                          "type": "TemplateElement",
                                          "value": {
                                            "raw": "",
                                            "cooked": ""
                                          },
                                          "tail": false,
                                          "start": 2350,
                                          "end": 2353
                                        },
                                        {
                                          "type": "TemplateElement",
                                          "value": {
                                            "raw": "",
                                            "cooked": ""
                                          },
                                          "tail": true,
                                          "start": 2364,
                                          "end": 2366
                                        }
                                      ],
                                      "types": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Absolute",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2353,
                                            "end": 2361
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
                                                  "start": 2362,
                                                  "end": 2363
                                                },
                                                "typeArguments": null,
                                                "start": 2362,
                                                "end": 2363
                                              }
                                            ],
                                            "start": 2361,
                                            "end": 2364
                                          },
                                          "start": 2353,
                                          "end": 2364
                                        }
                                      ],
                                      "start": 2350,
                                      "end": 2366
                                    },
                                    {
                                      "type": "TSTemplateLiteralType",
                                      "quasis": [
                                        {
                                          "type": "TemplateElement",
                                          "value": {
                                            "raw": "",
                                            "cooked": ""
                                          },
                                          "tail": false,
                                          "start": 2368,
                                          "end": 2371
                                        },
                                        {
                                          "type": "TemplateElement",
                                          "value": {
                                            "raw": "",
                                            "cooked": ""
                                          },
                                          "tail": true,
                                          "start": 2382,
                                          "end": 2384
                                        }
                                      ],
                                      "types": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Absolute",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2371,
                                            "end": 2379
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
                                                  "start": 2380,
                                                  "end": 2381
                                                },
                                                "typeArguments": null,
                                                "start": 2380,
                                                "end": 2381
                                              }
                                            ],
                                            "start": 2379,
                                            "end": 2382
                                          },
                                          "start": 2371,
                                          "end": 2382
                                        }
                                      ],
                                      "start": 2368,
                                      "end": 2384
                                    }
                                  ],
                                  "start": 2349,
                                  "end": 2385
                                },
                                "start": 2326,
                                "end": 2385
                              },
                              "start": 2225,
                              "end": 2385
                            },
                            "start": 2162,
                            "end": 2385
                          },
                          "start": 2100,
                          "end": 2385
                        },
                        "falseType": {
                          "type": "TSNeverKeyword",
                          "start": 2399,
                          "end": 2404
                        },
                        "start": 2009,
                        "end": 2404
                      },
                      "start": 1952,
                      "end": 2404
                    },
                    "start": 1897,
                    "end": 2404
                  },
                  "start": 1808,
                  "end": 2404
                },
                "start": 1721,
                "end": 2404
              },
              "start": 1678,
              "end": 2404
            },
            "start": 1627,
            "end": 2404
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 2410,
            "end": 2415
          },
          "start": 1603,
          "end": 2415
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 2420,
          "end": 2425
        },
        "start": 1580,
        "end": 2425
      },
      "declare": false,
      "start": 1519,
      "end": 2426
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IsReadonlyArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 2432,
        "end": 2447
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Array_",
              "optional": false,
              "typeAnnotation": null,
              "start": 2448,
              "end": 2454
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnknownArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 2463,
                "end": 2475
              },
              "typeArguments": null,
              "start": 2463,
              "end": 2475
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2448,
            "end": 2475
          }
        ],
        "start": 2447,
        "end": 2476
      },
      "typeAnnotation": {
        "type": "TSNeverKeyword",
        "start": 2479,
        "end": 2484
      },
      "declare": false,
      "start": 2427,
      "end": 2485
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnionMember",
        "optional": false,
        "typeAnnotation": null,
        "start": 2491,
        "end": 2502
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
              "start": 2503,
              "end": 2504
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2503,
            "end": 2504
          }
        ],
        "start": 2502,
        "end": 2505
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IsNever",
            "optional": false,
            "typeAnnotation": null,
            "start": 2509,
            "end": 2516
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
                  "start": 2517,
                  "end": 2518
                },
                "typeArguments": null,
                "start": 2517,
                "end": 2518
              }
            ],
            "start": 2516,
            "end": 2519
          },
          "start": 2509,
          "end": 2519
        },
        "extendsType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 2528,
            "end": 2532
          },
          "start": 2528,
          "end": 2532
        },
        "trueType": {
          "type": "TSNeverKeyword",
          "start": 2537,
          "end": 2542
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2548,
                "end": 2549
              },
              "typeArguments": null,
              "start": 2548,
              "end": 2549
            },
            "extendsType": {
              "type": "TSAnyKeyword",
              "start": 2558,
              "end": 2561
            },
            "trueType": {
              "type": "TSFunctionType",
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
                    "start": 2570,
                    "end": 2571
                  },
                  "typeArguments": null,
                  "start": 2570,
                  "end": 2571
                },
                "start": 2567,
                "end": 2571
              },
              "start": 2564,
              "end": 2571
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 2574,
              "end": 2579
            },
            "start": 2548,
            "end": 2579
          },
          "extendsType": {
            "type": "TSFunctionType",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
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
                    "start": 2602,
                    "end": 2603
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2602,
                  "end": 2603
                },
                "start": 2596,
                "end": 2603
              },
              "start": 2592,
              "end": 2604
            },
            "start": 2589,
            "end": 2604
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 2610,
              "end": 2611
            },
            "typeArguments": null,
            "start": 2610,
            "end": 2611
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 2617,
            "end": 2622
          },
          "start": 2547,
          "end": 2622
        },
        "start": 2509,
        "end": 2622
      },
      "declare": false,
      "start": 2486,
      "end": 2623
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TagContainer",
        "optional": false,
        "typeAnnotation": null,
        "start": 2629,
        "end": 2641
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Token",
              "optional": false,
              "typeAnnotation": null,
              "start": 2642,
              "end": 2647
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2642,
            "end": 2647
          }
        ],
        "start": 2641,
        "end": 2648
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "tag",
              "optional": false,
              "typeAnnotation": null,
              "start": 2664,
              "end": 2667
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Token",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2670,
                  "end": 2675
                },
                "typeArguments": null,
                "start": 2670,
                "end": 2675
              },
              "start": 2668,
              "end": 2675
            },
            "accessibility": null,
            "static": false,
            "start": 2654,
            "end": 2676
          }
        ],
        "start": 2651,
        "end": 2678
      },
      "declare": false,
      "start": 2624,
      "end": 2679
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tag",
        "optional": false,
        "typeAnnotation": null,
        "start": 2685,
        "end": 2688
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TagName",
              "optional": false,
              "typeAnnotation": null,
              "start": 2689,
              "end": 2696
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PropertyKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 2705,
                "end": 2716
              },
              "typeArguments": null,
              "start": 2705,
              "end": 2716
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2689,
            "end": 2716
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TagMetadata",
              "optional": false,
              "typeAnnotation": null,
              "start": 2718,
              "end": 2729
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2718,
            "end": 2729
          }
        ],
        "start": 2688,
        "end": 2730
      },
      "typeAnnotation": {
        "type": "TSUnknownKeyword",
        "start": 2733,
        "end": 2740
      },
      "declare": false,
      "start": 2680,
      "end": 2741
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RemoveAllTags",
        "optional": false,
        "typeAnnotation": null,
        "start": 2747,
        "end": 2760
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
              "start": 2761,
              "end": 2762
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2761,
            "end": 2762
          }
        ],
        "start": 2760,
        "end": 2763
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
            "start": 2766,
            "end": 2767
          },
          "typeArguments": null,
          "start": 2766,
          "end": 2767
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TagContainer",
            "optional": false,
            "typeAnnotation": null,
            "start": 2776,
            "end": 2788
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 2789,
                "end": 2792
              }
            ],
            "start": 2788,
            "end": 2793
          },
          "start": 2776,
          "end": 2793
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "RemoveAllTags",
            "optional": false,
            "typeAnnotation": null,
            "start": 2797,
            "end": 2810
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "UnionMember",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2811,
                  "end": 2822
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RemoveTag",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2823,
                        "end": 2832
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
                              "start": 2833,
                              "end": 2834
                            },
                            "typeArguments": null,
                            "start": 2833,
                            "end": 2834
                          }
                        ],
                        "start": 2832,
                        "end": 2835
                      },
                      "start": 2823,
                      "end": 2835
                    }
                  ],
                  "start": 2822,
                  "end": 2836
                },
                "start": 2811,
                "end": 2836
              }
            ],
            "start": 2810,
            "end": 2837
          },
          "start": 2797,
          "end": 2837
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 2841,
            "end": 2842
          },
          "typeArguments": null,
          "start": 2841,
          "end": 2842
        },
        "start": 2766,
        "end": 2842
      },
      "declare": false,
      "start": 2742,
      "end": 2843
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RemoveTag",
        "optional": false,
        "typeAnnotation": null,
        "start": 2849,
        "end": 2858
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
              "start": 2859,
              "end": 2860
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TagContainer",
                "optional": false,
                "typeAnnotation": null,
                "start": 2869,
                "end": 2881
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSUnknownKeyword",
                    "start": 2882,
                    "end": 2889
                  }
                ],
                "start": 2881,
                "end": 2890
              },
              "start": 2869,
              "end": 2890
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2859,
            "end": 2890
          }
        ],
        "start": 2858,
        "end": 2891
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "ThisTag",
                "optional": false,
                "typeAnnotation": null,
                "start": 2902,
                "end": 2909
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
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
                      "start": 2919,
                      "end": 2920
                    },
                    "typeArguments": null,
                    "start": 2919,
                    "end": 2920
                  },
                  "indexType": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "tag",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2928,
                      "end": 2931
                    },
                    "typeArguments": null,
                    "start": 2921,
                    "end": 2931
                  },
                  "start": 2919,
                  "end": 2932
                },
                "start": 2913,
                "end": 2932
              },
              "nameType": null,
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
                    "start": 2935,
                    "end": 2936
                  },
                  "typeArguments": null,
                  "start": 2935,
                  "end": 2936
                },
                "extendsType": {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSInferType",
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Underlying",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2951,
                          "end": 2961
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 2951,
                        "end": 2961
                      },
                      "start": 2945,
                      "end": 2961
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Tag",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2964,
                        "end": 2967
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ThisTag",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2968,
                              "end": 2975
                            },
                            "typeArguments": null,
                            "start": 2968,
                            "end": 2975
                          },
                          {
                            "type": "TSIndexedAccessType",
                            "objectType": {
                              "type": "TSIndexedAccessType",
                              "objectType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2977,
                                  "end": 2978
                                },
                                "typeArguments": null,
                                "start": 2977,
                                "end": 2978
                              },
                              "indexType": {
                                "type": "TSTypeQuery",
                                "exprName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "tag",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2986,
                                  "end": 2989
                                },
                                "typeArguments": null,
                                "start": 2979,
                                "end": 2989
                              },
                              "start": 2977,
                              "end": 2990
                            },
                            "indexType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ThisTag",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2991,
                                "end": 2998
                              },
                              "typeArguments": null,
                              "start": 2991,
                              "end": 2998
                            },
                            "start": 2977,
                            "end": 2999
                          }
                        ],
                        "start": 2967,
                        "end": 3000
                      },
                      "start": 2964,
                      "end": 3000
                    }
                  ],
                  "start": 2945,
                  "end": 3000
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
                          "name": "Underlying",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3007,
                          "end": 3017
                        },
                        "typeArguments": null,
                        "start": 3007,
                        "end": 3017
                      }
                    ],
                    "start": 3006,
                    "end": 3018
                  },
                  "extendsType": {
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
                          "start": 3028,
                          "end": 3029
                        },
                        "typeArguments": null,
                        "start": 3028,
                        "end": 3029
                      }
                    ],
                    "start": 3027,
                    "end": 3030
                  },
                  "trueType": {
                    "type": "TSNeverKeyword",
                    "start": 3033,
                    "end": 3038
                  },
                  "falseType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Underlying",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3041,
                      "end": 3051
                    },
                    "typeArguments": null,
                    "start": 3041,
                    "end": 3051
                  },
                  "start": 3006,
                  "end": 3051
                },
                "falseType": {
                  "type": "TSNeverKeyword",
                  "start": 3057,
                  "end": 3062
                },
                "start": 2935,
                "end": 3062
              },
              "optional": false,
              "readonly": null,
              "start": 2897,
              "end": 3065
            },
            "indexType": {
              "type": "TSTypeOperator",
              "operator": "keyof",
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
                    "start": 3072,
                    "end": 3073
                  },
                  "typeArguments": null,
                  "start": 3072,
                  "end": 3073
                },
                "indexType": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "tag",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3081,
                    "end": 3084
                  },
                  "typeArguments": null,
                  "start": 3074,
                  "end": 3084
                },
                "start": 3072,
                "end": 3085
              },
              "start": 3066,
              "end": 3085
            },
            "start": 2897,
            "end": 3086
          },
          {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3091,
                "end": 3092
              },
              "typeArguments": null,
              "start": 3091,
              "end": 3092
            },
            "extendsType": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Underlying",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3107,
                      "end": 3117
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 3107,
                    "end": 3117
                  },
                  "start": 3101,
                  "end": 3117
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TagContainer",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3120,
                    "end": 3132
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
                            "start": 3133,
                            "end": 3134
                          },
                          "typeArguments": null,
                          "start": 3133,
                          "end": 3134
                        },
                        "indexType": {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "tag",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3142,
                            "end": 3145
                          },
                          "typeArguments": null,
                          "start": 3135,
                          "end": 3145
                        },
                        "start": 3133,
                        "end": 3146
                      }
                    ],
                    "start": 3132,
                    "end": 3147
                  },
                  "start": 3120,
                  "end": 3147
                }
              ],
              "start": 3101,
              "end": 3147
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
                      "name": "Underlying",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3153,
                      "end": 3163
                    },
                    "typeArguments": null,
                    "start": 3153,
                    "end": 3163
                  }
                ],
                "start": 3152,
                "end": 3164
              },
              "extendsType": {
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
                      "start": 3174,
                      "end": 3175
                    },
                    "typeArguments": null,
                    "start": 3174,
                    "end": 3175
                  }
                ],
                "start": 3173,
                "end": 3176
              },
              "trueType": {
                "type": "TSNeverKeyword",
                "start": 3179,
                "end": 3184
              },
              "falseType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Underlying",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3187,
                  "end": 3197
                },
                "typeArguments": null,
                "start": 3187,
                "end": 3197
              },
              "start": 3152,
              "end": 3197
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 3202,
              "end": 3207
            },
            "start": 3091,
            "end": 3207
          }
        ],
        "start": 2895,
        "end": 3208
      },
      "declare": false,
      "start": 2844,
      "end": 3209
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnwrapBrand",
        "optional": false,
        "typeAnnotation": null,
        "start": 3215,
        "end": 3226
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
              "start": 3227,
              "end": 3228
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3227,
            "end": 3228
          }
        ],
        "start": 3226,
        "end": 3229
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "IfNotAnyOrNever",
          "optional": false,
          "typeAnnotation": null,
          "start": 3232,
          "end": 3247
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
                "start": 3248,
                "end": 3249
              },
              "typeArguments": null,
              "start": 3248,
              "end": 3249
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
                    "name": "ifNot",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3252,
                    "end": 3257
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_UnwrapBrand",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3259,
                        "end": 3271
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
                              "start": 3272,
                              "end": 3273
                            },
                            "typeArguments": null,
                            "start": 3272,
                            "end": 3273
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Primitive",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3275,
                              "end": 3284
                            },
                            "typeArguments": null,
                            "start": 3275,
                            "end": 3284
                          }
                        ],
                        "start": 3271,
                        "end": 3285
                      },
                      "start": 3259,
                      "end": 3285
                    },
                    "start": 3257,
                    "end": 3285
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3252,
                  "end": 3285
                }
              ],
              "start": 3251,
              "end": 3286
            }
          ],
          "start": 3247,
          "end": 3287
        },
        "start": 3232,
        "end": 3287
      },
      "declare": false,
      "start": 3210,
      "end": 3288
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_UnwrapBrand",
        "optional": false,
        "typeAnnotation": null,
        "start": 3294,
        "end": 3306
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
              "start": 3307,
              "end": 3308
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3307,
            "end": 3308
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 3310,
              "end": 3314
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3310,
            "end": 3314
          }
        ],
        "start": 3306,
        "end": 3315
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
            "start": 3318,
            "end": 3319
          },
          "typeArguments": null,
          "start": 3318,
          "end": 3319
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Primitive",
            "optional": false,
            "typeAnnotation": null,
            "start": 3328,
            "end": 3337
          },
          "typeArguments": null,
          "start": 3328,
          "end": 3337
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "CollapseLiterals",
            "optional": false,
            "typeAnnotation": null,
            "start": 3341,
            "end": 3357
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3358,
                    "end": 3359
                  },
                  "typeArguments": null,
                  "start": 3358,
                  "end": 3359
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TagContainer",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3368,
                    "end": 3380
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSUnknownKeyword",
                        "start": 3381,
                        "end": 3388
                      }
                    ],
                    "start": 3380,
                    "end": 3389
                  },
                  "start": 3368,
                  "end": 3389
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RemoveAllTags",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3392,
                    "end": 3405
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
                          "start": 3406,
                          "end": 3407
                        },
                        "typeArguments": null,
                        "start": 3406,
                        "end": 3407
                      }
                    ],
                    "start": 3405,
                    "end": 3408
                  },
                  "start": 3392,
                  "end": 3408
                },
                "falseType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3411,
                    "end": 3412
                  },
                  "typeArguments": null,
                  "start": 3411,
                  "end": 3412
                },
                "start": 3358,
                "end": 3412
              }
            ],
            "start": 3357,
            "end": 3413
          },
          "start": 3341,
          "end": 3413
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 3417,
            "end": 3418
          },
          "typeArguments": null,
          "start": 3417,
          "end": 3418
        },
        "start": 3318,
        "end": 3418
      },
      "declare": false,
      "start": 3289,
      "end": 3419
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_Numeric",
        "optional": false,
        "typeAnnotation": null,
        "start": 3425,
        "end": 3433
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSNumberKeyword",
            "start": 3436,
            "end": 3442
          },
          {
            "type": "TSBigIntKeyword",
            "start": 3445,
            "end": 3451
          }
        ],
        "start": 3436,
        "end": 3451
      },
      "declare": false,
      "start": 3420,
      "end": 3452
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PositiveInfinity",
        "optional": false,
        "typeAnnotation": null,
        "start": 3458,
        "end": 3474
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnknownKeyword",
        "start": 3477,
        "end": 3484
      },
      "declare": false,
      "start": 3453,
      "end": 3485
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NegativeInfinity",
        "optional": false,
        "typeAnnotation": null,
        "start": 3491,
        "end": 3507
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSNeverKeyword",
        "start": 3510,
        "end": 3515
      },
      "declare": false,
      "start": 3486,
      "end": 3516
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IsNegative",
        "optional": false,
        "typeAnnotation": null,
        "start": 3522,
        "end": 3532
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
              "start": 3533,
              "end": 3534
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "_Numeric",
                "optional": false,
                "typeAnnotation": null,
                "start": 3543,
                "end": 3551
              },
              "typeArguments": null,
              "start": 3543,
              "end": 3551
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3533,
            "end": 3551
          }
        ],
        "start": 3532,
        "end": 3552
      },
      "typeAnnotation": {
        "type": "TSNeverKeyword",
        "start": 3555,
        "end": 3560
      },
      "declare": false,
      "start": 3517,
      "end": 3561
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Sum",
        "optional": false,
        "typeAnnotation": null,
        "start": 3567,
        "end": 3570
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
              "start": 3571,
              "end": 3572
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 3581,
              "end": 3587
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3571,
            "end": 3587
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 3589,
              "end": 3590
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 3599,
              "end": 3605
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3589,
            "end": 3605
          }
        ],
        "start": 3570,
        "end": 3606
      },
      "typeAnnotation": {
        "type": "TSAnyKeyword",
        "start": 3609,
        "end": 3612
      },
      "declare": false,
      "start": 3562,
      "end": 3613
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LessThanOrEqual",
        "optional": false,
        "typeAnnotation": null,
        "start": 3619,
        "end": 3634
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
              "start": 3635,
              "end": 3636
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "_Numeric",
                "optional": false,
                "typeAnnotation": null,
                "start": 3645,
                "end": 3653
              },
              "typeArguments": null,
              "start": 3645,
              "end": 3653
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3635,
            "end": 3653
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 3655,
              "end": 3656
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "_Numeric",
                "optional": false,
                "typeAnnotation": null,
                "start": 3665,
                "end": 3673
              },
              "typeArguments": null,
              "start": 3665,
              "end": 3673
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3655,
            "end": 3673
          }
        ],
        "start": 3634,
        "end": 3674
      },
      "typeAnnotation": {
        "type": "TSUnknownKeyword",
        "start": 3677,
        "end": 3684
      },
      "declare": false,
      "start": 3614,
      "end": 3685
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ArraySlice",
        "optional": false,
        "typeAnnotation": null,
        "start": 3691,
        "end": 3701
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Array_",
              "optional": false,
              "typeAnnotation": null,
              "start": 3704,
              "end": 3710
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 3728,
                  "end": 3735
                },
                "start": 3728,
                "end": 3737
              },
              "start": 3719,
              "end": 3737
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3704,
            "end": 3737
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Start",
              "optional": false,
              "typeAnnotation": null,
              "start": 3740,
              "end": 3745
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 3754,
              "end": 3760
            },
            "default": {
              "type": "TSNeverKeyword",
              "start": 3763,
              "end": 3768
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 3740,
            "end": 3768
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "End",
              "optional": false,
              "typeAnnotation": null,
              "start": 3771,
              "end": 3774
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 3783,
              "end": 3789
            },
            "default": {
              "type": "TSNeverKeyword",
              "start": 3792,
              "end": 3797
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 3771,
            "end": 3797
          }
        ],
        "start": 3701,
        "end": 3800
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ArraySliceImplementation",
          "optional": false,
          "typeAnnotation": null,
          "start": 3803,
          "end": 3827
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array_",
                "optional": false,
                "typeAnnotation": null,
                "start": 3828,
                "end": 3834
              },
              "typeArguments": null,
              "start": 3828,
              "end": 3834
            },
            {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Start",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3836,
                  "end": 3841
                },
                "typeArguments": null,
                "start": 3836,
                "end": 3841
              },
              "extendsType": {
                "type": "TSObjectKeyword",
                "start": 3850,
                "end": 3856
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "UnwrapBrand",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3859,
                  "end": 3870
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Start",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3871,
                        "end": 3876
                      },
                      "typeArguments": null,
                      "start": 3871,
                      "end": 3876
                    }
                  ],
                  "start": 3870,
                  "end": 3877
                },
                "start": 3859,
                "end": 3877
              },
              "falseType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Start",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3880,
                  "end": 3885
                },
                "typeArguments": null,
                "start": 3880,
                "end": 3885
              },
              "start": 3836,
              "end": 3885
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "End",
                "optional": false,
                "typeAnnotation": null,
                "start": 3887,
                "end": 3890
              },
              "typeArguments": null,
              "start": 3887,
              "end": 3890
            }
          ],
          "start": 3827,
          "end": 3891
        },
        "start": 3803,
        "end": 3891
      },
      "declare": false,
      "start": 3686,
      "end": 3892
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ArraySliceImplementation",
        "optional": false,
        "typeAnnotation": null,
        "start": 3898,
        "end": 3922
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Array_",
              "optional": false,
              "typeAnnotation": null,
              "start": 3925,
              "end": 3931
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 3949,
                  "end": 3956
                },
                "start": 3949,
                "end": 3958
              },
              "start": 3940,
              "end": 3958
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3925,
            "end": 3958
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Start",
              "optional": false,
              "typeAnnotation": null,
              "start": 3961,
              "end": 3966
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 3975,
              "end": 3981
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3961,
            "end": 3981
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "End",
              "optional": false,
              "typeAnnotation": null,
              "start": 3984,
              "end": 3987
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 3996,
              "end": 4002
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3984,
            "end": 4002
          }
        ],
        "start": 3922,
        "end": 4005
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array_",
            "optional": false,
            "typeAnnotation": null,
            "start": 4008,
            "end": 4014
          },
          "typeArguments": null,
          "start": 4008,
          "end": 4014
        },
        "extendsType": {
          "type": "TSUnknownKeyword",
          "start": 4023,
          "end": 4030
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "_ArraySlice",
            "optional": false,
            "typeAnnotation": null,
            "start": 4033,
            "end": 4044
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array_",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4045,
                  "end": 4051
                },
                "typeArguments": null,
                "start": 4045,
                "end": 4051
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Start",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4053,
                  "end": 4058
                },
                "typeArguments": null,
                "start": 4053,
                "end": 4058
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "End",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4060,
                  "end": 4063
                },
                "typeArguments": null,
                "start": 4060,
                "end": 4063
              }
            ],
            "start": 4044,
            "end": 4064
          },
          "start": 4033,
          "end": 4064
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 4067,
          "end": 4072
        },
        "start": 4008,
        "end": 4072
      },
      "declare": false,
      "start": 3893,
      "end": 4073
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_ArraySlice",
        "optional": false,
        "typeAnnotation": null,
        "start": 4079,
        "end": 4090
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Array_",
              "optional": false,
              "typeAnnotation": null,
              "start": 4093,
              "end": 4099
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 4117,
                  "end": 4124
                },
                "start": 4117,
                "end": 4126
              },
              "start": 4108,
              "end": 4126
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4093,
            "end": 4126
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Start",
              "optional": false,
              "typeAnnotation": null,
              "start": 4129,
              "end": 4134
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 4143,
              "end": 4149
            },
            "default": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 4152,
                "end": 4153
              },
              "start": 4152,
              "end": 4153
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 4129,
            "end": 4153
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "End",
              "optional": false,
              "typeAnnotation": null,
              "start": 4156,
              "end": 4159
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 4168,
              "end": 4174
            },
            "default": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array_",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4177,
                  "end": 4183
                },
                "typeArguments": null,
                "start": 4177,
                "end": 4183
              },
              "indexType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "length",
                  "raw": "'length'",
                  "start": 4184,
                  "end": 4192
                },
                "start": 4184,
                "end": 4192
              },
              "start": 4177,
              "end": 4193
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 4156,
            "end": 4193
          }
        ],
        "start": 4090,
        "end": 4196
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "And",
            "optional": false,
            "typeAnnotation": null,
            "start": 4199,
            "end": 4202
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IsEqual",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4203,
                  "end": 4210
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Start",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4211,
                        "end": 4216
                      },
                      "typeArguments": null,
                      "start": 4211,
                      "end": 4216
                    },
                    {
                      "type": "TSNeverKeyword",
                      "start": 4218,
                      "end": 4223
                    }
                  ],
                  "start": 4210,
                  "end": 4224
                },
                "start": 4203,
                "end": 4224
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IsEqual",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4226,
                  "end": 4233
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "End",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4234,
                        "end": 4237
                      },
                      "typeArguments": null,
                      "start": 4234,
                      "end": 4237
                    },
                    {
                      "type": "TSNeverKeyword",
                      "start": 4239,
                      "end": 4244
                    }
                  ],
                  "start": 4233,
                  "end": 4245
                },
                "start": 4226,
                "end": 4245
              }
            ],
            "start": 4202,
            "end": 4246
          },
          "start": 4199,
          "end": 4246
        },
        "extendsType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 4255,
            "end": 4259
          },
          "start": 4255,
          "end": 4259
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array_",
            "optional": false,
            "typeAnnotation": null,
            "start": 4263,
            "end": 4269
          },
          "typeArguments": null,
          "start": 4263,
          "end": 4269
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSNumberKeyword",
            "start": 4273,
            "end": 4279
          },
          "extendsType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array_",
                "optional": false,
                "typeAnnotation": null,
                "start": 4288,
                "end": 4294
              },
              "typeArguments": null,
              "start": 4288,
              "end": 4294
            },
            "indexType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "length",
                "raw": "'length'",
                "start": 4295,
                "end": 4303
              },
              "start": 4295,
              "end": 4303
            },
            "start": 4288,
            "end": 4304
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "VariableLengthArraySliceHelper",
              "optional": false,
              "typeAnnotation": null,
              "start": 4309,
              "end": 4339
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Array_",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4340,
                    "end": 4346
                  },
                  "typeArguments": null,
                  "start": 4340,
                  "end": 4346
                },
                {
                  "type": "TSConditionalType",
                  "checkType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IsNever",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4348,
                      "end": 4355
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Start",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4356,
                            "end": 4361
                          },
                          "typeArguments": null,
                          "start": 4356,
                          "end": 4361
                        }
                      ],
                      "start": 4355,
                      "end": 4362
                    },
                    "start": 4348,
                    "end": 4362
                  },
                  "extendsType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 4371,
                      "end": 4375
                    },
                    "start": 4371,
                    "end": 4375
                  },
                  "trueType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 4378,
                      "end": 4379
                    },
                    "start": 4378,
                    "end": 4379
                  },
                  "falseType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Start",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4382,
                      "end": 4387
                    },
                    "typeArguments": null,
                    "start": 4382,
                    "end": 4387
                  },
                  "start": 4348,
                  "end": 4387
                },
                {
                  "type": "TSConditionalType",
                  "checkType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "End",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4389,
                      "end": 4392
                    },
                    "typeArguments": null,
                    "start": 4389,
                    "end": 4392
                  },
                  "extendsType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PositiveInfinity",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4401,
                      "end": 4417
                    },
                    "typeArguments": null,
                    "start": 4401,
                    "end": 4417
                  },
                  "trueType": {
                    "type": "TSNeverKeyword",
                    "start": 4420,
                    "end": 4425
                  },
                  "falseType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "End",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4428,
                      "end": 4431
                    },
                    "typeArguments": null,
                    "start": 4428,
                    "end": 4431
                  },
                  "start": 4389,
                  "end": 4431
                }
              ],
              "start": 4339,
              "end": 4432
            },
            "start": 4309,
            "end": 4432
          },
          "falseType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 4437,
                  "end": 4440
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 4446,
                  "end": 4448
                }
              ],
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 4440,
                  "end": 4446
                }
              ],
              "start": 4437,
              "end": 4448
            },
            "extendsType": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 4457,
                  "end": 4460
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 4471,
                  "end": 4473
                }
              ],
              "types": [
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Start",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4460,
                        "end": 4465
                      },
                      "typeArguments": null,
                      "start": 4460,
                      "end": 4465
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "End",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4468,
                        "end": 4471
                      },
                      "typeArguments": null,
                      "start": 4468,
                      "end": 4471
                    }
                  ],
                  "start": 4460,
                  "end": 4471
                }
              ],
              "start": 4457,
              "end": 4473
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnknownLengthArraySlice",
                "optional": false,
                "typeAnnotation": null,
                "start": 4479,
                "end": 4502
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array_",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4503,
                      "end": 4509
                    },
                    "typeArguments": null,
                    "start": 4503,
                    "end": 4509
                  }
                ],
                "start": 4502,
                "end": 4510
              },
              "start": 4479,
              "end": 4510
            },
            "falseType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ArraySliceResult",
                "optional": false,
                "typeAnnotation": null,
                "start": 4516,
                "end": 4532
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array_",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4533,
                      "end": 4539
                    },
                    "typeArguments": null,
                    "start": 4533,
                    "end": 4539
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ArraySliceHelper",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4541,
                      "end": 4557
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Array_",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4558,
                            "end": 4564
                          },
                          "typeArguments": null,
                          "start": 4558,
                          "end": 4564
                        },
                        {
                          "type": "TSConditionalType",
                          "checkType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "IsEqual",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4566,
                              "end": 4573
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Start",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4574,
                                    "end": 4579
                                  },
                                  "typeArguments": null,
                                  "start": 4574,
                                  "end": 4579
                                },
                                {
                                  "type": "TSNeverKeyword",
                                  "start": 4581,
                                  "end": 4586
                                }
                              ],
                              "start": 4573,
                              "end": 4587
                            },
                            "start": 4566,
                            "end": 4587
                          },
                          "extendsType": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": true,
                              "raw": "true",
                              "start": 4596,
                              "end": 4600
                            },
                            "start": 4596,
                            "end": 4600
                          },
                          "trueType": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 4603,
                              "end": 4604
                            },
                            "start": 4603,
                            "end": 4604
                          },
                          "falseType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Start",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4607,
                              "end": 4612
                            },
                            "typeArguments": null,
                            "start": 4607,
                            "end": 4612
                          },
                          "start": 4566,
                          "end": 4612
                        },
                        {
                          "type": "TSConditionalType",
                          "checkType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "IsEqual",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4614,
                              "end": 4621
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "End",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4622,
                                    "end": 4625
                                  },
                                  "typeArguments": null,
                                  "start": 4622,
                                  "end": 4625
                                },
                                {
                                  "type": "TSNeverKeyword",
                                  "start": 4627,
                                  "end": 4632
                                }
                              ],
                              "start": 4621,
                              "end": 4633
                            },
                            "start": 4614,
                            "end": 4633
                          },
                          "extendsType": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": true,
                              "raw": "true",
                              "start": 4642,
                              "end": 4646
                            },
                            "start": 4642,
                            "end": 4646
                          },
                          "trueType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "MaxLength",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4649,
                              "end": 4658
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Array_",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4659,
                                    "end": 4665
                                  },
                                  "typeArguments": null,
                                  "start": 4659,
                                  "end": 4665
                                }
                              ],
                              "start": 4658,
                              "end": 4666
                            },
                            "start": 4649,
                            "end": 4666
                          },
                          "falseType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "End",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4669,
                              "end": 4672
                            },
                            "typeArguments": null,
                            "start": 4669,
                            "end": 4672
                          },
                          "start": 4614,
                          "end": 4672
                        }
                      ],
                      "start": 4557,
                      "end": 4673
                    },
                    "start": 4541,
                    "end": 4673
                  }
                ],
                "start": 4532,
                "end": 4674
              },
              "start": 4516,
              "end": 4674
            },
            "start": 4437,
            "end": 4674
          },
          "start": 4273,
          "end": 4674
        },
        "start": 4199,
        "end": 4674
      },
      "declare": false,
      "start": 4074,
      "end": 4675
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ArraySliceResult",
        "optional": false,
        "typeAnnotation": null,
        "start": 4681,
        "end": 4697
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Array_",
              "optional": false,
              "typeAnnotation": null,
              "start": 4698,
              "end": 4704
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 4722,
                  "end": 4729
                },
                "start": 4722,
                "end": 4731
              },
              "start": 4713,
              "end": 4731
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4698,
            "end": 4731
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Sliced",
              "optional": false,
              "typeAnnotation": null,
              "start": 4733,
              "end": 4739
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4733,
            "end": 4739
          }
        ],
        "start": 4697,
        "end": 4740
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IsReadonlyArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 4744,
            "end": 4759
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array_",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4760,
                  "end": 4766
                },
                "typeArguments": null,
                "start": 4760,
                "end": 4766
              }
            ],
            "start": 4759,
            "end": 4767
          },
          "start": 4744,
          "end": 4767
        },
        "extendsType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 4776,
            "end": 4780
          },
          "start": 4776,
          "end": 4780
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Readonly",
            "optional": false,
            "typeAnnotation": null,
            "start": 4783,
            "end": 4791
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Sliced",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4792,
                  "end": 4798
                },
                "typeArguments": null,
                "start": 4792,
                "end": 4798
              }
            ],
            "start": 4791,
            "end": 4799
          },
          "start": 4783,
          "end": 4799
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Sliced",
            "optional": false,
            "typeAnnotation": null,
            "start": 4802,
            "end": 4808
          },
          "typeArguments": null,
          "start": 4802,
          "end": 4808
        },
        "start": 4744,
        "end": 4808
      },
      "declare": false,
      "start": 4676,
      "end": 4809
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "VariableLengthArraySliceHelper",
        "optional": false,
        "typeAnnotation": null,
        "start": 4815,
        "end": 4845
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Array_",
              "optional": false,
              "typeAnnotation": null,
              "start": 4848,
              "end": 4854
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 4872,
                  "end": 4879
                },
                "start": 4872,
                "end": 4881
              },
              "start": 4863,
              "end": 4881
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4848,
            "end": 4881
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Start",
              "optional": false,
              "typeAnnotation": null,
              "start": 4884,
              "end": 4889
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 4898,
              "end": 4904
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4884,
            "end": 4904
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "End",
              "optional": false,
              "typeAnnotation": null,
              "start": 4907,
              "end": 4910
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 4919,
              "end": 4925
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4907,
            "end": 4925
          }
        ],
        "start": 4845,
        "end": 4928
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "And",
            "optional": false,
            "typeAnnotation": null,
            "start": 4931,
            "end": 4934
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "And",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4937,
                  "end": 4940
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Not",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4941,
                        "end": 4944
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "IsNegative",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4945,
                              "end": 4955
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Start",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4956,
                                    "end": 4961
                                  },
                                  "typeArguments": null,
                                  "start": 4956,
                                  "end": 4961
                                }
                              ],
                              "start": 4955,
                              "end": 4962
                            },
                            "start": 4945,
                            "end": 4962
                          }
                        ],
                        "start": 4944,
                        "end": 4963
                      },
                      "start": 4941,
                      "end": 4963
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Not",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4965,
                        "end": 4968
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "IsNegative",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4969,
                              "end": 4979
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "End",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4980,
                                    "end": 4983
                                  },
                                  "typeArguments": null,
                                  "start": 4980,
                                  "end": 4983
                                }
                              ],
                              "start": 4979,
                              "end": 4984
                            },
                            "start": 4969,
                            "end": 4984
                          }
                        ],
                        "start": 4968,
                        "end": 4985
                      },
                      "start": 4965,
                      "end": 4985
                    }
                  ],
                  "start": 4940,
                  "end": 4986
                },
                "start": 4937,
                "end": 4986
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IsEqual",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4989,
                  "end": 4996
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "LessThanOrEqual",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4997,
                        "end": 5012
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "End",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5013,
                              "end": 5016
                            },
                            "typeArguments": null,
                            "start": 5013,
                            "end": 5016
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Start",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5018,
                              "end": 5023
                            },
                            "typeArguments": null,
                            "start": 5018,
                            "end": 5023
                          }
                        ],
                        "start": 5012,
                        "end": 5024
                      },
                      "start": 4997,
                      "end": 5024
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 5026,
                        "end": 5030
                      },
                      "start": 5026,
                      "end": 5030
                    }
                  ],
                  "start": 4996,
                  "end": 5031
                },
                "start": 4989,
                "end": 5031
              }
            ],
            "start": 4934,
            "end": 5033
          },
          "start": 4931,
          "end": 5033
        },
        "extendsType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 5042,
            "end": 5046
          },
          "start": 5042,
          "end": 5046
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [],
          "start": 5050,
          "end": 5052
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "And",
              "optional": false,
              "typeAnnotation": null,
              "start": 5056,
              "end": 5059
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "And",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5064,
                    "end": 5067
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Not",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5068,
                          "end": 5071
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "IsNegative",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5072,
                                "end": 5082
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Start",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 5083,
                                      "end": 5088
                                    },
                                    "typeArguments": null,
                                    "start": 5083,
                                    "end": 5088
                                  }
                                ],
                                "start": 5082,
                                "end": 5089
                              },
                              "start": 5072,
                              "end": 5089
                            }
                          ],
                          "start": 5071,
                          "end": 5090
                        },
                        "start": 5068,
                        "end": 5090
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Not",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5092,
                          "end": 5095
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "IsNegative",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5096,
                                "end": 5106
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "End",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 5107,
                                      "end": 5110
                                    },
                                    "typeArguments": null,
                                    "start": 5107,
                                    "end": 5110
                                  }
                                ],
                                "start": 5106,
                                "end": 5111
                              },
                              "start": 5096,
                              "end": 5111
                            }
                          ],
                          "start": 5095,
                          "end": 5112
                        },
                        "start": 5092,
                        "end": 5112
                      }
                    ],
                    "start": 5067,
                    "end": 5113
                  },
                  "start": 5064,
                  "end": 5113
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IsEqual",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5118,
                    "end": 5125
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "GreaterThan",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5126,
                          "end": 5137
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "End",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5138,
                                "end": 5141
                              },
                              "typeArguments": null,
                              "start": 5138,
                              "end": 5141
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Start",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5143,
                                "end": 5148
                              },
                              "typeArguments": null,
                              "start": 5143,
                              "end": 5148
                            }
                          ],
                          "start": 5137,
                          "end": 5149
                        },
                        "start": 5126,
                        "end": 5149
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 5151,
                          "end": 5155
                        },
                        "start": 5151,
                        "end": 5155
                      }
                    ],
                    "start": 5125,
                    "end": 5156
                  },
                  "start": 5118,
                  "end": 5156
                }
              ],
              "start": 5059,
              "end": 5160
            },
            "start": 5056,
            "end": 5160
          },
          "extendsType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 5169,
              "end": 5173
            },
            "start": 5169,
            "end": 5173
          },
          "trueType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "HasNoStaticElements",
                "optional": false,
                "typeAnnotation": null,
                "start": 5179,
                "end": 5198
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array_",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5199,
                      "end": 5205
                    },
                    "typeArguments": null,
                    "start": 5199,
                    "end": 5205
                  }
                ],
                "start": 5198,
                "end": 5206
              },
              "start": 5179,
              "end": 5206
            },
            "extendsType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 5215,
                "end": 5219
              },
              "start": 5215,
              "end": 5219
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnknownLengthArraySlice",
                "optional": false,
                "typeAnnotation": null,
                "start": 5226,
                "end": 5249
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array_",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5250,
                      "end": 5256
                    },
                    "typeArguments": null,
                    "start": 5250,
                    "end": 5256
                  }
                ],
                "start": 5249,
                "end": 5257
              },
              "start": 5226,
              "end": 5257
            },
            "falseType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ArraySliceResult",
                "optional": false,
                "typeAnnotation": null,
                "start": 5264,
                "end": 5280
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array_",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5281,
                      "end": 5287
                    },
                    "typeArguments": null,
                    "start": 5281,
                    "end": 5287
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ArraySliceByPositiveIndex",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5289,
                      "end": 5314
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Array_",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5315,
                            "end": 5321
                          },
                          "typeArguments": null,
                          "start": 5315,
                          "end": 5321
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Start",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5323,
                            "end": 5328
                          },
                          "typeArguments": null,
                          "start": 5323,
                          "end": 5328
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "End",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5330,
                            "end": 5333
                          },
                          "typeArguments": null,
                          "start": 5330,
                          "end": 5333
                        }
                      ],
                      "start": 5314,
                      "end": 5334
                    },
                    "start": 5289,
                    "end": 5334
                  }
                ],
                "start": 5280,
                "end": 5335
              },
              "start": 5264,
              "end": 5335
            },
            "start": 5179,
            "end": 5335
          },
          "falseType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "UnknownLengthArraySlice",
              "optional": false,
              "typeAnnotation": null,
              "start": 5341,
              "end": 5364
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Array_",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5365,
                    "end": 5371
                  },
                  "typeArguments": null,
                  "start": 5365,
                  "end": 5371
                }
              ],
              "start": 5364,
              "end": 5372
            },
            "start": 5341,
            "end": 5372
          },
          "start": 5056,
          "end": 5372
        },
        "start": 4931,
        "end": 5372
      },
      "declare": false,
      "start": 4810,
      "end": 5373
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnknownLengthArraySlice",
        "optional": false,
        "typeAnnotation": null,
        "start": 5379,
        "end": 5402
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Array_",
              "optional": false,
              "typeAnnotation": null,
              "start": 5403,
              "end": 5409
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 5427,
                  "end": 5434
                },
                "start": 5427,
                "end": 5436
              },
              "start": 5418,
              "end": 5436
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5403,
            "end": 5436
          }
        ],
        "start": 5402,
        "end": 5437
      },
      "typeAnnotation": {
        "type": "TSAnyKeyword",
        "start": 5440,
        "end": 5443
      },
      "declare": false,
      "start": 5374,
      "end": 5444
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ArraySliceHelper",
        "optional": false,
        "typeAnnotation": null,
        "start": 5450,
        "end": 5466
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Array_",
              "optional": false,
              "typeAnnotation": null,
              "start": 5469,
              "end": 5475
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 5493,
                  "end": 5500
                },
                "start": 5493,
                "end": 5502
              },
              "start": 5484,
              "end": 5502
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5469,
            "end": 5502
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Start",
              "optional": false,
              "typeAnnotation": null,
              "start": 5505,
              "end": 5510
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 5519,
              "end": 5525
            },
            "default": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 5528,
                "end": 5529
              },
              "start": 5528,
              "end": 5529
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 5505,
            "end": 5529
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "End",
              "optional": false,
              "typeAnnotation": null,
              "start": 5532,
              "end": 5535
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 5544,
              "end": 5550
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MaxLength",
                "optional": false,
                "typeAnnotation": null,
                "start": 5553,
                "end": 5562
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array_",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5563,
                      "end": 5569
                    },
                    "typeArguments": null,
                    "start": 5563,
                    "end": 5569
                  }
                ],
                "start": 5562,
                "end": 5570
              },
              "start": 5553,
              "end": 5570
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 5532,
            "end": 5570
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "ArrayLength",
              "optional": false,
              "typeAnnotation": null,
              "start": 5573,
              "end": 5584
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 5593,
              "end": 5599
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MaxLength",
                "optional": false,
                "typeAnnotation": null,
                "start": 5602,
                "end": 5611
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array_",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5612,
                      "end": 5618
                    },
                    "typeArguments": null,
                    "start": 5612,
                    "end": 5618
                  }
                ],
                "start": 5611,
                "end": 5619
              },
              "start": 5602,
              "end": 5619
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 5573,
            "end": 5619
          }
        ],
        "start": 5466,
        "end": 5622
      },
      "typeAnnotation": {
        "type": "TSNeverKeyword",
        "start": 5625,
        "end": 5630
      },
      "declare": false,
      "start": 5445,
      "end": 5631
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ArraySliceByPositiveIndex",
        "optional": false,
        "typeAnnotation": null,
        "start": 5637,
        "end": 5662
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Array_",
              "optional": false,
              "typeAnnotation": null,
              "start": 5665,
              "end": 5671
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 5689,
                  "end": 5696
                },
                "start": 5689,
                "end": 5698
              },
              "start": 5680,
              "end": 5698
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5665,
            "end": 5698
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Start",
              "optional": false,
              "typeAnnotation": null,
              "start": 5701,
              "end": 5706
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 5715,
              "end": 5721
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5701,
            "end": 5721
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "End",
              "optional": false,
              "typeAnnotation": null,
              "start": 5724,
              "end": 5727
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 5736,
              "end": 5742
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5724,
            "end": 5742
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Result",
              "optional": false,
              "typeAnnotation": null,
              "start": 5745,
              "end": 5751
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 5760,
                "end": 5765
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
                        "name": "Array_",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5766,
                        "end": 5772
                      },
                      "typeArguments": null,
                      "start": 5766,
                      "end": 5772
                    },
                    "indexType": {
                      "type": "TSNumberKeyword",
                      "start": 5773,
                      "end": 5779
                    },
                    "start": 5766,
                    "end": 5780
                  }
                ],
                "start": 5765,
                "end": 5781
              },
              "start": 5760,
              "end": 5781
            },
            "default": {
              "type": "TSTupleType",
              "elementTypes": [],
              "start": 5784,
              "end": 5786
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 5745,
            "end": 5786
          }
        ],
        "start": 5662,
        "end": 5789
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Start",
            "optional": false,
            "typeAnnotation": null,
            "start": 5792,
            "end": 5797
          },
          "typeArguments": null,
          "start": 5792,
          "end": 5797
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "End",
            "optional": false,
            "typeAnnotation": null,
            "start": 5806,
            "end": 5809
          },
          "typeArguments": null,
          "start": 5806,
          "end": 5809
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Result",
            "optional": false,
            "typeAnnotation": null,
            "start": 5813,
            "end": 5819
          },
          "typeArguments": null,
          "start": 5813,
          "end": 5819
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ArraySliceByPositiveIndex",
            "optional": false,
            "typeAnnotation": null,
            "start": 5823,
            "end": 5848
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array_",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5849,
                  "end": 5855
                },
                "typeArguments": null,
                "start": 5849,
                "end": 5855
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Sum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5857,
                  "end": 5860
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Start",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5861,
                        "end": 5866
                      },
                      "typeArguments": null,
                      "start": 5861,
                      "end": 5866
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 5868,
                        "end": 5869
                      },
                      "start": 5868,
                      "end": 5869
                    }
                  ],
                  "start": 5860,
                  "end": 5870
                },
                "start": 5857,
                "end": 5870
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "End",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5872,
                  "end": 5875
                },
                "typeArguments": null,
                "start": 5872,
                "end": 5875
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
                        "name": "Result",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5881,
                        "end": 5887
                      },
                      "typeArguments": null,
                      "start": 5881,
                      "end": 5887
                    },
                    "start": 5878,
                    "end": 5887
                  },
                  {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Array_",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5889,
                        "end": 5895
                      },
                      "typeArguments": null,
                      "start": 5889,
                      "end": 5895
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Start",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5896,
                        "end": 5901
                      },
                      "typeArguments": null,
                      "start": 5896,
                      "end": 5901
                    },
                    "start": 5889,
                    "end": 5902
                  }
                ],
                "start": 5877,
                "end": 5903
              }
            ],
            "start": 5848,
            "end": 5904
          },
          "start": 5823,
          "end": 5904
        },
        "start": 5792,
        "end": 5904
      },
      "declare": false,
      "start": 5632,
      "end": 5905
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 5906
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 7,
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
    "value": "ArraySlice",
    "start": 13,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 26,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 34,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 40,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 45,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 52,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 60,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "IsNever",
    "start": 65,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 80,
    "end": 81
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 82,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 91,
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
    "value": "?",
    "start": 98,
    "end": 99
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 100,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 105,
    "end": 106
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 107,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 114,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "IsEqual",
    "start": 119,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "B",
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
    "value": "=",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 138,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 140,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 158,
    "end": 159
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 160,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "_IsEqual",
    "start": 177,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 195,
    "end": 196
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 197,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 205,
    "end": 206
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 207,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 214,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "_IsEqual",
    "start": 219,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 236,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 243,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "Primitive",
    "start": 248,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 261,
    "end": 262
  },
  {
    "type": "Null",
    "value": "null",
    "start": 263,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 271,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 284,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 294,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 304,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 315,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 325,
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
    "value": "UnknownArray",
    "start": 338,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 353,
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
    "value": "IfNotAnyOrNever",
    "start": 363,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "Cases",
    "start": 382,
    "end": 387
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 388,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "ifNot",
    "start": 397,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 404,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "ifAny",
    "start": 413,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 421,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "ifNever",
    "start": 430,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 440,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "IsNever",
    "start": 453,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 462,
    "end": 463
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 464,
    "end": 471
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 472,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 480,
    "end": 481
  },
  {
    "type": "String",
    "value": "'ifNever'",
    "start": 482,
    "end": 491
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 492,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 500,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "Cases",
    "start": 506,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "Cases",
    "start": 518,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 523,
    "end": 524
  },
  {
    "type": "String",
    "value": "'ifNever'",
    "start": 524,
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
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 541,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 550,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "Cases",
    "start": 552,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 557,
    "end": 558
  },
  {
    "type": "String",
    "value": "'ifNot'",
    "start": 558,
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
    "value": ";",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 568,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "And",
    "start": 573,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 577,
    "end": 578
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 579,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 587,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 596,
    "end": 597
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 598,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 606,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 618,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 620,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "Not",
    "start": 625,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 628,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 629,
    "end": 630
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 631,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 639,
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
    "value": "=",
    "start": 648,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 650,
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
    "value": "MaxLength",
    "start": 660,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "Array_",
    "start": 670,
    "end": 676
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 677,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "UnknownArray",
    "start": 685,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 699,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 701,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 706,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 708,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "HasNoStaticElements",
    "start": 713,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 732,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "Array_",
    "start": 733,
    "end": 739
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 740,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "UnknownArray",
    "start": 748,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 762,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 764,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 771,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 773,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "CollapseLiterals",
    "start": 778,
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
    "value": "Union",
    "start": 795,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 802,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "Union",
    "start": 804,
    "end": 809
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 810,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "Primitive",
    "start": 818,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 829,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "Union",
    "start": 831,
    "end": 836
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 837,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 845,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "Collapsed",
    "start": 851,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 868,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "Collapsed",
    "start": 870,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 882,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "Union",
    "start": 884,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 891,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "Union",
    "start": 893,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 898,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 900,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "PositiveNumericStringGt",
    "start": 905,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 928,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 929,
    "end": 930
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 931,
    "end": 938
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 939,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 945,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "B",
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
    "value": "string",
    "start": 957,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 965,
    "end": 966
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 967,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 968,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 970,
    "end": 974
  },
  {
    "type": "Identifier",
    "value": "Absolute",
    "start": 975,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 983,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 984,
    "end": 985
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 986,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 994,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 1003,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Identifier",
    "value": "_Absolute",
    "start": 1013,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1025,
    "end": 1032
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 1033,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Identifier",
    "value": "UnwrapBrand",
    "start": 1042,
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
    "value": "N",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1063,
    "end": 1067
  },
  {
    "type": "Identifier",
    "value": "_Absolute",
    "start": 1068,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1080,
    "end": 1087
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1088,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 1097,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1109,
    "end": 1116
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 1117,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1127,
    "end": 1130
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1131,
    "end": 1133
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1134,
    "end": 1141
  },
  {
    "type": "Template",
    "value": "`-${",
    "start": 1142,
    "end": 1146
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1146,
    "end": 1151
  },
  {
    "type": "Identifier",
    "value": "Magnitude",
    "start": 1152,
    "end": 1161
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1162,
    "end": 1169
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 1170,
    "end": 1176
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1176,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Identifier",
    "value": "Magnitude",
    "start": 1183,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1202,
    "end": 1205
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1206,
    "end": 1208
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1209,
    "end": 1216
  },
  {
    "type": "Template",
    "value": "`-${",
    "start": 1217,
    "end": 1221
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1221,
    "end": 1226
  },
  {
    "type": "Identifier",
    "value": "Magnitude",
    "start": 1227,
    "end": 1236
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1237,
    "end": 1244
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1245,
    "end": 1251
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1251,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Identifier",
    "value": "Magnitude",
    "start": 1258,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1272,
    "end": 1275
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1276,
    "end": 1278
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1279,
    "end": 1286
  },
  {
    "type": "String",
    "value": "'-Infinity'",
    "start": 1287,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Identifier",
    "value": "PositiveInfinity",
    "start": 1304,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1326,
    "end": 1329
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1329,
    "end": 1335
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1335,
    "end": 1337
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1338,
    "end": 1345
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1346,
    "end": 1349
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1350,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1355,
    "end": 1361
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1367,
    "end": 1371
  },
  {
    "type": "Identifier",
    "value": "GreaterThan",
    "start": 1372,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1386,
    "end": 1393
  },
  {
    "type": "Identifier",
    "value": "_Numeric",
    "start": 1394,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1406,
    "end": 1413
  },
  {
    "type": "Identifier",
    "value": "_Numeric",
    "start": 1414,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Identifier",
    "value": "_GreaterThan",
    "start": 1427,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1442,
    "end": 1449
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 1450,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Identifier",
    "value": "UnwrapBrand",
    "start": 1459,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1481,
    "end": 1488
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 1489,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Identifier",
    "value": "UnwrapBrand",
    "start": 1498,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1516,
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
    "value": "_GreaterThan",
    "start": 1524,
    "end": 1536
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1539,
    "end": 1546
  },
  {
    "type": "Identifier",
    "value": "_Numeric",
    "start": 1547,
    "end": 1555
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1559,
    "end": 1566
  },
  {
    "type": "Identifier",
    "value": "_Numeric",
    "start": 1567,
    "end": 1575
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1582,
    "end": 1589
  },
  {
    "type": "Identifier",
    "value": "_Numeric",
    "start": 1590,
    "end": 1598
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1605,
    "end": 1612
  },
  {
    "type": "Identifier",
    "value": "_Numeric",
    "start": 1613,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1627,
    "end": 1630
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1630,
    "end": 1636
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1636,
    "end": 1638
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1639,
    "end": 1646
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 1647,
    "end": 1650
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1654,
    "end": 1655
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 1655,
    "end": 1657
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1664,
    "end": 1671
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 1678,
    "end": 1684
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1685,
    "end": 1692
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1697,
    "end": 1698
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1706,
    "end": 1713
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1721,
    "end": 1722
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1723,
    "end": 1730
  },
  {
    "type": "Identifier",
    "value": "PositiveInfinity",
    "start": 1731,
    "end": 1747
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1757,
    "end": 1758
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1759,
    "end": 1766
  },
  {
    "type": "Identifier",
    "value": "PositiveInfinity",
    "start": 1767,
    "end": 1783
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1784,
    "end": 1785
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1786,
    "end": 1791
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1792,
    "end": 1793
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1794,
    "end": 1798
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1806,
    "end": 1807
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1810,
    "end": 1817
  },
  {
    "type": "Identifier",
    "value": "NegativeInfinity",
    "start": 1818,
    "end": 1834
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1847,
    "end": 1854
  },
  {
    "type": "Identifier",
    "value": "NegativeInfinity",
    "start": 1855,
    "end": 1871
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1874,
    "end": 1879
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1880,
    "end": 1881
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1882,
    "end": 1886
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1895,
    "end": 1896
  },
  {
    "type": "Identifier",
    "value": "A",
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
    "value": "NegativeInfinity",
    "start": 1907,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1935,
    "end": 1940
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1950,
    "end": 1951
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1952,
    "end": 1953
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1954,
    "end": 1961
  },
  {
    "type": "Identifier",
    "value": "PositiveInfinity",
    "start": 1962,
    "end": 1978
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1989,
    "end": 1990
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1991,
    "end": 1996
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2009,
    "end": 2010
  },
  {
    "type": "Identifier",
    "value": "IsNegative",
    "start": 2010,
    "end": 2020
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2020,
    "end": 2021
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2021,
    "end": 2022
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2022,
    "end": 2023
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2023,
    "end": 2024
  },
  {
    "type": "Identifier",
    "value": "IsNegative",
    "start": 2025,
    "end": 2035
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2035,
    "end": 2036
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2036,
    "end": 2037
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2037,
    "end": 2038
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2038,
    "end": 2039
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2040,
    "end": 2047
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2048,
    "end": 2053
  },
  {
    "type": "Identifier",
    "value": "Signs",
    "start": 2054,
    "end": 2059
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2060,
    "end": 2067
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2068,
    "end": 2069
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2069,
    "end": 2076
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2078,
    "end": 2085
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2085,
    "end": 2086
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2098,
    "end": 2099
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2100,
    "end": 2101
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2101,
    "end": 2105
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2105,
    "end": 2106
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2107,
    "end": 2112
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2112,
    "end": 2113
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2114,
    "end": 2121
  },
  {
    "type": "Identifier",
    "value": "Signs",
    "start": 2122,
    "end": 2127
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2140,
    "end": 2141
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2142,
    "end": 2147
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2160,
    "end": 2161
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2162,
    "end": 2163
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2163,
    "end": 2168
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2168,
    "end": 2169
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2170,
    "end": 2174
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2174,
    "end": 2175
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2176,
    "end": 2183
  },
  {
    "type": "Identifier",
    "value": "Signs",
    "start": 2184,
    "end": 2189
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2203,
    "end": 2204
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2205,
    "end": 2209
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2223,
    "end": 2224
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2225,
    "end": 2226
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2226,
    "end": 2231
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2231,
    "end": 2232
  },
  {
    "type": "Boolean",
    "value": "false",
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
    "type": "Keyword",
    "value": "extends",
    "start": 2240,
    "end": 2247
  },
  {
    "type": "Identifier",
    "value": "Signs",
    "start": 2248,
    "end": 2253
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2268,
    "end": 2269
  },
  {
    "type": "Identifier",
    "value": "PositiveNumericStringGt",
    "start": 2270,
    "end": 2293
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2293,
    "end": 2294
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2294,
    "end": 2297
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2297,
    "end": 2298
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2298,
    "end": 2300
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2300,
    "end": 2301
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2302,
    "end": 2305
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2305,
    "end": 2306
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2306,
    "end": 2308
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2308,
    "end": 2309
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2324,
    "end": 2325
  },
  {
    "type": "Identifier",
    "value": "PositiveNumericStringGt",
    "start": 2326,
    "end": 2349
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2349,
    "end": 2350
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2350,
    "end": 2353
  },
  {
    "type": "Identifier",
    "value": "Absolute",
    "start": 2353,
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
    "value": "B",
    "start": 2362,
    "end": 2363
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2363,
    "end": 2364
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2364,
    "end": 2366
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2366,
    "end": 2367
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 2368,
    "end": 2371
  },
  {
    "type": "Identifier",
    "value": "Absolute",
    "start": 2371,
    "end": 2379
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2379,
    "end": 2380
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2380,
    "end": 2381
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2381,
    "end": 2382
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 2382,
    "end": 2384
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2384,
    "end": 2385
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2397,
    "end": 2398
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2399,
    "end": 2404
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2408,
    "end": 2409
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2410,
    "end": 2415
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2418,
    "end": 2419
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2420,
    "end": 2425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2425,
    "end": 2426
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2427,
    "end": 2431
  },
  {
    "type": "Identifier",
    "value": "IsReadonlyArray",
    "start": 2432,
    "end": 2447
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2447,
    "end": 2448
  },
  {
    "type": "Identifier",
    "value": "Array_",
    "start": 2448,
    "end": 2454
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2455,
    "end": 2462
  },
  {
    "type": "Identifier",
    "value": "UnknownArray",
    "start": 2463,
    "end": 2475
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2475,
    "end": 2476
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2477,
    "end": 2478
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2479,
    "end": 2484
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2484,
    "end": 2485
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2486,
    "end": 2490
  },
  {
    "type": "Identifier",
    "value": "UnionMember",
    "start": 2491,
    "end": 2502
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2502,
    "end": 2503
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2503,
    "end": 2504
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2504,
    "end": 2505
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2506,
    "end": 2507
  },
  {
    "type": "Identifier",
    "value": "IsNever",
    "start": 2509,
    "end": 2516
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2516,
    "end": 2517
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2517,
    "end": 2518
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2518,
    "end": 2519
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2520,
    "end": 2527
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2528,
    "end": 2532
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2535,
    "end": 2536
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2537,
    "end": 2542
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2545,
    "end": 2546
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2547,
    "end": 2548
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2548,
    "end": 2549
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2550,
    "end": 2557
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2558,
    "end": 2561
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2562,
    "end": 2563
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2564,
    "end": 2565
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2565,
    "end": 2566
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2567,
    "end": 2569
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2570,
    "end": 2571
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2572,
    "end": 2573
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2574,
    "end": 2579
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2579,
    "end": 2580
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2581,
    "end": 2588
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2589,
    "end": 2590
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2590,
    "end": 2591
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2592,
    "end": 2594
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2595,
    "end": 2596
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2596,
    "end": 2601
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 2602,
    "end": 2603
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2603,
    "end": 2604
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2608,
    "end": 2609
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 2610,
    "end": 2611
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2615,
    "end": 2616
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2617,
    "end": 2622
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2622,
    "end": 2623
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2624,
    "end": 2628
  },
  {
    "type": "Identifier",
    "value": "TagContainer",
    "start": 2629,
    "end": 2641
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2641,
    "end": 2642
  },
  {
    "type": "Identifier",
    "value": "Token",
    "start": 2642,
    "end": 2647
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2647,
    "end": 2648
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2649,
    "end": 2650
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2651,
    "end": 2652
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 2654,
    "end": 2662
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2663,
    "end": 2664
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 2664,
    "end": 2667
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2667,
    "end": 2668
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2668,
    "end": 2669
  },
  {
    "type": "Identifier",
    "value": "Token",
    "start": 2670,
    "end": 2675
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2675,
    "end": 2676
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2677,
    "end": 2678
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2678,
    "end": 2679
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2680,
    "end": 2684
  },
  {
    "type": "Identifier",
    "value": "Tag",
    "start": 2685,
    "end": 2688
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2688,
    "end": 2689
  },
  {
    "type": "Identifier",
    "value": "TagName",
    "start": 2689,
    "end": 2696
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2697,
    "end": 2704
  },
  {
    "type": "Identifier",
    "value": "PropertyKey",
    "start": 2705,
    "end": 2716
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2716,
    "end": 2717
  },
  {
    "type": "Identifier",
    "value": "TagMetadata",
    "start": 2718,
    "end": 2729
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2729,
    "end": 2730
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2731,
    "end": 2732
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2733,
    "end": 2740
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2740,
    "end": 2741
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2742,
    "end": 2746
  },
  {
    "type": "Identifier",
    "value": "RemoveAllTags",
    "start": 2747,
    "end": 2760
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2760,
    "end": 2761
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2761,
    "end": 2762
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2762,
    "end": 2763
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2764,
    "end": 2765
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2766,
    "end": 2767
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2768,
    "end": 2775
  },
  {
    "type": "Identifier",
    "value": "TagContainer",
    "start": 2776,
    "end": 2788
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2788,
    "end": 2789
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2789,
    "end": 2792
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2792,
    "end": 2793
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2795,
    "end": 2796
  },
  {
    "type": "Identifier",
    "value": "RemoveAllTags",
    "start": 2797,
    "end": 2810
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2810,
    "end": 2811
  },
  {
    "type": "Identifier",
    "value": "UnionMember",
    "start": 2811,
    "end": 2822
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2822,
    "end": 2823
  },
  {
    "type": "Identifier",
    "value": "RemoveTag",
    "start": 2823,
    "end": 2832
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2832,
    "end": 2833
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2833,
    "end": 2834
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2834,
    "end": 2835
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2835,
    "end": 2836
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2836,
    "end": 2837
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2839,
    "end": 2840
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Identifier",
    "value": "type",
    "start": 2844,
    "end": 2848
  },
  {
    "type": "Identifier",
    "value": "RemoveTag",
    "start": 2849,
    "end": 2858
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2858,
    "end": 2859
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2859,
    "end": 2860
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2861,
    "end": 2868
  },
  {
    "type": "Identifier",
    "value": "TagContainer",
    "start": 2869,
    "end": 2881
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2881,
    "end": 2882
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2882,
    "end": 2889
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2889,
    "end": 2890
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2890,
    "end": 2891
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2892,
    "end": 2893
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2895,
    "end": 2896
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2897,
    "end": 2898
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2901,
    "end": 2902
  },
  {
    "type": "Identifier",
    "value": "ThisTag",
    "start": 2902,
    "end": 2909
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 2910,
    "end": 2912
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2913,
    "end": 2918
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2919,
    "end": 2920
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2920,
    "end": 2921
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2921,
    "end": 2927
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 2928,
    "end": 2931
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2931,
    "end": 2932
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2932,
    "end": 2933
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2933,
    "end": 2934
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2935,
    "end": 2936
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2937,
    "end": 2944
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 2945,
    "end": 2950
  },
  {
    "type": "Identifier",
    "value": "Underlying",
    "start": 2951,
    "end": 2961
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2962,
    "end": 2963
  },
  {
    "type": "Identifier",
    "value": "Tag",
    "start": 2964,
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
    "value": "ThisTag",
    "start": 2968,
    "end": 2975
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2975,
    "end": 2976
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2977,
    "end": 2978
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2978,
    "end": 2979
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2979,
    "end": 2985
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 2986,
    "end": 2989
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2989,
    "end": 2990
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2990,
    "end": 2991
  },
  {
    "type": "Identifier",
    "value": "ThisTag",
    "start": 2991,
    "end": 2998
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2998,
    "end": 2999
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2999,
    "end": 3000
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3004,
    "end": 3005
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3006,
    "end": 3007
  },
  {
    "type": "Identifier",
    "value": "Underlying",
    "start": 3007,
    "end": 3017
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3017,
    "end": 3018
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3019,
    "end": 3026
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3027,
    "end": 3028
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3028,
    "end": 3029
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3029,
    "end": 3030
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3031,
    "end": 3032
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3033,
    "end": 3038
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3039,
    "end": 3040
  },
  {
    "type": "Identifier",
    "value": "Underlying",
    "start": 3041,
    "end": 3051
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3055,
    "end": 3056
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3057,
    "end": 3062
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3064,
    "end": 3065
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3065,
    "end": 3066
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3066,
    "end": 3071
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3072,
    "end": 3073
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3073,
    "end": 3074
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3074,
    "end": 3080
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 3081,
    "end": 3084
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3084,
    "end": 3085
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3085,
    "end": 3086
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3088,
    "end": 3089
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3090,
    "end": 3091
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3091,
    "end": 3092
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3093,
    "end": 3100
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 3101,
    "end": 3106
  },
  {
    "type": "Identifier",
    "value": "Underlying",
    "start": 3107,
    "end": 3117
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 3118,
    "end": 3119
  },
  {
    "type": "Identifier",
    "value": "TagContainer",
    "start": 3120,
    "end": 3132
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3132,
    "end": 3133
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3133,
    "end": 3134
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3134,
    "end": 3135
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3135,
    "end": 3141
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 3142,
    "end": 3145
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3145,
    "end": 3146
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3146,
    "end": 3147
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3150,
    "end": 3151
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3152,
    "end": 3153
  },
  {
    "type": "Identifier",
    "value": "Underlying",
    "start": 3153,
    "end": 3163
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3163,
    "end": 3164
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3165,
    "end": 3172
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3173,
    "end": 3174
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3174,
    "end": 3175
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3175,
    "end": 3176
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3177,
    "end": 3178
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3179,
    "end": 3184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3185,
    "end": 3186
  },
  {
    "type": "Identifier",
    "value": "Underlying",
    "start": 3187,
    "end": 3197
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3200,
    "end": 3201
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3202,
    "end": 3207
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3207,
    "end": 3208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3208,
    "end": 3209
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3210,
    "end": 3214
  },
  {
    "type": "Identifier",
    "value": "UnwrapBrand",
    "start": 3215,
    "end": 3226
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3226,
    "end": 3227
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3227,
    "end": 3228
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3228,
    "end": 3229
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3230,
    "end": 3231
  },
  {
    "type": "Identifier",
    "value": "IfNotAnyOrNever",
    "start": 3232,
    "end": 3247
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3247,
    "end": 3248
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3248,
    "end": 3249
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3249,
    "end": 3250
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3251,
    "end": 3252
  },
  {
    "type": "Identifier",
    "value": "ifNot",
    "start": 3252,
    "end": 3257
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3257,
    "end": 3258
  },
  {
    "type": "Identifier",
    "value": "_UnwrapBrand",
    "start": 3259,
    "end": 3271
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3271,
    "end": 3272
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3272,
    "end": 3273
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3273,
    "end": 3274
  },
  {
    "type": "Identifier",
    "value": "Primitive",
    "start": 3275,
    "end": 3284
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3284,
    "end": 3285
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3285,
    "end": 3286
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3286,
    "end": 3287
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3287,
    "end": 3288
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3289,
    "end": 3293
  },
  {
    "type": "Identifier",
    "value": "_UnwrapBrand",
    "start": 3294,
    "end": 3306
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3306,
    "end": 3307
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3307,
    "end": 3308
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3308,
    "end": 3309
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 3310,
    "end": 3314
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3314,
    "end": 3315
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3316,
    "end": 3317
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3318,
    "end": 3319
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3320,
    "end": 3327
  },
  {
    "type": "Identifier",
    "value": "Primitive",
    "start": 3328,
    "end": 3337
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3339,
    "end": 3340
  },
  {
    "type": "Identifier",
    "value": "CollapseLiterals",
    "start": 3341,
    "end": 3357
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3357,
    "end": 3358
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3358,
    "end": 3359
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3360,
    "end": 3367
  },
  {
    "type": "Identifier",
    "value": "TagContainer",
    "start": 3368,
    "end": 3380
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3380,
    "end": 3381
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 3381,
    "end": 3388
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3388,
    "end": 3389
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3390,
    "end": 3391
  },
  {
    "type": "Identifier",
    "value": "RemoveAllTags",
    "start": 3392,
    "end": 3405
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3405,
    "end": 3406
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3406,
    "end": 3407
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3407,
    "end": 3408
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3409,
    "end": 3410
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3411,
    "end": 3412
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3412,
    "end": 3413
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3415,
    "end": 3416
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3417,
    "end": 3418
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3418,
    "end": 3419
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3420,
    "end": 3424
  },
  {
    "type": "Identifier",
    "value": "_Numeric",
    "start": 3425,
    "end": 3433
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3434,
    "end": 3435
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3436,
    "end": 3442
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3443,
    "end": 3444
  },
  {
    "type": "Identifier",
    "value": "bigint",
    "start": 3445,
    "end": 3451
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3451,
    "end": 3452
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3453,
    "end": 3457
  },
  {
    "type": "Identifier",
    "value": "PositiveInfinity",
    "start": 3458,
    "end": 3474
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3475,
    "end": 3476
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 3477,
    "end": 3484
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3484,
    "end": 3485
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3486,
    "end": 3490
  },
  {
    "type": "Identifier",
    "value": "NegativeInfinity",
    "start": 3491,
    "end": 3507
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3508,
    "end": 3509
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3510,
    "end": 3515
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3515,
    "end": 3516
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3517,
    "end": 3521
  },
  {
    "type": "Identifier",
    "value": "IsNegative",
    "start": 3522,
    "end": 3532
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3532,
    "end": 3533
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3533,
    "end": 3534
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3535,
    "end": 3542
  },
  {
    "type": "Identifier",
    "value": "_Numeric",
    "start": 3543,
    "end": 3551
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3551,
    "end": 3552
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3553,
    "end": 3554
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3555,
    "end": 3560
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3560,
    "end": 3561
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3562,
    "end": 3566
  },
  {
    "type": "Identifier",
    "value": "Sum",
    "start": 3567,
    "end": 3570
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3570,
    "end": 3571
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 3571,
    "end": 3572
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3573,
    "end": 3580
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3581,
    "end": 3587
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3587,
    "end": 3588
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 3589,
    "end": 3590
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3591,
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
    "value": ">",
    "start": 3605,
    "end": 3606
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3607,
    "end": 3608
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3609,
    "end": 3612
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3612,
    "end": 3613
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3614,
    "end": 3618
  },
  {
    "type": "Identifier",
    "value": "LessThanOrEqual",
    "start": 3619,
    "end": 3634
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3634,
    "end": 3635
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 3635,
    "end": 3636
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3637,
    "end": 3644
  },
  {
    "type": "Identifier",
    "value": "_Numeric",
    "start": 3645,
    "end": 3653
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3653,
    "end": 3654
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 3655,
    "end": 3656
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3657,
    "end": 3664
  },
  {
    "type": "Identifier",
    "value": "_Numeric",
    "start": 3665,
    "end": 3673
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3673,
    "end": 3674
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3675,
    "end": 3676
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 3677,
    "end": 3684
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3684,
    "end": 3685
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3686,
    "end": 3690
  },
  {
    "type": "Identifier",
    "value": "ArraySlice",
    "start": 3691,
    "end": 3701
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3701,
    "end": 3702
  },
  {
    "type": "Identifier",
    "value": "Array_",
    "start": 3704,
    "end": 3710
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3711,
    "end": 3718
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 3719,
    "end": 3727
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 3728,
    "end": 3735
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3735,
    "end": 3736
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3736,
    "end": 3737
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3737,
    "end": 3738
  },
  {
    "type": "Identifier",
    "value": "Start",
    "start": 3740,
    "end": 3745
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3746,
    "end": 3753
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3754,
    "end": 3760
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3761,
    "end": 3762
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3763,
    "end": 3768
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3768,
    "end": 3769
  },
  {
    "type": "Identifier",
    "value": "End",
    "start": 3771,
    "end": 3774
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3775,
    "end": 3782
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3783,
    "end": 3789
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3790,
    "end": 3791
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 3792,
    "end": 3797
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3797,
    "end": 3798
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3799,
    "end": 3800
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3801,
    "end": 3802
  },
  {
    "type": "Identifier",
    "value": "ArraySliceImplementation",
    "start": 3803,
    "end": 3827
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3827,
    "end": 3828
  },
  {
    "type": "Identifier",
    "value": "Array_",
    "start": 3828,
    "end": 3834
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3834,
    "end": 3835
  },
  {
    "type": "Identifier",
    "value": "Start",
    "start": 3836,
    "end": 3841
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3842,
    "end": 3849
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 3850,
    "end": 3856
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3857,
    "end": 3858
  },
  {
    "type": "Identifier",
    "value": "UnwrapBrand",
    "start": 3859,
    "end": 3870
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3870,
    "end": 3871
  },
  {
    "type": "Identifier",
    "value": "Start",
    "start": 3871,
    "end": 3876
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3876,
    "end": 3877
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3878,
    "end": 3879
  },
  {
    "type": "Identifier",
    "value": "Start",
    "start": 3880,
    "end": 3885
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3885,
    "end": 3886
  },
  {
    "type": "Identifier",
    "value": "End",
    "start": 3887,
    "end": 3890
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3890,
    "end": 3891
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3891,
    "end": 3892
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3893,
    "end": 3897
  },
  {
    "type": "Identifier",
    "value": "ArraySliceImplementation",
    "start": 3898,
    "end": 3922
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3922,
    "end": 3923
  },
  {
    "type": "Identifier",
    "value": "Array_",
    "start": 3925,
    "end": 3931
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3932,
    "end": 3939
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 3940,
    "end": 3948
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 3949,
    "end": 3956
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3956,
    "end": 3957
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3957,
    "end": 3958
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3958,
    "end": 3959
  },
  {
    "type": "Identifier",
    "value": "Start",
    "start": 3961,
    "end": 3966
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3967,
    "end": 3974
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3975,
    "end": 3981
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3981,
    "end": 3982
  },
  {
    "type": "Identifier",
    "value": "End",
    "start": 3984,
    "end": 3987
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3988,
    "end": 3995
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3996,
    "end": 4002
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4002,
    "end": 4003
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4004,
    "end": 4005
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4006,
    "end": 4007
  },
  {
    "type": "Identifier",
    "value": "Array_",
    "start": 4008,
    "end": 4014
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4015,
    "end": 4022
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 4023,
    "end": 4030
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4031,
    "end": 4032
  },
  {
    "type": "Identifier",
    "value": "_ArraySlice",
    "start": 4033,
    "end": 4044
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4044,
    "end": 4045
  },
  {
    "type": "Identifier",
    "value": "Array_",
    "start": 4045,
    "end": 4051
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4051,
    "end": 4052
  },
  {
    "type": "Identifier",
    "value": "Start",
    "start": 4053,
    "end": 4058
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4058,
    "end": 4059
  },
  {
    "type": "Identifier",
    "value": "End",
    "start": 4060,
    "end": 4063
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4063,
    "end": 4064
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4065,
    "end": 4066
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4067,
    "end": 4072
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4072,
    "end": 4073
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4074,
    "end": 4078
  },
  {
    "type": "Identifier",
    "value": "_ArraySlice",
    "start": 4079,
    "end": 4090
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4090,
    "end": 4091
  },
  {
    "type": "Identifier",
    "value": "Array_",
    "start": 4093,
    "end": 4099
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4100,
    "end": 4107
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 4108,
    "end": 4116
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 4117,
    "end": 4124
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4124,
    "end": 4125
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4125,
    "end": 4126
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4126,
    "end": 4127
  },
  {
    "type": "Identifier",
    "value": "Start",
    "start": 4129,
    "end": 4134
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4135,
    "end": 4142
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4143,
    "end": 4149
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4150,
    "end": 4151
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4152,
    "end": 4153
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4153,
    "end": 4154
  },
  {
    "type": "Identifier",
    "value": "End",
    "start": 4156,
    "end": 4159
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4160,
    "end": 4167
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4168,
    "end": 4174
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4175,
    "end": 4176
  },
  {
    "type": "Identifier",
    "value": "Array_",
    "start": 4177,
    "end": 4183
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4183,
    "end": 4184
  },
  {
    "type": "String",
    "value": "'length'",
    "start": 4184,
    "end": 4192
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4192,
    "end": 4193
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4193,
    "end": 4194
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4195,
    "end": 4196
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4197,
    "end": 4198
  },
  {
    "type": "Identifier",
    "value": "And",
    "start": 4199,
    "end": 4202
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4202,
    "end": 4203
  },
  {
    "type": "Identifier",
    "value": "IsEqual",
    "start": 4203,
    "end": 4210
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4210,
    "end": 4211
  },
  {
    "type": "Identifier",
    "value": "Start",
    "start": 4211,
    "end": 4216
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4216,
    "end": 4217
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4218,
    "end": 4223
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4223,
    "end": 4224
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4224,
    "end": 4225
  },
  {
    "type": "Identifier",
    "value": "IsEqual",
    "start": 4226,
    "end": 4233
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4233,
    "end": 4234
  },
  {
    "type": "Identifier",
    "value": "End",
    "start": 4234,
    "end": 4237
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4237,
    "end": 4238
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4239,
    "end": 4244
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4244,
    "end": 4245
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4245,
    "end": 4246
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4247,
    "end": 4254
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 4255,
    "end": 4259
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4261,
    "end": 4262
  },
  {
    "type": "Identifier",
    "value": "Array_",
    "start": 4263,
    "end": 4269
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4271,
    "end": 4272
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4273,
    "end": 4279
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4280,
    "end": 4287
  },
  {
    "type": "Identifier",
    "value": "Array_",
    "start": 4288,
    "end": 4294
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4294,
    "end": 4295
  },
  {
    "type": "String",
    "value": "'length'",
    "start": 4295,
    "end": 4303
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4303,
    "end": 4304
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4307,
    "end": 4308
  },
  {
    "type": "Identifier",
    "value": "VariableLengthArraySliceHelper",
    "start": 4309,
    "end": 4339
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4339,
    "end": 4340
  },
  {
    "type": "Identifier",
    "value": "Array_",
    "start": 4340,
    "end": 4346
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4346,
    "end": 4347
  },
  {
    "type": "Identifier",
    "value": "IsNever",
    "start": 4348,
    "end": 4355
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4355,
    "end": 4356
  },
  {
    "type": "Identifier",
    "value": "Start",
    "start": 4356,
    "end": 4361
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4361,
    "end": 4362
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4363,
    "end": 4370
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 4371,
    "end": 4375
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4376,
    "end": 4377
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4378,
    "end": 4379
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4380,
    "end": 4381
  },
  {
    "type": "Identifier",
    "value": "Start",
    "start": 4382,
    "end": 4387
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4387,
    "end": 4388
  },
  {
    "type": "Identifier",
    "value": "End",
    "start": 4389,
    "end": 4392
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4393,
    "end": 4400
  },
  {
    "type": "Identifier",
    "value": "PositiveInfinity",
    "start": 4401,
    "end": 4417
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4418,
    "end": 4419
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4420,
    "end": 4425
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4426,
    "end": 4427
  },
  {
    "type": "Identifier",
    "value": "End",
    "start": 4428,
    "end": 4431
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4431,
    "end": 4432
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4435,
    "end": 4436
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 4437,
    "end": 4440
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4440,
    "end": 4446
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 4446,
    "end": 4448
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4449,
    "end": 4456
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 4457,
    "end": 4460
  },
  {
    "type": "Identifier",
    "value": "Start",
    "start": 4460,
    "end": 4465
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4466,
    "end": 4467
  },
  {
    "type": "Identifier",
    "value": "End",
    "start": 4468,
    "end": 4471
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 4471,
    "end": 4473
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4477,
    "end": 4478
  },
  {
    "type": "Identifier",
    "value": "UnknownLengthArraySlice",
    "start": 4479,
    "end": 4502
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4502,
    "end": 4503
  },
  {
    "type": "Identifier",
    "value": "Array_",
    "start": 4503,
    "end": 4509
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4509,
    "end": 4510
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4514,
    "end": 4515
  },
  {
    "type": "Identifier",
    "value": "ArraySliceResult",
    "start": 4516,
    "end": 4532
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4532,
    "end": 4533
  },
  {
    "type": "Identifier",
    "value": "Array_",
    "start": 4533,
    "end": 4539
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4539,
    "end": 4540
  },
  {
    "type": "Identifier",
    "value": "ArraySliceHelper",
    "start": 4541,
    "end": 4557
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4557,
    "end": 4558
  },
  {
    "type": "Identifier",
    "value": "Array_",
    "start": 4558,
    "end": 4564
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4564,
    "end": 4565
  },
  {
    "type": "Identifier",
    "value": "IsEqual",
    "start": 4566,
    "end": 4573
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4573,
    "end": 4574
  },
  {
    "type": "Identifier",
    "value": "Start",
    "start": 4574,
    "end": 4579
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4579,
    "end": 4580
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4581,
    "end": 4586
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4586,
    "end": 4587
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4588,
    "end": 4595
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 4596,
    "end": 4600
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4601,
    "end": 4602
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4603,
    "end": 4604
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4605,
    "end": 4606
  },
  {
    "type": "Identifier",
    "value": "Start",
    "start": 4607,
    "end": 4612
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4612,
    "end": 4613
  },
  {
    "type": "Identifier",
    "value": "IsEqual",
    "start": 4614,
    "end": 4621
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4621,
    "end": 4622
  },
  {
    "type": "Identifier",
    "value": "End",
    "start": 4622,
    "end": 4625
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4625,
    "end": 4626
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4627,
    "end": 4632
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4632,
    "end": 4633
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4634,
    "end": 4641
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 4642,
    "end": 4646
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4647,
    "end": 4648
  },
  {
    "type": "Identifier",
    "value": "MaxLength",
    "start": 4649,
    "end": 4658
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4658,
    "end": 4659
  },
  {
    "type": "Identifier",
    "value": "Array_",
    "start": 4659,
    "end": 4665
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4665,
    "end": 4666
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4667,
    "end": 4668
  },
  {
    "type": "Identifier",
    "value": "End",
    "start": 4669,
    "end": 4672
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4672,
    "end": 4673
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4673,
    "end": 4674
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4674,
    "end": 4675
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4676,
    "end": 4680
  },
  {
    "type": "Identifier",
    "value": "ArraySliceResult",
    "start": 4681,
    "end": 4697
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4697,
    "end": 4698
  },
  {
    "type": "Identifier",
    "value": "Array_",
    "start": 4698,
    "end": 4704
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4705,
    "end": 4712
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 4713,
    "end": 4721
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 4722,
    "end": 4729
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4729,
    "end": 4730
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4730,
    "end": 4731
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4731,
    "end": 4732
  },
  {
    "type": "Identifier",
    "value": "Sliced",
    "start": 4733,
    "end": 4739
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4739,
    "end": 4740
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4741,
    "end": 4742
  },
  {
    "type": "Identifier",
    "value": "IsReadonlyArray",
    "start": 4744,
    "end": 4759
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4759,
    "end": 4760
  },
  {
    "type": "Identifier",
    "value": "Array_",
    "start": 4760,
    "end": 4766
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4766,
    "end": 4767
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4768,
    "end": 4775
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 4776,
    "end": 4780
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4781,
    "end": 4782
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 4783,
    "end": 4791
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4791,
    "end": 4792
  },
  {
    "type": "Identifier",
    "value": "Sliced",
    "start": 4792,
    "end": 4798
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4798,
    "end": 4799
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4800,
    "end": 4801
  },
  {
    "type": "Identifier",
    "value": "Sliced",
    "start": 4802,
    "end": 4808
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4808,
    "end": 4809
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4810,
    "end": 4814
  },
  {
    "type": "Identifier",
    "value": "VariableLengthArraySliceHelper",
    "start": 4815,
    "end": 4845
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4845,
    "end": 4846
  },
  {
    "type": "Identifier",
    "value": "Array_",
    "start": 4848,
    "end": 4854
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4855,
    "end": 4862
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 4863,
    "end": 4871
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 4872,
    "end": 4879
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4879,
    "end": 4880
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4880,
    "end": 4881
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4881,
    "end": 4882
  },
  {
    "type": "Identifier",
    "value": "Start",
    "start": 4884,
    "end": 4889
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4890,
    "end": 4897
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4898,
    "end": 4904
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4904,
    "end": 4905
  },
  {
    "type": "Identifier",
    "value": "End",
    "start": 4907,
    "end": 4910
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4911,
    "end": 4918
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4919,
    "end": 4925
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4925,
    "end": 4926
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4927,
    "end": 4928
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4929,
    "end": 4930
  },
  {
    "type": "Identifier",
    "value": "And",
    "start": 4931,
    "end": 4934
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4934,
    "end": 4935
  },
  {
    "type": "Identifier",
    "value": "And",
    "start": 4937,
    "end": 4940
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4940,
    "end": 4941
  },
  {
    "type": "Identifier",
    "value": "Not",
    "start": 4941,
    "end": 4944
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4944,
    "end": 4945
  },
  {
    "type": "Identifier",
    "value": "IsNegative",
    "start": 4945,
    "end": 4955
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4955,
    "end": 4956
  },
  {
    "type": "Identifier",
    "value": "Start",
    "start": 4956,
    "end": 4961
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4961,
    "end": 4962
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4962,
    "end": 4963
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4963,
    "end": 4964
  },
  {
    "type": "Identifier",
    "value": "Not",
    "start": 4965,
    "end": 4968
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4968,
    "end": 4969
  },
  {
    "type": "Identifier",
    "value": "IsNegative",
    "start": 4969,
    "end": 4979
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4979,
    "end": 4980
  },
  {
    "type": "Identifier",
    "value": "End",
    "start": 4980,
    "end": 4983
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4983,
    "end": 4984
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4984,
    "end": 4985
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4985,
    "end": 4986
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4986,
    "end": 4987
  },
  {
    "type": "Identifier",
    "value": "IsEqual",
    "start": 4989,
    "end": 4996
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4996,
    "end": 4997
  },
  {
    "type": "Identifier",
    "value": "LessThanOrEqual",
    "start": 4997,
    "end": 5012
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5012,
    "end": 5013
  },
  {
    "type": "Identifier",
    "value": "End",
    "start": 5013,
    "end": 5016
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5016,
    "end": 5017
  },
  {
    "type": "Identifier",
    "value": "Start",
    "start": 5018,
    "end": 5023
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5023,
    "end": 5024
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5024,
    "end": 5025
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 5026,
    "end": 5030
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5030,
    "end": 5031
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5032,
    "end": 5033
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5034,
    "end": 5041
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 5042,
    "end": 5046
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5048,
    "end": 5049
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5050,
    "end": 5051
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5051,
    "end": 5052
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5054,
    "end": 5055
  },
  {
    "type": "Identifier",
    "value": "And",
    "start": 5056,
    "end": 5059
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5059,
    "end": 5060
  },
  {
    "type": "Identifier",
    "value": "And",
    "start": 5064,
    "end": 5067
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5067,
    "end": 5068
  },
  {
    "type": "Identifier",
    "value": "Not",
    "start": 5068,
    "end": 5071
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5071,
    "end": 5072
  },
  {
    "type": "Identifier",
    "value": "IsNegative",
    "start": 5072,
    "end": 5082
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5082,
    "end": 5083
  },
  {
    "type": "Identifier",
    "value": "Start",
    "start": 5083,
    "end": 5088
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5088,
    "end": 5089
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5089,
    "end": 5090
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5090,
    "end": 5091
  },
  {
    "type": "Identifier",
    "value": "Not",
    "start": 5092,
    "end": 5095
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5095,
    "end": 5096
  },
  {
    "type": "Identifier",
    "value": "IsNegative",
    "start": 5096,
    "end": 5106
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5106,
    "end": 5107
  },
  {
    "type": "Identifier",
    "value": "End",
    "start": 5107,
    "end": 5110
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5110,
    "end": 5111
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5111,
    "end": 5112
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5112,
    "end": 5113
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5113,
    "end": 5114
  },
  {
    "type": "Identifier",
    "value": "IsEqual",
    "start": 5118,
    "end": 5125
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5125,
    "end": 5126
  },
  {
    "type": "Identifier",
    "value": "GreaterThan",
    "start": 5126,
    "end": 5137
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5137,
    "end": 5138
  },
  {
    "type": "Identifier",
    "value": "End",
    "start": 5138,
    "end": 5141
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5141,
    "end": 5142
  },
  {
    "type": "Identifier",
    "value": "Start",
    "start": 5143,
    "end": 5148
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5148,
    "end": 5149
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5149,
    "end": 5150
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 5151,
    "end": 5155
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5155,
    "end": 5156
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5159,
    "end": 5160
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5161,
    "end": 5168
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 5169,
    "end": 5173
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5177,
    "end": 5178
  },
  {
    "type": "Identifier",
    "value": "HasNoStaticElements",
    "start": 5179,
    "end": 5198
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5198,
    "end": 5199
  },
  {
    "type": "Identifier",
    "value": "Array_",
    "start": 5199,
    "end": 5205
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5205,
    "end": 5206
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5207,
    "end": 5214
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 5215,
    "end": 5219
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5224,
    "end": 5225
  },
  {
    "type": "Identifier",
    "value": "UnknownLengthArraySlice",
    "start": 5226,
    "end": 5249
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5249,
    "end": 5250
  },
  {
    "type": "Identifier",
    "value": "Array_",
    "start": 5250,
    "end": 5256
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5256,
    "end": 5257
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5262,
    "end": 5263
  },
  {
    "type": "Identifier",
    "value": "ArraySliceResult",
    "start": 5264,
    "end": 5280
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5280,
    "end": 5281
  },
  {
    "type": "Identifier",
    "value": "Array_",
    "start": 5281,
    "end": 5287
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5287,
    "end": 5288
  },
  {
    "type": "Identifier",
    "value": "ArraySliceByPositiveIndex",
    "start": 5289,
    "end": 5314
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5314,
    "end": 5315
  },
  {
    "type": "Identifier",
    "value": "Array_",
    "start": 5315,
    "end": 5321
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5321,
    "end": 5322
  },
  {
    "type": "Identifier",
    "value": "Start",
    "start": 5323,
    "end": 5328
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5328,
    "end": 5329
  },
  {
    "type": "Identifier",
    "value": "End",
    "start": 5330,
    "end": 5333
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5333,
    "end": 5334
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5334,
    "end": 5335
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5339,
    "end": 5340
  },
  {
    "type": "Identifier",
    "value": "UnknownLengthArraySlice",
    "start": 5341,
    "end": 5364
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5364,
    "end": 5365
  },
  {
    "type": "Identifier",
    "value": "Array_",
    "start": 5365,
    "end": 5371
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5371,
    "end": 5372
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5372,
    "end": 5373
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5374,
    "end": 5378
  },
  {
    "type": "Identifier",
    "value": "UnknownLengthArraySlice",
    "start": 5379,
    "end": 5402
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5402,
    "end": 5403
  },
  {
    "type": "Identifier",
    "value": "Array_",
    "start": 5403,
    "end": 5409
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5410,
    "end": 5417
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 5418,
    "end": 5426
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 5427,
    "end": 5434
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5434,
    "end": 5435
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5435,
    "end": 5436
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5436,
    "end": 5437
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5438,
    "end": 5439
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 5440,
    "end": 5443
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5443,
    "end": 5444
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5445,
    "end": 5449
  },
  {
    "type": "Identifier",
    "value": "ArraySliceHelper",
    "start": 5450,
    "end": 5466
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5466,
    "end": 5467
  },
  {
    "type": "Identifier",
    "value": "Array_",
    "start": 5469,
    "end": 5475
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5476,
    "end": 5483
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 5484,
    "end": 5492
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 5493,
    "end": 5500
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5500,
    "end": 5501
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5501,
    "end": 5502
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5502,
    "end": 5503
  },
  {
    "type": "Identifier",
    "value": "Start",
    "start": 5505,
    "end": 5510
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5511,
    "end": 5518
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5519,
    "end": 5525
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5526,
    "end": 5527
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 5528,
    "end": 5529
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5529,
    "end": 5530
  },
  {
    "type": "Identifier",
    "value": "End",
    "start": 5532,
    "end": 5535
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5536,
    "end": 5543
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5544,
    "end": 5550
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5551,
    "end": 5552
  },
  {
    "type": "Identifier",
    "value": "MaxLength",
    "start": 5553,
    "end": 5562
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5562,
    "end": 5563
  },
  {
    "type": "Identifier",
    "value": "Array_",
    "start": 5563,
    "end": 5569
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5569,
    "end": 5570
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5570,
    "end": 5571
  },
  {
    "type": "Identifier",
    "value": "ArrayLength",
    "start": 5573,
    "end": 5584
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5585,
    "end": 5592
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5593,
    "end": 5599
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5600,
    "end": 5601
  },
  {
    "type": "Identifier",
    "value": "MaxLength",
    "start": 5602,
    "end": 5611
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5611,
    "end": 5612
  },
  {
    "type": "Identifier",
    "value": "Array_",
    "start": 5612,
    "end": 5618
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5618,
    "end": 5619
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5619,
    "end": 5620
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5621,
    "end": 5622
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5623,
    "end": 5624
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 5625,
    "end": 5630
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5630,
    "end": 5631
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5632,
    "end": 5636
  },
  {
    "type": "Identifier",
    "value": "ArraySliceByPositiveIndex",
    "start": 5637,
    "end": 5662
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5662,
    "end": 5663
  },
  {
    "type": "Identifier",
    "value": "Array_",
    "start": 5665,
    "end": 5671
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5672,
    "end": 5679
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 5680,
    "end": 5688
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 5689,
    "end": 5696
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5696,
    "end": 5697
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5697,
    "end": 5698
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5698,
    "end": 5699
  },
  {
    "type": "Identifier",
    "value": "Start",
    "start": 5701,
    "end": 5706
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5707,
    "end": 5714
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5715,
    "end": 5721
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5721,
    "end": 5722
  },
  {
    "type": "Identifier",
    "value": "End",
    "start": 5724,
    "end": 5727
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5728,
    "end": 5735
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5736,
    "end": 5742
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5742,
    "end": 5743
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 5745,
    "end": 5751
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5752,
    "end": 5759
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 5760,
    "end": 5765
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5765,
    "end": 5766
  },
  {
    "type": "Identifier",
    "value": "Array_",
    "start": 5766,
    "end": 5772
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5772,
    "end": 5773
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5773,
    "end": 5779
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5779,
    "end": 5780
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5780,
    "end": 5781
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5782,
    "end": 5783
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5784,
    "end": 5785
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5785,
    "end": 5786
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5786,
    "end": 5787
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5788,
    "end": 5789
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5790,
    "end": 5791
  },
  {
    "type": "Identifier",
    "value": "Start",
    "start": 5792,
    "end": 5797
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5798,
    "end": 5805
  },
  {
    "type": "Identifier",
    "value": "End",
    "start": 5806,
    "end": 5809
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5811,
    "end": 5812
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 5813,
    "end": 5819
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5821,
    "end": 5822
  },
  {
    "type": "Identifier",
    "value": "ArraySliceByPositiveIndex",
    "start": 5823,
    "end": 5848
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5848,
    "end": 5849
  },
  {
    "type": "Identifier",
    "value": "Array_",
    "start": 5849,
    "end": 5855
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5855,
    "end": 5856
  },
  {
    "type": "Identifier",
    "value": "Sum",
    "start": 5857,
    "end": 5860
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5860,
    "end": 5861
  },
  {
    "type": "Identifier",
    "value": "Start",
    "start": 5861,
    "end": 5866
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5866,
    "end": 5867
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5868,
    "end": 5869
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5869,
    "end": 5870
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5870,
    "end": 5871
  },
  {
    "type": "Identifier",
    "value": "End",
    "start": 5872,
    "end": 5875
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5875,
    "end": 5876
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5877,
    "end": 5878
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 5878,
    "end": 5881
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 5881,
    "end": 5887
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5887,
    "end": 5888
  },
  {
    "type": "Identifier",
    "value": "Array_",
    "start": 5889,
    "end": 5895
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5895,
    "end": 5896
  },
  {
    "type": "Identifier",
    "value": "Start",
    "start": 5896,
    "end": 5901
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5901,
    "end": 5902
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5902,
    "end": 5903
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5903,
    "end": 5904
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5904,
    "end": 5905
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
            "name": "ArraySlice",
            "optional": false,
            "typeAnnotation": null,
            "start": 593,
            "end": 603
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "ArraySlice",
            "optional": false,
            "typeAnnotation": null,
            "start": 593,
            "end": 603
          },
          "importKind": "value",
          "start": 593,
          "end": 603
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./arraySlice.d.ts",
        "raw": "'./arraySlice.d.ts'",
        "start": 610,
        "end": 629
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 580,
      "end": 630
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 648,
        "end": 649
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
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 650,
              "end": 655
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 650,
            "end": 655
          }
        ],
        "start": 649,
        "end": 656
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "values",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ArraySlice",
                "optional": false,
                "typeAnnotation": null,
                "start": 665,
                "end": 675
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeOperator",
                        "operator": "readonly",
                        "typeAnnotation": {
                          "type": "TSTupleType",
                          "elementTypes": [
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 686,
                                "end": 687
                              },
                              "start": 686,
                              "end": 687
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Value",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 689,
                                "end": 694
                              },
                              "typeArguments": null,
                              "start": 689,
                              "end": 694
                            }
                          ],
                          "start": 685,
                          "end": 695
                        },
                        "start": 676,
                        "end": 695
                      },
                      {
                        "type": "TSTypeOperator",
                        "operator": "readonly",
                        "typeAnnotation": {
                          "type": "TSTupleType",
                          "elementTypes": [
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 708,
                                "end": 709
                              },
                              "start": 708,
                              "end": 709
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Value",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 711,
                                "end": 716
                              },
                              "typeArguments": null,
                              "start": 711,
                              "end": 716
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Value",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 718,
                                "end": 723
                              },
                              "typeArguments": null,
                              "start": 718,
                              "end": 723
                            }
                          ],
                          "start": 707,
                          "end": 724
                        },
                        "start": 698,
                        "end": 724
                      }
                    ],
                    "start": 676,
                    "end": 724
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 726,
                      "end": 727
                    },
                    "start": 726,
                    "end": 727
                  }
                ],
                "start": 675,
                "end": 728
              },
              "start": 665,
              "end": 728
            },
            "start": 663,
            "end": 728
          },
          "start": 657,
          "end": 728
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 731,
          "end": 735
        },
        "start": 729,
        "end": 735
      },
      "body": null,
      "expression": false,
      "start": 631,
      "end": 736
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ArraySlice",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 754,
                  "end": 764
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeOperator",
                          "operator": "readonly",
                          "typeAnnotation": {
                            "type": "TSTupleType",
                            "elementTypes": [
                              {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0",
                                  "start": 775,
                                  "end": 776
                                },
                                "start": 775,
                                "end": 776
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
                                      "name": "id",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 779,
                                      "end": 781
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSLiteralType",
                                        "literal": {
                                          "type": "Literal",
                                          "value": "row",
                                          "raw": "'row'",
                                          "start": 783,
                                          "end": 788
                                        },
                                        "start": 783,
                                        "end": 788
                                      },
                                      "start": 781,
                                      "end": 788
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 779,
                                    "end": 788
                                  }
                                ],
                                "start": 778,
                                "end": 789
                              }
                            ],
                            "start": 774,
                            "end": 790
                          },
                          "start": 765,
                          "end": 790
                        },
                        {
                          "type": "TSTypeOperator",
                          "operator": "readonly",
                          "typeAnnotation": {
                            "type": "TSTupleType",
                            "elementTypes": [
                              {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0",
                                  "start": 803,
                                  "end": 804
                                },
                                "start": 803,
                                "end": 804
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
                                      "name": "id",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 807,
                                      "end": 809
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSLiteralType",
                                        "literal": {
                                          "type": "Literal",
                                          "value": "row",
                                          "raw": "'row'",
                                          "start": 811,
                                          "end": 816
                                        },
                                        "start": 811,
                                        "end": 816
                                      },
                                      "start": 809,
                                      "end": 816
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 807,
                                    "end": 816
                                  }
                                ],
                                "start": 806,
                                "end": 817
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
                                      "name": "id",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 820,
                                      "end": 822
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSLiteralType",
                                        "literal": {
                                          "type": "Literal",
                                          "value": "row",
                                          "raw": "'row'",
                                          "start": 824,
                                          "end": 829
                                        },
                                        "start": 824,
                                        "end": 829
                                      },
                                      "start": 822,
                                      "end": 829
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 820,
                                    "end": 829
                                  }
                                ],
                                "start": 819,
                                "end": 830
                              }
                            ],
                            "start": 802,
                            "end": 831
                          },
                          "start": 793,
                          "end": 831
                        }
                      ],
                      "start": 765,
                      "end": 831
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 833,
                        "end": 834
                      },
                      "start": 833,
                      "end": 834
                    }
                  ],
                  "start": 764,
                  "end": 835
                },
                "start": 754,
                "end": 835
              },
              "start": 752,
              "end": 835
            },
            "start": 751,
            "end": 835
          },
          "init": null,
          "definite": false,
          "start": 751,
          "end": 835
        }
      ],
      "declare": true,
      "start": 737,
      "end": 836
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 837,
          "end": 838
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 839,
            "end": 840
          }
        ],
        "optional": false,
        "start": 837,
        "end": 841
      },
      "directive": null,
      "start": 837,
      "end": 842
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 842
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 580,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 587,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "ArraySlice",
    "start": 593,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 605,
    "end": 609
  },
  {
    "type": "String",
    "value": "'./arraySlice.d.ts'",
    "start": 610,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 629,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 631,
    "end": 638
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 639,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 649,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 650,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 656,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 657,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "ArraySlice",
    "start": 665,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 675,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 676,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 685,
    "end": 686
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 689,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 696,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 698,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 707,
    "end": 708
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 709,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 711,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 716,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 718,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 724,
    "end": 725
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Keyword",
    "value": "void",
    "start": 731,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 737,
    "end": 744
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 745,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "ArraySlice",
    "start": 754,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 764,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 765,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 774,
    "end": 775
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 778,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 779,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 781,
    "end": 782
  },
  {
    "type": "String",
    "value": "'row'",
    "start": 783,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 791,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 793,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 802,
    "end": 803
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 804,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 806,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 807,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 809,
    "end": 810
  },
  {
    "type": "String",
    "value": "'row'",
    "start": 811,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 819,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 820,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 822,
    "end": 823
  },
  {
    "type": "String",
    "value": "'row'",
    "start": 824,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 831,
    "end": 832
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 835,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 837,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 838,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 840,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 841,
    "end": 842
  }
]
```
