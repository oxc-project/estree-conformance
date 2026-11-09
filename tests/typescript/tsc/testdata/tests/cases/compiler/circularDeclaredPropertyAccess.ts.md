__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Internals",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 76
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 78
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 81,
              "end": 88
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 77,
            "end": 88
          }
        ],
        "start": 76,
        "end": 89
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
              "name": "input",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 97
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 99,
                  "end": 100
                },
                "typeArguments": null,
                "start": 99,
                "end": 100
              },
              "start": 97,
              "end": 100
            },
            "accessibility": null,
            "static": false,
            "start": 92,
            "end": 100
          }
        ],
        "start": 90,
        "end": 102
      },
      "declare": false,
      "start": 57,
      "end": 102
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Schema",
        "optional": false,
        "typeAnnotation": null,
        "start": 113,
        "end": 119
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
              "name": "_zod",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 126
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Internals",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 128,
                  "end": 137
                },
                "typeArguments": null,
                "start": 128,
                "end": 137
              },
              "start": 126,
              "end": 137
            },
            "accessibility": null,
            "static": false,
            "start": 122,
            "end": 137
          }
        ],
        "start": 120,
        "end": 139
      },
      "declare": false,
      "start": 103,
      "end": 139
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RecordInput",
        "optional": false,
        "typeAnnotation": null,
        "start": 145,
        "end": 156
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 157,
              "end": 158
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Schema",
                "optional": false,
                "typeAnnotation": null,
                "start": 167,
                "end": 173
              },
              "typeArguments": null,
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
        "start": 156,
        "end": 174
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "V",
            "optional": false,
            "typeAnnotation": null,
            "start": 177,
            "end": 178
          },
          "typeArguments": null,
          "start": 177,
          "end": 178
        },
        "extendsType": {
          "type": "TSUnknownKeyword",
          "start": 187,
          "end": 194
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Record",
            "optional": false,
            "typeAnnotation": null,
            "start": 197,
            "end": 203
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 204,
                "end": 210
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
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 212,
                      "end": 213
                    },
                    "typeArguments": null,
                    "start": 212,
                    "end": 213
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "_zod",
                      "raw": "\"_zod\"",
                      "start": 214,
                      "end": 220
                    },
                    "start": 214,
                    "end": 220
                  },
                  "start": 212,
                  "end": 221
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "input",
                    "raw": "\"input\"",
                    "start": 222,
                    "end": 229
                  },
                  "start": 222,
                  "end": 229
                },
                "start": 212,
                "end": 230
              }
            ],
            "start": 203,
            "end": 231
          },
          "start": 197,
          "end": 231
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 234,
          "end": 239
        },
        "start": 177,
        "end": 239
      },
      "declare": false,
      "start": 140,
      "end": 240
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RecordSchema",
        "optional": false,
        "typeAnnotation": null,
        "start": 251,
        "end": 263
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 264,
              "end": 265
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Schema",
                "optional": false,
                "typeAnnotation": null,
                "start": 274,
                "end": 280
              },
              "typeArguments": null,
              "start": 274,
              "end": 280
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 264,
            "end": 280
          }
        ],
        "start": 263,
        "end": 281
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Schema",
            "optional": false,
            "typeAnnotation": null,
            "start": 290,
            "end": 296
          },
          "typeArguments": null,
          "start": 290,
          "end": 296
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
              "name": "_zod",
              "optional": false,
              "typeAnnotation": null,
              "start": 299,
              "end": 303
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Internals",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 305,
                  "end": 314
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RecordInput",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 315,
                        "end": 326
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "V",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 327,
                              "end": 328
                            },
                            "typeArguments": null,
                            "start": 327,
                            "end": 328
                          }
                        ],
                        "start": 326,
                        "end": 329
                      },
                      "start": 315,
                      "end": 329
                    }
                  ],
                  "start": 314,
                  "end": 330
                },
                "start": 305,
                "end": 330
              },
              "start": 303,
              "end": 330
            },
            "accessibility": null,
            "static": false,
            "start": 299,
            "end": 330
          }
        ],
        "start": 297,
        "end": 332
      },
      "declare": false,
      "start": 241,
      "end": 332
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnionInternals",
        "optional": false,
        "typeAnnotation": null,
        "start": 343,
        "end": 357
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
              "start": 358,
              "end": 359
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Schema",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 377,
                    "end": 383
                  },
                  "typeArguments": null,
                  "start": 377,
                  "end": 383
                },
                "start": 377,
                "end": 385
              },
              "start": 368,
              "end": 385
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 358,
            "end": 385
          }
        ],
        "start": 357,
        "end": 386
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Internals",
            "optional": false,
            "typeAnnotation": null,
            "start": 395,
            "end": 404
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
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
                        "start": 405,
                        "end": 406
                      },
                      "typeArguments": null,
                      "start": 405,
                      "end": 406
                    },
                    "indexType": {
                      "type": "TSNumberKeyword",
                      "start": 407,
                      "end": 413
                    },
                    "start": 405,
                    "end": 414
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "_zod",
                      "raw": "\"_zod\"",
                      "start": 415,
                      "end": 421
                    },
                    "start": 415,
                    "end": 421
                  },
                  "start": 405,
                  "end": 422
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "input",
                    "raw": "\"input\"",
                    "start": 423,
                    "end": 430
                  },
                  "start": 423,
                  "end": 430
                },
                "start": 405,
                "end": 431
              }
            ],
            "start": 404,
            "end": 432
          },
          "start": 395,
          "end": 432
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 433,
        "end": 435
      },
      "declare": false,
      "start": 333,
      "end": 435
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnionSchema",
        "optional": false,
        "typeAnnotation": null,
        "start": 446,
        "end": 457
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
              "start": 458,
              "end": 459
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Schema",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 477,
                    "end": 483
                  },
                  "typeArguments": null,
                  "start": 477,
                  "end": 483
                },
                "start": 477,
                "end": 485
              },
              "start": 468,
              "end": 485
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 458,
            "end": 485
          }
        ],
        "start": 457,
        "end": 486
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Schema",
            "optional": false,
            "typeAnnotation": null,
            "start": 495,
            "end": 501
          },
          "typeArguments": null,
          "start": 495,
          "end": 501
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
              "name": "_zod",
              "optional": false,
              "typeAnnotation": null,
              "start": 504,
              "end": 508
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "UnionInternals",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 510,
                  "end": 524
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
                        "start": 525,
                        "end": 526
                      },
                      "typeArguments": null,
                      "start": 525,
                      "end": 526
                    }
                  ],
                  "start": 524,
                  "end": 527
                },
                "start": 510,
                "end": 527
              },
              "start": 508,
              "end": 527
            },
            "accessibility": null,
            "static": false,
            "start": 504,
            "end": 527
          }
        ],
        "start": 502,
        "end": 529
      },
      "declare": false,
      "start": 436,
      "end": 529
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JsonValue",
        "optional": false,
        "typeAnnotation": null,
        "start": 535,
        "end": 544
      },
      "typeParameters": null,
      "typeAnnotation": {
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
                    "start": 553,
                    "end": 559
                  },
                  "start": 551,
                  "end": 559
                },
                "start": 550,
                "end": 559
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "JsonValue",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 562,
                  "end": 571
                },
                "typeArguments": null,
                "start": 562,
                "end": 571
              },
              "start": 560,
              "end": 571
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 549,
            "end": 571
          }
        ],
        "start": 547,
        "end": 573
      },
      "declare": false,
      "start": 530,
      "end": 574
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_Json",
        "optional": false,
        "typeAnnotation": null,
        "start": 580,
        "end": 585
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "UnionSchema",
          "optional": false,
          "typeAnnotation": null,
          "start": 588,
          "end": 599
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RecordSchema",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 601,
                    "end": 613
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Json",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 614,
                          "end": 618
                        },
                        "typeArguments": null,
                        "start": 614,
                        "end": 618
                      }
                    ],
                    "start": 613,
                    "end": 619
                  },
                  "start": 601,
                  "end": 619
                }
              ],
              "start": 600,
              "end": 620
            }
          ],
          "start": 599,
          "end": 621
        },
        "start": 588,
        "end": 621
      },
      "declare": false,
      "start": 575,
      "end": 622
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_JsonInternals",
        "optional": false,
        "typeAnnotation": null,
        "start": 628,
        "end": 642
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "_Json",
            "optional": false,
            "typeAnnotation": null,
            "start": 645,
            "end": 650
          },
          "typeArguments": null,
          "start": 645,
          "end": 650
        },
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "_zod",
            "raw": "\"_zod\"",
            "start": 651,
            "end": 657
          },
          "start": 651,
          "end": 657
        },
        "start": 645,
        "end": 658
      },
      "declare": false,
      "start": 623,
      "end": 659
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JsonInternals",
        "optional": false,
        "typeAnnotation": null,
        "start": 670,
        "end": 683
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "_JsonInternals",
            "optional": false,
            "typeAnnotation": null,
            "start": 692,
            "end": 706
          },
          "typeArguments": null,
          "start": 692,
          "end": 706
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
              "name": "input",
              "optional": false,
              "typeAnnotation": null,
              "start": 709,
              "end": 714
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "JsonValue",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 716,
                  "end": 725
                },
                "typeArguments": null,
                "start": 716,
                "end": 725
              },
              "start": 714,
              "end": 725
            },
            "accessibility": null,
            "static": false,
            "start": 709,
            "end": 725
          }
        ],
        "start": 707,
        "end": 727
      },
      "declare": false,
      "start": 660,
      "end": 727
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Json",
        "optional": false,
        "typeAnnotation": null,
        "start": 738,
        "end": 742
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "_Json",
            "optional": false,
            "typeAnnotation": null,
            "start": 751,
            "end": 756
          },
          "typeArguments": null,
          "start": 751,
          "end": 756
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
              "name": "_zod",
              "optional": false,
              "typeAnnotation": null,
              "start": 759,
              "end": 763
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "JsonInternals",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 765,
                  "end": 778
                },
                "typeArguments": null,
                "start": 765,
                "end": 778
              },
              "start": 763,
              "end": 778
            },
            "accessibility": null,
            "static": false,
            "start": 759,
            "end": 778
          }
        ],
        "start": 757,
        "end": 780
      },
      "declare": false,
      "start": 728,
      "end": 780
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 875,
        "end": 876
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
              "start": 879,
              "end": 883
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 885,
                "end": 891
              },
              "start": 883,
              "end": 891
            },
            "accessibility": null,
            "static": false,
            "start": 879,
            "end": 892
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 893,
              "end": 894
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSThisType",
                  "start": 896,
                  "end": 900
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "kind",
                    "raw": "\"kind\"",
                    "start": 901,
                    "end": 907
                  },
                  "start": 901,
                  "end": 907
                },
                "start": 896,
                "end": 908
              },
              "start": 894,
              "end": 908
            },
            "accessibility": null,
            "static": false,
            "start": 893,
            "end": 908
          }
        ],
        "start": 877,
        "end": 910
      },
      "declare": false,
      "start": 865,
      "end": 910
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 921,
        "end": 922
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
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 925,
              "end": 926
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 928,
                  "end": 931
                },
                "start": 928,
                "end": 931
              },
              "start": 926,
              "end": 931
            },
            "accessibility": null,
            "static": false,
            "start": 925,
            "end": 931
          }
        ],
        "start": 923,
        "end": 933
      },
      "declare": false,
      "start": 911,
      "end": 933
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AB",
        "optional": false,
        "typeAnnotation": null,
        "start": 939,
        "end": 941
      },
      "typeParameters": null,
      "typeAnnotation": {
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
              "start": 944,
              "end": 945
            },
            "typeArguments": null,
            "start": 944,
            "end": 945
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 948,
              "end": 949
            },
            "typeArguments": null,
            "start": 948,
            "end": 949
          }
        ],
        "start": 944,
        "end": 949
      },
      "declare": false,
      "start": 934,
      "end": 950
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 962,
        "end": 963
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "AB",
            "optional": false,
            "typeAnnotation": null,
            "start": 972,
            "end": 974
          },
          "typeArguments": null,
          "start": 972,
          "end": 974
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 977,
              "end": 981
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 983,
                  "end": 986
                },
                "start": 983,
                "end": 986
              },
              "start": 981,
              "end": 986
            },
            "accessibility": null,
            "static": false,
            "start": 977,
            "end": 986
          }
        ],
        "start": 975,
        "end": 988
      },
      "declare": false,
      "start": 952,
      "end": 988
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 1000,
        "end": 1001
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null,
            "start": 1010,
            "end": 1011
          },
          "typeArguments": null,
          "start": 1010,
          "end": 1011
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 1012,
        "end": 1014
      },
      "declare": false,
      "start": 990,
      "end": 1014
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1014
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 57,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "Internals",
    "start": 67,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 81,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 92,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 101,
    "end": 102
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 103,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "Schema",
    "start": 113,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "_zod",
    "start": 122,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "Internals",
    "start": 128,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 140,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "RecordInput",
    "start": 145,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "V",
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
    "value": "Schema",
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
    "value": "V",
    "start": 177,
    "end": 178
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 179,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 187,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 197,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 204,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "V",
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
    "type": "String",
    "value": "\"_zod\"",
    "start": 214,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 221,
    "end": 222
  },
  {
    "type": "String",
    "value": "\"input\"",
    "start": 222,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 234,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 239,
    "end": 240
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 241,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "RecordSchema",
    "start": 251,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 264,
    "end": 265
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 266,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "Schema",
    "start": 274,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 280,
    "end": 281
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 282,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "Schema",
    "start": 290,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "_zod",
    "start": 299,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "Internals",
    "start": 305,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "RecordInput",
    "start": 315,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 327,
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
    "value": ">",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 331,
    "end": 332
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 333,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "UnionInternals",
    "start": 343,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 358,
    "end": 359
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 360,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 368,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "Schema",
    "start": 377,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Keyword",
    "value": "extends",
    "start": 387,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "Internals",
    "start": 395,
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
    "value": "T",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 407,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 414,
    "end": 415
  },
  {
    "type": "String",
    "value": "\"_zod\"",
    "start": 415,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 422,
    "end": 423
  },
  {
    "type": "String",
    "value": "\"input\"",
    "start": 423,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 434,
    "end": 435
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 436,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "UnionSchema",
    "start": 446,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 458,
    "end": 459
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 460,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 468,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "Schema",
    "start": 477,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 485,
    "end": 486
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 487,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "Schema",
    "start": 495,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "_zod",
    "start": 504,
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
    "value": "UnionInternals",
    "start": 510,
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
    "type": "Punctuator",
    "value": ">",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 530,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "JsonValue",
    "start": 535,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 553,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "JsonValue",
    "start": 562,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 573,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 575,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "_Json",
    "start": 580,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 586,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "UnionSchema",
    "start": 588,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "RecordSchema",
    "start": 601,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 613,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "Json",
    "start": 614,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 621,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 623,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "_JsonInternals",
    "start": 628,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "_Json",
    "start": 645,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 650,
    "end": 651
  },
  {
    "type": "String",
    "value": "\"_zod\"",
    "start": 651,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 658,
    "end": 659
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 660,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "JsonInternals",
    "start": 670,
    "end": 683
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 684,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "_JsonInternals",
    "start": 692,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 707,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 709,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 714,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "JsonValue",
    "start": 716,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 726,
    "end": 727
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 728,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "Json",
    "start": 738,
    "end": 742
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 743,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "_Json",
    "start": 751,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 757,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "_zod",
    "start": 759,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 763,
    "end": 764
  },
  {
    "type": "Identifier",
    "value": "JsonInternals",
    "start": 765,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 779,
    "end": 780
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 865,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 877,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 879,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 883,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 885,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 891,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 894,
    "end": 895
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 896,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 900,
    "end": 901
  },
  {
    "type": "String",
    "value": "\"kind\"",
    "start": 901,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 909,
    "end": 910
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 911,
    "end": 920
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 921,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 923,
    "end": 924
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 925,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 926,
    "end": 927
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 928,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 932,
    "end": 933
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 934,
    "end": 938
  },
  {
    "type": "Identifier",
    "value": "AB",
    "start": 939,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 942,
    "end": 943
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 946,
    "end": 947
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 949,
    "end": 950
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 952,
    "end": 961
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 962,
    "end": 963
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 964,
    "end": 971
  },
  {
    "type": "Identifier",
    "value": "AB",
    "start": 972,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 975,
    "end": 976
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 977,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 981,
    "end": 982
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 983,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 987,
    "end": 988
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 990,
    "end": 999
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1002,
    "end": 1009
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1013,
    "end": 1014
  }
]
```
