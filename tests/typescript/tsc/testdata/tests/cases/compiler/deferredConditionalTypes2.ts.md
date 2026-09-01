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
        "name": "PositiveInfinity",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 78
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSLiteralType",
        "literal": {
          "type": "Literal",
          "value": 1e+400,
          "raw": "1e999",
          "start": 81,
          "end": 86
        },
        "start": 81,
        "end": 86
      },
      "declare": false,
      "start": 57,
      "end": 87
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NegativeInfinity",
        "optional": false,
        "typeAnnotation": null,
        "start": 93,
        "end": 109
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSLiteralType",
        "literal": {
          "type": "UnaryExpression",
          "operator": "-",
          "argument": {
            "type": "Literal",
            "value": 1e+400,
            "raw": "1e999",
            "start": 113,
            "end": 118
          },
          "prefix": true,
          "start": 112,
          "end": 118
        },
        "start": 112,
        "end": 118
      },
      "declare": false,
      "start": 88,
      "end": 119
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "IsEqual",
          "optional": false,
          "typeAnnotation": null,
          "start": 133,
          "end": 140
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
                "start": 141,
                "end": 142
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 141,
              "end": 142
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 144,
                "end": 145
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 144,
              "end": 145
            }
          ],
          "start": 140,
          "end": 146
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
                    "start": 151,
                    "end": 152
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 151,
                  "end": 152
                }
              ],
              "start": 150,
              "end": 153
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
                    "start": 159,
                    "end": 160
                  },
                  "typeArguments": null,
                  "start": 159,
                  "end": 160
                },
                "extendsType": {
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
                },
                "trueType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 173,
                    "end": 174
                  },
                  "start": 173,
                  "end": 174
                },
                "falseType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 177,
                    "end": 178
                  },
                  "start": 177,
                  "end": 178
                },
                "start": 159,
                "end": 178
              },
              "start": 156,
              "end": 178
            },
            "start": 150,
            "end": 178
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
                    "start": 192,
                    "end": 193
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 192,
                  "end": 193
                }
              ],
              "start": 188,
              "end": 196
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
                    "start": 202,
                    "end": 203
                  },
                  "typeArguments": null,
                  "start": 202,
                  "end": 203
                },
                "extendsType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 212,
                    "end": 213
                  },
                  "typeArguments": null,
                  "start": 212,
                  "end": 213
                },
                "trueType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 216,
                    "end": 217
                  },
                  "start": 216,
                  "end": 217
                },
                "falseType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 220,
                    "end": 221
                  },
                  "start": 220,
                  "end": 221
                },
                "start": 202,
                "end": 221
              },
              "start": 199,
              "end": 221
            },
            "start": 188,
            "end": 221
          },
          "trueType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 226,
              "end": 230
            },
            "start": 226,
            "end": 230
          },
          "falseType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 235,
              "end": 240
            },
            "start": 235,
            "end": 240
          },
          "start": 149,
          "end": 240
        },
        "declare": false,
        "start": 128,
        "end": 241
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 121,
      "end": 241
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Add",
          "optional": false,
          "typeAnnotation": null,
          "start": 255,
          "end": 258
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
                "start": 259,
                "end": 260
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 269,
                "end": 275
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 259,
              "end": 275
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 277,
                "end": 278
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 287,
                "end": 293
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 277,
              "end": 293
            }
          ],
          "start": 258,
          "end": 294
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
                  "name": "IsEqual",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 301,
                  "end": 308
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
                        "start": 309,
                        "end": 310
                      },
                      "typeArguments": null,
                      "start": 309,
                      "end": 310
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "PositiveInfinity",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 312,
                        "end": 328
                      },
                      "typeArguments": null,
                      "start": 312,
                      "end": 328
                    }
                  ],
                  "start": 308,
                  "end": 329
                },
                "start": 301,
                "end": 329
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IsEqual",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 333,
                  "end": 340
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
                        "start": 341,
                        "end": 342
                      },
                      "typeArguments": null,
                      "start": 341,
                      "end": 342
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NegativeInfinity",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 344,
                        "end": 360
                      },
                      "typeArguments": null,
                      "start": 344,
                      "end": 360
                    }
                  ],
                  "start": 340,
                  "end": 361
                },
                "start": 333,
                "end": 361
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IsEqual",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 365,
                  "end": 372
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
                        "start": 373,
                        "end": 374
                      },
                      "typeArguments": null,
                      "start": 373,
                      "end": 374
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "PositiveInfinity",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 376,
                        "end": 392
                      },
                      "typeArguments": null,
                      "start": 376,
                      "end": 392
                    }
                  ],
                  "start": 372,
                  "end": 393
                },
                "start": 365,
                "end": 393
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IsEqual",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 397,
                  "end": 404
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
                        "start": 405,
                        "end": 406
                      },
                      "typeArguments": null,
                      "start": 405,
                      "end": 406
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NegativeInfinity",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 408,
                        "end": 424
                      },
                      "typeArguments": null,
                      "start": 408,
                      "end": 424
                    }
                  ],
                  "start": 404,
                  "end": 425
                },
                "start": 397,
                "end": 425
              }
            ],
            "start": 297,
            "end": 428
          },
          "extendsType": {
            "type": "TSInferType",
            "typeParameter": {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "R",
                "optional": false,
                "typeAnnotation": null,
                "start": 443,
                "end": 444
              },
              "constraint": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 454,
                    "end": 461
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 463,
                    "end": 470
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 472,
                    "end": 479
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 481,
                    "end": 488
                  }
                ],
                "start": 453,
                "end": 489
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 443,
              "end": 489
            },
            "start": 437,
            "end": 489
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
                    "start": 495,
                    "end": 499
                  },
                  "start": 495,
                  "end": 499
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 501,
                    "end": 506
                  },
                  "start": 501,
                  "end": 506
                }
              ],
              "start": 494,
              "end": 507
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
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 518,
                      "end": 519
                    },
                    "typeArguments": null,
                    "start": 518,
                    "end": 519
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 520,
                      "end": 521
                    },
                    "start": 520,
                    "end": 521
                  },
                  "start": 518,
                  "end": 522
                },
                {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 524,
                      "end": 525
                    },
                    "typeArguments": null,
                    "start": 524,
                    "end": 525
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 526,
                      "end": 527
                    },
                    "start": 526,
                    "end": 527
                  },
                  "start": 524,
                  "end": 528
                }
              ],
              "start": 517,
              "end": 529
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PositiveInfinity",
                "optional": false,
                "typeAnnotation": null,
                "start": 537,
                "end": 553
              },
              "typeArguments": null,
              "start": 537,
              "end": 553
            },
            "falseType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "failed",
                "raw": "\"failed\"",
                "start": 560,
                "end": 568
              },
              "start": 560,
              "end": 568
            },
            "start": 494,
            "end": 568
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 573,
            "end": 578
          },
          "start": 297,
          "end": 578
        },
        "declare": false,
        "start": 250,
        "end": 579
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 243,
      "end": 579
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "AddWithoutParentheses",
          "optional": false,
          "typeAnnotation": null,
          "start": 593,
          "end": 614
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
                "start": 615,
                "end": 616
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 625,
                "end": 631
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 615,
              "end": 631
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 633,
                "end": 634
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 643,
                "end": 649
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 633,
              "end": 649
            }
          ],
          "start": 614,
          "end": 650
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
                  "name": "IsEqual",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 657,
                  "end": 664
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
                        "start": 665,
                        "end": 666
                      },
                      "typeArguments": null,
                      "start": 665,
                      "end": 666
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "PositiveInfinity",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 668,
                        "end": 684
                      },
                      "typeArguments": null,
                      "start": 668,
                      "end": 684
                    }
                  ],
                  "start": 664,
                  "end": 685
                },
                "start": 657,
                "end": 685
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IsEqual",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 689,
                  "end": 696
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
                        "start": 697,
                        "end": 698
                      },
                      "typeArguments": null,
                      "start": 697,
                      "end": 698
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NegativeInfinity",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 700,
                        "end": 716
                      },
                      "typeArguments": null,
                      "start": 700,
                      "end": 716
                    }
                  ],
                  "start": 696,
                  "end": 717
                },
                "start": 689,
                "end": 717
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IsEqual",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 721,
                  "end": 728
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
                        "start": 729,
                        "end": 730
                      },
                      "typeArguments": null,
                      "start": 729,
                      "end": 730
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "PositiveInfinity",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 732,
                        "end": 748
                      },
                      "typeArguments": null,
                      "start": 732,
                      "end": 748
                    }
                  ],
                  "start": 728,
                  "end": 749
                },
                "start": 721,
                "end": 749
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IsEqual",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 753,
                  "end": 760
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
                        "start": 761,
                        "end": 762
                      },
                      "typeArguments": null,
                      "start": 761,
                      "end": 762
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NegativeInfinity",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 764,
                        "end": 780
                      },
                      "typeArguments": null,
                      "start": 764,
                      "end": 780
                    }
                  ],
                  "start": 760,
                  "end": 781
                },
                "start": 753,
                "end": 781
              }
            ],
            "start": 653,
            "end": 784
          },
          "extendsType": {
            "type": "TSInferType",
            "typeParameter": {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "R",
                "optional": false,
                "typeAnnotation": null,
                "start": 799,
                "end": 800
              },
              "constraint": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 810,
                    "end": 817
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 819,
                    "end": 826
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 828,
                    "end": 835
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 837,
                    "end": 844
                  }
                ],
                "start": 809,
                "end": 845
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 799,
              "end": 845
            },
            "start": 793,
            "end": 845
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
                    "start": 851,
                    "end": 855
                  },
                  "start": 851,
                  "end": 855
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 857,
                    "end": 862
                  },
                  "start": 857,
                  "end": 862
                }
              ],
              "start": 850,
              "end": 863
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
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 873,
                      "end": 874
                    },
                    "typeArguments": null,
                    "start": 873,
                    "end": 874
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 875,
                      "end": 876
                    },
                    "start": 875,
                    "end": 876
                  },
                  "start": 873,
                  "end": 877
                },
                {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 879,
                      "end": 880
                    },
                    "typeArguments": null,
                    "start": 879,
                    "end": 880
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 881,
                      "end": 882
                    },
                    "start": 881,
                    "end": 882
                  },
                  "start": 879,
                  "end": 883
                }
              ],
              "start": 872,
              "end": 884
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PositiveInfinity",
                "optional": false,
                "typeAnnotation": null,
                "start": 891,
                "end": 907
              },
              "typeArguments": null,
              "start": 891,
              "end": 907
            },
            "falseType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "failed",
                "raw": "\"failed\"",
                "start": 914,
                "end": 922
              },
              "start": 914,
              "end": 922
            },
            "start": 850,
            "end": 922
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 927,
            "end": 932
          },
          "start": 653,
          "end": 932
        },
        "declare": false,
        "start": 588,
        "end": 933
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 581,
      "end": 933
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AddTest0",
        "optional": false,
        "typeAnnotation": null,
        "start": 940,
        "end": 948
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Add",
          "optional": false,
          "typeAnnotation": null,
          "start": 951,
          "end": 954
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PositiveInfinity",
                "optional": false,
                "typeAnnotation": null,
                "start": 955,
                "end": 971
              },
              "typeArguments": null,
              "start": 955,
              "end": 971
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PositiveInfinity",
                "optional": false,
                "typeAnnotation": null,
                "start": 973,
                "end": 989
              },
              "typeArguments": null,
              "start": 973,
              "end": 989
            }
          ],
          "start": 954,
          "end": 990
        },
        "start": 951,
        "end": 990
      },
      "declare": false,
      "start": 935,
      "end": 991
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AddTest1",
        "optional": false,
        "typeAnnotation": null,
        "start": 997,
        "end": 1005
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "AddWithoutParentheses",
          "optional": false,
          "typeAnnotation": null,
          "start": 1008,
          "end": 1029
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PositiveInfinity",
                "optional": false,
                "typeAnnotation": null,
                "start": 1030,
                "end": 1046
              },
              "typeArguments": null,
              "start": 1030,
              "end": 1046
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PositiveInfinity",
                "optional": false,
                "typeAnnotation": null,
                "start": 1048,
                "end": 1064
              },
              "typeArguments": null,
              "start": 1048,
              "end": 1064
            }
          ],
          "start": 1029,
          "end": 1065
        },
        "start": 1008,
        "end": 1065
      },
      "declare": false,
      "start": 992,
      "end": 1066
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 57,
  "end": 1066
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
    "value": "PositiveInfinity",
    "start": 62,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 79,
    "end": 80
  },
  {
    "type": "Numeric",
    "value": "1e999",
    "start": 81,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 88,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "NegativeInfinity",
    "start": 93,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 112,
    "end": 113
  },
  {
    "type": "Numeric",
    "value": "1e999",
    "start": 113,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 118,
    "end": 119
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 121,
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
    "value": "IsEqual",
    "start": 133,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 156,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 159,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 161,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 171,
    "end": 172
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 175,
    "end": 176
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 178,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 180,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 199,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "G",
    "start": 202,
    "end": 203
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 204,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 214,
    "end": 215
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 218,
    "end": 219
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 224,
    "end": 225
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 226,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 233,
    "end": 234
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 235,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 240,
    "end": 241
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 243,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 250,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "Add",
    "start": 255,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 259,
    "end": 260
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 261,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 269,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 277,
    "end": 278
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 279,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 287,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "IsEqual",
    "start": 301,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "PositiveInfinity",
    "start": 312,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "IsEqual",
    "start": 333,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "NegativeInfinity",
    "start": 344,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "IsEqual",
    "start": 365,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "PositiveInfinity",
    "start": 376,
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
    "value": ",",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "IsEqual",
    "start": 397,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "NegativeInfinity",
    "start": 408,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 427,
    "end": 428
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 429,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 437,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 443,
    "end": 444
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 445,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 454,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 463,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 472,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 481,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 494,
    "end": 495
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 495,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 499,
    "end": 500
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 501,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 506,
    "end": 507
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 508,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 519,
    "end": 520
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 520,
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
    "value": ",",
    "start": 522,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 525,
    "end": 526
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "PositiveInfinity",
    "start": 537,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 558,
    "end": 559
  },
  {
    "type": "String",
    "value": "\"failed\"",
    "start": 560,
    "end": 568
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
    "start": 573,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 578,
    "end": 579
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 581,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 588,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "AddWithoutParentheses",
    "start": 593,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 614,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 615,
    "end": 616
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 617,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 625,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 631,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 633,
    "end": 634
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 635,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 643,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 653,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "IsEqual",
    "start": 657,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 666,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "PositiveInfinity",
    "start": 668,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 685,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "IsEqual",
    "start": 689,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 696,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 698,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "NegativeInfinity",
    "start": 700,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 717,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "IsEqual",
    "start": 721,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 730,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "PositiveInfinity",
    "start": 732,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 749,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "IsEqual",
    "start": 753,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 760,
    "end": 761
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 762,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "NegativeInfinity",
    "start": 764,
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
    "value": ",",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 783,
    "end": 784
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 785,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 793,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 799,
    "end": 800
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 801,
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
    "value": "boolean",
    "start": 810,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 817,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 819,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 826,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 828,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 835,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 837,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 850,
    "end": 851
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 851,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 855,
    "end": 856
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 857,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 862,
    "end": 863
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 864,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 872,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 873,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 874,
    "end": 875
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "R",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 880,
    "end": 881
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 882,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 889,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "PositiveInfinity",
    "start": 891,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 912,
    "end": 913
  },
  {
    "type": "String",
    "value": "\"failed\"",
    "start": 914,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 925,
    "end": 926
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 927,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 932,
    "end": 933
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 935,
    "end": 939
  },
  {
    "type": "Identifier",
    "value": "AddTest0",
    "start": 940,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 949,
    "end": 950
  },
  {
    "type": "Identifier",
    "value": "Add",
    "start": 951,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 954,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "PositiveInfinity",
    "start": 955,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 971,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "PositiveInfinity",
    "start": 973,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 989,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 990,
    "end": 991
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 992,
    "end": 996
  },
  {
    "type": "Identifier",
    "value": "AddTest1",
    "start": 997,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "AddWithoutParentheses",
    "start": 1008,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Identifier",
    "value": "PositiveInfinity",
    "start": 1030,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Identifier",
    "value": "PositiveInfinity",
    "start": 1048,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1065,
    "end": 1066
  }
]
```
