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
        "name": "DataFetchFns",
        "optional": false,
        "typeAnnotation": null,
        "start": 15,
        "end": 27
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
              "name": "Boat",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 40
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
                      "name": "requiresLicense",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 52,
                      "end": 67
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "id",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 74,
                                "end": 80
                              },
                              "start": 72,
                              "end": 80
                            },
                            "start": 70,
                            "end": 80
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 85,
                            "end": 92
                          },
                          "start": 82,
                          "end": 92
                        },
                        "start": 69,
                        "end": 92
                      },
                      "start": 67,
                      "end": 92
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 52,
                    "end": 93
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "maxGroundSpeed",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 102,
                      "end": 116
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "id",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 123,
                                "end": 129
                              },
                              "start": 121,
                              "end": 129
                            },
                            "start": 119,
                            "end": 129
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 134,
                            "end": 140
                          },
                          "start": 131,
                          "end": 140
                        },
                        "start": 118,
                        "end": 140
                      },
                      "start": 116,
                      "end": 140
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 102,
                    "end": 141
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "description",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 150,
                      "end": 161
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "id",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 168,
                                "end": 174
                              },
                              "start": 166,
                              "end": 174
                            },
                            "start": 164,
                            "end": 174
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 179,
                            "end": 185
                          },
                          "start": 176,
                          "end": 185
                        },
                        "start": 163,
                        "end": 185
                      },
                      "start": 161,
                      "end": 185
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 150,
                    "end": 186
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "displacement",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 195,
                      "end": 207
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "id",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 214,
                                "end": 220
                              },
                              "start": 212,
                              "end": 220
                            },
                            "start": 210,
                            "end": 220
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 225,
                            "end": 231
                          },
                          "start": 222,
                          "end": 231
                        },
                        "start": 209,
                        "end": 231
                      },
                      "start": 207,
                      "end": 231
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 195,
                    "end": 232
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
                      "start": 241,
                      "end": 245
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "id",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 252,
                                "end": 258
                              },
                              "start": 250,
                              "end": 258
                            },
                            "start": 248,
                            "end": 258
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 263,
                            "end": 269
                          },
                          "start": 260,
                          "end": 269
                        },
                        "start": 247,
                        "end": 269
                      },
                      "start": 245,
                      "end": 269
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 241,
                    "end": 270
                  }
                ],
                "start": 42,
                "end": 276
              },
              "start": 40,
              "end": 276
            },
            "accessibility": null,
            "static": false,
            "start": 36,
            "end": 277
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Plane",
              "optional": false,
              "typeAnnotation": null,
              "start": 282,
              "end": 287
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
                      "name": "requiresLicense",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 299,
                      "end": 314
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "id",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 321,
                                "end": 327
                              },
                              "start": 319,
                              "end": 327
                            },
                            "start": 317,
                            "end": 327
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 332,
                            "end": 339
                          },
                          "start": 329,
                          "end": 339
                        },
                        "start": 316,
                        "end": 339
                      },
                      "start": 314,
                      "end": 339
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 299,
                    "end": 340
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "maxGroundSpeed",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 349,
                      "end": 363
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "id",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 370,
                                "end": 376
                              },
                              "start": 368,
                              "end": 376
                            },
                            "start": 366,
                            "end": 376
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 381,
                            "end": 387
                          },
                          "start": 378,
                          "end": 387
                        },
                        "start": 365,
                        "end": 387
                      },
                      "start": 363,
                      "end": 387
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 349,
                    "end": 388
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "maxTakeoffWeight",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 397,
                      "end": 413
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "id",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 420,
                                "end": 426
                              },
                              "start": 418,
                              "end": 426
                            },
                            "start": 416,
                            "end": 426
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 431,
                            "end": 437
                          },
                          "start": 428,
                          "end": 437
                        },
                        "start": 415,
                        "end": 437
                      },
                      "start": 413,
                      "end": 437
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 397,
                    "end": 438
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "maxCruisingAltitude",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 447,
                      "end": 466
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "id",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 473,
                                "end": 479
                              },
                              "start": 471,
                              "end": 479
                            },
                            "start": 469,
                            "end": 479
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 484,
                            "end": 490
                          },
                          "start": 481,
                          "end": 490
                        },
                        "start": 468,
                        "end": 490
                      },
                      "start": 466,
                      "end": 490
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 447,
                    "end": 491
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
                      "start": 500,
                      "end": 504
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "id",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 511,
                                "end": 517
                              },
                              "start": 509,
                              "end": 517
                            },
                            "start": 507,
                            "end": 517
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 522,
                            "end": 528
                          },
                          "start": 519,
                          "end": 528
                        },
                        "start": 506,
                        "end": 528
                      },
                      "start": 504,
                      "end": 528
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 500,
                    "end": 529
                  }
                ],
                "start": 289,
                "end": 535
              },
              "start": 287,
              "end": 535
            },
            "accessibility": null,
            "static": false,
            "start": 282,
            "end": 535
          }
        ],
        "start": 30,
        "end": 537
      },
      "declare": false,
      "start": 10,
      "end": 537
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "NoTypeParamBoatRequired",
          "optional": false,
          "typeAnnotation": null,
          "start": 550,
          "end": 573
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "F",
                "optional": false,
                "typeAnnotation": null,
                "start": 574,
                "end": 575
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
                      "name": "DataFetchFns",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 590,
                      "end": 602
                    },
                    "typeArguments": null,
                    "start": 590,
                    "end": 602
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "Boat",
                      "raw": "'Boat'",
                      "start": 603,
                      "end": 609
                    },
                    "start": 603,
                    "end": 609
                  },
                  "start": 590,
                  "end": 610
                },
                "start": 584,
                "end": 610
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 574,
              "end": 610
            }
          ],
          "start": 573,
          "end": 611
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ReturnType",
            "optional": false,
            "typeAnnotation": null,
            "start": 614,
            "end": 624
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DataFetchFns",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 625,
                      "end": 637
                    },
                    "typeArguments": null,
                    "start": 625,
                    "end": 637
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "Boat",
                      "raw": "'Boat'",
                      "start": 638,
                      "end": 644
                    },
                    "start": 638,
                    "end": 644
                  },
                  "start": 625,
                  "end": 645
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 646,
                    "end": 647
                  },
                  "typeArguments": null,
                  "start": 646,
                  "end": 647
                },
                "start": 625,
                "end": 648
              }
            ],
            "start": 624,
            "end": 649
          },
          "start": 614,
          "end": 649
        },
        "declare": false,
        "start": 545,
        "end": 650
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 538,
      "end": 650
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeHardcodedAsParameterWithoutReturnType",
        "optional": false,
        "typeAnnotation": null,
        "start": 656,
        "end": 697
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
              "start": 698,
              "end": 699
            },
            "constraint": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "Boat",
                "raw": "'Boat'",
                "start": 708,
                "end": 714
              },
              "start": 708,
              "end": 714
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 698,
            "end": 714
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 716,
              "end": 717
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
                    "name": "DataFetchFns",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 732,
                    "end": 744
                  },
                  "typeArguments": null,
                  "start": 732,
                  "end": 744
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 745,
                    "end": 746
                  },
                  "typeArguments": null,
                  "start": 745,
                  "end": 746
                },
                "start": 732,
                "end": 747
              },
              "start": 726,
              "end": 747
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 716,
            "end": 747
          }
        ],
        "start": 697,
        "end": 748
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "DataFetchFns",
              "optional": false,
              "typeAnnotation": null,
              "start": 751,
              "end": 763
            },
            "typeArguments": null,
            "start": 751,
            "end": 763
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 764,
              "end": 765
            },
            "typeArguments": null,
            "start": 764,
            "end": 765
          },
          "start": 751,
          "end": 766
        },
        "indexType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "F",
            "optional": false,
            "typeAnnotation": null,
            "start": 767,
            "end": 768
          },
          "typeArguments": null,
          "start": 767,
          "end": 768
        },
        "start": 751,
        "end": 769
      },
      "declare": false,
      "start": 651,
      "end": 770
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "allAreFunctionsAsExpected",
          "optional": false,
          "typeAnnotation": null,
          "start": 783,
          "end": 808
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TypeHardcodedAsParameterWithoutReturnType",
            "optional": false,
            "typeAnnotation": null,
            "start": 811,
            "end": 852
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "Boat",
                  "raw": "'Boat'",
                  "start": 853,
                  "end": 859
                },
                "start": 853,
                "end": 859
              },
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
                      "name": "DataFetchFns",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 867,
                      "end": 879
                    },
                    "typeArguments": null,
                    "start": 867,
                    "end": 879
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "Boat",
                      "raw": "'Boat'",
                      "start": 880,
                      "end": 886
                    },
                    "start": 880,
                    "end": 886
                  },
                  "start": 867,
                  "end": 887
                },
                "start": 861,
                "end": 887
              }
            ],
            "start": 852,
            "end": 888
          },
          "start": 811,
          "end": 888
        },
        "declare": false,
        "start": 778,
        "end": 889
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 771,
      "end": 889
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "returnTypeOfFunctions",
          "optional": false,
          "typeAnnotation": null,
          "start": 902,
          "end": 923
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ReturnType",
            "optional": false,
            "typeAnnotation": null,
            "start": 926,
            "end": 936
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "allAreFunctionsAsExpected",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 937,
                  "end": 962
                },
                "typeArguments": null,
                "start": 937,
                "end": 962
              }
            ],
            "start": 936,
            "end": 963
          },
          "start": 926,
          "end": 963
        },
        "declare": false,
        "start": 897,
        "end": 964
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 890,
      "end": 964
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "SucceedingCombo",
          "optional": false,
          "typeAnnotation": null,
          "start": 1017,
          "end": 1032
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ReturnType",
            "optional": false,
            "typeAnnotation": null,
            "start": 1035,
            "end": 1045
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TypeHardcodedAsParameterWithoutReturnType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1046,
                  "end": 1087
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "Boat",
                        "raw": "'Boat'",
                        "start": 1088,
                        "end": 1094
                      },
                      "start": 1088,
                      "end": 1094
                    },
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
                            "name": "DataFetchFns",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1102,
                            "end": 1114
                          },
                          "typeArguments": null,
                          "start": 1102,
                          "end": 1114
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "Boat",
                            "raw": "'Boat'",
                            "start": 1115,
                            "end": 1121
                          },
                          "start": 1115,
                          "end": 1121
                        },
                        "start": 1102,
                        "end": 1122
                      },
                      "start": 1096,
                      "end": 1122
                    }
                  ],
                  "start": 1087,
                  "end": 1123
                },
                "start": 1046,
                "end": 1123
              }
            ],
            "start": 1045,
            "end": 1124
          },
          "start": 1035,
          "end": 1124
        },
        "declare": false,
        "start": 1012,
        "end": 1125
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1005,
      "end": 1125
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "FailingCombo",
          "optional": false,
          "typeAnnotation": null,
          "start": 1138,
          "end": 1150
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
                "start": 1151,
                "end": 1152
              },
              "constraint": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "Boat",
                  "raw": "'Boat'",
                  "start": 1161,
                  "end": 1167
                },
                "start": 1161,
                "end": 1167
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1151,
              "end": 1167
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "F",
                "optional": false,
                "typeAnnotation": null,
                "start": 1169,
                "end": 1170
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
                      "name": "DataFetchFns",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1185,
                      "end": 1197
                    },
                    "typeArguments": null,
                    "start": 1185,
                    "end": 1197
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1198,
                      "end": 1199
                    },
                    "typeArguments": null,
                    "start": 1198,
                    "end": 1199
                  },
                  "start": 1185,
                  "end": 1200
                },
                "start": 1179,
                "end": 1200
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1169,
              "end": 1200
            }
          ],
          "start": 1150,
          "end": 1201
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ReturnType",
            "optional": false,
            "typeAnnotation": null,
            "start": 1204,
            "end": 1214
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TypeHardcodedAsParameterWithoutReturnType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1215,
                  "end": 1256
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
                        "start": 1257,
                        "end": 1258
                      },
                      "typeArguments": null,
                      "start": 1257,
                      "end": 1258
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "F",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1259,
                        "end": 1260
                      },
                      "typeArguments": null,
                      "start": 1259,
                      "end": 1260
                    }
                  ],
                  "start": 1256,
                  "end": 1261
                },
                "start": 1215,
                "end": 1261
              }
            ],
            "start": 1214,
            "end": 1262
          },
          "start": 1204,
          "end": 1262
        },
        "declare": false,
        "start": 1133,
        "end": 1263
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1126,
      "end": 1263
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TypeHardcodedAsParameter",
          "optional": false,
          "typeAnnotation": null,
          "start": 1276,
          "end": 1300
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
                "start": 1301,
                "end": 1302
              },
              "constraint": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "Boat",
                  "raw": "'Boat'",
                  "start": 1311,
                  "end": 1317
                },
                "start": 1311,
                "end": 1317
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1301,
              "end": 1317
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "F",
                "optional": false,
                "typeAnnotation": null,
                "start": 1319,
                "end": 1320
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
                      "name": "DataFetchFns",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1335,
                      "end": 1347
                    },
                    "typeArguments": null,
                    "start": 1335,
                    "end": 1347
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1348,
                      "end": 1349
                    },
                    "typeArguments": null,
                    "start": 1348,
                    "end": 1349
                  },
                  "start": 1335,
                  "end": 1350
                },
                "start": 1329,
                "end": 1350
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1319,
              "end": 1350
            }
          ],
          "start": 1300,
          "end": 1351
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ReturnType",
            "optional": false,
            "typeAnnotation": null,
            "start": 1354,
            "end": 1364
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DataFetchFns",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1365,
                      "end": 1377
                    },
                    "typeArguments": null,
                    "start": 1365,
                    "end": 1377
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1378,
                      "end": 1379
                    },
                    "typeArguments": null,
                    "start": 1378,
                    "end": 1379
                  },
                  "start": 1365,
                  "end": 1380
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1381,
                    "end": 1382
                  },
                  "typeArguments": null,
                  "start": 1381,
                  "end": 1382
                },
                "start": 1365,
                "end": 1383
              }
            ],
            "start": 1364,
            "end": 1384
          },
          "start": 1354,
          "end": 1384
        },
        "declare": false,
        "start": 1271,
        "end": 1385
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1264,
      "end": 1385
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "VehicleSelector",
        "optional": false,
        "typeAnnotation": null,
        "start": 1391,
        "end": 1406
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
              "start": 1407,
              "end": 1408
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DataFetchFns",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1423,
                  "end": 1435
                },
                "typeArguments": null,
                "start": 1423,
                "end": 1435
              },
              "start": 1417,
              "end": 1435
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1407,
            "end": 1435
          }
        ],
        "start": 1406,
        "end": 1436
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "DataFetchFns",
            "optional": false,
            "typeAnnotation": null,
            "start": 1439,
            "end": 1451
          },
          "typeArguments": null,
          "start": 1439,
          "end": 1451
        },
        "indexType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1452,
            "end": 1453
          },
          "typeArguments": null,
          "start": 1452,
          "end": 1453
        },
        "start": 1439,
        "end": 1454
      },
      "declare": false,
      "start": 1386,
      "end": 1455
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TypeHardcodedAsParameter2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1468,
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 1494,
                "end": 1495
              },
              "constraint": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "Boat",
                  "raw": "'Boat'",
                  "start": 1504,
                  "end": 1510
                },
                "start": 1504,
                "end": 1510
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1494,
              "end": 1510
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "F",
                "optional": false,
                "typeAnnotation": null,
                "start": 1512,
                "end": 1513
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
                      "name": "DataFetchFns",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1528,
                      "end": 1540
                    },
                    "typeArguments": null,
                    "start": 1528,
                    "end": 1540
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1541,
                      "end": 1542
                    },
                    "typeArguments": null,
                    "start": 1541,
                    "end": 1542
                  },
                  "start": 1528,
                  "end": 1543
                },
                "start": 1522,
                "end": 1543
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1512,
              "end": 1543
            }
          ],
          "start": 1493,
          "end": 1544
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ReturnType",
            "optional": false,
            "typeAnnotation": null,
            "start": 1547,
            "end": 1557
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
                    "name": "VehicleSelector",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1558,
                    "end": 1573
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
                          "start": 1574,
                          "end": 1575
                        },
                        "typeArguments": null,
                        "start": 1574,
                        "end": 1575
                      }
                    ],
                    "start": 1573,
                    "end": 1576
                  },
                  "start": 1558,
                  "end": 1576
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1577,
                    "end": 1578
                  },
                  "typeArguments": null,
                  "start": 1577,
                  "end": 1578
                },
                "start": 1558,
                "end": 1579
              }
            ],
            "start": 1557,
            "end": 1580
          },
          "start": 1547,
          "end": 1580
        },
        "declare": false,
        "start": 1463,
        "end": 1581
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1456,
      "end": 1581
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TypeGeneric1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1594,
          "end": 1606
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
                "start": 1607,
                "end": 1608
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DataFetchFns",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1623,
                    "end": 1635
                  },
                  "typeArguments": null,
                  "start": 1623,
                  "end": 1635
                },
                "start": 1617,
                "end": 1635
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1607,
              "end": 1635
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "F",
                "optional": false,
                "typeAnnotation": null,
                "start": 1637,
                "end": 1638
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
                      "name": "DataFetchFns",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1653,
                      "end": 1665
                    },
                    "typeArguments": null,
                    "start": 1653,
                    "end": 1665
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1666,
                      "end": 1667
                    },
                    "typeArguments": null,
                    "start": 1666,
                    "end": 1667
                  },
                  "start": 1653,
                  "end": 1668
                },
                "start": 1647,
                "end": 1668
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1637,
              "end": 1668
            }
          ],
          "start": 1606,
          "end": 1669
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ReturnType",
            "optional": false,
            "typeAnnotation": null,
            "start": 1672,
            "end": 1682
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DataFetchFns",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1683,
                      "end": 1695
                    },
                    "typeArguments": null,
                    "start": 1683,
                    "end": 1695
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1696,
                      "end": 1697
                    },
                    "typeArguments": null,
                    "start": 1696,
                    "end": 1697
                  },
                  "start": 1683,
                  "end": 1698
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1699,
                    "end": 1700
                  },
                  "typeArguments": null,
                  "start": 1699,
                  "end": 1700
                },
                "start": 1683,
                "end": 1701
              }
            ],
            "start": 1682,
            "end": 1702
          },
          "start": 1672,
          "end": 1702
        },
        "declare": false,
        "start": 1589,
        "end": 1703
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1582,
      "end": 1703
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TypeGeneric2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1716,
          "end": 1728
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
                "start": 1729,
                "end": 1730
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DataFetchFns",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1745,
                    "end": 1757
                  },
                  "typeArguments": null,
                  "start": 1745,
                  "end": 1757
                },
                "start": 1739,
                "end": 1757
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1729,
              "end": 1757
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "F",
                "optional": false,
                "typeAnnotation": null,
                "start": 1759,
                "end": 1760
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
                      "name": "DataFetchFns",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1775,
                      "end": 1787
                    },
                    "typeArguments": null,
                    "start": 1775,
                    "end": 1787
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1788,
                      "end": 1789
                    },
                    "typeArguments": null,
                    "start": 1788,
                    "end": 1789
                  },
                  "start": 1775,
                  "end": 1790
                },
                "start": 1769,
                "end": 1790
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1759,
              "end": 1790
            }
          ],
          "start": 1728,
          "end": 1791
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ReturnType",
            "optional": false,
            "typeAnnotation": null,
            "start": 1794,
            "end": 1804
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DataFetchFns",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1805,
                      "end": 1817
                    },
                    "typeArguments": null,
                    "start": 1805,
                    "end": 1817
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1818,
                      "end": 1819
                    },
                    "typeArguments": null,
                    "start": 1818,
                    "end": 1819
                  },
                  "start": 1805,
                  "end": 1820
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1821,
                    "end": 1822
                  },
                  "typeArguments": null,
                  "start": 1821,
                  "end": 1822
                },
                "start": 1805,
                "end": 1823
              }
            ],
            "start": 1804,
            "end": 1824
          },
          "start": 1794,
          "end": 1824
        },
        "declare": false,
        "start": 1711,
        "end": 1825
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1704,
      "end": 1825
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TypeGeneric3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1847,
          "end": 1859
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
                "start": 1860,
                "end": 1861
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DataFetchFns",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1876,
                    "end": 1888
                  },
                  "typeArguments": null,
                  "start": 1876,
                  "end": 1888
                },
                "start": 1870,
                "end": 1888
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1860,
              "end": 1888
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "F",
                "optional": false,
                "typeAnnotation": null,
                "start": 1890,
                "end": 1891
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
                      "name": "DataFetchFns",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1906,
                      "end": 1918
                    },
                    "typeArguments": null,
                    "start": 1906,
                    "end": 1918
                  },
                  "indexType": {
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
                  "start": 1906,
                  "end": 1921
                },
                "start": 1900,
                "end": 1921
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1890,
              "end": 1921
            }
          ],
          "start": 1859,
          "end": 1922
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ReturnType",
            "optional": false,
            "typeAnnotation": null,
            "start": 1925,
            "end": 1935
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DataFetchFns",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1936,
                      "end": 1948
                    },
                    "typeArguments": null,
                    "start": 1936,
                    "end": 1948
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "F",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1949,
                      "end": 1950
                    },
                    "typeArguments": null,
                    "start": 1949,
                    "end": 1950
                  },
                  "start": 1936,
                  "end": 1951
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1952,
                    "end": 1953
                  },
                  "typeArguments": null,
                  "start": 1952,
                  "end": 1953
                },
                "start": 1936,
                "end": 1954
              }
            ],
            "start": 1935,
            "end": 1955
          },
          "start": 1925,
          "end": 1955
        },
        "declare": false,
        "start": 1842,
        "end": 1956
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1835,
      "end": 1956
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 10,
  "end": 1965
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 10,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "DataFetchFns",
    "start": 15,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "Boat",
    "start": 36,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "requiresLicense",
    "start": 52,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 70,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 74,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 82,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 85,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "maxGroundSpeed",
    "start": 102,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 119,
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
    "value": "string",
    "start": 123,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 131,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 134,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "description",
    "start": 150,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 164,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 168,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 176,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 179,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "displacement",
    "start": 195,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 210,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 214,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 222,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 225,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 241,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 248,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 252,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 260,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 263,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "Plane",
    "start": 282,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "requiresLicense",
    "start": 299,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 317,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 321,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 329,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 332,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "maxGroundSpeed",
    "start": 349,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 366,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 370,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 378,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 381,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "maxTakeoffWeight",
    "start": 397,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 416,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 420,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 428,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 431,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "maxCruisingAltitude",
    "start": 447,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 469,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 473,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 481,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 484,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 500,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 507,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 511,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 519,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 522,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 536,
    "end": 537
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 538,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 545,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "NoTypeParamBoatRequired",
    "start": 550,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 573,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 574,
    "end": 575
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 576,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 584,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "DataFetchFns",
    "start": 590,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 602,
    "end": 603
  },
  {
    "type": "String",
    "value": "'Boat'",
    "start": 603,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 612,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "ReturnType",
    "start": 614,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 624,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "DataFetchFns",
    "start": 625,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 637,
    "end": 638
  },
  {
    "type": "String",
    "value": "'Boat'",
    "start": 638,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 645,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 648,
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
    "value": "type",
    "start": 651,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "TypeHardcodedAsParameterWithoutReturnType",
    "start": 656,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 697,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "String",
    "value": "'Boat'",
    "start": 708,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 714,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 716,
    "end": 717
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 718,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 726,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "DataFetchFns",
    "start": 732,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 744,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 749,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "DataFetchFns",
    "start": 751,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 763,
    "end": 764
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 766,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 769,
    "end": 770
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 771,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 778,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "allAreFunctionsAsExpected",
    "start": 783,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 809,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "TypeHardcodedAsParameterWithoutReturnType",
    "start": 811,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 852,
    "end": 853
  },
  {
    "type": "String",
    "value": "'Boat'",
    "start": 853,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 859,
    "end": 860
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 861,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "DataFetchFns",
    "start": 867,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 879,
    "end": 880
  },
  {
    "type": "String",
    "value": "'Boat'",
    "start": 880,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 887,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 888,
    "end": 889
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 890,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 897,
    "end": 901
  },
  {
    "type": "Identifier",
    "value": "returnTypeOfFunctions",
    "start": 902,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 924,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "ReturnType",
    "start": 926,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 936,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "allAreFunctionsAsExpected",
    "start": 937,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 963,
    "end": 964
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1005,
    "end": 1011
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1012,
    "end": 1016
  },
  {
    "type": "Identifier",
    "value": "SucceedingCombo",
    "start": 1017,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Identifier",
    "value": "ReturnType",
    "start": 1035,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Identifier",
    "value": "TypeHardcodedAsParameterWithoutReturnType",
    "start": 1046,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "String",
    "value": "'Boat'",
    "start": 1088,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1096,
    "end": 1101
  },
  {
    "type": "Identifier",
    "value": "DataFetchFns",
    "start": 1102,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "String",
    "value": "'Boat'",
    "start": 1115,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1126,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1133,
    "end": 1137
  },
  {
    "type": "Identifier",
    "value": "FailingCombo",
    "start": 1138,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1153,
    "end": 1160
  },
  {
    "type": "String",
    "value": "'Boat'",
    "start": 1161,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1171,
    "end": 1178
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1179,
    "end": 1184
  },
  {
    "type": "Identifier",
    "value": "DataFetchFns",
    "start": 1185,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Identifier",
    "value": "ReturnType",
    "start": 1204,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Identifier",
    "value": "TypeHardcodedAsParameterWithoutReturnType",
    "start": 1215,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1264,
    "end": 1270
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1271,
    "end": 1275
  },
  {
    "type": "Identifier",
    "value": "TypeHardcodedAsParameter",
    "start": 1276,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1303,
    "end": 1310
  },
  {
    "type": "String",
    "value": "'Boat'",
    "start": 1311,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1321,
    "end": 1328
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1329,
    "end": 1334
  },
  {
    "type": "Identifier",
    "value": "DataFetchFns",
    "start": 1335,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Identifier",
    "value": "ReturnType",
    "start": 1354,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Identifier",
    "value": "DataFetchFns",
    "start": 1365,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1386,
    "end": 1390
  },
  {
    "type": "Identifier",
    "value": "VehicleSelector",
    "start": 1391,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1409,
    "end": 1416
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1417,
    "end": 1422
  },
  {
    "type": "Identifier",
    "value": "DataFetchFns",
    "start": 1423,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Identifier",
    "value": "DataFetchFns",
    "start": 1439,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1452,
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
    "value": ";",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1456,
    "end": 1462
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1463,
    "end": 1467
  },
  {
    "type": "Identifier",
    "value": "TypeHardcodedAsParameter2",
    "start": 1468,
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
    "value": "T",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1496,
    "end": 1503
  },
  {
    "type": "String",
    "value": "'Boat'",
    "start": 1504,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 1512,
    "end": 1513
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1514,
    "end": 1521
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1522,
    "end": 1527
  },
  {
    "type": "Identifier",
    "value": "DataFetchFns",
    "start": 1528,
    "end": 1540
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Identifier",
    "value": "ReturnType",
    "start": 1547,
    "end": 1557
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Identifier",
    "value": "VehicleSelector",
    "start": 1558,
    "end": 1573
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1574,
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
    "value": "[",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1578,
    "end": 1579
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1582,
    "end": 1588
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1589,
    "end": 1593
  },
  {
    "type": "Identifier",
    "value": "TypeGeneric1",
    "start": 1594,
    "end": 1606
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1609,
    "end": 1616
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1617,
    "end": 1622
  },
  {
    "type": "Identifier",
    "value": "DataFetchFns",
    "start": 1623,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1639,
    "end": 1646
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1647,
    "end": 1652
  },
  {
    "type": "Identifier",
    "value": "DataFetchFns",
    "start": 1653,
    "end": 1665
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1667,
    "end": 1668
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Identifier",
    "value": "ReturnType",
    "start": 1672,
    "end": 1682
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Identifier",
    "value": "DataFetchFns",
    "start": 1683,
    "end": 1695
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1697,
    "end": 1698
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1701,
    "end": 1702
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1704,
    "end": 1710
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1711,
    "end": 1715
  },
  {
    "type": "Identifier",
    "value": "TypeGeneric2",
    "start": 1716,
    "end": 1728
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1731,
    "end": 1738
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1739,
    "end": 1744
  },
  {
    "type": "Identifier",
    "value": "DataFetchFns",
    "start": 1745,
    "end": 1757
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1757,
    "end": 1758
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1761,
    "end": 1768
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1769,
    "end": 1774
  },
  {
    "type": "Identifier",
    "value": "DataFetchFns",
    "start": 1775,
    "end": 1787
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1787,
    "end": 1788
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1792,
    "end": 1793
  },
  {
    "type": "Identifier",
    "value": "ReturnType",
    "start": 1794,
    "end": 1804
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "Identifier",
    "value": "DataFetchFns",
    "start": 1805,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1820,
    "end": 1821
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1823,
    "end": 1824
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1824,
    "end": 1825
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1835,
    "end": 1841
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1842,
    "end": 1846
  },
  {
    "type": "Identifier",
    "value": "TypeGeneric3",
    "start": 1847,
    "end": 1859
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1859,
    "end": 1860
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1862,
    "end": 1869
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1870,
    "end": 1875
  },
  {
    "type": "Identifier",
    "value": "DataFetchFns",
    "start": 1876,
    "end": 1888
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1888,
    "end": 1889
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 1890,
    "end": 1891
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1892,
    "end": 1899
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1900,
    "end": 1905
  },
  {
    "type": "Identifier",
    "value": "DataFetchFns",
    "start": 1906,
    "end": 1918
  },
  {
    "type": "Punctuator",
    "value": "[",
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
    "value": "]",
    "start": 1920,
    "end": 1921
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1921,
    "end": 1922
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Identifier",
    "value": "ReturnType",
    "start": 1925,
    "end": 1935
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Identifier",
    "value": "DataFetchFns",
    "start": 1936,
    "end": 1948
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1948,
    "end": 1949
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 1949,
    "end": 1950
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1950,
    "end": 1951
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 1952,
    "end": 1953
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": ";",
    "start": 1955,
    "end": 1956
  }
]
```
