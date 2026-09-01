__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "Windows",
          "optional": false,
          "typeAnnotation": null,
          "start": 18,
          "end": 25
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foundation",
          "optional": false,
          "typeAnnotation": null,
          "start": 26,
          "end": 36
        },
        "start": 18,
        "end": 36
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IPromise",
              "optional": false,
              "typeAnnotation": null,
              "start": 53,
              "end": 61
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TResult",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 62,
                    "end": 69
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 62,
                  "end": 69
                }
              ],
              "start": 61,
              "end": 70
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
                    "start": 81,
                    "end": 85
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
                          "start": 86,
                          "end": 87
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 86,
                        "end": 87
                      }
                    ],
                    "start": 85,
                    "end": 88
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
                                    "name": "TResult",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 107,
                                    "end": 114
                                  },
                                  "typeArguments": null,
                                  "start": 107,
                                  "end": 114
                                },
                                "start": 105,
                                "end": 114
                              },
                              "start": 100,
                              "end": 114
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
                                "start": 119,
                                "end": 127
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
                                      "start": 128,
                                      "end": 129
                                    },
                                    "typeArguments": null,
                                    "start": 128,
                                    "end": 129
                                  }
                                ],
                                "start": 127,
                                "end": 130
                              },
                              "start": 119,
                              "end": 130
                            },
                            "start": 116,
                            "end": 130
                          },
                          "start": 99,
                          "end": 130
                        },
                        "start": 97,
                        "end": 130
                      },
                      "start": 89,
                      "end": 130
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
                                  "start": 148,
                                  "end": 151
                                },
                                "start": 146,
                                "end": 151
                              },
                              "start": 141,
                              "end": 151
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
                                "start": 156,
                                "end": 164
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
                                      "start": 165,
                                      "end": 166
                                    },
                                    "typeArguments": null,
                                    "start": 165,
                                    "end": 166
                                  }
                                ],
                                "start": 164,
                                "end": 167
                              },
                              "start": 156,
                              "end": 167
                            },
                            "start": 153,
                            "end": 167
                          },
                          "start": 140,
                          "end": 167
                        },
                        "start": 138,
                        "end": 167
                      },
                      "start": 132,
                      "end": 167
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
                                  "start": 191,
                                  "end": 194
                                },
                                "start": 189,
                                "end": 194
                              },
                              "start": 181,
                              "end": 194
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 199,
                              "end": 203
                            },
                            "start": 196,
                            "end": 203
                          },
                          "start": 180,
                          "end": 203
                        },
                        "start": 178,
                        "end": 203
                      },
                      "start": 169,
                      "end": 203
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
                        "start": 206,
                        "end": 214
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
                              "start": 215,
                              "end": 216
                            },
                            "typeArguments": null,
                            "start": 215,
                            "end": 216
                          }
                        ],
                        "start": 214,
                        "end": 217
                      },
                      "start": 206,
                      "end": 217
                    },
                    "start": 204,
                    "end": 217
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 81,
                  "end": 218
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 227,
                    "end": 231
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
                          "start": 232,
                          "end": 233
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 232,
                        "end": 233
                      }
                    ],
                    "start": 231,
                    "end": 234
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
                                    "name": "TResult",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 253,
                                    "end": 260
                                  },
                                  "typeArguments": null,
                                  "start": 253,
                                  "end": 260
                                },
                                "start": 251,
                                "end": 260
                              },
                              "start": 246,
                              "end": 260
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
                                "start": 265,
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
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 274,
                                      "end": 275
                                    },
                                    "typeArguments": null,
                                    "start": 274,
                                    "end": 275
                                  }
                                ],
                                "start": 273,
                                "end": 276
                              },
                              "start": 265,
                              "end": 276
                            },
                            "start": 262,
                            "end": 276
                          },
                          "start": 245,
                          "end": 276
                        },
                        "start": 243,
                        "end": 276
                      },
                      "start": 235,
                      "end": 276
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
                                  "start": 294,
                                  "end": 297
                                },
                                "start": 292,
                                "end": 297
                              },
                              "start": 287,
                              "end": 297
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
                                "start": 302,
                                "end": 303
                              },
                              "typeArguments": null,
                              "start": 302,
                              "end": 303
                            },
                            "start": 299,
                            "end": 303
                          },
                          "start": 286,
                          "end": 303
                        },
                        "start": 284,
                        "end": 303
                      },
                      "start": 278,
                      "end": 303
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
                                  "start": 327,
                                  "end": 330
                                },
                                "start": 325,
                                "end": 330
                              },
                              "start": 317,
                              "end": 330
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 335,
                              "end": 339
                            },
                            "start": 332,
                            "end": 339
                          },
                          "start": 316,
                          "end": 339
                        },
                        "start": 314,
                        "end": 339
                      },
                      "start": 305,
                      "end": 339
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
                        "start": 342,
                        "end": 350
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
                              "start": 351,
                              "end": 352
                            },
                            "typeArguments": null,
                            "start": 351,
                            "end": 352
                          }
                        ],
                        "start": 350,
                        "end": 353
                      },
                      "start": 342,
                      "end": 353
                    },
                    "start": 340,
                    "end": 353
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 227,
                  "end": 354
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 363,
                    "end": 367
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
                          "start": 368,
                          "end": 369
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 368,
                        "end": 369
                      }
                    ],
                    "start": 367,
                    "end": 370
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
                                    "name": "TResult",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 389,
                                    "end": 396
                                  },
                                  "typeArguments": null,
                                  "start": 389,
                                  "end": 396
                                },
                                "start": 387,
                                "end": 396
                              },
                              "start": 382,
                              "end": 396
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
                                "start": 401,
                                "end": 402
                              },
                              "typeArguments": null,
                              "start": 401,
                              "end": 402
                            },
                            "start": 398,
                            "end": 402
                          },
                          "start": 381,
                          "end": 402
                        },
                        "start": 379,
                        "end": 402
                      },
                      "start": 371,
                      "end": 402
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
                                  "start": 420,
                                  "end": 423
                                },
                                "start": 418,
                                "end": 423
                              },
                              "start": 413,
                              "end": 423
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
                                "start": 428,
                                "end": 436
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
                                      "start": 437,
                                      "end": 438
                                    },
                                    "typeArguments": null,
                                    "start": 437,
                                    "end": 438
                                  }
                                ],
                                "start": 436,
                                "end": 439
                              },
                              "start": 428,
                              "end": 439
                            },
                            "start": 425,
                            "end": 439
                          },
                          "start": 412,
                          "end": 439
                        },
                        "start": 410,
                        "end": 439
                      },
                      "start": 404,
                      "end": 439
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
                                  "start": 463,
                                  "end": 466
                                },
                                "start": 461,
                                "end": 466
                              },
                              "start": 453,
                              "end": 466
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 471,
                              "end": 475
                            },
                            "start": 468,
                            "end": 475
                          },
                          "start": 452,
                          "end": 475
                        },
                        "start": 450,
                        "end": 475
                      },
                      "start": 441,
                      "end": 475
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
                        "start": 478,
                        "end": 486
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
                              "start": 487,
                              "end": 488
                            },
                            "typeArguments": null,
                            "start": 487,
                            "end": 488
                          }
                        ],
                        "start": 486,
                        "end": 489
                      },
                      "start": 478,
                      "end": 489
                    },
                    "start": 476,
                    "end": 489
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 363,
                  "end": 490
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 499,
                    "end": 503
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
                          "start": 504,
                          "end": 505
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 504,
                        "end": 505
                      }
                    ],
                    "start": 503,
                    "end": 506
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
                                    "name": "TResult",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 525,
                                    "end": 532
                                  },
                                  "typeArguments": null,
                                  "start": 525,
                                  "end": 532
                                },
                                "start": 523,
                                "end": 532
                              },
                              "start": 518,
                              "end": 532
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
                                "start": 537,
                                "end": 538
                              },
                              "typeArguments": null,
                              "start": 537,
                              "end": 538
                            },
                            "start": 534,
                            "end": 538
                          },
                          "start": 517,
                          "end": 538
                        },
                        "start": 515,
                        "end": 538
                      },
                      "start": 507,
                      "end": 538
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
                                  "start": 556,
                                  "end": 559
                                },
                                "start": 554,
                                "end": 559
                              },
                              "start": 549,
                              "end": 559
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
                                "start": 564,
                                "end": 565
                              },
                              "typeArguments": null,
                              "start": 564,
                              "end": 565
                            },
                            "start": 561,
                            "end": 565
                          },
                          "start": 548,
                          "end": 565
                        },
                        "start": 546,
                        "end": 565
                      },
                      "start": 540,
                      "end": 565
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
                                  "start": 589,
                                  "end": 592
                                },
                                "start": 587,
                                "end": 592
                              },
                              "start": 579,
                              "end": 592
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 597,
                              "end": 601
                            },
                            "start": 594,
                            "end": 601
                          },
                          "start": 578,
                          "end": 601
                        },
                        "start": 576,
                        "end": 601
                      },
                      "start": 567,
                      "end": 601
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
                        "start": 604,
                        "end": 612
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
                              "start": 613,
                              "end": 614
                            },
                            "typeArguments": null,
                            "start": 613,
                            "end": 614
                          }
                        ],
                        "start": 612,
                        "end": 615
                      },
                      "start": 604,
                      "end": 615
                    },
                    "start": 602,
                    "end": 615
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 499,
                  "end": 616
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "done",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 625,
                    "end": 629
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
                          "start": 630,
                          "end": 631
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 630,
                        "end": 631
                      }
                    ],
                    "start": 629,
                    "end": 632
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
                                    "name": "TResult",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 651,
                                    "end": 658
                                  },
                                  "typeArguments": null,
                                  "start": 651,
                                  "end": 658
                                },
                                "start": 649,
                                "end": 658
                              },
                              "start": 644,
                              "end": 658
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 663,
                              "end": 666
                            },
                            "start": 660,
                            "end": 666
                          },
                          "start": 643,
                          "end": 666
                        },
                        "start": 641,
                        "end": 666
                      },
                      "start": 633,
                      "end": 666
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
                                  "start": 684,
                                  "end": 687
                                },
                                "start": 682,
                                "end": 687
                              },
                              "start": 677,
                              "end": 687
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 692,
                              "end": 695
                            },
                            "start": 689,
                            "end": 695
                          },
                          "start": 676,
                          "end": 695
                        },
                        "start": 674,
                        "end": 695
                      },
                      "start": 668,
                      "end": 695
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
                                  "start": 719,
                                  "end": 722
                                },
                                "start": 717,
                                "end": 722
                              },
                              "start": 709,
                              "end": 722
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 727,
                              "end": 731
                            },
                            "start": 724,
                            "end": 731
                          },
                          "start": 708,
                          "end": 731
                        },
                        "start": 706,
                        "end": 731
                      },
                      "start": 697,
                      "end": 731
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 734,
                      "end": 738
                    },
                    "start": 732,
                    "end": 738
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 625,
                  "end": 739
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cancel",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 749,
                    "end": 755
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 759,
                      "end": 763
                    },
                    "start": 757,
                    "end": 763
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 749,
                  "end": 764
                }
              ],
              "start": 71,
              "end": 770
            },
            "declare": false,
            "start": 43,
            "end": 770
          }
        ],
        "start": 37,
        "end": 772
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 772
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "sample",
        "optional": false,
        "typeAnnotation": null,
        "start": 789,
        "end": 795
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "promise",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Windows",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 805,
                    "end": 812
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foundation",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 813,
                    "end": 823
                  },
                  "start": 805,
                  "end": 823
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 824,
                  "end": 832
                },
                "start": 805,
                "end": 832
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 833,
                    "end": 839
                  }
                ],
                "start": 832,
                "end": 840
              },
              "start": 805,
              "end": 840
            },
            "start": 803,
            "end": 840
          },
          "start": 796,
          "end": 840
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "number",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 852,
                  "end": 858
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "promise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 867,
                    "end": 874
                  },
                  "start": 861,
                  "end": 874
                },
                "definite": false,
                "start": 852,
                "end": 874
              }
            ],
            "declare": false,
            "start": 848,
            "end": 875
          }
        ],
        "start": 842,
        "end": 877
      },
      "expression": false,
      "start": 774,
      "end": 877
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "resolve1",
        "optional": false,
        "typeAnnotation": null,
        "start": 897,
        "end": 905
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
              "start": 906,
              "end": 907
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 906,
            "end": 907
          }
        ],
        "start": 905,
        "end": 908
      },
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
                "start": 916,
                "end": 917
              },
              "typeArguments": null,
              "start": 916,
              "end": 917
            },
            "start": 914,
            "end": 917
          },
          "start": 909,
          "end": 917
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
            "start": 920,
            "end": 927
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
                  "start": 928,
                  "end": 929
                },
                "typeArguments": null,
                "start": 928,
                "end": 929
              }
            ],
            "start": 927,
            "end": 930
          },
          "start": 920,
          "end": 930
        },
        "start": 918,
        "end": 930
      },
      "body": null,
      "expression": false,
      "start": 880,
      "end": 931
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "resolve2",
        "optional": false,
        "typeAnnotation": null,
        "start": 949,
        "end": 957
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
              "start": 958,
              "end": 959
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 958,
            "end": 959
          }
        ],
        "start": 957,
        "end": 960
      },
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
                "start": 968,
                "end": 969
              },
              "typeArguments": null,
              "start": 968,
              "end": 969
            },
            "start": 966,
            "end": 969
          },
          "start": 961,
          "end": 969
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "Windows",
                "optional": false,
                "typeAnnotation": null,
                "start": 972,
                "end": 979
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foundation",
                "optional": false,
                "typeAnnotation": null,
                "start": 980,
                "end": 990
              },
              "start": 972,
              "end": 990
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "IPromise",
              "optional": false,
              "typeAnnotation": null,
              "start": 991,
              "end": 999
            },
            "start": 972,
            "end": 999
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
                  "start": 1000,
                  "end": 1001
                },
                "typeArguments": null,
                "start": 1000,
                "end": 1001
              }
            ],
            "start": 999,
            "end": 1002
          },
          "start": 972,
          "end": 1002
        },
        "start": 970,
        "end": 1002
      },
      "body": null,
      "expression": false,
      "start": 932,
      "end": 1003
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "sample2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1020,
        "end": 1027
      },
      "generator": false,
      "async": true,
      "declare": false,
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
              "type": "TSNumberKeyword",
              "start": 1032,
              "end": 1038
            },
            "start": 1030,
            "end": 1038
          },
          "start": 1028,
          "end": 1038
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1050,
                  "end": 1052
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1061,
                      "end": 1069
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1070,
                        "end": 1071
                      }
                    ],
                    "optional": false,
                    "start": 1061,
                    "end": 1072
                  },
                  "start": 1055,
                  "end": 1072
                },
                "definite": false,
                "start": 1050,
                "end": 1072
              }
            ],
            "declare": false,
            "start": 1046,
            "end": 1073
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1082,
                  "end": 1084
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1093,
                      "end": 1101
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1102,
                        "end": 1103
                      }
                    ],
                    "optional": false,
                    "start": 1093,
                    "end": 1104
                  },
                  "start": 1087,
                  "end": 1104
                },
                "definite": false,
                "start": 1082,
                "end": 1104
              }
            ],
            "declare": false,
            "start": 1078,
            "end": 1105
          }
        ],
        "start": 1040,
        "end": 1107
      },
      "expression": false,
      "start": 1005,
      "end": 1107
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1107
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 8,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "Windows",
    "start": 18,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "Foundation",
    "start": 26,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 37,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 43,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 53,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "TResult",
    "start": 62,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 81,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 89,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 100,
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
    "value": "TResult",
    "start": 107,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 116,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 119,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 132,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 141,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 148,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 153,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 156,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 169,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 181,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 191,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 196,
    "end": 198
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 199,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 206,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 227,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 235,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 246,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "TResult",
    "start": 253,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 262,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 265,
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
    "value": "U",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 278,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 287,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 294,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 299,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 305,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 313,
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
    "value": "progress",
    "start": 317,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 327,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 332,
    "end": 334
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 335,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 342,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 363,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 371,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 382,
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
    "value": "TResult",
    "start": 389,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 398,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 401,
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
    "value": "error",
    "start": 404,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 413,
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
    "value": "any",
    "start": 420,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 425,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 428,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 441,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 453,
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
    "value": "any",
    "start": 463,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 468,
    "end": 470
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 471,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 476,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 478,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 486,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 499,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 507,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 518,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 523,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "TResult",
    "start": 525,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 534,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 538,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 540,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "type": "Punctuator",
    "value": "(",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 549,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 556,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 561,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 565,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 567,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 576,
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
    "value": "progress",
    "start": 579,
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
    "value": "any",
    "start": 589,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 594,
    "end": 596
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 597,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 602,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 604,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 612,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 625,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 629,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 633,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 644,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 649,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "TResult",
    "start": 651,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 660,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 663,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 666,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 668,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "type": "Punctuator",
    "value": "(",
    "start": 676,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 677,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 684,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 689,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 692,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 695,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 697,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 708,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 709,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 717,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 719,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 724,
    "end": 726
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 727,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 732,
    "end": 733
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 734,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 738,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "cancel",
    "start": 749,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "void",
    "start": 759,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 763,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 771,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 774,
    "end": 779
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 780,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "sample",
    "start": 789,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 795,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "promise",
    "start": 796,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "Windows",
    "start": 805,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 812,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "Foundation",
    "start": 813,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 823,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 824,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 832,
    "end": 833
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 833,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 840,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 842,
    "end": 843
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 848,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 852,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 859,
    "end": 860
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 861,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "promise",
    "start": 867,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 876,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 880,
    "end": 887
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 888,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "resolve1",
    "start": 897,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 905,
    "end": 906
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 906,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 908,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 909,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 914,
    "end": 915
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 916,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 918,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 920,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 927,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 928,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 930,
    "end": 931
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 932,
    "end": 939
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 940,
    "end": 948
  },
  {
    "type": "Identifier",
    "value": "resolve2",
    "start": 949,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 957,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 958,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 960,
    "end": 961
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 961,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 966,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 968,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 970,
    "end": 971
  },
  {
    "type": "Identifier",
    "value": "Windows",
    "start": 972,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 979,
    "end": 980
  },
  {
    "type": "Identifier",
    "value": "Foundation",
    "start": 980,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 990,
    "end": 991
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 991,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1005,
    "end": 1010
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1011,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "sample2",
    "start": 1020,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1032,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1046,
    "end": 1049
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 1050,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1055,
    "end": 1060
  },
  {
    "type": "Identifier",
    "value": "resolve1",
    "start": 1061,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1078,
    "end": 1081
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 1082,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1087,
    "end": 1092
  },
  {
    "type": "Identifier",
    "value": "resolve2",
    "start": 1093,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1106,
    "end": 1107
  }
]
```
