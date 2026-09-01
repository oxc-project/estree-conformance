__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassTypeParam",
        "optional": false,
        "typeAnnotation": null,
        "start": 112,
        "end": 126
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 143,
              "end": 147
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
                    "start": 148,
                    "end": 149
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 148,
                  "end": 149
                }
              ],
              "start": 147,
              "end": 150
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 161,
                    "end": 162
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 174,
                            "end": 175
                          },
                          "typeArguments": null,
                          "start": 174,
                          "end": 175
                        },
                        "start": 171,
                        "end": 175
                      },
                      "start": 164,
                      "end": 175
                    },
                    "start": 162,
                    "end": 175
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 161,
                  "end": 176
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 185,
                    "end": 187
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": true,
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
                                "start": 198,
                                "end": 199
                              },
                              "typeArguments": null,
                              "start": 198,
                              "end": 199
                            },
                            "start": 196,
                            "end": 199
                          },
                          "start": 194,
                          "end": 199
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 204,
                            "end": 205
                          },
                          "typeArguments": null,
                          "start": 204,
                          "end": 205
                        },
                        "start": 201,
                        "end": 205
                      },
                      "start": 189,
                      "end": 205
                    },
                    "start": 187,
                    "end": 205
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 185,
                  "end": 206
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 215,
                    "end": 217
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 227,
                                "end": 228
                              },
                              "typeArguments": null,
                              "start": 227,
                              "end": 228
                            },
                            "start": 225,
                            "end": 228
                          },
                          "start": 224,
                          "end": 228
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 233,
                            "end": 234
                          },
                          "typeArguments": null,
                          "start": 233,
                          "end": 234
                        },
                        "start": 230,
                        "end": 234
                      },
                      "start": 219,
                      "end": 234
                    },
                    "start": 217,
                    "end": 234
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 215,
                  "end": 235
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 244,
                    "end": 246
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 256,
                                "end": 257
                              },
                              "typeArguments": null,
                              "start": 256,
                              "end": 257
                            },
                            "start": 254,
                            "end": 257
                          },
                          "start": 253,
                          "end": 257
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": true,
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
                                "start": 263,
                                "end": 264
                              },
                              "typeArguments": null,
                              "start": 263,
                              "end": 264
                            },
                            "start": 261,
                            "end": 264
                          },
                          "start": 259,
                          "end": 264
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 269,
                            "end": 270
                          },
                          "typeArguments": null,
                          "start": 269,
                          "end": 270
                        },
                        "start": 266,
                        "end": 270
                      },
                      "start": 248,
                      "end": 270
                    },
                    "start": 246,
                    "end": 270
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 244,
                  "end": 271
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 280,
                    "end": 282
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": true,
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
                                "start": 293,
                                "end": 294
                              },
                              "typeArguments": null,
                              "start": 293,
                              "end": 294
                            },
                            "start": 291,
                            "end": 294
                          },
                          "start": 289,
                          "end": 294
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": true,
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
                                "start": 300,
                                "end": 301
                              },
                              "typeArguments": null,
                              "start": 300,
                              "end": 301
                            },
                            "start": 298,
                            "end": 301
                          },
                          "start": 296,
                          "end": 301
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 306,
                            "end": 307
                          },
                          "typeArguments": null,
                          "start": 306,
                          "end": 307
                        },
                        "start": 303,
                        "end": 307
                      },
                      "start": 284,
                      "end": 307
                    },
                    "start": 282,
                    "end": 307
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 280,
                  "end": 308
                }
              ],
              "start": 151,
              "end": 314
            },
            "declare": false,
            "start": 133,
            "end": 314
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I1",
              "optional": false,
              "typeAnnotation": null,
              "start": 330,
              "end": 332
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
                    "start": 333,
                    "end": 334
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 333,
                  "end": 334
                }
              ],
              "start": 332,
              "end": 335
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 344,
                  "end": 348
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
                        "start": 349,
                        "end": 350
                      },
                      "typeArguments": null,
                      "start": 349,
                      "end": 350
                    }
                  ],
                  "start": 348,
                  "end": 351
                },
                "start": 344,
                "end": 351
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
                    "start": 362,
                    "end": 363
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 375,
                            "end": 376
                          },
                          "typeArguments": null,
                          "start": 375,
                          "end": 376
                        },
                        "start": 372,
                        "end": 376
                      },
                      "start": 365,
                      "end": 376
                    },
                    "start": 363,
                    "end": 376
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 362,
                  "end": 377
                }
              ],
              "start": 352,
              "end": 416
            },
            "declare": false,
            "start": 320,
            "end": 416
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I2",
              "optional": false,
              "typeAnnotation": null,
              "start": 432,
              "end": 434
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
                    "start": 435,
                    "end": 436
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 435,
                  "end": 436
                }
              ],
              "start": 434,
              "end": 437
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 446,
                  "end": 450
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
                        "start": 451,
                        "end": 452
                      },
                      "typeArguments": null,
                      "start": 451,
                      "end": 452
                    }
                  ],
                  "start": 450,
                  "end": 453
                },
                "start": 446,
                "end": 453
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
                    "start": 464,
                    "end": 465
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": true,
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
                                "start": 476,
                                "end": 477
                              },
                              "typeArguments": null,
                              "start": 476,
                              "end": 477
                            },
                            "start": 474,
                            "end": 477
                          },
                          "start": 472,
                          "end": 477
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 482,
                            "end": 483
                          },
                          "typeArguments": null,
                          "start": 482,
                          "end": 483
                        },
                        "start": 479,
                        "end": 483
                      },
                      "start": 467,
                      "end": 483
                    },
                    "start": 465,
                    "end": 483
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 464,
                  "end": 484
                }
              ],
              "start": 454,
              "end": 523
            },
            "declare": false,
            "start": 422,
            "end": 523
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I3",
              "optional": false,
              "typeAnnotation": null,
              "start": 539,
              "end": 541
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
                    "start": 542,
                    "end": 543
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 542,
                  "end": 543
                }
              ],
              "start": 541,
              "end": 544
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 553,
                  "end": 557
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
                        "start": 558,
                        "end": 559
                      },
                      "typeArguments": null,
                      "start": 558,
                      "end": 559
                    }
                  ],
                  "start": 557,
                  "end": 560
                },
                "start": 553,
                "end": 560
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
                    "start": 571,
                    "end": 572
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 582,
                                "end": 583
                              },
                              "typeArguments": null,
                              "start": 582,
                              "end": 583
                            },
                            "start": 580,
                            "end": 583
                          },
                          "start": 579,
                          "end": 583
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 588,
                            "end": 589
                          },
                          "typeArguments": null,
                          "start": 588,
                          "end": 589
                        },
                        "start": 585,
                        "end": 589
                      },
                      "start": 574,
                      "end": 589
                    },
                    "start": 572,
                    "end": 589
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 571,
                  "end": 590
                }
              ],
              "start": 561,
              "end": 631
            },
            "declare": false,
            "start": 529,
            "end": 631
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I4",
              "optional": false,
              "typeAnnotation": null,
              "start": 648,
              "end": 650
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
                    "start": 651,
                    "end": 652
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 651,
                  "end": 652
                }
              ],
              "start": 650,
              "end": 653
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 662,
                  "end": 666
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
                        "start": 667,
                        "end": 668
                      },
                      "typeArguments": null,
                      "start": 667,
                      "end": 668
                    }
                  ],
                  "start": 666,
                  "end": 669
                },
                "start": 662,
                "end": 669
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
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 680,
                    "end": 682
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 694,
                            "end": 695
                          },
                          "typeArguments": null,
                          "start": 694,
                          "end": 695
                        },
                        "start": 691,
                        "end": 695
                      },
                      "start": 684,
                      "end": 695
                    },
                    "start": 682,
                    "end": 695
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 680,
                  "end": 696
                }
              ],
              "start": 670,
              "end": 735
            },
            "declare": false,
            "start": 638,
            "end": 735
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I5",
              "optional": false,
              "typeAnnotation": null,
              "start": 751,
              "end": 753
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
                    "start": 754,
                    "end": 755
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 754,
                  "end": 755
                }
              ],
              "start": 753,
              "end": 756
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 765,
                  "end": 769
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
                        "start": 770,
                        "end": 771
                      },
                      "typeArguments": null,
                      "start": 770,
                      "end": 771
                    }
                  ],
                  "start": 769,
                  "end": 772
                },
                "start": 765,
                "end": 772
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
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 783,
                    "end": 785
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": true,
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
                                "start": 796,
                                "end": 797
                              },
                              "typeArguments": null,
                              "start": 796,
                              "end": 797
                            },
                            "start": 794,
                            "end": 797
                          },
                          "start": 792,
                          "end": 797
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 802,
                            "end": 803
                          },
                          "typeArguments": null,
                          "start": 802,
                          "end": 803
                        },
                        "start": 799,
                        "end": 803
                      },
                      "start": 787,
                      "end": 803
                    },
                    "start": 785,
                    "end": 803
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 783,
                  "end": 804
                }
              ],
              "start": 773,
              "end": 843
            },
            "declare": false,
            "start": 741,
            "end": 843
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I6",
              "optional": false,
              "typeAnnotation": null,
              "start": 859,
              "end": 861
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
                }
              ],
              "start": 861,
              "end": 864
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 873,
                  "end": 877
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
                        "start": 878,
                        "end": 879
                      },
                      "typeArguments": null,
                      "start": 878,
                      "end": 879
                    }
                  ],
                  "start": 877,
                  "end": 880
                },
                "start": 873,
                "end": 880
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
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 891,
                    "end": 893
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 903,
                                "end": 904
                              },
                              "typeArguments": null,
                              "start": 903,
                              "end": 904
                            },
                            "start": 901,
                            "end": 904
                          },
                          "start": 900,
                          "end": 904
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 909,
                            "end": 910
                          },
                          "typeArguments": null,
                          "start": 909,
                          "end": 910
                        },
                        "start": 906,
                        "end": 910
                      },
                      "start": 895,
                      "end": 910
                    },
                    "start": 893,
                    "end": 910
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 891,
                  "end": 911
                }
              ],
              "start": 881,
              "end": 946
            },
            "declare": false,
            "start": 849,
            "end": 946
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I7",
              "optional": false,
              "typeAnnotation": null,
              "start": 963,
              "end": 965
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
                    "start": 966,
                    "end": 967
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 966,
                  "end": 967
                }
              ],
              "start": 965,
              "end": 968
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 977,
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 982,
                        "end": 983
                      },
                      "typeArguments": null,
                      "start": 982,
                      "end": 983
                    }
                  ],
                  "start": 981,
                  "end": 984
                },
                "start": 977,
                "end": 984
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
                    "name": "a3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 995,
                    "end": 997
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1009,
                            "end": 1010
                          },
                          "typeArguments": null,
                          "start": 1009,
                          "end": 1010
                        },
                        "start": 1006,
                        "end": 1010
                      },
                      "start": 999,
                      "end": 1010
                    },
                    "start": 997,
                    "end": 1010
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 995,
                  "end": 1011
                }
              ],
              "start": 985,
              "end": 1046
            },
            "declare": false,
            "start": 953,
            "end": 1046
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I8",
              "optional": false,
              "typeAnnotation": null,
              "start": 1062,
              "end": 1064
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
                    "start": 1065,
                    "end": 1066
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1065,
                  "end": 1066
                }
              ],
              "start": 1064,
              "end": 1067
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1076,
                  "end": 1080
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
                        "start": 1081,
                        "end": 1082
                      },
                      "typeArguments": null,
                      "start": 1081,
                      "end": 1082
                    }
                  ],
                  "start": 1080,
                  "end": 1083
                },
                "start": 1076,
                "end": 1083
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
                    "name": "a3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1094,
                    "end": 1096
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": true,
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
                                "start": 1107,
                                "end": 1108
                              },
                              "typeArguments": null,
                              "start": 1107,
                              "end": 1108
                            },
                            "start": 1105,
                            "end": 1108
                          },
                          "start": 1103,
                          "end": 1108
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1113,
                            "end": 1114
                          },
                          "typeArguments": null,
                          "start": 1113,
                          "end": 1114
                        },
                        "start": 1110,
                        "end": 1114
                      },
                      "start": 1098,
                      "end": 1114
                    },
                    "start": 1096,
                    "end": 1114
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1094,
                  "end": 1115
                }
              ],
              "start": 1084,
              "end": 1150
            },
            "declare": false,
            "start": 1052,
            "end": 1150
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I9",
              "optional": false,
              "typeAnnotation": null,
              "start": 1166,
              "end": 1168
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
                    "start": 1169,
                    "end": 1170
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1169,
                  "end": 1170
                }
              ],
              "start": 1168,
              "end": 1171
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1180,
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1185,
                        "end": 1186
                      },
                      "typeArguments": null,
                      "start": 1185,
                      "end": 1186
                    }
                  ],
                  "start": 1184,
                  "end": 1187
                },
                "start": 1180,
                "end": 1187
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
                    "name": "a3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1198,
                    "end": 1200
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1210,
                                "end": 1211
                              },
                              "typeArguments": null,
                              "start": 1210,
                              "end": 1211
                            },
                            "start": 1208,
                            "end": 1211
                          },
                          "start": 1207,
                          "end": 1211
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1216,
                            "end": 1217
                          },
                          "typeArguments": null,
                          "start": 1216,
                          "end": 1217
                        },
                        "start": 1213,
                        "end": 1217
                      },
                      "start": 1202,
                      "end": 1217
                    },
                    "start": 1200,
                    "end": 1217
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1198,
                  "end": 1218
                }
              ],
              "start": 1188,
              "end": 1257
            },
            "declare": false,
            "start": 1156,
            "end": 1257
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I10",
              "optional": false,
              "typeAnnotation": null,
              "start": 1273,
              "end": 1276
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
                    "start": 1277,
                    "end": 1278
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1277,
                  "end": 1278
                }
              ],
              "start": 1276,
              "end": 1279
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1288,
                  "end": 1292
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
                        "start": 1293,
                        "end": 1294
                      },
                      "typeArguments": null,
                      "start": 1293,
                      "end": 1294
                    }
                  ],
                  "start": 1292,
                  "end": 1295
                },
                "start": 1288,
                "end": 1295
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
                    "name": "a3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1306,
                    "end": 1308
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1318,
                                "end": 1319
                              },
                              "typeArguments": null,
                              "start": 1318,
                              "end": 1319
                            },
                            "start": 1316,
                            "end": 1319
                          },
                          "start": 1315,
                          "end": 1319
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
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
                                "start": 1324,
                                "end": 1325
                              },
                              "typeArguments": null,
                              "start": 1324,
                              "end": 1325
                            },
                            "start": 1322,
                            "end": 1325
                          },
                          "start": 1321,
                          "end": 1325
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1330,
                            "end": 1331
                          },
                          "typeArguments": null,
                          "start": 1330,
                          "end": 1331
                        },
                        "start": 1327,
                        "end": 1331
                      },
                      "start": 1310,
                      "end": 1331
                    },
                    "start": 1308,
                    "end": 1331
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1306,
                  "end": 1332
                }
              ],
              "start": 1296,
              "end": 1374
            },
            "declare": false,
            "start": 1263,
            "end": 1374
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I11",
              "optional": false,
              "typeAnnotation": null,
              "start": 1391,
              "end": 1394
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
                    "start": 1395,
                    "end": 1396
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1395,
                  "end": 1396
                }
              ],
              "start": 1394,
              "end": 1397
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1406,
                  "end": 1410
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
                        "start": 1411,
                        "end": 1412
                      },
                      "typeArguments": null,
                      "start": 1411,
                      "end": 1412
                    }
                  ],
                  "start": 1410,
                  "end": 1413
                },
                "start": 1406,
                "end": 1413
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
                    "name": "a4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1424,
                    "end": 1426
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1438,
                            "end": 1439
                          },
                          "typeArguments": null,
                          "start": 1438,
                          "end": 1439
                        },
                        "start": 1435,
                        "end": 1439
                      },
                      "start": 1428,
                      "end": 1439
                    },
                    "start": 1426,
                    "end": 1439
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1424,
                  "end": 1440
                }
              ],
              "start": 1414,
              "end": 1475
            },
            "declare": false,
            "start": 1381,
            "end": 1475
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I12",
              "optional": false,
              "typeAnnotation": null,
              "start": 1491,
              "end": 1494
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
                    "start": 1495,
                    "end": 1496
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1495,
                  "end": 1496
                }
              ],
              "start": 1494,
              "end": 1497
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1506,
                  "end": 1510
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
                        "start": 1511,
                        "end": 1512
                      },
                      "typeArguments": null,
                      "start": 1511,
                      "end": 1512
                    }
                  ],
                  "start": 1510,
                  "end": 1513
                },
                "start": 1506,
                "end": 1513
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
                    "name": "a4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1524,
                    "end": 1526
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": true,
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
                                "start": 1537,
                                "end": 1538
                              },
                              "typeArguments": null,
                              "start": 1537,
                              "end": 1538
                            },
                            "start": 1535,
                            "end": 1538
                          },
                          "start": 1533,
                          "end": 1538
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": true,
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
                                "start": 1544,
                                "end": 1545
                              },
                              "typeArguments": null,
                              "start": 1544,
                              "end": 1545
                            },
                            "start": 1542,
                            "end": 1545
                          },
                          "start": 1540,
                          "end": 1545
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1550,
                            "end": 1551
                          },
                          "typeArguments": null,
                          "start": 1550,
                          "end": 1551
                        },
                        "start": 1547,
                        "end": 1551
                      },
                      "start": 1528,
                      "end": 1551
                    },
                    "start": 1526,
                    "end": 1551
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1524,
                  "end": 1552
                }
              ],
              "start": 1514,
              "end": 1587
            },
            "declare": false,
            "start": 1481,
            "end": 1587
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I13",
              "optional": false,
              "typeAnnotation": null,
              "start": 1603,
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
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1607,
                  "end": 1608
                }
              ],
              "start": 1606,
              "end": 1609
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1618,
                  "end": 1622
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
                        "start": 1623,
                        "end": 1624
                      },
                      "typeArguments": null,
                      "start": 1623,
                      "end": 1624
                    }
                  ],
                  "start": 1622,
                  "end": 1625
                },
                "start": 1618,
                "end": 1625
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
                    "name": "a4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1636,
                    "end": 1638
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1648,
                                "end": 1649
                              },
                              "typeArguments": null,
                              "start": 1648,
                              "end": 1649
                            },
                            "start": 1646,
                            "end": 1649
                          },
                          "start": 1645,
                          "end": 1649
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1654,
                            "end": 1655
                          },
                          "typeArguments": null,
                          "start": 1654,
                          "end": 1655
                        },
                        "start": 1651,
                        "end": 1655
                      },
                      "start": 1640,
                      "end": 1655
                    },
                    "start": 1638,
                    "end": 1655
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1636,
                  "end": 1656
                }
              ],
              "start": 1626,
              "end": 1695
            },
            "declare": false,
            "start": 1593,
            "end": 1695
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I14",
              "optional": false,
              "typeAnnotation": null,
              "start": 1711,
              "end": 1714
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
                    "start": 1715,
                    "end": 1716
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1715,
                  "end": 1716
                }
              ],
              "start": 1714,
              "end": 1717
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1726,
                  "end": 1730
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
                        "start": 1731,
                        "end": 1732
                      },
                      "typeArguments": null,
                      "start": 1731,
                      "end": 1732
                    }
                  ],
                  "start": 1730,
                  "end": 1733
                },
                "start": 1726,
                "end": 1733
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
                    "name": "a4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1744,
                    "end": 1746
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1756,
                                "end": 1757
                              },
                              "typeArguments": null,
                              "start": 1756,
                              "end": 1757
                            },
                            "start": 1754,
                            "end": 1757
                          },
                          "start": 1753,
                          "end": 1757
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
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
                                "start": 1762,
                                "end": 1763
                              },
                              "typeArguments": null,
                              "start": 1762,
                              "end": 1763
                            },
                            "start": 1760,
                            "end": 1763
                          },
                          "start": 1759,
                          "end": 1763
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1768,
                            "end": 1769
                          },
                          "typeArguments": null,
                          "start": 1768,
                          "end": 1769
                        },
                        "start": 1765,
                        "end": 1769
                      },
                      "start": 1748,
                      "end": 1769
                    },
                    "start": 1746,
                    "end": 1769
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1744,
                  "end": 1770
                }
              ],
              "start": 1734,
              "end": 1806
            },
            "declare": false,
            "start": 1701,
            "end": 1806
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I15",
              "optional": false,
              "typeAnnotation": null,
              "start": 1823,
              "end": 1826
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
                    "start": 1827,
                    "end": 1828
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1827,
                  "end": 1828
                }
              ],
              "start": 1826,
              "end": 1829
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1838,
                  "end": 1842
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
                        "start": 1843,
                        "end": 1844
                      },
                      "typeArguments": null,
                      "start": 1843,
                      "end": 1844
                    }
                  ],
                  "start": 1842,
                  "end": 1845
                },
                "start": 1838,
                "end": 1845
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
                    "name": "a5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1856,
                    "end": 1858
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1870,
                            "end": 1871
                          },
                          "typeArguments": null,
                          "start": 1870,
                          "end": 1871
                        },
                        "start": 1867,
                        "end": 1871
                      },
                      "start": 1860,
                      "end": 1871
                    },
                    "start": 1858,
                    "end": 1871
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1856,
                  "end": 1872
                }
              ],
              "start": 1846,
              "end": 1907
            },
            "declare": false,
            "start": 1813,
            "end": 1907
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I16",
              "optional": false,
              "typeAnnotation": null,
              "start": 1923,
              "end": 1926
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
                    "start": 1927,
                    "end": 1928
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1927,
                  "end": 1928
                }
              ],
              "start": 1926,
              "end": 1929
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1938,
                  "end": 1942
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
                        "start": 1943,
                        "end": 1944
                      },
                      "typeArguments": null,
                      "start": 1943,
                      "end": 1944
                    }
                  ],
                  "start": 1942,
                  "end": 1945
                },
                "start": 1938,
                "end": 1945
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
                    "name": "a5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1956,
                    "end": 1958
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": true,
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
                                "start": 1969,
                                "end": 1970
                              },
                              "typeArguments": null,
                              "start": 1969,
                              "end": 1970
                            },
                            "start": 1967,
                            "end": 1970
                          },
                          "start": 1965,
                          "end": 1970
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": true,
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
                                "start": 1976,
                                "end": 1977
                              },
                              "typeArguments": null,
                              "start": 1976,
                              "end": 1977
                            },
                            "start": 1974,
                            "end": 1977
                          },
                          "start": 1972,
                          "end": 1977
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1982,
                            "end": 1983
                          },
                          "typeArguments": null,
                          "start": 1982,
                          "end": 1983
                        },
                        "start": 1979,
                        "end": 1983
                      },
                      "start": 1960,
                      "end": 1983
                    },
                    "start": 1958,
                    "end": 1983
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1956,
                  "end": 1984
                }
              ],
              "start": 1946,
              "end": 2019
            },
            "declare": false,
            "start": 1913,
            "end": 2019
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I17",
              "optional": false,
              "typeAnnotation": null,
              "start": 2035,
              "end": 2038
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
                    "start": 2039,
                    "end": 2040
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2039,
                  "end": 2040
                }
              ],
              "start": 2038,
              "end": 2041
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2050,
                  "end": 2054
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
                        "start": 2055,
                        "end": 2056
                      },
                      "typeArguments": null,
                      "start": 2055,
                      "end": 2056
                    }
                  ],
                  "start": 2054,
                  "end": 2057
                },
                "start": 2050,
                "end": 2057
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
                    "name": "a5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2068,
                    "end": 2070
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2080,
                                "end": 2081
                              },
                              "typeArguments": null,
                              "start": 2080,
                              "end": 2081
                            },
                            "start": 2078,
                            "end": 2081
                          },
                          "start": 2077,
                          "end": 2081
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2086,
                            "end": 2087
                          },
                          "typeArguments": null,
                          "start": 2086,
                          "end": 2087
                        },
                        "start": 2083,
                        "end": 2087
                      },
                      "start": 2072,
                      "end": 2087
                    },
                    "start": 2070,
                    "end": 2087
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2068,
                  "end": 2088
                }
              ],
              "start": 2058,
              "end": 2126
            },
            "declare": false,
            "start": 2025,
            "end": 2126
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I18",
              "optional": false,
              "typeAnnotation": null,
              "start": 2142,
              "end": 2145
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
                    "start": 2146,
                    "end": 2147
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2146,
                  "end": 2147
                }
              ],
              "start": 2145,
              "end": 2148
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2157,
                  "end": 2161
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
                        "start": 2162,
                        "end": 2163
                      },
                      "typeArguments": null,
                      "start": 2162,
                      "end": 2163
                    }
                  ],
                  "start": 2161,
                  "end": 2164
                },
                "start": 2157,
                "end": 2164
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
                    "name": "a5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2175,
                    "end": 2177
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2187,
                                "end": 2188
                              },
                              "typeArguments": null,
                              "start": 2187,
                              "end": 2188
                            },
                            "start": 2185,
                            "end": 2188
                          },
                          "start": 2184,
                          "end": 2188
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
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
                                "start": 2193,
                                "end": 2194
                              },
                              "typeArguments": null,
                              "start": 2193,
                              "end": 2194
                            },
                            "start": 2191,
                            "end": 2194
                          },
                          "start": 2190,
                          "end": 2194
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2199,
                            "end": 2200
                          },
                          "typeArguments": null,
                          "start": 2199,
                          "end": 2200
                        },
                        "start": 2196,
                        "end": 2200
                      },
                      "start": 2179,
                      "end": 2200
                    },
                    "start": 2177,
                    "end": 2200
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2175,
                  "end": 2201
                }
              ],
              "start": 2165,
              "end": 2237
            },
            "declare": false,
            "start": 2132,
            "end": 2237
          }
        ],
        "start": 127,
        "end": 2239
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 102,
      "end": 2239
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericSignaturesInvalid",
        "optional": false,
        "typeAnnotation": null,
        "start": 2251,
        "end": 2275
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2324,
              "end": 2329
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2340,
                    "end": 2341
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 2348,
                              "end": 2349
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2348,
                            "end": 2349
                          }
                        ],
                        "start": 2347,
                        "end": 2350
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2356,
                            "end": 2357
                          },
                          "typeArguments": null,
                          "start": 2356,
                          "end": 2357
                        },
                        "start": 2353,
                        "end": 2357
                      },
                      "start": 2343,
                      "end": 2357
                    },
                    "start": 2341,
                    "end": 2357
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2340,
                  "end": 2358
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2367,
                    "end": 2369
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 2376,
                              "end": 2377
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2376,
                            "end": 2377
                          }
                        ],
                        "start": 2375,
                        "end": 2378
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": true,
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
                                "start": 2383,
                                "end": 2384
                              },
                              "typeArguments": null,
                              "start": 2383,
                              "end": 2384
                            },
                            "start": 2381,
                            "end": 2384
                          },
                          "start": 2379,
                          "end": 2384
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2389,
                            "end": 2390
                          },
                          "typeArguments": null,
                          "start": 2389,
                          "end": 2390
                        },
                        "start": 2386,
                        "end": 2390
                      },
                      "start": 2371,
                      "end": 2390
                    },
                    "start": 2369,
                    "end": 2390
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2367,
                  "end": 2391
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2400,
                    "end": 2402
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 2409,
                              "end": 2410
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2409,
                            "end": 2410
                          }
                        ],
                        "start": 2408,
                        "end": 2411
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
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
                                "start": 2415,
                                "end": 2416
                              },
                              "typeArguments": null,
                              "start": 2415,
                              "end": 2416
                            },
                            "start": 2413,
                            "end": 2416
                          },
                          "start": 2412,
                          "end": 2416
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2421,
                            "end": 2422
                          },
                          "typeArguments": null,
                          "start": 2421,
                          "end": 2422
                        },
                        "start": 2418,
                        "end": 2422
                      },
                      "start": 2404,
                      "end": 2422
                    },
                    "start": 2402,
                    "end": 2422
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2400,
                  "end": 2423
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2432,
                    "end": 2434
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 2441,
                              "end": 2442
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2441,
                            "end": 2442
                          }
                        ],
                        "start": 2440,
                        "end": 2443
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
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
                                "start": 2447,
                                "end": 2448
                              },
                              "typeArguments": null,
                              "start": 2447,
                              "end": 2448
                            },
                            "start": 2445,
                            "end": 2448
                          },
                          "start": 2444,
                          "end": 2448
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": true,
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
                                "start": 2454,
                                "end": 2455
                              },
                              "typeArguments": null,
                              "start": 2454,
                              "end": 2455
                            },
                            "start": 2452,
                            "end": 2455
                          },
                          "start": 2450,
                          "end": 2455
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2460,
                            "end": 2461
                          },
                          "typeArguments": null,
                          "start": 2460,
                          "end": 2461
                        },
                        "start": 2457,
                        "end": 2461
                      },
                      "start": 2436,
                      "end": 2461
                    },
                    "start": 2434,
                    "end": 2461
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2432,
                  "end": 2462
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2471,
                    "end": 2473
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 2480,
                              "end": 2481
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2480,
                            "end": 2481
                          }
                        ],
                        "start": 2479,
                        "end": 2482
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": true,
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
                                "start": 2487,
                                "end": 2488
                              },
                              "typeArguments": null,
                              "start": 2487,
                              "end": 2488
                            },
                            "start": 2485,
                            "end": 2488
                          },
                          "start": 2483,
                          "end": 2488
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": true,
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
                                "start": 2494,
                                "end": 2495
                              },
                              "typeArguments": null,
                              "start": 2494,
                              "end": 2495
                            },
                            "start": 2492,
                            "end": 2495
                          },
                          "start": 2490,
                          "end": 2495
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2500,
                            "end": 2501
                          },
                          "typeArguments": null,
                          "start": 2500,
                          "end": 2501
                        },
                        "start": 2497,
                        "end": 2501
                      },
                      "start": 2475,
                      "end": 2501
                    },
                    "start": 2473,
                    "end": 2501
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2471,
                  "end": 2502
                }
              ],
              "start": 2330,
              "end": 2508
            },
            "declare": false,
            "start": 2314,
            "end": 2508
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2524,
              "end": 2526
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
                    "start": 2527,
                    "end": 2528
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2527,
                  "end": 2528
                }
              ],
              "start": 2526,
              "end": 2529
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2538,
                  "end": 2543
                },
                "typeArguments": null,
                "start": 2538,
                "end": 2543
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
                    "start": 2554,
                    "end": 2555
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2567,
                            "end": 2568
                          },
                          "typeArguments": null,
                          "start": 2567,
                          "end": 2568
                        },
                        "start": 2564,
                        "end": 2568
                      },
                      "start": 2557,
                      "end": 2568
                    },
                    "start": 2555,
                    "end": 2568
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2554,
                  "end": 2569
                }
              ],
              "start": 2544,
              "end": 2576
            },
            "declare": false,
            "start": 2514,
            "end": 2576
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2592,
              "end": 2594
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
                    "start": 2595,
                    "end": 2596
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2595,
                  "end": 2596
                }
              ],
              "start": 2594,
              "end": 2597
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2606,
                  "end": 2611
                },
                "typeArguments": null,
                "start": 2606,
                "end": 2611
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
                    "start": 2622,
                    "end": 2623
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": true,
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
                                "start": 2634,
                                "end": 2635
                              },
                              "typeArguments": null,
                              "start": 2634,
                              "end": 2635
                            },
                            "start": 2632,
                            "end": 2635
                          },
                          "start": 2630,
                          "end": 2635
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2640,
                            "end": 2641
                          },
                          "typeArguments": null,
                          "start": 2640,
                          "end": 2641
                        },
                        "start": 2637,
                        "end": 2641
                      },
                      "start": 2625,
                      "end": 2641
                    },
                    "start": 2623,
                    "end": 2641
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2622,
                  "end": 2642
                }
              ],
              "start": 2612,
              "end": 2648
            },
            "declare": false,
            "start": 2582,
            "end": 2648
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2664,
              "end": 2666
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
                    "start": 2667,
                    "end": 2668
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2667,
                  "end": 2668
                }
              ],
              "start": 2666,
              "end": 2669
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2678,
                  "end": 2683
                },
                "typeArguments": null,
                "start": 2678,
                "end": 2683
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
                    "start": 2694,
                    "end": 2695
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2705,
                                "end": 2706
                              },
                              "typeArguments": null,
                              "start": 2705,
                              "end": 2706
                            },
                            "start": 2703,
                            "end": 2706
                          },
                          "start": 2702,
                          "end": 2706
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2711,
                            "end": 2712
                          },
                          "typeArguments": null,
                          "start": 2711,
                          "end": 2712
                        },
                        "start": 2708,
                        "end": 2712
                      },
                      "start": 2697,
                      "end": 2712
                    },
                    "start": 2695,
                    "end": 2712
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2694,
                  "end": 2713
                }
              ],
              "start": 2684,
              "end": 2720
            },
            "declare": false,
            "start": 2654,
            "end": 2720
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2737,
              "end": 2739
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
                    "start": 2740,
                    "end": 2741
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2740,
                  "end": 2741
                }
              ],
              "start": 2739,
              "end": 2742
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2751,
                  "end": 2756
                },
                "typeArguments": null,
                "start": 2751,
                "end": 2756
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
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2767,
                    "end": 2769
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2781,
                            "end": 2782
                          },
                          "typeArguments": null,
                          "start": 2781,
                          "end": 2782
                        },
                        "start": 2778,
                        "end": 2782
                      },
                      "start": 2771,
                      "end": 2782
                    },
                    "start": 2769,
                    "end": 2782
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2767,
                  "end": 2783
                }
              ],
              "start": 2757,
              "end": 2790
            },
            "declare": false,
            "start": 2727,
            "end": 2790
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I5",
              "optional": false,
              "typeAnnotation": null,
              "start": 2806,
              "end": 2808
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
                    "start": 2809,
                    "end": 2810
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2809,
                  "end": 2810
                }
              ],
              "start": 2808,
              "end": 2811
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2820,
                  "end": 2825
                },
                "typeArguments": null,
                "start": 2820,
                "end": 2825
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
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2836,
                    "end": 2838
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": true,
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
                                "start": 2849,
                                "end": 2850
                              },
                              "typeArguments": null,
                              "start": 2849,
                              "end": 2850
                            },
                            "start": 2847,
                            "end": 2850
                          },
                          "start": 2845,
                          "end": 2850
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2855,
                            "end": 2856
                          },
                          "typeArguments": null,
                          "start": 2855,
                          "end": 2856
                        },
                        "start": 2852,
                        "end": 2856
                      },
                      "start": 2840,
                      "end": 2856
                    },
                    "start": 2838,
                    "end": 2856
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2836,
                  "end": 2856
                }
              ],
              "start": 2826,
              "end": 2862
            },
            "declare": false,
            "start": 2796,
            "end": 2862
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I6",
              "optional": false,
              "typeAnnotation": null,
              "start": 2878,
              "end": 2880
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
                    "start": 2881,
                    "end": 2882
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2881,
                  "end": 2882
                }
              ],
              "start": 2880,
              "end": 2883
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2892,
                  "end": 2897
                },
                "typeArguments": null,
                "start": 2892,
                "end": 2897
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
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2908,
                    "end": 2910
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2920,
                                "end": 2921
                              },
                              "typeArguments": null,
                              "start": 2920,
                              "end": 2921
                            },
                            "start": 2918,
                            "end": 2921
                          },
                          "start": 2917,
                          "end": 2921
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2926,
                            "end": 2927
                          },
                          "typeArguments": null,
                          "start": 2926,
                          "end": 2927
                        },
                        "start": 2923,
                        "end": 2927
                      },
                      "start": 2912,
                      "end": 2927
                    },
                    "start": 2910,
                    "end": 2927
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2908,
                  "end": 2928
                }
              ],
              "start": 2898,
              "end": 2934
            },
            "declare": false,
            "start": 2868,
            "end": 2934
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I7",
              "optional": false,
              "typeAnnotation": null,
              "start": 2951,
              "end": 2953
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
                    "start": 2954,
                    "end": 2955
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2954,
                  "end": 2955
                }
              ],
              "start": 2953,
              "end": 2956
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2965,
                  "end": 2970
                },
                "typeArguments": null,
                "start": 2965,
                "end": 2970
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
                    "name": "a3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2981,
                    "end": 2983
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2995,
                            "end": 2996
                          },
                          "typeArguments": null,
                          "start": 2995,
                          "end": 2996
                        },
                        "start": 2992,
                        "end": 2996
                      },
                      "start": 2985,
                      "end": 2996
                    },
                    "start": 2983,
                    "end": 2996
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2981,
                  "end": 2997
                }
              ],
              "start": 2971,
              "end": 3003
            },
            "declare": false,
            "start": 2941,
            "end": 3003
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I8",
              "optional": false,
              "typeAnnotation": null,
              "start": 3019,
              "end": 3021
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
                    "start": 3022,
                    "end": 3023
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3022,
                  "end": 3023
                }
              ],
              "start": 3021,
              "end": 3024
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3033,
                  "end": 3038
                },
                "typeArguments": null,
                "start": 3033,
                "end": 3038
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
                    "name": "a3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3049,
                    "end": 3051
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": true,
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
                                "start": 3062,
                                "end": 3063
                              },
                              "typeArguments": null,
                              "start": 3062,
                              "end": 3063
                            },
                            "start": 3060,
                            "end": 3063
                          },
                          "start": 3058,
                          "end": 3063
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3068,
                            "end": 3069
                          },
                          "typeArguments": null,
                          "start": 3068,
                          "end": 3069
                        },
                        "start": 3065,
                        "end": 3069
                      },
                      "start": 3053,
                      "end": 3069
                    },
                    "start": 3051,
                    "end": 3069
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3049,
                  "end": 3070
                }
              ],
              "start": 3039,
              "end": 3077
            },
            "declare": false,
            "start": 3009,
            "end": 3077
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I9",
              "optional": false,
              "typeAnnotation": null,
              "start": 3093,
              "end": 3095
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
                    "start": 3096,
                    "end": 3097
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3096,
                  "end": 3097
                }
              ],
              "start": 3095,
              "end": 3098
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3107,
                  "end": 3112
                },
                "typeArguments": null,
                "start": 3107,
                "end": 3112
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
                    "name": "a3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3123,
                    "end": 3125
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3135,
                                "end": 3136
                              },
                              "typeArguments": null,
                              "start": 3135,
                              "end": 3136
                            },
                            "start": 3133,
                            "end": 3136
                          },
                          "start": 3132,
                          "end": 3136
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3141,
                            "end": 3142
                          },
                          "typeArguments": null,
                          "start": 3141,
                          "end": 3142
                        },
                        "start": 3138,
                        "end": 3142
                      },
                      "start": 3127,
                      "end": 3142
                    },
                    "start": 3125,
                    "end": 3142
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3123,
                  "end": 3143
                }
              ],
              "start": 3113,
              "end": 3150
            },
            "declare": false,
            "start": 3083,
            "end": 3150
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I10",
              "optional": false,
              "typeAnnotation": null,
              "start": 3166,
              "end": 3169
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
                    "start": 3170,
                    "end": 3171
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3170,
                  "end": 3171
                }
              ],
              "start": 3169,
              "end": 3172
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3181,
                  "end": 3186
                },
                "typeArguments": null,
                "start": 3181,
                "end": 3186
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
                    "name": "a3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3197,
                    "end": 3199
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3209,
                                "end": 3210
                              },
                              "typeArguments": null,
                              "start": 3209,
                              "end": 3210
                            },
                            "start": 3207,
                            "end": 3210
                          },
                          "start": 3206,
                          "end": 3210
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
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
                                "start": 3215,
                                "end": 3216
                              },
                              "typeArguments": null,
                              "start": 3215,
                              "end": 3216
                            },
                            "start": 3213,
                            "end": 3216
                          },
                          "start": 3212,
                          "end": 3216
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3221,
                            "end": 3222
                          },
                          "typeArguments": null,
                          "start": 3221,
                          "end": 3222
                        },
                        "start": 3218,
                        "end": 3222
                      },
                      "start": 3201,
                      "end": 3222
                    },
                    "start": 3199,
                    "end": 3222
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3197,
                  "end": 3223
                }
              ],
              "start": 3187,
              "end": 3231
            },
            "declare": false,
            "start": 3156,
            "end": 3231
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I11",
              "optional": false,
              "typeAnnotation": null,
              "start": 3248,
              "end": 3251
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
                    "start": 3252,
                    "end": 3253
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3252,
                  "end": 3253
                }
              ],
              "start": 3251,
              "end": 3254
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3263,
                  "end": 3268
                },
                "typeArguments": null,
                "start": 3263,
                "end": 3268
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
                    "name": "a4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3279,
                    "end": 3281
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3293,
                            "end": 3294
                          },
                          "typeArguments": null,
                          "start": 3293,
                          "end": 3294
                        },
                        "start": 3290,
                        "end": 3294
                      },
                      "start": 3283,
                      "end": 3294
                    },
                    "start": 3281,
                    "end": 3294
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3279,
                  "end": 3295
                }
              ],
              "start": 3269,
              "end": 3302
            },
            "declare": false,
            "start": 3238,
            "end": 3302
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I12",
              "optional": false,
              "typeAnnotation": null,
              "start": 3318,
              "end": 3321
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
                    "start": 3322,
                    "end": 3323
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3322,
                  "end": 3323
                }
              ],
              "start": 3321,
              "end": 3324
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3333,
                  "end": 3338
                },
                "typeArguments": null,
                "start": 3333,
                "end": 3338
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
                    "name": "a4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3349,
                    "end": 3351
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": true,
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
                                "start": 3362,
                                "end": 3363
                              },
                              "typeArguments": null,
                              "start": 3362,
                              "end": 3363
                            },
                            "start": 3360,
                            "end": 3363
                          },
                          "start": 3358,
                          "end": 3363
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": true,
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
                                "start": 3369,
                                "end": 3370
                              },
                              "typeArguments": null,
                              "start": 3369,
                              "end": 3370
                            },
                            "start": 3367,
                            "end": 3370
                          },
                          "start": 3365,
                          "end": 3370
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3375,
                            "end": 3376
                          },
                          "typeArguments": null,
                          "start": 3375,
                          "end": 3376
                        },
                        "start": 3372,
                        "end": 3376
                      },
                      "start": 3353,
                      "end": 3376
                    },
                    "start": 3351,
                    "end": 3376
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3349,
                  "end": 3377
                }
              ],
              "start": 3339,
              "end": 3384
            },
            "declare": false,
            "start": 3308,
            "end": 3384
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I13",
              "optional": false,
              "typeAnnotation": null,
              "start": 3400,
              "end": 3403
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
                    "start": 3404,
                    "end": 3405
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3404,
                  "end": 3405
                }
              ],
              "start": 3403,
              "end": 3406
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3415,
                  "end": 3420
                },
                "typeArguments": null,
                "start": 3415,
                "end": 3420
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
                    "name": "a4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3431,
                    "end": 3433
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3443,
                                "end": 3444
                              },
                              "typeArguments": null,
                              "start": 3443,
                              "end": 3444
                            },
                            "start": 3441,
                            "end": 3444
                          },
                          "start": 3440,
                          "end": 3444
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3449,
                            "end": 3450
                          },
                          "typeArguments": null,
                          "start": 3449,
                          "end": 3450
                        },
                        "start": 3446,
                        "end": 3450
                      },
                      "start": 3435,
                      "end": 3450
                    },
                    "start": 3433,
                    "end": 3450
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3431,
                  "end": 3451
                }
              ],
              "start": 3421,
              "end": 3458
            },
            "declare": false,
            "start": 3390,
            "end": 3458
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I14",
              "optional": false,
              "typeAnnotation": null,
              "start": 3474,
              "end": 3477
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
                    "start": 3478,
                    "end": 3479
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3478,
                  "end": 3479
                }
              ],
              "start": 3477,
              "end": 3480
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3489,
                  "end": 3494
                },
                "typeArguments": null,
                "start": 3489,
                "end": 3494
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
                    "name": "a4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3505,
                    "end": 3507
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3517,
                                "end": 3518
                              },
                              "typeArguments": null,
                              "start": 3517,
                              "end": 3518
                            },
                            "start": 3515,
                            "end": 3518
                          },
                          "start": 3514,
                          "end": 3518
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
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
                                "start": 3523,
                                "end": 3524
                              },
                              "typeArguments": null,
                              "start": 3523,
                              "end": 3524
                            },
                            "start": 3521,
                            "end": 3524
                          },
                          "start": 3520,
                          "end": 3524
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3529,
                            "end": 3530
                          },
                          "typeArguments": null,
                          "start": 3529,
                          "end": 3530
                        },
                        "start": 3526,
                        "end": 3530
                      },
                      "start": 3509,
                      "end": 3530
                    },
                    "start": 3507,
                    "end": 3530
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3505,
                  "end": 3531
                }
              ],
              "start": 3495,
              "end": 3538
            },
            "declare": false,
            "start": 3464,
            "end": 3538
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I15",
              "optional": false,
              "typeAnnotation": null,
              "start": 3555,
              "end": 3558
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
                    "start": 3559,
                    "end": 3560
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3559,
                  "end": 3560
                }
              ],
              "start": 3558,
              "end": 3561
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3570,
                  "end": 3575
                },
                "typeArguments": null,
                "start": 3570,
                "end": 3575
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
                    "name": "a5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3586,
                    "end": 3588
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3600,
                            "end": 3601
                          },
                          "typeArguments": null,
                          "start": 3600,
                          "end": 3601
                        },
                        "start": 3597,
                        "end": 3601
                      },
                      "start": 3590,
                      "end": 3601
                    },
                    "start": 3588,
                    "end": 3601
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3586,
                  "end": 3602
                }
              ],
              "start": 3576,
              "end": 3609
            },
            "declare": false,
            "start": 3545,
            "end": 3609
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I16",
              "optional": false,
              "typeAnnotation": null,
              "start": 3625,
              "end": 3628
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
                    "start": 3629,
                    "end": 3630
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3629,
                  "end": 3630
                }
              ],
              "start": 3628,
              "end": 3631
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3640,
                  "end": 3645
                },
                "typeArguments": null,
                "start": 3640,
                "end": 3645
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
                    "name": "a5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3656,
                    "end": 3658
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": true,
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
                                "start": 3669,
                                "end": 3670
                              },
                              "typeArguments": null,
                              "start": 3669,
                              "end": 3670
                            },
                            "start": 3667,
                            "end": 3670
                          },
                          "start": 3665,
                          "end": 3670
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": true,
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
                                "start": 3676,
                                "end": 3677
                              },
                              "typeArguments": null,
                              "start": 3676,
                              "end": 3677
                            },
                            "start": 3674,
                            "end": 3677
                          },
                          "start": 3672,
                          "end": 3677
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3682,
                            "end": 3683
                          },
                          "typeArguments": null,
                          "start": 3682,
                          "end": 3683
                        },
                        "start": 3679,
                        "end": 3683
                      },
                      "start": 3660,
                      "end": 3683
                    },
                    "start": 3658,
                    "end": 3683
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3656,
                  "end": 3684
                }
              ],
              "start": 3646,
              "end": 3691
            },
            "declare": false,
            "start": 3615,
            "end": 3691
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I17",
              "optional": false,
              "typeAnnotation": null,
              "start": 3707,
              "end": 3710
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
                    "start": 3711,
                    "end": 3712
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3711,
                  "end": 3712
                }
              ],
              "start": 3710,
              "end": 3713
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3722,
                  "end": 3727
                },
                "typeArguments": null,
                "start": 3722,
                "end": 3727
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
                    "name": "a5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3738,
                    "end": 3740
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3750,
                                "end": 3751
                              },
                              "typeArguments": null,
                              "start": 3750,
                              "end": 3751
                            },
                            "start": 3748,
                            "end": 3751
                          },
                          "start": 3747,
                          "end": 3751
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3756,
                            "end": 3757
                          },
                          "typeArguments": null,
                          "start": 3756,
                          "end": 3757
                        },
                        "start": 3753,
                        "end": 3757
                      },
                      "start": 3742,
                      "end": 3757
                    },
                    "start": 3740,
                    "end": 3757
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3738,
                  "end": 3758
                }
              ],
              "start": 3728,
              "end": 3764
            },
            "declare": false,
            "start": 3697,
            "end": 3764
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I18",
              "optional": false,
              "typeAnnotation": null,
              "start": 3780,
              "end": 3783
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
                    "start": 3784,
                    "end": 3785
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3784,
                  "end": 3785
                }
              ],
              "start": 3783,
              "end": 3786
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3795,
                  "end": 3800
                },
                "typeArguments": null,
                "start": 3795,
                "end": 3800
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
                    "name": "a5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3811,
                    "end": 3813
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3823,
                                "end": 3824
                              },
                              "typeArguments": null,
                              "start": 3823,
                              "end": 3824
                            },
                            "start": 3821,
                            "end": 3824
                          },
                          "start": 3820,
                          "end": 3824
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
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
                                "start": 3829,
                                "end": 3830
                              },
                              "typeArguments": null,
                              "start": 3829,
                              "end": 3830
                            },
                            "start": 3827,
                            "end": 3830
                          },
                          "start": 3826,
                          "end": 3830
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3835,
                            "end": 3836
                          },
                          "typeArguments": null,
                          "start": 3835,
                          "end": 3836
                        },
                        "start": 3832,
                        "end": 3836
                      },
                      "start": 3815,
                      "end": 3836
                    },
                    "start": 3813,
                    "end": 3836
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3811,
                  "end": 3837
                }
              ],
              "start": 3801,
              "end": 3844
            },
            "declare": false,
            "start": 3770,
            "end": 3844
          }
        ],
        "start": 2276,
        "end": 3846
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 2241,
      "end": 3846
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericSignaturesValid",
        "optional": false,
        "typeAnnotation": null,
        "start": 3858,
        "end": 3880
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 3898,
              "end": 3903
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3914,
                    "end": 3915
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 3922,
                              "end": 3923
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 3922,
                            "end": 3923
                          }
                        ],
                        "start": 3921,
                        "end": 3924
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3930,
                            "end": 3931
                          },
                          "typeArguments": null,
                          "start": 3930,
                          "end": 3931
                        },
                        "start": 3927,
                        "end": 3931
                      },
                      "start": 3917,
                      "end": 3931
                    },
                    "start": 3915,
                    "end": 3931
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3914,
                  "end": 3932
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3941,
                    "end": 3943
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 3950,
                              "end": 3951
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 3950,
                            "end": 3951
                          }
                        ],
                        "start": 3949,
                        "end": 3952
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": true,
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
                                "start": 3957,
                                "end": 3958
                              },
                              "typeArguments": null,
                              "start": 3957,
                              "end": 3958
                            },
                            "start": 3955,
                            "end": 3958
                          },
                          "start": 3953,
                          "end": 3958
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3963,
                            "end": 3964
                          },
                          "typeArguments": null,
                          "start": 3963,
                          "end": 3964
                        },
                        "start": 3960,
                        "end": 3964
                      },
                      "start": 3945,
                      "end": 3964
                    },
                    "start": 3943,
                    "end": 3964
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3941,
                  "end": 3965
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3974,
                    "end": 3976
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 3983,
                              "end": 3984
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 3983,
                            "end": 3984
                          }
                        ],
                        "start": 3982,
                        "end": 3985
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
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
                                "start": 3989,
                                "end": 3990
                              },
                              "typeArguments": null,
                              "start": 3989,
                              "end": 3990
                            },
                            "start": 3987,
                            "end": 3990
                          },
                          "start": 3986,
                          "end": 3990
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3995,
                            "end": 3996
                          },
                          "typeArguments": null,
                          "start": 3995,
                          "end": 3996
                        },
                        "start": 3992,
                        "end": 3996
                      },
                      "start": 3978,
                      "end": 3996
                    },
                    "start": 3976,
                    "end": 3996
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3974,
                  "end": 3997
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4006,
                    "end": 4008
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 4015,
                              "end": 4016
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4015,
                            "end": 4016
                          }
                        ],
                        "start": 4014,
                        "end": 4017
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
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
                                "start": 4021,
                                "end": 4022
                              },
                              "typeArguments": null,
                              "start": 4021,
                              "end": 4022
                            },
                            "start": 4019,
                            "end": 4022
                          },
                          "start": 4018,
                          "end": 4022
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": true,
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
                                "start": 4028,
                                "end": 4029
                              },
                              "typeArguments": null,
                              "start": 4028,
                              "end": 4029
                            },
                            "start": 4026,
                            "end": 4029
                          },
                          "start": 4024,
                          "end": 4029
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4034,
                            "end": 4035
                          },
                          "typeArguments": null,
                          "start": 4034,
                          "end": 4035
                        },
                        "start": 4031,
                        "end": 4035
                      },
                      "start": 4010,
                      "end": 4035
                    },
                    "start": 4008,
                    "end": 4035
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4006,
                  "end": 4036
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4045,
                    "end": 4047
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 4054,
                              "end": 4055
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4054,
                            "end": 4055
                          }
                        ],
                        "start": 4053,
                        "end": 4056
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": true,
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
                                "start": 4061,
                                "end": 4062
                              },
                              "typeArguments": null,
                              "start": 4061,
                              "end": 4062
                            },
                            "start": 4059,
                            "end": 4062
                          },
                          "start": 4057,
                          "end": 4062
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": true,
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
                                "start": 4068,
                                "end": 4069
                              },
                              "typeArguments": null,
                              "start": 4068,
                              "end": 4069
                            },
                            "start": 4066,
                            "end": 4069
                          },
                          "start": 4064,
                          "end": 4069
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4074,
                            "end": 4075
                          },
                          "typeArguments": null,
                          "start": 4074,
                          "end": 4075
                        },
                        "start": 4071,
                        "end": 4075
                      },
                      "start": 4049,
                      "end": 4075
                    },
                    "start": 4047,
                    "end": 4075
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4045,
                  "end": 4076
                }
              ],
              "start": 3904,
              "end": 4082
            },
            "declare": false,
            "start": 3888,
            "end": 4082
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I1",
              "optional": false,
              "typeAnnotation": null,
              "start": 4116,
              "end": 4118
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4127,
                  "end": 4132
                },
                "typeArguments": null,
                "start": 4127,
                "end": 4132
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
                    "start": 4143,
                    "end": 4144
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 4151,
                              "end": 4152
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4151,
                            "end": 4152
                          }
                        ],
                        "start": 4150,
                        "end": 4153
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4159,
                            "end": 4160
                          },
                          "typeArguments": null,
                          "start": 4159,
                          "end": 4160
                        },
                        "start": 4156,
                        "end": 4160
                      },
                      "start": 4146,
                      "end": 4160
                    },
                    "start": 4144,
                    "end": 4160
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4143,
                  "end": 4161
                }
              ],
              "start": 4133,
              "end": 4205
            },
            "declare": false,
            "start": 4106,
            "end": 4205
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I2",
              "optional": false,
              "typeAnnotation": null,
              "start": 4221,
              "end": 4223
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4232,
                  "end": 4237
                },
                "typeArguments": null,
                "start": 4232,
                "end": 4237
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
                    "start": 4248,
                    "end": 4249
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 4256,
                              "end": 4257
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4256,
                            "end": 4257
                          }
                        ],
                        "start": 4255,
                        "end": 4258
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": true,
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
                                "start": 4263,
                                "end": 4264
                              },
                              "typeArguments": null,
                              "start": 4263,
                              "end": 4264
                            },
                            "start": 4261,
                            "end": 4264
                          },
                          "start": 4259,
                          "end": 4264
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4269,
                            "end": 4270
                          },
                          "typeArguments": null,
                          "start": 4269,
                          "end": 4270
                        },
                        "start": 4266,
                        "end": 4270
                      },
                      "start": 4251,
                      "end": 4270
                    },
                    "start": 4249,
                    "end": 4270
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4248,
                  "end": 4271
                }
              ],
              "start": 4238,
              "end": 4372
            },
            "declare": false,
            "start": 4211,
            "end": 4372
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I3",
              "optional": false,
              "typeAnnotation": null,
              "start": 4388,
              "end": 4390
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4399,
                  "end": 4404
                },
                "typeArguments": null,
                "start": 4399,
                "end": 4404
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
                    "start": 4415,
                    "end": 4416
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 4423,
                              "end": 4424
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4423,
                            "end": 4424
                          }
                        ],
                        "start": 4422,
                        "end": 4425
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
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
                                "start": 4429,
                                "end": 4430
                              },
                              "typeArguments": null,
                              "start": 4429,
                              "end": 4430
                            },
                            "start": 4427,
                            "end": 4430
                          },
                          "start": 4426,
                          "end": 4430
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4435,
                            "end": 4436
                          },
                          "typeArguments": null,
                          "start": 4435,
                          "end": 4436
                        },
                        "start": 4432,
                        "end": 4436
                      },
                      "start": 4418,
                      "end": 4436
                    },
                    "start": 4416,
                    "end": 4436
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4415,
                  "end": 4437
                }
              ],
              "start": 4405,
              "end": 4538
            },
            "declare": false,
            "start": 4378,
            "end": 4538
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I4",
              "optional": false,
              "typeAnnotation": null,
              "start": 4555,
              "end": 4557
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4566,
                  "end": 4571
                },
                "typeArguments": null,
                "start": 4566,
                "end": 4571
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
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4582,
                    "end": 4584
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 4591,
                              "end": 4592
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4591,
                            "end": 4592
                          }
                        ],
                        "start": 4590,
                        "end": 4593
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4599,
                            "end": 4600
                          },
                          "typeArguments": null,
                          "start": 4599,
                          "end": 4600
                        },
                        "start": 4596,
                        "end": 4600
                      },
                      "start": 4586,
                      "end": 4600
                    },
                    "start": 4584,
                    "end": 4600
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4582,
                  "end": 4601
                }
              ],
              "start": 4572,
              "end": 4702
            },
            "declare": false,
            "start": 4545,
            "end": 4702
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I5",
              "optional": false,
              "typeAnnotation": null,
              "start": 4718,
              "end": 4720
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4729,
                  "end": 4734
                },
                "typeArguments": null,
                "start": 4729,
                "end": 4734
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
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4745,
                    "end": 4747
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 4754,
                              "end": 4755
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4754,
                            "end": 4755
                          }
                        ],
                        "start": 4753,
                        "end": 4756
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": true,
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
                                "start": 4761,
                                "end": 4762
                              },
                              "typeArguments": null,
                              "start": 4761,
                              "end": 4762
                            },
                            "start": 4759,
                            "end": 4762
                          },
                          "start": 4757,
                          "end": 4762
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4767,
                            "end": 4768
                          },
                          "typeArguments": null,
                          "start": 4767,
                          "end": 4768
                        },
                        "start": 4764,
                        "end": 4768
                      },
                      "start": 4749,
                      "end": 4768
                    },
                    "start": 4747,
                    "end": 4768
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4745,
                  "end": 4769
                }
              ],
              "start": 4735,
              "end": 4792
            },
            "declare": false,
            "start": 4708,
            "end": 4792
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I6",
              "optional": false,
              "typeAnnotation": null,
              "start": 4808,
              "end": 4810
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4819,
                  "end": 4824
                },
                "typeArguments": null,
                "start": 4819,
                "end": 4824
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
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4835,
                    "end": 4837
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 4844,
                              "end": 4845
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4844,
                            "end": 4845
                          }
                        ],
                        "start": 4843,
                        "end": 4846
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
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
                                "start": 4850,
                                "end": 4851
                              },
                              "typeArguments": null,
                              "start": 4850,
                              "end": 4851
                            },
                            "start": 4848,
                            "end": 4851
                          },
                          "start": 4847,
                          "end": 4851
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4856,
                            "end": 4857
                          },
                          "typeArguments": null,
                          "start": 4856,
                          "end": 4857
                        },
                        "start": 4853,
                        "end": 4857
                      },
                      "start": 4839,
                      "end": 4857
                    },
                    "start": 4837,
                    "end": 4857
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4835,
                  "end": 4858
                }
              ],
              "start": 4825,
              "end": 4893
            },
            "declare": false,
            "start": 4798,
            "end": 4893
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I7",
              "optional": false,
              "typeAnnotation": null,
              "start": 4910,
              "end": 4912
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4921,
                  "end": 4926
                },
                "typeArguments": null,
                "start": 4921,
                "end": 4926
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
                    "name": "a3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4937,
                    "end": 4939
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 4946,
                              "end": 4947
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4946,
                            "end": 4947
                          }
                        ],
                        "start": 4945,
                        "end": 4948
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4954,
                            "end": 4955
                          },
                          "typeArguments": null,
                          "start": 4954,
                          "end": 4955
                        },
                        "start": 4951,
                        "end": 4955
                      },
                      "start": 4941,
                      "end": 4955
                    },
                    "start": 4939,
                    "end": 4955
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4937,
                  "end": 4956
                }
              ],
              "start": 4927,
              "end": 4991
            },
            "declare": false,
            "start": 4900,
            "end": 4991
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I8",
              "optional": false,
              "typeAnnotation": null,
              "start": 5007,
              "end": 5009
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5018,
                  "end": 5023
                },
                "typeArguments": null,
                "start": 5018,
                "end": 5023
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
                    "name": "a3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5034,
                    "end": 5036
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 5043,
                              "end": 5044
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 5043,
                            "end": 5044
                          }
                        ],
                        "start": 5042,
                        "end": 5045
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": true,
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
                                "start": 5050,
                                "end": 5051
                              },
                              "typeArguments": null,
                              "start": 5050,
                              "end": 5051
                            },
                            "start": 5048,
                            "end": 5051
                          },
                          "start": 5046,
                          "end": 5051
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5056,
                            "end": 5057
                          },
                          "typeArguments": null,
                          "start": 5056,
                          "end": 5057
                        },
                        "start": 5053,
                        "end": 5057
                      },
                      "start": 5038,
                      "end": 5057
                    },
                    "start": 5036,
                    "end": 5057
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5034,
                  "end": 5058
                }
              ],
              "start": 5024,
              "end": 5136
            },
            "declare": false,
            "start": 4997,
            "end": 5136
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I9",
              "optional": false,
              "typeAnnotation": null,
              "start": 5152,
              "end": 5154
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5163,
                  "end": 5168
                },
                "typeArguments": null,
                "start": 5163,
                "end": 5168
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
                    "name": "a3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5179,
                    "end": 5181
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 5188,
                              "end": 5189
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 5188,
                            "end": 5189
                          }
                        ],
                        "start": 5187,
                        "end": 5190
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
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
                                "start": 5194,
                                "end": 5195
                              },
                              "typeArguments": null,
                              "start": 5194,
                              "end": 5195
                            },
                            "start": 5192,
                            "end": 5195
                          },
                          "start": 5191,
                          "end": 5195
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5200,
                            "end": 5201
                          },
                          "typeArguments": null,
                          "start": 5200,
                          "end": 5201
                        },
                        "start": 5197,
                        "end": 5201
                      },
                      "start": 5183,
                      "end": 5201
                    },
                    "start": 5181,
                    "end": 5201
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5179,
                  "end": 5202
                }
              ],
              "start": 5169,
              "end": 5257
            },
            "declare": false,
            "start": 5142,
            "end": 5257
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I10",
              "optional": false,
              "typeAnnotation": null,
              "start": 5273,
              "end": 5276
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5285,
                  "end": 5290
                },
                "typeArguments": null,
                "start": 5285,
                "end": 5290
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
                    "name": "a3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5301,
                    "end": 5303
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 5310,
                              "end": 5311
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 5310,
                            "end": 5311
                          }
                        ],
                        "start": 5309,
                        "end": 5312
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
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
                                "start": 5316,
                                "end": 5317
                              },
                              "typeArguments": null,
                              "start": 5316,
                              "end": 5317
                            },
                            "start": 5314,
                            "end": 5317
                          },
                          "start": 5313,
                          "end": 5317
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
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
                                "start": 5322,
                                "end": 5323
                              },
                              "typeArguments": null,
                              "start": 5322,
                              "end": 5323
                            },
                            "start": 5320,
                            "end": 5323
                          },
                          "start": 5319,
                          "end": 5323
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5328,
                            "end": 5329
                          },
                          "typeArguments": null,
                          "start": 5328,
                          "end": 5329
                        },
                        "start": 5325,
                        "end": 5329
                      },
                      "start": 5305,
                      "end": 5329
                    },
                    "start": 5303,
                    "end": 5329
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5301,
                  "end": 5330
                }
              ],
              "start": 5291,
              "end": 5372
            },
            "declare": false,
            "start": 5263,
            "end": 5372
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I11",
              "optional": false,
              "typeAnnotation": null,
              "start": 5389,
              "end": 5392
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5401,
                  "end": 5406
                },
                "typeArguments": null,
                "start": 5401,
                "end": 5406
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
                    "name": "a4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5417,
                    "end": 5419
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 5426,
                              "end": 5427
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 5426,
                            "end": 5427
                          }
                        ],
                        "start": 5425,
                        "end": 5428
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5434,
                            "end": 5435
                          },
                          "typeArguments": null,
                          "start": 5434,
                          "end": 5435
                        },
                        "start": 5431,
                        "end": 5435
                      },
                      "start": 5421,
                      "end": 5435
                    },
                    "start": 5419,
                    "end": 5435
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5417,
                  "end": 5436
                }
              ],
              "start": 5407,
              "end": 5537
            },
            "declare": false,
            "start": 5379,
            "end": 5537
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I12",
              "optional": false,
              "typeAnnotation": null,
              "start": 5553,
              "end": 5556
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5565,
                  "end": 5570
                },
                "typeArguments": null,
                "start": 5565,
                "end": 5570
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
                    "name": "a4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5581,
                    "end": 5583
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 5590,
                              "end": 5591
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 5590,
                            "end": 5591
                          }
                        ],
                        "start": 5589,
                        "end": 5592
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": true,
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
                                "start": 5597,
                                "end": 5598
                              },
                              "typeArguments": null,
                              "start": 5597,
                              "end": 5598
                            },
                            "start": 5595,
                            "end": 5598
                          },
                          "start": 5593,
                          "end": 5598
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": true,
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
                                "start": 5604,
                                "end": 5605
                              },
                              "typeArguments": null,
                              "start": 5604,
                              "end": 5605
                            },
                            "start": 5602,
                            "end": 5605
                          },
                          "start": 5600,
                          "end": 5605
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5610,
                            "end": 5611
                          },
                          "typeArguments": null,
                          "start": 5610,
                          "end": 5611
                        },
                        "start": 5607,
                        "end": 5611
                      },
                      "start": 5585,
                      "end": 5611
                    },
                    "start": 5583,
                    "end": 5611
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5581,
                  "end": 5612
                }
              ],
              "start": 5571,
              "end": 5647
            },
            "declare": false,
            "start": 5543,
            "end": 5647
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I13",
              "optional": false,
              "typeAnnotation": null,
              "start": 5663,
              "end": 5666
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5675,
                  "end": 5680
                },
                "typeArguments": null,
                "start": 5675,
                "end": 5680
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
                    "name": "a4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5691,
                    "end": 5693
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 5700,
                              "end": 5701
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 5700,
                            "end": 5701
                          }
                        ],
                        "start": 5699,
                        "end": 5702
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
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
                                "start": 5706,
                                "end": 5707
                              },
                              "typeArguments": null,
                              "start": 5706,
                              "end": 5707
                            },
                            "start": 5704,
                            "end": 5707
                          },
                          "start": 5703,
                          "end": 5707
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5712,
                            "end": 5713
                          },
                          "typeArguments": null,
                          "start": 5712,
                          "end": 5713
                        },
                        "start": 5709,
                        "end": 5713
                      },
                      "start": 5695,
                      "end": 5713
                    },
                    "start": 5693,
                    "end": 5713
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5691,
                  "end": 5714
                }
              ],
              "start": 5681,
              "end": 5753
            },
            "declare": false,
            "start": 5653,
            "end": 5753
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I14",
              "optional": false,
              "typeAnnotation": null,
              "start": 5769,
              "end": 5772
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5781,
                  "end": 5786
                },
                "typeArguments": null,
                "start": 5781,
                "end": 5786
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
                    "name": "a4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5797,
                    "end": 5799
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 5806,
                              "end": 5807
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 5806,
                            "end": 5807
                          }
                        ],
                        "start": 5805,
                        "end": 5808
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
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
                                "start": 5812,
                                "end": 5813
                              },
                              "typeArguments": null,
                              "start": 5812,
                              "end": 5813
                            },
                            "start": 5810,
                            "end": 5813
                          },
                          "start": 5809,
                          "end": 5813
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
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
                                "start": 5818,
                                "end": 5819
                              },
                              "typeArguments": null,
                              "start": 5818,
                              "end": 5819
                            },
                            "start": 5816,
                            "end": 5819
                          },
                          "start": 5815,
                          "end": 5819
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5824,
                            "end": 5825
                          },
                          "typeArguments": null,
                          "start": 5824,
                          "end": 5825
                        },
                        "start": 5821,
                        "end": 5825
                      },
                      "start": 5801,
                      "end": 5825
                    },
                    "start": 5799,
                    "end": 5825
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5797,
                  "end": 5826
                }
              ],
              "start": 5787,
              "end": 5862
            },
            "declare": false,
            "start": 5759,
            "end": 5862
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I15",
              "optional": false,
              "typeAnnotation": null,
              "start": 5879,
              "end": 5882
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5891,
                  "end": 5896
                },
                "typeArguments": null,
                "start": 5891,
                "end": 5896
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
                    "name": "a5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5907,
                    "end": 5909
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 5916,
                              "end": 5917
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 5916,
                            "end": 5917
                          }
                        ],
                        "start": 5915,
                        "end": 5918
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5924,
                            "end": 5925
                          },
                          "typeArguments": null,
                          "start": 5924,
                          "end": 5925
                        },
                        "start": 5921,
                        "end": 5925
                      },
                      "start": 5911,
                      "end": 5925
                    },
                    "start": 5909,
                    "end": 5925
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5907,
                  "end": 5926
                }
              ],
              "start": 5897,
              "end": 6027
            },
            "declare": false,
            "start": 5869,
            "end": 6027
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I16",
              "optional": false,
              "typeAnnotation": null,
              "start": 6043,
              "end": 6046
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6055,
                  "end": 6060
                },
                "typeArguments": null,
                "start": 6055,
                "end": 6060
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
                    "name": "a5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6071,
                    "end": 6073
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 6080,
                              "end": 6081
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 6080,
                            "end": 6081
                          }
                        ],
                        "start": 6079,
                        "end": 6082
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": true,
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
                                "start": 6087,
                                "end": 6088
                              },
                              "typeArguments": null,
                              "start": 6087,
                              "end": 6088
                            },
                            "start": 6085,
                            "end": 6088
                          },
                          "start": 6083,
                          "end": 6088
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": true,
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
                                "start": 6094,
                                "end": 6095
                              },
                              "typeArguments": null,
                              "start": 6094,
                              "end": 6095
                            },
                            "start": 6092,
                            "end": 6095
                          },
                          "start": 6090,
                          "end": 6095
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6100,
                            "end": 6101
                          },
                          "typeArguments": null,
                          "start": 6100,
                          "end": 6101
                        },
                        "start": 6097,
                        "end": 6101
                      },
                      "start": 6075,
                      "end": 6101
                    },
                    "start": 6073,
                    "end": 6101
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 6071,
                  "end": 6102
                }
              ],
              "start": 6061,
              "end": 6137
            },
            "declare": false,
            "start": 6033,
            "end": 6137
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I17",
              "optional": false,
              "typeAnnotation": null,
              "start": 6153,
              "end": 6156
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6165,
                  "end": 6170
                },
                "typeArguments": null,
                "start": 6165,
                "end": 6170
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
                    "name": "a5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6181,
                    "end": 6183
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 6190,
                              "end": 6191
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 6190,
                            "end": 6191
                          }
                        ],
                        "start": 6189,
                        "end": 6192
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
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
                                "start": 6196,
                                "end": 6197
                              },
                              "typeArguments": null,
                              "start": 6196,
                              "end": 6197
                            },
                            "start": 6194,
                            "end": 6197
                          },
                          "start": 6193,
                          "end": 6197
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6202,
                            "end": 6203
                          },
                          "typeArguments": null,
                          "start": 6202,
                          "end": 6203
                        },
                        "start": 6199,
                        "end": 6203
                      },
                      "start": 6185,
                      "end": 6203
                    },
                    "start": 6183,
                    "end": 6203
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 6181,
                  "end": 6204
                }
              ],
              "start": 6171,
              "end": 6242
            },
            "declare": false,
            "start": 6143,
            "end": 6242
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I18",
              "optional": false,
              "typeAnnotation": null,
              "start": 6258,
              "end": 6261
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6270,
                  "end": 6275
                },
                "typeArguments": null,
                "start": 6270,
                "end": 6275
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
                    "name": "a5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6286,
                    "end": 6288
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 6295,
                              "end": 6296
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 6295,
                            "end": 6296
                          }
                        ],
                        "start": 6294,
                        "end": 6297
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
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
                                "start": 6301,
                                "end": 6302
                              },
                              "typeArguments": null,
                              "start": 6301,
                              "end": 6302
                            },
                            "start": 6299,
                            "end": 6302
                          },
                          "start": 6298,
                          "end": 6302
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
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
                                "start": 6307,
                                "end": 6308
                              },
                              "typeArguments": null,
                              "start": 6307,
                              "end": 6308
                            },
                            "start": 6305,
                            "end": 6308
                          },
                          "start": 6304,
                          "end": 6308
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6313,
                            "end": 6314
                          },
                          "typeArguments": null,
                          "start": 6313,
                          "end": 6314
                        },
                        "start": 6310,
                        "end": 6314
                      },
                      "start": 6290,
                      "end": 6314
                    },
                    "start": 6288,
                    "end": 6314
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 6286,
                  "end": 6315
                }
              ],
              "start": 6276,
              "end": 6351
            },
            "declare": false,
            "start": 6248,
            "end": 6351
          }
        ],
        "start": 3881,
        "end": 6353
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 3848,
      "end": 6353
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 102,
  "end": 6353
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 102,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "ClassTypeParam",
    "start": 112,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 127,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 133,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 143,
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
    "value": "T",
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
    "value": "{",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 162,
    "end": 163
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 164,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 171,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 185,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 187,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 189,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 201,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 215,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 217,
    "end": 218
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 219,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 230,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 244,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 246,
    "end": 247
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 248,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 266,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 280,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 282,
    "end": 283
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 284,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 303,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 313,
    "end": 314
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 320,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 330,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 334,
    "end": 335
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 336,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 344,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 363,
    "end": 364
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 365,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 372,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 415,
    "end": 416
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 422,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 432,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 436,
    "end": 437
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 438,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 446,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "{",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 465,
    "end": 466
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 467,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 479,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 522,
    "end": 523
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 529,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "I3",
    "start": 539,
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
    "value": "T",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 543,
    "end": 544
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 545,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 553,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 557,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 561,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 572,
    "end": 573
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 574,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 578,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 580,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 585,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 630,
    "end": 631
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 638,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "I4",
    "start": 648,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 652,
    "end": 653
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 654,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 662,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 666,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 667,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 680,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 682,
    "end": 683
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 684,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 691,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 734,
    "end": 735
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 741,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "I5",
    "start": 751,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 755,
    "end": 756
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 757,
    "end": 764
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 765,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 769,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 773,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 783,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 785,
    "end": 786
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 787,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 791,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 792,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 794,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 799,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 842,
    "end": 843
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 849,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "I6",
    "start": 859,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 861,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 863,
    "end": 864
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 865,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 873,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 877,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 881,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "a2",
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
    "type": "Keyword",
    "value": "new",
    "start": 895,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 899,
    "end": 900
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 900,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 901,
    "end": 902
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 903,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 904,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 906,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 910,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 945,
    "end": 946
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 953,
    "end": 962
  },
  {
    "type": "Identifier",
    "value": "I7",
    "start": 963,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 965,
    "end": 966
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 967,
    "end": 968
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 969,
    "end": 976
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 977,
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
    "value": "T",
    "start": 982,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 983,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 985,
    "end": 986
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 995,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 997,
    "end": 998
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 999,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1006,
    "end": 1008
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1052,
    "end": 1061
  },
  {
    "type": "Identifier",
    "value": "I8",
    "start": 1062,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1068,
    "end": 1075
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1076,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1094,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1098,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1110,
    "end": 1112
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Punctuator",
    "value": "}",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1156,
    "end": 1165
  },
  {
    "type": "Identifier",
    "value": "I9",
    "start": 1166,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1172,
    "end": 1179
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1180,
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
    "value": "T",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1198,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1202,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1213,
    "end": 1215
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1263,
    "end": 1272
  },
  {
    "type": "Identifier",
    "value": "I10",
    "start": 1273,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1280,
    "end": 1287
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1288,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1306,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1310,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1327,
    "end": 1329
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1381,
    "end": 1390
  },
  {
    "type": "Identifier",
    "value": "I11",
    "start": 1391,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1398,
    "end": 1405
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1406,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1424,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1428,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1435,
    "end": 1437
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1481,
    "end": 1490
  },
  {
    "type": "Identifier",
    "value": "I12",
    "start": 1491,
    "end": 1494
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1498,
    "end": 1505
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1506,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1512,
    "end": 1513
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1524,
    "end": 1526
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1528,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1547,
    "end": 1549
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1586,
    "end": 1587
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1593,
    "end": 1602
  },
  {
    "type": "Identifier",
    "value": "I13",
    "start": 1603,
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
    "type": "Punctuator",
    "value": ">",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1610,
    "end": 1617
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1618,
    "end": 1622
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1636,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1640,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1651,
    "end": 1653
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1654,
    "end": 1655
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1701,
    "end": 1710
  },
  {
    "type": "Identifier",
    "value": "I14",
    "start": 1711,
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
    "value": "T",
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
    "type": "Keyword",
    "value": "extends",
    "start": 1718,
    "end": 1725
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1726,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1731,
    "end": 1732
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1732,
    "end": 1733
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1734,
    "end": 1735
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1744,
    "end": 1746
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1748,
    "end": 1751
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1756,
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
    "value": "y",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1760,
    "end": 1761
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1762,
    "end": 1763
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1763,
    "end": 1764
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1765,
    "end": 1767
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1768,
    "end": 1769
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1769,
    "end": 1770
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1813,
    "end": 1822
  },
  {
    "type": "Identifier",
    "value": "I15",
    "start": 1823,
    "end": 1826
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1830,
    "end": 1837
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1838,
    "end": 1842
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 1856,
    "end": 1858
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1858,
    "end": 1859
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1860,
    "end": 1863
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1864,
    "end": 1865
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1865,
    "end": 1866
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1867,
    "end": 1869
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1870,
    "end": 1871
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1913,
    "end": 1922
  },
  {
    "type": "Identifier",
    "value": "I16",
    "start": 1923,
    "end": 1926
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1926,
    "end": 1927
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1927,
    "end": 1928
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1928,
    "end": 1929
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1930,
    "end": 1937
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1938,
    "end": 1942
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1942,
    "end": 1943
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1944,
    "end": 1945
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1946,
    "end": 1947
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 1956,
    "end": 1958
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1958,
    "end": 1959
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1960,
    "end": 1963
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1964,
    "end": 1965
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1965,
    "end": 1966
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1966,
    "end": 1967
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1969,
    "end": 1970
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1970,
    "end": 1971
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1972,
    "end": 1973
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1973,
    "end": 1974
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1974,
    "end": 1975
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1977,
    "end": 1978
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1979,
    "end": 1981
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1982,
    "end": 1983
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1983,
    "end": 1984
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2018,
    "end": 2019
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2025,
    "end": 2034
  },
  {
    "type": "Identifier",
    "value": "I17",
    "start": 2035,
    "end": 2038
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2038,
    "end": 2039
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2039,
    "end": 2040
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2040,
    "end": 2041
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2042,
    "end": 2049
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2050,
    "end": 2054
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2054,
    "end": 2055
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2055,
    "end": 2056
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2056,
    "end": 2057
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2058,
    "end": 2059
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 2068,
    "end": 2070
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2070,
    "end": 2071
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2072,
    "end": 2075
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2077,
    "end": 2078
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2078,
    "end": 2079
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2080,
    "end": 2081
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2081,
    "end": 2082
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2083,
    "end": 2085
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2086,
    "end": 2087
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2087,
    "end": 2088
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2125,
    "end": 2126
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2132,
    "end": 2141
  },
  {
    "type": "Identifier",
    "value": "I18",
    "start": 2142,
    "end": 2145
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2145,
    "end": 2146
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2146,
    "end": 2147
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2147,
    "end": 2148
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2149,
    "end": 2156
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2157,
    "end": 2161
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2161,
    "end": 2162
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2162,
    "end": 2163
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2163,
    "end": 2164
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2165,
    "end": 2166
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 2175,
    "end": 2177
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2177,
    "end": 2178
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2179,
    "end": 2182
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2183,
    "end": 2184
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2184,
    "end": 2185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2185,
    "end": 2186
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2187,
    "end": 2188
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2188,
    "end": 2189
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2190,
    "end": 2191
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2191,
    "end": 2192
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2193,
    "end": 2194
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2194,
    "end": 2195
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2196,
    "end": 2198
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2199,
    "end": 2200
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2200,
    "end": 2201
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2236,
    "end": 2237
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2238,
    "end": 2239
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 2241,
    "end": 2250
  },
  {
    "type": "Identifier",
    "value": "GenericSignaturesInvalid",
    "start": 2251,
    "end": 2275
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2276,
    "end": 2277
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2314,
    "end": 2323
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 2324,
    "end": 2329
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2330,
    "end": 2331
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2340,
    "end": 2341
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2341,
    "end": 2342
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2343,
    "end": 2346
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2347,
    "end": 2348
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2348,
    "end": 2349
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2349,
    "end": 2350
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2350,
    "end": 2351
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
    "value": "T",
    "start": 2356,
    "end": 2357
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2357,
    "end": 2358
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 2367,
    "end": 2369
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2369,
    "end": 2370
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2371,
    "end": 2374
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2375,
    "end": 2376
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2376,
    "end": 2377
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2377,
    "end": 2378
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2378,
    "end": 2379
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2379,
    "end": 2380
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2380,
    "end": 2381
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2381,
    "end": 2382
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2383,
    "end": 2384
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2384,
    "end": 2385
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2386,
    "end": 2388
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2389,
    "end": 2390
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2390,
    "end": 2391
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 2400,
    "end": 2402
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2402,
    "end": 2403
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2404,
    "end": 2407
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2408,
    "end": 2409
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2409,
    "end": 2410
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2410,
    "end": 2411
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2411,
    "end": 2412
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2412,
    "end": 2413
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2413,
    "end": 2414
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2415,
    "end": 2416
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2416,
    "end": 2417
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2418,
    "end": 2420
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2421,
    "end": 2422
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2422,
    "end": 2423
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 2432,
    "end": 2434
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2434,
    "end": 2435
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2436,
    "end": 2439
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2440,
    "end": 2441
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2441,
    "end": 2442
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2442,
    "end": 2443
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2443,
    "end": 2444
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2444,
    "end": 2445
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2445,
    "end": 2446
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2447,
    "end": 2448
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2448,
    "end": 2449
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2450,
    "end": 2451
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2451,
    "end": 2452
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2452,
    "end": 2453
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2454,
    "end": 2455
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2455,
    "end": 2456
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2457,
    "end": 2459
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2460,
    "end": 2461
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2461,
    "end": 2462
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 2471,
    "end": 2473
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2473,
    "end": 2474
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2475,
    "end": 2478
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2479,
    "end": 2480
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2480,
    "end": 2481
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2481,
    "end": 2482
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2482,
    "end": 2483
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2483,
    "end": 2484
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2484,
    "end": 2485
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2485,
    "end": 2486
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2487,
    "end": 2488
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2488,
    "end": 2489
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2490,
    "end": 2491
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2491,
    "end": 2492
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2492,
    "end": 2493
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2494,
    "end": 2495
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2495,
    "end": 2496
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2497,
    "end": 2499
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2500,
    "end": 2501
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2501,
    "end": 2502
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2507,
    "end": 2508
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2514,
    "end": 2523
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 2524,
    "end": 2526
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2526,
    "end": 2527
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2527,
    "end": 2528
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2528,
    "end": 2529
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2530,
    "end": 2537
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 2538,
    "end": 2543
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2544,
    "end": 2545
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2554,
    "end": 2555
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2555,
    "end": 2556
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2557,
    "end": 2560
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2561,
    "end": 2562
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2562,
    "end": 2563
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2564,
    "end": 2566
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2567,
    "end": 2568
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2568,
    "end": 2569
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2575,
    "end": 2576
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2582,
    "end": 2591
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 2592,
    "end": 2594
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2594,
    "end": 2595
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2595,
    "end": 2596
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2596,
    "end": 2597
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2598,
    "end": 2605
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 2606,
    "end": 2611
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2612,
    "end": 2613
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2622,
    "end": 2623
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2623,
    "end": 2624
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2625,
    "end": 2628
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2629,
    "end": 2630
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2630,
    "end": 2631
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2631,
    "end": 2632
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2632,
    "end": 2633
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2634,
    "end": 2635
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2635,
    "end": 2636
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2637,
    "end": 2639
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2640,
    "end": 2641
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2641,
    "end": 2642
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2647,
    "end": 2648
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2654,
    "end": 2663
  },
  {
    "type": "Identifier",
    "value": "I3",
    "start": 2664,
    "end": 2666
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2666,
    "end": 2667
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2667,
    "end": 2668
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2668,
    "end": 2669
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2670,
    "end": 2677
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 2678,
    "end": 2683
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2684,
    "end": 2685
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2694,
    "end": 2695
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2695,
    "end": 2696
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2697,
    "end": 2700
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2701,
    "end": 2702
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2702,
    "end": 2703
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2703,
    "end": 2704
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2705,
    "end": 2706
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2706,
    "end": 2707
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2708,
    "end": 2710
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2711,
    "end": 2712
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2712,
    "end": 2713
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2719,
    "end": 2720
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2727,
    "end": 2736
  },
  {
    "type": "Identifier",
    "value": "I4",
    "start": 2737,
    "end": 2739
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2739,
    "end": 2740
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2740,
    "end": 2741
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2741,
    "end": 2742
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2743,
    "end": 2750
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 2751,
    "end": 2756
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2757,
    "end": 2758
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 2767,
    "end": 2769
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2769,
    "end": 2770
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2771,
    "end": 2774
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2775,
    "end": 2776
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2776,
    "end": 2777
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2778,
    "end": 2780
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2781,
    "end": 2782
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2782,
    "end": 2783
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2789,
    "end": 2790
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2796,
    "end": 2805
  },
  {
    "type": "Identifier",
    "value": "I5",
    "start": 2806,
    "end": 2808
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2808,
    "end": 2809
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2809,
    "end": 2810
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2810,
    "end": 2811
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2812,
    "end": 2819
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 2820,
    "end": 2825
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2826,
    "end": 2827
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 2836,
    "end": 2838
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2838,
    "end": 2839
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2840,
    "end": 2843
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2844,
    "end": 2845
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2845,
    "end": 2846
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2846,
    "end": 2847
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2847,
    "end": 2848
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2849,
    "end": 2850
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2850,
    "end": 2851
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2852,
    "end": 2854
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2855,
    "end": 2856
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2861,
    "end": 2862
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2868,
    "end": 2877
  },
  {
    "type": "Identifier",
    "value": "I6",
    "start": 2878,
    "end": 2880
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2880,
    "end": 2881
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2881,
    "end": 2882
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2882,
    "end": 2883
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2884,
    "end": 2891
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 2892,
    "end": 2897
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2898,
    "end": 2899
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 2908,
    "end": 2910
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2910,
    "end": 2911
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2912,
    "end": 2915
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2916,
    "end": 2917
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2917,
    "end": 2918
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2918,
    "end": 2919
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2920,
    "end": 2921
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2921,
    "end": 2922
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2923,
    "end": 2925
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2926,
    "end": 2927
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2927,
    "end": 2928
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2933,
    "end": 2934
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2941,
    "end": 2950
  },
  {
    "type": "Identifier",
    "value": "I7",
    "start": 2951,
    "end": 2953
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2953,
    "end": 2954
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2954,
    "end": 2955
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2955,
    "end": 2956
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2957,
    "end": 2964
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 2965,
    "end": 2970
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2971,
    "end": 2972
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 2981,
    "end": 2983
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2983,
    "end": 2984
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2985,
    "end": 2988
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2989,
    "end": 2990
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2990,
    "end": 2991
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2992,
    "end": 2994
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2995,
    "end": 2996
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2996,
    "end": 2997
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3002,
    "end": 3003
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3009,
    "end": 3018
  },
  {
    "type": "Identifier",
    "value": "I8",
    "start": 3019,
    "end": 3021
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3021,
    "end": 3022
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3022,
    "end": 3023
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3023,
    "end": 3024
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3025,
    "end": 3032
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 3033,
    "end": 3038
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3039,
    "end": 3040
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 3049,
    "end": 3051
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3051,
    "end": 3052
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3053,
    "end": 3056
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3057,
    "end": 3058
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3058,
    "end": 3059
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3059,
    "end": 3060
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3060,
    "end": 3061
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3062,
    "end": 3063
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3063,
    "end": 3064
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3065,
    "end": 3067
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3068,
    "end": 3069
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3069,
    "end": 3070
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3076,
    "end": 3077
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3083,
    "end": 3092
  },
  {
    "type": "Identifier",
    "value": "I9",
    "start": 3093,
    "end": 3095
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3095,
    "end": 3096
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3096,
    "end": 3097
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3097,
    "end": 3098
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3099,
    "end": 3106
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 3107,
    "end": 3112
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3113,
    "end": 3114
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 3123,
    "end": 3125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3125,
    "end": 3126
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3127,
    "end": 3130
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3131,
    "end": 3132
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3132,
    "end": 3133
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3133,
    "end": 3134
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3135,
    "end": 3136
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3136,
    "end": 3137
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3138,
    "end": 3140
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3141,
    "end": 3142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3142,
    "end": 3143
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3149,
    "end": 3150
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3156,
    "end": 3165
  },
  {
    "type": "Identifier",
    "value": "I10",
    "start": 3166,
    "end": 3169
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3169,
    "end": 3170
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3170,
    "end": 3171
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3171,
    "end": 3172
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3173,
    "end": 3180
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 3181,
    "end": 3186
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3187,
    "end": 3188
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 3197,
    "end": 3199
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3199,
    "end": 3200
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3201,
    "end": 3204
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3205,
    "end": 3206
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3206,
    "end": 3207
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3207,
    "end": 3208
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3209,
    "end": 3210
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3210,
    "end": 3211
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3212,
    "end": 3213
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3213,
    "end": 3214
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3215,
    "end": 3216
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3216,
    "end": 3217
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3218,
    "end": 3220
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3221,
    "end": 3222
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3222,
    "end": 3223
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3230,
    "end": 3231
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3238,
    "end": 3247
  },
  {
    "type": "Identifier",
    "value": "I11",
    "start": 3248,
    "end": 3251
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3251,
    "end": 3252
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3252,
    "end": 3253
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3253,
    "end": 3254
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3255,
    "end": 3262
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 3263,
    "end": 3268
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3269,
    "end": 3270
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 3279,
    "end": 3281
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3281,
    "end": 3282
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3283,
    "end": 3286
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3287,
    "end": 3288
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3288,
    "end": 3289
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3290,
    "end": 3292
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3293,
    "end": 3294
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3294,
    "end": 3295
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3301,
    "end": 3302
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3308,
    "end": 3317
  },
  {
    "type": "Identifier",
    "value": "I12",
    "start": 3318,
    "end": 3321
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3321,
    "end": 3322
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3322,
    "end": 3323
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3323,
    "end": 3324
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3325,
    "end": 3332
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 3333,
    "end": 3338
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3339,
    "end": 3340
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 3349,
    "end": 3351
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3351,
    "end": 3352
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3353,
    "end": 3356
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3357,
    "end": 3358
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3358,
    "end": 3359
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3359,
    "end": 3360
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3360,
    "end": 3361
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3362,
    "end": 3363
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3363,
    "end": 3364
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3365,
    "end": 3366
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3366,
    "end": 3367
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3367,
    "end": 3368
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3369,
    "end": 3370
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3370,
    "end": 3371
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3372,
    "end": 3374
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3375,
    "end": 3376
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3376,
    "end": 3377
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3383,
    "end": 3384
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3390,
    "end": 3399
  },
  {
    "type": "Identifier",
    "value": "I13",
    "start": 3400,
    "end": 3403
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3403,
    "end": 3404
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3404,
    "end": 3405
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3405,
    "end": 3406
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3407,
    "end": 3414
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 3415,
    "end": 3420
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3421,
    "end": 3422
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 3431,
    "end": 3433
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3433,
    "end": 3434
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3435,
    "end": 3438
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3439,
    "end": 3440
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3440,
    "end": 3441
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3441,
    "end": 3442
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3443,
    "end": 3444
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3444,
    "end": 3445
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3446,
    "end": 3448
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3449,
    "end": 3450
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3450,
    "end": 3451
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3457,
    "end": 3458
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3464,
    "end": 3473
  },
  {
    "type": "Identifier",
    "value": "I14",
    "start": 3474,
    "end": 3477
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3477,
    "end": 3478
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3478,
    "end": 3479
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3479,
    "end": 3480
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3481,
    "end": 3488
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 3489,
    "end": 3494
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3495,
    "end": 3496
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 3505,
    "end": 3507
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3507,
    "end": 3508
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3509,
    "end": 3512
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3513,
    "end": 3514
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3514,
    "end": 3515
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3515,
    "end": 3516
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3517,
    "end": 3518
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3518,
    "end": 3519
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3520,
    "end": 3521
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3521,
    "end": 3522
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3523,
    "end": 3524
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3524,
    "end": 3525
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3526,
    "end": 3528
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3529,
    "end": 3530
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3530,
    "end": 3531
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3537,
    "end": 3538
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3545,
    "end": 3554
  },
  {
    "type": "Identifier",
    "value": "I15",
    "start": 3555,
    "end": 3558
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3558,
    "end": 3559
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3559,
    "end": 3560
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3560,
    "end": 3561
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3562,
    "end": 3569
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 3570,
    "end": 3575
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3576,
    "end": 3577
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 3586,
    "end": 3588
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3588,
    "end": 3589
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3590,
    "end": 3593
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3594,
    "end": 3595
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3595,
    "end": 3596
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3597,
    "end": 3599
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3600,
    "end": 3601
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3601,
    "end": 3602
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3608,
    "end": 3609
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3615,
    "end": 3624
  },
  {
    "type": "Identifier",
    "value": "I16",
    "start": 3625,
    "end": 3628
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3628,
    "end": 3629
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3629,
    "end": 3630
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3630,
    "end": 3631
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3632,
    "end": 3639
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 3640,
    "end": 3645
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3646,
    "end": 3647
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 3656,
    "end": 3658
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3658,
    "end": 3659
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3660,
    "end": 3663
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3664,
    "end": 3665
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3665,
    "end": 3666
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3666,
    "end": 3667
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3667,
    "end": 3668
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3669,
    "end": 3670
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3670,
    "end": 3671
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3672,
    "end": 3673
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3673,
    "end": 3674
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3674,
    "end": 3675
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3676,
    "end": 3677
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3677,
    "end": 3678
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3679,
    "end": 3681
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3682,
    "end": 3683
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3683,
    "end": 3684
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3690,
    "end": 3691
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3697,
    "end": 3706
  },
  {
    "type": "Identifier",
    "value": "I17",
    "start": 3707,
    "end": 3710
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3710,
    "end": 3711
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3711,
    "end": 3712
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3712,
    "end": 3713
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3714,
    "end": 3721
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 3722,
    "end": 3727
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3728,
    "end": 3729
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 3738,
    "end": 3740
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3740,
    "end": 3741
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3742,
    "end": 3745
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3746,
    "end": 3747
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3747,
    "end": 3748
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3748,
    "end": 3749
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3750,
    "end": 3751
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3751,
    "end": 3752
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3753,
    "end": 3755
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3756,
    "end": 3757
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3757,
    "end": 3758
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3763,
    "end": 3764
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3770,
    "end": 3779
  },
  {
    "type": "Identifier",
    "value": "I18",
    "start": 3780,
    "end": 3783
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3783,
    "end": 3784
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3784,
    "end": 3785
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3785,
    "end": 3786
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3787,
    "end": 3794
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 3795,
    "end": 3800
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3801,
    "end": 3802
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 3811,
    "end": 3813
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3813,
    "end": 3814
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3815,
    "end": 3818
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3819,
    "end": 3820
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3820,
    "end": 3821
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3821,
    "end": 3822
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3823,
    "end": 3824
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3824,
    "end": 3825
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3826,
    "end": 3827
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3827,
    "end": 3828
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3829,
    "end": 3830
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3830,
    "end": 3831
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3832,
    "end": 3834
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3835,
    "end": 3836
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3836,
    "end": 3837
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3843,
    "end": 3844
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3845,
    "end": 3846
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 3848,
    "end": 3857
  },
  {
    "type": "Identifier",
    "value": "GenericSignaturesValid",
    "start": 3858,
    "end": 3880
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3881,
    "end": 3882
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3888,
    "end": 3897
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 3898,
    "end": 3903
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3904,
    "end": 3905
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3914,
    "end": 3915
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3915,
    "end": 3916
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3917,
    "end": 3920
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3921,
    "end": 3922
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3922,
    "end": 3923
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3923,
    "end": 3924
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3924,
    "end": 3925
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3925,
    "end": 3926
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3927,
    "end": 3929
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3930,
    "end": 3931
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3931,
    "end": 3932
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 3941,
    "end": 3943
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3943,
    "end": 3944
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3945,
    "end": 3948
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3949,
    "end": 3950
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3950,
    "end": 3951
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3951,
    "end": 3952
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3952,
    "end": 3953
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3953,
    "end": 3954
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3954,
    "end": 3955
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3955,
    "end": 3956
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3957,
    "end": 3958
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3958,
    "end": 3959
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3960,
    "end": 3962
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3963,
    "end": 3964
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3964,
    "end": 3965
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 3974,
    "end": 3976
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3976,
    "end": 3977
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3978,
    "end": 3981
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3982,
    "end": 3983
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3983,
    "end": 3984
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3984,
    "end": 3985
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3985,
    "end": 3986
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3986,
    "end": 3987
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3987,
    "end": 3988
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3989,
    "end": 3990
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3990,
    "end": 3991
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3992,
    "end": 3994
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3995,
    "end": 3996
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3996,
    "end": 3997
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 4006,
    "end": 4008
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4008,
    "end": 4009
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4010,
    "end": 4013
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4014,
    "end": 4015
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4015,
    "end": 4016
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4016,
    "end": 4017
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4017,
    "end": 4018
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4018,
    "end": 4019
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4019,
    "end": 4020
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4021,
    "end": 4022
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4022,
    "end": 4023
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4024,
    "end": 4025
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4025,
    "end": 4026
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4026,
    "end": 4027
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4028,
    "end": 4029
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4029,
    "end": 4030
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4031,
    "end": 4033
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4034,
    "end": 4035
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4035,
    "end": 4036
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 4045,
    "end": 4047
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4047,
    "end": 4048
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4049,
    "end": 4052
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4053,
    "end": 4054
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4054,
    "end": 4055
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4055,
    "end": 4056
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4056,
    "end": 4057
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4057,
    "end": 4058
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4058,
    "end": 4059
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4059,
    "end": 4060
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4061,
    "end": 4062
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4062,
    "end": 4063
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4064,
    "end": 4065
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4065,
    "end": 4066
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4066,
    "end": 4067
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4068,
    "end": 4069
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4069,
    "end": 4070
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4071,
    "end": 4073
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4074,
    "end": 4075
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4075,
    "end": 4076
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4081,
    "end": 4082
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4106,
    "end": 4115
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 4116,
    "end": 4118
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4119,
    "end": 4126
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 4127,
    "end": 4132
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4133,
    "end": 4134
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4143,
    "end": 4144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4144,
    "end": 4145
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4146,
    "end": 4149
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4150,
    "end": 4151
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4151,
    "end": 4152
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4152,
    "end": 4153
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4153,
    "end": 4154
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4154,
    "end": 4155
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4156,
    "end": 4158
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4159,
    "end": 4160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4160,
    "end": 4161
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4204,
    "end": 4205
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4211,
    "end": 4220
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 4221,
    "end": 4223
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4224,
    "end": 4231
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 4232,
    "end": 4237
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4238,
    "end": 4239
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4248,
    "end": 4249
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4249,
    "end": 4250
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4251,
    "end": 4254
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4255,
    "end": 4256
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4256,
    "end": 4257
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4257,
    "end": 4258
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4258,
    "end": 4259
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4259,
    "end": 4260
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4260,
    "end": 4261
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4261,
    "end": 4262
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4263,
    "end": 4264
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4264,
    "end": 4265
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4266,
    "end": 4268
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4269,
    "end": 4270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4270,
    "end": 4271
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4371,
    "end": 4372
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4378,
    "end": 4387
  },
  {
    "type": "Identifier",
    "value": "I3",
    "start": 4388,
    "end": 4390
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4391,
    "end": 4398
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 4399,
    "end": 4404
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4405,
    "end": 4406
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4415,
    "end": 4416
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4416,
    "end": 4417
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4418,
    "end": 4421
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4422,
    "end": 4423
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4423,
    "end": 4424
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4424,
    "end": 4425
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4425,
    "end": 4426
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4426,
    "end": 4427
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4427,
    "end": 4428
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4429,
    "end": 4430
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4430,
    "end": 4431
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4432,
    "end": 4434
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4435,
    "end": 4436
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4436,
    "end": 4437
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4537,
    "end": 4538
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4545,
    "end": 4554
  },
  {
    "type": "Identifier",
    "value": "I4",
    "start": 4555,
    "end": 4557
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4558,
    "end": 4565
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 4566,
    "end": 4571
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4572,
    "end": 4573
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 4582,
    "end": 4584
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4584,
    "end": 4585
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4586,
    "end": 4589
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4590,
    "end": 4591
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4591,
    "end": 4592
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4592,
    "end": 4593
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4593,
    "end": 4594
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4594,
    "end": 4595
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4596,
    "end": 4598
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4599,
    "end": 4600
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4600,
    "end": 4601
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4701,
    "end": 4702
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4708,
    "end": 4717
  },
  {
    "type": "Identifier",
    "value": "I5",
    "start": 4718,
    "end": 4720
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4721,
    "end": 4728
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 4729,
    "end": 4734
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4735,
    "end": 4736
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 4745,
    "end": 4747
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4747,
    "end": 4748
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4749,
    "end": 4752
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4753,
    "end": 4754
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4754,
    "end": 4755
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4755,
    "end": 4756
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4756,
    "end": 4757
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4757,
    "end": 4758
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4758,
    "end": 4759
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4759,
    "end": 4760
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4761,
    "end": 4762
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4762,
    "end": 4763
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4764,
    "end": 4766
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4767,
    "end": 4768
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4768,
    "end": 4769
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4791,
    "end": 4792
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4798,
    "end": 4807
  },
  {
    "type": "Identifier",
    "value": "I6",
    "start": 4808,
    "end": 4810
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4811,
    "end": 4818
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 4819,
    "end": 4824
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4825,
    "end": 4826
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 4835,
    "end": 4837
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4837,
    "end": 4838
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4839,
    "end": 4842
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4843,
    "end": 4844
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4844,
    "end": 4845
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4845,
    "end": 4846
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4846,
    "end": 4847
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4847,
    "end": 4848
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4848,
    "end": 4849
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4850,
    "end": 4851
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4851,
    "end": 4852
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4853,
    "end": 4855
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4856,
    "end": 4857
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4857,
    "end": 4858
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4892,
    "end": 4893
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4900,
    "end": 4909
  },
  {
    "type": "Identifier",
    "value": "I7",
    "start": 4910,
    "end": 4912
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4913,
    "end": 4920
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 4921,
    "end": 4926
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4927,
    "end": 4928
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 4937,
    "end": 4939
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4939,
    "end": 4940
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4941,
    "end": 4944
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4945,
    "end": 4946
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4946,
    "end": 4947
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4947,
    "end": 4948
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4948,
    "end": 4949
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4949,
    "end": 4950
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4951,
    "end": 4953
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4954,
    "end": 4955
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4955,
    "end": 4956
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4990,
    "end": 4991
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4997,
    "end": 5006
  },
  {
    "type": "Identifier",
    "value": "I8",
    "start": 5007,
    "end": 5009
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5010,
    "end": 5017
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 5018,
    "end": 5023
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5024,
    "end": 5025
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 5034,
    "end": 5036
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5036,
    "end": 5037
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5038,
    "end": 5041
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5042,
    "end": 5043
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5043,
    "end": 5044
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5044,
    "end": 5045
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5045,
    "end": 5046
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5046,
    "end": 5047
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5047,
    "end": 5048
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5048,
    "end": 5049
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5050,
    "end": 5051
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5051,
    "end": 5052
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5053,
    "end": 5055
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5056,
    "end": 5057
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5057,
    "end": 5058
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5135,
    "end": 5136
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5142,
    "end": 5151
  },
  {
    "type": "Identifier",
    "value": "I9",
    "start": 5152,
    "end": 5154
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5155,
    "end": 5162
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 5163,
    "end": 5168
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5169,
    "end": 5170
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 5179,
    "end": 5181
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5181,
    "end": 5182
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5183,
    "end": 5186
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5187,
    "end": 5188
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5188,
    "end": 5189
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5189,
    "end": 5190
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5190,
    "end": 5191
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5191,
    "end": 5192
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5192,
    "end": 5193
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5194,
    "end": 5195
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5195,
    "end": 5196
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5197,
    "end": 5199
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5200,
    "end": 5201
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5201,
    "end": 5202
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5256,
    "end": 5257
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5263,
    "end": 5272
  },
  {
    "type": "Identifier",
    "value": "I10",
    "start": 5273,
    "end": 5276
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5277,
    "end": 5284
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 5285,
    "end": 5290
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5291,
    "end": 5292
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 5301,
    "end": 5303
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5303,
    "end": 5304
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5305,
    "end": 5308
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5309,
    "end": 5310
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5310,
    "end": 5311
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5311,
    "end": 5312
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5312,
    "end": 5313
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5313,
    "end": 5314
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5314,
    "end": 5315
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5316,
    "end": 5317
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5317,
    "end": 5318
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 5319,
    "end": 5320
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5320,
    "end": 5321
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5322,
    "end": 5323
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5323,
    "end": 5324
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5325,
    "end": 5327
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5328,
    "end": 5329
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5329,
    "end": 5330
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5371,
    "end": 5372
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5379,
    "end": 5388
  },
  {
    "type": "Identifier",
    "value": "I11",
    "start": 5389,
    "end": 5392
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5393,
    "end": 5400
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 5401,
    "end": 5406
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5407,
    "end": 5408
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 5417,
    "end": 5419
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5419,
    "end": 5420
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5421,
    "end": 5424
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5425,
    "end": 5426
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5426,
    "end": 5427
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5427,
    "end": 5428
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5428,
    "end": 5429
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5429,
    "end": 5430
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5431,
    "end": 5433
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5434,
    "end": 5435
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5435,
    "end": 5436
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5536,
    "end": 5537
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5543,
    "end": 5552
  },
  {
    "type": "Identifier",
    "value": "I12",
    "start": 5553,
    "end": 5556
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5557,
    "end": 5564
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 5565,
    "end": 5570
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5571,
    "end": 5572
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 5581,
    "end": 5583
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5583,
    "end": 5584
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5585,
    "end": 5588
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5589,
    "end": 5590
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5590,
    "end": 5591
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5591,
    "end": 5592
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5592,
    "end": 5593
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5593,
    "end": 5594
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5594,
    "end": 5595
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5595,
    "end": 5596
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5597,
    "end": 5598
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5598,
    "end": 5599
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 5600,
    "end": 5601
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5601,
    "end": 5602
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5602,
    "end": 5603
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5604,
    "end": 5605
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5605,
    "end": 5606
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5607,
    "end": 5609
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5610,
    "end": 5611
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5611,
    "end": 5612
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5646,
    "end": 5647
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5653,
    "end": 5662
  },
  {
    "type": "Identifier",
    "value": "I13",
    "start": 5663,
    "end": 5666
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5667,
    "end": 5674
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 5675,
    "end": 5680
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5681,
    "end": 5682
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 5691,
    "end": 5693
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5693,
    "end": 5694
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5695,
    "end": 5698
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5699,
    "end": 5700
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5700,
    "end": 5701
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5701,
    "end": 5702
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5702,
    "end": 5703
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5703,
    "end": 5704
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5704,
    "end": 5705
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5706,
    "end": 5707
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5707,
    "end": 5708
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5709,
    "end": 5711
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5712,
    "end": 5713
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5713,
    "end": 5714
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5752,
    "end": 5753
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5759,
    "end": 5768
  },
  {
    "type": "Identifier",
    "value": "I14",
    "start": 5769,
    "end": 5772
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5773,
    "end": 5780
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 5781,
    "end": 5786
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5787,
    "end": 5788
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 5797,
    "end": 5799
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5799,
    "end": 5800
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5801,
    "end": 5804
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5805,
    "end": 5806
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5806,
    "end": 5807
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5807,
    "end": 5808
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5808,
    "end": 5809
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5809,
    "end": 5810
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5810,
    "end": 5811
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5812,
    "end": 5813
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5813,
    "end": 5814
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 5815,
    "end": 5816
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5816,
    "end": 5817
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5818,
    "end": 5819
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5819,
    "end": 5820
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5821,
    "end": 5823
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5824,
    "end": 5825
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5825,
    "end": 5826
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5861,
    "end": 5862
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5869,
    "end": 5878
  },
  {
    "type": "Identifier",
    "value": "I15",
    "start": 5879,
    "end": 5882
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5883,
    "end": 5890
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 5891,
    "end": 5896
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5897,
    "end": 5898
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 5907,
    "end": 5909
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5909,
    "end": 5910
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5911,
    "end": 5914
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5915,
    "end": 5916
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5916,
    "end": 5917
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5917,
    "end": 5918
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5918,
    "end": 5919
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5919,
    "end": 5920
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5921,
    "end": 5923
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5924,
    "end": 5925
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5925,
    "end": 5926
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6026,
    "end": 6027
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 6033,
    "end": 6042
  },
  {
    "type": "Identifier",
    "value": "I16",
    "start": 6043,
    "end": 6046
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6047,
    "end": 6054
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 6055,
    "end": 6060
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6061,
    "end": 6062
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 6071,
    "end": 6073
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6073,
    "end": 6074
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 6075,
    "end": 6078
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6079,
    "end": 6080
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6080,
    "end": 6081
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6081,
    "end": 6082
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6082,
    "end": 6083
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 6083,
    "end": 6084
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 6084,
    "end": 6085
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6085,
    "end": 6086
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6087,
    "end": 6088
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6088,
    "end": 6089
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 6090,
    "end": 6091
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 6091,
    "end": 6092
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6092,
    "end": 6093
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6094,
    "end": 6095
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6095,
    "end": 6096
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6097,
    "end": 6099
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6100,
    "end": 6101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6101,
    "end": 6102
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6136,
    "end": 6137
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 6143,
    "end": 6152
  },
  {
    "type": "Identifier",
    "value": "I17",
    "start": 6153,
    "end": 6156
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6157,
    "end": 6164
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 6165,
    "end": 6170
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6171,
    "end": 6172
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 6181,
    "end": 6183
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6183,
    "end": 6184
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 6185,
    "end": 6188
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6189,
    "end": 6190
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6190,
    "end": 6191
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6191,
    "end": 6192
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6192,
    "end": 6193
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 6193,
    "end": 6194
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6194,
    "end": 6195
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6196,
    "end": 6197
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6197,
    "end": 6198
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6199,
    "end": 6201
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6202,
    "end": 6203
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6203,
    "end": 6204
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6241,
    "end": 6242
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 6248,
    "end": 6257
  },
  {
    "type": "Identifier",
    "value": "I18",
    "start": 6258,
    "end": 6261
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6262,
    "end": 6269
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 6270,
    "end": 6275
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6276,
    "end": 6277
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 6286,
    "end": 6288
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6288,
    "end": 6289
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 6290,
    "end": 6293
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6294,
    "end": 6295
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6295,
    "end": 6296
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6296,
    "end": 6297
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6297,
    "end": 6298
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 6298,
    "end": 6299
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6299,
    "end": 6300
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6301,
    "end": 6302
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6302,
    "end": 6303
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 6304,
    "end": 6305
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6305,
    "end": 6306
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6307,
    "end": 6308
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6308,
    "end": 6309
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6310,
    "end": 6312
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6313,
    "end": 6314
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6314,
    "end": 6315
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6350,
    "end": 6351
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6352,
    "end": 6353
  }
]
```
