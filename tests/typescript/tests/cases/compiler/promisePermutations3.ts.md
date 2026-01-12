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
        "name": "Promise",
        "optional": false,
        "typeAnnotation": null,
        "start": 88,
        "end": 95
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
              "start": 96,
              "end": 97
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 96,
            "end": 97
          }
        ],
        "start": 95,
        "end": 98
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 105,
              "end": 109
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
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 110,
                    "end": 111
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 110,
                  "end": 111
                }
              ],
              "start": 109,
              "end": 112
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "success",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 131,
                              "end": 132
                            },
                            "typeArguments": null,
                            "start": 131,
                            "end": 132
                          },
                          "start": 129,
                          "end": 132
                        },
                        "start": 124,
                        "end": 132
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 137,
                          "end": 144
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 145,
                                "end": 146
                              },
                              "typeArguments": null,
                              "start": 145,
                              "end": 146
                            }
                          ],
                          "start": 144,
                          "end": 147
                        },
                        "start": 137,
                        "end": 147
                      },
                      "start": 134,
                      "end": 147
                    },
                    "start": 123,
                    "end": 147
                  },
                  "start": 121,
                  "end": 147
                },
                "start": 113,
                "end": 147
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "error",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 165,
                            "end": 168
                          },
                          "start": 163,
                          "end": 168
                        },
                        "start": 158,
                        "end": 168
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 173,
                          "end": 180
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 181,
                                "end": 182
                              },
                              "typeArguments": null,
                              "start": 181,
                              "end": 182
                            }
                          ],
                          "start": 180,
                          "end": 183
                        },
                        "start": 173,
                        "end": 183
                      },
                      "start": 170,
                      "end": 183
                    },
                    "start": 157,
                    "end": 183
                  },
                  "start": 155,
                  "end": 183
                },
                "start": 149,
                "end": 183
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "progress",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 207,
                            "end": 210
                          },
                          "start": 205,
                          "end": 210
                        },
                        "start": 197,
                        "end": 210
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 215,
                        "end": 219
                      },
                      "start": 212,
                      "end": 219
                    },
                    "start": 196,
                    "end": 219
                  },
                  "start": 194,
                  "end": 219
                },
                "start": 185,
                "end": 219
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 222,
                  "end": 229
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 230,
                        "end": 231
                      },
                      "typeArguments": null,
                      "start": 230,
                      "end": 231
                    }
                  ],
                  "start": 229,
                  "end": 232
                },
                "start": 222,
                "end": 232
              },
              "start": 220,
              "end": 232
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 105,
            "end": 233
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 238,
              "end": 242
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
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 243,
                    "end": 244
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 243,
                  "end": 244
                }
              ],
              "start": 242,
              "end": 245
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "success",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 264,
                              "end": 265
                            },
                            "typeArguments": null,
                            "start": 264,
                            "end": 265
                          },
                          "start": 262,
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
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 270,
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
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 278,
                                "end": 279
                              },
                              "typeArguments": null,
                              "start": 278,
                              "end": 279
                            }
                          ],
                          "start": 277,
                          "end": 280
                        },
                        "start": 270,
                        "end": 280
                      },
                      "start": 267,
                      "end": 280
                    },
                    "start": 256,
                    "end": 280
                  },
                  "start": 254,
                  "end": 280
                },
                "start": 246,
                "end": 280
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "error",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 298,
                            "end": 301
                          },
                          "start": 296,
                          "end": 301
                        },
                        "start": 291,
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
                          "name": "U",
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
                    "start": 290,
                    "end": 307
                  },
                  "start": 288,
                  "end": 307
                },
                "start": 282,
                "end": 307
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "progress",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 331,
                            "end": 334
                          },
                          "start": 329,
                          "end": 334
                        },
                        "start": 321,
                        "end": 334
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 339,
                        "end": 343
                      },
                      "start": 336,
                      "end": 343
                    },
                    "start": 320,
                    "end": 343
                  },
                  "start": 318,
                  "end": 343
                },
                "start": 309,
                "end": 343
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 346,
                  "end": 353
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 354,
                        "end": 355
                      },
                      "typeArguments": null,
                      "start": 354,
                      "end": 355
                    }
                  ],
                  "start": 353,
                  "end": 356
                },
                "start": 346,
                "end": 356
              },
              "start": 344,
              "end": 356
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 238,
            "end": 357
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 362,
              "end": 366
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
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 367,
                    "end": 368
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 367,
                  "end": 368
                }
              ],
              "start": 366,
              "end": 369
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "success",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 388,
                              "end": 389
                            },
                            "typeArguments": null,
                            "start": 388,
                            "end": 389
                          },
                          "start": 386,
                          "end": 389
                        },
                        "start": 381,
                        "end": 389
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 394,
                          "end": 395
                        },
                        "typeArguments": null,
                        "start": 394,
                        "end": 395
                      },
                      "start": 391,
                      "end": 395
                    },
                    "start": 380,
                    "end": 395
                  },
                  "start": 378,
                  "end": 395
                },
                "start": 370,
                "end": 395
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "error",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 413,
                            "end": 416
                          },
                          "start": 411,
                          "end": 416
                        },
                        "start": 406,
                        "end": 416
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 421,
                          "end": 428
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 429,
                                "end": 430
                              },
                              "typeArguments": null,
                              "start": 429,
                              "end": 430
                            }
                          ],
                          "start": 428,
                          "end": 431
                        },
                        "start": 421,
                        "end": 431
                      },
                      "start": 418,
                      "end": 431
                    },
                    "start": 405,
                    "end": 431
                  },
                  "start": 403,
                  "end": 431
                },
                "start": 397,
                "end": 431
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "progress",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 455,
                            "end": 458
                          },
                          "start": 453,
                          "end": 458
                        },
                        "start": 445,
                        "end": 458
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 463,
                        "end": 467
                      },
                      "start": 460,
                      "end": 467
                    },
                    "start": 444,
                    "end": 467
                  },
                  "start": 442,
                  "end": 467
                },
                "start": 433,
                "end": 467
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 470,
                  "end": 477
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 478,
                        "end": 479
                      },
                      "typeArguments": null,
                      "start": 478,
                      "end": 479
                    }
                  ],
                  "start": 477,
                  "end": 480
                },
                "start": 470,
                "end": 480
              },
              "start": 468,
              "end": 480
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 362,
            "end": 481
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 486,
              "end": 490
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
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 491,
                    "end": 492
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 491,
                  "end": 492
                }
              ],
              "start": 490,
              "end": 493
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "success",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 512,
                              "end": 513
                            },
                            "typeArguments": null,
                            "start": 512,
                            "end": 513
                          },
                          "start": 510,
                          "end": 513
                        },
                        "start": 505,
                        "end": 513
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 518,
                          "end": 519
                        },
                        "typeArguments": null,
                        "start": 518,
                        "end": 519
                      },
                      "start": 515,
                      "end": 519
                    },
                    "start": 504,
                    "end": 519
                  },
                  "start": 502,
                  "end": 519
                },
                "start": 494,
                "end": 519
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "error",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 537,
                            "end": 540
                          },
                          "start": 535,
                          "end": 540
                        },
                        "start": 530,
                        "end": 540
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 545,
                          "end": 546
                        },
                        "typeArguments": null,
                        "start": 545,
                        "end": 546
                      },
                      "start": 542,
                      "end": 546
                    },
                    "start": 529,
                    "end": 546
                  },
                  "start": 527,
                  "end": 546
                },
                "start": 521,
                "end": 546
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "progress",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 570,
                            "end": 573
                          },
                          "start": 568,
                          "end": 573
                        },
                        "start": 560,
                        "end": 573
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 578,
                        "end": 582
                      },
                      "start": 575,
                      "end": 582
                    },
                    "start": 559,
                    "end": 582
                  },
                  "start": 557,
                  "end": 582
                },
                "start": 548,
                "end": 582
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 585,
                  "end": 592
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 593,
                        "end": 594
                      },
                      "typeArguments": null,
                      "start": 593,
                      "end": 594
                    }
                  ],
                  "start": 592,
                  "end": 595
                },
                "start": 585,
                "end": 595
              },
              "start": 583,
              "end": 595
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 486,
            "end": 596
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "done",
              "optional": false,
              "typeAnnotation": null,
              "start": 601,
              "end": 605
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
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 606,
                    "end": 607
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 606,
                  "end": 607
                }
              ],
              "start": 605,
              "end": 608
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "success",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 627,
                              "end": 628
                            },
                            "typeArguments": null,
                            "start": 627,
                            "end": 628
                          },
                          "start": 625,
                          "end": 628
                        },
                        "start": 620,
                        "end": 628
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 633,
                        "end": 636
                      },
                      "start": 630,
                      "end": 636
                    },
                    "start": 619,
                    "end": 636
                  },
                  "start": 617,
                  "end": 636
                },
                "start": 609,
                "end": 636
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "error",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 654,
                            "end": 657
                          },
                          "start": 652,
                          "end": 657
                        },
                        "start": 647,
                        "end": 657
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 662,
                        "end": 665
                      },
                      "start": 659,
                      "end": 665
                    },
                    "start": 646,
                    "end": 665
                  },
                  "start": 644,
                  "end": 665
                },
                "start": 638,
                "end": 665
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "progress",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 689,
                            "end": 692
                          },
                          "start": 687,
                          "end": 692
                        },
                        "start": 679,
                        "end": 692
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 697,
                        "end": 701
                      },
                      "start": 694,
                      "end": 701
                    },
                    "start": 678,
                    "end": 701
                  },
                  "start": 676,
                  "end": 701
                },
                "start": 667,
                "end": 701
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 704,
                "end": 708
              },
              "start": 702,
              "end": 708
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 601,
            "end": 709
          }
        ],
        "start": 99,
        "end": 711
      },
      "declare": false,
      "start": 78,
      "end": 711
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IPromise",
        "optional": false,
        "typeAnnotation": null,
        "start": 723,
        "end": 731
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
              "start": 732,
              "end": 733
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 732,
            "end": 733
          }
        ],
        "start": 731,
        "end": 734
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 741,
              "end": 745
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
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 746,
                    "end": 747
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 746,
                  "end": 747
                }
              ],
              "start": 745,
              "end": 748
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "success",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 767,
                              "end": 768
                            },
                            "typeArguments": null,
                            "start": 767,
                            "end": 768
                          },
                          "start": 765,
                          "end": 768
                        },
                        "start": 760,
                        "end": 768
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 773,
                          "end": 774
                        },
                        "typeArguments": null,
                        "start": 773,
                        "end": 774
                      },
                      "start": 770,
                      "end": 774
                    },
                    "start": 759,
                    "end": 774
                  },
                  "start": 757,
                  "end": 774
                },
                "start": 749,
                "end": 774
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "error",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 792,
                            "end": 795
                          },
                          "start": 790,
                          "end": 795
                        },
                        "start": 785,
                        "end": 795
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 800,
                          "end": 801
                        },
                        "typeArguments": null,
                        "start": 800,
                        "end": 801
                      },
                      "start": 797,
                      "end": 801
                    },
                    "start": 784,
                    "end": 801
                  },
                  "start": 782,
                  "end": 801
                },
                "start": 776,
                "end": 801
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "progress",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 825,
                            "end": 828
                          },
                          "start": 823,
                          "end": 828
                        },
                        "start": 815,
                        "end": 828
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 833,
                        "end": 837
                      },
                      "start": 830,
                      "end": 837
                    },
                    "start": 814,
                    "end": 837
                  },
                  "start": 812,
                  "end": 837
                },
                "start": 803,
                "end": 837
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 840,
                  "end": 848
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 849,
                        "end": 850
                      },
                      "typeArguments": null,
                      "start": 849,
                      "end": 850
                    }
                  ],
                  "start": 848,
                  "end": 851
                },
                "start": 840,
                "end": 851
              },
              "start": 838,
              "end": 851
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 741,
            "end": 852
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "done",
              "optional": false,
              "typeAnnotation": null,
              "start": 857,
              "end": 861
            },
            "computed": false,
            "optional": true,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 864,
                    "end": 865
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 864,
                  "end": 865
                }
              ],
              "start": 863,
              "end": 866
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "success",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 885,
                              "end": 886
                            },
                            "typeArguments": null,
                            "start": 885,
                            "end": 886
                          },
                          "start": 883,
                          "end": 886
                        },
                        "start": 878,
                        "end": 886
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 891,
                        "end": 894
                      },
                      "start": 888,
                      "end": 894
                    },
                    "start": 877,
                    "end": 894
                  },
                  "start": 875,
                  "end": 894
                },
                "start": 867,
                "end": 894
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "error",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 912,
                            "end": 915
                          },
                          "start": 910,
                          "end": 915
                        },
                        "start": 905,
                        "end": 915
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 920,
                        "end": 923
                      },
                      "start": 917,
                      "end": 923
                    },
                    "start": 904,
                    "end": 923
                  },
                  "start": 902,
                  "end": 923
                },
                "start": 896,
                "end": 923
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "progress",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 947,
                            "end": 950
                          },
                          "start": 945,
                          "end": 950
                        },
                        "start": 937,
                        "end": 950
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 955,
                        "end": 959
                      },
                      "start": 952,
                      "end": 959
                    },
                    "start": 936,
                    "end": 959
                  },
                  "start": 934,
                  "end": 959
                },
                "start": 925,
                "end": 959
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 962,
                "end": 966
              },
              "start": 960,
              "end": 966
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 857,
            "end": 967
          }
        ],
        "start": 735,
        "end": 969
      },
      "declare": false,
      "start": 713,
      "end": 969
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 988,
        "end": 1000
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1004,
            "end": 1012
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1013,
                "end": 1019
              }
            ],
            "start": 1012,
            "end": 1020
          },
          "start": 1004,
          "end": 1020
        },
        "start": 1002,
        "end": 1020
      },
      "body": null,
      "expression": false,
      "start": 971,
      "end": 1021
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunctionP",
        "optional": false,
        "typeAnnotation": null,
        "start": 1039,
        "end": 1052
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1056,
            "end": 1063
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1064,
                "end": 1070
              }
            ],
            "start": 1063,
            "end": 1071
          },
          "start": 1056,
          "end": 1071
        },
        "start": 1054,
        "end": 1071
      },
      "body": null,
      "expression": false,
      "start": 1022,
      "end": 1072
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1090,
        "end": 1103
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1107,
            "end": 1115
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1118,
                      "end": 1119
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1121,
                        "end": 1127
                      },
                      "start": 1119,
                      "end": 1127
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1118,
                    "end": 1127
                  }
                ],
                "start": 1116,
                "end": 1129
              }
            ],
            "start": 1115,
            "end": 1130
          },
          "start": 1107,
          "end": 1130
        },
        "start": 1105,
        "end": 1130
      },
      "body": null,
      "expression": false,
      "start": 1073,
      "end": 1131
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction2P",
        "optional": false,
        "typeAnnotation": null,
        "start": 1149,
        "end": 1163
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1167,
            "end": 1174
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1177,
                      "end": 1178
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1180,
                        "end": 1186
                      },
                      "start": 1178,
                      "end": 1186
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1177,
                    "end": 1186
                  }
                ],
                "start": 1175,
                "end": 1188
              }
            ],
            "start": 1174,
            "end": 1189
          },
          "start": 1167,
          "end": 1189
        },
        "start": 1165,
        "end": 1189
      },
      "body": null,
      "expression": false,
      "start": 1132,
      "end": 1190
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1208,
        "end": 1221
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 1225,
              "end": 1231
            },
            "start": 1223,
            "end": 1231
          },
          "start": 1222,
          "end": 1231
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1234,
            "end": 1242
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1243,
                "end": 1249
              }
            ],
            "start": 1242,
            "end": 1250
          },
          "start": 1234,
          "end": 1250
        },
        "start": 1232,
        "end": 1250
      },
      "body": null,
      "expression": false,
      "start": 1191,
      "end": 1251
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction3P",
        "optional": false,
        "typeAnnotation": null,
        "start": 1269,
        "end": 1283
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 1287,
              "end": 1293
            },
            "start": 1285,
            "end": 1293
          },
          "start": 1284,
          "end": 1293
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1296,
            "end": 1303
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1304,
                "end": 1310
              }
            ],
            "start": 1303,
            "end": 1311
          },
          "start": 1296,
          "end": 1311
        },
        "start": 1294,
        "end": 1311
      },
      "body": null,
      "expression": false,
      "start": 1252,
      "end": 1312
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1330,
        "end": 1343
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 1347,
              "end": 1353
            },
            "start": 1345,
            "end": 1353
          },
          "start": 1344,
          "end": 1353
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1359,
              "end": 1365
            },
            "start": 1357,
            "end": 1365
          },
          "start": 1355,
          "end": 1365
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1368,
            "end": 1376
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1377,
                "end": 1383
              }
            ],
            "start": 1376,
            "end": 1384
          },
          "start": 1368,
          "end": 1384
        },
        "start": 1366,
        "end": 1384
      },
      "body": null,
      "expression": false,
      "start": 1313,
      "end": 1385
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction4P",
        "optional": false,
        "typeAnnotation": null,
        "start": 1403,
        "end": 1417
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 1421,
              "end": 1427
            },
            "start": 1419,
            "end": 1427
          },
          "start": 1418,
          "end": 1427
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1433,
              "end": 1439
            },
            "start": 1431,
            "end": 1439
          },
          "start": 1429,
          "end": 1439
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1442,
            "end": 1449
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1450,
                "end": 1456
              }
            ],
            "start": 1449,
            "end": 1457
          },
          "start": 1442,
          "end": 1457
        },
        "start": 1440,
        "end": 1457
      },
      "body": null,
      "expression": false,
      "start": 1386,
      "end": 1458
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1476,
        "end": 1489
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 1493,
              "end": 1499
            },
            "start": 1491,
            "end": 1499
          },
          "start": 1490,
          "end": 1499
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1509,
                      "end": 1515
                    },
                    "start": 1507,
                    "end": 1515
                  },
                  "start": 1506,
                  "end": 1515
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1520,
                  "end": 1526
                },
                "start": 1517,
                "end": 1526
              },
              "start": 1505,
              "end": 1526
            },
            "start": 1503,
            "end": 1526
          },
          "start": 1501,
          "end": 1526
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1529,
            "end": 1537
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1538,
                "end": 1544
              }
            ],
            "start": 1537,
            "end": 1545
          },
          "start": 1529,
          "end": 1545
        },
        "start": 1527,
        "end": 1545
      },
      "body": null,
      "expression": false,
      "start": 1459,
      "end": 1546
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction5P",
        "optional": false,
        "typeAnnotation": null,
        "start": 1564,
        "end": 1578
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 1582,
              "end": 1588
            },
            "start": 1580,
            "end": 1588
          },
          "start": 1579,
          "end": 1588
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1598,
                      "end": 1604
                    },
                    "start": 1596,
                    "end": 1604
                  },
                  "start": 1595,
                  "end": 1604
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1609,
                  "end": 1615
                },
                "start": 1606,
                "end": 1615
              },
              "start": 1594,
              "end": 1615
            },
            "start": 1592,
            "end": 1615
          },
          "start": 1590,
          "end": 1615
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1618,
            "end": 1625
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1626,
                "end": 1632
              }
            ],
            "start": 1625,
            "end": 1633
          },
          "start": 1618,
          "end": 1633
        },
        "start": 1616,
        "end": 1633
      },
      "body": null,
      "expression": false,
      "start": 1547,
      "end": 1634
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1652,
        "end": 1665
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 1669,
              "end": 1675
            },
            "start": 1667,
            "end": 1675
          },
          "start": 1666,
          "end": 1675
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
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
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1682,
                      "end": 1683
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1682,
                    "end": 1683
                  }
                ],
                "start": 1681,
                "end": 1684
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
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
                        "start": 1688,
                        "end": 1689
                      },
                      "typeArguments": null,
                      "start": 1688,
                      "end": 1689
                    },
                    "start": 1686,
                    "end": 1689
                  },
                  "start": 1685,
                  "end": 1689
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
                    "start": 1694,
                    "end": 1695
                  },
                  "typeArguments": null,
                  "start": 1694,
                  "end": 1695
                },
                "start": 1691,
                "end": 1695
              },
              "start": 1681,
              "end": 1695
            },
            "start": 1679,
            "end": 1695
          },
          "start": 1677,
          "end": 1695
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1698,
            "end": 1706
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1707,
                "end": 1713
              }
            ],
            "start": 1706,
            "end": 1714
          },
          "start": 1698,
          "end": 1714
        },
        "start": 1696,
        "end": 1714
      },
      "body": null,
      "expression": false,
      "start": 1635,
      "end": 1715
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction6P",
        "optional": false,
        "typeAnnotation": null,
        "start": 1733,
        "end": 1747
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 1751,
              "end": 1757
            },
            "start": 1749,
            "end": 1757
          },
          "start": 1748,
          "end": 1757
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
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
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1764,
                      "end": 1765
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1764,
                    "end": 1765
                  }
                ],
                "start": 1763,
                "end": 1766
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
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
                        "start": 1770,
                        "end": 1771
                      },
                      "typeArguments": null,
                      "start": 1770,
                      "end": 1771
                    },
                    "start": 1768,
                    "end": 1771
                  },
                  "start": 1767,
                  "end": 1771
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
                    "start": 1776,
                    "end": 1777
                  },
                  "typeArguments": null,
                  "start": 1776,
                  "end": 1777
                },
                "start": 1773,
                "end": 1777
              },
              "start": 1763,
              "end": 1777
            },
            "start": 1761,
            "end": 1777
          },
          "start": 1759,
          "end": 1777
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1780,
            "end": 1787
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1788,
                "end": 1794
              }
            ],
            "start": 1787,
            "end": 1795
          },
          "start": 1780,
          "end": 1795
        },
        "start": 1778,
        "end": 1795
      },
      "body": null,
      "expression": false,
      "start": 1716,
      "end": 1796
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1814,
        "end": 1827
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
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
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1833,
                      "end": 1834
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1833,
                    "end": 1834
                  }
                ],
                "start": 1832,
                "end": 1835
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
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
                        "start": 1839,
                        "end": 1840
                      },
                      "typeArguments": null,
                      "start": 1839,
                      "end": 1840
                    },
                    "start": 1837,
                    "end": 1840
                  },
                  "start": 1836,
                  "end": 1840
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
                    "start": 1845,
                    "end": 1846
                  },
                  "typeArguments": null,
                  "start": 1845,
                  "end": 1846
                },
                "start": 1842,
                "end": 1846
              },
              "start": 1832,
              "end": 1846
            },
            "start": 1830,
            "end": 1846
          },
          "start": 1828,
          "end": 1846
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1849,
            "end": 1857
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1858,
                "end": 1864
              }
            ],
            "start": 1857,
            "end": 1865
          },
          "start": 1849,
          "end": 1865
        },
        "start": 1847,
        "end": 1865
      },
      "body": null,
      "expression": false,
      "start": 1797,
      "end": 1866
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction7P",
        "optional": false,
        "typeAnnotation": null,
        "start": 1884,
        "end": 1898
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
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
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1904,
                      "end": 1905
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1904,
                    "end": 1905
                  }
                ],
                "start": 1903,
                "end": 1906
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
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
                        "start": 1910,
                        "end": 1911
                      },
                      "typeArguments": null,
                      "start": 1910,
                      "end": 1911
                    },
                    "start": 1908,
                    "end": 1911
                  },
                  "start": 1907,
                  "end": 1911
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
                    "start": 1916,
                    "end": 1917
                  },
                  "typeArguments": null,
                  "start": 1916,
                  "end": 1917
                },
                "start": 1913,
                "end": 1917
              },
              "start": 1903,
              "end": 1917
            },
            "start": 1901,
            "end": 1917
          },
          "start": 1899,
          "end": 1917
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1920,
            "end": 1927
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1928,
                "end": 1934
              }
            ],
            "start": 1927,
            "end": 1935
          },
          "start": 1920,
          "end": 1935
        },
        "start": 1918,
        "end": 1935
      },
      "body": null,
      "expression": false,
      "start": 1867,
      "end": 1936
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1954,
        "end": 1967
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1968,
              "end": 1969
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1968,
            "end": 1969
          }
        ],
        "start": 1967,
        "end": 1970
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
                "start": 1974,
                "end": 1975
              },
              "typeArguments": null,
              "start": 1974,
              "end": 1975
            },
            "start": 1972,
            "end": 1975
          },
          "start": 1971,
          "end": 1975
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
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
                  "name": "a",
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
                        "start": 1985,
                        "end": 1986
                      },
                      "typeArguments": null,
                      "start": 1985,
                      "end": 1986
                    },
                    "start": 1983,
                    "end": 1986
                  },
                  "start": 1982,
                  "end": 1986
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
                    "start": 1991,
                    "end": 1992
                  },
                  "typeArguments": null,
                  "start": 1991,
                  "end": 1992
                },
                "start": 1988,
                "end": 1992
              },
              "start": 1981,
              "end": 1992
            },
            "start": 1979,
            "end": 1992
          },
          "start": 1977,
          "end": 1992
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 1995,
            "end": 2003
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
                  "start": 2004,
                  "end": 2005
                },
                "typeArguments": null,
                "start": 2004,
                "end": 2005
              }
            ],
            "start": 2003,
            "end": 2006
          },
          "start": 1995,
          "end": 2006
        },
        "start": 1993,
        "end": 2006
      },
      "body": null,
      "expression": false,
      "start": 1937,
      "end": 2007
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction8P",
        "optional": false,
        "typeAnnotation": null,
        "start": 2025,
        "end": 2039
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2040,
              "end": 2041
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2040,
            "end": 2041
          }
        ],
        "start": 2039,
        "end": 2042
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
                "start": 2046,
                "end": 2047
              },
              "typeArguments": null,
              "start": 2046,
              "end": 2047
            },
            "start": 2044,
            "end": 2047
          },
          "start": 2043,
          "end": 2047
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
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
                  "name": "a",
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
                        "start": 2057,
                        "end": 2058
                      },
                      "typeArguments": null,
                      "start": 2057,
                      "end": 2058
                    },
                    "start": 2055,
                    "end": 2058
                  },
                  "start": 2054,
                  "end": 2058
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
                    "start": 2063,
                    "end": 2064
                  },
                  "typeArguments": null,
                  "start": 2063,
                  "end": 2064
                },
                "start": 2060,
                "end": 2064
              },
              "start": 2053,
              "end": 2064
            },
            "start": 2051,
            "end": 2064
          },
          "start": 2049,
          "end": 2064
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2067,
            "end": 2074
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
                  "start": 2075,
                  "end": 2076
                },
                "typeArguments": null,
                "start": 2075,
                "end": 2076
              }
            ],
            "start": 2074,
            "end": 2077
          },
          "start": 2067,
          "end": 2077
        },
        "start": 2065,
        "end": 2077
      },
      "body": null,
      "expression": false,
      "start": 2008,
      "end": 2078
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction9",
        "optional": false,
        "typeAnnotation": null,
        "start": 2096,
        "end": 2109
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2110,
              "end": 2111
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2110,
            "end": 2111
          }
        ],
        "start": 2109,
        "end": 2112
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
                "start": 2116,
                "end": 2117
              },
              "typeArguments": null,
              "start": 2116,
              "end": 2117
            },
            "start": 2114,
            "end": 2117
          },
          "start": 2113,
          "end": 2117
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
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
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2124,
                      "end": 2125
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2124,
                    "end": 2125
                  }
                ],
                "start": 2123,
                "end": 2126
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2130,
                        "end": 2131
                      },
                      "typeArguments": null,
                      "start": 2130,
                      "end": 2131
                    },
                    "start": 2128,
                    "end": 2131
                  },
                  "start": 2127,
                  "end": 2131
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2136,
                    "end": 2137
                  },
                  "typeArguments": null,
                  "start": 2136,
                  "end": 2137
                },
                "start": 2133,
                "end": 2137
              },
              "start": 2123,
              "end": 2137
            },
            "start": 2121,
            "end": 2137
          },
          "start": 2119,
          "end": 2137
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2140,
            "end": 2148
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
                  "start": 2149,
                  "end": 2150
                },
                "typeArguments": null,
                "start": 2149,
                "end": 2150
              }
            ],
            "start": 2148,
            "end": 2151
          },
          "start": 2140,
          "end": 2151
        },
        "start": 2138,
        "end": 2151
      },
      "body": null,
      "expression": false,
      "start": 2079,
      "end": 2152
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction9P",
        "optional": false,
        "typeAnnotation": null,
        "start": 2170,
        "end": 2184
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2185,
              "end": 2186
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2185,
            "end": 2186
          }
        ],
        "start": 2184,
        "end": 2187
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
                "start": 2191,
                "end": 2192
              },
              "typeArguments": null,
              "start": 2191,
              "end": 2192
            },
            "start": 2189,
            "end": 2192
          },
          "start": 2188,
          "end": 2192
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
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
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2199,
                      "end": 2200
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2199,
                    "end": 2200
                  }
                ],
                "start": 2198,
                "end": 2201
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2205,
                        "end": 2206
                      },
                      "typeArguments": null,
                      "start": 2205,
                      "end": 2206
                    },
                    "start": 2203,
                    "end": 2206
                  },
                  "start": 2202,
                  "end": 2206
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2211,
                    "end": 2212
                  },
                  "typeArguments": null,
                  "start": 2211,
                  "end": 2212
                },
                "start": 2208,
                "end": 2212
              },
              "start": 2198,
              "end": 2212
            },
            "start": 2196,
            "end": 2212
          },
          "start": 2194,
          "end": 2212
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2215,
            "end": 2222
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
                  "start": 2223,
                  "end": 2224
                },
                "typeArguments": null,
                "start": 2223,
                "end": 2224
              }
            ],
            "start": 2222,
            "end": 2225
          },
          "start": 2215,
          "end": 2225
        },
        "start": 2213,
        "end": 2225
      },
      "body": null,
      "expression": false,
      "start": 2153,
      "end": 2226
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction10",
        "optional": false,
        "typeAnnotation": null,
        "start": 2244,
        "end": 2258
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2259,
              "end": 2260
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2259,
            "end": 2260
          }
        ],
        "start": 2258,
        "end": 2261
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
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
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2267,
                      "end": 2268
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2267,
                    "end": 2268
                  }
                ],
                "start": 2266,
                "end": 2269
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2273,
                        "end": 2274
                      },
                      "typeArguments": null,
                      "start": 2273,
                      "end": 2274
                    },
                    "start": 2271,
                    "end": 2274
                  },
                  "start": 2270,
                  "end": 2274
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2279,
                    "end": 2280
                  },
                  "typeArguments": null,
                  "start": 2279,
                  "end": 2280
                },
                "start": 2276,
                "end": 2280
              },
              "start": 2266,
              "end": 2280
            },
            "start": 2264,
            "end": 2280
          },
          "start": 2262,
          "end": 2280
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2283,
            "end": 2291
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
                  "start": 2292,
                  "end": 2293
                },
                "typeArguments": null,
                "start": 2292,
                "end": 2293
              }
            ],
            "start": 2291,
            "end": 2294
          },
          "start": 2283,
          "end": 2294
        },
        "start": 2281,
        "end": 2294
      },
      "body": null,
      "expression": false,
      "start": 2227,
      "end": 2295
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction10P",
        "optional": false,
        "typeAnnotation": null,
        "start": 2313,
        "end": 2328
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2329,
              "end": 2330
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2329,
            "end": 2330
          }
        ],
        "start": 2328,
        "end": 2331
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
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
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2337,
                      "end": 2338
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2337,
                    "end": 2338
                  }
                ],
                "start": 2336,
                "end": 2339
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2343,
                        "end": 2344
                      },
                      "typeArguments": null,
                      "start": 2343,
                      "end": 2344
                    },
                    "start": 2341,
                    "end": 2344
                  },
                  "start": 2340,
                  "end": 2344
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2349,
                    "end": 2350
                  },
                  "typeArguments": null,
                  "start": 2349,
                  "end": 2350
                },
                "start": 2346,
                "end": 2350
              },
              "start": 2336,
              "end": 2350
            },
            "start": 2334,
            "end": 2350
          },
          "start": 2332,
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
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2353,
            "end": 2360
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
                  "start": 2361,
                  "end": 2362
                },
                "typeArguments": null,
                "start": 2361,
                "end": 2362
              }
            ],
            "start": 2360,
            "end": 2363
          },
          "start": 2353,
          "end": 2363
        },
        "start": 2351,
        "end": 2363
      },
      "body": null,
      "expression": false,
      "start": 2296,
      "end": 2364
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2383,
        "end": 2397
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 2401,
              "end": 2407
            },
            "start": 2399,
            "end": 2407
          },
          "start": 2398,
          "end": 2407
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2410,
            "end": 2418
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2419,
                "end": 2425
              }
            ],
            "start": 2418,
            "end": 2426
          },
          "start": 2410,
          "end": 2426
        },
        "start": 2408,
        "end": 2426
      },
      "body": null,
      "expression": false,
      "start": 2366,
      "end": 2427
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2445,
        "end": 2459
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSStringKeyword",
              "start": 2463,
              "end": 2469
            },
            "start": 2461,
            "end": 2469
          },
          "start": 2460,
          "end": 2469
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2472,
            "end": 2480
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 2481,
                "end": 2487
              }
            ],
            "start": 2480,
            "end": 2488
          },
          "start": 2472,
          "end": 2488
        },
        "start": 2470,
        "end": 2488
      },
      "body": null,
      "expression": false,
      "start": 2428,
      "end": 2489
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction11P",
        "optional": false,
        "typeAnnotation": null,
        "start": 2507,
        "end": 2522
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 2526,
              "end": 2532
            },
            "start": 2524,
            "end": 2532
          },
          "start": 2523,
          "end": 2532
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2535,
            "end": 2542
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2543,
                "end": 2549
              }
            ],
            "start": 2542,
            "end": 2550
          },
          "start": 2535,
          "end": 2550
        },
        "start": 2533,
        "end": 2550
      },
      "body": null,
      "expression": false,
      "start": 2490,
      "end": 2551
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction11P",
        "optional": false,
        "typeAnnotation": null,
        "start": 2569,
        "end": 2584
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSStringKeyword",
              "start": 2588,
              "end": 2594
            },
            "start": 2586,
            "end": 2594
          },
          "start": 2585,
          "end": 2594
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2597,
            "end": 2604
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 2605,
                "end": 2611
              }
            ],
            "start": 2604,
            "end": 2612
          },
          "start": 2597,
          "end": 2612
        },
        "start": 2595,
        "end": 2612
      },
      "body": null,
      "expression": false,
      "start": 2552,
      "end": 2613
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2632,
        "end": 2646
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2647,
              "end": 2648
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2647,
            "end": 2648
          }
        ],
        "start": 2646,
        "end": 2649
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
                "start": 2653,
                "end": 2654
              },
              "typeArguments": null,
              "start": 2653,
              "end": 2654
            },
            "start": 2651,
            "end": 2654
          },
          "start": 2650,
          "end": 2654
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2657,
            "end": 2665
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
                  "start": 2666,
                  "end": 2667
                },
                "typeArguments": null,
                "start": 2666,
                "end": 2667
              }
            ],
            "start": 2665,
            "end": 2668
          },
          "start": 2657,
          "end": 2668
        },
        "start": 2655,
        "end": 2668
      },
      "body": null,
      "expression": false,
      "start": 2615,
      "end": 2669
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2687,
        "end": 2701
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2702,
              "end": 2703
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2702,
            "end": 2703
          }
        ],
        "start": 2701,
        "end": 2704
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
                "start": 2708,
                "end": 2709
              },
              "typeArguments": null,
              "start": 2708,
              "end": 2709
            },
            "start": 2706,
            "end": 2709
          },
          "start": 2705,
          "end": 2709
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
                "start": 2714,
                "end": 2715
              },
              "typeArguments": null,
              "start": 2714,
              "end": 2715
            },
            "start": 2712,
            "end": 2715
          },
          "start": 2711,
          "end": 2715
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2718,
            "end": 2726
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
                  "start": 2727,
                  "end": 2728
                },
                "typeArguments": null,
                "start": 2727,
                "end": 2728
              }
            ],
            "start": 2726,
            "end": 2729
          },
          "start": 2718,
          "end": 2729
        },
        "start": 2716,
        "end": 2729
      },
      "body": null,
      "expression": false,
      "start": 2670,
      "end": 2730
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction12P",
        "optional": false,
        "typeAnnotation": null,
        "start": 2748,
        "end": 2763
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2764,
              "end": 2765
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2764,
            "end": 2765
          }
        ],
        "start": 2763,
        "end": 2766
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
                "start": 2770,
                "end": 2771
              },
              "typeArguments": null,
              "start": 2770,
              "end": 2771
            },
            "start": 2768,
            "end": 2771
          },
          "start": 2767,
          "end": 2771
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "IPromise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2774,
            "end": 2782
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
                  "start": 2783,
                  "end": 2784
                },
                "typeArguments": null,
                "start": 2783,
                "end": 2784
              }
            ],
            "start": 2782,
            "end": 2785
          },
          "start": 2774,
          "end": 2785
        },
        "start": 2772,
        "end": 2785
      },
      "body": null,
      "expression": false,
      "start": 2731,
      "end": 2786
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction12P",
        "optional": false,
        "typeAnnotation": null,
        "start": 2804,
        "end": 2819
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2820,
              "end": 2821
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2820,
            "end": 2821
          }
        ],
        "start": 2819,
        "end": 2822
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
                "start": 2826,
                "end": 2827
              },
              "typeArguments": null,
              "start": 2826,
              "end": 2827
            },
            "start": 2824,
            "end": 2827
          },
          "start": 2823,
          "end": 2827
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
                "start": 2832,
                "end": 2833
              },
              "typeArguments": null,
              "start": 2832,
              "end": 2833
            },
            "start": 2830,
            "end": 2833
          },
          "start": 2829,
          "end": 2833
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 2836,
            "end": 2843
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
                  "start": 2844,
                  "end": 2845
                },
                "typeArguments": null,
                "start": 2844,
                "end": 2845
              }
            ],
            "start": 2843,
            "end": 2846
          },
          "start": 2836,
          "end": 2846
        },
        "start": 2834,
        "end": 2846
      },
      "body": null,
      "expression": false,
      "start": 2787,
      "end": 2847
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2865,
                  "end": 2873
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 2874,
                      "end": 2880
                    }
                  ],
                  "start": 2873,
                  "end": 2881
                },
                "start": 2865,
                "end": 2881
              },
              "start": 2863,
              "end": 2881
            },
            "start": 2861,
            "end": 2881
          },
          "init": null,
          "definite": false,
          "start": 2861,
          "end": 2881
        }
      ],
      "declare": true,
      "start": 2849,
      "end": 2882
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r1a",
            "optional": false,
            "typeAnnotation": null,
            "start": 2887,
            "end": 2890
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2893,
                "end": 2895
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 2896,
                "end": 2900
              },
              "optional": false,
              "computed": false,
              "start": 2893,
              "end": 2900
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 2901,
                "end": 2913
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 2915,
                "end": 2927
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 2929,
                "end": 2941
              }
            ],
            "optional": false,
            "start": 2893,
            "end": 2942
          },
          "definite": false,
          "start": 2887,
          "end": 2942
        }
      ],
      "declare": false,
      "start": 2883,
      "end": 2943
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r1b",
            "optional": false,
            "typeAnnotation": null,
            "start": 2948,
            "end": 2951
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2954,
                    "end": 2956
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2957,
                    "end": 2961
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2954,
                  "end": 2961
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2962,
                    "end": 2974
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2976,
                    "end": 2988
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2990,
                    "end": 3002
                  }
                ],
                "optional": false,
                "start": 2954,
                "end": 3003
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3004,
                "end": 3008
              },
              "optional": false,
              "computed": false,
              "start": 2954,
              "end": 3008
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3009,
                "end": 3021
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3023,
                "end": 3035
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3037,
                "end": 3049
              }
            ],
            "optional": false,
            "start": 2954,
            "end": 3050
          },
          "definite": false,
          "start": 2948,
          "end": 3050
        }
      ],
      "declare": false,
      "start": 2944,
      "end": 3051
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r1c",
            "optional": false,
            "typeAnnotation": null,
            "start": 3056,
            "end": 3059
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3062,
                "end": 3064
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3065,
                "end": 3069
              },
              "optional": false,
              "computed": false,
              "start": 3062,
              "end": 3069
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null,
                "start": 3070,
                "end": 3083
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null,
                "start": 3085,
                "end": 3098
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null,
                "start": 3100,
                "end": 3113
              }
            ],
            "optional": false,
            "start": 3062,
            "end": 3114
          },
          "definite": false,
          "start": 3056,
          "end": 3114
        }
      ],
      "declare": false,
      "start": 3052,
      "end": 3115
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3132,
                  "end": 3139
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 3140,
                      "end": 3146
                    }
                  ],
                  "start": 3139,
                  "end": 3147
                },
                "start": 3132,
                "end": 3147
              },
              "start": 3130,
              "end": 3147
            },
            "start": 3128,
            "end": 3147
          },
          "init": null,
          "definite": false,
          "start": 3128,
          "end": 3147
        }
      ],
      "declare": true,
      "start": 3116,
      "end": 3148
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s1a",
            "optional": false,
            "typeAnnotation": null,
            "start": 3153,
            "end": 3156
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3159,
                "end": 3161
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3162,
                "end": 3166
              },
              "optional": false,
              "computed": false,
              "start": 3159,
              "end": 3166
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3167,
                "end": 3179
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3181,
                "end": 3193
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3195,
                "end": 3207
              }
            ],
            "optional": false,
            "start": 3159,
            "end": 3208
          },
          "definite": false,
          "start": 3153,
          "end": 3208
        }
      ],
      "declare": false,
      "start": 3149,
      "end": 3209
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s1b",
            "optional": false,
            "typeAnnotation": null,
            "start": 3214,
            "end": 3217
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3220,
                "end": 3222
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3223,
                "end": 3227
              },
              "optional": false,
              "computed": false,
              "start": 3220,
              "end": 3227
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null,
                "start": 3228,
                "end": 3241
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null,
                "start": 3243,
                "end": 3256
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null,
                "start": 3258,
                "end": 3271
              }
            ],
            "optional": false,
            "start": 3220,
            "end": 3272
          },
          "definite": false,
          "start": 3214,
          "end": 3272
        }
      ],
      "declare": false,
      "start": 3210,
      "end": 3273
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s1c",
            "optional": false,
            "typeAnnotation": null,
            "start": 3278,
            "end": 3281
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s1",
                "optional": false,
                "typeAnnotation": null,
                "start": 3284,
                "end": 3286
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3287,
                "end": 3291
              },
              "optional": false,
              "computed": false,
              "start": 3284,
              "end": 3291
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null,
                "start": 3292,
                "end": 3305
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3307,
                "end": 3319
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3321,
                "end": 3333
              }
            ],
            "optional": false,
            "start": 3284,
            "end": 3334
          },
          "definite": false,
          "start": 3278,
          "end": 3334
        }
      ],
      "declare": false,
      "start": 3274,
      "end": 3335
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s1d",
            "optional": false,
            "typeAnnotation": null,
            "start": 3340,
            "end": 3343
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3346,
                    "end": 3348
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3349,
                    "end": 3353
                  },
                  "optional": false,
                  "computed": false,
                  "start": 3346,
                  "end": 3353
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunctionP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3354,
                    "end": 3367
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3369,
                    "end": 3381
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3383,
                    "end": 3395
                  }
                ],
                "optional": false,
                "start": 3346,
                "end": 3396
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3397,
                "end": 3401
              },
              "optional": false,
              "computed": false,
              "start": 3346,
              "end": 3401
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3402,
                "end": 3414
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3416,
                "end": 3428
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3430,
                "end": 3442
              }
            ],
            "optional": false,
            "start": 3346,
            "end": 3443
          },
          "definite": false,
          "start": 3340,
          "end": 3443
        }
      ],
      "declare": false,
      "start": 3336,
      "end": 3444
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3462,
                  "end": 3470
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3473,
                            "end": 3474
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3476,
                              "end": 3482
                            },
                            "start": 3474,
                            "end": 3482
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 3473,
                          "end": 3483
                        }
                      ],
                      "start": 3471,
                      "end": 3485
                    }
                  ],
                  "start": 3470,
                  "end": 3486
                },
                "start": 3462,
                "end": 3486
              },
              "start": 3460,
              "end": 3486
            },
            "start": 3458,
            "end": 3486
          },
          "init": null,
          "definite": false,
          "start": 3458,
          "end": 3486
        }
      ],
      "declare": true,
      "start": 3446,
      "end": 3487
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r2a",
            "optional": false,
            "typeAnnotation": null,
            "start": 3492,
            "end": 3495
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3498,
                "end": 3500
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3501,
                "end": 3505
              },
              "optional": false,
              "computed": false,
              "start": 3498,
              "end": 3505
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3506,
                "end": 3519
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3521,
                "end": 3534
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3536,
                "end": 3549
              }
            ],
            "optional": false,
            "start": 3498,
            "end": 3550
          },
          "definite": false,
          "start": 3492,
          "end": 3550
        }
      ],
      "declare": false,
      "start": 3488,
      "end": 3551
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r2b",
            "optional": false,
            "typeAnnotation": null,
            "start": 3556,
            "end": 3559
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3562,
                    "end": 3564
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3565,
                    "end": 3569
                  },
                  "optional": false,
                  "computed": false,
                  "start": 3562,
                  "end": 3569
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3570,
                    "end": 3583
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3585,
                    "end": 3598
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3600,
                    "end": 3613
                  }
                ],
                "optional": false,
                "start": 3562,
                "end": 3614
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3615,
                "end": 3619
              },
              "optional": false,
              "computed": false,
              "start": 3562,
              "end": 3619
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3620,
                "end": 3633
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3635,
                "end": 3648
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3650,
                "end": 3663
              }
            ],
            "optional": false,
            "start": 3562,
            "end": 3664
          },
          "definite": false,
          "start": 3556,
          "end": 3664
        }
      ],
      "declare": false,
      "start": 3552,
      "end": 3665
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3682,
                  "end": 3689
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3692,
                            "end": 3693
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3695,
                              "end": 3701
                            },
                            "start": 3693,
                            "end": 3701
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 3692,
                          "end": 3702
                        }
                      ],
                      "start": 3690,
                      "end": 3704
                    }
                  ],
                  "start": 3689,
                  "end": 3705
                },
                "start": 3682,
                "end": 3705
              },
              "start": 3680,
              "end": 3705
            },
            "start": 3678,
            "end": 3705
          },
          "init": null,
          "definite": false,
          "start": 3678,
          "end": 3705
        }
      ],
      "declare": true,
      "start": 3666,
      "end": 3706
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s2a",
            "optional": false,
            "typeAnnotation": null,
            "start": 3711,
            "end": 3714
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3717,
                "end": 3719
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3720,
                "end": 3724
              },
              "optional": false,
              "computed": false,
              "start": 3717,
              "end": 3724
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3725,
                "end": 3738
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3740,
                "end": 3753
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3755,
                "end": 3768
              }
            ],
            "optional": false,
            "start": 3717,
            "end": 3769
          },
          "definite": false,
          "start": 3711,
          "end": 3769
        }
      ],
      "declare": false,
      "start": 3707,
      "end": 3770
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s2b",
            "optional": false,
            "typeAnnotation": null,
            "start": 3775,
            "end": 3778
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3781,
                "end": 3783
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3784,
                "end": 3788
              },
              "optional": false,
              "computed": false,
              "start": 3781,
              "end": 3788
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2P",
                "optional": false,
                "typeAnnotation": null,
                "start": 3789,
                "end": 3803
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2P",
                "optional": false,
                "typeAnnotation": null,
                "start": 3805,
                "end": 3819
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2P",
                "optional": false,
                "typeAnnotation": null,
                "start": 3821,
                "end": 3835
              }
            ],
            "optional": false,
            "start": 3781,
            "end": 3836
          },
          "definite": false,
          "start": 3775,
          "end": 3836
        }
      ],
      "declare": false,
      "start": 3771,
      "end": 3837
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s2c",
            "optional": false,
            "typeAnnotation": null,
            "start": 3842,
            "end": 3845
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3848,
                "end": 3850
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3851,
                "end": 3855
              },
              "optional": false,
              "computed": false,
              "start": 3848,
              "end": 3855
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2P",
                "optional": false,
                "typeAnnotation": null,
                "start": 3856,
                "end": 3870
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3872,
                "end": 3885
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3887,
                "end": 3900
              }
            ],
            "optional": false,
            "start": 3848,
            "end": 3901
          },
          "definite": false,
          "start": 3842,
          "end": 3901
        }
      ],
      "declare": false,
      "start": 3838,
      "end": 3902
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s2d",
            "optional": false,
            "typeAnnotation": null,
            "start": 3907,
            "end": 3910
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3913,
                    "end": 3915
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3916,
                    "end": 3920
                  },
                  "optional": false,
                  "computed": false,
                  "start": 3913,
                  "end": 3920
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction2P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3921,
                    "end": 3935
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3937,
                    "end": 3950
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3952,
                    "end": 3965
                  }
                ],
                "optional": false,
                "start": 3913,
                "end": 3966
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3967,
                "end": 3971
              },
              "optional": false,
              "computed": false,
              "start": 3913,
              "end": 3971
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3972,
                "end": 3985
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3987,
                "end": 4000
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 4002,
                "end": 4015
              }
            ],
            "optional": false,
            "start": 3913,
            "end": 4016
          },
          "definite": false,
          "start": 3907,
          "end": 4016
        }
      ],
      "declare": false,
      "start": 3903,
      "end": 4017
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4035,
                  "end": 4043
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 4044,
                      "end": 4050
                    }
                  ],
                  "start": 4043,
                  "end": 4051
                },
                "start": 4035,
                "end": 4051
              },
              "start": 4033,
              "end": 4051
            },
            "start": 4031,
            "end": 4051
          },
          "init": null,
          "definite": false,
          "start": 4031,
          "end": 4051
        }
      ],
      "declare": true,
      "start": 4019,
      "end": 4052
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r3a",
            "optional": false,
            "typeAnnotation": null,
            "start": 4057,
            "end": 4060
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4063,
                "end": 4065
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4066,
                "end": 4070
              },
              "optional": false,
              "computed": false,
              "start": 4063,
              "end": 4070
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4071,
                "end": 4084
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4086,
                "end": 4099
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4101,
                "end": 4114
              }
            ],
            "optional": false,
            "start": 4063,
            "end": 4115
          },
          "definite": false,
          "start": 4057,
          "end": 4115
        }
      ],
      "declare": false,
      "start": 4053,
      "end": 4116
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r3b",
            "optional": false,
            "typeAnnotation": null,
            "start": 4121,
            "end": 4124
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4127,
                    "end": 4129
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4130,
                    "end": 4134
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4127,
                  "end": 4134
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4135,
                    "end": 4148
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4150,
                    "end": 4163
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4165,
                    "end": 4178
                  }
                ],
                "optional": false,
                "start": 4127,
                "end": 4179
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4180,
                "end": 4184
              },
              "optional": false,
              "computed": false,
              "start": 4127,
              "end": 4184
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4185,
                "end": 4198
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4200,
                "end": 4213
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4215,
                "end": 4228
              }
            ],
            "optional": false,
            "start": 4127,
            "end": 4229
          },
          "definite": false,
          "start": 4121,
          "end": 4229
        }
      ],
      "declare": false,
      "start": 4117,
      "end": 4230
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4247,
                  "end": 4254
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 4255,
                      "end": 4261
                    }
                  ],
                  "start": 4254,
                  "end": 4262
                },
                "start": 4247,
                "end": 4262
              },
              "start": 4245,
              "end": 4262
            },
            "start": 4243,
            "end": 4262
          },
          "init": null,
          "definite": false,
          "start": 4243,
          "end": 4262
        }
      ],
      "declare": true,
      "start": 4231,
      "end": 4263
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s3a",
            "optional": false,
            "typeAnnotation": null,
            "start": 4268,
            "end": 4271
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4274,
                "end": 4276
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4277,
                "end": 4281
              },
              "optional": false,
              "computed": false,
              "start": 4274,
              "end": 4281
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4282,
                "end": 4295
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4297,
                "end": 4310
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4312,
                "end": 4325
              }
            ],
            "optional": false,
            "start": 4274,
            "end": 4326
          },
          "definite": false,
          "start": 4268,
          "end": 4326
        }
      ],
      "declare": false,
      "start": 4264,
      "end": 4327
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s3b",
            "optional": false,
            "typeAnnotation": null,
            "start": 4332,
            "end": 4335
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4338,
                "end": 4340
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4341,
                "end": 4345
              },
              "optional": false,
              "computed": false,
              "start": 4338,
              "end": 4345
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3P",
                "optional": false,
                "typeAnnotation": null,
                "start": 4346,
                "end": 4360
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3P",
                "optional": false,
                "typeAnnotation": null,
                "start": 4362,
                "end": 4376
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3P",
                "optional": false,
                "typeAnnotation": null,
                "start": 4378,
                "end": 4392
              }
            ],
            "optional": false,
            "start": 4338,
            "end": 4393
          },
          "definite": false,
          "start": 4332,
          "end": 4393
        }
      ],
      "declare": false,
      "start": 4328,
      "end": 4394
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s3c",
            "optional": false,
            "typeAnnotation": null,
            "start": 4399,
            "end": 4402
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4405,
                "end": 4407
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4408,
                "end": 4412
              },
              "optional": false,
              "computed": false,
              "start": 4405,
              "end": 4412
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3P",
                "optional": false,
                "typeAnnotation": null,
                "start": 4413,
                "end": 4427
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4429,
                "end": 4442
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4444,
                "end": 4457
              }
            ],
            "optional": false,
            "start": 4405,
            "end": 4458
          },
          "definite": false,
          "start": 4399,
          "end": 4458
        }
      ],
      "declare": false,
      "start": 4395,
      "end": 4459
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s3d",
            "optional": false,
            "typeAnnotation": null,
            "start": 4464,
            "end": 4467
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4470,
                    "end": 4472
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4473,
                    "end": 4477
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4470,
                  "end": 4477
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction3P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4478,
                    "end": 4492
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4494,
                    "end": 4507
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4509,
                    "end": 4522
                  }
                ],
                "optional": false,
                "start": 4470,
                "end": 4523
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4524,
                "end": 4528
              },
              "optional": false,
              "computed": false,
              "start": 4470,
              "end": 4528
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4529,
                "end": 4542
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4544,
                "end": 4557
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4559,
                "end": 4572
              }
            ],
            "optional": false,
            "start": 4470,
            "end": 4573
          },
          "definite": false,
          "start": 4464,
          "end": 4573
        }
      ],
      "declare": false,
      "start": 4460,
      "end": 4574
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4592,
                  "end": 4600
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 4601,
                      "end": 4607
                    }
                  ],
                  "start": 4600,
                  "end": 4608
                },
                "start": 4592,
                "end": 4608
              },
              "start": 4590,
              "end": 4608
            },
            "start": 4588,
            "end": 4608
          },
          "init": null,
          "definite": false,
          "start": 4588,
          "end": 4608
        }
      ],
      "declare": true,
      "start": 4576,
      "end": 4609
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "sIPromise",
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
                        "type": "TSAnyKeyword",
                        "start": 4637,
                        "end": 4640
                      },
                      "start": 4635,
                      "end": 4640
                    },
                    "start": 4634,
                    "end": 4640
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IPromise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4645,
                      "end": 4653
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 4654,
                          "end": 4660
                        }
                      ],
                      "start": 4653,
                      "end": 4661
                    },
                    "start": 4645,
                    "end": 4661
                  },
                  "start": 4642,
                  "end": 4661
                },
                "start": 4633,
                "end": 4661
              },
              "start": 4631,
              "end": 4661
            },
            "start": 4622,
            "end": 4661
          },
          "init": null,
          "definite": false,
          "start": 4622,
          "end": 4661
        }
      ],
      "declare": true,
      "start": 4610,
      "end": 4662
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "sPromise",
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
                        "type": "TSAnyKeyword",
                        "start": 4689,
                        "end": 4692
                      },
                      "start": 4687,
                      "end": 4692
                    },
                    "start": 4686,
                    "end": 4692
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4697,
                      "end": 4704
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 4705,
                          "end": 4711
                        }
                      ],
                      "start": 4704,
                      "end": 4712
                    },
                    "start": 4697,
                    "end": 4712
                  },
                  "start": 4694,
                  "end": 4712
                },
                "start": 4685,
                "end": 4712
              },
              "start": 4683,
              "end": 4712
            },
            "start": 4675,
            "end": 4712
          },
          "init": null,
          "definite": false,
          "start": 4675,
          "end": 4712
        }
      ],
      "declare": true,
      "start": 4663,
      "end": 4713
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r4a",
            "optional": false,
            "typeAnnotation": null,
            "start": 4718,
            "end": 4721
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r4",
                "optional": false,
                "typeAnnotation": null,
                "start": 4724,
                "end": 4726
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4727,
                "end": 4731
              },
              "optional": false,
              "computed": false,
              "start": 4724,
              "end": 4731
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 4732,
                "end": 4745
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 4747,
                "end": 4760
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 4762,
                "end": 4775
              }
            ],
            "optional": false,
            "start": 4724,
            "end": 4776
          },
          "definite": false,
          "start": 4718,
          "end": 4776
        }
      ],
      "declare": false,
      "start": 4714,
      "end": 4777
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r4b",
            "optional": false,
            "typeAnnotation": null,
            "start": 4791,
            "end": 4794
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4797,
                    "end": 4799
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4800,
                    "end": 4804
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4797,
                  "end": 4804
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4805,
                    "end": 4814
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4816,
                    "end": 4829
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4831,
                    "end": 4844
                  }
                ],
                "optional": false,
                "start": 4797,
                "end": 4845
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4846,
                "end": 4850
              },
              "optional": false,
              "computed": false,
              "start": 4797,
              "end": 4850
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 4851,
                "end": 4860
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 4862,
                "end": 4875
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 4877,
                "end": 4890
              }
            ],
            "optional": false,
            "start": 4797,
            "end": 4891
          },
          "definite": false,
          "start": 4791,
          "end": 4891
        }
      ],
      "declare": false,
      "start": 4787,
      "end": 4892
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4915,
                  "end": 4922
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 4923,
                      "end": 4929
                    }
                  ],
                  "start": 4922,
                  "end": 4930
                },
                "start": 4915,
                "end": 4930
              },
              "start": 4913,
              "end": 4930
            },
            "start": 4911,
            "end": 4930
          },
          "init": null,
          "definite": false,
          "start": 4911,
          "end": 4930
        }
      ],
      "declare": true,
      "start": 4899,
      "end": 4931
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s4a",
            "optional": false,
            "typeAnnotation": null,
            "start": 4936,
            "end": 4939
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s4",
                "optional": false,
                "typeAnnotation": null,
                "start": 4942,
                "end": 4944
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4945,
                "end": 4949
              },
              "optional": false,
              "computed": false,
              "start": 4942,
              "end": 4949
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 4950,
                "end": 4963
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 4965,
                "end": 4978
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 4980,
                "end": 4993
              }
            ],
            "optional": false,
            "start": 4942,
            "end": 4994
          },
          "definite": false,
          "start": 4936,
          "end": 4994
        }
      ],
      "declare": false,
      "start": 4932,
      "end": 4995
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s4b",
            "optional": false,
            "typeAnnotation": null,
            "start": 5009,
            "end": 5012
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s4",
                "optional": false,
                "typeAnnotation": null,
                "start": 5015,
                "end": 5017
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5018,
                "end": 5022
              },
              "optional": false,
              "computed": false,
              "start": 5015,
              "end": 5022
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4P",
                "optional": false,
                "typeAnnotation": null,
                "start": 5023,
                "end": 5037
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4P",
                "optional": false,
                "typeAnnotation": null,
                "start": 5039,
                "end": 5053
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4P",
                "optional": false,
                "typeAnnotation": null,
                "start": 5055,
                "end": 5069
              }
            ],
            "optional": false,
            "start": 5015,
            "end": 5070
          },
          "definite": false,
          "start": 5009,
          "end": 5070
        }
      ],
      "declare": false,
      "start": 5005,
      "end": 5071
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s4c",
            "optional": false,
            "typeAnnotation": null,
            "start": 5086,
            "end": 5089
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s4",
                "optional": false,
                "typeAnnotation": null,
                "start": 5092,
                "end": 5094
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5095,
                "end": 5099
              },
              "optional": false,
              "computed": false,
              "start": 5092,
              "end": 5099
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4P",
                "optional": false,
                "typeAnnotation": null,
                "start": 5100,
                "end": 5114
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 5116,
                "end": 5129
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 5131,
                "end": 5144
              }
            ],
            "optional": false,
            "start": 5092,
            "end": 5145
          },
          "definite": false,
          "start": 5086,
          "end": 5145
        }
      ],
      "declare": false,
      "start": 5082,
      "end": 5146
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s4d",
            "optional": false,
            "typeAnnotation": null,
            "start": 5160,
            "end": 5163
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5166,
                    "end": 5168
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5169,
                    "end": 5173
                  },
                  "optional": false,
                  "computed": false,
                  "start": 5166,
                  "end": 5173
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5174,
                    "end": 5183
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction4P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5185,
                    "end": 5199
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5201,
                    "end": 5214
                  }
                ],
                "optional": false,
                "start": 5166,
                "end": 5215
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5216,
                "end": 5220
              },
              "optional": false,
              "computed": false,
              "start": 5166,
              "end": 5220
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 5221,
                "end": 5230
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4P",
                "optional": false,
                "typeAnnotation": null,
                "start": 5232,
                "end": 5246
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 5248,
                "end": 5261
              }
            ],
            "optional": false,
            "start": 5166,
            "end": 5262
          },
          "definite": false,
          "start": 5160,
          "end": 5262
        }
      ],
      "declare": false,
      "start": 5156,
      "end": 5263
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5281,
                  "end": 5289
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 5290,
                      "end": 5296
                    }
                  ],
                  "start": 5289,
                  "end": 5297
                },
                "start": 5281,
                "end": 5297
              },
              "start": 5279,
              "end": 5297
            },
            "start": 5277,
            "end": 5297
          },
          "init": null,
          "definite": false,
          "start": 5277,
          "end": 5297
        }
      ],
      "declare": true,
      "start": 5265,
      "end": 5298
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r5a",
            "optional": false,
            "typeAnnotation": null,
            "start": 5303,
            "end": 5306
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5309,
                "end": 5311
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5312,
                "end": 5316
              },
              "optional": false,
              "computed": false,
              "start": 5309,
              "end": 5316
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5317,
                "end": 5330
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5332,
                "end": 5345
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5347,
                "end": 5360
              }
            ],
            "optional": false,
            "start": 5309,
            "end": 5361
          },
          "definite": false,
          "start": 5303,
          "end": 5361
        }
      ],
      "declare": false,
      "start": 5299,
      "end": 5362
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r5b",
            "optional": false,
            "typeAnnotation": null,
            "start": 5376,
            "end": 5379
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5382,
                    "end": 5384
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5385,
                    "end": 5389
                  },
                  "optional": false,
                  "computed": false,
                  "start": 5382,
                  "end": 5389
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5390,
                    "end": 5399
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5401,
                    "end": 5410
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5412,
                    "end": 5421
                  }
                ],
                "optional": false,
                "start": 5382,
                "end": 5422
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5423,
                "end": 5427
              },
              "optional": false,
              "computed": false,
              "start": 5382,
              "end": 5427
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 5428,
                "end": 5437
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 5439,
                "end": 5448
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 5450,
                "end": 5459
              }
            ],
            "optional": false,
            "start": 5382,
            "end": 5460
          },
          "definite": false,
          "start": 5376,
          "end": 5460
        }
      ],
      "declare": false,
      "start": 5372,
      "end": 5461
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5484,
                  "end": 5491
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 5492,
                      "end": 5498
                    }
                  ],
                  "start": 5491,
                  "end": 5499
                },
                "start": 5484,
                "end": 5499
              },
              "start": 5482,
              "end": 5499
            },
            "start": 5480,
            "end": 5499
          },
          "init": null,
          "definite": false,
          "start": 5480,
          "end": 5499
        }
      ],
      "declare": true,
      "start": 5468,
      "end": 5500
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s5a",
            "optional": false,
            "typeAnnotation": null,
            "start": 5505,
            "end": 5508
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5511,
                "end": 5513
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5514,
                "end": 5518
              },
              "optional": false,
              "computed": false,
              "start": 5511,
              "end": 5518
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5519,
                "end": 5532
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5534,
                "end": 5547
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5549,
                "end": 5562
              }
            ],
            "optional": false,
            "start": 5511,
            "end": 5563
          },
          "definite": false,
          "start": 5505,
          "end": 5563
        }
      ],
      "declare": false,
      "start": 5501,
      "end": 5564
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s5b",
            "optional": false,
            "typeAnnotation": null,
            "start": 5578,
            "end": 5581
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5584,
                "end": 5586
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5587,
                "end": 5591
              },
              "optional": false,
              "computed": false,
              "start": 5584,
              "end": 5591
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5P",
                "optional": false,
                "typeAnnotation": null,
                "start": 5592,
                "end": 5606
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5P",
                "optional": false,
                "typeAnnotation": null,
                "start": 5608,
                "end": 5622
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5P",
                "optional": false,
                "typeAnnotation": null,
                "start": 5624,
                "end": 5638
              }
            ],
            "optional": false,
            "start": 5584,
            "end": 5639
          },
          "definite": false,
          "start": 5578,
          "end": 5639
        }
      ],
      "declare": false,
      "start": 5574,
      "end": 5640
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s5c",
            "optional": false,
            "typeAnnotation": null,
            "start": 5654,
            "end": 5657
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5660,
                "end": 5662
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5663,
                "end": 5667
              },
              "optional": false,
              "computed": false,
              "start": 5660,
              "end": 5667
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5P",
                "optional": false,
                "typeAnnotation": null,
                "start": 5668,
                "end": 5682
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5684,
                "end": 5697
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5699,
                "end": 5712
              }
            ],
            "optional": false,
            "start": 5660,
            "end": 5713
          },
          "definite": false,
          "start": 5654,
          "end": 5713
        }
      ],
      "declare": false,
      "start": 5650,
      "end": 5714
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s5d",
            "optional": false,
            "typeAnnotation": null,
            "start": 5728,
            "end": 5731
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5734,
                    "end": 5736
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5737,
                    "end": 5741
                  },
                  "optional": false,
                  "computed": false,
                  "start": 5734,
                  "end": 5741
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5742,
                    "end": 5750
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5752,
                    "end": 5760
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5762,
                    "end": 5770
                  }
                ],
                "optional": false,
                "start": 5734,
                "end": 5771
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5772,
                "end": 5776
              },
              "optional": false,
              "computed": false,
              "start": 5734,
              "end": 5776
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 5777,
                "end": 5786
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 5788,
                "end": 5797
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 5799,
                "end": 5808
              }
            ],
            "optional": false,
            "start": 5734,
            "end": 5809
          },
          "definite": false,
          "start": 5728,
          "end": 5809
        }
      ],
      "declare": false,
      "start": 5724,
      "end": 5810
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5834,
                  "end": 5842
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 5843,
                      "end": 5849
                    }
                  ],
                  "start": 5842,
                  "end": 5850
                },
                "start": 5834,
                "end": 5850
              },
              "start": 5832,
              "end": 5850
            },
            "start": 5830,
            "end": 5850
          },
          "init": null,
          "definite": false,
          "start": 5830,
          "end": 5850
        }
      ],
      "declare": true,
      "start": 5818,
      "end": 5851
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r6a",
            "optional": false,
            "typeAnnotation": null,
            "start": 5856,
            "end": 5859
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r6",
                "optional": false,
                "typeAnnotation": null,
                "start": 5862,
                "end": 5864
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5865,
                "end": 5869
              },
              "optional": false,
              "computed": false,
              "start": 5862,
              "end": 5869
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6",
                "optional": false,
                "typeAnnotation": null,
                "start": 5870,
                "end": 5883
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6",
                "optional": false,
                "typeAnnotation": null,
                "start": 5885,
                "end": 5898
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6",
                "optional": false,
                "typeAnnotation": null,
                "start": 5900,
                "end": 5913
              }
            ],
            "optional": false,
            "start": 5862,
            "end": 5914
          },
          "definite": false,
          "start": 5856,
          "end": 5914
        }
      ],
      "declare": false,
      "start": 5852,
      "end": 5915
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r6b",
            "optional": false,
            "typeAnnotation": null,
            "start": 5929,
            "end": 5932
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5935,
                    "end": 5937
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5938,
                    "end": 5942
                  },
                  "optional": false,
                  "computed": false,
                  "start": 5935,
                  "end": 5942
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5943,
                    "end": 5952
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5954,
                    "end": 5963
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5965,
                    "end": 5974
                  }
                ],
                "optional": false,
                "start": 5935,
                "end": 5975
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5976,
                "end": 5980
              },
              "optional": false,
              "computed": false,
              "start": 5935,
              "end": 5980
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 5981,
                "end": 5990
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 5992,
                "end": 6001
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6003,
                "end": 6012
              }
            ],
            "optional": false,
            "start": 5935,
            "end": 6013
          },
          "definite": false,
          "start": 5929,
          "end": 6013
        }
      ],
      "declare": false,
      "start": 5925,
      "end": 6014
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6037,
                  "end": 6044
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 6045,
                      "end": 6051
                    }
                  ],
                  "start": 6044,
                  "end": 6052
                },
                "start": 6037,
                "end": 6052
              },
              "start": 6035,
              "end": 6052
            },
            "start": 6033,
            "end": 6052
          },
          "init": null,
          "definite": false,
          "start": 6033,
          "end": 6052
        }
      ],
      "declare": true,
      "start": 6021,
      "end": 6053
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s6a",
            "optional": false,
            "typeAnnotation": null,
            "start": 6058,
            "end": 6061
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s6",
                "optional": false,
                "typeAnnotation": null,
                "start": 6064,
                "end": 6066
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6067,
                "end": 6071
              },
              "optional": false,
              "computed": false,
              "start": 6064,
              "end": 6071
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6",
                "optional": false,
                "typeAnnotation": null,
                "start": 6072,
                "end": 6085
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6",
                "optional": false,
                "typeAnnotation": null,
                "start": 6087,
                "end": 6100
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6",
                "optional": false,
                "typeAnnotation": null,
                "start": 6102,
                "end": 6115
              }
            ],
            "optional": false,
            "start": 6064,
            "end": 6116
          },
          "definite": false,
          "start": 6058,
          "end": 6116
        }
      ],
      "declare": false,
      "start": 6054,
      "end": 6117
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s6b",
            "optional": false,
            "typeAnnotation": null,
            "start": 6131,
            "end": 6134
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s6",
                "optional": false,
                "typeAnnotation": null,
                "start": 6137,
                "end": 6139
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6140,
                "end": 6144
              },
              "optional": false,
              "computed": false,
              "start": 6137,
              "end": 6144
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6P",
                "optional": false,
                "typeAnnotation": null,
                "start": 6145,
                "end": 6159
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6P",
                "optional": false,
                "typeAnnotation": null,
                "start": 6161,
                "end": 6175
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6P",
                "optional": false,
                "typeAnnotation": null,
                "start": 6177,
                "end": 6191
              }
            ],
            "optional": false,
            "start": 6137,
            "end": 6192
          },
          "definite": false,
          "start": 6131,
          "end": 6192
        }
      ],
      "declare": false,
      "start": 6127,
      "end": 6193
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s6c",
            "optional": false,
            "typeAnnotation": null,
            "start": 6207,
            "end": 6210
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s6",
                "optional": false,
                "typeAnnotation": null,
                "start": 6213,
                "end": 6215
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6216,
                "end": 6220
              },
              "optional": false,
              "computed": false,
              "start": 6213,
              "end": 6220
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6P",
                "optional": false,
                "typeAnnotation": null,
                "start": 6221,
                "end": 6235
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6",
                "optional": false,
                "typeAnnotation": null,
                "start": 6237,
                "end": 6250
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6",
                "optional": false,
                "typeAnnotation": null,
                "start": 6252,
                "end": 6265
              }
            ],
            "optional": false,
            "start": 6213,
            "end": 6266
          },
          "definite": false,
          "start": 6207,
          "end": 6266
        }
      ],
      "declare": false,
      "start": 6203,
      "end": 6267
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s6d",
            "optional": false,
            "typeAnnotation": null,
            "start": 6281,
            "end": 6284
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6287,
                    "end": 6289
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6290,
                    "end": 6294
                  },
                  "optional": false,
                  "computed": false,
                  "start": 6287,
                  "end": 6294
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6295,
                    "end": 6303
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6305,
                    "end": 6313
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6315,
                    "end": 6323
                  }
                ],
                "optional": false,
                "start": 6287,
                "end": 6324
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6325,
                "end": 6329
              },
              "optional": false,
              "computed": false,
              "start": 6287,
              "end": 6329
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6330,
                "end": 6339
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6341,
                "end": 6350
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6352,
                "end": 6361
              }
            ],
            "optional": false,
            "start": 6287,
            "end": 6362
          },
          "definite": false,
          "start": 6281,
          "end": 6362
        }
      ],
      "declare": false,
      "start": 6277,
      "end": 6363
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6387,
                  "end": 6395
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 6396,
                      "end": 6402
                    }
                  ],
                  "start": 6395,
                  "end": 6403
                },
                "start": 6387,
                "end": 6403
              },
              "start": 6385,
              "end": 6403
            },
            "start": 6383,
            "end": 6403
          },
          "init": null,
          "definite": false,
          "start": 6383,
          "end": 6403
        }
      ],
      "declare": true,
      "start": 6371,
      "end": 6404
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r7a",
            "optional": false,
            "typeAnnotation": null,
            "start": 6409,
            "end": 6412
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6415,
                "end": 6417
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6418,
                "end": 6422
              },
              "optional": false,
              "computed": false,
              "start": 6415,
              "end": 6422
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6423,
                "end": 6436
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6438,
                "end": 6451
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6453,
                "end": 6466
              }
            ],
            "optional": false,
            "start": 6415,
            "end": 6467
          },
          "definite": false,
          "start": 6409,
          "end": 6467
        }
      ],
      "declare": false,
      "start": 6405,
      "end": 6468
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r7b",
            "optional": false,
            "typeAnnotation": null,
            "start": 6482,
            "end": 6485
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6488,
                    "end": 6490
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6491,
                    "end": 6495
                  },
                  "optional": false,
                  "computed": false,
                  "start": 6488,
                  "end": 6495
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6496,
                    "end": 6505
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6507,
                    "end": 6516
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6518,
                    "end": 6527
                  }
                ],
                "optional": false,
                "start": 6488,
                "end": 6528
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6529,
                "end": 6533
              },
              "optional": false,
              "computed": false,
              "start": 6488,
              "end": 6533
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6534,
                "end": 6543
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6545,
                "end": 6554
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6556,
                "end": 6565
              }
            ],
            "optional": false,
            "start": 6488,
            "end": 6566
          },
          "definite": false,
          "start": 6482,
          "end": 6566
        }
      ],
      "declare": false,
      "start": 6478,
      "end": 6567
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6590,
                  "end": 6597
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 6598,
                      "end": 6604
                    }
                  ],
                  "start": 6597,
                  "end": 6605
                },
                "start": 6590,
                "end": 6605
              },
              "start": 6588,
              "end": 6605
            },
            "start": 6586,
            "end": 6605
          },
          "init": null,
          "definite": false,
          "start": 6586,
          "end": 6605
        }
      ],
      "declare": true,
      "start": 6574,
      "end": 6606
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s7a",
            "optional": false,
            "typeAnnotation": null,
            "start": 6611,
            "end": 6614
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6617,
                "end": 6619
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6620,
                "end": 6624
              },
              "optional": false,
              "computed": false,
              "start": 6617,
              "end": 6624
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6625,
                "end": 6638
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6640,
                "end": 6653
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6655,
                "end": 6668
              }
            ],
            "optional": false,
            "start": 6617,
            "end": 6669
          },
          "definite": false,
          "start": 6611,
          "end": 6669
        }
      ],
      "declare": false,
      "start": 6607,
      "end": 6670
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s7b",
            "optional": false,
            "typeAnnotation": null,
            "start": 6684,
            "end": 6687
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6690,
                "end": 6692
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6693,
                "end": 6697
              },
              "optional": false,
              "computed": false,
              "start": 6690,
              "end": 6697
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7P",
                "optional": false,
                "typeAnnotation": null,
                "start": 6698,
                "end": 6712
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7P",
                "optional": false,
                "typeAnnotation": null,
                "start": 6714,
                "end": 6728
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7P",
                "optional": false,
                "typeAnnotation": null,
                "start": 6730,
                "end": 6744
              }
            ],
            "optional": false,
            "start": 6690,
            "end": 6745
          },
          "definite": false,
          "start": 6684,
          "end": 6745
        }
      ],
      "declare": false,
      "start": 6680,
      "end": 6746
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s7c",
            "optional": false,
            "typeAnnotation": null,
            "start": 6760,
            "end": 6763
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6766,
                "end": 6768
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6769,
                "end": 6773
              },
              "optional": false,
              "computed": false,
              "start": 6766,
              "end": 6773
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7P",
                "optional": false,
                "typeAnnotation": null,
                "start": 6774,
                "end": 6788
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6790,
                "end": 6803
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6805,
                "end": 6818
              }
            ],
            "optional": false,
            "start": 6766,
            "end": 6819
          },
          "definite": false,
          "start": 6760,
          "end": 6819
        }
      ],
      "declare": false,
      "start": 6756,
      "end": 6820
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s7d",
            "optional": false,
            "typeAnnotation": null,
            "start": 6834,
            "end": 6837
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6840,
                    "end": 6842
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6843,
                    "end": 6847
                  },
                  "optional": false,
                  "computed": false,
                  "start": 6840,
                  "end": 6847
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6848,
                    "end": 6856
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6858,
                    "end": 6866
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6868,
                    "end": 6876
                  }
                ],
                "optional": false,
                "start": 6840,
                "end": 6877
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6878,
                "end": 6882
              },
              "optional": false,
              "computed": false,
              "start": 6840,
              "end": 6882
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6883,
                "end": 6891
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6893,
                "end": 6901
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6903,
                "end": 6911
              }
            ],
            "optional": false,
            "start": 6840,
            "end": 6912
          },
          "definite": false,
          "start": 6834,
          "end": 6912
        }
      ],
      "declare": false,
      "start": 6830,
      "end": 6913
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6938,
                  "end": 6946
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 6947,
                      "end": 6953
                    }
                  ],
                  "start": 6946,
                  "end": 6954
                },
                "start": 6938,
                "end": 6954
              },
              "start": 6936,
              "end": 6954
            },
            "start": 6934,
            "end": 6954
          },
          "init": null,
          "definite": false,
          "start": 6934,
          "end": 6954
        }
      ],
      "declare": true,
      "start": 6922,
      "end": 6955
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "nIPromise",
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
                        "type": "TSAnyKeyword",
                        "start": 6983,
                        "end": 6986
                      },
                      "start": 6981,
                      "end": 6986
                    },
                    "start": 6980,
                    "end": 6986
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IPromise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6991,
                      "end": 6999
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 7000,
                          "end": 7006
                        }
                      ],
                      "start": 6999,
                      "end": 7007
                    },
                    "start": 6991,
                    "end": 7007
                  },
                  "start": 6988,
                  "end": 7007
                },
                "start": 6979,
                "end": 7007
              },
              "start": 6977,
              "end": 7007
            },
            "start": 6968,
            "end": 7007
          },
          "init": null,
          "definite": false,
          "start": 6968,
          "end": 7007
        }
      ],
      "declare": true,
      "start": 6956,
      "end": 7008
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "nPromise",
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
                        "type": "TSAnyKeyword",
                        "start": 7035,
                        "end": 7038
                      },
                      "start": 7033,
                      "end": 7038
                    },
                    "start": 7032,
                    "end": 7038
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7043,
                      "end": 7050
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 7051,
                          "end": 7057
                        }
                      ],
                      "start": 7050,
                      "end": 7058
                    },
                    "start": 7043,
                    "end": 7058
                  },
                  "start": 7040,
                  "end": 7058
                },
                "start": 7031,
                "end": 7058
              },
              "start": 7029,
              "end": 7058
            },
            "start": 7021,
            "end": 7058
          },
          "init": null,
          "definite": false,
          "start": 7021,
          "end": 7058
        }
      ],
      "declare": true,
      "start": 7009,
      "end": 7059
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r8a",
            "optional": false,
            "typeAnnotation": null,
            "start": 7064,
            "end": 7067
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7070,
                "end": 7072
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7073,
                "end": 7077
              },
              "optional": false,
              "computed": false,
              "start": 7070,
              "end": 7077
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7078,
                "end": 7091
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7093,
                "end": 7106
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7108,
                "end": 7121
              }
            ],
            "optional": false,
            "start": 7070,
            "end": 7122
          },
          "definite": false,
          "start": 7064,
          "end": 7122
        }
      ],
      "declare": false,
      "start": 7060,
      "end": 7123
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r8b",
            "optional": false,
            "typeAnnotation": null,
            "start": 7137,
            "end": 7140
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r8",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7143,
                    "end": 7145
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7146,
                    "end": 7150
                  },
                  "optional": false,
                  "computed": false,
                  "start": 7143,
                  "end": 7150
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7151,
                    "end": 7160
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7162,
                    "end": 7171
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7173,
                    "end": 7182
                  }
                ],
                "optional": false,
                "start": 7143,
                "end": 7183
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7184,
                "end": 7188
              },
              "optional": false,
              "computed": false,
              "start": 7143,
              "end": 7188
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7189,
                "end": 7198
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7200,
                "end": 7209
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7211,
                "end": 7220
              }
            ],
            "optional": false,
            "start": 7143,
            "end": 7221
          },
          "definite": false,
          "start": 7137,
          "end": 7221
        }
      ],
      "declare": false,
      "start": 7133,
      "end": 7222
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7237,
                  "end": 7244
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 7245,
                      "end": 7251
                    }
                  ],
                  "start": 7244,
                  "end": 7252
                },
                "start": 7237,
                "end": 7252
              },
              "start": 7235,
              "end": 7252
            },
            "start": 7233,
            "end": 7252
          },
          "init": null,
          "definite": false,
          "start": 7233,
          "end": 7252
        }
      ],
      "declare": false,
      "start": 7229,
      "end": 7253
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s8a",
            "optional": false,
            "typeAnnotation": null,
            "start": 7258,
            "end": 7261
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7264,
                "end": 7266
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7267,
                "end": 7271
              },
              "optional": false,
              "computed": false,
              "start": 7264,
              "end": 7271
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7272,
                "end": 7285
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7287,
                "end": 7300
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7302,
                "end": 7315
              }
            ],
            "optional": false,
            "start": 7264,
            "end": 7316
          },
          "definite": false,
          "start": 7258,
          "end": 7316
        }
      ],
      "declare": false,
      "start": 7254,
      "end": 7317
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s8b",
            "optional": false,
            "typeAnnotation": null,
            "start": 7331,
            "end": 7334
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7337,
                "end": 7339
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7340,
                "end": 7344
              },
              "optional": false,
              "computed": false,
              "start": 7337,
              "end": 7344
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8P",
                "optional": false,
                "typeAnnotation": null,
                "start": 7345,
                "end": 7359
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8P",
                "optional": false,
                "typeAnnotation": null,
                "start": 7361,
                "end": 7375
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8P",
                "optional": false,
                "typeAnnotation": null,
                "start": 7377,
                "end": 7391
              }
            ],
            "optional": false,
            "start": 7337,
            "end": 7392
          },
          "definite": false,
          "start": 7331,
          "end": 7392
        }
      ],
      "declare": false,
      "start": 7327,
      "end": 7393
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s8c",
            "optional": false,
            "typeAnnotation": null,
            "start": 7407,
            "end": 7410
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7413,
                "end": 7415
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7416,
                "end": 7420
              },
              "optional": false,
              "computed": false,
              "start": 7413,
              "end": 7420
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8P",
                "optional": false,
                "typeAnnotation": null,
                "start": 7421,
                "end": 7435
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7437,
                "end": 7450
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7452,
                "end": 7465
              }
            ],
            "optional": false,
            "start": 7413,
            "end": 7466
          },
          "definite": false,
          "start": 7407,
          "end": 7466
        }
      ],
      "declare": false,
      "start": 7403,
      "end": 7467
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s8d",
            "optional": false,
            "typeAnnotation": null,
            "start": 7481,
            "end": 7484
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s8",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7487,
                    "end": 7489
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7490,
                    "end": 7494
                  },
                  "optional": false,
                  "computed": false,
                  "start": 7487,
                  "end": 7494
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7495,
                    "end": 7504
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7506,
                    "end": 7515
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7517,
                    "end": 7526
                  }
                ],
                "optional": false,
                "start": 7487,
                "end": 7527
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7528,
                "end": 7532
              },
              "optional": false,
              "computed": false,
              "start": 7487,
              "end": 7532
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7533,
                "end": 7542
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7544,
                "end": 7553
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7555,
                "end": 7564
              }
            ],
            "optional": false,
            "start": 7487,
            "end": 7565
          },
          "definite": false,
          "start": 7481,
          "end": 7565
        }
      ],
      "declare": false,
      "start": 7477,
      "end": 7566
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r9",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7590,
                  "end": 7598
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 7599,
                      "end": 7605
                    }
                  ],
                  "start": 7598,
                  "end": 7606
                },
                "start": 7590,
                "end": 7606
              },
              "start": 7588,
              "end": 7606
            },
            "start": 7586,
            "end": 7606
          },
          "init": null,
          "definite": false,
          "start": 7586,
          "end": 7606
        }
      ],
      "declare": true,
      "start": 7574,
      "end": 7607
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r9a",
            "optional": false,
            "typeAnnotation": null,
            "start": 7612,
            "end": 7615
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r9",
                "optional": false,
                "typeAnnotation": null,
                "start": 7618,
                "end": 7620
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7621,
                "end": 7625
              },
              "optional": false,
              "computed": false,
              "start": 7618,
              "end": 7625
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9",
                "optional": false,
                "typeAnnotation": null,
                "start": 7626,
                "end": 7639
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9",
                "optional": false,
                "typeAnnotation": null,
                "start": 7641,
                "end": 7654
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9",
                "optional": false,
                "typeAnnotation": null,
                "start": 7656,
                "end": 7669
              }
            ],
            "optional": false,
            "start": 7618,
            "end": 7670
          },
          "definite": false,
          "start": 7612,
          "end": 7670
        }
      ],
      "declare": false,
      "start": 7608,
      "end": 7671
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r9b",
            "optional": false,
            "typeAnnotation": null,
            "start": 7685,
            "end": 7688
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r9",
                "optional": false,
                "typeAnnotation": null,
                "start": 7691,
                "end": 7693
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7694,
                "end": 7698
              },
              "optional": false,
              "computed": false,
              "start": 7691,
              "end": 7698
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7699,
                "end": 7708
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7710,
                "end": 7719
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7721,
                "end": 7730
              }
            ],
            "optional": false,
            "start": 7691,
            "end": 7731
          },
          "definite": false,
          "start": 7685,
          "end": 7731
        }
      ],
      "declare": false,
      "start": 7681,
      "end": 7732
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r9c",
            "optional": false,
            "typeAnnotation": null,
            "start": 7743,
            "end": 7746
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r9",
                "optional": false,
                "typeAnnotation": null,
                "start": 7749,
                "end": 7751
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7752,
                "end": 7756
              },
              "optional": false,
              "computed": false,
              "start": 7749,
              "end": 7756
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7757,
                "end": 7766
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7768,
                "end": 7777
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7779,
                "end": 7788
              }
            ],
            "optional": false,
            "start": 7749,
            "end": 7789
          },
          "definite": false,
          "start": 7743,
          "end": 7789
        }
      ],
      "declare": false,
      "start": 7739,
      "end": 7790
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r9d",
            "optional": false,
            "typeAnnotation": null,
            "start": 7801,
            "end": 7804
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r9",
                "optional": false,
                "typeAnnotation": null,
                "start": 7807,
                "end": 7809
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7810,
                "end": 7814
              },
              "optional": false,
              "computed": false,
              "start": 7807,
              "end": 7814
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 7815,
                "end": 7827
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7829,
                "end": 7838
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7840,
                "end": 7849
              }
            ],
            "optional": false,
            "start": 7807,
            "end": 7850
          },
          "definite": false,
          "start": 7801,
          "end": 7850
        }
      ],
      "declare": false,
      "start": 7797,
      "end": 7851
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r9e",
            "optional": false,
            "typeAnnotation": null,
            "start": 7865,
            "end": 7868
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r9",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7871,
                    "end": 7873
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7874,
                    "end": 7878
                  },
                  "optional": false,
                  "computed": false,
                  "start": 7871,
                  "end": 7878
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7879,
                    "end": 7891
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7893,
                    "end": 7902
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7904,
                    "end": 7913
                  }
                ],
                "optional": false,
                "start": 7871,
                "end": 7914
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7915,
                "end": 7919
              },
              "optional": false,
              "computed": false,
              "start": 7871,
              "end": 7919
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7920,
                "end": 7929
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7931,
                "end": 7940
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7942,
                "end": 7951
              }
            ],
            "optional": false,
            "start": 7871,
            "end": 7952
          },
          "definite": false,
          "start": 7865,
          "end": 7952
        }
      ],
      "declare": false,
      "start": 7861,
      "end": 7953
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s9",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7976,
                  "end": 7983
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 7984,
                      "end": 7990
                    }
                  ],
                  "start": 7983,
                  "end": 7991
                },
                "start": 7976,
                "end": 7991
              },
              "start": 7974,
              "end": 7991
            },
            "start": 7972,
            "end": 7991
          },
          "init": null,
          "definite": false,
          "start": 7972,
          "end": 7991
        }
      ],
      "declare": true,
      "start": 7960,
      "end": 7992
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s9a",
            "optional": false,
            "typeAnnotation": null,
            "start": 7997,
            "end": 8000
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s9",
                "optional": false,
                "typeAnnotation": null,
                "start": 8003,
                "end": 8005
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8006,
                "end": 8010
              },
              "optional": false,
              "computed": false,
              "start": 8003,
              "end": 8010
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9",
                "optional": false,
                "typeAnnotation": null,
                "start": 8011,
                "end": 8024
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9",
                "optional": false,
                "typeAnnotation": null,
                "start": 8026,
                "end": 8039
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9",
                "optional": false,
                "typeAnnotation": null,
                "start": 8041,
                "end": 8054
              }
            ],
            "optional": false,
            "start": 8003,
            "end": 8055
          },
          "definite": false,
          "start": 7997,
          "end": 8055
        }
      ],
      "declare": false,
      "start": 7993,
      "end": 8056
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s9b",
            "optional": false,
            "typeAnnotation": null,
            "start": 8070,
            "end": 8073
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s9",
                "optional": false,
                "typeAnnotation": null,
                "start": 8076,
                "end": 8078
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8079,
                "end": 8083
              },
              "optional": false,
              "computed": false,
              "start": 8076,
              "end": 8083
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9P",
                "optional": false,
                "typeAnnotation": null,
                "start": 8084,
                "end": 8098
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9P",
                "optional": false,
                "typeAnnotation": null,
                "start": 8100,
                "end": 8114
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9P",
                "optional": false,
                "typeAnnotation": null,
                "start": 8116,
                "end": 8130
              }
            ],
            "optional": false,
            "start": 8076,
            "end": 8131
          },
          "definite": false,
          "start": 8070,
          "end": 8131
        }
      ],
      "declare": false,
      "start": 8066,
      "end": 8132
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s9c",
            "optional": false,
            "typeAnnotation": null,
            "start": 8146,
            "end": 8149
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s9",
                "optional": false,
                "typeAnnotation": null,
                "start": 8152,
                "end": 8154
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8155,
                "end": 8159
              },
              "optional": false,
              "computed": false,
              "start": 8152,
              "end": 8159
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9P",
                "optional": false,
                "typeAnnotation": null,
                "start": 8160,
                "end": 8174
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9",
                "optional": false,
                "typeAnnotation": null,
                "start": 8176,
                "end": 8189
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9",
                "optional": false,
                "typeAnnotation": null,
                "start": 8191,
                "end": 8204
              }
            ],
            "optional": false,
            "start": 8152,
            "end": 8205
          },
          "definite": false,
          "start": 8146,
          "end": 8205
        }
      ],
      "declare": false,
      "start": 8142,
      "end": 8206
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s9d",
            "optional": false,
            "typeAnnotation": null,
            "start": 8220,
            "end": 8223
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s9",
                "optional": false,
                "typeAnnotation": null,
                "start": 8226,
                "end": 8228
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8229,
                "end": 8233
              },
              "optional": false,
              "computed": false,
              "start": 8226,
              "end": 8233
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8234,
                "end": 8242
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8244,
                "end": 8252
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8254,
                "end": 8262
              }
            ],
            "optional": false,
            "start": 8226,
            "end": 8263
          },
          "definite": false,
          "start": 8220,
          "end": 8263
        }
      ],
      "declare": false,
      "start": 8216,
      "end": 8264
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s9e",
            "optional": false,
            "typeAnnotation": null,
            "start": 8275,
            "end": 8278
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s9",
                "optional": false,
                "typeAnnotation": null,
                "start": 8281,
                "end": 8283
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8284,
                "end": 8288
              },
              "optional": false,
              "computed": false,
              "start": 8281,
              "end": 8288
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8289,
                "end": 8297
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8299,
                "end": 8307
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8309,
                "end": 8317
              }
            ],
            "optional": false,
            "start": 8281,
            "end": 8318
          },
          "definite": false,
          "start": 8275,
          "end": 8318
        }
      ],
      "declare": false,
      "start": 8271,
      "end": 8319
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s9f",
            "optional": false,
            "typeAnnotation": null,
            "start": 8330,
            "end": 8333
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s9",
                "optional": false,
                "typeAnnotation": null,
                "start": 8336,
                "end": 8338
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8339,
                "end": 8343
              },
              "optional": false,
              "computed": false,
              "start": 8336,
              "end": 8343
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 8344,
                "end": 8356
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8358,
                "end": 8367
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8369,
                "end": 8378
              }
            ],
            "optional": false,
            "start": 8336,
            "end": 8379
          },
          "definite": false,
          "start": 8330,
          "end": 8379
        }
      ],
      "declare": false,
      "start": 8326,
      "end": 8380
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s9g",
            "optional": false,
            "typeAnnotation": null,
            "start": 8394,
            "end": 8397
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s9",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8400,
                    "end": 8402
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8403,
                    "end": 8407
                  },
                  "optional": false,
                  "computed": false,
                  "start": 8400,
                  "end": 8407
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8408,
                    "end": 8420
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8422,
                    "end": 8431
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8433,
                    "end": 8442
                  }
                ],
                "optional": false,
                "start": 8400,
                "end": 8443
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8444,
                "end": 8448
              },
              "optional": false,
              "computed": false,
              "start": 8400,
              "end": 8448
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8449,
                "end": 8458
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8460,
                "end": 8469
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8471,
                "end": 8480
              }
            ],
            "optional": false,
            "start": 8400,
            "end": 8481
          },
          "definite": false,
          "start": 8394,
          "end": 8481
        }
      ],
      "declare": false,
      "start": 8390,
      "end": 8482
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r10",
            "optional": false,
            "typeAnnotation": null,
            "start": 8494,
            "end": 8497
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction10",
              "optional": false,
              "typeAnnotation": null,
              "start": 8500,
              "end": 8514
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8515,
                    "end": 8516
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8520,
                  "end": 8521
                },
                "id": null,
                "generator": false,
                "start": 8515,
                "end": 8521
              }
            ],
            "optional": false,
            "start": 8500,
            "end": 8522
          },
          "definite": false,
          "start": 8494,
          "end": 8522
        }
      ],
      "declare": false,
      "start": 8490,
      "end": 8523
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r10a",
            "optional": false,
            "typeAnnotation": null,
            "start": 8528,
            "end": 8532
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r10",
                "optional": false,
                "typeAnnotation": null,
                "start": 8535,
                "end": 8538
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8539,
                "end": 8543
              },
              "optional": false,
              "computed": false,
              "start": 8535,
              "end": 8543
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10",
                "optional": false,
                "typeAnnotation": null,
                "start": 8544,
                "end": 8558
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10",
                "optional": false,
                "typeAnnotation": null,
                "start": 8560,
                "end": 8574
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10",
                "optional": false,
                "typeAnnotation": null,
                "start": 8576,
                "end": 8590
              }
            ],
            "optional": false,
            "start": 8535,
            "end": 8591
          },
          "definite": false,
          "start": 8528,
          "end": 8591
        }
      ],
      "declare": false,
      "start": 8524,
      "end": 8592
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r10b",
            "optional": false,
            "typeAnnotation": null,
            "start": 8603,
            "end": 8607
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r10",
                "optional": false,
                "typeAnnotation": null,
                "start": 8610,
                "end": 8613
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8614,
                "end": 8618
              },
              "optional": false,
              "computed": false,
              "start": 8610,
              "end": 8618
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8619,
                "end": 8628
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8630,
                "end": 8639
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8641,
                "end": 8650
              }
            ],
            "optional": false,
            "start": 8610,
            "end": 8651
          },
          "definite": false,
          "start": 8603,
          "end": 8651
        }
      ],
      "declare": false,
      "start": 8599,
      "end": 8652
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r10c",
            "optional": false,
            "typeAnnotation": null,
            "start": 8663,
            "end": 8667
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r10",
                "optional": false,
                "typeAnnotation": null,
                "start": 8670,
                "end": 8673
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8674,
                "end": 8678
              },
              "optional": false,
              "computed": false,
              "start": 8670,
              "end": 8678
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8679,
                "end": 8688
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8690,
                "end": 8699
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8701,
                "end": 8710
              }
            ],
            "optional": false,
            "start": 8670,
            "end": 8711
          },
          "definite": false,
          "start": 8663,
          "end": 8711
        }
      ],
      "declare": false,
      "start": 8659,
      "end": 8712
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r10d",
            "optional": false,
            "typeAnnotation": null,
            "start": 8723,
            "end": 8727
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r10",
                "optional": false,
                "typeAnnotation": null,
                "start": 8730,
                "end": 8733
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8734,
                "end": 8738
              },
              "optional": false,
              "computed": false,
              "start": 8730,
              "end": 8738
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 8739,
                "end": 8751
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8753,
                "end": 8762
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8764,
                "end": 8773
              }
            ],
            "optional": false,
            "start": 8730,
            "end": 8774
          },
          "definite": false,
          "start": 8723,
          "end": 8774
        }
      ],
      "declare": false,
      "start": 8719,
      "end": 8775
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r10e",
            "optional": false,
            "typeAnnotation": null,
            "start": 8789,
            "end": 8793
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r10",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8796,
                    "end": 8799
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8800,
                    "end": 8804
                  },
                  "optional": false,
                  "computed": false,
                  "start": 8796,
                  "end": 8804
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8805,
                    "end": 8817
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8819,
                    "end": 8828
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8830,
                    "end": 8839
                  }
                ],
                "optional": false,
                "start": 8796,
                "end": 8840
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8841,
                "end": 8845
              },
              "optional": false,
              "computed": false,
              "start": 8796,
              "end": 8845
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8846,
                "end": 8855
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8857,
                "end": 8866
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8868,
                "end": 8877
              }
            ],
            "optional": false,
            "start": 8796,
            "end": 8878
          },
          "definite": false,
          "start": 8789,
          "end": 8878
        }
      ],
      "declare": false,
      "start": 8785,
      "end": 8879
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s10",
            "optional": false,
            "typeAnnotation": null,
            "start": 8890,
            "end": 8893
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction10P",
              "optional": false,
              "typeAnnotation": null,
              "start": 8896,
              "end": 8911
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8912,
                    "end": 8913
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8917,
                  "end": 8918
                },
                "id": null,
                "generator": false,
                "start": 8912,
                "end": 8918
              }
            ],
            "optional": false,
            "start": 8896,
            "end": 8919
          },
          "definite": false,
          "start": 8890,
          "end": 8919
        }
      ],
      "declare": false,
      "start": 8886,
      "end": 8920
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s10a",
            "optional": false,
            "typeAnnotation": null,
            "start": 8925,
            "end": 8929
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s10",
                "optional": false,
                "typeAnnotation": null,
                "start": 8932,
                "end": 8935
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8936,
                "end": 8940
              },
              "optional": false,
              "computed": false,
              "start": 8932,
              "end": 8940
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10",
                "optional": false,
                "typeAnnotation": null,
                "start": 8941,
                "end": 8955
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10",
                "optional": false,
                "typeAnnotation": null,
                "start": 8957,
                "end": 8971
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10",
                "optional": false,
                "typeAnnotation": null,
                "start": 8973,
                "end": 8987
              }
            ],
            "optional": false,
            "start": 8932,
            "end": 8988
          },
          "definite": false,
          "start": 8925,
          "end": 8988
        }
      ],
      "declare": false,
      "start": 8921,
      "end": 8989
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s10b",
            "optional": false,
            "typeAnnotation": null,
            "start": 9000,
            "end": 9004
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s10",
                "optional": false,
                "typeAnnotation": null,
                "start": 9007,
                "end": 9010
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9011,
                "end": 9015
              },
              "optional": false,
              "computed": false,
              "start": 9007,
              "end": 9015
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10P",
                "optional": false,
                "typeAnnotation": null,
                "start": 9016,
                "end": 9031
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10P",
                "optional": false,
                "typeAnnotation": null,
                "start": 9033,
                "end": 9048
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10P",
                "optional": false,
                "typeAnnotation": null,
                "start": 9050,
                "end": 9065
              }
            ],
            "optional": false,
            "start": 9007,
            "end": 9066
          },
          "definite": false,
          "start": 9000,
          "end": 9066
        }
      ],
      "declare": false,
      "start": 8996,
      "end": 9067
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s10c",
            "optional": false,
            "typeAnnotation": null,
            "start": 9078,
            "end": 9082
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s10",
                "optional": false,
                "typeAnnotation": null,
                "start": 9085,
                "end": 9088
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9089,
                "end": 9093
              },
              "optional": false,
              "computed": false,
              "start": 9085,
              "end": 9093
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10P",
                "optional": false,
                "typeAnnotation": null,
                "start": 9094,
                "end": 9109
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10",
                "optional": false,
                "typeAnnotation": null,
                "start": 9111,
                "end": 9125
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10",
                "optional": false,
                "typeAnnotation": null,
                "start": 9127,
                "end": 9141
              }
            ],
            "optional": false,
            "start": 9085,
            "end": 9142
          },
          "definite": false,
          "start": 9078,
          "end": 9142
        }
      ],
      "declare": false,
      "start": 9074,
      "end": 9143
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s10d",
            "optional": false,
            "typeAnnotation": null,
            "start": 9154,
            "end": 9158
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s10",
                "optional": false,
                "typeAnnotation": null,
                "start": 9161,
                "end": 9164
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9165,
                "end": 9169
              },
              "optional": false,
              "computed": false,
              "start": 9161,
              "end": 9169
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9170,
                "end": 9178
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9180,
                "end": 9188
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9190,
                "end": 9198
              }
            ],
            "optional": false,
            "start": 9161,
            "end": 9199
          },
          "definite": false,
          "start": 9154,
          "end": 9199
        }
      ],
      "declare": false,
      "start": 9150,
      "end": 9200
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s10e",
            "optional": false,
            "typeAnnotation": null,
            "start": 9211,
            "end": 9215
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s10",
                "optional": false,
                "typeAnnotation": null,
                "start": 9218,
                "end": 9221
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9222,
                "end": 9226
              },
              "optional": false,
              "computed": false,
              "start": 9218,
              "end": 9226
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9227,
                "end": 9236
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9238,
                "end": 9246
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9248,
                "end": 9257
              }
            ],
            "optional": false,
            "start": 9218,
            "end": 9258
          },
          "definite": false,
          "start": 9211,
          "end": 9258
        }
      ],
      "declare": false,
      "start": 9207,
      "end": 9259
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s10f",
            "optional": false,
            "typeAnnotation": null,
            "start": 9270,
            "end": 9274
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s10",
                "optional": false,
                "typeAnnotation": null,
                "start": 9277,
                "end": 9280
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9281,
                "end": 9285
              },
              "optional": false,
              "computed": false,
              "start": 9277,
              "end": 9285
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null,
                "start": 9286,
                "end": 9299
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9301,
                "end": 9310
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9312,
                "end": 9321
              }
            ],
            "optional": false,
            "start": 9277,
            "end": 9322
          },
          "definite": false,
          "start": 9270,
          "end": 9322
        }
      ],
      "declare": false,
      "start": 9266,
      "end": 9323
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s10g",
            "optional": false,
            "typeAnnotation": null,
            "start": 9337,
            "end": 9341
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s10",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9344,
                    "end": 9347
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9348,
                    "end": 9352
                  },
                  "optional": false,
                  "computed": false,
                  "start": 9344,
                  "end": 9352
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunctionP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9353,
                    "end": 9366
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9368,
                    "end": 9377
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9379,
                    "end": 9388
                  }
                ],
                "optional": false,
                "start": 9344,
                "end": 9389
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9390,
                "end": 9394
              },
              "optional": false,
              "computed": false,
              "start": 9344,
              "end": 9394
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9395,
                "end": 9403
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9405,
                "end": 9414
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9416,
                "end": 9425
              }
            ],
            "optional": false,
            "start": 9344,
            "end": 9426
          },
          "definite": false,
          "start": 9337,
          "end": 9426
        }
      ],
      "declare": false,
      "start": 9333,
      "end": 9427
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9452,
                  "end": 9460
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 9461,
                      "end": 9467
                    }
                  ],
                  "start": 9460,
                  "end": 9468
                },
                "start": 9452,
                "end": 9468
              },
              "start": 9450,
              "end": 9468
            },
            "start": 9447,
            "end": 9468
          },
          "init": null,
          "definite": false,
          "start": 9447,
          "end": 9468
        }
      ],
      "declare": true,
      "start": 9435,
      "end": 9469
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r11a",
            "optional": false,
            "typeAnnotation": null,
            "start": 9474,
            "end": 9478
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9481,
                "end": 9484
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9485,
                "end": 9489
              },
              "optional": false,
              "computed": false,
              "start": 9481,
              "end": 9489
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9490,
                "end": 9504
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9506,
                "end": 9520
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9522,
                "end": 9536
              }
            ],
            "optional": false,
            "start": 9481,
            "end": 9537
          },
          "definite": false,
          "start": 9474,
          "end": 9537
        }
      ],
      "declare": false,
      "start": 9470,
      "end": 9538
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9562,
                  "end": 9569
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 9570,
                      "end": 9576
                    }
                  ],
                  "start": 9569,
                  "end": 9577
                },
                "start": 9562,
                "end": 9577
              },
              "start": 9560,
              "end": 9577
            },
            "start": 9557,
            "end": 9577
          },
          "init": null,
          "definite": false,
          "start": 9557,
          "end": 9577
        }
      ],
      "declare": true,
      "start": 9545,
      "end": 9578
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s11a",
            "optional": false,
            "typeAnnotation": null,
            "start": 9583,
            "end": 9587
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9590,
                "end": 9593
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9594,
                "end": 9598
              },
              "optional": false,
              "computed": false,
              "start": 9590,
              "end": 9598
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9599,
                "end": 9613
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9615,
                "end": 9629
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9631,
                "end": 9645
              }
            ],
            "optional": false,
            "start": 9590,
            "end": 9646
          },
          "definite": false,
          "start": 9583,
          "end": 9646
        }
      ],
      "declare": false,
      "start": 9579,
      "end": 9647
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s11b",
            "optional": false,
            "typeAnnotation": null,
            "start": 9658,
            "end": 9662
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9665,
                "end": 9668
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9669,
                "end": 9673
              },
              "optional": false,
              "computed": false,
              "start": 9665,
              "end": 9673
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11P",
                "optional": false,
                "typeAnnotation": null,
                "start": 9674,
                "end": 9689
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11P",
                "optional": false,
                "typeAnnotation": null,
                "start": 9691,
                "end": 9706
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11P",
                "optional": false,
                "typeAnnotation": null,
                "start": 9708,
                "end": 9723
              }
            ],
            "optional": false,
            "start": 9665,
            "end": 9724
          },
          "definite": false,
          "start": 9658,
          "end": 9724
        }
      ],
      "declare": false,
      "start": 9654,
      "end": 9725
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s11c",
            "optional": false,
            "typeAnnotation": null,
            "start": 9739,
            "end": 9743
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9746,
                "end": 9749
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9750,
                "end": 9754
              },
              "optional": false,
              "computed": false,
              "start": 9746,
              "end": 9754
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11P",
                "optional": false,
                "typeAnnotation": null,
                "start": 9755,
                "end": 9770
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9772,
                "end": 9786
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9788,
                "end": 9802
              }
            ],
            "optional": false,
            "start": 9746,
            "end": 9803
          },
          "definite": false,
          "start": 9739,
          "end": 9803
        }
      ],
      "declare": false,
      "start": 9735,
      "end": 9804
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r12",
            "optional": false,
            "typeAnnotation": null,
            "start": 9819,
            "end": 9822
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction12",
              "optional": false,
              "typeAnnotation": null,
              "start": 9825,
              "end": 9839
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9840,
                    "end": 9841
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9845,
                  "end": 9846
                },
                "id": null,
                "generator": false,
                "start": 9840,
                "end": 9846
              }
            ],
            "optional": false,
            "start": 9825,
            "end": 9847
          },
          "definite": false,
          "start": 9819,
          "end": 9847
        }
      ],
      "declare": false,
      "start": 9815,
      "end": 9848
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r12a",
            "optional": false,
            "typeAnnotation": null,
            "start": 9853,
            "end": 9857
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "r12",
                "optional": false,
                "typeAnnotation": null,
                "start": 9860,
                "end": 9863
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9864,
                "end": 9868
              },
              "optional": false,
              "computed": false,
              "start": 9860,
              "end": 9868
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12",
                "optional": false,
                "typeAnnotation": null,
                "start": 9869,
                "end": 9883
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12",
                "optional": false,
                "typeAnnotation": null,
                "start": 9885,
                "end": 9899
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12",
                "optional": false,
                "typeAnnotation": null,
                "start": 9901,
                "end": 9915
              }
            ],
            "optional": false,
            "start": 9860,
            "end": 9916
          },
          "definite": false,
          "start": 9853,
          "end": 9916
        }
      ],
      "declare": false,
      "start": 9849,
      "end": 9917
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s12",
            "optional": false,
            "typeAnnotation": null,
            "start": 9928,
            "end": 9931
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction12",
              "optional": false,
              "typeAnnotation": null,
              "start": 9934,
              "end": 9948
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9949,
                    "end": 9950
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9954,
                  "end": 9955
                },
                "id": null,
                "generator": false,
                "start": 9949,
                "end": 9955
              }
            ],
            "optional": false,
            "start": 9934,
            "end": 9956
          },
          "definite": false,
          "start": 9928,
          "end": 9956
        }
      ],
      "declare": false,
      "start": 9924,
      "end": 9957
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s12a",
            "optional": false,
            "typeAnnotation": null,
            "start": 9962,
            "end": 9966
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s12",
                "optional": false,
                "typeAnnotation": null,
                "start": 9969,
                "end": 9972
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9973,
                "end": 9977
              },
              "optional": false,
              "computed": false,
              "start": 9969,
              "end": 9977
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12",
                "optional": false,
                "typeAnnotation": null,
                "start": 9978,
                "end": 9992
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12",
                "optional": false,
                "typeAnnotation": null,
                "start": 9994,
                "end": 10008
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12",
                "optional": false,
                "typeAnnotation": null,
                "start": 10010,
                "end": 10024
              }
            ],
            "optional": false,
            "start": 9969,
            "end": 10025
          },
          "definite": false,
          "start": 9962,
          "end": 10025
        }
      ],
      "declare": false,
      "start": 9958,
      "end": 10026
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s12b",
            "optional": false,
            "typeAnnotation": null,
            "start": 10037,
            "end": 10041
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s12",
                "optional": false,
                "typeAnnotation": null,
                "start": 10044,
                "end": 10047
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 10048,
                "end": 10052
              },
              "optional": false,
              "computed": false,
              "start": 10044,
              "end": 10052
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12P",
                "optional": false,
                "typeAnnotation": null,
                "start": 10053,
                "end": 10068
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12P",
                "optional": false,
                "typeAnnotation": null,
                "start": 10070,
                "end": 10085
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12P",
                "optional": false,
                "typeAnnotation": null,
                "start": 10087,
                "end": 10102
              }
            ],
            "optional": false,
            "start": 10044,
            "end": 10103
          },
          "definite": false,
          "start": 10037,
          "end": 10103
        }
      ],
      "declare": false,
      "start": 10033,
      "end": 10104
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s12c",
            "optional": false,
            "typeAnnotation": null,
            "start": 10115,
            "end": 10119
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s12",
                "optional": false,
                "typeAnnotation": null,
                "start": 10122,
                "end": 10125
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 10126,
                "end": 10130
              },
              "optional": false,
              "computed": false,
              "start": 10122,
              "end": 10130
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12P",
                "optional": false,
                "typeAnnotation": null,
                "start": 10131,
                "end": 10146
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12",
                "optional": false,
                "typeAnnotation": null,
                "start": 10148,
                "end": 10162
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12",
                "optional": false,
                "typeAnnotation": null,
                "start": 10164,
                "end": 10178
              }
            ],
            "optional": false,
            "start": 10122,
            "end": 10179
          },
          "definite": false,
          "start": 10115,
          "end": 10179
        }
      ],
      "declare": false,
      "start": 10111,
      "end": 10180
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 78,
  "end": 10186
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 78,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 88,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 105,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 113,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 124,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 134,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 137,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 149,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 158,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 165,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 170,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 173,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 185,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 197,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 207,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 212,
    "end": 214
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 215,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 222,
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
    "value": "U",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 238,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 246,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "type": "Punctuator",
    "value": "(",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 257,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 264,
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
    "value": "Promise",
    "start": 270,
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
    "value": "U",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 282,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 291,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 298,
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
    "value": "U",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 309,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 321,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 331,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 336,
    "end": 338
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 339,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 346,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 362,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 370,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 381,
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
    "value": "T",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 391,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 397,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 406,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 413,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 418,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 421,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "U",
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
    "value": ",",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 433,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 445,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 455,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 460,
    "end": 462
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 463,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 470,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 478,
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
    "value": ";",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 486,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 494,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 505,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 515,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 518,
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
    "value": "error",
    "start": 521,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 530,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 537,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 542,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "U",
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
    "type": "Identifier",
    "value": "progress",
    "start": 548,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 556,
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
    "type": "Identifier",
    "value": "progress",
    "start": 560,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 570,
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
    "type": "Keyword",
    "value": "void",
    "start": 578,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 585,
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
    "value": "U",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 595,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 601,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 605,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 609,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 619,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 620,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 627,
    "end": 628
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
    "value": "any",
    "start": 633,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 638,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 647,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 654,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 659,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 662,
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
    "value": "progress",
    "start": 667,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 679,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 689,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 694,
    "end": 696
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 697,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 702,
    "end": 703
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 704,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 710,
    "end": 711
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 713,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 723,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 731,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 741,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 745,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "U",
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
    "value": "(",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 749,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 759,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 760,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 765,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 770,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 774,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 776,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 784,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 785,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 790,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 792,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 797,
    "end": 799
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 801,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 803,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 812,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 814,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 815,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 823,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 825,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 830,
    "end": 832
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 833,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 837,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 838,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 840,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 848,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "U",
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
    "value": "done",
    "start": 857,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 863,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 866,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 867,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 877,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 878,
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
    "value": "T",
    "start": 885,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 888,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 891,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 894,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 896,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 904,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 905,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 910,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 912,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 917,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 920,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 923,
    "end": 924
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 925,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 933,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 934,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 936,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 937,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 945,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 947,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 952,
    "end": 954
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 955,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 960,
    "end": 961
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 962,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 968,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 971,
    "end": 978
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 979,
    "end": 987
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 988,
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
    "value": ":",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 1004,
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
    "value": "number",
    "start": 1013,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1022,
    "end": 1029
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1030,
    "end": 1038
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 1039,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1056,
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
    "value": "number",
    "start": 1064,
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
    "value": ";",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1073,
    "end": 1080
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1081,
    "end": 1089
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 1090,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "IPromise",
    "start": 1107,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1121,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1130,
    "end": 1131
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
    "value": "testFunction2P",
    "start": 1149,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1167,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1180,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1191,
    "end": 1198
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1199,
    "end": 1207
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 1208,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1225,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 1234,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1243,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1252,
    "end": 1259
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1260,
    "end": 1268
  },
  {
    "type": "Identifier",
    "value": "testFunction3P",
    "start": 1269,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1287,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1296,
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
    "value": "number",
    "start": 1304,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1313,
    "end": 1320
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1321,
    "end": 1329
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 1330,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1347,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1359,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 1368,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1377,
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
    "value": "declare",
    "start": 1386,
    "end": 1393
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1394,
    "end": 1402
  },
  {
    "type": "Identifier",
    "value": "testFunction4P",
    "start": 1403,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1421,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1433,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1442,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1450,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1459,
    "end": 1466
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1467,
    "end": 1475
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 1476,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1493,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1501,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1506,
    "end": 1507
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1509,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1517,
    "end": 1519
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1520,
    "end": 1526
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 1529,
    "end": 1537
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1538,
    "end": 1544
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1547,
    "end": 1554
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1555,
    "end": 1563
  },
  {
    "type": "Identifier",
    "value": "testFunction5P",
    "start": 1564,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1578,
    "end": 1579
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1582,
    "end": 1588
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1590,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1598,
    "end": 1604
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1604,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1606,
    "end": 1608
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1609,
    "end": 1615
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1615,
    "end": 1616
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1618,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1626,
    "end": 1632
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1635,
    "end": 1642
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1643,
    "end": 1651
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 1652,
    "end": 1665
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1667,
    "end": 1668
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1669,
    "end": 1675
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1675,
    "end": 1676
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1677,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1684,
    "end": 1685
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1685,
    "end": 1686
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1686,
    "end": 1687
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1691,
    "end": 1693
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 1698,
    "end": 1706
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1706,
    "end": 1707
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1707,
    "end": 1713
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1713,
    "end": 1714
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1714,
    "end": 1715
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1716,
    "end": 1723
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1724,
    "end": 1732
  },
  {
    "type": "Identifier",
    "value": "testFunction6P",
    "start": 1733,
    "end": 1747
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1747,
    "end": 1748
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1751,
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
    "value": "cb",
    "start": 1759,
    "end": 1761
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1761,
    "end": 1762
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1763,
    "end": 1764
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1764,
    "end": 1765
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1765,
    "end": 1766
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1767,
    "end": 1768
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1768,
    "end": 1769
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1773,
    "end": 1775
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1776,
    "end": 1777
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1778,
    "end": 1779
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1780,
    "end": 1787
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1787,
    "end": 1788
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1788,
    "end": 1794
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1795,
    "end": 1796
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1797,
    "end": 1804
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1805,
    "end": 1813
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 1814,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1828,
    "end": 1830
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1830,
    "end": 1831
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1835,
    "end": 1836
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1839,
    "end": 1840
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1840,
    "end": 1841
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1842,
    "end": 1844
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 1849,
    "end": 1857
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1857,
    "end": 1858
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1858,
    "end": 1864
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1864,
    "end": 1865
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1865,
    "end": 1866
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1867,
    "end": 1874
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1875,
    "end": 1883
  },
  {
    "type": "Identifier",
    "value": "testFunction7P",
    "start": 1884,
    "end": 1898
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1899,
    "end": 1901
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1905,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1908,
    "end": 1909
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1910,
    "end": 1911
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1913,
    "end": 1915
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1917,
    "end": 1918
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1918,
    "end": 1919
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1920,
    "end": 1927
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1927,
    "end": 1928
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1928,
    "end": 1934
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1934,
    "end": 1935
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1937,
    "end": 1944
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1945,
    "end": 1953
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 1954,
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
    "value": "T",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1969,
    "end": 1970
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1970,
    "end": 1971
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1971,
    "end": 1972
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1972,
    "end": 1973
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1974,
    "end": 1975
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1975,
    "end": 1976
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1977,
    "end": 1979
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1979,
    "end": 1980
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1981,
    "end": 1982
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1982,
    "end": 1983
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1983,
    "end": 1984
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1985,
    "end": 1986
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1986,
    "end": 1987
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1988,
    "end": 1990
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1991,
    "end": 1992
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1992,
    "end": 1993
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1993,
    "end": 1994
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 1995,
    "end": 2003
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2008,
    "end": 2015
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2016,
    "end": 2024
  },
  {
    "type": "Identifier",
    "value": "testFunction8P",
    "start": 2025,
    "end": 2039
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2039,
    "end": 2040
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2040,
    "end": 2041
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2041,
    "end": 2042
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2042,
    "end": 2043
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2043,
    "end": 2044
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2046,
    "end": 2047
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2047,
    "end": 2048
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2049,
    "end": 2051
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2051,
    "end": 2052
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2053,
    "end": 2054
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2054,
    "end": 2055
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2055,
    "end": 2056
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2057,
    "end": 2058
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2058,
    "end": 2059
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2060,
    "end": 2062
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2063,
    "end": 2064
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2064,
    "end": 2065
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2065,
    "end": 2066
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2067,
    "end": 2074
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2074,
    "end": 2075
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2075,
    "end": 2076
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2077,
    "end": 2078
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2079,
    "end": 2086
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2087,
    "end": 2095
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 2096,
    "end": 2109
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2109,
    "end": 2110
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2110,
    "end": 2111
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2111,
    "end": 2112
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2112,
    "end": 2113
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2113,
    "end": 2114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2114,
    "end": 2115
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2116,
    "end": 2117
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2117,
    "end": 2118
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2119,
    "end": 2121
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2121,
    "end": 2122
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2123,
    "end": 2124
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2124,
    "end": 2125
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2125,
    "end": 2126
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2126,
    "end": 2127
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2127,
    "end": 2128
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2128,
    "end": 2129
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2130,
    "end": 2131
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2131,
    "end": 2132
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2133,
    "end": 2135
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2136,
    "end": 2137
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2137,
    "end": 2138
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2138,
    "end": 2139
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2140,
    "end": 2148
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2148,
    "end": 2149
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2149,
    "end": 2150
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2150,
    "end": 2151
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2151,
    "end": 2152
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2153,
    "end": 2160
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2161,
    "end": 2169
  },
  {
    "type": "Identifier",
    "value": "testFunction9P",
    "start": 2170,
    "end": 2184
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2184,
    "end": 2185
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2185,
    "end": 2186
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2186,
    "end": 2187
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2187,
    "end": 2188
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2188,
    "end": 2189
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2189,
    "end": 2190
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2191,
    "end": 2192
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2192,
    "end": 2193
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2194,
    "end": 2196
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2196,
    "end": 2197
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2198,
    "end": 2199
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2199,
    "end": 2200
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2200,
    "end": 2201
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2201,
    "end": 2202
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2202,
    "end": 2203
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2203,
    "end": 2204
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2205,
    "end": 2206
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2206,
    "end": 2207
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2208,
    "end": 2210
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2211,
    "end": 2212
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2212,
    "end": 2213
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2213,
    "end": 2214
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2215,
    "end": 2222
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2222,
    "end": 2223
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2223,
    "end": 2224
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2224,
    "end": 2225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2225,
    "end": 2226
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2227,
    "end": 2234
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2235,
    "end": 2243
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 2244,
    "end": 2258
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2258,
    "end": 2259
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2259,
    "end": 2260
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2260,
    "end": 2261
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2261,
    "end": 2262
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2262,
    "end": 2264
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2264,
    "end": 2265
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2266,
    "end": 2267
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2267,
    "end": 2268
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2268,
    "end": 2269
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2269,
    "end": 2270
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2270,
    "end": 2271
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2271,
    "end": 2272
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2273,
    "end": 2274
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2274,
    "end": 2275
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2276,
    "end": 2278
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2279,
    "end": 2280
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2280,
    "end": 2281
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2281,
    "end": 2282
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2283,
    "end": 2291
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2291,
    "end": 2292
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2292,
    "end": 2293
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2293,
    "end": 2294
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2294,
    "end": 2295
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2296,
    "end": 2303
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2304,
    "end": 2312
  },
  {
    "type": "Identifier",
    "value": "testFunction10P",
    "start": 2313,
    "end": 2328
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2328,
    "end": 2329
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2329,
    "end": 2330
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2330,
    "end": 2331
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2331,
    "end": 2332
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2332,
    "end": 2334
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2334,
    "end": 2335
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2336,
    "end": 2337
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2337,
    "end": 2338
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2338,
    "end": 2339
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2339,
    "end": 2340
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
    "type": "Identifier",
    "value": "U",
    "start": 2343,
    "end": 2344
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2344,
    "end": 2345
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2346,
    "end": 2348
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2349,
    "end": 2350
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2350,
    "end": 2351
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2351,
    "end": 2352
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2353,
    "end": 2360
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2360,
    "end": 2361
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2361,
    "end": 2362
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2362,
    "end": 2363
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2363,
    "end": 2364
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2366,
    "end": 2373
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2374,
    "end": 2382
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 2383,
    "end": 2397
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2397,
    "end": 2398
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2398,
    "end": 2399
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2399,
    "end": 2400
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2401,
    "end": 2407
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2407,
    "end": 2408
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2408,
    "end": 2409
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2410,
    "end": 2418
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2418,
    "end": 2419
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2419,
    "end": 2425
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2425,
    "end": 2426
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2426,
    "end": 2427
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2428,
    "end": 2435
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2436,
    "end": 2444
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 2445,
    "end": 2459
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2459,
    "end": 2460
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2460,
    "end": 2461
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2461,
    "end": 2462
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2463,
    "end": 2469
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2469,
    "end": 2470
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2470,
    "end": 2471
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2472,
    "end": 2480
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2480,
    "end": 2481
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2481,
    "end": 2487
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2487,
    "end": 2488
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2488,
    "end": 2489
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2490,
    "end": 2497
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2498,
    "end": 2506
  },
  {
    "type": "Identifier",
    "value": "testFunction11P",
    "start": 2507,
    "end": 2522
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2522,
    "end": 2523
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2523,
    "end": 2524
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2524,
    "end": 2525
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2526,
    "end": 2532
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2532,
    "end": 2533
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2533,
    "end": 2534
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2535,
    "end": 2542
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2542,
    "end": 2543
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2543,
    "end": 2549
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2549,
    "end": 2550
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2550,
    "end": 2551
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2552,
    "end": 2559
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2560,
    "end": 2568
  },
  {
    "type": "Identifier",
    "value": "testFunction11P",
    "start": 2569,
    "end": 2584
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2584,
    "end": 2585
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2585,
    "end": 2586
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2586,
    "end": 2587
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2588,
    "end": 2594
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2594,
    "end": 2595
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2595,
    "end": 2596
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2597,
    "end": 2604
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2604,
    "end": 2605
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2605,
    "end": 2611
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2611,
    "end": 2612
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2612,
    "end": 2613
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2615,
    "end": 2622
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2623,
    "end": 2631
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 2632,
    "end": 2646
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2646,
    "end": 2647
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2647,
    "end": 2648
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2648,
    "end": 2649
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2649,
    "end": 2650
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2650,
    "end": 2651
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2651,
    "end": 2652
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2653,
    "end": 2654
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2654,
    "end": 2655
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2655,
    "end": 2656
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2657,
    "end": 2665
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2665,
    "end": 2666
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2666,
    "end": 2667
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2667,
    "end": 2668
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2668,
    "end": 2669
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2670,
    "end": 2677
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2678,
    "end": 2686
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 2687,
    "end": 2701
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2701,
    "end": 2702
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2702,
    "end": 2703
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2703,
    "end": 2704
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2704,
    "end": 2705
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2705,
    "end": 2706
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2706,
    "end": 2707
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2708,
    "end": 2709
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2709,
    "end": 2710
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2711,
    "end": 2712
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2712,
    "end": 2713
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2714,
    "end": 2715
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2715,
    "end": 2716
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2716,
    "end": 2717
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2718,
    "end": 2726
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2726,
    "end": 2727
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2727,
    "end": 2728
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2728,
    "end": 2729
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2729,
    "end": 2730
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2731,
    "end": 2738
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2739,
    "end": 2747
  },
  {
    "type": "Identifier",
    "value": "testFunction12P",
    "start": 2748,
    "end": 2763
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2763,
    "end": 2764
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2764,
    "end": 2765
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2765,
    "end": 2766
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2766,
    "end": 2767
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2767,
    "end": 2768
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2768,
    "end": 2769
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2770,
    "end": 2771
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2771,
    "end": 2772
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2772,
    "end": 2773
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2774,
    "end": 2782
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2782,
    "end": 2783
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2783,
    "end": 2784
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2784,
    "end": 2785
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2785,
    "end": 2786
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2787,
    "end": 2794
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2795,
    "end": 2803
  },
  {
    "type": "Identifier",
    "value": "testFunction12P",
    "start": 2804,
    "end": 2819
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2819,
    "end": 2820
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2820,
    "end": 2821
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2821,
    "end": 2822
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2822,
    "end": 2823
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2823,
    "end": 2824
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2824,
    "end": 2825
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2826,
    "end": 2827
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2827,
    "end": 2828
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2829,
    "end": 2830
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2830,
    "end": 2831
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2832,
    "end": 2833
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2833,
    "end": 2834
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2834,
    "end": 2835
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2836,
    "end": 2843
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2843,
    "end": 2844
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2844,
    "end": 2845
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2845,
    "end": 2846
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2846,
    "end": 2847
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2849,
    "end": 2856
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2857,
    "end": 2860
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 2861,
    "end": 2863
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2863,
    "end": 2864
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2865,
    "end": 2873
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2873,
    "end": 2874
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2874,
    "end": 2880
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2880,
    "end": 2881
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2881,
    "end": 2882
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2883,
    "end": 2886
  },
  {
    "type": "Identifier",
    "value": "r1a",
    "start": 2887,
    "end": 2890
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2891,
    "end": 2892
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 2893,
    "end": 2895
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2895,
    "end": 2896
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 2896,
    "end": 2900
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2900,
    "end": 2901
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 2901,
    "end": 2913
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2913,
    "end": 2914
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 2915,
    "end": 2927
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2927,
    "end": 2928
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 2929,
    "end": 2941
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2941,
    "end": 2942
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2942,
    "end": 2943
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2944,
    "end": 2947
  },
  {
    "type": "Identifier",
    "value": "r1b",
    "start": 2948,
    "end": 2951
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2952,
    "end": 2953
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 2954,
    "end": 2956
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2956,
    "end": 2957
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 2957,
    "end": 2961
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2961,
    "end": 2962
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 2962,
    "end": 2974
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2974,
    "end": 2975
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 2976,
    "end": 2988
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2988,
    "end": 2989
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 2990,
    "end": 3002
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3002,
    "end": 3003
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3003,
    "end": 3004
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3004,
    "end": 3008
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3008,
    "end": 3009
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3009,
    "end": 3021
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3021,
    "end": 3022
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3023,
    "end": 3035
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3035,
    "end": 3036
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3037,
    "end": 3049
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3049,
    "end": 3050
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3050,
    "end": 3051
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3052,
    "end": 3055
  },
  {
    "type": "Identifier",
    "value": "r1c",
    "start": 3056,
    "end": 3059
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3060,
    "end": 3061
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 3062,
    "end": 3064
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3064,
    "end": 3065
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3065,
    "end": 3069
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3069,
    "end": 3070
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3070,
    "end": 3083
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3083,
    "end": 3084
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3085,
    "end": 3098
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3098,
    "end": 3099
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3100,
    "end": 3113
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3113,
    "end": 3114
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3114,
    "end": 3115
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3116,
    "end": 3123
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3124,
    "end": 3127
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 3128,
    "end": 3130
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3130,
    "end": 3131
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3132,
    "end": 3139
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3139,
    "end": 3140
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3140,
    "end": 3146
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3146,
    "end": 3147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3147,
    "end": 3148
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3149,
    "end": 3152
  },
  {
    "type": "Identifier",
    "value": "s1a",
    "start": 3153,
    "end": 3156
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3157,
    "end": 3158
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 3159,
    "end": 3161
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3161,
    "end": 3162
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3162,
    "end": 3166
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3166,
    "end": 3167
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3167,
    "end": 3179
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3179,
    "end": 3180
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3181,
    "end": 3193
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3193,
    "end": 3194
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3195,
    "end": 3207
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3207,
    "end": 3208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3208,
    "end": 3209
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3210,
    "end": 3213
  },
  {
    "type": "Identifier",
    "value": "s1b",
    "start": 3214,
    "end": 3217
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3218,
    "end": 3219
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 3220,
    "end": 3222
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3222,
    "end": 3223
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3223,
    "end": 3227
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3227,
    "end": 3228
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3228,
    "end": 3241
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3241,
    "end": 3242
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3243,
    "end": 3256
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3256,
    "end": 3257
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3258,
    "end": 3271
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3271,
    "end": 3272
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3272,
    "end": 3273
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3274,
    "end": 3277
  },
  {
    "type": "Identifier",
    "value": "s1c",
    "start": 3278,
    "end": 3281
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3282,
    "end": 3283
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 3284,
    "end": 3286
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3286,
    "end": 3287
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3287,
    "end": 3291
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3291,
    "end": 3292
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3292,
    "end": 3305
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3305,
    "end": 3306
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3307,
    "end": 3319
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3319,
    "end": 3320
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3321,
    "end": 3333
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3333,
    "end": 3334
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3334,
    "end": 3335
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3336,
    "end": 3339
  },
  {
    "type": "Identifier",
    "value": "s1d",
    "start": 3340,
    "end": 3343
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3344,
    "end": 3345
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 3346,
    "end": 3348
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3348,
    "end": 3349
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3349,
    "end": 3353
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3353,
    "end": 3354
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3354,
    "end": 3367
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3367,
    "end": 3368
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3369,
    "end": 3381
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3381,
    "end": 3382
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3383,
    "end": 3395
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3395,
    "end": 3396
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3396,
    "end": 3397
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3397,
    "end": 3401
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3401,
    "end": 3402
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3402,
    "end": 3414
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3414,
    "end": 3415
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3416,
    "end": 3428
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3428,
    "end": 3429
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3430,
    "end": 3442
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3442,
    "end": 3443
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3443,
    "end": 3444
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3446,
    "end": 3453
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3454,
    "end": 3457
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 3458,
    "end": 3460
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3460,
    "end": 3461
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 3462,
    "end": 3470
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3470,
    "end": 3471
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3471,
    "end": 3472
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3473,
    "end": 3474
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3474,
    "end": 3475
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3476,
    "end": 3482
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3482,
    "end": 3483
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3484,
    "end": 3485
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3485,
    "end": 3486
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3486,
    "end": 3487
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3488,
    "end": 3491
  },
  {
    "type": "Identifier",
    "value": "r2a",
    "start": 3492,
    "end": 3495
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3496,
    "end": 3497
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 3498,
    "end": 3500
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3500,
    "end": 3501
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3501,
    "end": 3505
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3505,
    "end": 3506
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3506,
    "end": 3519
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3519,
    "end": 3520
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3521,
    "end": 3534
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3534,
    "end": 3535
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3536,
    "end": 3549
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3549,
    "end": 3550
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3550,
    "end": 3551
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3552,
    "end": 3555
  },
  {
    "type": "Identifier",
    "value": "r2b",
    "start": 3556,
    "end": 3559
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3560,
    "end": 3561
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 3562,
    "end": 3564
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3564,
    "end": 3565
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3565,
    "end": 3569
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3569,
    "end": 3570
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3570,
    "end": 3583
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3583,
    "end": 3584
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3585,
    "end": 3598
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3598,
    "end": 3599
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3600,
    "end": 3613
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3613,
    "end": 3614
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3614,
    "end": 3615
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3615,
    "end": 3619
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3619,
    "end": 3620
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3620,
    "end": 3633
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3633,
    "end": 3634
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3635,
    "end": 3648
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3648,
    "end": 3649
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3650,
    "end": 3663
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3663,
    "end": 3664
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3664,
    "end": 3665
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3666,
    "end": 3673
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3674,
    "end": 3677
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 3678,
    "end": 3680
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3680,
    "end": 3681
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3682,
    "end": 3689
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3689,
    "end": 3690
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3690,
    "end": 3691
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3692,
    "end": 3693
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3693,
    "end": 3694
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3695,
    "end": 3701
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3701,
    "end": 3702
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3703,
    "end": 3704
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3704,
    "end": 3705
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3705,
    "end": 3706
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3707,
    "end": 3710
  },
  {
    "type": "Identifier",
    "value": "s2a",
    "start": 3711,
    "end": 3714
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3715,
    "end": 3716
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 3717,
    "end": 3719
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3719,
    "end": 3720
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3720,
    "end": 3724
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3724,
    "end": 3725
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3725,
    "end": 3738
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3738,
    "end": 3739
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3740,
    "end": 3753
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3753,
    "end": 3754
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3755,
    "end": 3768
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3768,
    "end": 3769
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3769,
    "end": 3770
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3771,
    "end": 3774
  },
  {
    "type": "Identifier",
    "value": "s2b",
    "start": 3775,
    "end": 3778
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3779,
    "end": 3780
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 3781,
    "end": 3783
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3783,
    "end": 3784
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3784,
    "end": 3788
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3788,
    "end": 3789
  },
  {
    "type": "Identifier",
    "value": "testFunction2P",
    "start": 3789,
    "end": 3803
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3803,
    "end": 3804
  },
  {
    "type": "Identifier",
    "value": "testFunction2P",
    "start": 3805,
    "end": 3819
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3819,
    "end": 3820
  },
  {
    "type": "Identifier",
    "value": "testFunction2P",
    "start": 3821,
    "end": 3835
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "var",
    "start": 3838,
    "end": 3841
  },
  {
    "type": "Identifier",
    "value": "s2c",
    "start": 3842,
    "end": 3845
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3846,
    "end": 3847
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 3848,
    "end": 3850
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3850,
    "end": 3851
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3851,
    "end": 3855
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3855,
    "end": 3856
  },
  {
    "type": "Identifier",
    "value": "testFunction2P",
    "start": 3856,
    "end": 3870
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3870,
    "end": 3871
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3872,
    "end": 3885
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3885,
    "end": 3886
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3887,
    "end": 3900
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3900,
    "end": 3901
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3901,
    "end": 3902
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3903,
    "end": 3906
  },
  {
    "type": "Identifier",
    "value": "s2d",
    "start": 3907,
    "end": 3910
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3911,
    "end": 3912
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 3913,
    "end": 3915
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3915,
    "end": 3916
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3916,
    "end": 3920
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3920,
    "end": 3921
  },
  {
    "type": "Identifier",
    "value": "testFunction2P",
    "start": 3921,
    "end": 3935
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3935,
    "end": 3936
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3937,
    "end": 3950
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3950,
    "end": 3951
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3952,
    "end": 3965
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3965,
    "end": 3966
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3966,
    "end": 3967
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3967,
    "end": 3971
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3971,
    "end": 3972
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3972,
    "end": 3985
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3985,
    "end": 3986
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3987,
    "end": 4000
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4000,
    "end": 4001
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 4002,
    "end": 4015
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4015,
    "end": 4016
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4016,
    "end": 4017
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4019,
    "end": 4026
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4027,
    "end": 4030
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 4031,
    "end": 4033
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4033,
    "end": 4034
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 4035,
    "end": 4043
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4043,
    "end": 4044
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4044,
    "end": 4050
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4050,
    "end": 4051
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4051,
    "end": 4052
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4053,
    "end": 4056
  },
  {
    "type": "Identifier",
    "value": "r3a",
    "start": 4057,
    "end": 4060
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4061,
    "end": 4062
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 4063,
    "end": 4065
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4065,
    "end": 4066
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4066,
    "end": 4070
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4070,
    "end": 4071
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4071,
    "end": 4084
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4084,
    "end": 4085
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4086,
    "end": 4099
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4099,
    "end": 4100
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4101,
    "end": 4114
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4114,
    "end": 4115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4115,
    "end": 4116
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4117,
    "end": 4120
  },
  {
    "type": "Identifier",
    "value": "r3b",
    "start": 4121,
    "end": 4124
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4125,
    "end": 4126
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 4127,
    "end": 4129
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4129,
    "end": 4130
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4130,
    "end": 4134
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4134,
    "end": 4135
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4135,
    "end": 4148
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4148,
    "end": 4149
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4150,
    "end": 4163
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4163,
    "end": 4164
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4165,
    "end": 4178
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4178,
    "end": 4179
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4179,
    "end": 4180
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4180,
    "end": 4184
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4184,
    "end": 4185
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4185,
    "end": 4198
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4198,
    "end": 4199
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4200,
    "end": 4213
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4213,
    "end": 4214
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4215,
    "end": 4228
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4228,
    "end": 4229
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4229,
    "end": 4230
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4231,
    "end": 4238
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4239,
    "end": 4242
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 4243,
    "end": 4245
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4245,
    "end": 4246
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 4247,
    "end": 4254
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4254,
    "end": 4255
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4255,
    "end": 4261
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4261,
    "end": 4262
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4262,
    "end": 4263
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4264,
    "end": 4267
  },
  {
    "type": "Identifier",
    "value": "s3a",
    "start": 4268,
    "end": 4271
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4272,
    "end": 4273
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 4274,
    "end": 4276
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4276,
    "end": 4277
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4277,
    "end": 4281
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4281,
    "end": 4282
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4282,
    "end": 4295
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4295,
    "end": 4296
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4297,
    "end": 4310
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4310,
    "end": 4311
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4312,
    "end": 4325
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4325,
    "end": 4326
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4326,
    "end": 4327
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4328,
    "end": 4331
  },
  {
    "type": "Identifier",
    "value": "s3b",
    "start": 4332,
    "end": 4335
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4336,
    "end": 4337
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 4338,
    "end": 4340
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4340,
    "end": 4341
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4341,
    "end": 4345
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4345,
    "end": 4346
  },
  {
    "type": "Identifier",
    "value": "testFunction3P",
    "start": 4346,
    "end": 4360
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4360,
    "end": 4361
  },
  {
    "type": "Identifier",
    "value": "testFunction3P",
    "start": 4362,
    "end": 4376
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4376,
    "end": 4377
  },
  {
    "type": "Identifier",
    "value": "testFunction3P",
    "start": 4378,
    "end": 4392
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4392,
    "end": 4393
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4393,
    "end": 4394
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4395,
    "end": 4398
  },
  {
    "type": "Identifier",
    "value": "s3c",
    "start": 4399,
    "end": 4402
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4403,
    "end": 4404
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 4405,
    "end": 4407
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4407,
    "end": 4408
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4408,
    "end": 4412
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4412,
    "end": 4413
  },
  {
    "type": "Identifier",
    "value": "testFunction3P",
    "start": 4413,
    "end": 4427
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4427,
    "end": 4428
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4429,
    "end": 4442
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4442,
    "end": 4443
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4444,
    "end": 4457
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4457,
    "end": 4458
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4458,
    "end": 4459
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4460,
    "end": 4463
  },
  {
    "type": "Identifier",
    "value": "s3d",
    "start": 4464,
    "end": 4467
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4468,
    "end": 4469
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 4470,
    "end": 4472
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4472,
    "end": 4473
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4473,
    "end": 4477
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4477,
    "end": 4478
  },
  {
    "type": "Identifier",
    "value": "testFunction3P",
    "start": 4478,
    "end": 4492
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4492,
    "end": 4493
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4494,
    "end": 4507
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4507,
    "end": 4508
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4509,
    "end": 4522
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4522,
    "end": 4523
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4523,
    "end": 4524
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4524,
    "end": 4528
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4528,
    "end": 4529
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4529,
    "end": 4542
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4542,
    "end": 4543
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4544,
    "end": 4557
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4557,
    "end": 4558
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4559,
    "end": 4572
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4572,
    "end": 4573
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4573,
    "end": 4574
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4576,
    "end": 4583
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4584,
    "end": 4587
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 4588,
    "end": 4590
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4590,
    "end": 4591
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 4592,
    "end": 4600
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4600,
    "end": 4601
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4601,
    "end": 4607
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4607,
    "end": 4608
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4608,
    "end": 4609
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4610,
    "end": 4617
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4618,
    "end": 4621
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 4622,
    "end": 4631
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4631,
    "end": 4632
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4633,
    "end": 4634
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4634,
    "end": 4635
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4635,
    "end": 4636
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4637,
    "end": 4640
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4640,
    "end": 4641
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4642,
    "end": 4644
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 4645,
    "end": 4653
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4653,
    "end": 4654
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4654,
    "end": 4660
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4660,
    "end": 4661
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4661,
    "end": 4662
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4663,
    "end": 4670
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4671,
    "end": 4674
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 4675,
    "end": 4683
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4683,
    "end": 4684
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4685,
    "end": 4686
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4686,
    "end": 4687
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4687,
    "end": 4688
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4689,
    "end": 4692
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4692,
    "end": 4693
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4694,
    "end": 4696
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 4697,
    "end": 4704
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4704,
    "end": 4705
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4705,
    "end": 4711
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4711,
    "end": 4712
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4712,
    "end": 4713
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4714,
    "end": 4717
  },
  {
    "type": "Identifier",
    "value": "r4a",
    "start": 4718,
    "end": 4721
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4722,
    "end": 4723
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 4724,
    "end": 4726
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4726,
    "end": 4727
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4727,
    "end": 4731
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4731,
    "end": 4732
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 4732,
    "end": 4745
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4745,
    "end": 4746
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 4747,
    "end": 4760
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4760,
    "end": 4761
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 4762,
    "end": 4775
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4775,
    "end": 4776
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4776,
    "end": 4777
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4787,
    "end": 4790
  },
  {
    "type": "Identifier",
    "value": "r4b",
    "start": 4791,
    "end": 4794
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4795,
    "end": 4796
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 4797,
    "end": 4799
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4799,
    "end": 4800
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4800,
    "end": 4804
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4804,
    "end": 4805
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 4805,
    "end": 4814
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4814,
    "end": 4815
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 4816,
    "end": 4829
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4829,
    "end": 4830
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 4831,
    "end": 4844
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4844,
    "end": 4845
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4845,
    "end": 4846
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4846,
    "end": 4850
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4850,
    "end": 4851
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 4851,
    "end": 4860
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4860,
    "end": 4861
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 4862,
    "end": 4875
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4875,
    "end": 4876
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 4877,
    "end": 4890
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4890,
    "end": 4891
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4891,
    "end": 4892
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4899,
    "end": 4906
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4907,
    "end": 4910
  },
  {
    "type": "Identifier",
    "value": "s4",
    "start": 4911,
    "end": 4913
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4913,
    "end": 4914
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 4915,
    "end": 4922
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4922,
    "end": 4923
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4923,
    "end": 4929
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4929,
    "end": 4930
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4930,
    "end": 4931
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4932,
    "end": 4935
  },
  {
    "type": "Identifier",
    "value": "s4a",
    "start": 4936,
    "end": 4939
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4940,
    "end": 4941
  },
  {
    "type": "Identifier",
    "value": "s4",
    "start": 4942,
    "end": 4944
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4944,
    "end": 4945
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4945,
    "end": 4949
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4949,
    "end": 4950
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 4950,
    "end": 4963
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4963,
    "end": 4964
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 4965,
    "end": 4978
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4978,
    "end": 4979
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 4980,
    "end": 4993
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4993,
    "end": 4994
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4994,
    "end": 4995
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5005,
    "end": 5008
  },
  {
    "type": "Identifier",
    "value": "s4b",
    "start": 5009,
    "end": 5012
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5013,
    "end": 5014
  },
  {
    "type": "Identifier",
    "value": "s4",
    "start": 5015,
    "end": 5017
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5017,
    "end": 5018
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5018,
    "end": 5022
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5022,
    "end": 5023
  },
  {
    "type": "Identifier",
    "value": "testFunction4P",
    "start": 5023,
    "end": 5037
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5037,
    "end": 5038
  },
  {
    "type": "Identifier",
    "value": "testFunction4P",
    "start": 5039,
    "end": 5053
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5053,
    "end": 5054
  },
  {
    "type": "Identifier",
    "value": "testFunction4P",
    "start": 5055,
    "end": 5069
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5069,
    "end": 5070
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5070,
    "end": 5071
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5082,
    "end": 5085
  },
  {
    "type": "Identifier",
    "value": "s4c",
    "start": 5086,
    "end": 5089
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5090,
    "end": 5091
  },
  {
    "type": "Identifier",
    "value": "s4",
    "start": 5092,
    "end": 5094
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5094,
    "end": 5095
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5095,
    "end": 5099
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5099,
    "end": 5100
  },
  {
    "type": "Identifier",
    "value": "testFunction4P",
    "start": 5100,
    "end": 5114
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5114,
    "end": 5115
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 5116,
    "end": 5129
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5129,
    "end": 5130
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 5131,
    "end": 5144
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5144,
    "end": 5145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5145,
    "end": 5146
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5156,
    "end": 5159
  },
  {
    "type": "Identifier",
    "value": "s4d",
    "start": 5160,
    "end": 5163
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5164,
    "end": 5165
  },
  {
    "type": "Identifier",
    "value": "s4",
    "start": 5166,
    "end": 5168
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5168,
    "end": 5169
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5169,
    "end": 5173
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5173,
    "end": 5174
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5174,
    "end": 5183
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5183,
    "end": 5184
  },
  {
    "type": "Identifier",
    "value": "testFunction4P",
    "start": 5185,
    "end": 5199
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5199,
    "end": 5200
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 5201,
    "end": 5214
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5214,
    "end": 5215
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5215,
    "end": 5216
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5216,
    "end": 5220
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5220,
    "end": 5221
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5221,
    "end": 5230
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5230,
    "end": 5231
  },
  {
    "type": "Identifier",
    "value": "testFunction4P",
    "start": 5232,
    "end": 5246
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5246,
    "end": 5247
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 5248,
    "end": 5261
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5261,
    "end": 5262
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5262,
    "end": 5263
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5265,
    "end": 5272
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5273,
    "end": 5276
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 5277,
    "end": 5279
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5279,
    "end": 5280
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 5281,
    "end": 5289
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5289,
    "end": 5290
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5290,
    "end": 5296
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5296,
    "end": 5297
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5297,
    "end": 5298
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5299,
    "end": 5302
  },
  {
    "type": "Identifier",
    "value": "r5a",
    "start": 5303,
    "end": 5306
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5307,
    "end": 5308
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 5309,
    "end": 5311
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5311,
    "end": 5312
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5312,
    "end": 5316
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5316,
    "end": 5317
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5317,
    "end": 5330
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5330,
    "end": 5331
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5332,
    "end": 5345
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5345,
    "end": 5346
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5347,
    "end": 5360
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5360,
    "end": 5361
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5361,
    "end": 5362
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5372,
    "end": 5375
  },
  {
    "type": "Identifier",
    "value": "r5b",
    "start": 5376,
    "end": 5379
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5380,
    "end": 5381
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 5382,
    "end": 5384
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5384,
    "end": 5385
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5385,
    "end": 5389
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5389,
    "end": 5390
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5390,
    "end": 5399
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5399,
    "end": 5400
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5401,
    "end": 5410
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5410,
    "end": 5411
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5412,
    "end": 5421
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5421,
    "end": 5422
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5422,
    "end": 5423
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5423,
    "end": 5427
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5427,
    "end": 5428
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5428,
    "end": 5437
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5437,
    "end": 5438
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5439,
    "end": 5448
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5448,
    "end": 5449
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5450,
    "end": 5459
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5459,
    "end": 5460
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5460,
    "end": 5461
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5468,
    "end": 5475
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5476,
    "end": 5479
  },
  {
    "type": "Identifier",
    "value": "s5",
    "start": 5480,
    "end": 5482
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5482,
    "end": 5483
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 5484,
    "end": 5491
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5491,
    "end": 5492
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5492,
    "end": 5498
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5498,
    "end": 5499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5499,
    "end": 5500
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5501,
    "end": 5504
  },
  {
    "type": "Identifier",
    "value": "s5a",
    "start": 5505,
    "end": 5508
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5509,
    "end": 5510
  },
  {
    "type": "Identifier",
    "value": "s5",
    "start": 5511,
    "end": 5513
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5513,
    "end": 5514
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5514,
    "end": 5518
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5518,
    "end": 5519
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5519,
    "end": 5532
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5532,
    "end": 5533
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5534,
    "end": 5547
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5547,
    "end": 5548
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5549,
    "end": 5562
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5562,
    "end": 5563
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5563,
    "end": 5564
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5574,
    "end": 5577
  },
  {
    "type": "Identifier",
    "value": "s5b",
    "start": 5578,
    "end": 5581
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5582,
    "end": 5583
  },
  {
    "type": "Identifier",
    "value": "s5",
    "start": 5584,
    "end": 5586
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5586,
    "end": 5587
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5587,
    "end": 5591
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5591,
    "end": 5592
  },
  {
    "type": "Identifier",
    "value": "testFunction5P",
    "start": 5592,
    "end": 5606
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5606,
    "end": 5607
  },
  {
    "type": "Identifier",
    "value": "testFunction5P",
    "start": 5608,
    "end": 5622
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5622,
    "end": 5623
  },
  {
    "type": "Identifier",
    "value": "testFunction5P",
    "start": 5624,
    "end": 5638
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5638,
    "end": 5639
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5639,
    "end": 5640
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5650,
    "end": 5653
  },
  {
    "type": "Identifier",
    "value": "s5c",
    "start": 5654,
    "end": 5657
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5658,
    "end": 5659
  },
  {
    "type": "Identifier",
    "value": "s5",
    "start": 5660,
    "end": 5662
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5662,
    "end": 5663
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5663,
    "end": 5667
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5667,
    "end": 5668
  },
  {
    "type": "Identifier",
    "value": "testFunction5P",
    "start": 5668,
    "end": 5682
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5682,
    "end": 5683
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5684,
    "end": 5697
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5697,
    "end": 5698
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5699,
    "end": 5712
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "var",
    "start": 5724,
    "end": 5727
  },
  {
    "type": "Identifier",
    "value": "s5d",
    "start": 5728,
    "end": 5731
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5732,
    "end": 5733
  },
  {
    "type": "Identifier",
    "value": "s5",
    "start": 5734,
    "end": 5736
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5736,
    "end": 5737
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5737,
    "end": 5741
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5741,
    "end": 5742
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 5742,
    "end": 5750
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5750,
    "end": 5751
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 5752,
    "end": 5760
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5760,
    "end": 5761
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 5762,
    "end": 5770
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5770,
    "end": 5771
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5771,
    "end": 5772
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5772,
    "end": 5776
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5776,
    "end": 5777
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5777,
    "end": 5786
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5786,
    "end": 5787
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5788,
    "end": 5797
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5797,
    "end": 5798
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5799,
    "end": 5808
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5808,
    "end": 5809
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5809,
    "end": 5810
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5818,
    "end": 5825
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5826,
    "end": 5829
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 5830,
    "end": 5832
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5832,
    "end": 5833
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 5834,
    "end": 5842
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5842,
    "end": 5843
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5843,
    "end": 5849
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5849,
    "end": 5850
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5850,
    "end": 5851
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5852,
    "end": 5855
  },
  {
    "type": "Identifier",
    "value": "r6a",
    "start": 5856,
    "end": 5859
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5860,
    "end": 5861
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 5862,
    "end": 5864
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5864,
    "end": 5865
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5865,
    "end": 5869
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5869,
    "end": 5870
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 5870,
    "end": 5883
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5883,
    "end": 5884
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 5885,
    "end": 5898
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5898,
    "end": 5899
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 5900,
    "end": 5913
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5913,
    "end": 5914
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5914,
    "end": 5915
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5925,
    "end": 5928
  },
  {
    "type": "Identifier",
    "value": "r6b",
    "start": 5929,
    "end": 5932
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5933,
    "end": 5934
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 5935,
    "end": 5937
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5937,
    "end": 5938
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5938,
    "end": 5942
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5942,
    "end": 5943
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5943,
    "end": 5952
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5952,
    "end": 5953
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5954,
    "end": 5963
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5963,
    "end": 5964
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5965,
    "end": 5974
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5974,
    "end": 5975
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5975,
    "end": 5976
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5976,
    "end": 5980
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5980,
    "end": 5981
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5981,
    "end": 5990
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5990,
    "end": 5991
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5992,
    "end": 6001
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6001,
    "end": 6002
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6003,
    "end": 6012
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6012,
    "end": 6013
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6013,
    "end": 6014
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 6021,
    "end": 6028
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6029,
    "end": 6032
  },
  {
    "type": "Identifier",
    "value": "s6",
    "start": 6033,
    "end": 6035
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6035,
    "end": 6036
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6037,
    "end": 6044
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6044,
    "end": 6045
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6045,
    "end": 6051
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6051,
    "end": 6052
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6052,
    "end": 6053
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6054,
    "end": 6057
  },
  {
    "type": "Identifier",
    "value": "s6a",
    "start": 6058,
    "end": 6061
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6062,
    "end": 6063
  },
  {
    "type": "Identifier",
    "value": "s6",
    "start": 6064,
    "end": 6066
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6066,
    "end": 6067
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6067,
    "end": 6071
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6071,
    "end": 6072
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 6072,
    "end": 6085
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6085,
    "end": 6086
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 6087,
    "end": 6100
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6100,
    "end": 6101
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 6102,
    "end": 6115
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6115,
    "end": 6116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6116,
    "end": 6117
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6127,
    "end": 6130
  },
  {
    "type": "Identifier",
    "value": "s6b",
    "start": 6131,
    "end": 6134
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6135,
    "end": 6136
  },
  {
    "type": "Identifier",
    "value": "s6",
    "start": 6137,
    "end": 6139
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6139,
    "end": 6140
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6140,
    "end": 6144
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6144,
    "end": 6145
  },
  {
    "type": "Identifier",
    "value": "testFunction6P",
    "start": 6145,
    "end": 6159
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6159,
    "end": 6160
  },
  {
    "type": "Identifier",
    "value": "testFunction6P",
    "start": 6161,
    "end": 6175
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6175,
    "end": 6176
  },
  {
    "type": "Identifier",
    "value": "testFunction6P",
    "start": 6177,
    "end": 6191
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6191,
    "end": 6192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6192,
    "end": 6193
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6203,
    "end": 6206
  },
  {
    "type": "Identifier",
    "value": "s6c",
    "start": 6207,
    "end": 6210
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6211,
    "end": 6212
  },
  {
    "type": "Identifier",
    "value": "s6",
    "start": 6213,
    "end": 6215
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6215,
    "end": 6216
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6216,
    "end": 6220
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6220,
    "end": 6221
  },
  {
    "type": "Identifier",
    "value": "testFunction6P",
    "start": 6221,
    "end": 6235
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6235,
    "end": 6236
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 6237,
    "end": 6250
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6250,
    "end": 6251
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 6252,
    "end": 6265
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6265,
    "end": 6266
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6266,
    "end": 6267
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6277,
    "end": 6280
  },
  {
    "type": "Identifier",
    "value": "s6d",
    "start": 6281,
    "end": 6284
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6285,
    "end": 6286
  },
  {
    "type": "Identifier",
    "value": "s6",
    "start": 6287,
    "end": 6289
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6289,
    "end": 6290
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6290,
    "end": 6294
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6294,
    "end": 6295
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6295,
    "end": 6303
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6303,
    "end": 6304
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6305,
    "end": 6313
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6313,
    "end": 6314
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6315,
    "end": 6323
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6323,
    "end": 6324
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6324,
    "end": 6325
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6325,
    "end": 6329
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6329,
    "end": 6330
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6330,
    "end": 6339
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6339,
    "end": 6340
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6341,
    "end": 6350
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6350,
    "end": 6351
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6352,
    "end": 6361
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6361,
    "end": 6362
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6362,
    "end": 6363
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 6371,
    "end": 6378
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6379,
    "end": 6382
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 6383,
    "end": 6385
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6385,
    "end": 6386
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 6387,
    "end": 6395
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6395,
    "end": 6396
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6396,
    "end": 6402
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6402,
    "end": 6403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6403,
    "end": 6404
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6405,
    "end": 6408
  },
  {
    "type": "Identifier",
    "value": "r7a",
    "start": 6409,
    "end": 6412
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6413,
    "end": 6414
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 6415,
    "end": 6417
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6417,
    "end": 6418
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6418,
    "end": 6422
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6422,
    "end": 6423
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6423,
    "end": 6436
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6436,
    "end": 6437
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6438,
    "end": 6451
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6451,
    "end": 6452
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6453,
    "end": 6466
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6466,
    "end": 6467
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6467,
    "end": 6468
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6478,
    "end": 6481
  },
  {
    "type": "Identifier",
    "value": "r7b",
    "start": 6482,
    "end": 6485
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6486,
    "end": 6487
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 6488,
    "end": 6490
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6490,
    "end": 6491
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6491,
    "end": 6495
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6495,
    "end": 6496
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6496,
    "end": 6505
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6505,
    "end": 6506
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6507,
    "end": 6516
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6516,
    "end": 6517
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6518,
    "end": 6527
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6527,
    "end": 6528
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6528,
    "end": 6529
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6529,
    "end": 6533
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6533,
    "end": 6534
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6534,
    "end": 6543
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6543,
    "end": 6544
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6545,
    "end": 6554
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6554,
    "end": 6555
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6556,
    "end": 6565
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6565,
    "end": 6566
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6566,
    "end": 6567
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 6574,
    "end": 6581
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6582,
    "end": 6585
  },
  {
    "type": "Identifier",
    "value": "s7",
    "start": 6586,
    "end": 6588
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6588,
    "end": 6589
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6590,
    "end": 6597
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6597,
    "end": 6598
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6598,
    "end": 6604
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6604,
    "end": 6605
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6605,
    "end": 6606
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6607,
    "end": 6610
  },
  {
    "type": "Identifier",
    "value": "s7a",
    "start": 6611,
    "end": 6614
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6615,
    "end": 6616
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 6617,
    "end": 6619
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6619,
    "end": 6620
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6620,
    "end": 6624
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6624,
    "end": 6625
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6625,
    "end": 6638
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6638,
    "end": 6639
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6640,
    "end": 6653
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6653,
    "end": 6654
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6655,
    "end": 6668
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6668,
    "end": 6669
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6669,
    "end": 6670
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6680,
    "end": 6683
  },
  {
    "type": "Identifier",
    "value": "s7b",
    "start": 6684,
    "end": 6687
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6688,
    "end": 6689
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 6690,
    "end": 6692
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6692,
    "end": 6693
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6693,
    "end": 6697
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6697,
    "end": 6698
  },
  {
    "type": "Identifier",
    "value": "testFunction7P",
    "start": 6698,
    "end": 6712
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6712,
    "end": 6713
  },
  {
    "type": "Identifier",
    "value": "testFunction7P",
    "start": 6714,
    "end": 6728
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6728,
    "end": 6729
  },
  {
    "type": "Identifier",
    "value": "testFunction7P",
    "start": 6730,
    "end": 6744
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6744,
    "end": 6745
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6745,
    "end": 6746
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6756,
    "end": 6759
  },
  {
    "type": "Identifier",
    "value": "s7c",
    "start": 6760,
    "end": 6763
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6764,
    "end": 6765
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 6766,
    "end": 6768
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6768,
    "end": 6769
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6769,
    "end": 6773
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6773,
    "end": 6774
  },
  {
    "type": "Identifier",
    "value": "testFunction7P",
    "start": 6774,
    "end": 6788
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6788,
    "end": 6789
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6790,
    "end": 6803
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6803,
    "end": 6804
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6805,
    "end": 6818
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6818,
    "end": 6819
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6819,
    "end": 6820
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6830,
    "end": 6833
  },
  {
    "type": "Identifier",
    "value": "s7d",
    "start": 6834,
    "end": 6837
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6838,
    "end": 6839
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 6840,
    "end": 6842
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6842,
    "end": 6843
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6843,
    "end": 6847
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6847,
    "end": 6848
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6848,
    "end": 6856
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6856,
    "end": 6857
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6858,
    "end": 6866
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6866,
    "end": 6867
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6868,
    "end": 6876
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6876,
    "end": 6877
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6877,
    "end": 6878
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6878,
    "end": 6882
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6882,
    "end": 6883
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6883,
    "end": 6891
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6891,
    "end": 6892
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6893,
    "end": 6901
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6901,
    "end": 6902
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6903,
    "end": 6911
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6911,
    "end": 6912
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6912,
    "end": 6913
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 6922,
    "end": 6929
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6930,
    "end": 6933
  },
  {
    "type": "Identifier",
    "value": "r8",
    "start": 6934,
    "end": 6936
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6936,
    "end": 6937
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 6938,
    "end": 6946
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6946,
    "end": 6947
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6947,
    "end": 6953
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6953,
    "end": 6954
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6954,
    "end": 6955
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 6956,
    "end": 6963
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6964,
    "end": 6967
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 6968,
    "end": 6977
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6977,
    "end": 6978
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6979,
    "end": 6980
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 6980,
    "end": 6981
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6981,
    "end": 6982
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 6983,
    "end": 6986
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6986,
    "end": 6987
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6988,
    "end": 6990
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 6991,
    "end": 6999
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6999,
    "end": 7000
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7000,
    "end": 7006
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7006,
    "end": 7007
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7007,
    "end": 7008
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 7009,
    "end": 7016
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7017,
    "end": 7020
  },
  {
    "type": "Identifier",
    "value": "nPromise",
    "start": 7021,
    "end": 7029
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7029,
    "end": 7030
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7031,
    "end": 7032
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 7032,
    "end": 7033
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7033,
    "end": 7034
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 7035,
    "end": 7038
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7038,
    "end": 7039
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 7040,
    "end": 7042
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 7043,
    "end": 7050
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7050,
    "end": 7051
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7051,
    "end": 7057
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7057,
    "end": 7058
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7058,
    "end": 7059
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7060,
    "end": 7063
  },
  {
    "type": "Identifier",
    "value": "r8a",
    "start": 7064,
    "end": 7067
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7068,
    "end": 7069
  },
  {
    "type": "Identifier",
    "value": "r8",
    "start": 7070,
    "end": 7072
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7072,
    "end": 7073
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7073,
    "end": 7077
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7077,
    "end": 7078
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 7078,
    "end": 7091
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7091,
    "end": 7092
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 7093,
    "end": 7106
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7106,
    "end": 7107
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 7108,
    "end": 7121
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7121,
    "end": 7122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7122,
    "end": 7123
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7133,
    "end": 7136
  },
  {
    "type": "Identifier",
    "value": "r8b",
    "start": 7137,
    "end": 7140
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7141,
    "end": 7142
  },
  {
    "type": "Identifier",
    "value": "r8",
    "start": 7143,
    "end": 7145
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7145,
    "end": 7146
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7146,
    "end": 7150
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7150,
    "end": 7151
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7151,
    "end": 7160
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7160,
    "end": 7161
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7162,
    "end": 7171
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7171,
    "end": 7172
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7173,
    "end": 7182
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7182,
    "end": 7183
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7183,
    "end": 7184
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7184,
    "end": 7188
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7188,
    "end": 7189
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7189,
    "end": 7198
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7198,
    "end": 7199
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7200,
    "end": 7209
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7209,
    "end": 7210
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7211,
    "end": 7220
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7220,
    "end": 7221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7221,
    "end": 7222
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7229,
    "end": 7232
  },
  {
    "type": "Identifier",
    "value": "s8",
    "start": 7233,
    "end": 7235
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7235,
    "end": 7236
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 7237,
    "end": 7244
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7244,
    "end": 7245
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7245,
    "end": 7251
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7251,
    "end": 7252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7252,
    "end": 7253
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7254,
    "end": 7257
  },
  {
    "type": "Identifier",
    "value": "s8a",
    "start": 7258,
    "end": 7261
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7262,
    "end": 7263
  },
  {
    "type": "Identifier",
    "value": "s8",
    "start": 7264,
    "end": 7266
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7266,
    "end": 7267
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7267,
    "end": 7271
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7271,
    "end": 7272
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 7272,
    "end": 7285
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7285,
    "end": 7286
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 7287,
    "end": 7300
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7300,
    "end": 7301
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 7302,
    "end": 7315
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7315,
    "end": 7316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7316,
    "end": 7317
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7327,
    "end": 7330
  },
  {
    "type": "Identifier",
    "value": "s8b",
    "start": 7331,
    "end": 7334
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7335,
    "end": 7336
  },
  {
    "type": "Identifier",
    "value": "s8",
    "start": 7337,
    "end": 7339
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7339,
    "end": 7340
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7340,
    "end": 7344
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7344,
    "end": 7345
  },
  {
    "type": "Identifier",
    "value": "testFunction8P",
    "start": 7345,
    "end": 7359
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7359,
    "end": 7360
  },
  {
    "type": "Identifier",
    "value": "testFunction8P",
    "start": 7361,
    "end": 7375
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7375,
    "end": 7376
  },
  {
    "type": "Identifier",
    "value": "testFunction8P",
    "start": 7377,
    "end": 7391
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7391,
    "end": 7392
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7392,
    "end": 7393
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7403,
    "end": 7406
  },
  {
    "type": "Identifier",
    "value": "s8c",
    "start": 7407,
    "end": 7410
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7411,
    "end": 7412
  },
  {
    "type": "Identifier",
    "value": "s8",
    "start": 7413,
    "end": 7415
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7415,
    "end": 7416
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7416,
    "end": 7420
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7420,
    "end": 7421
  },
  {
    "type": "Identifier",
    "value": "testFunction8P",
    "start": 7421,
    "end": 7435
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7435,
    "end": 7436
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 7437,
    "end": 7450
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7450,
    "end": 7451
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 7452,
    "end": 7465
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7465,
    "end": 7466
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7466,
    "end": 7467
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7477,
    "end": 7480
  },
  {
    "type": "Identifier",
    "value": "s8d",
    "start": 7481,
    "end": 7484
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7485,
    "end": 7486
  },
  {
    "type": "Identifier",
    "value": "s8",
    "start": 7487,
    "end": 7489
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7489,
    "end": 7490
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7490,
    "end": 7494
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7494,
    "end": 7495
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7495,
    "end": 7504
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7504,
    "end": 7505
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7506,
    "end": 7515
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7515,
    "end": 7516
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7517,
    "end": 7526
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7526,
    "end": 7527
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7527,
    "end": 7528
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7528,
    "end": 7532
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7532,
    "end": 7533
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7533,
    "end": 7542
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7542,
    "end": 7543
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7544,
    "end": 7553
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7553,
    "end": 7554
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7555,
    "end": 7564
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7564,
    "end": 7565
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7565,
    "end": 7566
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 7574,
    "end": 7581
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7582,
    "end": 7585
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 7586,
    "end": 7588
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7588,
    "end": 7589
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 7590,
    "end": 7598
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7598,
    "end": 7599
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7599,
    "end": 7605
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7605,
    "end": 7606
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7606,
    "end": 7607
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7608,
    "end": 7611
  },
  {
    "type": "Identifier",
    "value": "r9a",
    "start": 7612,
    "end": 7615
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7616,
    "end": 7617
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 7618,
    "end": 7620
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7620,
    "end": 7621
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7621,
    "end": 7625
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7625,
    "end": 7626
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 7626,
    "end": 7639
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7639,
    "end": 7640
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 7641,
    "end": 7654
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7654,
    "end": 7655
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 7656,
    "end": 7669
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7669,
    "end": 7670
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7670,
    "end": 7671
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7681,
    "end": 7684
  },
  {
    "type": "Identifier",
    "value": "r9b",
    "start": 7685,
    "end": 7688
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7689,
    "end": 7690
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 7691,
    "end": 7693
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7693,
    "end": 7694
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7694,
    "end": 7698
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7698,
    "end": 7699
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 7699,
    "end": 7708
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7708,
    "end": 7709
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 7710,
    "end": 7719
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7719,
    "end": 7720
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 7721,
    "end": 7730
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7730,
    "end": 7731
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7731,
    "end": 7732
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7739,
    "end": 7742
  },
  {
    "type": "Identifier",
    "value": "r9c",
    "start": 7743,
    "end": 7746
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7747,
    "end": 7748
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 7749,
    "end": 7751
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7751,
    "end": 7752
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7752,
    "end": 7756
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7756,
    "end": 7757
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7757,
    "end": 7766
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7766,
    "end": 7767
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7768,
    "end": 7777
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7777,
    "end": 7778
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7779,
    "end": 7788
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7788,
    "end": 7789
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7789,
    "end": 7790
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7797,
    "end": 7800
  },
  {
    "type": "Identifier",
    "value": "r9d",
    "start": 7801,
    "end": 7804
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7805,
    "end": 7806
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 7807,
    "end": 7809
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7809,
    "end": 7810
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7810,
    "end": 7814
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7814,
    "end": 7815
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 7815,
    "end": 7827
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7827,
    "end": 7828
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 7829,
    "end": 7838
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7838,
    "end": 7839
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7840,
    "end": 7849
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7849,
    "end": 7850
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7850,
    "end": 7851
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7861,
    "end": 7864
  },
  {
    "type": "Identifier",
    "value": "r9e",
    "start": 7865,
    "end": 7868
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7869,
    "end": 7870
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 7871,
    "end": 7873
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7873,
    "end": 7874
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7874,
    "end": 7878
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7878,
    "end": 7879
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 7879,
    "end": 7891
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7891,
    "end": 7892
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7893,
    "end": 7902
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7902,
    "end": 7903
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 7904,
    "end": 7913
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7913,
    "end": 7914
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7914,
    "end": 7915
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7915,
    "end": 7919
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7919,
    "end": 7920
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 7920,
    "end": 7929
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7929,
    "end": 7930
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 7931,
    "end": 7940
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7940,
    "end": 7941
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 7942,
    "end": 7951
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7951,
    "end": 7952
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7952,
    "end": 7953
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 7960,
    "end": 7967
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7968,
    "end": 7971
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 7972,
    "end": 7974
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7974,
    "end": 7975
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 7976,
    "end": 7983
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7983,
    "end": 7984
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7984,
    "end": 7990
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7990,
    "end": 7991
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7991,
    "end": 7992
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7993,
    "end": 7996
  },
  {
    "type": "Identifier",
    "value": "s9a",
    "start": 7997,
    "end": 8000
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8001,
    "end": 8002
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 8003,
    "end": 8005
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8005,
    "end": 8006
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8006,
    "end": 8010
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8010,
    "end": 8011
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 8011,
    "end": 8024
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8024,
    "end": 8025
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 8026,
    "end": 8039
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8039,
    "end": 8040
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 8041,
    "end": 8054
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8054,
    "end": 8055
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8055,
    "end": 8056
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8066,
    "end": 8069
  },
  {
    "type": "Identifier",
    "value": "s9b",
    "start": 8070,
    "end": 8073
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8074,
    "end": 8075
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 8076,
    "end": 8078
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8078,
    "end": 8079
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8079,
    "end": 8083
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8083,
    "end": 8084
  },
  {
    "type": "Identifier",
    "value": "testFunction9P",
    "start": 8084,
    "end": 8098
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8098,
    "end": 8099
  },
  {
    "type": "Identifier",
    "value": "testFunction9P",
    "start": 8100,
    "end": 8114
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8114,
    "end": 8115
  },
  {
    "type": "Identifier",
    "value": "testFunction9P",
    "start": 8116,
    "end": 8130
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8130,
    "end": 8131
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8131,
    "end": 8132
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8142,
    "end": 8145
  },
  {
    "type": "Identifier",
    "value": "s9c",
    "start": 8146,
    "end": 8149
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8150,
    "end": 8151
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 8152,
    "end": 8154
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8154,
    "end": 8155
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8155,
    "end": 8159
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8159,
    "end": 8160
  },
  {
    "type": "Identifier",
    "value": "testFunction9P",
    "start": 8160,
    "end": 8174
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8174,
    "end": 8175
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 8176,
    "end": 8189
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8189,
    "end": 8190
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 8191,
    "end": 8204
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8204,
    "end": 8205
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8205,
    "end": 8206
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8216,
    "end": 8219
  },
  {
    "type": "Identifier",
    "value": "s9d",
    "start": 8220,
    "end": 8223
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8224,
    "end": 8225
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 8226,
    "end": 8228
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8228,
    "end": 8229
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8229,
    "end": 8233
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8233,
    "end": 8234
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 8234,
    "end": 8242
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8242,
    "end": 8243
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 8244,
    "end": 8252
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8252,
    "end": 8253
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 8254,
    "end": 8262
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8262,
    "end": 8263
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8263,
    "end": 8264
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8271,
    "end": 8274
  },
  {
    "type": "Identifier",
    "value": "s9e",
    "start": 8275,
    "end": 8278
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8279,
    "end": 8280
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 8281,
    "end": 8283
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8283,
    "end": 8284
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8284,
    "end": 8288
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8288,
    "end": 8289
  },
  {
    "type": "Identifier",
    "value": "nPromise",
    "start": 8289,
    "end": 8297
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8297,
    "end": 8298
  },
  {
    "type": "Identifier",
    "value": "nPromise",
    "start": 8299,
    "end": 8307
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8307,
    "end": 8308
  },
  {
    "type": "Identifier",
    "value": "nPromise",
    "start": 8309,
    "end": 8317
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8317,
    "end": 8318
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8318,
    "end": 8319
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8326,
    "end": 8329
  },
  {
    "type": "Identifier",
    "value": "s9f",
    "start": 8330,
    "end": 8333
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8334,
    "end": 8335
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 8336,
    "end": 8338
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8338,
    "end": 8339
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8339,
    "end": 8343
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8343,
    "end": 8344
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 8344,
    "end": 8356
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8356,
    "end": 8357
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8358,
    "end": 8367
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8367,
    "end": 8368
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 8369,
    "end": 8378
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8378,
    "end": 8379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8379,
    "end": 8380
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8390,
    "end": 8393
  },
  {
    "type": "Identifier",
    "value": "s9g",
    "start": 8394,
    "end": 8397
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8398,
    "end": 8399
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 8400,
    "end": 8402
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8402,
    "end": 8403
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8403,
    "end": 8407
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8407,
    "end": 8408
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 8408,
    "end": 8420
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8420,
    "end": 8421
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 8422,
    "end": 8431
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8431,
    "end": 8432
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8433,
    "end": 8442
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8442,
    "end": 8443
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8443,
    "end": 8444
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8444,
    "end": 8448
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8448,
    "end": 8449
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8449,
    "end": 8458
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8458,
    "end": 8459
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8460,
    "end": 8469
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8469,
    "end": 8470
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8471,
    "end": 8480
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8480,
    "end": 8481
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8481,
    "end": 8482
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8490,
    "end": 8493
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 8494,
    "end": 8497
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8498,
    "end": 8499
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 8500,
    "end": 8514
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8514,
    "end": 8515
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 8515,
    "end": 8516
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 8517,
    "end": 8519
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 8520,
    "end": 8521
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8521,
    "end": 8522
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8522,
    "end": 8523
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8524,
    "end": 8527
  },
  {
    "type": "Identifier",
    "value": "r10a",
    "start": 8528,
    "end": 8532
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8533,
    "end": 8534
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 8535,
    "end": 8538
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8538,
    "end": 8539
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8539,
    "end": 8543
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8543,
    "end": 8544
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 8544,
    "end": 8558
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8558,
    "end": 8559
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 8560,
    "end": 8574
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8574,
    "end": 8575
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 8576,
    "end": 8590
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8590,
    "end": 8591
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8591,
    "end": 8592
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8599,
    "end": 8602
  },
  {
    "type": "Identifier",
    "value": "r10b",
    "start": 8603,
    "end": 8607
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8608,
    "end": 8609
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 8610,
    "end": 8613
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8613,
    "end": 8614
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8614,
    "end": 8618
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8618,
    "end": 8619
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8619,
    "end": 8628
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8628,
    "end": 8629
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8630,
    "end": 8639
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8639,
    "end": 8640
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8641,
    "end": 8650
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8650,
    "end": 8651
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8651,
    "end": 8652
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8659,
    "end": 8662
  },
  {
    "type": "Identifier",
    "value": "r10c",
    "start": 8663,
    "end": 8667
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8668,
    "end": 8669
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 8670,
    "end": 8673
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8673,
    "end": 8674
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8674,
    "end": 8678
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8678,
    "end": 8679
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 8679,
    "end": 8688
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8688,
    "end": 8689
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 8690,
    "end": 8699
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8699,
    "end": 8700
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 8701,
    "end": 8710
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8710,
    "end": 8711
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8711,
    "end": 8712
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8719,
    "end": 8722
  },
  {
    "type": "Identifier",
    "value": "r10d",
    "start": 8723,
    "end": 8727
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8728,
    "end": 8729
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 8730,
    "end": 8733
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8733,
    "end": 8734
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8734,
    "end": 8738
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8738,
    "end": 8739
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 8739,
    "end": 8751
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8751,
    "end": 8752
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8753,
    "end": 8762
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8762,
    "end": 8763
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 8764,
    "end": 8773
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8773,
    "end": 8774
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8774,
    "end": 8775
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8785,
    "end": 8788
  },
  {
    "type": "Identifier",
    "value": "r10e",
    "start": 8789,
    "end": 8793
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8794,
    "end": 8795
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 8796,
    "end": 8799
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8799,
    "end": 8800
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8800,
    "end": 8804
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8804,
    "end": 8805
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 8805,
    "end": 8817
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8817,
    "end": 8818
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 8819,
    "end": 8828
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8828,
    "end": 8829
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8830,
    "end": 8839
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8839,
    "end": 8840
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8840,
    "end": 8841
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8841,
    "end": 8845
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8845,
    "end": 8846
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8846,
    "end": 8855
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8855,
    "end": 8856
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8857,
    "end": 8866
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8866,
    "end": 8867
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8868,
    "end": 8877
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8877,
    "end": 8878
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8878,
    "end": 8879
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8886,
    "end": 8889
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 8890,
    "end": 8893
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8894,
    "end": 8895
  },
  {
    "type": "Identifier",
    "value": "testFunction10P",
    "start": 8896,
    "end": 8911
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8911,
    "end": 8912
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 8912,
    "end": 8913
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 8914,
    "end": 8916
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 8917,
    "end": 8918
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8918,
    "end": 8919
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8919,
    "end": 8920
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8921,
    "end": 8924
  },
  {
    "type": "Identifier",
    "value": "s10a",
    "start": 8925,
    "end": 8929
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8930,
    "end": 8931
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 8932,
    "end": 8935
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8935,
    "end": 8936
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8936,
    "end": 8940
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8940,
    "end": 8941
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 8941,
    "end": 8955
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8955,
    "end": 8956
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 8957,
    "end": 8971
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8971,
    "end": 8972
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 8973,
    "end": 8987
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8987,
    "end": 8988
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8988,
    "end": 8989
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8996,
    "end": 8999
  },
  {
    "type": "Identifier",
    "value": "s10b",
    "start": 9000,
    "end": 9004
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9005,
    "end": 9006
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 9007,
    "end": 9010
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9010,
    "end": 9011
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9011,
    "end": 9015
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9015,
    "end": 9016
  },
  {
    "type": "Identifier",
    "value": "testFunction10P",
    "start": 9016,
    "end": 9031
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9031,
    "end": 9032
  },
  {
    "type": "Identifier",
    "value": "testFunction10P",
    "start": 9033,
    "end": 9048
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9048,
    "end": 9049
  },
  {
    "type": "Identifier",
    "value": "testFunction10P",
    "start": 9050,
    "end": 9065
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9065,
    "end": 9066
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9066,
    "end": 9067
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9074,
    "end": 9077
  },
  {
    "type": "Identifier",
    "value": "s10c",
    "start": 9078,
    "end": 9082
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9083,
    "end": 9084
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 9085,
    "end": 9088
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9088,
    "end": 9089
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9089,
    "end": 9093
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9093,
    "end": 9094
  },
  {
    "type": "Identifier",
    "value": "testFunction10P",
    "start": 9094,
    "end": 9109
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9109,
    "end": 9110
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 9111,
    "end": 9125
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9125,
    "end": 9126
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 9127,
    "end": 9141
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9141,
    "end": 9142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9142,
    "end": 9143
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9150,
    "end": 9153
  },
  {
    "type": "Identifier",
    "value": "s10d",
    "start": 9154,
    "end": 9158
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9159,
    "end": 9160
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 9161,
    "end": 9164
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9164,
    "end": 9165
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9165,
    "end": 9169
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9169,
    "end": 9170
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 9170,
    "end": 9178
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9178,
    "end": 9179
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 9180,
    "end": 9188
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9188,
    "end": 9189
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 9190,
    "end": 9198
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9198,
    "end": 9199
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9199,
    "end": 9200
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9207,
    "end": 9210
  },
  {
    "type": "Identifier",
    "value": "s10e",
    "start": 9211,
    "end": 9215
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9216,
    "end": 9217
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 9218,
    "end": 9221
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9221,
    "end": 9222
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9222,
    "end": 9226
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9226,
    "end": 9227
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 9227,
    "end": 9236
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9236,
    "end": 9237
  },
  {
    "type": "Identifier",
    "value": "nPromise",
    "start": 9238,
    "end": 9246
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9246,
    "end": 9247
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 9248,
    "end": 9257
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9257,
    "end": 9258
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9258,
    "end": 9259
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9266,
    "end": 9269
  },
  {
    "type": "Identifier",
    "value": "s10f",
    "start": 9270,
    "end": 9274
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9275,
    "end": 9276
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 9277,
    "end": 9280
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9280,
    "end": 9281
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9281,
    "end": 9285
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9285,
    "end": 9286
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 9286,
    "end": 9299
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9299,
    "end": 9300
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 9301,
    "end": 9310
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9310,
    "end": 9311
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 9312,
    "end": 9321
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9321,
    "end": 9322
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9322,
    "end": 9323
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9333,
    "end": 9336
  },
  {
    "type": "Identifier",
    "value": "s10g",
    "start": 9337,
    "end": 9341
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9342,
    "end": 9343
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 9344,
    "end": 9347
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9347,
    "end": 9348
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9348,
    "end": 9352
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9352,
    "end": 9353
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 9353,
    "end": 9366
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9366,
    "end": 9367
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 9368,
    "end": 9377
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9377,
    "end": 9378
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 9379,
    "end": 9388
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9388,
    "end": 9389
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9389,
    "end": 9390
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9390,
    "end": 9394
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9394,
    "end": 9395
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 9395,
    "end": 9403
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9403,
    "end": 9404
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 9405,
    "end": 9414
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9414,
    "end": 9415
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 9416,
    "end": 9425
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9425,
    "end": 9426
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9426,
    "end": 9427
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 9435,
    "end": 9442
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9443,
    "end": 9446
  },
  {
    "type": "Identifier",
    "value": "r11",
    "start": 9447,
    "end": 9450
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9450,
    "end": 9451
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 9452,
    "end": 9460
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9460,
    "end": 9461
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 9461,
    "end": 9467
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 9467,
    "end": 9468
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9468,
    "end": 9469
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9470,
    "end": 9473
  },
  {
    "type": "Identifier",
    "value": "r11a",
    "start": 9474,
    "end": 9478
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9479,
    "end": 9480
  },
  {
    "type": "Identifier",
    "value": "r11",
    "start": 9481,
    "end": 9484
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9484,
    "end": 9485
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9485,
    "end": 9489
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9489,
    "end": 9490
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9490,
    "end": 9504
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9504,
    "end": 9505
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9506,
    "end": 9520
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9520,
    "end": 9521
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9522,
    "end": 9536
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9536,
    "end": 9537
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9537,
    "end": 9538
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 9545,
    "end": 9552
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9553,
    "end": 9556
  },
  {
    "type": "Identifier",
    "value": "s11",
    "start": 9557,
    "end": 9560
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9560,
    "end": 9561
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 9562,
    "end": 9569
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9569,
    "end": 9570
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 9570,
    "end": 9576
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 9576,
    "end": 9577
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9577,
    "end": 9578
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9579,
    "end": 9582
  },
  {
    "type": "Identifier",
    "value": "s11a",
    "start": 9583,
    "end": 9587
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9588,
    "end": 9589
  },
  {
    "type": "Identifier",
    "value": "s11",
    "start": 9590,
    "end": 9593
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9593,
    "end": 9594
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9594,
    "end": 9598
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9598,
    "end": 9599
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9599,
    "end": 9613
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9613,
    "end": 9614
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9615,
    "end": 9629
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9629,
    "end": 9630
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9631,
    "end": 9645
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9645,
    "end": 9646
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9646,
    "end": 9647
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9654,
    "end": 9657
  },
  {
    "type": "Identifier",
    "value": "s11b",
    "start": 9658,
    "end": 9662
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9663,
    "end": 9664
  },
  {
    "type": "Identifier",
    "value": "s11",
    "start": 9665,
    "end": 9668
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9668,
    "end": 9669
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9669,
    "end": 9673
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9673,
    "end": 9674
  },
  {
    "type": "Identifier",
    "value": "testFunction11P",
    "start": 9674,
    "end": 9689
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9689,
    "end": 9690
  },
  {
    "type": "Identifier",
    "value": "testFunction11P",
    "start": 9691,
    "end": 9706
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9706,
    "end": 9707
  },
  {
    "type": "Identifier",
    "value": "testFunction11P",
    "start": 9708,
    "end": 9723
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9723,
    "end": 9724
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9724,
    "end": 9725
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9735,
    "end": 9738
  },
  {
    "type": "Identifier",
    "value": "s11c",
    "start": 9739,
    "end": 9743
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9744,
    "end": 9745
  },
  {
    "type": "Identifier",
    "value": "s11",
    "start": 9746,
    "end": 9749
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9749,
    "end": 9750
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9750,
    "end": 9754
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9754,
    "end": 9755
  },
  {
    "type": "Identifier",
    "value": "testFunction11P",
    "start": 9755,
    "end": 9770
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9770,
    "end": 9771
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9772,
    "end": 9786
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9786,
    "end": 9787
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9788,
    "end": 9802
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9802,
    "end": 9803
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9803,
    "end": 9804
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9815,
    "end": 9818
  },
  {
    "type": "Identifier",
    "value": "r12",
    "start": 9819,
    "end": 9822
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9823,
    "end": 9824
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 9825,
    "end": 9839
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9839,
    "end": 9840
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 9840,
    "end": 9841
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 9842,
    "end": 9844
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 9845,
    "end": 9846
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9846,
    "end": 9847
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9847,
    "end": 9848
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9849,
    "end": 9852
  },
  {
    "type": "Identifier",
    "value": "r12a",
    "start": 9853,
    "end": 9857
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9858,
    "end": 9859
  },
  {
    "type": "Identifier",
    "value": "r12",
    "start": 9860,
    "end": 9863
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9863,
    "end": 9864
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9864,
    "end": 9868
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9868,
    "end": 9869
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 9869,
    "end": 9883
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9883,
    "end": 9884
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 9885,
    "end": 9899
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9899,
    "end": 9900
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 9901,
    "end": 9915
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9915,
    "end": 9916
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9916,
    "end": 9917
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9924,
    "end": 9927
  },
  {
    "type": "Identifier",
    "value": "s12",
    "start": 9928,
    "end": 9931
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9932,
    "end": 9933
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 9934,
    "end": 9948
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9948,
    "end": 9949
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 9949,
    "end": 9950
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 9951,
    "end": 9953
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 9954,
    "end": 9955
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9955,
    "end": 9956
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9956,
    "end": 9957
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9958,
    "end": 9961
  },
  {
    "type": "Identifier",
    "value": "s12a",
    "start": 9962,
    "end": 9966
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9967,
    "end": 9968
  },
  {
    "type": "Identifier",
    "value": "s12",
    "start": 9969,
    "end": 9972
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9972,
    "end": 9973
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9973,
    "end": 9977
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9977,
    "end": 9978
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 9978,
    "end": 9992
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9992,
    "end": 9993
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 9994,
    "end": 10008
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10008,
    "end": 10009
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 10010,
    "end": 10024
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10024,
    "end": 10025
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10025,
    "end": 10026
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 10033,
    "end": 10036
  },
  {
    "type": "Identifier",
    "value": "s12b",
    "start": 10037,
    "end": 10041
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10042,
    "end": 10043
  },
  {
    "type": "Identifier",
    "value": "s12",
    "start": 10044,
    "end": 10047
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 10047,
    "end": 10048
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 10048,
    "end": 10052
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10052,
    "end": 10053
  },
  {
    "type": "Identifier",
    "value": "testFunction12P",
    "start": 10053,
    "end": 10068
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10068,
    "end": 10069
  },
  {
    "type": "Identifier",
    "value": "testFunction12P",
    "start": 10070,
    "end": 10085
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10085,
    "end": 10086
  },
  {
    "type": "Identifier",
    "value": "testFunction12P",
    "start": 10087,
    "end": 10102
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10102,
    "end": 10103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10103,
    "end": 10104
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 10111,
    "end": 10114
  },
  {
    "type": "Identifier",
    "value": "s12c",
    "start": 10115,
    "end": 10119
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10120,
    "end": 10121
  },
  {
    "type": "Identifier",
    "value": "s12",
    "start": 10122,
    "end": 10125
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 10125,
    "end": 10126
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 10126,
    "end": 10130
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10130,
    "end": 10131
  },
  {
    "type": "Identifier",
    "value": "testFunction12P",
    "start": 10131,
    "end": 10146
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10146,
    "end": 10147
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 10148,
    "end": 10162
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10162,
    "end": 10163
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 10164,
    "end": 10178
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10178,
    "end": 10179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10179,
    "end": 10180
  }
]
```
