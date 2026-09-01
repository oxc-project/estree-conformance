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
        "name": "UnshiftTuple",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 39
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
              "start": 40,
              "end": 41
            },
            "constraint": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 54,
                      "end": 57
                    },
                    "start": 54,
                    "end": 59
                  },
                  "start": 51,
                  "end": 59
                }
              ],
              "start": 50,
              "end": 60
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 40,
            "end": 60
          }
        ],
        "start": 39,
        "end": 61
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
            "start": 64,
            "end": 65
          },
          "typeArguments": null,
          "start": 64,
          "end": 65
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
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 75,
                  "end": 76
                },
                "typeArguments": null,
                "start": 75,
                "end": 76
              },
              "indexType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 77,
                  "end": 78
                },
                "start": 77,
                "end": 78
              },
              "start": 75,
              "end": 79
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Tail",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 90,
                    "end": 94
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 90,
                  "end": 94
                },
                "start": 84,
                "end": 94
              },
              "start": 81,
              "end": 94
            }
          ],
          "start": 74,
          "end": 95
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Tail",
            "optional": false,
            "typeAnnotation": null,
            "start": 98,
            "end": 102
          },
          "typeArguments": null,
          "start": 98,
          "end": 102
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 105,
          "end": 110
        },
        "start": 64,
        "end": 110
      },
      "declare": false,
      "start": 22,
      "end": 111
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExpandSmallerTuples",
        "optional": false,
        "typeAnnotation": null,
        "start": 117,
        "end": 136
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
              "start": 137,
              "end": 138
            },
            "constraint": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 151,
                      "end": 154
                    },
                    "start": 151,
                    "end": 156
                  },
                  "start": 148,
                  "end": 156
                }
              ],
              "start": 147,
              "end": 157
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 137,
            "end": 157
          }
        ],
        "start": 136,
        "end": 158
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
            "start": 161,
            "end": 162
          },
          "typeArguments": null,
          "start": 161,
          "end": 162
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
              "indexType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 174,
                  "end": 175
                },
                "start": 174,
                "end": 175
              },
              "start": 172,
              "end": 176
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Tail",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 187,
                    "end": 191
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 187,
                  "end": 191
                },
                "start": 181,
                "end": 191
              },
              "start": 178,
              "end": 191
            }
          ],
          "start": 171,
          "end": 192
        },
        "trueType": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 195,
                "end": 196
              },
              "typeArguments": null,
              "start": 195,
              "end": 196
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ExpandSmallerTuples",
                "optional": false,
                "typeAnnotation": null,
                "start": 199,
                "end": 218
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Tail",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 219,
                      "end": 223
                    },
                    "typeArguments": null,
                    "start": 219,
                    "end": 223
                  }
                ],
                "start": 218,
                "end": 224
              },
              "start": 199,
              "end": 224
            }
          ],
          "start": 195,
          "end": 224
        },
        "falseType": {
          "type": "TSTupleType",
          "elementTypes": [],
          "start": 227,
          "end": 229
        },
        "start": 161,
        "end": 229
      },
      "declare": false,
      "start": 112,
      "end": 230
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Shift",
        "optional": false,
        "typeAnnotation": null,
        "start": 236,
        "end": 241
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
              "start": 242,
              "end": 243
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 252,
                "end": 257
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 258,
                    "end": 261
                  }
                ],
                "start": 257,
                "end": 262
              },
              "start": 252,
              "end": 262
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 242,
            "end": 262
          }
        ],
        "start": 241,
        "end": 263
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
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
                "start": 271,
                "end": 275
              },
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
                    "start": 277,
                    "end": 278
                  },
                  "typeArguments": null,
                  "start": 277,
                  "end": 278
                },
                "start": 275,
                "end": 278
              },
              "value": null,
              "start": 268,
              "end": 278
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 283,
              "end": 287
            },
            "start": 280,
            "end": 287
          },
          "start": 267,
          "end": 287
        },
        "extendsType": {
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
                "start": 301,
                "end": 305
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 308,
                          "end": 309
                        },
                        "typeArguments": null,
                        "start": 308,
                        "end": 309
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 310,
                          "end": 311
                        },
                        "start": 310,
                        "end": 311
                      },
                      "start": 308,
                      "end": 312
                    },
                    {
                      "type": "TSRestType",
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
                            "start": 323,
                            "end": 324
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 323,
                          "end": 324
                        },
                        "start": 317,
                        "end": 324
                      },
                      "start": 314,
                      "end": 324
                    }
                  ],
                  "start": 307,
                  "end": 325
                },
                "start": 305,
                "end": 325
              },
              "value": null,
              "start": 298,
              "end": 325
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 330,
              "end": 334
            },
            "start": 327,
            "end": 334
          },
          "start": 297,
          "end": 334
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null,
            "start": 337,
            "end": 338
          },
          "typeArguments": null,
          "start": 337,
          "end": 338
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 341,
          "end": 346
        },
        "start": 266,
        "end": 346
      },
      "declare": false,
      "start": 231,
      "end": 347
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GrowExpRev",
        "optional": false,
        "typeAnnotation": null,
        "start": 353,
        "end": 363
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
              "start": 364,
              "end": 365
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 374,
                "end": 379
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 380,
                    "end": 383
                  }
                ],
                "start": 379,
                "end": 384
              },
              "start": 374,
              "end": 384
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 364,
            "end": 384
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 386,
              "end": 387
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 396,
              "end": 402
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 386,
            "end": 402
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 404,
              "end": 405
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 414,
                "end": 419
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 420,
                      "end": 425
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 426,
                          "end": 429
                        }
                      ],
                      "start": 425,
                      "end": 430
                    },
                    "start": 420,
                    "end": 430
                  }
                ],
                "start": 419,
                "end": 431
              },
              "start": 414,
              "end": 431
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 404,
            "end": 431
          }
        ],
        "start": 363,
        "end": 432
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 435,
              "end": 436
            },
            "typeArguments": null,
            "start": 435,
            "end": 436
          },
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "length",
              "raw": "'length'",
              "start": 437,
              "end": 445
            },
            "start": 437,
            "end": 445
          },
          "start": 435,
          "end": 446
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 455,
            "end": 456
          },
          "typeArguments": null,
          "start": 455,
          "end": 456
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 459,
            "end": 460
          },
          "typeArguments": null,
          "start": 459,
          "end": 460
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "GrowExpRev",
            "optional": false,
            "typeAnnotation": null,
            "start": 463,
            "end": 473
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSRestType",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 478,
                            "end": 479
                          },
                          "typeArguments": null,
                          "start": 478,
                          "end": 479
                        },
                        "start": 475,
                        "end": 479
                      },
                      {
                        "type": "TSRestType",
                        "typeAnnotation": {
                          "type": "TSIndexedAccessType",
                          "objectType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 484,
                              "end": 485
                            },
                            "typeArguments": null,
                            "start": 484,
                            "end": 485
                          },
                          "indexType": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 486,
                              "end": 487
                            },
                            "start": 486,
                            "end": 487
                          },
                          "start": 484,
                          "end": 488
                        },
                        "start": 481,
                        "end": 488
                      }
                    ],
                    "start": 474,
                    "end": 489
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "N",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 490,
                      "end": 491
                    },
                    "typeArguments": null,
                    "start": 490,
                    "end": 491
                  },
                  "start": 474,
                  "end": 492
                },
                "extendsType": {
                  "type": "TSUndefinedKeyword",
                  "start": 501,
                  "end": 510
                },
                "trueType": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSRestType",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 517,
                          "end": 518
                        },
                        "typeArguments": null,
                        "start": 517,
                        "end": 518
                      },
                      "start": 514,
                      "end": 518
                    },
                    {
                      "type": "TSRestType",
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 523,
                            "end": 524
                          },
                          "typeArguments": null,
                          "start": 523,
                          "end": 524
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 525,
                            "end": 526
                          },
                          "start": 525,
                          "end": 526
                        },
                        "start": 523,
                        "end": 527
                      },
                      "start": 520,
                      "end": 527
                    }
                  ],
                  "start": 513,
                  "end": 528
                },
                "falseType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 531,
                    "end": 532
                  },
                  "typeArguments": null,
                  "start": 531,
                  "end": 532
                },
                "start": 474,
                "end": 532
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 534,
                  "end": 535
                },
                "typeArguments": null,
                "start": 534,
                "end": 535
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Shift",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 537,
                  "end": 542
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 543,
                        "end": 544
                      },
                      "typeArguments": null,
                      "start": 543,
                      "end": 544
                    }
                  ],
                  "start": 542,
                  "end": 545
                },
                "start": 537,
                "end": 545
              }
            ],
            "start": 473,
            "end": 546
          },
          "start": 463,
          "end": 546
        },
        "start": 435,
        "end": 546
      },
      "declare": false,
      "start": 348,
      "end": 547
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GrowExp",
        "optional": false,
        "typeAnnotation": null,
        "start": 553,
        "end": 560
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
              "start": 561,
              "end": 562
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 571,
                "end": 576
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 577,
                    "end": 580
                  }
                ],
                "start": 576,
                "end": 581
              },
              "start": 571,
              "end": 581
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 561,
            "end": 581
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 583,
              "end": 584
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 593,
              "end": 599
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 583,
            "end": 599
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 601,
              "end": 602
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 611,
                "end": 616
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 617,
                      "end": 622
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 623,
                          "end": 626
                        }
                      ],
                      "start": 622,
                      "end": 627
                    },
                    "start": 617,
                    "end": 627
                  }
                ],
                "start": 616,
                "end": 628
              },
              "start": 611,
              "end": 628
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 601,
            "end": 628
          }
        ],
        "start": 560,
        "end": 629
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSRestType",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 636,
                    "end": 637
                  },
                  "typeArguments": null,
                  "start": 636,
                  "end": 637
                },
                "start": 633,
                "end": 637
              },
              {
                "type": "TSRestType",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 642,
                    "end": 643
                  },
                  "typeArguments": null,
                  "start": 642,
                  "end": 643
                },
                "start": 639,
                "end": 643
              }
            ],
            "start": 632,
            "end": 644
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 645,
              "end": 646
            },
            "typeArguments": null,
            "start": 645,
            "end": 646
          },
          "start": 632,
          "end": 647
        },
        "extendsType": {
          "type": "TSUndefinedKeyword",
          "start": 656,
          "end": 665
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "GrowExp",
            "optional": false,
            "typeAnnotation": null,
            "start": 668,
            "end": 675
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
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
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 680,
                        "end": 681
                      },
                      "typeArguments": null,
                      "start": 680,
                      "end": 681
                    },
                    "start": 677,
                    "end": 681
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 686,
                        "end": 687
                      },
                      "typeArguments": null,
                      "start": 686,
                      "end": 687
                    },
                    "start": 683,
                    "end": 687
                  }
                ],
                "start": 676,
                "end": 688
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 690,
                  "end": 691
                },
                "typeArguments": null,
                "start": 690,
                "end": 691
              },
              {
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
                      "start": 694,
                      "end": 695
                    },
                    "typeArguments": null,
                    "start": 694,
                    "end": 695
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 700,
                        "end": 701
                      },
                      "typeArguments": null,
                      "start": 700,
                      "end": 701
                    },
                    "start": 697,
                    "end": 701
                  }
                ],
                "start": 693,
                "end": 702
              }
            ],
            "start": 675,
            "end": 703
          },
          "start": 668,
          "end": 703
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "GrowExpRev",
            "optional": false,
            "typeAnnotation": null,
            "start": 706,
            "end": 716
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
                  "start": 717,
                  "end": 718
                },
                "typeArguments": null,
                "start": 717,
                "end": 718
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 720,
                  "end": 721
                },
                "typeArguments": null,
                "start": 720,
                "end": 721
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 723,
                  "end": 724
                },
                "typeArguments": null,
                "start": 723,
                "end": 724
              }
            ],
            "start": 716,
            "end": 725
          },
          "start": 706,
          "end": 725
        },
        "start": 632,
        "end": 725
      },
      "declare": false,
      "start": 548,
      "end": 726
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tuple",
        "optional": false,
        "typeAnnotation": null,
        "start": 732,
        "end": 737
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
              "start": 738,
              "end": 739
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 738,
            "end": 739
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 741,
              "end": 742
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 751,
              "end": 757
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 741,
            "end": 757
          }
        ],
        "start": 737,
        "end": 758
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSNumberKeyword",
          "start": 761,
          "end": 767
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 776,
            "end": 777
          },
          "typeArguments": null,
          "start": 776,
          "end": 777
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 780,
            "end": 785
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
                  "start": 786,
                  "end": 787
                },
                "typeArguments": null,
                "start": 786,
                "end": 787
              }
            ],
            "start": 785,
            "end": 788
          },
          "start": 780,
          "end": 788
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 791,
              "end": 792
            },
            "typeArguments": null,
            "start": 791,
            "end": 792
          },
          "extendsType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 801,
              "end": 802
            },
            "start": 801,
            "end": 802
          },
          "trueType": {
            "type": "TSTupleType",
            "elementTypes": [],
            "start": 805,
            "end": 807
          },
          "falseType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 810,
                "end": 811
              },
              "typeArguments": null,
              "start": 810,
              "end": 811
            },
            "extendsType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 820,
                "end": 821
              },
              "start": 820,
              "end": 821
            },
            "trueType": {
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
                    "start": 825,
                    "end": 826
                  },
                  "typeArguments": null,
                  "start": 825,
                  "end": 826
                }
              ],
              "start": 824,
              "end": 827
            },
            "falseType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "GrowExp",
                "optional": false,
                "typeAnnotation": null,
                "start": 830,
                "end": 837
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 839,
                          "end": 840
                        },
                        "typeArguments": null,
                        "start": 839,
                        "end": 840
                      }
                    ],
                    "start": 838,
                    "end": 841
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "N",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 843,
                      "end": 844
                    },
                    "typeArguments": null,
                    "start": 843,
                    "end": 844
                  },
                  {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSTupleType",
                        "elementTypes": [],
                        "start": 847,
                        "end": 849
                      }
                    ],
                    "start": 846,
                    "end": 850
                  }
                ],
                "start": 837,
                "end": 851
              },
              "start": 830,
              "end": 851
            },
            "start": 810,
            "end": 851
          },
          "start": 791,
          "end": 851
        },
        "start": 761,
        "end": 851
      },
      "declare": false,
      "start": 727,
      "end": 852
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ArrayValidator",
        "optional": false,
        "typeAnnotation": null,
        "start": 868,
        "end": 882
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
              "start": 883,
              "end": 884
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 893,
                "end": 900
              },
              "start": 893,
              "end": 902
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 883,
            "end": 902
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 904,
              "end": 905
            },
            "constraint": null,
            "default": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 908,
                  "end": 909
                },
                "typeArguments": null,
                "start": 908,
                "end": 909
              },
              "indexType": {
                "type": "TSNumberKeyword",
                "start": 910,
                "end": 916
              },
              "start": 908,
              "end": 917
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 904,
            "end": 917
          }
        ],
        "start": 882,
        "end": 918
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
              "name": "lengthRange",
              "optional": false,
              "typeAnnotation": null,
              "start": 925,
              "end": 936
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
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 937,
                      "end": 938
                    },
                    "constraint": {
                      "type": "TSNumberKeyword",
                      "start": 947,
                      "end": 953
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 937,
                    "end": 953
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 955,
                      "end": 956
                    },
                    "constraint": {
                      "type": "TSNumberKeyword",
                      "start": 965,
                      "end": 971
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 955,
                    "end": 971
                  }
                ],
                "start": 936,
                "end": 972
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "start",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 980,
                        "end": 981
                      },
                      "typeArguments": null,
                      "start": 980,
                      "end": 981
                    },
                    "start": 978,
                    "end": 981
                  },
                  "start": 973,
                  "end": 981
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "endBefore",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 994,
                        "end": 995
                      },
                      "typeArguments": null,
                      "start": 994,
                      "end": 995
                    },
                    "start": 992,
                    "end": 995
                  },
                  "start": 983,
                  "end": 995
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ArrayValidator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 998,
                    "end": 1012
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Exclude",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1013,
                          "end": 1020
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ExpandSmallerTuples",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1021,
                                "end": 1040
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "UnshiftTuple",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1041,
                                      "end": 1053
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "params": [
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
                                                  "name": "Tuple",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 1058,
                                                  "end": 1063
                                                },
                                                "typeArguments": {
                                                  "type": "TSTypeParameterInstantiation",
                                                  "params": [
                                                    {
                                                      "type": "TSTypeReference",
                                                      "typeName": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "I",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 1064,
                                                        "end": 1065
                                                      },
                                                      "typeArguments": null,
                                                      "start": 1064,
                                                      "end": 1065
                                                    },
                                                    {
                                                      "type": "TSTypeReference",
                                                      "typeName": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "E",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 1067,
                                                        "end": 1068
                                                      },
                                                      "typeArguments": null,
                                                      "start": 1067,
                                                      "end": 1068
                                                    }
                                                  ],
                                                  "start": 1063,
                                                  "end": 1069
                                                },
                                                "start": 1058,
                                                "end": 1069
                                              },
                                              "start": 1055,
                                              "end": 1069
                                            }
                                          ],
                                          "start": 1054,
                                          "end": 1070
                                        }
                                      ],
                                      "start": 1053,
                                      "end": 1071
                                    },
                                    "start": 1041,
                                    "end": 1071
                                  }
                                ],
                                "start": 1040,
                                "end": 1072
                              },
                              "start": 1021,
                              "end": 1072
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ExpandSmallerTuples",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1074,
                                "end": 1093
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "UnshiftTuple",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1094,
                                      "end": 1106
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "params": [
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
                                                  "name": "Tuple",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 1111,
                                                  "end": 1116
                                                },
                                                "typeArguments": {
                                                  "type": "TSTypeParameterInstantiation",
                                                  "params": [
                                                    {
                                                      "type": "TSTypeReference",
                                                      "typeName": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "I",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 1117,
                                                        "end": 1118
                                                      },
                                                      "typeArguments": null,
                                                      "start": 1117,
                                                      "end": 1118
                                                    },
                                                    {
                                                      "type": "TSTypeReference",
                                                      "typeName": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "S",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 1120,
                                                        "end": 1121
                                                      },
                                                      "typeArguments": null,
                                                      "start": 1120,
                                                      "end": 1121
                                                    }
                                                  ],
                                                  "start": 1116,
                                                  "end": 1122
                                                },
                                                "start": 1111,
                                                "end": 1122
                                              },
                                              "start": 1108,
                                              "end": 1122
                                            }
                                          ],
                                          "start": 1107,
                                          "end": 1123
                                        }
                                      ],
                                      "start": 1106,
                                      "end": 1124
                                    },
                                    "start": 1094,
                                    "end": 1124
                                  }
                                ],
                                "start": 1093,
                                "end": 1125
                              },
                              "start": 1074,
                              "end": 1125
                            }
                          ],
                          "start": 1020,
                          "end": 1126
                        },
                        "start": 1013,
                        "end": 1126
                      }
                    ],
                    "start": 1012,
                    "end": 1127
                  },
                  "start": 998,
                  "end": 1127
                },
                "start": 996,
                "end": 1127
              },
              "body": null,
              "expression": false,
              "start": 936,
              "end": 1128
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 925,
            "end": 1128
          }
        ],
        "start": 919,
        "end": 1130
      },
      "abstract": false,
      "declare": true,
      "start": 854,
      "end": 1130
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 1130
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 22,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "UnshiftTuple",
    "start": 27,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 40,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 42,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 51,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 54,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 64,
    "end": 65
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 66,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 76,
    "end": 77
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 81,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 84,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "Tail",
    "start": 90,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "Tail",
    "start": 98,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 105,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 112,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "ExpandSmallerTuples",
    "start": 117,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 139,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 148,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 151,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 161,
    "end": 162
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 163,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 173,
    "end": 174
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 178,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 181,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "Tail",
    "start": 187,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "ExpandSmallerTuples",
    "start": 199,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "Tail",
    "start": 219,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 231,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "Shift",
    "start": 236,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 242,
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
    "value": "Array",
    "start": 252,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 258,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 268,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 271,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 280,
    "end": 282
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 283,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 287,
    "end": 288
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 289,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 298,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 301,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 309,
    "end": 310
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 314,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 317,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 327,
    "end": 329
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 330,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 341,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 348,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "GrowExpRev",
    "start": 353,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 364,
    "end": 365
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 366,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 374,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 380,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 386,
    "end": 387
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 388,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 396,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 404,
    "end": 405
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 406,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 414,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 420,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 426,
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
    "value": ">",
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
    "value": "=",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 436,
    "end": 437
  },
  {
    "type": "String",
    "value": "'length'",
    "start": 437,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 445,
    "end": 446
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 447,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "GrowExpRev",
    "start": 463,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 475,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 481,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 485,
    "end": 486
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 487,
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
    "value": "[",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 491,
    "end": 492
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 493,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 501,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 514,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 520,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 524,
    "end": 525
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": ":",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "Shift",
    "start": 537,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 548,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "GrowExp",
    "start": 553,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 561,
    "end": 562
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 563,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 571,
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
    "value": "any",
    "start": 577,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 581,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 583,
    "end": 584
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 585,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 593,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 599,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 601,
    "end": 602
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 603,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 611,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 616,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 617,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 622,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 623,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 633,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 639,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 644,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 646,
    "end": 647
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 648,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 656,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 666,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "GrowExp",
    "start": 668,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 677,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 683,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 688,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 697,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 704,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "GrowExpRev",
    "start": 706,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 716,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 718,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 721,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "P",
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
    "value": ";",
    "start": 725,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 727,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "Tuple",
    "start": 732,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 737,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 739,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 741,
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
    "value": "number",
    "start": 751,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 759,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 761,
    "end": 767
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 768,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 778,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 780,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 785,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 789,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 791,
    "end": 792
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 793,
    "end": 800
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 808,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 810,
    "end": 811
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 812,
    "end": 819
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 824,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 828,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "GrowExp",
    "start": 830,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 837,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 838,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 840,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 841,
    "end": 842
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 851,
    "end": 852
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 854,
    "end": 861
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 862,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "ArrayValidator",
    "start": 868,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 882,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 883,
    "end": 884
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 885,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 893,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 900,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 902,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 904,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 906,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 908,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 909,
    "end": 910
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 910,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 916,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 919,
    "end": 920
  },
  {
    "type": "Identifier",
    "value": "lengthRange",
    "start": 925,
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
    "value": "S",
    "start": 937,
    "end": 938
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 939,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 947,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 953,
    "end": 954
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 955,
    "end": 956
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 957,
    "end": 964
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 965,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 971,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 972,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "start",
    "start": 973,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 978,
    "end": 979
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 980,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 981,
    "end": 982
  },
  {
    "type": "Identifier",
    "value": "endBefore",
    "start": 983,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 992,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 994,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 995,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 996,
    "end": 997
  },
  {
    "type": "Identifier",
    "value": "ArrayValidator",
    "start": 998,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Identifier",
    "value": "Exclude",
    "start": 1013,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Identifier",
    "value": "ExpandSmallerTuples",
    "start": 1021,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Identifier",
    "value": "UnshiftTuple",
    "start": 1041,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1055,
    "end": 1058
  },
  {
    "type": "Identifier",
    "value": "Tuple",
    "start": 1058,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Identifier",
    "value": "ExpandSmallerTuples",
    "start": 1074,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Identifier",
    "value": "UnshiftTuple",
    "start": 1094,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1108,
    "end": 1111
  },
  {
    "type": "Identifier",
    "value": "Tuple",
    "start": 1111,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": ">",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1129,
    "end": 1130
  }
]
```
