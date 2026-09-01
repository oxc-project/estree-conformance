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
        "name": "Covariant",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 14
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
              "start": 15,
              "end": 16
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 15,
            "end": 16
          }
        ],
        "start": 14,
        "end": 17
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
                "start": 24,
                "end": 29
              },
              "start": 22,
              "end": 29
            },
            "start": 21,
            "end": 29
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
              "start": 34,
              "end": 35
            },
            "typeArguments": null,
            "start": 34,
            "end": 35
          },
          "start": 31,
          "end": 35
        },
        "start": 20,
        "end": 35
      },
      "declare": false,
      "start": 0,
      "end": 36
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Effect",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 54
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
              "start": 59,
              "end": 60
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": true,
            "const": false,
            "start": 55,
            "end": 60
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 66,
              "end": 67
            },
            "constraint": null,
            "default": {
              "type": "TSNeverKeyword",
              "start": 70,
              "end": 75
            },
            "in": false,
            "out": true,
            "const": false,
            "start": 62,
            "end": 75
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 81,
              "end": 82
            },
            "constraint": null,
            "default": {
              "type": "TSNeverKeyword",
              "start": 85,
              "end": 90
            },
            "in": false,
            "out": true,
            "const": false,
            "start": 77,
            "end": 90
          }
        ],
        "start": 54,
        "end": 91
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
              "name": "_A",
              "optional": false,
              "typeAnnotation": null,
              "start": 105,
              "end": 107
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
                  "start": 109,
                  "end": 118
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
                        "start": 119,
                        "end": 120
                      },
                      "typeArguments": null,
                      "start": 119,
                      "end": 120
                    }
                  ],
                  "start": 118,
                  "end": 121
                },
                "start": 109,
                "end": 121
              },
              "start": 107,
              "end": 121
            },
            "accessibility": null,
            "static": false,
            "start": 96,
            "end": 122
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
              "start": 134,
              "end": 136
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
                  "start": 138,
                  "end": 147
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
                        "start": 148,
                        "end": 149
                      },
                      "typeArguments": null,
                      "start": 148,
                      "end": 149
                    }
                  ],
                  "start": 147,
                  "end": 150
                },
                "start": 138,
                "end": 150
              },
              "start": 136,
              "end": 150
            },
            "accessibility": null,
            "static": false,
            "start": 125,
            "end": 151
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
              "start": 163,
              "end": 165
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
                  "start": 167,
                  "end": 176
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
                        "start": 177,
                        "end": 178
                      },
                      "typeArguments": null,
                      "start": 177,
                      "end": 178
                    }
                  ],
                  "start": 176,
                  "end": 179
                },
                "start": 167,
                "end": 179
              },
              "start": 165,
              "end": 179
            },
            "accessibility": null,
            "static": false,
            "start": 154,
            "end": 180
          }
        ],
        "start": 92,
        "end": 182
      },
      "declare": false,
      "start": 38,
      "end": 182
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "effectGen",
        "optional": false,
        "typeAnnotation": null,
        "start": 201,
        "end": 210
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
              "name": "Eff",
              "optional": false,
              "typeAnnotation": null,
              "start": 211,
              "end": 214
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Effect",
                "optional": false,
                "typeAnnotation": null,
                "start": 223,
                "end": 229
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 230,
                    "end": 233
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 235,
                    "end": 238
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 240,
                    "end": 243
                  }
                ],
                "start": 229,
                "end": 244
              },
              "start": 223,
              "end": 244
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 211,
            "end": 244
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "AEff",
              "optional": false,
              "typeAnnotation": null,
              "start": 246,
              "end": 250
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 246,
            "end": 250
          }
        ],
        "start": 210,
        "end": 251
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
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
                    "name": "Generator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 264,
                    "end": 273
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Eff",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 274,
                          "end": 277
                        },
                        "typeArguments": null,
                        "start": 274,
                        "end": 277
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "AEff",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 279,
                          "end": 283
                        },
                        "typeArguments": null,
                        "start": 279,
                        "end": 283
                      },
                      {
                        "type": "TSNeverKeyword",
                        "start": 285,
                        "end": 290
                      }
                    ],
                    "start": 273,
                    "end": 291
                  },
                  "start": 264,
                  "end": 291
                },
                "start": 261,
                "end": 291
              },
              "start": 258,
              "end": 291
            },
            "start": 256,
            "end": 291
          },
          "start": 255,
          "end": 291
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
            "start": 296,
            "end": 302
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AEff",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 306,
                  "end": 310
                },
                "typeArguments": null,
                "start": 306,
                "end": 310
              },
              {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Eff",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 315,
                        "end": 318
                      },
                      "typeArguments": null,
                      "start": 315,
                      "end": 318
                    }
                  ],
                  "start": 314,
                  "end": 319
                },
                "extendsType": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Effect",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 329,
                        "end": 335
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
                                "name": "_A",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 342,
                                "end": 344
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 342,
                              "end": 344
                            },
                            "start": 336,
                            "end": 344
                          },
                          {
                            "type": "TSInferType",
                            "typeParameter": {
                              "type": "TSTypeParameter",
                              "name": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "E",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 352,
                                "end": 353
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 352,
                              "end": 353
                            },
                            "start": 346,
                            "end": 353
                          },
                          {
                            "type": "TSInferType",
                            "typeParameter": {
                              "type": "TSTypeParameter",
                              "name": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "_R",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 361,
                                "end": 363
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 361,
                              "end": 363
                            },
                            "start": 355,
                            "end": 363
                          }
                        ],
                        "start": 335,
                        "end": 364
                      },
                      "start": 329,
                      "end": 364
                    }
                  ],
                  "start": 328,
                  "end": 365
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 368,
                    "end": 369
                  },
                  "typeArguments": null,
                  "start": 368,
                  "end": 369
                },
                "falseType": {
                  "type": "TSNeverKeyword",
                  "start": 372,
                  "end": 377
                },
                "start": 314,
                "end": 377
              },
              {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Eff",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 382,
                        "end": 385
                      },
                      "typeArguments": null,
                      "start": 382,
                      "end": 385
                    }
                  ],
                  "start": 381,
                  "end": 386
                },
                "extendsType": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Effect",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 396,
                        "end": 402
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
                                "name": "_A",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 409,
                                "end": 411
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 409,
                              "end": 411
                            },
                            "start": 403,
                            "end": 411
                          },
                          {
                            "type": "TSInferType",
                            "typeParameter": {
                              "type": "TSTypeParameter",
                              "name": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "_E",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 419,
                                "end": 421
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 419,
                              "end": 421
                            },
                            "start": 413,
                            "end": 421
                          },
                          {
                            "type": "TSInferType",
                            "typeParameter": {
                              "type": "TSTypeParameter",
                              "name": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "R",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 429,
                                "end": 430
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 429,
                              "end": 430
                            },
                            "start": 423,
                            "end": 430
                          }
                        ],
                        "start": 402,
                        "end": 431
                      },
                      "start": 396,
                      "end": 431
                    }
                  ],
                  "start": 395,
                  "end": 432
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 435,
                    "end": 436
                  },
                  "typeArguments": null,
                  "start": 435,
                  "end": 436
                },
                "falseType": {
                  "type": "TSNeverKeyword",
                  "start": 439,
                  "end": 444
                },
                "start": 381,
                "end": 444
              }
            ],
            "start": 302,
            "end": 446
          },
          "start": 296,
          "end": 446
        },
        "start": 294,
        "end": 446
      },
      "body": null,
      "expression": false,
      "start": 184,
      "end": 447
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "effectFn",
        "optional": false,
        "typeAnnotation": null,
        "start": 466,
        "end": 474
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
              "name": "Eff",
              "optional": false,
              "typeAnnotation": null,
              "start": 478,
              "end": 481
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Effect",
                "optional": false,
                "typeAnnotation": null,
                "start": 490,
                "end": 496
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 497,
                    "end": 500
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 502,
                    "end": 505
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 507,
                    "end": 510
                  }
                ],
                "start": 496,
                "end": 511
              },
              "start": 490,
              "end": 511
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 478,
            "end": 511
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "AEff",
              "optional": false,
              "typeAnnotation": null,
              "start": 515,
              "end": 519
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 515,
            "end": 519
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Args",
              "optional": false,
              "typeAnnotation": null,
              "start": 523,
              "end": 527
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 536,
                "end": 541
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 542,
                    "end": 545
                  }
                ],
                "start": 541,
                "end": 546
              },
              "start": 536,
              "end": 546
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 523,
            "end": 546
          }
        ],
        "start": 474,
        "end": 549
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "body",
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
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 563,
                    "end": 567
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
                        "start": 569,
                        "end": 573
                      },
                      "typeArguments": null,
                      "start": 569,
                      "end": 573
                    },
                    "start": 567,
                    "end": 573
                  },
                  "value": null,
                  "start": 560,
                  "end": 573
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Generator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 578,
                    "end": 587
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Eff",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 588,
                          "end": 591
                        },
                        "typeArguments": null,
                        "start": 588,
                        "end": 591
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "AEff",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 593,
                          "end": 597
                        },
                        "typeArguments": null,
                        "start": 593,
                        "end": 597
                      },
                      {
                        "type": "TSNeverKeyword",
                        "start": 599,
                        "end": 604
                      }
                    ],
                    "start": 587,
                    "end": 605
                  },
                  "start": 578,
                  "end": 605
                },
                "start": 575,
                "end": 605
              },
              "start": 559,
              "end": 605
            },
            "start": 557,
            "end": 605
          },
          "start": 553,
          "end": 605
        }
      ],
      "returnType": {
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
                "name": "args",
                "optional": false,
                "typeAnnotation": null,
                "start": 617,
                "end": 621
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
                    "start": 623,
                    "end": 627
                  },
                  "typeArguments": null,
                  "start": 623,
                  "end": 627
                },
                "start": 621,
                "end": 627
              },
              "value": null,
              "start": 614,
              "end": 627
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
                "start": 633,
                "end": 639
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AEff",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 643,
                      "end": 647
                    },
                    "typeArguments": null,
                    "start": 643,
                    "end": 647
                  },
                  {
                    "type": "TSConditionalType",
                    "checkType": {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Eff",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 652,
                            "end": 655
                          },
                          "typeArguments": null,
                          "start": 652,
                          "end": 655
                        }
                      ],
                      "start": 651,
                      "end": 656
                    },
                    "extendsType": {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Effect",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 666,
                            "end": 672
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
                                    "name": "_A",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 679,
                                    "end": 681
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 679,
                                  "end": 681
                                },
                                "start": 673,
                                "end": 681
                              },
                              {
                                "type": "TSInferType",
                                "typeParameter": {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "E",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 689,
                                    "end": 690
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 689,
                                  "end": 690
                                },
                                "start": 683,
                                "end": 690
                              },
                              {
                                "type": "TSInferType",
                                "typeParameter": {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "_R",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 698,
                                    "end": 700
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 698,
                                  "end": 700
                                },
                                "start": 692,
                                "end": 700
                              }
                            ],
                            "start": 672,
                            "end": 701
                          },
                          "start": 666,
                          "end": 701
                        }
                      ],
                      "start": 665,
                      "end": 702
                    },
                    "trueType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 705,
                        "end": 706
                      },
                      "typeArguments": null,
                      "start": 705,
                      "end": 706
                    },
                    "falseType": {
                      "type": "TSNeverKeyword",
                      "start": 709,
                      "end": 714
                    },
                    "start": 651,
                    "end": 714
                  },
                  {
                    "type": "TSConditionalType",
                    "checkType": {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Eff",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 719,
                            "end": 722
                          },
                          "typeArguments": null,
                          "start": 719,
                          "end": 722
                        }
                      ],
                      "start": 718,
                      "end": 723
                    },
                    "extendsType": {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Effect",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 733,
                            "end": 739
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
                                    "name": "_A",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 746,
                                    "end": 748
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 746,
                                  "end": 748
                                },
                                "start": 740,
                                "end": 748
                              },
                              {
                                "type": "TSInferType",
                                "typeParameter": {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "_E",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 756,
                                    "end": 758
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 756,
                                  "end": 758
                                },
                                "start": 750,
                                "end": 758
                              },
                              {
                                "type": "TSInferType",
                                "typeParameter": {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "R",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 766,
                                    "end": 767
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 766,
                                  "end": 767
                                },
                                "start": 760,
                                "end": 767
                              }
                            ],
                            "start": 739,
                            "end": 768
                          },
                          "start": 733,
                          "end": 768
                        }
                      ],
                      "start": 732,
                      "end": 769
                    },
                    "trueType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 772,
                        "end": 773
                      },
                      "typeArguments": null,
                      "start": 772,
                      "end": 773
                    },
                    "falseType": {
                      "type": "TSNeverKeyword",
                      "start": 776,
                      "end": 781
                    },
                    "start": 718,
                    "end": 781
                  }
                ],
                "start": 639,
                "end": 783
              },
              "start": 633,
              "end": 783
            },
            "start": 630,
            "end": 783
          },
          "start": 610,
          "end": 783
        },
        "start": 608,
        "end": 783
      },
      "body": null,
      "expression": false,
      "start": 449,
      "end": 784
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tag",
        "optional": false,
        "typeAnnotation": null,
        "start": 796,
        "end": 799
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Id",
              "optional": false,
              "typeAnnotation": null,
              "start": 807,
              "end": 809
            },
            "constraint": null,
            "default": null,
            "in": true,
            "out": true,
            "const": false,
            "start": 800,
            "end": 809
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 818,
              "end": 823
            },
            "constraint": null,
            "default": null,
            "in": true,
            "out": true,
            "const": false,
            "start": 811,
            "end": 823
          }
        ],
        "start": 799,
        "end": 824
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
              "name": "_op",
              "optional": false,
              "typeAnnotation": null,
              "start": 838,
              "end": 841
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "Tag",
                  "raw": "\"Tag\"",
                  "start": 843,
                  "end": 848
                },
                "start": 843,
                "end": 848
              },
              "start": 841,
              "end": 848
            },
            "accessibility": null,
            "static": false,
            "start": 829,
            "end": 849
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Service",
              "optional": false,
              "typeAnnotation": null,
              "start": 861,
              "end": 868
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 870,
                  "end": 875
                },
                "typeArguments": null,
                "start": 870,
                "end": 875
              },
              "start": 868,
              "end": 875
            },
            "accessibility": null,
            "static": false,
            "start": 852,
            "end": 876
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Identifier",
              "optional": false,
              "typeAnnotation": null,
              "start": 888,
              "end": 898
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Id",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 900,
                  "end": 902
                },
                "typeArguments": null,
                "start": 900,
                "end": 902
              },
              "start": 898,
              "end": 902
            },
            "accessibility": null,
            "static": false,
            "start": 879,
            "end": 903
          }
        ],
        "start": 825,
        "end": 905
      },
      "declare": false,
      "start": 786,
      "end": 905
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TagClassShape",
        "optional": false,
        "typeAnnotation": null,
        "start": 917,
        "end": 930
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Id",
              "optional": false,
              "typeAnnotation": null,
              "start": 931,
              "end": 933
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 931,
            "end": 933
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Shape",
              "optional": false,
              "typeAnnotation": null,
              "start": 935,
              "end": 940
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 935,
            "end": 940
          }
        ],
        "start": 930,
        "end": 941
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
              "name": "Type",
              "optional": false,
              "typeAnnotation": null,
              "start": 955,
              "end": 959
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Shape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 961,
                  "end": 966
                },
                "typeArguments": null,
                "start": 961,
                "end": 966
              },
              "start": 959,
              "end": 966
            },
            "accessibility": null,
            "static": false,
            "start": 946,
            "end": 967
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Id",
              "optional": false,
              "typeAnnotation": null,
              "start": 979,
              "end": 981
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Id",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 983,
                  "end": 985
                },
                "typeArguments": null,
                "start": 983,
                "end": 985
              },
              "start": 981,
              "end": 985
            },
            "accessibility": null,
            "static": false,
            "start": 970,
            "end": 986
          }
        ],
        "start": 942,
        "end": 988
      },
      "declare": false,
      "start": 907,
      "end": 988
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TagClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 1000,
        "end": 1008
      },
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
              "start": 1009,
              "end": 1013
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1009,
            "end": 1013
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Id",
              "optional": false,
              "typeAnnotation": null,
              "start": 1015,
              "end": 1017
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1026,
              "end": 1032
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1015,
            "end": 1032
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Type",
              "optional": false,
              "typeAnnotation": null,
              "start": 1034,
              "end": 1038
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1034,
            "end": 1038
          }
        ],
        "start": 1008,
        "end": 1039
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Tag",
            "optional": false,
            "typeAnnotation": null,
            "start": 1048,
            "end": 1051
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
                  "start": 1052,
                  "end": 1056
                },
                "typeArguments": null,
                "start": 1052,
                "end": 1056
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1058,
                  "end": 1062
                },
                "typeArguments": null,
                "start": 1058,
                "end": 1062
              }
            ],
            "start": 1051,
            "end": 1063
          },
          "start": 1048,
          "end": 1063
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 1076,
                    "end": 1081
                  },
                  "start": 1074,
                  "end": 1081
                },
                "start": 1073,
                "end": 1081
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TagClassShape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1084,
                  "end": 1097
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Id",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1098,
                        "end": 1100
                      },
                      "typeArguments": null,
                      "start": 1098,
                      "end": 1100
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1102,
                        "end": 1106
                      },
                      "typeArguments": null,
                      "start": 1102,
                      "end": 1106
                    }
                  ],
                  "start": 1097,
                  "end": 1107
                },
                "start": 1084,
                "end": 1107
              },
              "start": 1082,
              "end": 1107
            },
            "start": 1068,
            "end": 1108
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "key",
              "optional": false,
              "typeAnnotation": null,
              "start": 1120,
              "end": 1123
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Id",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1125,
                  "end": 1127
                },
                "typeArguments": null,
                "start": 1125,
                "end": 1127
              },
              "start": 1123,
              "end": 1127
            },
            "accessibility": null,
            "static": false,
            "start": 1111,
            "end": 1128
          }
        ],
        "start": 1064,
        "end": 1130
      },
      "declare": false,
      "start": 990,
      "end": 1130
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "layerEffect",
        "optional": false,
        "typeAnnotation": null,
        "start": 1149,
        "end": 1160
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
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 1161,
              "end": 1162
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1161,
            "end": 1162
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 1164,
              "end": 1165
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1164,
            "end": 1165
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 1167,
              "end": 1168
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1167,
            "end": 1168
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 1170,
              "end": 1171
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1170,
            "end": 1171
          }
        ],
        "start": 1160,
        "end": 1172
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
                "start": 1181,
                "end": 1184
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
                      "start": 1185,
                      "end": 1186
                    },
                    "typeArguments": null,
                    "start": 1185,
                    "end": 1186
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1188,
                      "end": 1189
                    },
                    "typeArguments": null,
                    "start": 1188,
                    "end": 1189
                  }
                ],
                "start": 1184,
                "end": 1190
              },
              "start": 1181,
              "end": 1190
            },
            "start": 1179,
            "end": 1190
          },
          "start": 1176,
          "end": 1190
        },
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
                "start": 1202,
                "end": 1208
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1209,
                      "end": 1210
                    },
                    "typeArguments": null,
                    "start": 1209,
                    "end": 1210
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1212,
                      "end": 1213
                    },
                    "typeArguments": null,
                    "start": 1212,
                    "end": 1213
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1215,
                      "end": 1216
                    },
                    "typeArguments": null,
                    "start": 1215,
                    "end": 1216
                  }
                ],
                "start": 1208,
                "end": 1217
              },
              "start": 1202,
              "end": 1217
            },
            "start": 1200,
            "end": 1217
          },
          "start": 1194,
          "end": 1217
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "start": 1222,
          "end": 1229
        },
        "start": 1220,
        "end": 1229
      },
      "body": null,
      "expression": false,
      "start": 1132,
      "end": 1230
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tag",
        "optional": false,
        "typeAnnotation": null,
        "start": 1249,
        "end": 1252
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
              "name": "Id",
              "optional": false,
              "typeAnnotation": null,
              "start": 1259,
              "end": 1261
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1270,
              "end": 1276
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 1253,
            "end": 1276
          }
        ],
        "start": 1252,
        "end": 1277
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "id",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Id",
                "optional": false,
                "typeAnnotation": null,
                "start": 1285,
                "end": 1287
              },
              "typeArguments": null,
              "start": 1285,
              "end": 1287
            },
            "start": 1283,
            "end": 1287
          },
          "start": 1281,
          "end": 1287
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
                  "name": "Self",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1293,
                  "end": 1297
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 1293,
                "end": 1297
              },
              {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Shape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1299,
                  "end": 1304
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 1299,
                "end": 1304
              }
            ],
            "start": 1292,
            "end": 1305
          },
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TagClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 1311,
                "end": 1319
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
                      "start": 1320,
                      "end": 1324
                    },
                    "typeArguments": null,
                    "start": 1320,
                    "end": 1324
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1326,
                      "end": 1328
                    },
                    "typeArguments": null,
                    "start": 1326,
                    "end": 1328
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Shape",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1330,
                      "end": 1335
                    },
                    "typeArguments": null,
                    "start": 1330,
                    "end": 1335
                  }
                ],
                "start": 1319,
                "end": 1336
              },
              "start": 1311,
              "end": 1336
            },
            "start": 1308,
            "end": 1336
          },
          "start": 1292,
          "end": 1336
        },
        "start": 1290,
        "end": 1336
      },
      "body": null,
      "expression": false,
      "start": 1232,
      "end": 1337
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1345,
        "end": 1348
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "Tag",
            "optional": false,
            "typeAnnotation": null,
            "start": 1357,
            "end": 1360
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "Foo",
              "raw": "\"Foo\"",
              "start": 1361,
              "end": 1366
            }
          ],
          "optional": false,
          "start": 1357,
          "end": 1367
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
                "start": 1371,
                "end": 1374
              },
              "typeArguments": null,
              "start": 1371,
              "end": 1374
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
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1384,
                    "end": 1386
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1392,
                              "end": 1398
                            },
                            "start": 1390,
                            "end": 1398
                          },
                          "start": 1389,
                          "end": 1398
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
                            "start": 1403,
                            "end": 1409
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSVoidKeyword",
                                "start": 1410,
                                "end": 1414
                              }
                            ],
                            "start": 1409,
                            "end": 1415
                          },
                          "start": 1403,
                          "end": 1415
                        },
                        "start": 1400,
                        "end": 1415
                      },
                      "start": 1388,
                      "end": 1415
                    },
                    "start": 1386,
                    "end": 1415
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1384,
                  "end": 1416
                }
              ],
              "start": 1378,
              "end": 1420
            }
          ],
          "start": 1367,
          "end": 1422
        },
        "arguments": [],
        "optional": false,
        "start": 1357,
        "end": 1424
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 1425,
        "end": 1427
      },
      "abstract": false,
      "declare": false,
      "start": 1339,
      "end": 1427
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "layerEffect",
          "optional": false,
          "typeAnnotation": null,
          "start": 1429,
          "end": 1440
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1444,
            "end": 1447
          },
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "effectGen",
              "optional": false,
              "typeAnnotation": null,
              "start": 1451,
              "end": 1460
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "FunctionExpression",
                "id": null,
                "generator": true,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                              "name": "fn",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1495,
                              "end": 1497
                            },
                            "value": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "effectFn",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1499,
                                "end": 1507
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "FunctionExpression",
                                  "id": null,
                                  "generator": true,
                                  "async": false,
                                  "declare": false,
                                  "typeParameters": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "a",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1519,
                                      "end": 1520
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "BlockStatement",
                                    "body": [
                                      {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "a",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1532,
                                          "end": 1533
                                        },
                                        "directive": null,
                                        "start": 1532,
                                        "end": 1534
                                      }
                                    ],
                                    "start": 1522,
                                    "end": 1552
                                  },
                                  "expression": false,
                                  "start": 1508,
                                  "end": 1552
                                }
                              ],
                              "optional": false,
                              "start": 1499,
                              "end": 1553
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1495,
                            "end": 1553
                          }
                        ],
                        "start": 1487,
                        "end": 1560
                      },
                      "start": 1480,
                      "end": 1561
                    }
                  ],
                  "start": 1474,
                  "end": 1565
                },
                "expression": false,
                "start": 1461,
                "end": 1565
              }
            ],
            "optional": false,
            "start": 1451,
            "end": 1566
          }
        ],
        "optional": false,
        "start": 1429,
        "end": 1569
      },
      "directive": null,
      "start": 1429,
      "end": 1570
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1570
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "Covariant",
    "start": 5,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 24,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 31,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 35,
    "end": 36
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 38,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "Effect",
    "start": 48,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 55,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 62,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 70,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 77,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 85,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 96,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "_A",
    "start": 105,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "Covariant",
    "start": 109,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 125,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "_E",
    "start": 134,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "Covariant",
    "start": 138,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 154,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "_R",
    "start": 163,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "Covariant",
    "start": 167,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Identifier",
    "value": "declare",
    "start": 184,
    "end": 191
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 192,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "effectGen",
    "start": 201,
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
    "value": "Eff",
    "start": 211,
    "end": 214
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 215,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "Effect",
    "start": 223,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 230,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 235,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 240,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "AEff",
    "start": 246,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 261,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "Generator",
    "start": 264,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "Eff",
    "start": 274,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "AEff",
    "start": 279,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 285,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "Effect",
    "start": 296,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "AEff",
    "start": 306,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "Eff",
    "start": 315,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 318,
    "end": 319
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 320,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "Effect",
    "start": 329,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 336,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "_A",
    "start": 342,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 346,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 355,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "_R",
    "start": 361,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 372,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "Eff",
    "start": 382,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": "[",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "Effect",
    "start": 396,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 403,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "_A",
    "start": 409,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 413,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "_E",
    "start": 419,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 423,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "R",
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
    "value": "]",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 439,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 449,
    "end": 456
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 457,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "effectFn",
    "start": 466,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "Eff",
    "start": 478,
    "end": 481
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 482,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "Effect",
    "start": 490,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 497,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 500,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 502,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 507,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "AEff",
    "start": 515,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "Args",
    "start": 523,
    "end": 527
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 528,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 536,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 541,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 542,
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
    "value": ",",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "body",
    "start": 553,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 560,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 563,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "Args",
    "start": 569,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 575,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "Generator",
    "start": 578,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "Eff",
    "start": 588,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "AEff",
    "start": 593,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 599,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 614,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 617,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 621,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "Args",
    "start": 623,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 630,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "Effect",
    "start": 633,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 639,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "AEff",
    "start": 643,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 651,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "Eff",
    "start": 652,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 655,
    "end": 656
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 657,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 665,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "Effect",
    "start": 666,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 672,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 673,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "_A",
    "start": 679,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 683,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 690,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 692,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "_R",
    "start": 698,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "?",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 707,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 709,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 718,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "Eff",
    "start": 719,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 722,
    "end": 723
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 724,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 732,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "Effect",
    "start": 733,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 739,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 740,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "_A",
    "start": 746,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 750,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "_E",
    "start": 756,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 758,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 760,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "?",
    "start": 770,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 774,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 776,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 783,
    "end": 784
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 786,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "Tag",
    "start": 796,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 799,
    "end": 800
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 800,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 803,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "Id",
    "start": 807,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 809,
    "end": 810
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 811,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 814,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 818,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 823,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 825,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 829,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "_op",
    "start": 838,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 841,
    "end": 842
  },
  {
    "type": "String",
    "value": "\"Tag\"",
    "start": 843,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 848,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 852,
    "end": 860
  },
  {
    "type": "Identifier",
    "value": "Service",
    "start": 861,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 868,
    "end": 869
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 870,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 875,
    "end": 876
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 879,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "Identifier",
    "start": 888,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 898,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "Id",
    "start": 900,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 904,
    "end": 905
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 907,
    "end": 916
  },
  {
    "type": "Identifier",
    "value": "TagClassShape",
    "start": 917,
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
    "value": "Id",
    "start": 931,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 933,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 935,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 942,
    "end": 943
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 946,
    "end": 954
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 955,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 959,
    "end": 960
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 961,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 966,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 970,
    "end": 978
  },
  {
    "type": "Identifier",
    "value": "Id",
    "start": 979,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 981,
    "end": 982
  },
  {
    "type": "Identifier",
    "value": "Id",
    "start": 983,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 985,
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
    "value": "TagClass",
    "start": 1000,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Identifier",
    "value": "Self",
    "start": 1009,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Identifier",
    "value": "Id",
    "start": 1015,
    "end": 1017
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1018,
    "end": 1025
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1026,
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
    "value": "Type",
    "start": 1034,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1040,
    "end": 1047
  },
  {
    "type": "Identifier",
    "value": "Tag",
    "start": 1048,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Identifier",
    "value": "Self",
    "start": 1052,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 1058,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1068,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1076,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Identifier",
    "value": "TagClassShape",
    "start": 1084,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "Id",
    "start": 1098,
    "end": 1100
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 1102,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1111,
    "end": 1119
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1120,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Identifier",
    "value": "Id",
    "start": 1125,
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
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1132,
    "end": 1139
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1140,
    "end": 1148
  },
  {
    "type": "Identifier",
    "value": "layerEffect",
    "start": 1149,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 1176,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Identifier",
    "value": "Tag",
    "start": 1181,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Identifier",
    "value": "effect",
    "start": 1194,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Identifier",
    "value": "Effect",
    "start": 1202,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1222,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1232,
    "end": 1239
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1240,
    "end": 1248
  },
  {
    "type": "Identifier",
    "value": "Tag",
    "start": 1249,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1253,
    "end": 1258
  },
  {
    "type": "Identifier",
    "value": "Id",
    "start": 1259,
    "end": 1261
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1262,
    "end": 1269
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1270,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 1281,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Identifier",
    "value": "Id",
    "start": 1285,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Identifier",
    "value": "Self",
    "start": 1293,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 1299,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1308,
    "end": 1310
  },
  {
    "type": "Identifier",
    "value": "TagClass",
    "start": 1311,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Identifier",
    "value": "Self",
    "start": 1320,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Identifier",
    "value": "Id",
    "start": 1326,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 1330,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1339,
    "end": 1344
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1345,
    "end": 1348
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1349,
    "end": 1356
  },
  {
    "type": "Identifier",
    "value": "Tag",
    "start": 1357,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "String",
    "value": "\"Foo\"",
    "start": 1361,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1371,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 1384,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1392,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1400,
    "end": 1402
  },
  {
    "type": "Identifier",
    "value": "Effect",
    "start": 1403,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1410,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Identifier",
    "value": "layerEffect",
    "start": 1429,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1444,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Identifier",
    "value": "effectGen",
    "start": 1451,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1461,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1469,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1480,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 1495,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Identifier",
    "value": "effectFn",
    "start": 1499,
    "end": 1507
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1508,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1565,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1569,
    "end": 1570
  }
]
```
