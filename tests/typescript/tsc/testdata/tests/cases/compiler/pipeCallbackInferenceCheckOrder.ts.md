__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Pipeable",
          "optional": false,
          "typeAnnotation": null,
          "start": 171,
          "end": 179
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "pipe",
                "optional": false,
                "typeAnnotation": null,
                "start": 184,
                "end": 188
              },
              "computed": false,
              "optional": false,
              "kind": "method",
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
                      "start": 189,
                      "end": 190
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 189,
                    "end": 190
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 192,
                      "end": 193
                    },
                    "constraint": null,
                    "default": {
                      "type": "TSNeverKeyword",
                      "start": 196,
                      "end": 201
                    },
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 192,
                    "end": 201
                  }
                ],
                "start": 188,
                "end": 202
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
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 209,
                        "end": 210
                      },
                      "typeArguments": null,
                      "start": 209,
                      "end": 210
                    },
                    "start": 207,
                    "end": 210
                  },
                  "start": 203,
                  "end": 210
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ab",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 220,
                                "end": 221
                              },
                              "typeArguments": null,
                              "start": 220,
                              "end": 221
                            },
                            "start": 218,
                            "end": 221
                          },
                          "start": 217,
                          "end": 221
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 226,
                            "end": 227
                          },
                          "typeArguments": null,
                          "start": 226,
                          "end": 227
                        },
                        "start": 223,
                        "end": 227
                      },
                      "start": 216,
                      "end": 227
                    },
                    "start": 214,
                    "end": 227
                  },
                  "start": 212,
                  "end": 227
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 230,
                    "end": 231
                  },
                  "typeArguments": null,
                  "start": 230,
                  "end": 231
                },
                "start": 228,
                "end": 231
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 184,
              "end": 232
            }
          ],
          "start": 180,
          "end": 234
        },
        "declare": false,
        "start": 161,
        "end": 234
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 154,
      "end": 234
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Covariant",
        "optional": false,
        "typeAnnotation": null,
        "start": 241,
        "end": 250
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
              "start": 251,
              "end": 252
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 251,
            "end": 252
          }
        ],
        "start": 250,
        "end": 253
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "_",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNeverKeyword",
                "start": 260,
                "end": 265
              },
              "start": 258,
              "end": 265
            },
            "start": 257,
            "end": 265
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 270,
              "end": 271
            },
            "typeArguments": null,
            "start": 270,
            "end": 271
          },
          "start": 267,
          "end": 271
        },
        "start": 256,
        "end": 271
      },
      "declare": false,
      "start": 236,
      "end": 272
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "VarianceStruct",
        "optional": false,
        "typeAnnotation": null,
        "start": 284,
        "end": 298
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
              "start": 303,
              "end": 304
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": true,
            "const": false,
            "start": 299,
            "end": 304
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 310,
              "end": 311
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": true,
            "const": false,
            "start": 306,
            "end": 311
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 317,
              "end": 318
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": true,
            "const": false,
            "start": 313,
            "end": 318
          }
        ],
        "start": 298,
        "end": 319
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
              "name": "_V",
              "optional": false,
              "typeAnnotation": null,
              "start": 333,
              "end": 335
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 337,
                "end": 343
              },
              "start": 335,
              "end": 343
            },
            "accessibility": null,
            "static": false,
            "start": 324,
            "end": 344
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_A",
              "optional": false,
              "typeAnnotation": null,
              "start": 356,
              "end": 358
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Covariant",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 360,
                  "end": 369
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
                        "start": 370,
                        "end": 371
                      },
                      "typeArguments": null,
                      "start": 370,
                      "end": 371
                    }
                  ],
                  "start": 369,
                  "end": 372
                },
                "start": 360,
                "end": 372
              },
              "start": 358,
              "end": 372
            },
            "accessibility": null,
            "static": false,
            "start": 347,
            "end": 373
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_E",
              "optional": false,
              "typeAnnotation": null,
              "start": 385,
              "end": 387
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Covariant",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 389,
                  "end": 398
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 399,
                        "end": 400
                      },
                      "typeArguments": null,
                      "start": 399,
                      "end": 400
                    }
                  ],
                  "start": 398,
                  "end": 401
                },
                "start": 389,
                "end": 401
              },
              "start": 387,
              "end": 401
            },
            "accessibility": null,
            "static": false,
            "start": 376,
            "end": 402
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_R",
              "optional": false,
              "typeAnnotation": null,
              "start": 414,
              "end": 416
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Covariant",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 418,
                  "end": 427
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 428,
                        "end": 429
                      },
                      "typeArguments": null,
                      "start": 428,
                      "end": 429
                    }
                  ],
                  "start": 427,
                  "end": 430
                },
                "start": 418,
                "end": 430
              },
              "start": 416,
              "end": 430
            },
            "accessibility": null,
            "static": false,
            "start": 405,
            "end": 431
          }
        ],
        "start": 320,
        "end": 433
      },
      "declare": false,
      "start": 274,
      "end": 433
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
            "name": "EffectTypeId",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 470,
                  "end": 476
                },
                "start": 463,
                "end": 476
              },
              "start": 461,
              "end": 476
            },
            "start": 449,
            "end": 476
          },
          "init": null,
          "definite": false,
          "start": 449,
          "end": 476
        }
      ],
      "declare": true,
      "start": 435,
      "end": 477
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Variance",
        "optional": false,
        "typeAnnotation": null,
        "start": 489,
        "end": 497
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
              "start": 502,
              "end": 503
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": true,
            "const": false,
            "start": 498,
            "end": 503
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 509,
              "end": 510
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": true,
            "const": false,
            "start": 505,
            "end": 510
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 516,
              "end": 517
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": true,
            "const": false,
            "start": 512,
            "end": 517
          }
        ],
        "start": 497,
        "end": 518
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "EffectTypeId",
              "optional": false,
              "typeAnnotation": null,
              "start": 533,
              "end": 545
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "VarianceStruct",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 548,
                  "end": 562
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
                        "start": 563,
                        "end": 564
                      },
                      "typeArguments": null,
                      "start": 563,
                      "end": 564
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 566,
                        "end": 567
                      },
                      "typeArguments": null,
                      "start": 566,
                      "end": 567
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 569,
                        "end": 570
                      },
                      "typeArguments": null,
                      "start": 569,
                      "end": 570
                    }
                  ],
                  "start": 562,
                  "end": 571
                },
                "start": 548,
                "end": 571
              },
              "start": 546,
              "end": 571
            },
            "accessibility": null,
            "static": false,
            "start": 523,
            "end": 572
          }
        ],
        "start": 519,
        "end": 574
      },
      "declare": false,
      "start": 479,
      "end": 574
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Effect",
        "optional": false,
        "typeAnnotation": null,
        "start": 586,
        "end": 592
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
              "start": 597,
              "end": 598
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": true,
            "const": false,
            "start": 593,
            "end": 598
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 604,
              "end": 605
            },
            "constraint": null,
            "default": {
              "type": "TSNeverKeyword",
              "start": 608,
              "end": 613
            },
            "in": false,
            "out": true,
            "const": false,
            "start": 600,
            "end": 613
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 619,
              "end": 620
            },
            "constraint": null,
            "default": {
              "type": "TSNeverKeyword",
              "start": 623,
              "end": 628
            },
            "in": false,
            "out": true,
            "const": false,
            "start": 615,
            "end": 628
          }
        ],
        "start": 592,
        "end": 629
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Variance",
            "optional": false,
            "typeAnnotation": null,
            "start": 640,
            "end": 648
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
                  "start": 649,
                  "end": 650
                },
                "typeArguments": null,
                "start": 649,
                "end": 650
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 652,
                  "end": 653
                },
                "typeArguments": null,
                "start": 652,
                "end": 653
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 655,
                  "end": 656
                },
                "typeArguments": null,
                "start": 655,
                "end": 656
              }
            ],
            "start": 648,
            "end": 657
          },
          "start": 640,
          "end": 657
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pipeable",
            "optional": false,
            "typeAnnotation": null,
            "start": 663,
            "end": 671
          },
          "typeArguments": null,
          "start": 663,
          "end": 671
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 672,
        "end": 674
      },
      "declare": false,
      "start": 576,
      "end": 674
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Class",
        "optional": false,
        "typeAnnotation": null,
        "start": 686,
        "end": 691
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Fields",
              "optional": false,
              "typeAnnotation": null,
              "start": 692,
              "end": 698
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 692,
            "end": 698
          }
        ],
        "start": 691,
        "end": 699
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Pipeable",
            "optional": false,
            "typeAnnotation": null,
            "start": 708,
            "end": 716
          },
          "typeArguments": null,
          "start": 708,
          "end": 716
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Fields",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 729,
                  "end": 735
                },
                "typeArguments": null,
                "start": 729,
                "end": 735
              },
              "start": 727,
              "end": 735
            },
            "start": 721,
            "end": 736
          }
        ],
        "start": 717,
        "end": 738
      },
      "declare": false,
      "start": 676,
      "end": 738
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TaggedErrorClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 750,
        "end": 766
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Tag",
              "optional": false,
              "typeAnnotation": null,
              "start": 767,
              "end": 770
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 779,
              "end": 785
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 767,
            "end": 785
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Fields",
              "optional": false,
              "typeAnnotation": null,
              "start": 787,
              "end": 793
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 787,
            "end": 793
          }
        ],
        "start": 766,
        "end": 794
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Class",
            "optional": false,
            "typeAnnotation": null,
            "start": 803,
            "end": 808
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Fields",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 809,
                  "end": 815
                },
                "typeArguments": null,
                "start": 809,
                "end": 815
              }
            ],
            "start": 808,
            "end": 816
          },
          "start": 803,
          "end": 816
        }
      ],
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
              "name": "_tag",
              "optional": false,
              "typeAnnotation": null,
              "start": 830,
              "end": 834
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Tag",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 836,
                  "end": 839
                },
                "typeArguments": null,
                "start": 836,
                "end": 839
              },
              "start": 834,
              "end": 839
            },
            "accessibility": null,
            "static": false,
            "start": 821,
            "end": 840
          }
        ],
        "start": 817,
        "end": 842
      },
      "declare": false,
      "start": 740,
      "end": 842
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
            "name": "TaggedError",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "identifier",
                    "optional": true,
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
                    "start": 872,
                    "end": 891
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Tag",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 900,
                            "end": 903
                          },
                          "constraint": {
                            "type": "TSStringKeyword",
                            "start": 912,
                            "end": 918
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 900,
                          "end": 918
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Fields",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 922,
                            "end": 928
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 922,
                          "end": 928
                        }
                      ],
                      "start": 896,
                      "end": 930
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "tag",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Tag",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 939,
                              "end": 942
                            },
                            "typeArguments": null,
                            "start": 939,
                            "end": 942
                          },
                          "start": 937,
                          "end": 942
                        },
                        "start": 934,
                        "end": 942
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fieldsOr",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Fields",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 956,
                              "end": 962
                            },
                            "typeArguments": null,
                            "start": 956,
                            "end": 962
                          },
                          "start": 954,
                          "end": 962
                        },
                        "start": 946,
                        "end": 962
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TaggedErrorClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 968,
                          "end": 984
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Tag",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 988,
                                "end": 991
                              },
                              "typeArguments": null,
                              "start": 988,
                              "end": 991
                            },
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
                                    "name": "_tag",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1010,
                                    "end": 1014
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Tag",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1016,
                                        "end": 1019
                                      },
                                      "typeArguments": null,
                                      "start": 1016,
                                      "end": 1019
                                    },
                                    "start": 1014,
                                    "end": 1019
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 1001,
                                  "end": 1020
                                }
                              ],
                              "start": 995,
                              "end": 1024
                            }
                          ],
                          "start": 984,
                          "end": 1026
                        },
                        "start": 968,
                        "end": 1026
                      },
                      "start": 965,
                      "end": 1026
                    },
                    "start": 896,
                    "end": 1026
                  },
                  "start": 893,
                  "end": 1026
                },
                "start": 871,
                "end": 1026
              },
              "start": 869,
              "end": 1026
            },
            "start": 858,
            "end": 1026
          },
          "init": null,
          "definite": false,
          "start": 858,
          "end": 1026
        }
      ],
      "declare": true,
      "start": 844,
      "end": 1027
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
            "name": "log",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
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
                      "name": "message",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1055,
                      "end": 1062
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ReadonlyArray",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1064,
                          "end": 1077
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSAnyKeyword",
                              "start": 1078,
                              "end": 1081
                            }
                          ],
                          "start": 1077,
                          "end": 1082
                        },
                        "start": 1064,
                        "end": 1082
                      },
                      "start": 1062,
                      "end": 1082
                    },
                    "value": null,
                    "start": 1052,
                    "end": 1082
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Effect",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1088,
                      "end": 1094
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSVoidKeyword",
                          "start": 1095,
                          "end": 1099
                        },
                        {
                          "type": "TSNeverKeyword",
                          "start": 1101,
                          "end": 1106
                        },
                        {
                          "type": "TSNeverKeyword",
                          "start": 1108,
                          "end": 1113
                        }
                      ],
                      "start": 1094,
                      "end": 1114
                    },
                    "start": 1088,
                    "end": 1114
                  },
                  "start": 1085,
                  "end": 1114
                },
                "start": 1048,
                "end": 1114
              },
              "start": 1046,
              "end": 1114
            },
            "start": 1043,
            "end": 1114
          },
          "init": null,
          "definite": false,
          "start": 1043,
          "end": 1114
        }
      ],
      "declare": true,
      "start": 1029,
      "end": 1115
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "categoriesKey",
              "optional": false,
              "typeAnnotation": null,
              "start": 1130,
              "end": 1143
            },
            "init": {
              "type": "Literal",
              "value": "@effect/error/categories",
              "raw": "\"@effect/error/categories\"",
              "start": 1146,
              "end": 1172
            },
            "definite": false,
            "start": 1130,
            "end": 1172
          }
        ],
        "declare": false,
        "start": 1124,
        "end": 1173
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1117,
      "end": 1173
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "withCategory",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Categories",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1211,
                          "end": 1221
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Array",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1230,
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
                                  "name": "PropertyKey",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1236,
                                  "end": 1247
                                },
                                "typeArguments": null,
                                "start": 1236,
                                "end": 1247
                              }
                            ],
                            "start": 1235,
                            "end": 1248
                          },
                          "start": 1230,
                          "end": 1248
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1211,
                        "end": 1248
                      }
                    ],
                    "start": 1210,
                    "end": 1249
                  },
                  "params": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "categories",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1256,
                        "end": 1266
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Categories",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1268,
                            "end": 1278
                          },
                          "typeArguments": null,
                          "start": 1268,
                          "end": 1278
                        },
                        "start": 1266,
                        "end": 1278
                      },
                      "value": null,
                      "start": 1253,
                      "end": 1278
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Args",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1285,
                              "end": 1289
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Array",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1298,
                                "end": 1303
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSAnyKeyword",
                                    "start": 1304,
                                    "end": 1307
                                  }
                                ],
                                "start": 1303,
                                "end": 1308
                              },
                              "start": 1298,
                              "end": 1308
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1285,
                            "end": 1308
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Ret",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1310,
                              "end": 1313
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1310,
                            "end": 1313
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1315,
                              "end": 1316
                            },
                            "constraint": {
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
                                        "start": 1335,
                                        "end": 1339
                                      },
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Args",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1341,
                                            "end": 1345
                                          },
                                          "typeArguments": null,
                                          "start": 1341,
                                          "end": 1345
                                        },
                                        "start": 1339,
                                        "end": 1345
                                      },
                                      "value": null,
                                      "start": 1332,
                                      "end": 1345
                                    }
                                  ],
                                  "returnType": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Ret",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1348,
                                        "end": 1351
                                      },
                                      "typeArguments": null,
                                      "start": 1348,
                                      "end": 1351
                                    },
                                    "start": 1346,
                                    "end": 1351
                                  },
                                  "start": 1327,
                                  "end": 1351
                                }
                              ],
                              "start": 1325,
                              "end": 1353
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1315,
                            "end": 1353
                          }
                        ],
                        "start": 1284,
                        "end": 1354
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1361,
                                "end": 1362
                              },
                              "typeArguments": null,
                              "start": 1361,
                              "end": 1362
                            },
                            "start": 1359,
                            "end": 1362
                          },
                          "start": 1358,
                          "end": 1362
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSIntersectionType",
                          "types": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1368,
                                "end": 1369
                              },
                              "typeArguments": null,
                              "start": 1368,
                              "end": 1369
                            },
                            {
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
                                        "start": 1384,
                                        "end": 1388
                                      },
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Args",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1390,
                                            "end": 1394
                                          },
                                          "typeArguments": null,
                                          "start": 1390,
                                          "end": 1394
                                        },
                                        "start": 1388,
                                        "end": 1394
                                      },
                                      "value": null,
                                      "start": 1381,
                                      "end": 1394
                                    }
                                  ],
                                  "returnType": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSIntersectionType",
                                      "types": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Ret",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1397,
                                            "end": 1400
                                          },
                                          "typeArguments": null,
                                          "start": 1397,
                                          "end": 1400
                                        },
                                        {
                                          "type": "TSTypeLiteral",
                                          "members": [
                                            {
                                              "type": "TSPropertySignature",
                                              "computed": true,
                                              "optional": false,
                                              "readonly": false,
                                              "key": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "categoriesKey",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1410,
                                                "end": 1423
                                              },
                                              "typeAnnotation": {
                                                "type": "TSTypeAnnotation",
                                                "typeAnnotation": {
                                                  "type": "TSMappedType",
                                                  "key": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "Cat",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 1429,
                                                    "end": 1432
                                                  },
                                                  "constraint": {
                                                    "type": "TSIndexedAccessType",
                                                    "objectType": {
                                                      "type": "TSTypeReference",
                                                      "typeName": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "Categories",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 1436,
                                                        "end": 1446
                                                      },
                                                      "typeArguments": null,
                                                      "start": 1436,
                                                      "end": 1446
                                                    },
                                                    "indexType": {
                                                      "type": "TSNumberKeyword",
                                                      "start": 1447,
                                                      "end": 1453
                                                    },
                                                    "start": 1436,
                                                    "end": 1454
                                                  },
                                                  "nameType": null,
                                                  "typeAnnotation": {
                                                    "type": "TSLiteralType",
                                                    "literal": {
                                                      "type": "Literal",
                                                      "value": true,
                                                      "raw": "true",
                                                      "start": 1457,
                                                      "end": 1461
                                                    },
                                                    "start": 1457,
                                                    "end": 1461
                                                  },
                                                  "optional": false,
                                                  "readonly": null,
                                                  "start": 1426,
                                                  "end": 1463
                                                },
                                                "start": 1424,
                                                "end": 1463
                                              },
                                              "accessibility": null,
                                              "static": false,
                                              "start": 1409,
                                              "end": 1464
                                            }
                                          ],
                                          "start": 1403,
                                          "end": 1468
                                        }
                                      ],
                                      "start": 1397,
                                      "end": 1468
                                    },
                                    "start": 1395,
                                    "end": 1468
                                  },
                                  "start": 1376,
                                  "end": 1469
                                }
                              ],
                              "start": 1372,
                              "end": 1471
                            }
                          ],
                          "start": 1368,
                          "end": 1471
                        },
                        "start": 1365,
                        "end": 1471
                      },
                      "start": 1284,
                      "end": 1471
                    },
                    "start": 1281,
                    "end": 1471
                  },
                  "start": 1210,
                  "end": 1471
                },
                "start": 1208,
                "end": 1471
              },
              "start": 1196,
              "end": 1471
            },
            "init": null,
            "definite": false,
            "start": 1196,
            "end": 1471
          }
        ],
        "declare": true,
        "start": 1182,
        "end": 1472
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1175,
      "end": 1472
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "AllKeys",
          "optional": false,
          "typeAnnotation": null,
          "start": 1486,
          "end": 1493
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 1494,
                "end": 1495
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1494,
              "end": 1495
            }
          ],
          "start": 1493,
          "end": 1496
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 1499,
              "end": 1500
            },
            "typeArguments": null,
            "start": 1499,
            "end": 1500
          },
          "extendsType": {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": true,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "categoriesKey",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1512,
                  "end": 1525
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSInferType",
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Q",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1534,
                        "end": 1535
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1534,
                      "end": 1535
                    },
                    "start": 1528,
                    "end": 1535
                  },
                  "start": 1526,
                  "end": 1535
                },
                "accessibility": null,
                "static": false,
                "start": 1511,
                "end": 1535
              }
            ],
            "start": 1509,
            "end": 1537
          },
          "trueType": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Q",
                "optional": false,
                "typeAnnotation": null,
                "start": 1548,
                "end": 1549
              },
              "typeArguments": null,
              "start": 1548,
              "end": 1549
            },
            "start": 1542,
            "end": 1549
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1554,
            "end": 1559
          },
          "start": 1499,
          "end": 1559
        },
        "declare": false,
        "start": 1481,
        "end": 1560
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1474,
      "end": 1560
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ExtractAll",
          "optional": false,
          "typeAnnotation": null,
          "start": 1573,
          "end": 1583
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 1584,
                "end": 1585
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1584,
              "end": 1585
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Cats",
                "optional": false,
                "typeAnnotation": null,
                "start": 1587,
                "end": 1591
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PropertyKey",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1600,
                  "end": 1611
                },
                "typeArguments": null,
                "start": 1600,
                "end": 1611
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1587,
              "end": 1611
            }
          ],
          "start": 1583,
          "end": 1612
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Cats",
              "optional": false,
              "typeAnnotation": null,
              "start": 1615,
              "end": 1619
            },
            "typeArguments": null,
            "start": 1615,
            "end": 1619
          },
          "extendsType": {
            "type": "TSAnyKeyword",
            "start": 1628,
            "end": 1631
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Extract",
              "optional": false,
              "typeAnnotation": null,
              "start": 1636,
              "end": 1643
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1644,
                    "end": 1645
                  },
                  "typeArguments": null,
                  "start": 1644,
                  "end": 1645
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": true,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "categoriesKey",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1650,
                        "end": 1663
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSMappedType",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1669,
                            "end": 1670
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Cats",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1674,
                              "end": 1678
                            },
                            "typeArguments": null,
                            "start": 1674,
                            "end": 1678
                          },
                          "nameType": null,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1681,
                            "end": 1684
                          },
                          "optional": false,
                          "readonly": null,
                          "start": 1666,
                          "end": 1686
                        },
                        "start": 1664,
                        "end": 1686
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1649,
                      "end": 1686
                    }
                  ],
                  "start": 1647,
                  "end": 1688
                }
              ],
              "start": 1643,
              "end": 1689
            },
            "start": 1636,
            "end": 1689
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1694,
            "end": 1699
          },
          "start": 1615,
          "end": 1699
        },
        "declare": false,
        "start": 1568,
        "end": 1700
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1561,
      "end": 1700
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "catchCategory",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1742,
                          "end": 1743
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1742,
                        "end": 1743
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Categories",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1753,
                          "end": 1763
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Array",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1772,
                            "end": 1777
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "AllKeys",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1778,
                                  "end": 1785
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "E",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1786,
                                        "end": 1787
                                      },
                                      "typeArguments": null,
                                      "start": 1786,
                                      "end": 1787
                                    }
                                  ],
                                  "start": 1785,
                                  "end": 1788
                                },
                                "start": 1778,
                                "end": 1788
                              }
                            ],
                            "start": 1777,
                            "end": 1789
                          },
                          "start": 1772,
                          "end": 1789
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": true,
                        "start": 1747,
                        "end": 1789
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1793,
                          "end": 1795
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1793,
                        "end": 1795
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1799,
                          "end": 1801
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1799,
                        "end": 1801
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1805,
                          "end": 1807
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1805,
                        "end": 1807
                      }
                    ],
                    "start": 1738,
                    "end": 1809
                  },
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
                        "start": 1816,
                        "end": 1820
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
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
                                  "name": "Categories",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1831,
                                  "end": 1841
                                },
                                "typeArguments": null,
                                "start": 1831,
                                "end": 1841
                              },
                              "start": 1828,
                              "end": 1841
                            },
                            {
                              "type": "TSNamedTupleMember",
                              "label": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "f",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1847,
                                "end": 1848
                              },
                              "elementType": {
                                "type": "TSFunctionType",
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "err",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "ExtractAll",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1856,
                                          "end": 1866
                                        },
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "params": [
                                            {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "E",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1867,
                                                "end": 1868
                                              },
                                              "typeArguments": null,
                                              "start": 1867,
                                              "end": 1868
                                            },
                                            {
                                              "type": "TSIndexedAccessType",
                                              "objectType": {
                                                "type": "TSTypeReference",
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "Categories",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 1870,
                                                  "end": 1880
                                                },
                                                "typeArguments": null,
                                                "start": 1870,
                                                "end": 1880
                                              },
                                              "indexType": {
                                                "type": "TSNumberKeyword",
                                                "start": 1881,
                                                "end": 1887
                                              },
                                              "start": 1870,
                                              "end": 1888
                                            }
                                          ],
                                          "start": 1866,
                                          "end": 1889
                                        },
                                        "start": 1856,
                                        "end": 1889
                                      },
                                      "start": 1854,
                                      "end": 1889
                                    },
                                    "start": 1851,
                                    "end": 1889
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Effect",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1894,
                                      "end": 1900
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "A2",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1901,
                                            "end": 1903
                                          },
                                          "typeArguments": null,
                                          "start": 1901,
                                          "end": 1903
                                        },
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "E2",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1905,
                                            "end": 1907
                                          },
                                          "typeArguments": null,
                                          "start": 1905,
                                          "end": 1907
                                        },
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "R2",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1909,
                                            "end": 1911
                                          },
                                          "typeArguments": null,
                                          "start": 1909,
                                          "end": 1911
                                        }
                                      ],
                                      "start": 1900,
                                      "end": 1912
                                    },
                                    "start": 1894,
                                    "end": 1912
                                  },
                                  "start": 1891,
                                  "end": 1912
                                },
                                "start": 1850,
                                "end": 1912
                              },
                              "optional": false,
                              "start": 1847,
                              "end": 1912
                            }
                          ],
                          "start": 1822,
                          "end": 1916
                        },
                        "start": 1820,
                        "end": 1916
                      },
                      "value": null,
                      "start": 1813,
                      "end": 1916
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                              "start": 1923,
                              "end": 1924
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1923,
                            "end": 1924
                          },
                          {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1926,
                              "end": 1927
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1926,
                            "end": 1927
                          }
                        ],
                        "start": 1922,
                        "end": 1928
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "effect",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Effect",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1940,
                                "end": 1946
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
                                      "start": 1947,
                                      "end": 1948
                                    },
                                    "typeArguments": null,
                                    "start": 1947,
                                    "end": 1948
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "E",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1950,
                                      "end": 1951
                                    },
                                    "typeArguments": null,
                                    "start": 1950,
                                    "end": 1951
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "R",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1953,
                                      "end": 1954
                                    },
                                    "typeArguments": null,
                                    "start": 1953,
                                    "end": 1954
                                  }
                                ],
                                "start": 1946,
                                "end": 1955
                              },
                              "start": 1940,
                              "end": 1955
                            },
                            "start": 1938,
                            "end": 1955
                          },
                          "start": 1932,
                          "end": 1955
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Effect",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1961,
                            "end": 1967
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
                                      "name": "A",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1968,
                                      "end": 1969
                                    },
                                    "typeArguments": null,
                                    "start": 1968,
                                    "end": 1969
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "A2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1972,
                                      "end": 1974
                                    },
                                    "typeArguments": null,
                                    "start": 1972,
                                    "end": 1974
                                  }
                                ],
                                "start": 1968,
                                "end": 1974
                              },
                              {
                                "type": "TSUnionType",
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "E2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1976,
                                      "end": 1978
                                    },
                                    "typeArguments": null,
                                    "start": 1976,
                                    "end": 1978
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Exclude",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1981,
                                      "end": 1988
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "E",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1989,
                                            "end": 1990
                                          },
                                          "typeArguments": null,
                                          "start": 1989,
                                          "end": 1990
                                        },
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "ExtractAll",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1992,
                                            "end": 2002
                                          },
                                          "typeArguments": {
                                            "type": "TSTypeParameterInstantiation",
                                            "params": [
                                              {
                                                "type": "TSTypeReference",
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "E",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 2003,
                                                  "end": 2004
                                                },
                                                "typeArguments": null,
                                                "start": 2003,
                                                "end": 2004
                                              },
                                              {
                                                "type": "TSIndexedAccessType",
                                                "objectType": {
                                                  "type": "TSTypeReference",
                                                  "typeName": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "Categories",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 2006,
                                                    "end": 2016
                                                  },
                                                  "typeArguments": null,
                                                  "start": 2006,
                                                  "end": 2016
                                                },
                                                "indexType": {
                                                  "type": "TSNumberKeyword",
                                                  "start": 2017,
                                                  "end": 2023
                                                },
                                                "start": 2006,
                                                "end": 2024
                                              }
                                            ],
                                            "start": 2002,
                                            "end": 2025
                                          },
                                          "start": 1992,
                                          "end": 2025
                                        }
                                      ],
                                      "start": 1988,
                                      "end": 2026
                                    },
                                    "start": 1981,
                                    "end": 2026
                                  }
                                ],
                                "start": 1976,
                                "end": 2026
                              },
                              {
                                "type": "TSUnionType",
                                "types": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "R",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2028,
                                      "end": 2029
                                    },
                                    "typeArguments": null,
                                    "start": 2028,
                                    "end": 2029
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "R2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2032,
                                      "end": 2034
                                    },
                                    "typeArguments": null,
                                    "start": 2032,
                                    "end": 2034
                                  }
                                ],
                                "start": 2028,
                                "end": 2034
                              }
                            ],
                            "start": 1967,
                            "end": 2035
                          },
                          "start": 1961,
                          "end": 2035
                        },
                        "start": 1958,
                        "end": 2035
                      },
                      "start": 1922,
                      "end": 2035
                    },
                    "start": 1919,
                    "end": 2035
                  },
                  "start": 1738,
                  "end": 2035
                },
                "start": 1736,
                "end": 2035
              },
              "start": 1723,
              "end": 2035
            },
            "init": null,
            "definite": false,
            "start": 1723,
            "end": 2035
          }
        ],
        "declare": true,
        "start": 1709,
        "end": 2036
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1702,
      "end": 2036
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FooError",
        "optional": false,
        "typeAnnotation": null,
        "start": 2044,
        "end": 2052
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "TaggedError",
                "optional": false,
                "typeAnnotation": null,
                "start": 2061,
                "end": 2072
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2061,
              "end": 2074
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "FooError",
                "raw": "\"FooError\"",
                "start": 2075,
                "end": 2085
              },
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 2087,
                "end": 2089
              }
            ],
            "optional": false,
            "start": 2061,
            "end": 2090
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "pipe",
            "optional": false,
            "typeAnnotation": null,
            "start": 2091,
            "end": 2095
          },
          "optional": false,
          "computed": false,
          "start": 2061,
          "end": 2095
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "withCategory",
              "optional": false,
              "typeAnnotation": null,
              "start": 2099,
              "end": 2111
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "domain",
                "raw": "\"domain\"",
                "start": 2112,
                "end": 2120
              }
            ],
            "optional": false,
            "start": 2099,
            "end": 2121
          }
        ],
        "optional": false,
        "start": 2061,
        "end": 2123
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 2124,
        "end": 2126
      },
      "abstract": false,
      "declare": false,
      "start": 2038,
      "end": 2126
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BarError",
        "optional": false,
        "typeAnnotation": null,
        "start": 2134,
        "end": 2142
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "TaggedError",
                "optional": false,
                "typeAnnotation": null,
                "start": 2151,
                "end": 2162
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2151,
              "end": 2164
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "BarError",
                "raw": "\"BarError\"",
                "start": 2165,
                "end": 2175
              },
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 2177,
                "end": 2179
              }
            ],
            "optional": false,
            "start": 2151,
            "end": 2180
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "pipe",
            "optional": false,
            "typeAnnotation": null,
            "start": 2181,
            "end": 2185
          },
          "optional": false,
          "computed": false,
          "start": 2151,
          "end": 2185
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "withCategory",
              "optional": false,
              "typeAnnotation": null,
              "start": 2189,
              "end": 2201
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "system",
                "raw": "\"system\"",
                "start": 2202,
                "end": 2210
              },
              {
                "type": "Literal",
                "value": "domain",
                "raw": "\"domain\"",
                "start": 2212,
                "end": 2220
              }
            ],
            "optional": false,
            "start": 2189,
            "end": 2221
          }
        ],
        "optional": false,
        "start": 2151,
        "end": 2223
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 2224,
        "end": 2226
      },
      "abstract": false,
      "declare": false,
      "start": 2128,
      "end": 2226
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BazError",
        "optional": false,
        "typeAnnotation": null,
        "start": 2234,
        "end": 2242
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "TaggedError",
                "optional": false,
                "typeAnnotation": null,
                "start": 2251,
                "end": 2262
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2251,
              "end": 2264
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "BazError",
                "raw": "\"BazError\"",
                "start": 2265,
                "end": 2275
              },
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 2277,
                "end": 2279
              }
            ],
            "optional": false,
            "start": 2251,
            "end": 2280
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "pipe",
            "optional": false,
            "typeAnnotation": null,
            "start": 2281,
            "end": 2285
          },
          "optional": false,
          "computed": false,
          "start": 2251,
          "end": 2285
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "withCategory",
              "optional": false,
              "typeAnnotation": null,
              "start": 2289,
              "end": 2301
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "system",
                "raw": "\"system\"",
                "start": 2302,
                "end": 2310
              }
            ],
            "optional": false,
            "start": 2289,
            "end": 2311
          }
        ],
        "optional": false,
        "start": 2251,
        "end": 2313
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 2314,
        "end": 2316
      },
      "abstract": false,
      "declare": false,
      "start": 2228,
      "end": 2316
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
            "name": "baz",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2344,
                        "end": 2350
                      },
                      "start": 2342,
                      "end": 2350
                    },
                    "start": 2341,
                    "end": 2350
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Effect",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2356,
                      "end": 2362
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNeverKeyword",
                          "start": 2363,
                          "end": 2368
                        },
                        {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "FooError",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2370,
                                "end": 2378
                              },
                              "typeArguments": null,
                              "start": 2370,
                              "end": 2378
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "BarError",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2381,
                                "end": 2389
                              },
                              "typeArguments": null,
                              "start": 2381,
                              "end": 2389
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "BazError",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2392,
                                "end": 2400
                              },
                              "typeArguments": null,
                              "start": 2392,
                              "end": 2400
                            }
                          ],
                          "start": 2370,
                          "end": 2400
                        },
                        {
                          "type": "TSNeverKeyword",
                          "start": 2402,
                          "end": 2407
                        }
                      ],
                      "start": 2362,
                      "end": 2408
                    },
                    "start": 2356,
                    "end": 2408
                  },
                  "start": 2353,
                  "end": 2408
                },
                "start": 2337,
                "end": 2408
              },
              "start": 2335,
              "end": 2408
            },
            "start": 2332,
            "end": 2408
          },
          "init": null,
          "definite": false,
          "start": 2332,
          "end": 2408
        }
      ],
      "declare": true,
      "start": 2318,
      "end": 2409
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "program",
              "optional": false,
              "typeAnnotation": null,
              "start": 2424,
              "end": 2431
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "baz",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2434,
                    "end": 2437
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2438,
                      "end": 2439
                    }
                  ],
                  "optional": false,
                  "start": 2434,
                  "end": 2440
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "pipe",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2441,
                  "end": 2445
                },
                "optional": false,
                "computed": false,
                "start": 2434,
                "end": 2445
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "catchCategory",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2446,
                    "end": 2459
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "domain",
                      "raw": "\"domain\"",
                      "start": 2460,
                      "end": 2468
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2471,
                          "end": 2472
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2477,
                          "end": 2480
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "_",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2481,
                              "end": 2482
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "_tag",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2483,
                              "end": 2487
                            },
                            "optional": false,
                            "computed": false,
                            "start": 2481,
                            "end": 2487
                          }
                        ],
                        "optional": false,
                        "start": 2477,
                        "end": 2488
                      },
                      "id": null,
                      "generator": false,
                      "start": 2470,
                      "end": 2488
                    }
                  ],
                  "optional": false,
                  "start": 2446,
                  "end": 2489
                }
              ],
              "optional": false,
              "start": 2434,
              "end": 2490
            },
            "definite": false,
            "start": 2424,
            "end": 2490
          }
        ],
        "declare": false,
        "start": 2418,
        "end": 2491
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2411,
      "end": 2491
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 2491
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 154,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 161,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "Pipeable",
    "start": 171,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 184,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 196,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 203,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 209,
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
    "value": "ab",
    "start": 212,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 223,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 236,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "Covariant",
    "start": 241,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 260,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 267,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 271,
    "end": 272
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 274,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "VarianceStruct",
    "start": 284,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 299,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 306,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 313,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 324,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "_V",
    "start": 333,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 337,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 347,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "_A",
    "start": 356,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "Covariant",
    "start": 360,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 376,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "_E",
    "start": 385,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "Covariant",
    "start": 389,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "readonly",
    "start": 405,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "_R",
    "start": 414,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "Covariant",
    "start": 418,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 435,
    "end": 442
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 443,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "EffectTypeId",
    "start": 449,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 463,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 470,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 476,
    "end": 477
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 479,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "Variance",
    "start": 489,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 498,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 505,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 512,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 523,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "EffectTypeId",
    "start": 533,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "VarianceStruct",
    "start": 548,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 573,
    "end": 574
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 576,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "Effect",
    "start": 586,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 593,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 598,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 600,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 608,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 613,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 615,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 621,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 623,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 628,
    "end": 629
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 632,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "Variance",
    "start": 640,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 648,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 653,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "Pipeable",
    "start": 663,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 673,
    "end": 674
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 676,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "Class",
    "start": 686,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "Fields",
    "start": 692,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 698,
    "end": 699
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 700,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "Pipeable",
    "start": 708,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 717,
    "end": 718
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 721,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "Fields",
    "start": 729,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 737,
    "end": 738
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 740,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "TaggedErrorClass",
    "start": 750,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 766,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "Tag",
    "start": 767,
    "end": 770
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 771,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 779,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 785,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "Fields",
    "start": 787,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 793,
    "end": 794
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 795,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "Class",
    "start": 803,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 808,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "Fields",
    "start": 809,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 817,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 821,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "_tag",
    "start": 830,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 834,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "Tag",
    "start": 836,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 841,
    "end": 842
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 844,
    "end": 851
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 852,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "TaggedError",
    "start": 858,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 871,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "identifier",
    "start": 872,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 882,
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
    "value": ")",
    "start": 891,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 893,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 896,
    "end": 897
  },
  {
    "type": "Identifier",
    "value": "Tag",
    "start": 900,
    "end": 903
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 904,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 912,
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
    "value": "Fields",
    "start": 922,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 930,
    "end": 931
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 934,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 937,
    "end": 938
  },
  {
    "type": "Identifier",
    "value": "Tag",
    "start": 939,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 942,
    "end": 943
  },
  {
    "type": "Identifier",
    "value": "fieldsOr",
    "start": 946,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 954,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "Fields",
    "start": 956,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 965,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "TaggedErrorClass",
    "start": 968,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 984,
    "end": 985
  },
  {
    "type": "Identifier",
    "value": "Tag",
    "start": 988,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 991,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 995,
    "end": 996
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1001,
    "end": 1009
  },
  {
    "type": "Identifier",
    "value": "_tag",
    "start": 1010,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Identifier",
    "value": "Tag",
    "start": 1016,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1029,
    "end": 1036
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1037,
    "end": 1042
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1043,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1052,
    "end": 1055
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 1055,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Identifier",
    "value": "ReadonlyArray",
    "start": 1064,
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
    "value": "any",
    "start": 1078,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1085,
    "end": 1087
  },
  {
    "type": "Identifier",
    "value": "Effect",
    "start": 1088,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1095,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1101,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1108,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1117,
    "end": 1123
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1124,
    "end": 1129
  },
  {
    "type": "Identifier",
    "value": "categoriesKey",
    "start": 1130,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "String",
    "value": "\"@effect/error/categories\"",
    "start": 1146,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1175,
    "end": 1181
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1182,
    "end": 1189
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1190,
    "end": 1195
  },
  {
    "type": "Identifier",
    "value": "withCategory",
    "start": 1196,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Identifier",
    "value": "Categories",
    "start": 1211,
    "end": 1221
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1222,
    "end": 1229
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1230,
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
    "value": "PropertyKey",
    "start": 1236,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1253,
    "end": 1256
  },
  {
    "type": "Identifier",
    "value": "categories",
    "start": 1256,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Identifier",
    "value": "Categories",
    "start": 1268,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1281,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Identifier",
    "value": "Args",
    "start": 1285,
    "end": 1289
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1290,
    "end": 1297
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1298,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1304,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Identifier",
    "value": "Ret",
    "start": 1310,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1317,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1327,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1332,
    "end": 1335
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1335,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Identifier",
    "value": "Args",
    "start": 1341,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Identifier",
    "value": "Ret",
    "start": 1348,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1365,
    "end": 1367
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1368,
    "end": 1369
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1376,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1381,
    "end": 1384
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1384,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Identifier",
    "value": "Args",
    "start": 1390,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Identifier",
    "value": "Ret",
    "start": 1397,
    "end": 1400
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Identifier",
    "value": "categoriesKey",
    "start": 1410,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Identifier",
    "value": "Cat",
    "start": 1429,
    "end": 1432
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1433,
    "end": 1435
  },
  {
    "type": "Identifier",
    "value": "Categories",
    "start": 1436,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1447,
    "end": 1453
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1457,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1474,
    "end": 1480
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1481,
    "end": 1485
  },
  {
    "type": "Identifier",
    "value": "AllKeys",
    "start": 1486,
    "end": 1493
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1501,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Identifier",
    "value": "categoriesKey",
    "start": 1512,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1528,
    "end": 1533
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1542,
    "end": 1547
  },
  {
    "type": "Identifier",
    "value": "Q",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1554,
    "end": 1559
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1561,
    "end": 1567
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1568,
    "end": 1572
  },
  {
    "type": "Identifier",
    "value": "ExtractAll",
    "start": 1573,
    "end": 1583
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Identifier",
    "value": "Cats",
    "start": 1587,
    "end": 1591
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1592,
    "end": 1599
  },
  {
    "type": "Identifier",
    "value": "PropertyKey",
    "start": 1600,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Identifier",
    "value": "Cats",
    "start": 1615,
    "end": 1619
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1620,
    "end": 1627
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1628,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Identifier",
    "value": "Extract",
    "start": 1636,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1647,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Identifier",
    "value": "categoriesKey",
    "start": 1650,
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
    "value": ":",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1671,
    "end": 1673
  },
  {
    "type": "Identifier",
    "value": "Cats",
    "start": 1674,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1681,
    "end": 1684
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1685,
    "end": 1686
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1687,
    "end": 1688
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1694,
    "end": 1699
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1702,
    "end": 1708
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1709,
    "end": 1716
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1717,
    "end": 1722
  },
  {
    "type": "Identifier",
    "value": "catchCategory",
    "start": 1723,
    "end": 1736
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1742,
    "end": 1743
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1743,
    "end": 1744
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1747,
    "end": 1752
  },
  {
    "type": "Identifier",
    "value": "Categories",
    "start": 1753,
    "end": 1763
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1764,
    "end": 1771
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1772,
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
    "value": "AllKeys",
    "start": 1778,
    "end": 1785
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1785,
    "end": 1786
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1786,
    "end": 1787
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1787,
    "end": 1788
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 1793,
    "end": 1795
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1795,
    "end": 1796
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 1799,
    "end": 1801
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Identifier",
    "value": "R2",
    "start": 1805,
    "end": 1807
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1813,
    "end": 1816
  },
  {
    "type": "Identifier",
    "value": "args",
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
    "type": "Punctuator",
    "value": "[",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1828,
    "end": 1831
  },
  {
    "type": "Identifier",
    "value": "Categories",
    "start": 1831,
    "end": 1841
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1848,
    "end": 1849
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1850,
    "end": 1851
  },
  {
    "type": "Identifier",
    "value": "err",
    "start": 1851,
    "end": 1854
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Identifier",
    "value": "ExtractAll",
    "start": 1856,
    "end": 1866
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1866,
    "end": 1867
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1867,
    "end": 1868
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1868,
    "end": 1869
  },
  {
    "type": "Identifier",
    "value": "Categories",
    "start": 1870,
    "end": 1880
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1880,
    "end": 1881
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1881,
    "end": 1887
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1887,
    "end": 1888
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1888,
    "end": 1889
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1889,
    "end": 1890
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1891,
    "end": 1893
  },
  {
    "type": "Identifier",
    "value": "Effect",
    "start": 1894,
    "end": 1900
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 1901,
    "end": 1903
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 1905,
    "end": 1907
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Identifier",
    "value": "R2",
    "start": 1909,
    "end": 1911
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1915,
    "end": 1916
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1917,
    "end": 1918
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1919,
    "end": 1921
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1922,
    "end": 1923
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1924,
    "end": 1925
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1926,
    "end": 1927
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1927,
    "end": 1928
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1928,
    "end": 1929
  },
  {
    "type": "Identifier",
    "value": "effect",
    "start": 1932,
    "end": 1938
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1938,
    "end": 1939
  },
  {
    "type": "Identifier",
    "value": "Effect",
    "start": 1940,
    "end": 1946
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1946,
    "end": 1947
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1947,
    "end": 1948
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1948,
    "end": 1949
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1950,
    "end": 1951
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1953,
    "end": 1954
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1954,
    "end": 1955
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1956,
    "end": 1957
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1958,
    "end": 1960
  },
  {
    "type": "Identifier",
    "value": "Effect",
    "start": 1961,
    "end": 1967
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1970,
    "end": 1971
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 1972,
    "end": 1974
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1974,
    "end": 1975
  },
  {
    "type": "Identifier",
    "value": "E2",
    "start": 1976,
    "end": 1978
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1979,
    "end": 1980
  },
  {
    "type": "Identifier",
    "value": "Exclude",
    "start": 1981,
    "end": 1988
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1988,
    "end": 1989
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1989,
    "end": 1990
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1990,
    "end": 1991
  },
  {
    "type": "Identifier",
    "value": "ExtractAll",
    "start": 1992,
    "end": 2002
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2002,
    "end": 2003
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Identifier",
    "value": "Categories",
    "start": 2006,
    "end": 2016
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2016,
    "end": 2017
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2017,
    "end": 2023
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2023,
    "end": 2024
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2024,
    "end": 2025
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2025,
    "end": 2026
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2026,
    "end": 2027
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 2028,
    "end": 2029
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2030,
    "end": 2031
  },
  {
    "type": "Identifier",
    "value": "R2",
    "start": 2032,
    "end": 2034
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2034,
    "end": 2035
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2035,
    "end": 2036
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2038,
    "end": 2043
  },
  {
    "type": "Identifier",
    "value": "FooError",
    "start": 2044,
    "end": 2052
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2053,
    "end": 2060
  },
  {
    "type": "Identifier",
    "value": "TaggedError",
    "start": 2061,
    "end": 2072
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2072,
    "end": 2073
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2073,
    "end": 2074
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2074,
    "end": 2075
  },
  {
    "type": "String",
    "value": "\"FooError\"",
    "start": 2075,
    "end": 2085
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2085,
    "end": 2086
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2087,
    "end": 2088
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2088,
    "end": 2089
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2089,
    "end": 2090
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2090,
    "end": 2091
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 2091,
    "end": 2095
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2095,
    "end": 2096
  },
  {
    "type": "Identifier",
    "value": "withCategory",
    "start": 2099,
    "end": 2111
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2111,
    "end": 2112
  },
  {
    "type": "String",
    "value": "\"domain\"",
    "start": 2112,
    "end": 2120
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2120,
    "end": 2121
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2122,
    "end": 2123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2124,
    "end": 2125
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2125,
    "end": 2126
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2128,
    "end": 2133
  },
  {
    "type": "Identifier",
    "value": "BarError",
    "start": 2134,
    "end": 2142
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2143,
    "end": 2150
  },
  {
    "type": "Identifier",
    "value": "TaggedError",
    "start": 2151,
    "end": 2162
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2162,
    "end": 2163
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2163,
    "end": 2164
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2164,
    "end": 2165
  },
  {
    "type": "String",
    "value": "\"BarError\"",
    "start": 2165,
    "end": 2175
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2175,
    "end": 2176
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2177,
    "end": 2178
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2178,
    "end": 2179
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2179,
    "end": 2180
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2180,
    "end": 2181
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 2181,
    "end": 2185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2185,
    "end": 2186
  },
  {
    "type": "Identifier",
    "value": "withCategory",
    "start": 2189,
    "end": 2201
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2201,
    "end": 2202
  },
  {
    "type": "String",
    "value": "\"system\"",
    "start": 2202,
    "end": 2210
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2210,
    "end": 2211
  },
  {
    "type": "String",
    "value": "\"domain\"",
    "start": 2212,
    "end": 2220
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2220,
    "end": 2221
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2222,
    "end": 2223
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2224,
    "end": 2225
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2225,
    "end": 2226
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2228,
    "end": 2233
  },
  {
    "type": "Identifier",
    "value": "BazError",
    "start": 2234,
    "end": 2242
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2243,
    "end": 2250
  },
  {
    "type": "Identifier",
    "value": "TaggedError",
    "start": 2251,
    "end": 2262
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2262,
    "end": 2263
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2263,
    "end": 2264
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2264,
    "end": 2265
  },
  {
    "type": "String",
    "value": "\"BazError\"",
    "start": 2265,
    "end": 2275
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2275,
    "end": 2276
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2277,
    "end": 2278
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2278,
    "end": 2279
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2279,
    "end": 2280
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2280,
    "end": 2281
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 2281,
    "end": 2285
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2285,
    "end": 2286
  },
  {
    "type": "Identifier",
    "value": "withCategory",
    "start": 2289,
    "end": 2301
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2301,
    "end": 2302
  },
  {
    "type": "String",
    "value": "\"system\"",
    "start": 2302,
    "end": 2310
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2310,
    "end": 2311
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2312,
    "end": 2313
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2314,
    "end": 2315
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2315,
    "end": 2316
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2318,
    "end": 2325
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2326,
    "end": 2331
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 2332,
    "end": 2335
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2335,
    "end": 2336
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2337,
    "end": 2338
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2341,
    "end": 2342
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2342,
    "end": 2343
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2344,
    "end": 2350
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2351,
    "end": 2352
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2353,
    "end": 2355
  },
  {
    "type": "Identifier",
    "value": "Effect",
    "start": 2356,
    "end": 2362
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2362,
    "end": 2363
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2363,
    "end": 2368
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2368,
    "end": 2369
  },
  {
    "type": "Identifier",
    "value": "FooError",
    "start": 2370,
    "end": 2378
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2379,
    "end": 2380
  },
  {
    "type": "Identifier",
    "value": "BarError",
    "start": 2381,
    "end": 2389
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2390,
    "end": 2391
  },
  {
    "type": "Identifier",
    "value": "BazError",
    "start": 2392,
    "end": 2400
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2400,
    "end": 2401
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 2402,
    "end": 2407
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2407,
    "end": 2408
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2408,
    "end": 2409
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2411,
    "end": 2417
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2418,
    "end": 2423
  },
  {
    "type": "Identifier",
    "value": "program",
    "start": 2424,
    "end": 2431
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2432,
    "end": 2433
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 2434,
    "end": 2437
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2437,
    "end": 2438
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2438,
    "end": 2439
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2439,
    "end": 2440
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2440,
    "end": 2441
  },
  {
    "type": "Identifier",
    "value": "pipe",
    "start": 2441,
    "end": 2445
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2445,
    "end": 2446
  },
  {
    "type": "Identifier",
    "value": "catchCategory",
    "start": 2446,
    "end": 2459
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2459,
    "end": 2460
  },
  {
    "type": "String",
    "value": "\"domain\"",
    "start": 2460,
    "end": 2468
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2468,
    "end": 2469
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2470,
    "end": 2471
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 2471,
    "end": 2472
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2472,
    "end": 2473
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2474,
    "end": 2476
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 2477,
    "end": 2480
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2480,
    "end": 2481
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 2481,
    "end": 2482
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2482,
    "end": 2483
  },
  {
    "type": "Identifier",
    "value": "_tag",
    "start": 2483,
    "end": 2487
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2487,
    "end": 2488
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2488,
    "end": 2489
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2489,
    "end": 2490
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2490,
    "end": 2491
  }
]
```
