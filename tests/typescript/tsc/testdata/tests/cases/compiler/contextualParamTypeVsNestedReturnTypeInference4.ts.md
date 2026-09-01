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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 211,
              "end": 212
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 211,
            "end": 212
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 214,
              "end": 215
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 214,
            "end": 215
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 217,
              "end": 218
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 217,
            "end": 218
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "AEff",
              "optional": false,
              "typeAnnotation": null,
              "start": 220,
              "end": 224
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 220,
            "end": 224
          }
        ],
        "start": 210,
        "end": 225
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
                    "start": 238,
                    "end": 247
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Effect",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 248,
                          "end": 254
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
                                "start": 255,
                                "end": 256
                              },
                              "typeArguments": null,
                              "start": 255,
                              "end": 256
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "E",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 258,
                                "end": 259
                              },
                              "typeArguments": null,
                              "start": 258,
                              "end": 259
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "R",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 261,
                                "end": 262
                              },
                              "typeArguments": null,
                              "start": 261,
                              "end": 262
                            }
                          ],
                          "start": 254,
                          "end": 263
                        },
                        "start": 248,
                        "end": 263
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "AEff",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 265,
                          "end": 269
                        },
                        "typeArguments": null,
                        "start": 265,
                        "end": 269
                      },
                      {
                        "type": "TSNeverKeyword",
                        "start": 271,
                        "end": 276
                      }
                    ],
                    "start": 247,
                    "end": 277
                  },
                  "start": 238,
                  "end": 277
                },
                "start": 235,
                "end": 277
              },
              "start": 232,
              "end": 277
            },
            "start": 230,
            "end": 277
          },
          "start": 229,
          "end": 277
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
            "start": 282,
            "end": 288
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
                  "start": 289,
                  "end": 293
                },
                "typeArguments": null,
                "start": 289,
                "end": 293
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 295,
                  "end": 296
                },
                "typeArguments": null,
                "start": 295,
                "end": 296
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 298,
                  "end": 299
                },
                "typeArguments": null,
                "start": 298,
                "end": 299
              }
            ],
            "start": 288,
            "end": 300
          },
          "start": 282,
          "end": 300
        },
        "start": 280,
        "end": 300
      },
      "body": null,
      "expression": false,
      "start": 184,
      "end": 301
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "effectFn",
        "optional": false,
        "typeAnnotation": null,
        "start": 320,
        "end": 328
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 329,
              "end": 330
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 329,
            "end": 330
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 332,
              "end": 333
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 332,
            "end": 333
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 335,
              "end": 336
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 335,
            "end": 336
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "AEff",
              "optional": false,
              "typeAnnotation": null,
              "start": 338,
              "end": 342
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 338,
            "end": 342
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Args",
              "optional": false,
              "typeAnnotation": null,
              "start": 344,
              "end": 348
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 357,
                "end": 362
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 363,
                    "end": 366
                  }
                ],
                "start": 362,
                "end": 367
              },
              "start": 357,
              "end": 367
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 344,
            "end": 367
          }
        ],
        "start": 328,
        "end": 368
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
                    "start": 382,
                    "end": 386
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
                        "start": 388,
                        "end": 392
                      },
                      "typeArguments": null,
                      "start": 388,
                      "end": 392
                    },
                    "start": 386,
                    "end": 392
                  },
                  "value": null,
                  "start": 379,
                  "end": 392
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
                    "start": 397,
                    "end": 406
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Effect",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 407,
                          "end": 413
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
                                "start": 414,
                                "end": 415
                              },
                              "typeArguments": null,
                              "start": 414,
                              "end": 415
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "E",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 417,
                                "end": 418
                              },
                              "typeArguments": null,
                              "start": 417,
                              "end": 418
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "R",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 420,
                                "end": 421
                              },
                              "typeArguments": null,
                              "start": 420,
                              "end": 421
                            }
                          ],
                          "start": 413,
                          "end": 422
                        },
                        "start": 407,
                        "end": 422
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "AEff",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 424,
                          "end": 428
                        },
                        "typeArguments": null,
                        "start": 424,
                        "end": 428
                      },
                      {
                        "type": "TSNeverKeyword",
                        "start": 430,
                        "end": 435
                      }
                    ],
                    "start": 406,
                    "end": 436
                  },
                  "start": 397,
                  "end": 436
                },
                "start": 394,
                "end": 436
              },
              "start": 378,
              "end": 436
            },
            "start": 376,
            "end": 436
          },
          "start": 372,
          "end": 436
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
                "start": 445,
                "end": 449
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
                    "start": 451,
                    "end": 455
                  },
                  "typeArguments": null,
                  "start": 451,
                  "end": 455
                },
                "start": 449,
                "end": 455
              },
              "value": null,
              "start": 442,
              "end": 455
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
                "start": 460,
                "end": 466
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
                      "start": 467,
                      "end": 471
                    },
                    "typeArguments": null,
                    "start": 467,
                    "end": 471
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 473,
                      "end": 474
                    },
                    "typeArguments": null,
                    "start": 473,
                    "end": 474
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 476,
                      "end": 477
                    },
                    "typeArguments": null,
                    "start": 476,
                    "end": 477
                  }
                ],
                "start": 466,
                "end": 478
              },
              "start": 460,
              "end": 478
            },
            "start": 457,
            "end": 478
          },
          "start": 441,
          "end": 478
        },
        "start": 439,
        "end": 478
      },
      "body": null,
      "expression": false,
      "start": 303,
      "end": 479
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tag",
        "optional": false,
        "typeAnnotation": null,
        "start": 491,
        "end": 494
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
              "start": 502,
              "end": 504
            },
            "constraint": null,
            "default": null,
            "in": true,
            "out": true,
            "const": false,
            "start": 495,
            "end": 504
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 513,
              "end": 518
            },
            "constraint": null,
            "default": null,
            "in": true,
            "out": true,
            "const": false,
            "start": 506,
            "end": 518
          }
        ],
        "start": 494,
        "end": 519
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
              "start": 533,
              "end": 536
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "Tag",
                  "raw": "\"Tag\"",
                  "start": 538,
                  "end": 543
                },
                "start": 538,
                "end": 543
              },
              "start": 536,
              "end": 543
            },
            "accessibility": null,
            "static": false,
            "start": 524,
            "end": 544
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
              "start": 556,
              "end": 563
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
                  "start": 565,
                  "end": 570
                },
                "typeArguments": null,
                "start": 565,
                "end": 570
              },
              "start": 563,
              "end": 570
            },
            "accessibility": null,
            "static": false,
            "start": 547,
            "end": 571
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
              "start": 583,
              "end": 593
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
                  "start": 595,
                  "end": 597
                },
                "typeArguments": null,
                "start": 595,
                "end": 597
              },
              "start": 593,
              "end": 597
            },
            "accessibility": null,
            "static": false,
            "start": 574,
            "end": 598
          }
        ],
        "start": 520,
        "end": 600
      },
      "declare": false,
      "start": 481,
      "end": 600
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TagClassShape",
        "optional": false,
        "typeAnnotation": null,
        "start": 612,
        "end": 625
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
              "start": 626,
              "end": 628
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 626,
            "end": 628
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Shape",
              "optional": false,
              "typeAnnotation": null,
              "start": 630,
              "end": 635
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 630,
            "end": 635
          }
        ],
        "start": 625,
        "end": 636
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
              "start": 650,
              "end": 654
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
                  "start": 656,
                  "end": 661
                },
                "typeArguments": null,
                "start": 656,
                "end": 661
              },
              "start": 654,
              "end": 661
            },
            "accessibility": null,
            "static": false,
            "start": 641,
            "end": 662
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
              "start": 674,
              "end": 676
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
                  "start": 678,
                  "end": 680
                },
                "typeArguments": null,
                "start": 678,
                "end": 680
              },
              "start": 676,
              "end": 680
            },
            "accessibility": null,
            "static": false,
            "start": 665,
            "end": 681
          }
        ],
        "start": 637,
        "end": 683
      },
      "declare": false,
      "start": 602,
      "end": 683
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TagClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 695,
        "end": 703
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
              "start": 704,
              "end": 708
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 704,
            "end": 708
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Id",
              "optional": false,
              "typeAnnotation": null,
              "start": 710,
              "end": 712
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 721,
              "end": 727
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 710,
            "end": 727
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Type",
              "optional": false,
              "typeAnnotation": null,
              "start": 729,
              "end": 733
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 729,
            "end": 733
          }
        ],
        "start": 703,
        "end": 734
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
            "start": 743,
            "end": 746
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
                  "start": 747,
                  "end": 751
                },
                "typeArguments": null,
                "start": 747,
                "end": 751
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 753,
                  "end": 757
                },
                "typeArguments": null,
                "start": 753,
                "end": 757
              }
            ],
            "start": 746,
            "end": 758
          },
          "start": 743,
          "end": 758
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
                    "start": 771,
                    "end": 776
                  },
                  "start": 769,
                  "end": 776
                },
                "start": 768,
                "end": 776
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
                  "start": 779,
                  "end": 792
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
                        "start": 793,
                        "end": 795
                      },
                      "typeArguments": null,
                      "start": 793,
                      "end": 795
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 797,
                        "end": 801
                      },
                      "typeArguments": null,
                      "start": 797,
                      "end": 801
                    }
                  ],
                  "start": 792,
                  "end": 802
                },
                "start": 779,
                "end": 802
              },
              "start": 777,
              "end": 802
            },
            "start": 763,
            "end": 803
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
              "start": 815,
              "end": 818
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
                  "start": 820,
                  "end": 822
                },
                "typeArguments": null,
                "start": 820,
                "end": 822
              },
              "start": 818,
              "end": 822
            },
            "accessibility": null,
            "static": false,
            "start": 806,
            "end": 823
          }
        ],
        "start": 759,
        "end": 825
      },
      "declare": false,
      "start": 685,
      "end": 825
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "layerEffect",
        "optional": false,
        "typeAnnotation": null,
        "start": 844,
        "end": 855
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
              "start": 856,
              "end": 857
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 856,
            "end": 857
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 859,
              "end": 860
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 859,
            "end": 860
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 862,
              "end": 863
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 862,
            "end": 863
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 865,
              "end": 866
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 865,
            "end": 866
          }
        ],
        "start": 855,
        "end": 867
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
                "start": 876,
                "end": 879
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
                      "start": 880,
                      "end": 881
                    },
                    "typeArguments": null,
                    "start": 880,
                    "end": 881
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 883,
                      "end": 884
                    },
                    "typeArguments": null,
                    "start": 883,
                    "end": 884
                  }
                ],
                "start": 879,
                "end": 885
              },
              "start": 876,
              "end": 885
            },
            "start": 874,
            "end": 885
          },
          "start": 871,
          "end": 885
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
                "start": 897,
                "end": 903
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
                      "start": 904,
                      "end": 905
                    },
                    "typeArguments": null,
                    "start": 904,
                    "end": 905
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 907,
                      "end": 908
                    },
                    "typeArguments": null,
                    "start": 907,
                    "end": 908
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 910,
                      "end": 911
                    },
                    "typeArguments": null,
                    "start": 910,
                    "end": 911
                  }
                ],
                "start": 903,
                "end": 912
              },
              "start": 897,
              "end": 912
            },
            "start": 895,
            "end": 912
          },
          "start": 889,
          "end": 912
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "start": 917,
          "end": 924
        },
        "start": 915,
        "end": 924
      },
      "body": null,
      "expression": false,
      "start": 827,
      "end": 925
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tag",
        "optional": false,
        "typeAnnotation": null,
        "start": 944,
        "end": 947
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
              "start": 954,
              "end": 956
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 965,
              "end": 971
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 948,
            "end": 971
          }
        ],
        "start": 947,
        "end": 972
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
                "start": 980,
                "end": 982
              },
              "typeArguments": null,
              "start": 980,
              "end": 982
            },
            "start": 978,
            "end": 982
          },
          "start": 976,
          "end": 982
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
                  "start": 988,
                  "end": 992
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 988,
                "end": 992
              },
              {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Shape",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 994,
                  "end": 999
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 994,
                "end": 999
              }
            ],
            "start": 987,
            "end": 1000
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
                "start": 1006,
                "end": 1014
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
                      "start": 1015,
                      "end": 1019
                    },
                    "typeArguments": null,
                    "start": 1015,
                    "end": 1019
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1021,
                      "end": 1023
                    },
                    "typeArguments": null,
                    "start": 1021,
                    "end": 1023
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Shape",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1025,
                      "end": 1030
                    },
                    "typeArguments": null,
                    "start": 1025,
                    "end": 1030
                  }
                ],
                "start": 1014,
                "end": 1031
              },
              "start": 1006,
              "end": 1031
            },
            "start": 1003,
            "end": 1031
          },
          "start": 987,
          "end": 1031
        },
        "start": 985,
        "end": 1031
      },
      "body": null,
      "expression": false,
      "start": 927,
      "end": 1032
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
        "start": 1040,
        "end": 1043
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
            "start": 1052,
            "end": 1055
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "Foo",
              "raw": "\"Foo\"",
              "start": 1056,
              "end": 1061
            }
          ],
          "optional": false,
          "start": 1052,
          "end": 1062
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
                "start": 1066,
                "end": 1069
              },
              "typeArguments": null,
              "start": 1066,
              "end": 1069
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
                    "start": 1079,
                    "end": 1081
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
                              "start": 1087,
                              "end": 1093
                            },
                            "start": 1085,
                            "end": 1093
                          },
                          "start": 1084,
                          "end": 1093
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
                            "start": 1098,
                            "end": 1104
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSVoidKeyword",
                                "start": 1105,
                                "end": 1109
                              }
                            ],
                            "start": 1104,
                            "end": 1110
                          },
                          "start": 1098,
                          "end": 1110
                        },
                        "start": 1095,
                        "end": 1110
                      },
                      "start": 1083,
                      "end": 1110
                    },
                    "start": 1081,
                    "end": 1110
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1079,
                  "end": 1111
                }
              ],
              "start": 1073,
              "end": 1115
            }
          ],
          "start": 1062,
          "end": 1117
        },
        "arguments": [],
        "optional": false,
        "start": 1052,
        "end": 1119
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 1120,
        "end": 1122
      },
      "abstract": false,
      "declare": false,
      "start": 1034,
      "end": 1122
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
          "start": 1124,
          "end": 1135
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1139,
            "end": 1142
          },
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "effectGen",
              "optional": false,
              "typeAnnotation": null,
              "start": 1146,
              "end": 1155
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
                              "start": 1190,
                              "end": 1192
                            },
                            "value": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "effectFn",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1194,
                                "end": 1202
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
                                      "start": 1214,
                                      "end": 1215
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
                                          "start": 1227,
                                          "end": 1228
                                        },
                                        "directive": null,
                                        "start": 1227,
                                        "end": 1229
                                      }
                                    ],
                                    "start": 1217,
                                    "end": 1247
                                  },
                                  "expression": false,
                                  "start": 1203,
                                  "end": 1247
                                }
                              ],
                              "optional": false,
                              "start": 1194,
                              "end": 1248
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1190,
                            "end": 1248
                          }
                        ],
                        "start": 1182,
                        "end": 1255
                      },
                      "start": 1175,
                      "end": 1256
                    }
                  ],
                  "start": 1169,
                  "end": 1260
                },
                "expression": false,
                "start": 1156,
                "end": 1260
              }
            ],
            "optional": false,
            "start": 1146,
            "end": 1261
          }
        ],
        "optional": false,
        "start": 1124,
        "end": 1264
      },
      "directive": null,
      "start": 1124,
      "end": 1265
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1265
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
    "value": "A",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "AEff",
    "start": 220,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 232,
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
    "value": "Generator",
    "start": 238,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "Effect",
    "start": 248,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "R",
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
    "value": ",",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "AEff",
    "start": 265,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 271,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "Effect",
    "start": 282,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "AEff",
    "start": 289,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 303,
    "end": 310
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 311,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "effectFn",
    "start": 320,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "AEff",
    "start": 338,
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
    "value": "Args",
    "start": 344,
    "end": 348
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 349,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 357,
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
    "value": "any",
    "start": 363,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "body",
    "start": 372,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 379,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 382,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "Args",
    "start": 388,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 394,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "Generator",
    "start": 397,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "Effect",
    "start": 407,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "AEff",
    "start": 424,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 430,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 442,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 445,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "Args",
    "start": 451,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 457,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "Effect",
    "start": 460,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "AEff",
    "start": 467,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 478,
    "end": 479
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 481,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "Tag",
    "start": 491,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 494,
    "end": 495
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 495,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 498,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "Id",
    "start": 502,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 504,
    "end": 505
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 506,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 509,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 513,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 524,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "_op",
    "start": 533,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 536,
    "end": 537
  },
  {
    "type": "String",
    "value": "\"Tag\"",
    "start": 538,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 547,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "Service",
    "start": 556,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 565,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 574,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "Identifier",
    "start": 583,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 593,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "Id",
    "start": 595,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 599,
    "end": 600
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 602,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "TagClassShape",
    "start": 612,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "Id",
    "start": 626,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 628,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 630,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 637,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 641,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 650,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 656,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 661,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 665,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "Id",
    "start": 674,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 676,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "Id",
    "start": 678,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 682,
    "end": 683
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 685,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "TagClass",
    "start": 695,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "Self",
    "start": 704,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 708,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "Id",
    "start": 710,
    "end": 712
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 713,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 721,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 729,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 733,
    "end": 734
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 735,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "Tag",
    "start": 743,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "Self",
    "start": 747,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 751,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 753,
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
    "value": "{",
    "start": 759,
    "end": 760
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 763,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 767,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 769,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 771,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 777,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "TagClassShape",
    "start": 779,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 792,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "Id",
    "start": 793,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 795,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "Type",
    "start": 797,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 802,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 806,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 815,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 818,
    "end": 819
  },
  {
    "type": "Identifier",
    "value": "Id",
    "start": 820,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 824,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 827,
    "end": 834
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 835,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "layerEffect",
    "start": 844,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 855,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 857,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 860,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 863,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 866,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 867,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 871,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 874,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "Tag",
    "start": 876,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 879,
    "end": 880
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 881,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 884,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 885,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "effect",
    "start": 889,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 895,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "Effect",
    "start": 897,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 903,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 904,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 905,
    "end": 906
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 908,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 910,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 911,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 914,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 915,
    "end": 916
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 917,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 924,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 927,
    "end": 934
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 935,
    "end": 943
  },
  {
    "type": "Identifier",
    "value": "Tag",
    "start": 944,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 947,
    "end": 948
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 948,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "Id",
    "start": 954,
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
    "value": "string",
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
    "value": "id",
    "start": 976,
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
    "value": "Id",
    "start": 980,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 982,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 984,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 985,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 987,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "Self",
    "start": 988,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 992,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 994,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1003,
    "end": 1005
  },
  {
    "type": "Identifier",
    "value": "TagClass",
    "start": 1006,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Identifier",
    "value": "Self",
    "start": 1015,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "Id",
    "start": 1021,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 1025,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1034,
    "end": 1039
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1040,
    "end": 1043
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1044,
    "end": 1051
  },
  {
    "type": "Identifier",
    "value": "Tag",
    "start": 1052,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "String",
    "value": "\"Foo\"",
    "start": 1056,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1066,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 1079,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1087,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1095,
    "end": 1097
  },
  {
    "type": "Identifier",
    "value": "Effect",
    "start": 1098,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1105,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Identifier",
    "value": "layerEffect",
    "start": 1124,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1139,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Identifier",
    "value": "effectGen",
    "start": 1146,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1156,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1175,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 1190,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Identifier",
    "value": "effectFn",
    "start": 1194,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1203,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1264,
    "end": 1265
  }
]
```
