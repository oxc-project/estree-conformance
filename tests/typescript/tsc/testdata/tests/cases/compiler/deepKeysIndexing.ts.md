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
        "name": "DeepObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 87,
        "end": 97
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
                "name": "k1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 107,
                    "end": 113
                  },
                  "start": 105,
                  "end": 113
                },
                "start": 103,
                "end": 113
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "k2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 127,
                            "end": 133
                          },
                          "start": 125,
                          "end": 133
                        },
                        "start": 123,
                        "end": 133
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 136,
                        "end": 139
                      },
                      "start": 134,
                      "end": 139
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 122,
                    "end": 140
                  }
                ],
                "start": 116,
                "end": 144
              },
              "start": 114,
              "end": 144
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 102,
            "end": 145
          }
        ],
        "start": 98,
        "end": 147
      },
      "declare": false,
      "start": 77,
      "end": 147
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "keys2broken",
        "optional": false,
        "typeAnnotation": null,
        "start": 154,
        "end": 165
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
              "start": 169,
              "end": 170
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DeepObject",
                "optional": false,
                "typeAnnotation": null,
                "start": 179,
                "end": 189
              },
              "typeArguments": null,
              "start": 179,
              "end": 189
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 169,
            "end": 189
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K1",
              "optional": false,
              "typeAnnotation": null,
              "start": 193,
              "end": 195
            },
            "constraint": {
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
                  "start": 210,
                  "end": 211
                },
                "typeArguments": null,
                "start": 210,
                "end": 211
              },
              "start": 204,
              "end": 211
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 193,
            "end": 211
          }
        ],
        "start": 165,
        "end": 213
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
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 216,
              "end": 217
            },
            "typeArguments": null,
            "start": 216,
            "end": 217
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K1",
              "optional": false,
              "typeAnnotation": null,
              "start": 218,
              "end": 220
            },
            "typeArguments": null,
            "start": 218,
            "end": 220
          },
          "start": 216,
          "end": 221
        },
        "extendsType": {
          "type": "TSObjectKeyword",
          "start": 230,
          "end": 236
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Extract",
            "optional": false,
            "typeAnnotation": null,
            "start": 239,
            "end": 246
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "O",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 253,
                      "end": 254
                    },
                    "typeArguments": null,
                    "start": 253,
                    "end": 254
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 255,
                      "end": 257
                    },
                    "typeArguments": null,
                    "start": 255,
                    "end": 257
                  },
                  "start": 253,
                  "end": 258
                },
                "start": 247,
                "end": 258
              },
              {
                "type": "TSStringKeyword",
                "start": 260,
                "end": 266
              }
            ],
            "start": 246,
            "end": 267
          },
          "start": 239,
          "end": 267
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 270,
          "end": 275
        },
        "start": 216,
        "end": 275
      },
      "declare": false,
      "start": 149,
      "end": 276
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "keys2working",
        "optional": false,
        "typeAnnotation": null,
        "start": 283,
        "end": 295
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
              "start": 299,
              "end": 300
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DeepObject",
                "optional": false,
                "typeAnnotation": null,
                "start": 309,
                "end": 319
              },
              "typeArguments": null,
              "start": 309,
              "end": 319
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 299,
            "end": 319
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K1",
              "optional": false,
              "typeAnnotation": null,
              "start": 323,
              "end": 325
            },
            "constraint": {
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
                  "start": 340,
                  "end": 341
                },
                "typeArguments": null,
                "start": 340,
                "end": 341
              },
              "start": 334,
              "end": 341
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 323,
            "end": 341
          }
        ],
        "start": 295,
        "end": 343
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
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 346,
              "end": 347
            },
            "typeArguments": null,
            "start": 346,
            "end": 347
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K1",
              "optional": false,
              "typeAnnotation": null,
              "start": 348,
              "end": 350
            },
            "typeArguments": null,
            "start": 348,
            "end": 350
          },
          "start": 346,
          "end": 351
        },
        "extendsType": {
          "type": "TSObjectKeyword",
          "start": 360,
          "end": 366
        },
        "trueType": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "O",
                "optional": false,
                "typeAnnotation": null,
                "start": 375,
                "end": 376
              },
              "typeArguments": null,
              "start": 375,
              "end": 376
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K1",
                "optional": false,
                "typeAnnotation": null,
                "start": 377,
                "end": 379
              },
              "typeArguments": null,
              "start": 377,
              "end": 379
            },
            "start": 375,
            "end": 380
          },
          "start": 369,
          "end": 380
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 383,
          "end": 388
        },
        "start": 346,
        "end": 388
      },
      "declare": false,
      "start": 278,
      "end": 389
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "keys2workaround",
        "optional": false,
        "typeAnnotation": null,
        "start": 396,
        "end": 411
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
              "start": 412,
              "end": 413
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DeepObject",
                "optional": false,
                "typeAnnotation": null,
                "start": 422,
                "end": 432
              },
              "typeArguments": null,
              "start": 422,
              "end": 432
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 412,
            "end": 432
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K1",
              "optional": false,
              "typeAnnotation": null,
              "start": 434,
              "end": 436
            },
            "constraint": {
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
                  "start": 451,
                  "end": 452
                },
                "typeArguments": null,
                "start": 451,
                "end": 452
              },
              "start": 445,
              "end": 452
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 434,
            "end": 452
          }
        ],
        "start": 411,
        "end": 453
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Extract",
          "optional": false,
          "typeAnnotation": null,
          "start": 456,
          "end": 463
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "O",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 467,
                    "end": 468
                  },
                  "typeArguments": null,
                  "start": 467,
                  "end": 468
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 469,
                    "end": 471
                  },
                  "typeArguments": null,
                  "start": 469,
                  "end": 471
                },
                "start": 467,
                "end": 472
              },
              "extendsType": {
                "type": "TSObjectKeyword",
                "start": 481,
                "end": 487
              },
              "trueType": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "O",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 496,
                      "end": 497
                    },
                    "typeArguments": null,
                    "start": 496,
                    "end": 497
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 498,
                      "end": 500
                    },
                    "typeArguments": null,
                    "start": 498,
                    "end": 500
                  },
                  "start": 496,
                  "end": 501
                },
                "start": 490,
                "end": 501
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 504,
                "end": 509
              },
              "start": 467,
              "end": 509
            },
            {
              "type": "TSStringKeyword",
              "start": 513,
              "end": 519
            }
          ],
          "start": 463,
          "end": 521
        },
        "start": 456,
        "end": 521
      },
      "declare": false,
      "start": 391,
      "end": 522
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 534,
        "end": 537
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "DeepObject",
            "optional": false,
            "typeAnnotation": null,
            "start": 546,
            "end": 556
          },
          "typeArguments": null,
          "start": 546,
          "end": 556
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 561,
              "end": 562
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
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 570,
                      "end": 573
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 123,
                          "raw": "123",
                          "start": 575,
                          "end": 578
                        },
                        "start": 575,
                        "end": 578
                      },
                      "start": 573,
                      "end": 578
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 570,
                    "end": 579
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "2",
                      "raw": "\"2\"",
                      "start": 584,
                      "end": 587
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 589,
                        "end": 595
                      },
                      "start": 587,
                      "end": 595
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 584,
                    "end": 596
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "value": "3",
                      "raw": "\"3\"",
                      "start": 601,
                      "end": 604
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 606,
                        "end": 613
                      },
                      "start": 604,
                      "end": 613
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 601,
                    "end": 614
                  }
                ],
                "start": 564,
                "end": 618
              },
              "start": 562,
              "end": 618
            },
            "accessibility": null,
            "static": false,
            "start": 561,
            "end": 619
          }
        ],
        "start": 557,
        "end": 621
      },
      "declare": false,
      "start": 524,
      "end": 621
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 629,
        "end": 632
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
              "start": 633,
              "end": 634
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DeepObject",
                "optional": false,
                "typeAnnotation": null,
                "start": 643,
                "end": 653
              },
              "typeArguments": null,
              "start": 643,
              "end": 653
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 633,
            "end": 653
          }
        ],
        "start": 632,
        "end": 654
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
              "name": "broken",
              "optional": false,
              "typeAnnotation": null,
              "start": 659,
              "end": 665
            },
            "value": {
              "type": "FunctionExpression",
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
                      "name": "K1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 671,
                      "end": 673
                    },
                    "constraint": {
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
                          "start": 688,
                          "end": 689
                        },
                        "typeArguments": null,
                        "start": 688,
                        "end": 689
                      },
                      "start": 682,
                      "end": 689
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 671,
                    "end": 689
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 695,
                      "end": 697
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "keys2broken",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 706,
                        "end": 717
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "O",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 718,
                              "end": 719
                            },
                            "typeArguments": null,
                            "start": 718,
                            "end": 719
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "K1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 721,
                              "end": 723
                            },
                            "typeArguments": null,
                            "start": 721,
                            "end": 723
                          }
                        ],
                        "start": 717,
                        "end": 724
                      },
                      "start": 706,
                      "end": 724
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 695,
                    "end": 724
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 730,
                      "end": 731
                    },
                    "constraint": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "O",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 740,
                            "end": 741
                          },
                          "typeArguments": null,
                          "start": 740,
                          "end": 741
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 742,
                            "end": 744
                          },
                          "typeArguments": null,
                          "start": 742,
                          "end": 744
                        },
                        "start": 740,
                        "end": 745
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 746,
                          "end": 748
                        },
                        "typeArguments": null,
                        "start": 746,
                        "end": 748
                      },
                      "start": 740,
                      "end": 749
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 730,
                    "end": 749
                  }
                ],
                "start": 665,
                "end": 753
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 758,
                        "end": 760
                      },
                      "typeArguments": null,
                      "start": 758,
                      "end": 760
                    },
                    "start": 756,
                    "end": 760
                  },
                  "start": 754,
                  "end": 760
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 766,
                        "end": 768
                      },
                      "typeArguments": null,
                      "start": 766,
                      "end": 768
                    },
                    "start": 764,
                    "end": 768
                  },
                  "start": 762,
                  "end": 768
                },
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
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 777,
                        "end": 778
                      },
                      "typeArguments": null,
                      "start": 777,
                      "end": 778
                    },
                    "start": 775,
                    "end": 778
                  },
                  "start": 770,
                  "end": 778
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 780,
                "end": 782
              },
              "expression": false,
              "start": 665,
              "end": 782
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 659,
            "end": 782
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "working",
              "optional": false,
              "typeAnnotation": null,
              "start": 786,
              "end": 793
            },
            "value": {
              "type": "FunctionExpression",
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
                      "name": "K1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 799,
                      "end": 801
                    },
                    "constraint": {
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
                          "start": 816,
                          "end": 817
                        },
                        "typeArguments": null,
                        "start": 816,
                        "end": 817
                      },
                      "start": 810,
                      "end": 817
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 799,
                    "end": 817
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 823,
                      "end": 825
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "keys2working",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 834,
                        "end": 846
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "O",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 847,
                              "end": 848
                            },
                            "typeArguments": null,
                            "start": 847,
                            "end": 848
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "K1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 850,
                              "end": 852
                            },
                            "typeArguments": null,
                            "start": 850,
                            "end": 852
                          }
                        ],
                        "start": 846,
                        "end": 853
                      },
                      "start": 834,
                      "end": 853
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 823,
                    "end": 853
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 859,
                      "end": 860
                    },
                    "constraint": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "O",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 869,
                            "end": 870
                          },
                          "typeArguments": null,
                          "start": 869,
                          "end": 870
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 871,
                            "end": 873
                          },
                          "typeArguments": null,
                          "start": 871,
                          "end": 873
                        },
                        "start": 869,
                        "end": 874
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 875,
                          "end": 877
                        },
                        "typeArguments": null,
                        "start": 875,
                        "end": 877
                      },
                      "start": 869,
                      "end": 878
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 859,
                    "end": 878
                  }
                ],
                "start": 793,
                "end": 882
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 887,
                        "end": 889
                      },
                      "typeArguments": null,
                      "start": 887,
                      "end": 889
                    },
                    "start": 885,
                    "end": 889
                  },
                  "start": 883,
                  "end": 889
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 895,
                        "end": 897
                      },
                      "typeArguments": null,
                      "start": 895,
                      "end": 897
                    },
                    "start": 893,
                    "end": 897
                  },
                  "start": 891,
                  "end": 897
                },
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
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 906,
                        "end": 907
                      },
                      "typeArguments": null,
                      "start": 906,
                      "end": 907
                    },
                    "start": 904,
                    "end": 907
                  },
                  "start": 899,
                  "end": 907
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 909,
                "end": 911
              },
              "expression": false,
              "start": 793,
              "end": 911
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 786,
            "end": 911
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "workaround",
              "optional": false,
              "typeAnnotation": null,
              "start": 915,
              "end": 925
            },
            "value": {
              "type": "FunctionExpression",
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
                      "name": "K1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 931,
                      "end": 933
                    },
                    "constraint": {
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
                          "start": 948,
                          "end": 949
                        },
                        "typeArguments": null,
                        "start": 948,
                        "end": 949
                      },
                      "start": 942,
                      "end": 949
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 931,
                    "end": 949
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 955,
                      "end": 957
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "keys2workaround",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 966,
                        "end": 981
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "O",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 982,
                              "end": 983
                            },
                            "typeArguments": null,
                            "start": 982,
                            "end": 983
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "K1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 985,
                              "end": 987
                            },
                            "typeArguments": null,
                            "start": 985,
                            "end": 987
                          }
                        ],
                        "start": 981,
                        "end": 988
                      },
                      "start": 966,
                      "end": 988
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 955,
                    "end": 988
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 994,
                      "end": 995
                    },
                    "constraint": {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "O",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1004,
                            "end": 1005
                          },
                          "typeArguments": null,
                          "start": 1004,
                          "end": 1005
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1006,
                            "end": 1008
                          },
                          "typeArguments": null,
                          "start": 1006,
                          "end": 1008
                        },
                        "start": 1004,
                        "end": 1009
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1010,
                          "end": 1012
                        },
                        "typeArguments": null,
                        "start": 1010,
                        "end": 1012
                      },
                      "start": 1004,
                      "end": 1013
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 994,
                    "end": 1013
                  }
                ],
                "start": 925,
                "end": 1017
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1022,
                        "end": 1024
                      },
                      "typeArguments": null,
                      "start": 1022,
                      "end": 1024
                    },
                    "start": 1020,
                    "end": 1024
                  },
                  "start": 1018,
                  "end": 1024
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "k2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1030,
                        "end": 1032
                      },
                      "typeArguments": null,
                      "start": 1030,
                      "end": 1032
                    },
                    "start": 1028,
                    "end": 1032
                  },
                  "start": 1026,
                  "end": 1032
                },
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
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1041,
                        "end": 1042
                      },
                      "typeArguments": null,
                      "start": 1041,
                      "end": 1042
                    },
                    "start": 1039,
                    "end": 1042
                  },
                  "start": 1034,
                  "end": 1042
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1044,
                "end": 1046
              },
              "expression": false,
              "start": 925,
              "end": 1046
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 915,
            "end": 1046
          }
        ],
        "start": 655,
        "end": 1048
      },
      "abstract": false,
      "declare": false,
      "start": 623,
      "end": 1048
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
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 1056,
            "end": 1059
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 1066,
              "end": 1069
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1070,
                    "end": 1073
                  },
                  "typeArguments": null,
                  "start": 1070,
                  "end": 1073
                }
              ],
              "start": 1069,
              "end": 1074
            },
            "arguments": [],
            "start": 1062,
            "end": 1076
          },
          "definite": false,
          "start": 1056,
          "end": 1076
        }
      ],
      "declare": false,
      "start": 1050,
      "end": 1077
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 1141,
            "end": 1144
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "broken",
            "optional": false,
            "typeAnnotation": null,
            "start": 1145,
            "end": 1151
          },
          "optional": false,
          "computed": false,
          "start": 1141,
          "end": 1151
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "a",
            "raw": "\"a\"",
            "start": 1152,
            "end": 1155
          },
          {
            "type": "Literal",
            "value": "1",
            "raw": "\"1\"",
            "start": 1157,
            "end": 1160
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1162,
            "end": 1166
          }
        ],
        "optional": false,
        "start": 1141,
        "end": 1167
      },
      "directive": null,
      "start": 1141,
      "end": 1168
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 1252,
            "end": 1255
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "working",
            "optional": false,
            "typeAnnotation": null,
            "start": 1256,
            "end": 1263
          },
          "optional": false,
          "computed": false,
          "start": 1252,
          "end": 1263
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "a",
            "raw": "\"a\"",
            "start": 1264,
            "end": 1267
          },
          {
            "type": "Literal",
            "value": "1",
            "raw": "\"1\"",
            "start": 1269,
            "end": 1272
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1274,
            "end": 1278
          }
        ],
        "optional": false,
        "start": 1252,
        "end": 1279
      },
      "directive": null,
      "start": 1252,
      "end": 1280
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 1309,
            "end": 1312
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "workaround",
            "optional": false,
            "typeAnnotation": null,
            "start": 1313,
            "end": 1323
          },
          "optional": false,
          "computed": false,
          "start": 1309,
          "end": 1323
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "a",
            "raw": "\"a\"",
            "start": 1324,
            "end": 1327
          },
          {
            "type": "Literal",
            "value": "1",
            "raw": "\"1\"",
            "start": 1329,
            "end": 1332
          },
          {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1334,
            "end": 1338
          }
        ],
        "optional": false,
        "start": 1309,
        "end": 1339
      },
      "directive": null,
      "start": 1309,
      "end": 1340
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 77,
  "end": 1368
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 77,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "DeepObject",
    "start": 87,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 103,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 107,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 123,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 127,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 136,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 149,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "keys2broken",
    "start": 154,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 169,
    "end": 170
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 171,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "DeepObject",
    "start": 179,
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
    "value": "K1",
    "start": 193,
    "end": 195
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 196,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 204,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 210,
    "end": 211
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
    "type": "Identifier",
    "value": "O",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 218,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 220,
    "end": 221
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 222,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 230,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "Extract",
    "start": 239,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 247,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 255,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 260,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 270,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 278,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "keys2working",
    "start": 283,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 299,
    "end": 300
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 301,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "DeepObject",
    "start": 309,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 323,
    "end": 325
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 326,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 334,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 348,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 350,
    "end": 351
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 352,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 360,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 369,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 377,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 383,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 391,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "keys2workaround",
    "start": 396,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 412,
    "end": 413
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 414,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "DeepObject",
    "start": 422,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 434,
    "end": 436
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 437,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 445,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 451,
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
    "value": "=",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "Extract",
    "start": 456,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 469,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 471,
    "end": 472
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 473,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 481,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 488,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 490,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 498,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 504,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 513,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 521,
    "end": 522
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 524,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 534,
    "end": 537
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 538,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "DeepObject",
    "start": 546,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 557,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 564,
    "end": 565
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 570,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 573,
    "end": 574
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 575,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 578,
    "end": 579
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 584,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 589,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 595,
    "end": 596
  },
  {
    "type": "String",
    "value": "\"3\"",
    "start": 601,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 604,
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
    "value": ";",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Punctuator",
    "value": "}",
    "start": 620,
    "end": 621
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 623,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 629,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "O",
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
    "value": "DeepObject",
    "start": 643,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 655,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "broken",
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
    "type": "Identifier",
    "value": "K1",
    "start": 671,
    "end": 673
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 674,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 682,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 689,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "K2",
    "start": 695,
    "end": 697
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 698,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "keys2broken",
    "start": 706,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 717,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 719,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 721,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "V",
    "start": 730,
    "end": 731
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 732,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 741,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 742,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 745,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "K2",
    "start": 746,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 754,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 756,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 758,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 760,
    "end": 761
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 762,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 764,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "K2",
    "start": 766,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 768,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 770,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 775,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 781,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "working",
    "start": 786,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 793,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 799,
    "end": 801
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 802,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 810,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "O",
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
    "type": "Identifier",
    "value": "K2",
    "start": 823,
    "end": 825
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 826,
    "end": 833
  },
  {
    "type": "Identifier",
    "value": "keys2working",
    "start": 834,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 846,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 848,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 850,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 853,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 859,
    "end": 860
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 861,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 870,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 871,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Identifier",
    "value": "K2",
    "start": 875,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 877,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 882,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 883,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 885,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 887,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 889,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 891,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 893,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "K2",
    "start": 895,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 897,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 899,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 904,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 906,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 910,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "workaround",
    "start": 915,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 925,
    "end": 926
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 931,
    "end": 933
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 934,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 942,
    "end": 947
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 949,
    "end": 950
  },
  {
    "type": "Identifier",
    "value": "K2",
    "start": 955,
    "end": 957
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 958,
    "end": 965
  },
  {
    "type": "Identifier",
    "value": "keys2workaround",
    "start": 966,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 981,
    "end": 982
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 982,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 983,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 985,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 987,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 988,
    "end": 989
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 994,
    "end": 995
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 996,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 1006,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Identifier",
    "value": "K2",
    "start": 1010,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 1018,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 1022,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 1026,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Identifier",
    "value": "K2",
    "start": 1030,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1034,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1050,
    "end": 1055
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1056,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1062,
    "end": 1065
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 1066,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1070,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1141,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Identifier",
    "value": "broken",
    "start": 1145,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1152,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 1157,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1162,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1252,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Identifier",
    "value": "working",
    "start": 1256,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1264,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 1269,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1274,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1309,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Identifier",
    "value": "workaround",
    "start": 1313,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1324,
    "end": 1327
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 1329,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1334,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1339,
    "end": 1340
  }
]
```
