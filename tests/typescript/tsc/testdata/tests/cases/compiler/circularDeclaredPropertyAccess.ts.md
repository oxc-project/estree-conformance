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
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseTypeArguments",
        "optional": false,
        "typeAnnotation": null,
        "start": 1182,
        "end": 1199
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Internals",
              "optional": false,
              "typeAnnotation": null,
              "start": 1216,
              "end": 1225
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
                    "start": 1226,
                    "end": 1227
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSUnknownKeyword",
                    "start": 1230,
                    "end": 1237
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1226,
                  "end": 1237
                }
              ],
              "start": 1225,
              "end": 1238
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
                    "start": 1241,
                    "end": 1246
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
                        "start": 1248,
                        "end": 1249
                      },
                      "typeArguments": null,
                      "start": 1248,
                      "end": 1249
                    },
                    "start": 1246,
                    "end": 1249
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1241,
                  "end": 1250
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "optin",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1251,
                    "end": 1256
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
                            "value": "optional",
                            "raw": "\"optional\"",
                            "start": 1259,
                            "end": 1269
                          },
                          "start": 1259,
                          "end": 1269
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "defaulted",
                            "raw": "\"defaulted\"",
                            "start": 1272,
                            "end": 1283
                          },
                          "start": 1272,
                          "end": 1283
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 1286,
                          "end": 1295
                        }
                      ],
                      "start": 1259,
                      "end": 1295
                    },
                    "start": 1257,
                    "end": 1295
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1251,
                  "end": 1295
                }
              ],
              "start": 1239,
              "end": 1297
            },
            "declare": false,
            "start": 1206,
            "end": 1297
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Schema",
              "optional": false,
              "typeAnnotation": null,
              "start": 1312,
              "end": 1318
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
                    "start": 1321,
                    "end": 1325
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
                        "start": 1327,
                        "end": 1336
                      },
                      "typeArguments": null,
                      "start": 1327,
                      "end": 1336
                    },
                    "start": 1325,
                    "end": 1336
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1321,
                  "end": 1336
                }
              ],
              "start": 1319,
              "end": 1338
            },
            "declare": false,
            "start": 1302,
            "end": 1338
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "OptionalIn",
              "optional": false,
              "typeAnnotation": null,
              "start": 1348,
              "end": 1358
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
                    "name": "_zod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1363,
                    "end": 1367
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
                            "name": "optin",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1371,
                            "end": 1376
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
                                    "value": "optional",
                                    "raw": "\"optional\"",
                                    "start": 1378,
                                    "end": 1388
                                  },
                                  "start": 1378,
                                  "end": 1388
                                },
                                {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": "defaulted",
                                    "raw": "\"defaulted\"",
                                    "start": 1391,
                                    "end": 1402
                                  },
                                  "start": 1391,
                                  "end": 1402
                                }
                              ],
                              "start": 1378,
                              "end": 1402
                            },
                            "start": 1376,
                            "end": 1402
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1371,
                          "end": 1402
                        }
                      ],
                      "start": 1369,
                      "end": 1404
                    },
                    "start": 1367,
                    "end": 1404
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1363,
                  "end": 1404
                }
              ],
              "start": 1361,
              "end": 1406
            },
            "declare": false,
            "start": 1343,
            "end": 1407
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IsOptionalIn",
              "optional": false,
              "typeAnnotation": null,
              "start": 1417,
              "end": 1429
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
                    "start": 1430,
                    "end": 1431
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Schema",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1440,
                      "end": 1446
                    },
                    "typeArguments": null,
                    "start": 1440,
                    "end": 1446
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1430,
                  "end": 1446
                }
              ],
              "start": 1429,
              "end": 1447
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
                  "start": 1450,
                  "end": 1451
                },
                "typeArguments": null,
                "start": 1450,
                "end": 1451
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OptionalIn",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1460,
                  "end": 1470
                },
                "typeArguments": null,
                "start": 1460,
                "end": 1470
              },
              "trueType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 1473,
                  "end": 1477
                },
                "start": 1473,
                "end": 1477
              },
              "falseType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 1480,
                  "end": 1485
                },
                "start": 1480,
                "end": 1485
              },
              "start": 1450,
              "end": 1485
            },
            "declare": false,
            "start": 1412,
            "end": 1486
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "RecordInput",
              "optional": false,
              "typeAnnotation": null,
              "start": 1496,
              "end": 1507
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
                    "start": 1508,
                    "end": 1509
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Schema",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1518,
                      "end": 1524
                    },
                    "typeArguments": null,
                    "start": 1518,
                    "end": 1524
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1508,
                  "end": 1524
                }
              ],
              "start": 1507,
              "end": 1525
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
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1529,
                      "end": 1530
                    },
                    "typeArguments": null,
                    "start": 1529,
                    "end": 1530
                  }
                ],
                "start": 1528,
                "end": 1531
              },
              "extendsType": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "OptionalIn",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1541,
                      "end": 1551
                    },
                    "typeArguments": null,
                    "start": 1541,
                    "end": 1551
                  }
                ],
                "start": 1540,
                "end": 1552
              },
              "trueType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Partial",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1555,
                  "end": 1562
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Record",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1563,
                        "end": 1569
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 1570,
                            "end": 1576
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
                                  "start": 1578,
                                  "end": 1579
                                },
                                "typeArguments": null,
                                "start": 1578,
                                "end": 1579
                              },
                              "indexType": {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "_zod",
                                  "raw": "\"_zod\"",
                                  "start": 1580,
                                  "end": 1586
                                },
                                "start": 1580,
                                "end": 1586
                              },
                              "start": 1578,
                              "end": 1587
                            },
                            "indexType": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "input",
                                "raw": "\"input\"",
                                "start": 1588,
                                "end": 1595
                              },
                              "start": 1588,
                              "end": 1595
                            },
                            "start": 1578,
                            "end": 1596
                          }
                        ],
                        "start": 1569,
                        "end": 1597
                      },
                      "start": 1563,
                      "end": 1597
                    }
                  ],
                  "start": 1562,
                  "end": 1598
                },
                "start": 1555,
                "end": 1598
              },
              "falseType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1601,
                  "end": 1607
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 1608,
                      "end": 1614
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
                            "start": 1616,
                            "end": 1617
                          },
                          "typeArguments": null,
                          "start": 1616,
                          "end": 1617
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "_zod",
                            "raw": "\"_zod\"",
                            "start": 1618,
                            "end": 1624
                          },
                          "start": 1618,
                          "end": 1624
                        },
                        "start": 1616,
                        "end": 1625
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "input",
                          "raw": "\"input\"",
                          "start": 1626,
                          "end": 1633
                        },
                        "start": 1626,
                        "end": 1633
                      },
                      "start": 1616,
                      "end": 1634
                    }
                  ],
                  "start": 1607,
                  "end": 1635
                },
                "start": 1601,
                "end": 1635
              },
              "start": 1528,
              "end": 1635
            },
            "declare": false,
            "start": 1491,
            "end": 1636
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "RecordInternals",
              "optional": false,
              "typeAnnotation": null,
              "start": 1651,
              "end": 1666
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
                    "start": 1667,
                    "end": 1668
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Schema",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1677,
                      "end": 1683
                    },
                    "typeArguments": null,
                    "start": 1677,
                    "end": 1683
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1667,
                  "end": 1683
                }
              ],
              "start": 1666,
              "end": 1684
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
                  "start": 1693,
                  "end": 1702
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
                        "start": 1703,
                        "end": 1714
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
                              "start": 1715,
                              "end": 1716
                            },
                            "typeArguments": null,
                            "start": 1715,
                            "end": 1716
                          }
                        ],
                        "start": 1714,
                        "end": 1717
                      },
                      "start": 1703,
                      "end": 1717
                    }
                  ],
                  "start": 1702,
                  "end": 1718
                },
                "start": 1693,
                "end": 1718
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "optin",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1721,
                    "end": 1726
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
                            "value": "optional",
                            "raw": "\"optional\"",
                            "start": 1729,
                            "end": 1739
                          },
                          "start": 1729,
                          "end": 1739
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 1742,
                          "end": 1751
                        }
                      ],
                      "start": 1729,
                      "end": 1751
                    },
                    "start": 1727,
                    "end": 1751
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1721,
                  "end": 1751
                }
              ],
              "start": 1719,
              "end": 1753
            },
            "declare": false,
            "start": 1641,
            "end": 1753
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "RecordSchema",
              "optional": false,
              "typeAnnotation": null,
              "start": 1768,
              "end": 1780
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
                    "start": 1781,
                    "end": 1782
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Schema",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1791,
                      "end": 1797
                    },
                    "typeArguments": null,
                    "start": 1791,
                    "end": 1797
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1781,
                  "end": 1797
                }
              ],
              "start": 1780,
              "end": 1798
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
                  "start": 1807,
                  "end": 1813
                },
                "typeArguments": null,
                "start": 1807,
                "end": 1813
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
                    "start": 1816,
                    "end": 1820
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "RecordInternals",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1822,
                        "end": 1837
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
                              "start": 1838,
                              "end": 1839
                            },
                            "typeArguments": null,
                            "start": 1838,
                            "end": 1839
                          }
                        ],
                        "start": 1837,
                        "end": 1840
                      },
                      "start": 1822,
                      "end": 1840
                    },
                    "start": 1820,
                    "end": 1840
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1816,
                  "end": 1840
                }
              ],
              "start": 1814,
              "end": 1842
            },
            "declare": false,
            "start": 1758,
            "end": 1842
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "UnionInternals",
              "optional": false,
              "typeAnnotation": null,
              "start": 1857,
              "end": 1871
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
                    "start": 1872,
                    "end": 1873
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
                          "start": 1891,
                          "end": 1897
                        },
                        "typeArguments": null,
                        "start": 1891,
                        "end": 1897
                      },
                      "start": 1891,
                      "end": 1899
                    },
                    "start": 1882,
                    "end": 1899
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1872,
                  "end": 1899
                }
              ],
              "start": 1871,
              "end": 1900
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
                  "start": 1909,
                  "end": 1918
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
                              "start": 1919,
                              "end": 1920
                            },
                            "typeArguments": null,
                            "start": 1919,
                            "end": 1920
                          },
                          "indexType": {
                            "type": "TSNumberKeyword",
                            "start": 1921,
                            "end": 1927
                          },
                          "start": 1919,
                          "end": 1928
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "_zod",
                            "raw": "\"_zod\"",
                            "start": 1929,
                            "end": 1935
                          },
                          "start": 1929,
                          "end": 1935
                        },
                        "start": 1919,
                        "end": 1936
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "input",
                          "raw": "\"input\"",
                          "start": 1937,
                          "end": 1944
                        },
                        "start": 1937,
                        "end": 1944
                      },
                      "start": 1919,
                      "end": 1945
                    }
                  ],
                  "start": 1918,
                  "end": 1946
                },
                "start": 1909,
                "end": 1946
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
                    "name": "optin",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1957,
                    "end": 1962
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IsOptionalIn",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1964,
                          "end": 1976
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
                                  "start": 1977,
                                  "end": 1978
                                },
                                "typeArguments": null,
                                "start": 1977,
                                "end": 1978
                              },
                              "indexType": {
                                "type": "TSNumberKeyword",
                                "start": 1979,
                                "end": 1985
                              },
                              "start": 1977,
                              "end": 1986
                            }
                          ],
                          "start": 1976,
                          "end": 1987
                        },
                        "start": 1964,
                        "end": 1987
                      },
                      "extendsType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": false,
                          "raw": "false",
                          "start": 1996,
                          "end": 2001
                        },
                        "start": 1996,
                        "end": 2001
                      },
                      "trueType": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "optional",
                              "raw": "\"optional\"",
                              "start": 2004,
                              "end": 2014
                            },
                            "start": 2004,
                            "end": 2014
                          },
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "defaulted",
                              "raw": "\"defaulted\"",
                              "start": 2017,
                              "end": 2028
                            },
                            "start": 2017,
                            "end": 2028
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 2031,
                            "end": 2040
                          }
                        ],
                        "start": 2004,
                        "end": 2040
                      },
                      "falseType": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "optional",
                              "raw": "\"optional\"",
                              "start": 2043,
                              "end": 2053
                            },
                            "start": 2043,
                            "end": 2053
                          },
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "defaulted",
                              "raw": "\"defaulted\"",
                              "start": 2056,
                              "end": 2067
                            },
                            "start": 2056,
                            "end": 2067
                          }
                        ],
                        "start": 2043,
                        "end": 2067
                      },
                      "start": 1964,
                      "end": 2067
                    },
                    "start": 1962,
                    "end": 2067
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1957,
                  "end": 2068
                }
              ],
              "start": 1947,
              "end": 2074
            },
            "declare": false,
            "start": 1847,
            "end": 2074
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "UnionSchema",
              "optional": false,
              "typeAnnotation": null,
              "start": 2089,
              "end": 2100
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
                    "start": 2101,
                    "end": 2102
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
                          "start": 2120,
                          "end": 2126
                        },
                        "typeArguments": null,
                        "start": 2120,
                        "end": 2126
                      },
                      "start": 2120,
                      "end": 2128
                    },
                    "start": 2111,
                    "end": 2128
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2101,
                  "end": 2128
                }
              ],
              "start": 2100,
              "end": 2129
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
                  "start": 2138,
                  "end": 2144
                },
                "typeArguments": null,
                "start": 2138,
                "end": 2144
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
                    "start": 2147,
                    "end": 2151
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
                        "start": 2153,
                        "end": 2167
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
                              "start": 2168,
                              "end": 2169
                            },
                            "typeArguments": null,
                            "start": 2168,
                            "end": 2169
                          }
                        ],
                        "start": 2167,
                        "end": 2170
                      },
                      "start": 2153,
                      "end": 2170
                    },
                    "start": 2151,
                    "end": 2170
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2147,
                  "end": 2170
                }
              ],
              "start": 2145,
              "end": 2172
            },
            "declare": false,
            "start": 2079,
            "end": 2172
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "JsonValue",
              "optional": false,
              "typeAnnotation": null,
              "start": 2182,
              "end": 2191
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
                          "start": 2200,
                          "end": 2206
                        },
                        "start": 2198,
                        "end": 2206
                      },
                      "start": 2197,
                      "end": 2206
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
                        "start": 2209,
                        "end": 2218
                      },
                      "typeArguments": null,
                      "start": 2209,
                      "end": 2218
                    },
                    "start": 2207,
                    "end": 2218
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 2196,
                  "end": 2218
                }
              ],
              "start": 2194,
              "end": 2220
            },
            "declare": false,
            "start": 2177,
            "end": 2221
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "_Json",
              "optional": false,
              "typeAnnotation": null,
              "start": 2231,
              "end": 2236
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
                "start": 2239,
                "end": 2250
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
                          "start": 2252,
                          "end": 2264
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
                                "start": 2265,
                                "end": 2269
                              },
                              "typeArguments": null,
                              "start": 2265,
                              "end": 2269
                            }
                          ],
                          "start": 2264,
                          "end": 2270
                        },
                        "start": 2252,
                        "end": 2270
                      }
                    ],
                    "start": 2251,
                    "end": 2271
                  }
                ],
                "start": 2250,
                "end": 2272
              },
              "start": 2239,
              "end": 2272
            },
            "declare": false,
            "start": 2226,
            "end": 2273
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "_JsonInternals",
              "optional": false,
              "typeAnnotation": null,
              "start": 2283,
              "end": 2297
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
                  "start": 2300,
                  "end": 2305
                },
                "typeArguments": null,
                "start": 2300,
                "end": 2305
              },
              "indexType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "_zod",
                  "raw": "\"_zod\"",
                  "start": 2306,
                  "end": 2312
                },
                "start": 2306,
                "end": 2312
              },
              "start": 2300,
              "end": 2313
            },
            "declare": false,
            "start": 2278,
            "end": 2314
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "JsonInternals",
              "optional": false,
              "typeAnnotation": null,
              "start": 2329,
              "end": 2342
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
                  "start": 2351,
                  "end": 2365
                },
                "typeArguments": null,
                "start": 2351,
                "end": 2365
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
                    "start": 2368,
                    "end": 2373
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
                        "start": 2375,
                        "end": 2384
                      },
                      "typeArguments": null,
                      "start": 2375,
                      "end": 2384
                    },
                    "start": 2373,
                    "end": 2384
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2368,
                  "end": 2384
                }
              ],
              "start": 2366,
              "end": 2386
            },
            "declare": false,
            "start": 2319,
            "end": 2386
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Json",
              "optional": false,
              "typeAnnotation": null,
              "start": 2401,
              "end": 2405
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
                  "start": 2414,
                  "end": 2419
                },
                "typeArguments": null,
                "start": 2414,
                "end": 2419
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
                    "start": 2422,
                    "end": 2426
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
                        "start": 2428,
                        "end": 2441
                      },
                      "typeArguments": null,
                      "start": 2428,
                      "end": 2441
                    },
                    "start": 2426,
                    "end": 2441
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2422,
                  "end": 2441
                }
              ],
              "start": 2420,
              "end": 2443
            },
            "declare": false,
            "start": 2391,
            "end": 2443
          }
        ],
        "start": 1200,
        "end": 2445
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1172,
      "end": 2445
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2445
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
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1172,
    "end": 1181
  },
  {
    "type": "Identifier",
    "value": "BaseTypeArguments",
    "start": 1182,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1206,
    "end": 1215
  },
  {
    "type": "Identifier",
    "value": "Internals",
    "start": 1216,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1230,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 1241,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Identifier",
    "value": "optin",
    "start": 1251,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "String",
    "value": "\"optional\"",
    "start": 1259,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "String",
    "value": "\"defaulted\"",
    "start": 1272,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1286,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1302,
    "end": 1311
  },
  {
    "type": "Identifier",
    "value": "Schema",
    "start": 1312,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Identifier",
    "value": "_zod",
    "start": 1321,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Identifier",
    "value": "Internals",
    "start": 1327,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1343,
    "end": 1347
  },
  {
    "type": "Identifier",
    "value": "OptionalIn",
    "start": 1348,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Identifier",
    "value": "_zod",
    "start": 1363,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Identifier",
    "value": "optin",
    "start": 1371,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "String",
    "value": "\"optional\"",
    "start": 1378,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "String",
    "value": "\"defaulted\"",
    "start": 1391,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1412,
    "end": 1416
  },
  {
    "type": "Identifier",
    "value": "IsOptionalIn",
    "start": 1417,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1432,
    "end": 1439
  },
  {
    "type": "Identifier",
    "value": "Schema",
    "start": 1440,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1450,
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
    "value": "OptionalIn",
    "start": 1460,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1473,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1480,
    "end": 1485
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1491,
    "end": 1495
  },
  {
    "type": "Identifier",
    "value": "RecordInput",
    "start": 1496,
    "end": 1507
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1510,
    "end": 1517
  },
  {
    "type": "Identifier",
    "value": "Schema",
    "start": 1518,
    "end": 1524
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1532,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Identifier",
    "value": "OptionalIn",
    "start": 1541,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 1555,
    "end": 1562
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 1563,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1570,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1578,
    "end": 1579
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "String",
    "value": "\"_zod\"",
    "start": 1580,
    "end": 1586
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1586,
    "end": 1587
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "String",
    "value": "\"input\"",
    "start": 1588,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 1601,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1608,
    "end": 1614
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1614,
    "end": 1615
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "String",
    "value": "\"_zod\"",
    "start": 1618,
    "end": 1624
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "String",
    "value": "\"input\"",
    "start": 1626,
    "end": 1633
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1641,
    "end": 1650
  },
  {
    "type": "Identifier",
    "value": "RecordInternals",
    "start": 1651,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1667,
    "end": 1668
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1669,
    "end": 1676
  },
  {
    "type": "Identifier",
    "value": "Schema",
    "start": 1677,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1683,
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
    "value": "Internals",
    "start": 1693,
    "end": 1702
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Identifier",
    "value": "RecordInput",
    "start": 1703,
    "end": 1714
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1714,
    "end": 1715
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1715,
    "end": 1716
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1717,
    "end": 1718
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Identifier",
    "value": "optin",
    "start": 1721,
    "end": 1726
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "String",
    "value": "\"optional\"",
    "start": 1729,
    "end": 1739
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1742,
    "end": 1751
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1758,
    "end": 1767
  },
  {
    "type": "Identifier",
    "value": "RecordSchema",
    "start": 1768,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1781,
    "end": 1782
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1783,
    "end": 1790
  },
  {
    "type": "Identifier",
    "value": "Schema",
    "start": 1791,
    "end": 1797
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1797,
    "end": 1798
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1799,
    "end": 1806
  },
  {
    "type": "Identifier",
    "value": "Schema",
    "start": 1807,
    "end": 1813
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1814,
    "end": 1815
  },
  {
    "type": "Identifier",
    "value": "_zod",
    "start": 1816,
    "end": 1820
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1820,
    "end": 1821
  },
  {
    "type": "Identifier",
    "value": "RecordInternals",
    "start": 1822,
    "end": 1837
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1838,
    "end": 1839
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1839,
    "end": 1840
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1847,
    "end": 1856
  },
  {
    "type": "Identifier",
    "value": "UnionInternals",
    "start": 1857,
    "end": 1871
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1874,
    "end": 1881
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1882,
    "end": 1890
  },
  {
    "type": "Identifier",
    "value": "Schema",
    "start": 1891,
    "end": 1897
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "Internals",
    "start": 1909,
    "end": 1918
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1918,
    "end": 1919
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1919,
    "end": 1920
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1920,
    "end": 1921
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1921,
    "end": 1927
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1927,
    "end": 1928
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1928,
    "end": 1929
  },
  {
    "type": "String",
    "value": "\"_zod\"",
    "start": 1929,
    "end": 1935
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1936,
    "end": 1937
  },
  {
    "type": "String",
    "value": "\"input\"",
    "start": 1937,
    "end": 1944
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1944,
    "end": 1945
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1945,
    "end": 1946
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1947,
    "end": 1948
  },
  {
    "type": "Identifier",
    "value": "optin",
    "start": 1957,
    "end": 1962
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1962,
    "end": 1963
  },
  {
    "type": "Identifier",
    "value": "IsOptionalIn",
    "start": 1964,
    "end": 1976
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1977,
    "end": 1978
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1978,
    "end": 1979
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1979,
    "end": 1985
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1985,
    "end": 1986
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1986,
    "end": 1987
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1988,
    "end": 1995
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1996,
    "end": 2001
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2002,
    "end": 2003
  },
  {
    "type": "String",
    "value": "\"optional\"",
    "start": 2004,
    "end": 2014
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2015,
    "end": 2016
  },
  {
    "type": "String",
    "value": "\"defaulted\"",
    "start": 2017,
    "end": 2028
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2029,
    "end": 2030
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2031,
    "end": 2040
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2041,
    "end": 2042
  },
  {
    "type": "String",
    "value": "\"optional\"",
    "start": 2043,
    "end": 2053
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2054,
    "end": 2055
  },
  {
    "type": "String",
    "value": "\"defaulted\"",
    "start": 2056,
    "end": 2067
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2073,
    "end": 2074
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2079,
    "end": 2088
  },
  {
    "type": "Identifier",
    "value": "UnionSchema",
    "start": 2089,
    "end": 2100
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2100,
    "end": 2101
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2101,
    "end": 2102
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2103,
    "end": 2110
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 2111,
    "end": 2119
  },
  {
    "type": "Identifier",
    "value": "Schema",
    "start": 2120,
    "end": 2126
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2126,
    "end": 2127
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2127,
    "end": 2128
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2128,
    "end": 2129
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2130,
    "end": 2137
  },
  {
    "type": "Identifier",
    "value": "Schema",
    "start": 2138,
    "end": 2144
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2145,
    "end": 2146
  },
  {
    "type": "Identifier",
    "value": "_zod",
    "start": 2147,
    "end": 2151
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2151,
    "end": 2152
  },
  {
    "type": "Identifier",
    "value": "UnionInternals",
    "start": 2153,
    "end": 2167
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2167,
    "end": 2168
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2168,
    "end": 2169
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2169,
    "end": 2170
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2171,
    "end": 2172
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2177,
    "end": 2181
  },
  {
    "type": "Identifier",
    "value": "JsonValue",
    "start": 2182,
    "end": 2191
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2192,
    "end": 2193
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2194,
    "end": 2195
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2196,
    "end": 2197
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 2197,
    "end": 2198
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2198,
    "end": 2199
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2200,
    "end": 2206
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2206,
    "end": 2207
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2207,
    "end": 2208
  },
  {
    "type": "Identifier",
    "value": "JsonValue",
    "start": 2209,
    "end": 2218
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2219,
    "end": 2220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2220,
    "end": 2221
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2226,
    "end": 2230
  },
  {
    "type": "Identifier",
    "value": "_Json",
    "start": 2231,
    "end": 2236
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2237,
    "end": 2238
  },
  {
    "type": "Identifier",
    "value": "UnionSchema",
    "start": 2239,
    "end": 2250
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2250,
    "end": 2251
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2251,
    "end": 2252
  },
  {
    "type": "Identifier",
    "value": "RecordSchema",
    "start": 2252,
    "end": 2264
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2264,
    "end": 2265
  },
  {
    "type": "Identifier",
    "value": "Json",
    "start": 2265,
    "end": 2269
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2269,
    "end": 2270
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2270,
    "end": 2271
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2271,
    "end": 2272
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2272,
    "end": 2273
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2278,
    "end": 2282
  },
  {
    "type": "Identifier",
    "value": "_JsonInternals",
    "start": 2283,
    "end": 2297
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2298,
    "end": 2299
  },
  {
    "type": "Identifier",
    "value": "_Json",
    "start": 2300,
    "end": 2305
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2305,
    "end": 2306
  },
  {
    "type": "String",
    "value": "\"_zod\"",
    "start": 2306,
    "end": 2312
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2312,
    "end": 2313
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2313,
    "end": 2314
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2319,
    "end": 2328
  },
  {
    "type": "Identifier",
    "value": "JsonInternals",
    "start": 2329,
    "end": 2342
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2343,
    "end": 2350
  },
  {
    "type": "Identifier",
    "value": "_JsonInternals",
    "start": 2351,
    "end": 2365
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2366,
    "end": 2367
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 2368,
    "end": 2373
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2373,
    "end": 2374
  },
  {
    "type": "Identifier",
    "value": "JsonValue",
    "start": 2375,
    "end": 2384
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2385,
    "end": 2386
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2391,
    "end": 2400
  },
  {
    "type": "Identifier",
    "value": "Json",
    "start": 2401,
    "end": 2405
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2406,
    "end": 2413
  },
  {
    "type": "Identifier",
    "value": "_Json",
    "start": 2414,
    "end": 2419
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2420,
    "end": 2421
  },
  {
    "type": "Identifier",
    "value": "_zod",
    "start": 2422,
    "end": 2426
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2426,
    "end": 2427
  },
  {
    "type": "Identifier",
    "value": "JsonInternals",
    "start": 2428,
    "end": 2441
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2442,
    "end": 2443
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2444,
    "end": 2445
  }
]
```
