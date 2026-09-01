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
        "name": "Instance",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 18
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
              "name": "_instanceBrand",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 39
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNeverKeyword",
                "start": 41,
                "end": 46
              },
              "start": 39,
              "end": 46
            },
            "accessibility": null,
            "static": false,
            "start": 25,
            "end": 46
          }
        ],
        "start": 19,
        "end": 48
      },
      "declare": false,
      "start": 0,
      "end": 48
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DataDef",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 62
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
              "start": 63,
              "end": 67
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 63,
            "end": 67
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Props",
              "optional": false,
              "typeAnnotation": null,
              "start": 69,
              "end": 74
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 69,
            "end": 74
          }
        ],
        "start": 62,
        "end": 75
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "this",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Readonly",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 85,
                      "end": 93
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Props",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 94,
                            "end": 99
                          },
                          "typeArguments": null,
                          "start": 94,
                          "end": 99
                        }
                      ],
                      "start": 93,
                      "end": 100
                    },
                    "start": 85,
                    "end": 100
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Instance",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 103,
                      "end": 111
                    },
                    "typeArguments": null,
                    "start": 103,
                    "end": 111
                  }
                ],
                "start": 85,
                "end": 111
              },
              "start": 83,
              "end": 111
            },
            "start": 79,
            "end": 111
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Data",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 120
            },
            "typeArguments": null,
            "start": 116,
            "end": 120
          },
          "start": 113,
          "end": 120
        },
        "start": 78,
        "end": 120
      },
      "declare": false,
      "start": 50,
      "end": 120
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PropsDefinition",
        "optional": false,
        "typeAnnotation": null,
        "start": 127,
        "end": 142
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
              "start": 143,
              "end": 144
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 143,
            "end": 144
          }
        ],
        "start": 142,
        "end": 145
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 155,
          "end": 156
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
              "start": 166,
              "end": 167
            },
            "typeArguments": null,
            "start": 166,
            "end": 167
          },
          "start": 160,
          "end": 167
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
              "start": 170,
              "end": 171
            },
            "typeArguments": null,
            "start": 170,
            "end": 171
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 172,
              "end": 173
            },
            "typeArguments": null,
            "start": 172,
            "end": 173
          },
          "start": 170,
          "end": 174
        },
        "optional": false,
        "readonly": null,
        "start": 148,
        "end": 176
      },
      "declare": false,
      "start": 122,
      "end": 176
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Options",
        "optional": false,
        "typeAnnotation": null,
        "start": 188,
        "end": 195
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
              "start": 201,
              "end": 205
            },
            "constraint": null,
            "default": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSObjectKeyword",
                  "start": 208,
                  "end": 214
                },
                {
                  "type": "TSFunctionType",
                  "typeParameters": null,
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
                            "name": "Instance",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 225,
                            "end": 233
                          },
                          "typeArguments": null,
                          "start": 225,
                          "end": 233
                        },
                        "start": 223,
                        "end": 233
                      },
                      "start": 219,
                      "end": 233
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSObjectKeyword",
                      "start": 238,
                      "end": 244
                    },
                    "start": 235,
                    "end": 244
                  },
                  "start": 218,
                  "end": 244
                }
              ],
              "start": 208,
              "end": 245
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 201,
            "end": 245
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "PropsDef",
              "optional": false,
              "typeAnnotation": null,
              "start": 251,
              "end": 259
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PropsDefinition",
                "optional": false,
                "typeAnnotation": null,
                "start": 262,
                "end": 277
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
                      "start": 278,
                      "end": 284
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 285,
                          "end": 291
                        },
                        {
                          "type": "TSAnyKeyword",
                          "start": 293,
                          "end": 296
                        }
                      ],
                      "start": 284,
                      "end": 297
                    },
                    "start": 278,
                    "end": 297
                  }
                ],
                "start": 277,
                "end": 298
              },
              "start": 262,
              "end": 298
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 251,
            "end": 298
          }
        ],
        "start": 195,
        "end": 304
      },
      "extends": [],
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
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 311,
              "end": 315
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Data",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 318,
                  "end": 322
                },
                "typeArguments": null,
                "start": 318,
                "end": 322
              },
              "start": 316,
              "end": 322
            },
            "accessibility": null,
            "static": false,
            "start": 311,
            "end": 322
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
              "start": 327,
              "end": 332
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "PropsDef",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 335,
                  "end": 343
                },
                "typeArguments": null,
                "start": 335,
                "end": 343
              },
              "start": 333,
              "end": 343
            },
            "accessibility": null,
            "static": false,
            "start": 327,
            "end": 343
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "watch",
              "optional": false,
              "typeAnnotation": null,
              "start": 348,
              "end": 353
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
                  "start": 356,
                  "end": 362
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 363,
                      "end": 369
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "WatchHandler",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 371,
                        "end": 383
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "start": 384,
                            "end": 387
                          }
                        ],
                        "start": 383,
                        "end": 388
                      },
                      "start": 371,
                      "end": 388
                    }
                  ],
                  "start": 362,
                  "end": 389
                },
                "start": 356,
                "end": 389
              },
              "start": 354,
              "end": 389
            },
            "accessibility": null,
            "static": false,
            "start": 348,
            "end": 389
          }
        ],
        "start": 305,
        "end": 391
      },
      "declare": false,
      "start": 178,
      "end": 391
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WatchHandler",
        "optional": false,
        "typeAnnotation": null,
        "start": 398,
        "end": 410
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
              "start": 411,
              "end": 412
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 411,
            "end": 412
          }
        ],
        "start": 410,
        "end": 413
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "val",
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
                  "start": 422,
                  "end": 423
                },
                "typeArguments": null,
                "start": 422,
                "end": 423
              },
              "start": 420,
              "end": 423
            },
            "start": 417,
            "end": 423
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "oldVal",
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
                  "start": 433,
                  "end": 434
                },
                "typeArguments": null,
                "start": 433,
                "end": 434
              },
              "start": 431,
              "end": 434
            },
            "start": 425,
            "end": 434
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 439,
            "end": 443
          },
          "start": 436,
          "end": 443
        },
        "start": 416,
        "end": 443
      },
      "declare": false,
      "start": 393,
      "end": 444
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ThisTypedOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 451,
        "end": 467
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
              "start": 468,
              "end": 472
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 468,
            "end": 472
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Props",
              "optional": false,
              "typeAnnotation": null,
              "start": 474,
              "end": 479
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 474,
            "end": 479
          }
        ],
        "start": 467,
        "end": 480
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSObjectKeyword",
            "start": 487,
            "end": 493
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Options",
              "optional": false,
              "typeAnnotation": null,
              "start": 500,
              "end": 507
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DataDef",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 508,
                    "end": 515
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
                          "start": 516,
                          "end": 520
                        },
                        "typeArguments": null,
                        "start": 516,
                        "end": 520
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Props",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 522,
                          "end": 527
                        },
                        "typeArguments": null,
                        "start": 522,
                        "end": 527
                      }
                    ],
                    "start": 515,
                    "end": 528
                  },
                  "start": 508,
                  "end": 528
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PropsDefinition",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 530,
                    "end": 545
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Props",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 546,
                          "end": 551
                        },
                        "typeArguments": null,
                        "start": 546,
                        "end": 551
                      }
                    ],
                    "start": 545,
                    "end": 552
                  },
                  "start": 530,
                  "end": 552
                }
              ],
              "start": 507,
              "end": 553
            },
            "start": 500,
            "end": 553
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ThisType",
              "optional": false,
              "typeAnnotation": null,
              "start": 560,
              "end": 568
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
                        "name": "Data",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 569,
                        "end": 573
                      },
                      "typeArguments": null,
                      "start": 569,
                      "end": 573
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Readonly",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 576,
                        "end": 584
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Props",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 585,
                              "end": 590
                            },
                            "typeArguments": null,
                            "start": 585,
                            "end": 590
                          }
                        ],
                        "start": 584,
                        "end": 591
                      },
                      "start": 576,
                      "end": 591
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Instance",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 594,
                        "end": 602
                      },
                      "typeArguments": null,
                      "start": 594,
                      "end": 602
                    }
                  ],
                  "start": 569,
                  "end": 602
                }
              ],
              "start": 568,
              "end": 603
            },
            "start": 560,
            "end": 603
          }
        ],
        "start": 487,
        "end": 603
      },
      "declare": false,
      "start": 446,
      "end": 603
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 622,
        "end": 626
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
              "name": "Data",
              "optional": false,
              "typeAnnotation": null,
              "start": 627,
              "end": 631
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 627,
            "end": 631
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Props",
              "optional": false,
              "typeAnnotation": null,
              "start": 633,
              "end": 638
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 633,
            "end": 638
          }
        ],
        "start": 626,
        "end": 639
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ThisTypedOptions",
                "optional": false,
                "typeAnnotation": null,
                "start": 644,
                "end": 660
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
                      "start": 661,
                      "end": 665
                    },
                    "typeArguments": null,
                    "start": 661,
                    "end": 665
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 667,
                      "end": 672
                    },
                    "typeArguments": null,
                    "start": 667,
                    "end": 672
                  }
                ],
                "start": 660,
                "end": 673
              },
              "start": 644,
              "end": 673
            },
            "start": 642,
            "end": 673
          },
          "start": 640,
          "end": 673
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 676,
          "end": 680
        },
        "start": 674,
        "end": 680
      },
      "body": null,
      "expression": false,
      "start": 605,
      "end": 681
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 699,
        "end": 703
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Options",
                "optional": false,
                "typeAnnotation": null,
                "start": 708,
                "end": 715
              },
              "typeArguments": null,
              "start": 708,
              "end": 715
            },
            "start": 706,
            "end": 715
          },
          "start": 704,
          "end": 715
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 718,
          "end": 722
        },
        "start": 716,
        "end": 722
      },
      "body": null,
      "expression": false,
      "start": 682,
      "end": 723
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null,
          "start": 725,
          "end": 729
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "props",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 736,
                  "end": 741
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 753,
                        "end": 756
                      },
                      "value": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 758,
                        "end": 760
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 753,
                      "end": 760
                    }
                  ],
                  "start": 743,
                  "end": 766
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 736,
                "end": 766
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 773,
                  "end": 777
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
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
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 783,
                            "end": 786
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 788,
                              "end": 795
                            },
                            "start": 786,
                            "end": 795
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 783,
                          "end": 795
                        }
                      ],
                      "start": 781,
                      "end": 797
                    },
                    "start": 779,
                    "end": 797
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 829,
                                "end": 832
                              },
                              "value": {
                                "type": "Literal",
                                "value": true,
                                "raw": "true",
                                "start": 834,
                                "end": 838
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 829,
                              "end": 838
                            }
                          ],
                          "start": 815,
                          "end": 848
                        },
                        "start": 808,
                        "end": 848
                      }
                    ],
                    "start": 798,
                    "end": 854
                  },
                  "expression": false,
                  "start": 777,
                  "end": 854
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 773,
                "end": 854
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "watch",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 861,
                  "end": 866
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 878,
                        "end": 881
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "newVal",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 890,
                                "end": 896
                              },
                              "start": 888,
                              "end": 896
                            },
                            "start": 882,
                            "end": 896
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "oldVal",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 906,
                                "end": 912
                              },
                              "start": 904,
                              "end": 912
                            },
                            "start": 898,
                            "end": 912
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 915,
                            "end": 919
                          },
                          "start": 913,
                          "end": 919
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 934,
                                    "end": 938
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "bar",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 939,
                                    "end": 942
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 934,
                                  "end": 942
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": false,
                                  "raw": "false",
                                  "start": 945,
                                  "end": 950
                                },
                                "start": 934,
                                "end": 950
                              },
                              "directive": null,
                              "start": 934,
                              "end": 950
                            }
                          ],
                          "start": 920,
                          "end": 960
                        },
                        "expression": false,
                        "start": 881,
                        "end": 960
                      },
                      "method": true,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 878,
                      "end": 960
                    }
                  ],
                  "start": 868,
                  "end": 966
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 861,
                "end": 966
              }
            ],
            "start": 730,
            "end": 968
          }
        ],
        "optional": false,
        "start": 725,
        "end": 969
      },
      "directive": null,
      "start": 725,
      "end": 969
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 969
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "Instance",
    "start": 10,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "_instanceBrand",
    "start": 25,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 41,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 50,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "DataDef",
    "start": 55,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 63,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 69,
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
    "value": "(",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 79,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 85,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 94,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "Instance",
    "start": 103,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 113,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 116,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 122,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "PropsDefinition",
    "start": 127,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 155,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 157,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 160,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "K",
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
    "value": "}",
    "start": 175,
    "end": 176
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 178,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 188,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 201,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 208,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 219,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "Instance",
    "start": 225,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 235,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 238,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "PropsDef",
    "start": 251,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "PropsDefinition",
    "start": 262,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 278,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 285,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 293,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 311,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 318,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 327,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "PropsDef",
    "start": 335,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "watch",
    "start": 348,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 356,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 363,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "WatchHandler",
    "start": 371,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 384,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 393,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "WatchHandler",
    "start": 398,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 417,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "oldVal",
    "start": 425,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 436,
    "end": 438
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 439,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 446,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "ThisTypedOptions",
    "start": 451,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 468,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 474,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 487,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 500,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "DataDef",
    "start": 508,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 516,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 522,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "PropsDefinition",
    "start": 530,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 545,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 546,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "ThisType",
    "start": 560,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 569,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 576,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 585,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "Instance",
    "start": 594,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 602,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 605,
    "end": 612
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 613,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 622,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 626,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 627,
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
    "value": "Props",
    "start": 633,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 639,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 640,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 642,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "ThisTypedOptions",
    "start": 644,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 660,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 661,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 665,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "Props",
    "start": 667,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 674,
    "end": 675
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 676,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 682,
    "end": 689
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 690,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 699,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 704,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 706,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 708,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 716,
    "end": 717
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 718,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 722,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 725,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 730,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 736,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 743,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 753,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 756,
    "end": 757
  },
  {
    "type": "String",
    "value": "''",
    "start": 758,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 766,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 773,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ":",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 781,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 783,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 786,
    "end": 787
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 788,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 798,
    "end": 799
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 808,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 815,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 829,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 832,
    "end": 833
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 834,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 853,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 854,
    "end": 855
  },
  {
    "type": "Identifier",
    "value": "watch",
    "start": 861,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 866,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 868,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 878,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 881,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "newVal",
    "start": 882,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 888,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 890,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 896,
    "end": 897
  },
  {
    "type": "Identifier",
    "value": "oldVal",
    "start": 898,
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
    "value": "string",
    "start": 906,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 913,
    "end": 914
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 915,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 920,
    "end": 921
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 934,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 938,
    "end": 939
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 939,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 943,
    "end": 944
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 945,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 965,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 967,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 968,
    "end": 969
  }
]
```
