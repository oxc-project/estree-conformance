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
        "start": 87,
        "end": 94
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
              "start": 95,
              "end": 96
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 95,
            "end": 96
          }
        ],
        "start": 94,
        "end": 97
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
              "start": 104,
              "end": 108
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
                    "start": 109,
                    "end": 110
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 109,
                  "end": 110
                }
              ],
              "start": 108,
              "end": 111
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
                              "start": 130,
                              "end": 131
                            },
                            "typeArguments": null,
                            "start": 130,
                            "end": 131
                          },
                          "start": 128,
                          "end": 131
                        },
                        "start": 123,
                        "end": 131
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
                          "start": 136,
                          "end": 137
                        },
                        "typeArguments": null,
                        "start": 136,
                        "end": 137
                      },
                      "start": 133,
                      "end": 137
                    },
                    "start": 122,
                    "end": 137
                  },
                  "start": 120,
                  "end": 137
                },
                "start": 112,
                "end": 137
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
                            "start": 155,
                            "end": 158
                          },
                          "start": 153,
                          "end": 158
                        },
                        "start": 148,
                        "end": 158
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
                          "start": 163,
                          "end": 164
                        },
                        "typeArguments": null,
                        "start": 163,
                        "end": 164
                      },
                      "start": 160,
                      "end": 164
                    },
                    "start": 147,
                    "end": 164
                  },
                  "start": 145,
                  "end": 164
                },
                "start": 139,
                "end": 164
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
                            "start": 188,
                            "end": 191
                          },
                          "start": 186,
                          "end": 191
                        },
                        "start": 178,
                        "end": 191
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 196,
                        "end": 200
                      },
                      "start": 193,
                      "end": 200
                    },
                    "start": 177,
                    "end": 200
                  },
                  "start": 175,
                  "end": 200
                },
                "start": 166,
                "end": 200
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
                  "start": 203,
                  "end": 210
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
                        "start": 211,
                        "end": 212
                      },
                      "typeArguments": null,
                      "start": 211,
                      "end": 212
                    }
                  ],
                  "start": 210,
                  "end": 213
                },
                "start": 203,
                "end": 213
              },
              "start": 201,
              "end": 213
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 104,
            "end": 214
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "done",
              "optional": false,
              "typeAnnotation": null,
              "start": 219,
              "end": 223
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
                    "start": 224,
                    "end": 225
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 224,
                  "end": 225
                }
              ],
              "start": 223,
              "end": 226
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
                              "start": 245,
                              "end": 246
                            },
                            "typeArguments": null,
                            "start": 245,
                            "end": 246
                          },
                          "start": 243,
                          "end": 246
                        },
                        "start": 238,
                        "end": 246
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 251,
                        "end": 254
                      },
                      "start": 248,
                      "end": 254
                    },
                    "start": 237,
                    "end": 254
                  },
                  "start": 235,
                  "end": 254
                },
                "start": 227,
                "end": 254
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
                            "start": 272,
                            "end": 275
                          },
                          "start": 270,
                          "end": 275
                        },
                        "start": 265,
                        "end": 275
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 280,
                        "end": 283
                      },
                      "start": 277,
                      "end": 283
                    },
                    "start": 264,
                    "end": 283
                  },
                  "start": 262,
                  "end": 283
                },
                "start": 256,
                "end": 283
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
                            "start": 307,
                            "end": 310
                          },
                          "start": 305,
                          "end": 310
                        },
                        "start": 297,
                        "end": 310
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 315,
                        "end": 319
                      },
                      "start": 312,
                      "end": 319
                    },
                    "start": 296,
                    "end": 319
                  },
                  "start": 294,
                  "end": 319
                },
                "start": 285,
                "end": 319
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 322,
                "end": 326
              },
              "start": 320,
              "end": 326
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 219,
            "end": 327
          }
        ],
        "start": 98,
        "end": 329
      },
      "declare": false,
      "start": 77,
      "end": 329
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IPromise",
        "optional": false,
        "typeAnnotation": null,
        "start": 341,
        "end": 349
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
              "start": 350,
              "end": 351
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 350,
            "end": 351
          }
        ],
        "start": 349,
        "end": 352
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
              "start": 359,
              "end": 363
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
                    "start": 364,
                    "end": 365
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 364,
                  "end": 365
                }
              ],
              "start": 363,
              "end": 366
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
                              "start": 385,
                              "end": 386
                            },
                            "typeArguments": null,
                            "start": 385,
                            "end": 386
                          },
                          "start": 383,
                          "end": 386
                        },
                        "start": 378,
                        "end": 386
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
                          "start": 391,
                          "end": 399
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
                                "start": 400,
                                "end": 401
                              },
                              "typeArguments": null,
                              "start": 400,
                              "end": 401
                            }
                          ],
                          "start": 399,
                          "end": 402
                        },
                        "start": 391,
                        "end": 402
                      },
                      "start": 388,
                      "end": 402
                    },
                    "start": 377,
                    "end": 402
                  },
                  "start": 375,
                  "end": 402
                },
                "start": 367,
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
            "start": 359,
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
              "start": 495,
              "end": 499
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
                    "start": 500,
                    "end": 501
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 500,
                  "end": 501
                }
              ],
              "start": 499,
              "end": 502
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
                              "start": 521,
                              "end": 522
                            },
                            "typeArguments": null,
                            "start": 521,
                            "end": 522
                          },
                          "start": 519,
                          "end": 522
                        },
                        "start": 514,
                        "end": 522
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
                          "start": 527,
                          "end": 535
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
                                "start": 536,
                                "end": 537
                              },
                              "typeArguments": null,
                              "start": 536,
                              "end": 537
                            }
                          ],
                          "start": 535,
                          "end": 538
                        },
                        "start": 527,
                        "end": 538
                      },
                      "start": 524,
                      "end": 538
                    },
                    "start": 513,
                    "end": 538
                  },
                  "start": 511,
                  "end": 538
                },
                "start": 503,
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
            "start": 495,
            "end": 616
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 621,
              "end": 625
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
                    "start": 626,
                    "end": 627
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 626,
                  "end": 627
                }
              ],
              "start": 625,
              "end": 628
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
                              "start": 647,
                              "end": 648
                            },
                            "typeArguments": null,
                            "start": 647,
                            "end": 648
                          },
                          "start": 645,
                          "end": 648
                        },
                        "start": 640,
                        "end": 648
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
                          "start": 653,
                          "end": 654
                        },
                        "typeArguments": null,
                        "start": 653,
                        "end": 654
                      },
                      "start": 650,
                      "end": 654
                    },
                    "start": 639,
                    "end": 654
                  },
                  "start": 637,
                  "end": 654
                },
                "start": 629,
                "end": 654
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
                            "start": 672,
                            "end": 675
                          },
                          "start": 670,
                          "end": 675
                        },
                        "start": 665,
                        "end": 675
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
                          "start": 680,
                          "end": 688
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
                                "start": 689,
                                "end": 690
                              },
                              "typeArguments": null,
                              "start": 689,
                              "end": 690
                            }
                          ],
                          "start": 688,
                          "end": 691
                        },
                        "start": 680,
                        "end": 691
                      },
                      "start": 677,
                      "end": 691
                    },
                    "start": 664,
                    "end": 691
                  },
                  "start": 662,
                  "end": 691
                },
                "start": 656,
                "end": 691
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
                            "start": 715,
                            "end": 718
                          },
                          "start": 713,
                          "end": 718
                        },
                        "start": 705,
                        "end": 718
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 723,
                        "end": 727
                      },
                      "start": 720,
                      "end": 727
                    },
                    "start": 704,
                    "end": 727
                  },
                  "start": 702,
                  "end": 727
                },
                "start": 693,
                "end": 727
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
                  "start": 730,
                  "end": 738
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
                        "start": 739,
                        "end": 740
                      },
                      "typeArguments": null,
                      "start": 739,
                      "end": 740
                    }
                  ],
                  "start": 738,
                  "end": 741
                },
                "start": 730,
                "end": 741
              },
              "start": 728,
              "end": 741
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 621,
            "end": 742
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 747,
              "end": 751
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
                    "start": 752,
                    "end": 753
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 752,
                  "end": 753
                }
              ],
              "start": 751,
              "end": 754
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
                              "start": 773,
                              "end": 774
                            },
                            "typeArguments": null,
                            "start": 773,
                            "end": 774
                          },
                          "start": 771,
                          "end": 774
                        },
                        "start": 766,
                        "end": 774
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
                          "start": 779,
                          "end": 780
                        },
                        "typeArguments": null,
                        "start": 779,
                        "end": 780
                      },
                      "start": 776,
                      "end": 780
                    },
                    "start": 765,
                    "end": 780
                  },
                  "start": 763,
                  "end": 780
                },
                "start": 755,
                "end": 780
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
                            "start": 798,
                            "end": 801
                          },
                          "start": 796,
                          "end": 801
                        },
                        "start": 791,
                        "end": 801
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
                          "start": 806,
                          "end": 807
                        },
                        "typeArguments": null,
                        "start": 806,
                        "end": 807
                      },
                      "start": 803,
                      "end": 807
                    },
                    "start": 790,
                    "end": 807
                  },
                  "start": 788,
                  "end": 807
                },
                "start": 782,
                "end": 807
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
                            "start": 831,
                            "end": 834
                          },
                          "start": 829,
                          "end": 834
                        },
                        "start": 821,
                        "end": 834
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 839,
                        "end": 843
                      },
                      "start": 836,
                      "end": 843
                    },
                    "start": 820,
                    "end": 843
                  },
                  "start": 818,
                  "end": 843
                },
                "start": 809,
                "end": 843
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
                  "start": 846,
                  "end": 854
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
                        "start": 855,
                        "end": 856
                      },
                      "typeArguments": null,
                      "start": 855,
                      "end": 856
                    }
                  ],
                  "start": 854,
                  "end": 857
                },
                "start": 846,
                "end": 857
              },
              "start": 844,
              "end": 857
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 747,
            "end": 858
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "done",
              "optional": false,
              "typeAnnotation": null,
              "start": 863,
              "end": 867
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
                    "start": 870,
                    "end": 871
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 870,
                  "end": 871
                }
              ],
              "start": 869,
              "end": 872
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
                              "start": 891,
                              "end": 892
                            },
                            "typeArguments": null,
                            "start": 891,
                            "end": 892
                          },
                          "start": 889,
                          "end": 892
                        },
                        "start": 884,
                        "end": 892
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 897,
                        "end": 900
                      },
                      "start": 894,
                      "end": 900
                    },
                    "start": 883,
                    "end": 900
                  },
                  "start": 881,
                  "end": 900
                },
                "start": 873,
                "end": 900
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
                            "start": 918,
                            "end": 921
                          },
                          "start": 916,
                          "end": 921
                        },
                        "start": 911,
                        "end": 921
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 926,
                        "end": 929
                      },
                      "start": 923,
                      "end": 929
                    },
                    "start": 910,
                    "end": 929
                  },
                  "start": 908,
                  "end": 929
                },
                "start": 902,
                "end": 929
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
                            "start": 953,
                            "end": 956
                          },
                          "start": 951,
                          "end": 956
                        },
                        "start": 943,
                        "end": 956
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 961,
                        "end": 965
                      },
                      "start": 958,
                      "end": 965
                    },
                    "start": 942,
                    "end": 965
                  },
                  "start": 940,
                  "end": 965
                },
                "start": 931,
                "end": 965
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 968,
                "end": 972
              },
              "start": 966,
              "end": 972
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 863,
            "end": 973
          }
        ],
        "start": 353,
        "end": 975
      },
      "declare": false,
      "start": 331,
      "end": 975
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 994,
        "end": 1006
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
            "start": 1010,
            "end": 1018
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1019,
                "end": 1025
              }
            ],
            "start": 1018,
            "end": 1026
          },
          "start": 1010,
          "end": 1026
        },
        "start": 1008,
        "end": 1026
      },
      "body": null,
      "expression": false,
      "start": 977,
      "end": 1027
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunctionP",
        "optional": false,
        "typeAnnotation": null,
        "start": 1045,
        "end": 1058
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
            "start": 1062,
            "end": 1069
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1070,
                "end": 1076
              }
            ],
            "start": 1069,
            "end": 1077
          },
          "start": 1062,
          "end": 1077
        },
        "start": 1060,
        "end": 1077
      },
      "body": null,
      "expression": false,
      "start": 1028,
      "end": 1078
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1096,
        "end": 1109
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
            "start": 1113,
            "end": 1121
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
                      "start": 1124,
                      "end": 1125
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1127,
                        "end": 1133
                      },
                      "start": 1125,
                      "end": 1133
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1124,
                    "end": 1133
                  }
                ],
                "start": 1122,
                "end": 1135
              }
            ],
            "start": 1121,
            "end": 1136
          },
          "start": 1113,
          "end": 1136
        },
        "start": 1111,
        "end": 1136
      },
      "body": null,
      "expression": false,
      "start": 1079,
      "end": 1137
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction2P",
        "optional": false,
        "typeAnnotation": null,
        "start": 1155,
        "end": 1169
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
            "start": 1173,
            "end": 1180
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
                      "start": 1183,
                      "end": 1184
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1186,
                        "end": 1192
                      },
                      "start": 1184,
                      "end": 1192
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1183,
                    "end": 1192
                  }
                ],
                "start": 1181,
                "end": 1194
              }
            ],
            "start": 1180,
            "end": 1195
          },
          "start": 1173,
          "end": 1195
        },
        "start": 1171,
        "end": 1195
      },
      "body": null,
      "expression": false,
      "start": 1138,
      "end": 1196
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1214,
        "end": 1227
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
              "start": 1231,
              "end": 1237
            },
            "start": 1229,
            "end": 1237
          },
          "start": 1228,
          "end": 1237
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
            "start": 1240,
            "end": 1248
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1249,
                "end": 1255
              }
            ],
            "start": 1248,
            "end": 1256
          },
          "start": 1240,
          "end": 1256
        },
        "start": 1238,
        "end": 1256
      },
      "body": null,
      "expression": false,
      "start": 1197,
      "end": 1257
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction3P",
        "optional": false,
        "typeAnnotation": null,
        "start": 1275,
        "end": 1289
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
              "start": 1293,
              "end": 1299
            },
            "start": 1291,
            "end": 1299
          },
          "start": 1290,
          "end": 1299
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
            "start": 1302,
            "end": 1309
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 1310,
                "end": 1316
              }
            ],
            "start": 1309,
            "end": 1317
          },
          "start": 1302,
          "end": 1317
        },
        "start": 1300,
        "end": 1317
      },
      "body": null,
      "expression": false,
      "start": 1258,
      "end": 1318
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1336,
        "end": 1349
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
              "start": 1353,
              "end": 1359
            },
            "start": 1351,
            "end": 1359
          },
          "start": 1350,
          "end": 1359
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
              "start": 1365,
              "end": 1371
            },
            "start": 1363,
            "end": 1371
          },
          "start": 1361,
          "end": 1371
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
            "start": 1374,
            "end": 1382
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1383,
                "end": 1389
              }
            ],
            "start": 1382,
            "end": 1390
          },
          "start": 1374,
          "end": 1390
        },
        "start": 1372,
        "end": 1390
      },
      "body": null,
      "expression": false,
      "start": 1319,
      "end": 1391
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction4P",
        "optional": false,
        "typeAnnotation": null,
        "start": 1409,
        "end": 1423
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
              "start": 1427,
              "end": 1433
            },
            "start": 1425,
            "end": 1433
          },
          "start": 1424,
          "end": 1433
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
              "start": 1439,
              "end": 1445
            },
            "start": 1437,
            "end": 1445
          },
          "start": 1435,
          "end": 1445
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
            "start": 1448,
            "end": 1455
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1456,
                "end": 1462
              }
            ],
            "start": 1455,
            "end": 1463
          },
          "start": 1448,
          "end": 1463
        },
        "start": 1446,
        "end": 1463
      },
      "body": null,
      "expression": false,
      "start": 1392,
      "end": 1464
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1482,
        "end": 1495
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
              "start": 1499,
              "end": 1505
            },
            "start": 1497,
            "end": 1505
          },
          "start": 1496,
          "end": 1505
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
                      "start": 1515,
                      "end": 1521
                    },
                    "start": 1513,
                    "end": 1521
                  },
                  "start": 1512,
                  "end": 1521
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1526,
                  "end": 1532
                },
                "start": 1523,
                "end": 1532
              },
              "start": 1511,
              "end": 1532
            },
            "start": 1509,
            "end": 1532
          },
          "start": 1507,
          "end": 1532
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
            "start": 1535,
            "end": 1543
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1544,
                "end": 1550
              }
            ],
            "start": 1543,
            "end": 1551
          },
          "start": 1535,
          "end": 1551
        },
        "start": 1533,
        "end": 1551
      },
      "body": null,
      "expression": false,
      "start": 1465,
      "end": 1552
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction5P",
        "optional": false,
        "typeAnnotation": null,
        "start": 1570,
        "end": 1584
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
              "start": 1588,
              "end": 1594
            },
            "start": 1586,
            "end": 1594
          },
          "start": 1585,
          "end": 1594
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
                      "start": 1604,
                      "end": 1610
                    },
                    "start": 1602,
                    "end": 1610
                  },
                  "start": 1601,
                  "end": 1610
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 1615,
                  "end": 1621
                },
                "start": 1612,
                "end": 1621
              },
              "start": 1600,
              "end": 1621
            },
            "start": 1598,
            "end": 1621
          },
          "start": 1596,
          "end": 1621
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
            "start": 1624,
            "end": 1631
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1632,
                "end": 1638
              }
            ],
            "start": 1631,
            "end": 1639
          },
          "start": 1624,
          "end": 1639
        },
        "start": 1622,
        "end": 1639
      },
      "body": null,
      "expression": false,
      "start": 1553,
      "end": 1640
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1658,
        "end": 1671
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
              "start": 1675,
              "end": 1681
            },
            "start": 1673,
            "end": 1681
          },
          "start": 1672,
          "end": 1681
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
                      "start": 1688,
                      "end": 1689
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1688,
                    "end": 1689
                  }
                ],
                "start": 1687,
                "end": 1690
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
                        "start": 1694,
                        "end": 1695
                      },
                      "typeArguments": null,
                      "start": 1694,
                      "end": 1695
                    },
                    "start": 1692,
                    "end": 1695
                  },
                  "start": 1691,
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1700,
                    "end": 1701
                  },
                  "typeArguments": null,
                  "start": 1700,
                  "end": 1701
                },
                "start": 1697,
                "end": 1701
              },
              "start": 1687,
              "end": 1701
            },
            "start": 1685,
            "end": 1701
          },
          "start": 1683,
          "end": 1701
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
            "start": 1704,
            "end": 1712
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1713,
                "end": 1719
              }
            ],
            "start": 1712,
            "end": 1720
          },
          "start": 1704,
          "end": 1720
        },
        "start": 1702,
        "end": 1720
      },
      "body": null,
      "expression": false,
      "start": 1641,
      "end": 1721
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction6P",
        "optional": false,
        "typeAnnotation": null,
        "start": 1739,
        "end": 1753
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
              "start": 1757,
              "end": 1763
            },
            "start": 1755,
            "end": 1763
          },
          "start": 1754,
          "end": 1763
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
                      "start": 1770,
                      "end": 1771
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1770,
                    "end": 1771
                  }
                ],
                "start": 1769,
                "end": 1772
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
                        "start": 1776,
                        "end": 1777
                      },
                      "typeArguments": null,
                      "start": 1776,
                      "end": 1777
                    },
                    "start": 1774,
                    "end": 1777
                  },
                  "start": 1773,
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1782,
                    "end": 1783
                  },
                  "typeArguments": null,
                  "start": 1782,
                  "end": 1783
                },
                "start": 1779,
                "end": 1783
              },
              "start": 1769,
              "end": 1783
            },
            "start": 1767,
            "end": 1783
          },
          "start": 1765,
          "end": 1783
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
            "start": 1786,
            "end": 1793
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1794,
                "end": 1800
              }
            ],
            "start": 1793,
            "end": 1801
          },
          "start": 1786,
          "end": 1801
        },
        "start": 1784,
        "end": 1801
      },
      "body": null,
      "expression": false,
      "start": 1722,
      "end": 1802
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1820,
        "end": 1833
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
                      "start": 1839,
                      "end": 1840
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1839,
                    "end": 1840
                  }
                ],
                "start": 1838,
                "end": 1841
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
                        "start": 1845,
                        "end": 1846
                      },
                      "typeArguments": null,
                      "start": 1845,
                      "end": 1846
                    },
                    "start": 1843,
                    "end": 1846
                  },
                  "start": 1842,
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1851,
                    "end": 1852
                  },
                  "typeArguments": null,
                  "start": 1851,
                  "end": 1852
                },
                "start": 1848,
                "end": 1852
              },
              "start": 1838,
              "end": 1852
            },
            "start": 1836,
            "end": 1852
          },
          "start": 1834,
          "end": 1852
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
            "start": 1855,
            "end": 1863
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1864,
                "end": 1870
              }
            ],
            "start": 1863,
            "end": 1871
          },
          "start": 1855,
          "end": 1871
        },
        "start": 1853,
        "end": 1871
      },
      "body": null,
      "expression": false,
      "start": 1803,
      "end": 1872
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction7P",
        "optional": false,
        "typeAnnotation": null,
        "start": 1890,
        "end": 1904
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
                      "start": 1910,
                      "end": 1911
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1910,
                    "end": 1911
                  }
                ],
                "start": 1909,
                "end": 1912
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
                        "start": 1916,
                        "end": 1917
                      },
                      "typeArguments": null,
                      "start": 1916,
                      "end": 1917
                    },
                    "start": 1914,
                    "end": 1917
                  },
                  "start": 1913,
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1922,
                    "end": 1923
                  },
                  "typeArguments": null,
                  "start": 1922,
                  "end": 1923
                },
                "start": 1919,
                "end": 1923
              },
              "start": 1909,
              "end": 1923
            },
            "start": 1907,
            "end": 1923
          },
          "start": 1905,
          "end": 1923
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
            "start": 1926,
            "end": 1933
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 1934,
                "end": 1940
              }
            ],
            "start": 1933,
            "end": 1941
          },
          "start": 1926,
          "end": 1941
        },
        "start": 1924,
        "end": 1941
      },
      "body": null,
      "expression": false,
      "start": 1873,
      "end": 1942
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1960,
        "end": 1973
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
              "start": 1974,
              "end": 1975
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1974,
            "end": 1975
          }
        ],
        "start": 1973,
        "end": 1976
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
                "start": 1980,
                "end": 1981
              },
              "typeArguments": null,
              "start": 1980,
              "end": 1981
            },
            "start": 1978,
            "end": 1981
          },
          "start": 1977,
          "end": 1981
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
                        "start": 1991,
                        "end": 1992
                      },
                      "typeArguments": null,
                      "start": 1991,
                      "end": 1992
                    },
                    "start": 1989,
                    "end": 1992
                  },
                  "start": 1988,
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1997,
                    "end": 1998
                  },
                  "typeArguments": null,
                  "start": 1997,
                  "end": 1998
                },
                "start": 1994,
                "end": 1998
              },
              "start": 1987,
              "end": 1998
            },
            "start": 1985,
            "end": 1998
          },
          "start": 1983,
          "end": 1998
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
            "start": 2001,
            "end": 2009
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
                  "start": 2010,
                  "end": 2011
                },
                "typeArguments": null,
                "start": 2010,
                "end": 2011
              }
            ],
            "start": 2009,
            "end": 2012
          },
          "start": 2001,
          "end": 2012
        },
        "start": 1999,
        "end": 2012
      },
      "body": null,
      "expression": false,
      "start": 1943,
      "end": 2013
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction8P",
        "optional": false,
        "typeAnnotation": null,
        "start": 2031,
        "end": 2045
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
              "start": 2046,
              "end": 2047
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2046,
            "end": 2047
          }
        ],
        "start": 2045,
        "end": 2048
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
                "start": 2052,
                "end": 2053
              },
              "typeArguments": null,
              "start": 2052,
              "end": 2053
            },
            "start": 2050,
            "end": 2053
          },
          "start": 2049,
          "end": 2053
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
                        "start": 2063,
                        "end": 2064
                      },
                      "typeArguments": null,
                      "start": 2063,
                      "end": 2064
                    },
                    "start": 2061,
                    "end": 2064
                  },
                  "start": 2060,
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2069,
                    "end": 2070
                  },
                  "typeArguments": null,
                  "start": 2069,
                  "end": 2070
                },
                "start": 2066,
                "end": 2070
              },
              "start": 2059,
              "end": 2070
            },
            "start": 2057,
            "end": 2070
          },
          "start": 2055,
          "end": 2070
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
            "start": 2073,
            "end": 2080
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
                  "start": 2081,
                  "end": 2082
                },
                "typeArguments": null,
                "start": 2081,
                "end": 2082
              }
            ],
            "start": 2080,
            "end": 2083
          },
          "start": 2073,
          "end": 2083
        },
        "start": 2071,
        "end": 2083
      },
      "body": null,
      "expression": false,
      "start": 2014,
      "end": 2084
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction9",
        "optional": false,
        "typeAnnotation": null,
        "start": 2102,
        "end": 2115
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
              "start": 2116,
              "end": 2117
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2116,
            "end": 2117
          }
        ],
        "start": 2115,
        "end": 2118
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
                "start": 2122,
                "end": 2123
              },
              "typeArguments": null,
              "start": 2122,
              "end": 2123
            },
            "start": 2120,
            "end": 2123
          },
          "start": 2119,
          "end": 2123
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
                      "start": 2130,
                      "end": 2131
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2130,
                    "end": 2131
                  }
                ],
                "start": 2129,
                "end": 2132
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
                        "start": 2136,
                        "end": 2137
                      },
                      "typeArguments": null,
                      "start": 2136,
                      "end": 2137
                    },
                    "start": 2134,
                    "end": 2137
                  },
                  "start": 2133,
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
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2142,
                    "end": 2143
                  },
                  "typeArguments": null,
                  "start": 2142,
                  "end": 2143
                },
                "start": 2139,
                "end": 2143
              },
              "start": 2129,
              "end": 2143
            },
            "start": 2127,
            "end": 2143
          },
          "start": 2125,
          "end": 2143
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
            "start": 2146,
            "end": 2154
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
                  "start": 2155,
                  "end": 2156
                },
                "typeArguments": null,
                "start": 2155,
                "end": 2156
              }
            ],
            "start": 2154,
            "end": 2157
          },
          "start": 2146,
          "end": 2157
        },
        "start": 2144,
        "end": 2157
      },
      "body": null,
      "expression": false,
      "start": 2085,
      "end": 2158
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction9P",
        "optional": false,
        "typeAnnotation": null,
        "start": 2176,
        "end": 2190
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
              "start": 2191,
              "end": 2192
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2191,
            "end": 2192
          }
        ],
        "start": 2190,
        "end": 2193
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
                "start": 2197,
                "end": 2198
              },
              "typeArguments": null,
              "start": 2197,
              "end": 2198
            },
            "start": 2195,
            "end": 2198
          },
          "start": 2194,
          "end": 2198
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
                      "start": 2205,
                      "end": 2206
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2205,
                    "end": 2206
                  }
                ],
                "start": 2204,
                "end": 2207
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
                        "start": 2211,
                        "end": 2212
                      },
                      "typeArguments": null,
                      "start": 2211,
                      "end": 2212
                    },
                    "start": 2209,
                    "end": 2212
                  },
                  "start": 2208,
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
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2217,
                    "end": 2218
                  },
                  "typeArguments": null,
                  "start": 2217,
                  "end": 2218
                },
                "start": 2214,
                "end": 2218
              },
              "start": 2204,
              "end": 2218
            },
            "start": 2202,
            "end": 2218
          },
          "start": 2200,
          "end": 2218
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
            "start": 2221,
            "end": 2228
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
                  "start": 2229,
                  "end": 2230
                },
                "typeArguments": null,
                "start": 2229,
                "end": 2230
              }
            ],
            "start": 2228,
            "end": 2231
          },
          "start": 2221,
          "end": 2231
        },
        "start": 2219,
        "end": 2231
      },
      "body": null,
      "expression": false,
      "start": 2159,
      "end": 2232
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction10",
        "optional": false,
        "typeAnnotation": null,
        "start": 2250,
        "end": 2264
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
              "start": 2265,
              "end": 2266
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2265,
            "end": 2266
          }
        ],
        "start": 2264,
        "end": 2267
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
                      "start": 2273,
                      "end": 2274
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2273,
                    "end": 2274
                  }
                ],
                "start": 2272,
                "end": 2275
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
                        "start": 2279,
                        "end": 2280
                      },
                      "typeArguments": null,
                      "start": 2279,
                      "end": 2280
                    },
                    "start": 2277,
                    "end": 2280
                  },
                  "start": 2276,
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
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2285,
                    "end": 2286
                  },
                  "typeArguments": null,
                  "start": 2285,
                  "end": 2286
                },
                "start": 2282,
                "end": 2286
              },
              "start": 2272,
              "end": 2286
            },
            "start": 2270,
            "end": 2286
          },
          "start": 2268,
          "end": 2286
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
            "start": 2289,
            "end": 2297
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
                  "start": 2298,
                  "end": 2299
                },
                "typeArguments": null,
                "start": 2298,
                "end": 2299
              }
            ],
            "start": 2297,
            "end": 2300
          },
          "start": 2289,
          "end": 2300
        },
        "start": 2287,
        "end": 2300
      },
      "body": null,
      "expression": false,
      "start": 2233,
      "end": 2301
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction10P",
        "optional": false,
        "typeAnnotation": null,
        "start": 2319,
        "end": 2334
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
              "start": 2335,
              "end": 2336
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2335,
            "end": 2336
          }
        ],
        "start": 2334,
        "end": 2337
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
                      "start": 2343,
                      "end": 2344
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2343,
                    "end": 2344
                  }
                ],
                "start": 2342,
                "end": 2345
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
                        "start": 2349,
                        "end": 2350
                      },
                      "typeArguments": null,
                      "start": 2349,
                      "end": 2350
                    },
                    "start": 2347,
                    "end": 2350
                  },
                  "start": 2346,
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
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2355,
                    "end": 2356
                  },
                  "typeArguments": null,
                  "start": 2355,
                  "end": 2356
                },
                "start": 2352,
                "end": 2356
              },
              "start": 2342,
              "end": 2356
            },
            "start": 2340,
            "end": 2356
          },
          "start": 2338,
          "end": 2356
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
            "start": 2359,
            "end": 2366
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
                  "start": 2367,
                  "end": 2368
                },
                "typeArguments": null,
                "start": 2367,
                "end": 2368
              }
            ],
            "start": 2366,
            "end": 2369
          },
          "start": 2359,
          "end": 2369
        },
        "start": 2357,
        "end": 2369
      },
      "body": null,
      "expression": false,
      "start": 2302,
      "end": 2370
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2389,
        "end": 2403
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
              "start": 2407,
              "end": 2413
            },
            "start": 2405,
            "end": 2413
          },
          "start": 2404,
          "end": 2413
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
            "start": 2416,
            "end": 2424
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2425,
                "end": 2431
              }
            ],
            "start": 2424,
            "end": 2432
          },
          "start": 2416,
          "end": 2432
        },
        "start": 2414,
        "end": 2432
      },
      "body": null,
      "expression": false,
      "start": 2372,
      "end": 2433
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2451,
        "end": 2465
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
              "start": 2469,
              "end": 2475
            },
            "start": 2467,
            "end": 2475
          },
          "start": 2466,
          "end": 2475
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
            "start": 2478,
            "end": 2486
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 2487,
                "end": 2493
              }
            ],
            "start": 2486,
            "end": 2494
          },
          "start": 2478,
          "end": 2494
        },
        "start": 2476,
        "end": 2494
      },
      "body": null,
      "expression": false,
      "start": 2434,
      "end": 2495
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction11P",
        "optional": false,
        "typeAnnotation": null,
        "start": 2513,
        "end": 2528
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
              "start": 2532,
              "end": 2538
            },
            "start": 2530,
            "end": 2538
          },
          "start": 2529,
          "end": 2538
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
            "start": 2541,
            "end": 2548
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 2549,
                "end": 2555
              }
            ],
            "start": 2548,
            "end": 2556
          },
          "start": 2541,
          "end": 2556
        },
        "start": 2539,
        "end": 2556
      },
      "body": null,
      "expression": false,
      "start": 2496,
      "end": 2557
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction11P",
        "optional": false,
        "typeAnnotation": null,
        "start": 2575,
        "end": 2590
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
              "start": 2594,
              "end": 2600
            },
            "start": 2592,
            "end": 2600
          },
          "start": 2591,
          "end": 2600
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
            "start": 2603,
            "end": 2610
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 2611,
                "end": 2617
              }
            ],
            "start": 2610,
            "end": 2618
          },
          "start": 2603,
          "end": 2618
        },
        "start": 2601,
        "end": 2618
      },
      "body": null,
      "expression": false,
      "start": 2558,
      "end": 2619
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2638,
        "end": 2652
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
              "start": 2653,
              "end": 2654
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2653,
            "end": 2654
          }
        ],
        "start": 2652,
        "end": 2655
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
                "start": 2659,
                "end": 2660
              },
              "typeArguments": null,
              "start": 2659,
              "end": 2660
            },
            "start": 2657,
            "end": 2660
          },
          "start": 2656,
          "end": 2660
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
            "start": 2663,
            "end": 2671
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
                  "start": 2672,
                  "end": 2673
                },
                "typeArguments": null,
                "start": 2672,
                "end": 2673
              }
            ],
            "start": 2671,
            "end": 2674
          },
          "start": 2663,
          "end": 2674
        },
        "start": 2661,
        "end": 2674
      },
      "body": null,
      "expression": false,
      "start": 2621,
      "end": 2675
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2693,
        "end": 2707
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
              "start": 2708,
              "end": 2709
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2708,
            "end": 2709
          }
        ],
        "start": 2707,
        "end": 2710
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
                "start": 2720,
                "end": 2721
              },
              "typeArguments": null,
              "start": 2720,
              "end": 2721
            },
            "start": 2718,
            "end": 2721
          },
          "start": 2717,
          "end": 2721
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
            "start": 2724,
            "end": 2732
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
                  "start": 2733,
                  "end": 2734
                },
                "typeArguments": null,
                "start": 2733,
                "end": 2734
              }
            ],
            "start": 2732,
            "end": 2735
          },
          "start": 2724,
          "end": 2735
        },
        "start": 2722,
        "end": 2735
      },
      "body": null,
      "expression": false,
      "start": 2676,
      "end": 2736
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction12P",
        "optional": false,
        "typeAnnotation": null,
        "start": 2754,
        "end": 2769
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
              "start": 2770,
              "end": 2771
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2770,
            "end": 2771
          }
        ],
        "start": 2769,
        "end": 2772
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
                "start": 2776,
                "end": 2777
              },
              "typeArguments": null,
              "start": 2776,
              "end": 2777
            },
            "start": 2774,
            "end": 2777
          },
          "start": 2773,
          "end": 2777
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
            "start": 2780,
            "end": 2788
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
                  "start": 2789,
                  "end": 2790
                },
                "typeArguments": null,
                "start": 2789,
                "end": 2790
              }
            ],
            "start": 2788,
            "end": 2791
          },
          "start": 2780,
          "end": 2791
        },
        "start": 2778,
        "end": 2791
      },
      "body": null,
      "expression": false,
      "start": 2737,
      "end": 2792
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testFunction12P",
        "optional": false,
        "typeAnnotation": null,
        "start": 2810,
        "end": 2825
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
              "start": 2826,
              "end": 2827
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2826,
            "end": 2827
          }
        ],
        "start": 2825,
        "end": 2828
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
                "start": 2838,
                "end": 2839
              },
              "typeArguments": null,
              "start": 2838,
              "end": 2839
            },
            "start": 2836,
            "end": 2839
          },
          "start": 2835,
          "end": 2839
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
            "start": 2842,
            "end": 2849
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
                  "start": 2850,
                  "end": 2851
                },
                "typeArguments": null,
                "start": 2850,
                "end": 2851
              }
            ],
            "start": 2849,
            "end": 2852
          },
          "start": 2842,
          "end": 2852
        },
        "start": 2840,
        "end": 2852
      },
      "body": null,
      "expression": false,
      "start": 2793,
      "end": 2853
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
                  "start": 2871,
                  "end": 2879
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 2880,
                      "end": 2886
                    }
                  ],
                  "start": 2879,
                  "end": 2887
                },
                "start": 2871,
                "end": 2887
              },
              "start": 2869,
              "end": 2887
            },
            "start": 2867,
            "end": 2887
          },
          "init": null,
          "definite": false,
          "start": 2867,
          "end": 2887
        }
      ],
      "declare": true,
      "start": 2855,
      "end": 2888
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
            "start": 2893,
            "end": 2896
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
                "start": 2899,
                "end": 2901
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 2902,
                "end": 2906
              },
              "optional": false,
              "computed": false,
              "start": 2899,
              "end": 2906
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 2907,
                "end": 2919
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 2921,
                "end": 2933
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 2935,
                "end": 2947
              }
            ],
            "optional": false,
            "start": 2899,
            "end": 2948
          },
          "definite": false,
          "start": 2893,
          "end": 2948
        }
      ],
      "declare": false,
      "start": 2889,
      "end": 2949
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
            "start": 2954,
            "end": 2957
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
                    "start": 2960,
                    "end": 2962
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2963,
                    "end": 2967
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2960,
                  "end": 2967
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2968,
                    "end": 2980
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2982,
                    "end": 2994
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2996,
                    "end": 3008
                  }
                ],
                "optional": false,
                "start": 2960,
                "end": 3009
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3010,
                "end": 3014
              },
              "optional": false,
              "computed": false,
              "start": 2960,
              "end": 3014
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3015,
                "end": 3027
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3029,
                "end": 3041
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3043,
                "end": 3055
              }
            ],
            "optional": false,
            "start": 2960,
            "end": 3056
          },
          "definite": false,
          "start": 2954,
          "end": 3056
        }
      ],
      "declare": false,
      "start": 2950,
      "end": 3057
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
            "start": 3062,
            "end": 3065
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
                "start": 3068,
                "end": 3070
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3071,
                "end": 3075
              },
              "optional": false,
              "computed": false,
              "start": 3068,
              "end": 3075
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null,
                "start": 3076,
                "end": 3089
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null,
                "start": 3091,
                "end": 3104
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null,
                "start": 3106,
                "end": 3119
              }
            ],
            "optional": false,
            "start": 3068,
            "end": 3120
          },
          "definite": false,
          "start": 3062,
          "end": 3120
        }
      ],
      "declare": false,
      "start": 3058,
      "end": 3121
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
                  "start": 3138,
                  "end": 3145
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 3146,
                      "end": 3152
                    }
                  ],
                  "start": 3145,
                  "end": 3153
                },
                "start": 3138,
                "end": 3153
              },
              "start": 3136,
              "end": 3153
            },
            "start": 3134,
            "end": 3153
          },
          "init": null,
          "definite": false,
          "start": 3134,
          "end": 3153
        }
      ],
      "declare": true,
      "start": 3122,
      "end": 3154
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
            "start": 3159,
            "end": 3162
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
                "start": 3165,
                "end": 3167
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3168,
                "end": 3172
              },
              "optional": false,
              "computed": false,
              "start": 3165,
              "end": 3172
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3173,
                "end": 3185
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3187,
                "end": 3199
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3201,
                "end": 3213
              }
            ],
            "optional": false,
            "start": 3165,
            "end": 3214
          },
          "definite": false,
          "start": 3159,
          "end": 3214
        }
      ],
      "declare": false,
      "start": 3155,
      "end": 3215
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
            "start": 3220,
            "end": 3223
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
                "start": 3226,
                "end": 3228
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3229,
                "end": 3233
              },
              "optional": false,
              "computed": false,
              "start": 3226,
              "end": 3233
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null,
                "start": 3234,
                "end": 3247
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null,
                "start": 3249,
                "end": 3262
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null,
                "start": 3264,
                "end": 3277
              }
            ],
            "optional": false,
            "start": 3226,
            "end": 3278
          },
          "definite": false,
          "start": 3220,
          "end": 3278
        }
      ],
      "declare": false,
      "start": 3216,
      "end": 3279
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
            "start": 3284,
            "end": 3287
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
                "start": 3290,
                "end": 3292
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3293,
                "end": 3297
              },
              "optional": false,
              "computed": false,
              "start": 3290,
              "end": 3297
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null,
                "start": 3298,
                "end": 3311
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3313,
                "end": 3325
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3327,
                "end": 3339
              }
            ],
            "optional": false,
            "start": 3290,
            "end": 3340
          },
          "definite": false,
          "start": 3284,
          "end": 3340
        }
      ],
      "declare": false,
      "start": 3280,
      "end": 3341
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
            "start": 3346,
            "end": 3349
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
                    "start": 3352,
                    "end": 3354
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3355,
                    "end": 3359
                  },
                  "optional": false,
                  "computed": false,
                  "start": 3352,
                  "end": 3359
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunctionP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3360,
                    "end": 3373
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3375,
                    "end": 3387
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3389,
                    "end": 3401
                  }
                ],
                "optional": false,
                "start": 3352,
                "end": 3402
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3403,
                "end": 3407
              },
              "optional": false,
              "computed": false,
              "start": 3352,
              "end": 3407
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3408,
                "end": 3420
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3422,
                "end": 3434
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 3436,
                "end": 3448
              }
            ],
            "optional": false,
            "start": 3352,
            "end": 3449
          },
          "definite": false,
          "start": 3346,
          "end": 3449
        }
      ],
      "declare": false,
      "start": 3342,
      "end": 3450
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
                  "start": 3468,
                  "end": 3476
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
                            "start": 3479,
                            "end": 3480
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3482,
                              "end": 3488
                            },
                            "start": 3480,
                            "end": 3488
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 3479,
                          "end": 3489
                        }
                      ],
                      "start": 3477,
                      "end": 3491
                    }
                  ],
                  "start": 3476,
                  "end": 3492
                },
                "start": 3468,
                "end": 3492
              },
              "start": 3466,
              "end": 3492
            },
            "start": 3464,
            "end": 3492
          },
          "init": null,
          "definite": false,
          "start": 3464,
          "end": 3492
        }
      ],
      "declare": true,
      "start": 3452,
      "end": 3493
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
            "start": 3498,
            "end": 3501
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
                "start": 3504,
                "end": 3506
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3507,
                "end": 3511
              },
              "optional": false,
              "computed": false,
              "start": 3504,
              "end": 3511
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3512,
                "end": 3525
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3527,
                "end": 3540
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3542,
                "end": 3555
              }
            ],
            "optional": false,
            "start": 3504,
            "end": 3556
          },
          "definite": false,
          "start": 3498,
          "end": 3556
        }
      ],
      "declare": false,
      "start": 3494,
      "end": 3557
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
            "start": 3562,
            "end": 3565
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
                    "start": 3568,
                    "end": 3570
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3571,
                    "end": 3575
                  },
                  "optional": false,
                  "computed": false,
                  "start": 3568,
                  "end": 3575
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3576,
                    "end": 3589
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3591,
                    "end": 3604
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3606,
                    "end": 3619
                  }
                ],
                "optional": false,
                "start": 3568,
                "end": 3620
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3621,
                "end": 3625
              },
              "optional": false,
              "computed": false,
              "start": 3568,
              "end": 3625
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3626,
                "end": 3639
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3641,
                "end": 3654
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3656,
                "end": 3669
              }
            ],
            "optional": false,
            "start": 3568,
            "end": 3670
          },
          "definite": false,
          "start": 3562,
          "end": 3670
        }
      ],
      "declare": false,
      "start": 3558,
      "end": 3671
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
                  "start": 3688,
                  "end": 3695
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
                            "start": 3698,
                            "end": 3699
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 3701,
                              "end": 3707
                            },
                            "start": 3699,
                            "end": 3707
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 3698,
                          "end": 3708
                        }
                      ],
                      "start": 3696,
                      "end": 3710
                    }
                  ],
                  "start": 3695,
                  "end": 3711
                },
                "start": 3688,
                "end": 3711
              },
              "start": 3686,
              "end": 3711
            },
            "start": 3684,
            "end": 3711
          },
          "init": null,
          "definite": false,
          "start": 3684,
          "end": 3711
        }
      ],
      "declare": true,
      "start": 3672,
      "end": 3712
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
            "start": 3717,
            "end": 3720
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
                "start": 3723,
                "end": 3725
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3726,
                "end": 3730
              },
              "optional": false,
              "computed": false,
              "start": 3723,
              "end": 3730
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3731,
                "end": 3744
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3746,
                "end": 3759
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3761,
                "end": 3774
              }
            ],
            "optional": false,
            "start": 3723,
            "end": 3775
          },
          "definite": false,
          "start": 3717,
          "end": 3775
        }
      ],
      "declare": false,
      "start": 3713,
      "end": 3776
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
            "start": 3781,
            "end": 3784
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
                "start": 3787,
                "end": 3789
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3790,
                "end": 3794
              },
              "optional": false,
              "computed": false,
              "start": 3787,
              "end": 3794
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2P",
                "optional": false,
                "typeAnnotation": null,
                "start": 3795,
                "end": 3809
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2P",
                "optional": false,
                "typeAnnotation": null,
                "start": 3811,
                "end": 3825
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2P",
                "optional": false,
                "typeAnnotation": null,
                "start": 3827,
                "end": 3841
              }
            ],
            "optional": false,
            "start": 3787,
            "end": 3842
          },
          "definite": false,
          "start": 3781,
          "end": 3842
        }
      ],
      "declare": false,
      "start": 3777,
      "end": 3843
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
            "start": 3848,
            "end": 3851
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
                "start": 3854,
                "end": 3856
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3857,
                "end": 3861
              },
              "optional": false,
              "computed": false,
              "start": 3854,
              "end": 3861
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2P",
                "optional": false,
                "typeAnnotation": null,
                "start": 3862,
                "end": 3876
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3878,
                "end": 3891
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3893,
                "end": 3906
              }
            ],
            "optional": false,
            "start": 3854,
            "end": 3907
          },
          "definite": false,
          "start": 3848,
          "end": 3907
        }
      ],
      "declare": false,
      "start": 3844,
      "end": 3908
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
            "start": 3913,
            "end": 3916
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
                    "start": 3919,
                    "end": 3921
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3922,
                    "end": 3926
                  },
                  "optional": false,
                  "computed": false,
                  "start": 3919,
                  "end": 3926
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction2P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3927,
                    "end": 3941
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3943,
                    "end": 3956
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3958,
                    "end": 3971
                  }
                ],
                "optional": false,
                "start": 3919,
                "end": 3972
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 3973,
                "end": 3977
              },
              "optional": false,
              "computed": false,
              "start": 3919,
              "end": 3977
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3978,
                "end": 3991
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3993,
                "end": 4006
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction2",
                "optional": false,
                "typeAnnotation": null,
                "start": 4008,
                "end": 4021
              }
            ],
            "optional": false,
            "start": 3919,
            "end": 4022
          },
          "definite": false,
          "start": 3913,
          "end": 4022
        }
      ],
      "declare": false,
      "start": 3909,
      "end": 4023
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
                  "start": 4041,
                  "end": 4049
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 4050,
                      "end": 4056
                    }
                  ],
                  "start": 4049,
                  "end": 4057
                },
                "start": 4041,
                "end": 4057
              },
              "start": 4039,
              "end": 4057
            },
            "start": 4037,
            "end": 4057
          },
          "init": null,
          "definite": false,
          "start": 4037,
          "end": 4057
        }
      ],
      "declare": true,
      "start": 4025,
      "end": 4058
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
            "start": 4063,
            "end": 4066
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
                "start": 4069,
                "end": 4071
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4072,
                "end": 4076
              },
              "optional": false,
              "computed": false,
              "start": 4069,
              "end": 4076
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4077,
                "end": 4090
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4092,
                "end": 4105
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4107,
                "end": 4120
              }
            ],
            "optional": false,
            "start": 4069,
            "end": 4121
          },
          "definite": false,
          "start": 4063,
          "end": 4121
        }
      ],
      "declare": false,
      "start": 4059,
      "end": 4122
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
            "start": 4127,
            "end": 4130
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
                    "start": 4133,
                    "end": 4135
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4136,
                    "end": 4140
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4133,
                  "end": 4140
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4141,
                    "end": 4154
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4156,
                    "end": 4169
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4171,
                    "end": 4184
                  }
                ],
                "optional": false,
                "start": 4133,
                "end": 4185
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4186,
                "end": 4190
              },
              "optional": false,
              "computed": false,
              "start": 4133,
              "end": 4190
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4191,
                "end": 4204
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4206,
                "end": 4219
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4221,
                "end": 4234
              }
            ],
            "optional": false,
            "start": 4133,
            "end": 4235
          },
          "definite": false,
          "start": 4127,
          "end": 4235
        }
      ],
      "declare": false,
      "start": 4123,
      "end": 4236
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
                  "start": 4253,
                  "end": 4260
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 4261,
                      "end": 4267
                    }
                  ],
                  "start": 4260,
                  "end": 4268
                },
                "start": 4253,
                "end": 4268
              },
              "start": 4251,
              "end": 4268
            },
            "start": 4249,
            "end": 4268
          },
          "init": null,
          "definite": false,
          "start": 4249,
          "end": 4268
        }
      ],
      "declare": true,
      "start": 4237,
      "end": 4269
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
            "start": 4274,
            "end": 4277
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
                "start": 4280,
                "end": 4282
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4283,
                "end": 4287
              },
              "optional": false,
              "computed": false,
              "start": 4280,
              "end": 4287
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4288,
                "end": 4301
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4303,
                "end": 4316
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4318,
                "end": 4331
              }
            ],
            "optional": false,
            "start": 4280,
            "end": 4332
          },
          "definite": false,
          "start": 4274,
          "end": 4332
        }
      ],
      "declare": false,
      "start": 4270,
      "end": 4333
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
            "start": 4338,
            "end": 4341
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
                "start": 4344,
                "end": 4346
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4347,
                "end": 4351
              },
              "optional": false,
              "computed": false,
              "start": 4344,
              "end": 4351
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3P",
                "optional": false,
                "typeAnnotation": null,
                "start": 4352,
                "end": 4366
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3P",
                "optional": false,
                "typeAnnotation": null,
                "start": 4368,
                "end": 4382
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3P",
                "optional": false,
                "typeAnnotation": null,
                "start": 4384,
                "end": 4398
              }
            ],
            "optional": false,
            "start": 4344,
            "end": 4399
          },
          "definite": false,
          "start": 4338,
          "end": 4399
        }
      ],
      "declare": false,
      "start": 4334,
      "end": 4400
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
            "start": 4405,
            "end": 4408
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
                "start": 4411,
                "end": 4413
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4414,
                "end": 4418
              },
              "optional": false,
              "computed": false,
              "start": 4411,
              "end": 4418
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3P",
                "optional": false,
                "typeAnnotation": null,
                "start": 4419,
                "end": 4433
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4435,
                "end": 4448
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4450,
                "end": 4463
              }
            ],
            "optional": false,
            "start": 4411,
            "end": 4464
          },
          "definite": false,
          "start": 4405,
          "end": 4464
        }
      ],
      "declare": false,
      "start": 4401,
      "end": 4465
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
            "start": 4470,
            "end": 4473
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
                    "start": 4476,
                    "end": 4478
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4479,
                    "end": 4483
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4476,
                  "end": 4483
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction3P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4484,
                    "end": 4498
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4500,
                    "end": 4513
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4515,
                    "end": 4528
                  }
                ],
                "optional": false,
                "start": 4476,
                "end": 4529
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4530,
                "end": 4534
              },
              "optional": false,
              "computed": false,
              "start": 4476,
              "end": 4534
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4535,
                "end": 4548
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4550,
                "end": 4563
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction3",
                "optional": false,
                "typeAnnotation": null,
                "start": 4565,
                "end": 4578
              }
            ],
            "optional": false,
            "start": 4476,
            "end": 4579
          },
          "definite": false,
          "start": 4470,
          "end": 4579
        }
      ],
      "declare": false,
      "start": 4466,
      "end": 4580
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
                  "start": 4614,
                  "end": 4622
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 4623,
                      "end": 4629
                    }
                  ],
                  "start": 4622,
                  "end": 4630
                },
                "start": 4614,
                "end": 4630
              },
              "start": 4612,
              "end": 4630
            },
            "start": 4610,
            "end": 4630
          },
          "init": null,
          "definite": false,
          "start": 4610,
          "end": 4630
        }
      ],
      "declare": true,
      "start": 4598,
      "end": 4631
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
                        "start": 4659,
                        "end": 4662
                      },
                      "start": 4657,
                      "end": 4662
                    },
                    "start": 4656,
                    "end": 4662
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
                      "start": 4667,
                      "end": 4675
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 4676,
                          "end": 4682
                        }
                      ],
                      "start": 4675,
                      "end": 4683
                    },
                    "start": 4667,
                    "end": 4683
                  },
                  "start": 4664,
                  "end": 4683
                },
                "start": 4655,
                "end": 4683
              },
              "start": 4653,
              "end": 4683
            },
            "start": 4644,
            "end": 4683
          },
          "init": null,
          "definite": false,
          "start": 4644,
          "end": 4683
        }
      ],
      "declare": true,
      "start": 4632,
      "end": 4684
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
                        "start": 4711,
                        "end": 4714
                      },
                      "start": 4709,
                      "end": 4714
                    },
                    "start": 4708,
                    "end": 4714
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
                      "start": 4719,
                      "end": 4726
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 4727,
                          "end": 4733
                        }
                      ],
                      "start": 4726,
                      "end": 4734
                    },
                    "start": 4719,
                    "end": 4734
                  },
                  "start": 4716,
                  "end": 4734
                },
                "start": 4707,
                "end": 4734
              },
              "start": 4705,
              "end": 4734
            },
            "start": 4697,
            "end": 4734
          },
          "init": null,
          "definite": false,
          "start": 4697,
          "end": 4734
        }
      ],
      "declare": true,
      "start": 4685,
      "end": 4735
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
            "start": 4740,
            "end": 4743
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
                "start": 4746,
                "end": 4748
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4749,
                "end": 4753
              },
              "optional": false,
              "computed": false,
              "start": 4746,
              "end": 4753
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 4754,
                "end": 4767
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 4769,
                "end": 4782
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 4784,
                "end": 4797
              }
            ],
            "optional": false,
            "start": 4746,
            "end": 4798
          },
          "definite": false,
          "start": 4740,
          "end": 4798
        }
      ],
      "declare": false,
      "start": 4736,
      "end": 4799
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
            "start": 4813,
            "end": 4816
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
                    "start": 4819,
                    "end": 4821
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4822,
                    "end": 4826
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4819,
                  "end": 4826
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4827,
                    "end": 4836
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4838,
                    "end": 4851
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4853,
                    "end": 4866
                  }
                ],
                "optional": false,
                "start": 4819,
                "end": 4867
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4868,
                "end": 4872
              },
              "optional": false,
              "computed": false,
              "start": 4819,
              "end": 4872
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 4873,
                "end": 4882
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 4884,
                "end": 4897
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 4899,
                "end": 4912
              }
            ],
            "optional": false,
            "start": 4819,
            "end": 4913
          },
          "definite": false,
          "start": 4813,
          "end": 4913
        }
      ],
      "declare": false,
      "start": 4809,
      "end": 4914
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
                  "start": 4937,
                  "end": 4944
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 4945,
                      "end": 4951
                    }
                  ],
                  "start": 4944,
                  "end": 4952
                },
                "start": 4937,
                "end": 4952
              },
              "start": 4935,
              "end": 4952
            },
            "start": 4933,
            "end": 4952
          },
          "init": null,
          "definite": false,
          "start": 4933,
          "end": 4952
        }
      ],
      "declare": true,
      "start": 4921,
      "end": 4953
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
            "start": 4958,
            "end": 4961
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
                "start": 4964,
                "end": 4966
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 4967,
                "end": 4971
              },
              "optional": false,
              "computed": false,
              "start": 4964,
              "end": 4971
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 4972,
                "end": 4985
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 4987,
                "end": 5000
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 5002,
                "end": 5015
              }
            ],
            "optional": false,
            "start": 4964,
            "end": 5016
          },
          "definite": false,
          "start": 4958,
          "end": 5016
        }
      ],
      "declare": false,
      "start": 4954,
      "end": 5017
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
            "start": 5031,
            "end": 5034
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
                "start": 5037,
                "end": 5039
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5040,
                "end": 5044
              },
              "optional": false,
              "computed": false,
              "start": 5037,
              "end": 5044
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4P",
                "optional": false,
                "typeAnnotation": null,
                "start": 5045,
                "end": 5059
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4P",
                "optional": false,
                "typeAnnotation": null,
                "start": 5061,
                "end": 5075
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4P",
                "optional": false,
                "typeAnnotation": null,
                "start": 5077,
                "end": 5091
              }
            ],
            "optional": false,
            "start": 5037,
            "end": 5092
          },
          "definite": false,
          "start": 5031,
          "end": 5092
        }
      ],
      "declare": false,
      "start": 5027,
      "end": 5093
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
            "start": 5108,
            "end": 5111
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
                "start": 5114,
                "end": 5116
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5117,
                "end": 5121
              },
              "optional": false,
              "computed": false,
              "start": 5114,
              "end": 5121
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4P",
                "optional": false,
                "typeAnnotation": null,
                "start": 5122,
                "end": 5136
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 5138,
                "end": 5151
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 5153,
                "end": 5166
              }
            ],
            "optional": false,
            "start": 5114,
            "end": 5167
          },
          "definite": false,
          "start": 5108,
          "end": 5167
        }
      ],
      "declare": false,
      "start": 5104,
      "end": 5168
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
            "start": 5182,
            "end": 5185
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
                    "start": 5188,
                    "end": 5190
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5191,
                    "end": 5195
                  },
                  "optional": false,
                  "computed": false,
                  "start": 5188,
                  "end": 5195
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5196,
                    "end": 5205
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction4P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5207,
                    "end": 5221
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5223,
                    "end": 5236
                  }
                ],
                "optional": false,
                "start": 5188,
                "end": 5237
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5238,
                "end": 5242
              },
              "optional": false,
              "computed": false,
              "start": 5188,
              "end": 5242
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 5243,
                "end": 5252
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4P",
                "optional": false,
                "typeAnnotation": null,
                "start": 5254,
                "end": 5268
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction4",
                "optional": false,
                "typeAnnotation": null,
                "start": 5270,
                "end": 5283
              }
            ],
            "optional": false,
            "start": 5188,
            "end": 5284
          },
          "definite": false,
          "start": 5182,
          "end": 5284
        }
      ],
      "declare": false,
      "start": 5178,
      "end": 5285
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
                  "start": 5303,
                  "end": 5311
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 5312,
                      "end": 5318
                    }
                  ],
                  "start": 5311,
                  "end": 5319
                },
                "start": 5303,
                "end": 5319
              },
              "start": 5301,
              "end": 5319
            },
            "start": 5299,
            "end": 5319
          },
          "init": null,
          "definite": false,
          "start": 5299,
          "end": 5319
        }
      ],
      "declare": true,
      "start": 5287,
      "end": 5320
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
            "start": 5325,
            "end": 5328
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
                "start": 5331,
                "end": 5333
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5334,
                "end": 5338
              },
              "optional": false,
              "computed": false,
              "start": 5331,
              "end": 5338
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5339,
                "end": 5352
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5354,
                "end": 5367
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5369,
                "end": 5382
              }
            ],
            "optional": false,
            "start": 5331,
            "end": 5383
          },
          "definite": false,
          "start": 5325,
          "end": 5383
        }
      ],
      "declare": false,
      "start": 5321,
      "end": 5384
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
            "start": 5398,
            "end": 5401
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
                    "start": 5404,
                    "end": 5406
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5407,
                    "end": 5411
                  },
                  "optional": false,
                  "computed": false,
                  "start": 5404,
                  "end": 5411
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5412,
                    "end": 5421
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5423,
                    "end": 5432
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5434,
                    "end": 5443
                  }
                ],
                "optional": false,
                "start": 5404,
                "end": 5444
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5445,
                "end": 5449
              },
              "optional": false,
              "computed": false,
              "start": 5404,
              "end": 5449
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 5450,
                "end": 5459
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 5461,
                "end": 5470
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 5472,
                "end": 5481
              }
            ],
            "optional": false,
            "start": 5404,
            "end": 5482
          },
          "definite": false,
          "start": 5398,
          "end": 5482
        }
      ],
      "declare": false,
      "start": 5394,
      "end": 5483
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
                  "start": 5506,
                  "end": 5513
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 5514,
                      "end": 5520
                    }
                  ],
                  "start": 5513,
                  "end": 5521
                },
                "start": 5506,
                "end": 5521
              },
              "start": 5504,
              "end": 5521
            },
            "start": 5502,
            "end": 5521
          },
          "init": null,
          "definite": false,
          "start": 5502,
          "end": 5521
        }
      ],
      "declare": true,
      "start": 5490,
      "end": 5522
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
            "start": 5527,
            "end": 5530
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
                "start": 5533,
                "end": 5535
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5536,
                "end": 5540
              },
              "optional": false,
              "computed": false,
              "start": 5533,
              "end": 5540
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5541,
                "end": 5554
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5556,
                "end": 5569
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5571,
                "end": 5584
              }
            ],
            "optional": false,
            "start": 5533,
            "end": 5585
          },
          "definite": false,
          "start": 5527,
          "end": 5585
        }
      ],
      "declare": false,
      "start": 5523,
      "end": 5586
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
            "start": 5600,
            "end": 5603
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
                "start": 5606,
                "end": 5608
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5609,
                "end": 5613
              },
              "optional": false,
              "computed": false,
              "start": 5606,
              "end": 5613
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5P",
                "optional": false,
                "typeAnnotation": null,
                "start": 5614,
                "end": 5628
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5P",
                "optional": false,
                "typeAnnotation": null,
                "start": 5630,
                "end": 5644
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5P",
                "optional": false,
                "typeAnnotation": null,
                "start": 5646,
                "end": 5660
              }
            ],
            "optional": false,
            "start": 5606,
            "end": 5661
          },
          "definite": false,
          "start": 5600,
          "end": 5661
        }
      ],
      "declare": false,
      "start": 5596,
      "end": 5662
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
            "start": 5676,
            "end": 5679
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
                "start": 5682,
                "end": 5684
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5685,
                "end": 5689
              },
              "optional": false,
              "computed": false,
              "start": 5682,
              "end": 5689
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5P",
                "optional": false,
                "typeAnnotation": null,
                "start": 5690,
                "end": 5704
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5706,
                "end": 5719
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction5",
                "optional": false,
                "typeAnnotation": null,
                "start": 5721,
                "end": 5734
              }
            ],
            "optional": false,
            "start": 5682,
            "end": 5735
          },
          "definite": false,
          "start": 5676,
          "end": 5735
        }
      ],
      "declare": false,
      "start": 5672,
      "end": 5736
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
            "start": 5750,
            "end": 5753
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
                    "start": 5756,
                    "end": 5758
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5759,
                    "end": 5763
                  },
                  "optional": false,
                  "computed": false,
                  "start": 5756,
                  "end": 5763
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5764,
                    "end": 5772
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5774,
                    "end": 5782
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5784,
                    "end": 5792
                  }
                ],
                "optional": false,
                "start": 5756,
                "end": 5793
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5794,
                "end": 5798
              },
              "optional": false,
              "computed": false,
              "start": 5756,
              "end": 5798
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 5799,
                "end": 5808
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 5810,
                "end": 5819
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 5821,
                "end": 5830
              }
            ],
            "optional": false,
            "start": 5756,
            "end": 5831
          },
          "definite": false,
          "start": 5750,
          "end": 5831
        }
      ],
      "declare": false,
      "start": 5746,
      "end": 5832
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
                  "start": 5856,
                  "end": 5864
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 5865,
                      "end": 5871
                    }
                  ],
                  "start": 5864,
                  "end": 5872
                },
                "start": 5856,
                "end": 5872
              },
              "start": 5854,
              "end": 5872
            },
            "start": 5852,
            "end": 5872
          },
          "init": null,
          "definite": false,
          "start": 5852,
          "end": 5872
        }
      ],
      "declare": true,
      "start": 5840,
      "end": 5873
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
            "start": 5878,
            "end": 5881
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
                "start": 5884,
                "end": 5886
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5887,
                "end": 5891
              },
              "optional": false,
              "computed": false,
              "start": 5884,
              "end": 5891
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6",
                "optional": false,
                "typeAnnotation": null,
                "start": 5892,
                "end": 5905
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6",
                "optional": false,
                "typeAnnotation": null,
                "start": 5907,
                "end": 5920
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6",
                "optional": false,
                "typeAnnotation": null,
                "start": 5922,
                "end": 5935
              }
            ],
            "optional": false,
            "start": 5884,
            "end": 5936
          },
          "definite": false,
          "start": 5878,
          "end": 5936
        }
      ],
      "declare": false,
      "start": 5874,
      "end": 5937
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
            "start": 5951,
            "end": 5954
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
                    "start": 5957,
                    "end": 5959
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5960,
                    "end": 5964
                  },
                  "optional": false,
                  "computed": false,
                  "start": 5957,
                  "end": 5964
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5965,
                    "end": 5974
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5976,
                    "end": 5985
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5987,
                    "end": 5996
                  }
                ],
                "optional": false,
                "start": 5957,
                "end": 5997
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 5998,
                "end": 6002
              },
              "optional": false,
              "computed": false,
              "start": 5957,
              "end": 6002
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6003,
                "end": 6012
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6014,
                "end": 6023
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6025,
                "end": 6034
              }
            ],
            "optional": false,
            "start": 5957,
            "end": 6035
          },
          "definite": false,
          "start": 5951,
          "end": 6035
        }
      ],
      "declare": false,
      "start": 5947,
      "end": 6036
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
                  "start": 6059,
                  "end": 6066
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 6067,
                      "end": 6073
                    }
                  ],
                  "start": 6066,
                  "end": 6074
                },
                "start": 6059,
                "end": 6074
              },
              "start": 6057,
              "end": 6074
            },
            "start": 6055,
            "end": 6074
          },
          "init": null,
          "definite": false,
          "start": 6055,
          "end": 6074
        }
      ],
      "declare": true,
      "start": 6043,
      "end": 6075
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
            "start": 6080,
            "end": 6083
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
                "start": 6086,
                "end": 6088
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6089,
                "end": 6093
              },
              "optional": false,
              "computed": false,
              "start": 6086,
              "end": 6093
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6",
                "optional": false,
                "typeAnnotation": null,
                "start": 6094,
                "end": 6107
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6",
                "optional": false,
                "typeAnnotation": null,
                "start": 6109,
                "end": 6122
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6",
                "optional": false,
                "typeAnnotation": null,
                "start": 6124,
                "end": 6137
              }
            ],
            "optional": false,
            "start": 6086,
            "end": 6138
          },
          "definite": false,
          "start": 6080,
          "end": 6138
        }
      ],
      "declare": false,
      "start": 6076,
      "end": 6139
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
            "start": 6153,
            "end": 6156
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
                "start": 6159,
                "end": 6161
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6162,
                "end": 6166
              },
              "optional": false,
              "computed": false,
              "start": 6159,
              "end": 6166
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6P",
                "optional": false,
                "typeAnnotation": null,
                "start": 6167,
                "end": 6181
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6P",
                "optional": false,
                "typeAnnotation": null,
                "start": 6183,
                "end": 6197
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6P",
                "optional": false,
                "typeAnnotation": null,
                "start": 6199,
                "end": 6213
              }
            ],
            "optional": false,
            "start": 6159,
            "end": 6214
          },
          "definite": false,
          "start": 6153,
          "end": 6214
        }
      ],
      "declare": false,
      "start": 6149,
      "end": 6215
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
            "start": 6229,
            "end": 6232
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
                "start": 6235,
                "end": 6237
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6238,
                "end": 6242
              },
              "optional": false,
              "computed": false,
              "start": 6235,
              "end": 6242
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6P",
                "optional": false,
                "typeAnnotation": null,
                "start": 6243,
                "end": 6257
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6",
                "optional": false,
                "typeAnnotation": null,
                "start": 6259,
                "end": 6272
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction6",
                "optional": false,
                "typeAnnotation": null,
                "start": 6274,
                "end": 6287
              }
            ],
            "optional": false,
            "start": 6235,
            "end": 6288
          },
          "definite": false,
          "start": 6229,
          "end": 6288
        }
      ],
      "declare": false,
      "start": 6225,
      "end": 6289
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
            "start": 6303,
            "end": 6306
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
                    "start": 6309,
                    "end": 6311
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6312,
                    "end": 6316
                  },
                  "optional": false,
                  "computed": false,
                  "start": 6309,
                  "end": 6316
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6317,
                    "end": 6325
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6327,
                    "end": 6335
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6337,
                    "end": 6345
                  }
                ],
                "optional": false,
                "start": 6309,
                "end": 6346
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6347,
                "end": 6351
              },
              "optional": false,
              "computed": false,
              "start": 6309,
              "end": 6351
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6352,
                "end": 6361
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6363,
                "end": 6372
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6374,
                "end": 6383
              }
            ],
            "optional": false,
            "start": 6309,
            "end": 6384
          },
          "definite": false,
          "start": 6303,
          "end": 6384
        }
      ],
      "declare": false,
      "start": 6299,
      "end": 6385
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
                  "start": 6409,
                  "end": 6417
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 6418,
                      "end": 6424
                    }
                  ],
                  "start": 6417,
                  "end": 6425
                },
                "start": 6409,
                "end": 6425
              },
              "start": 6407,
              "end": 6425
            },
            "start": 6405,
            "end": 6425
          },
          "init": null,
          "definite": false,
          "start": 6405,
          "end": 6425
        }
      ],
      "declare": true,
      "start": 6393,
      "end": 6426
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
            "start": 6431,
            "end": 6434
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
                "start": 6437,
                "end": 6439
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6440,
                "end": 6444
              },
              "optional": false,
              "computed": false,
              "start": 6437,
              "end": 6444
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6445,
                "end": 6458
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6460,
                "end": 6473
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6475,
                "end": 6488
              }
            ],
            "optional": false,
            "start": 6437,
            "end": 6489
          },
          "definite": false,
          "start": 6431,
          "end": 6489
        }
      ],
      "declare": false,
      "start": 6427,
      "end": 6490
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
            "start": 6504,
            "end": 6507
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
                    "start": 6510,
                    "end": 6512
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6513,
                    "end": 6517
                  },
                  "optional": false,
                  "computed": false,
                  "start": 6510,
                  "end": 6517
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6518,
                    "end": 6527
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6529,
                    "end": 6538
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6540,
                    "end": 6549
                  }
                ],
                "optional": false,
                "start": 6510,
                "end": 6550
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6551,
                "end": 6555
              },
              "optional": false,
              "computed": false,
              "start": 6510,
              "end": 6555
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6556,
                "end": 6565
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6567,
                "end": 6576
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6578,
                "end": 6587
              }
            ],
            "optional": false,
            "start": 6510,
            "end": 6588
          },
          "definite": false,
          "start": 6504,
          "end": 6588
        }
      ],
      "declare": false,
      "start": 6500,
      "end": 6589
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
                  "start": 6612,
                  "end": 6619
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 6620,
                      "end": 6626
                    }
                  ],
                  "start": 6619,
                  "end": 6627
                },
                "start": 6612,
                "end": 6627
              },
              "start": 6610,
              "end": 6627
            },
            "start": 6608,
            "end": 6627
          },
          "init": null,
          "definite": false,
          "start": 6608,
          "end": 6627
        }
      ],
      "declare": true,
      "start": 6596,
      "end": 6628
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
            "start": 6633,
            "end": 6636
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
                "start": 6639,
                "end": 6641
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6642,
                "end": 6646
              },
              "optional": false,
              "computed": false,
              "start": 6639,
              "end": 6646
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6647,
                "end": 6660
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6662,
                "end": 6675
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6677,
                "end": 6690
              }
            ],
            "optional": false,
            "start": 6639,
            "end": 6691
          },
          "definite": false,
          "start": 6633,
          "end": 6691
        }
      ],
      "declare": false,
      "start": 6629,
      "end": 6692
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
            "start": 6706,
            "end": 6709
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
                "start": 6712,
                "end": 6714
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6715,
                "end": 6719
              },
              "optional": false,
              "computed": false,
              "start": 6712,
              "end": 6719
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7P",
                "optional": false,
                "typeAnnotation": null,
                "start": 6720,
                "end": 6734
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7P",
                "optional": false,
                "typeAnnotation": null,
                "start": 6736,
                "end": 6750
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7P",
                "optional": false,
                "typeAnnotation": null,
                "start": 6752,
                "end": 6766
              }
            ],
            "optional": false,
            "start": 6712,
            "end": 6767
          },
          "definite": false,
          "start": 6706,
          "end": 6767
        }
      ],
      "declare": false,
      "start": 6702,
      "end": 6768
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
            "start": 6782,
            "end": 6785
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
                "start": 6788,
                "end": 6790
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6791,
                "end": 6795
              },
              "optional": false,
              "computed": false,
              "start": 6788,
              "end": 6795
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7P",
                "optional": false,
                "typeAnnotation": null,
                "start": 6796,
                "end": 6810
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6812,
                "end": 6825
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6827,
                "end": 6840
              }
            ],
            "optional": false,
            "start": 6788,
            "end": 6841
          },
          "definite": false,
          "start": 6782,
          "end": 6841
        }
      ],
      "declare": false,
      "start": 6778,
      "end": 6842
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
            "start": 6856,
            "end": 6859
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
                    "start": 6862,
                    "end": 6864
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6865,
                    "end": 6869
                  },
                  "optional": false,
                  "computed": false,
                  "start": 6862,
                  "end": 6869
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6870,
                    "end": 6878
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6880,
                    "end": 6888
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6890,
                    "end": 6898
                  }
                ],
                "optional": false,
                "start": 6862,
                "end": 6899
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 6900,
                "end": 6904
              },
              "optional": false,
              "computed": false,
              "start": 6862,
              "end": 6904
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6905,
                "end": 6913
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6915,
                "end": 6923
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 6925,
                "end": 6933
              }
            ],
            "optional": false,
            "start": 6862,
            "end": 6934
          },
          "definite": false,
          "start": 6856,
          "end": 6934
        }
      ],
      "declare": false,
      "start": 6852,
      "end": 6935
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
                  "start": 6960,
                  "end": 6968
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 6969,
                      "end": 6975
                    }
                  ],
                  "start": 6968,
                  "end": 6976
                },
                "start": 6960,
                "end": 6976
              },
              "start": 6958,
              "end": 6976
            },
            "start": 6956,
            "end": 6976
          },
          "init": null,
          "definite": false,
          "start": 6956,
          "end": 6976
        }
      ],
      "declare": true,
      "start": 6944,
      "end": 6977
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
                        "start": 7005,
                        "end": 7008
                      },
                      "start": 7003,
                      "end": 7008
                    },
                    "start": 7002,
                    "end": 7008
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
                      "start": 7013,
                      "end": 7021
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 7022,
                          "end": 7028
                        }
                      ],
                      "start": 7021,
                      "end": 7029
                    },
                    "start": 7013,
                    "end": 7029
                  },
                  "start": 7010,
                  "end": 7029
                },
                "start": 7001,
                "end": 7029
              },
              "start": 6999,
              "end": 7029
            },
            "start": 6990,
            "end": 7029
          },
          "init": null,
          "definite": false,
          "start": 6990,
          "end": 7029
        }
      ],
      "declare": true,
      "start": 6978,
      "end": 7030
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
                        "start": 7057,
                        "end": 7060
                      },
                      "start": 7055,
                      "end": 7060
                    },
                    "start": 7054,
                    "end": 7060
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
                      "start": 7065,
                      "end": 7072
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 7073,
                          "end": 7079
                        }
                      ],
                      "start": 7072,
                      "end": 7080
                    },
                    "start": 7065,
                    "end": 7080
                  },
                  "start": 7062,
                  "end": 7080
                },
                "start": 7053,
                "end": 7080
              },
              "start": 7051,
              "end": 7080
            },
            "start": 7043,
            "end": 7080
          },
          "init": null,
          "definite": false,
          "start": 7043,
          "end": 7080
        }
      ],
      "declare": true,
      "start": 7031,
      "end": 7081
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
            "start": 7086,
            "end": 7089
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
                "start": 7092,
                "end": 7094
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7095,
                "end": 7099
              },
              "optional": false,
              "computed": false,
              "start": 7092,
              "end": 7099
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7100,
                "end": 7113
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7115,
                "end": 7128
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7130,
                "end": 7143
              }
            ],
            "optional": false,
            "start": 7092,
            "end": 7144
          },
          "definite": false,
          "start": 7086,
          "end": 7144
        }
      ],
      "declare": false,
      "start": 7082,
      "end": 7145
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
            "start": 7159,
            "end": 7162
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
                    "start": 7165,
                    "end": 7167
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7168,
                    "end": 7172
                  },
                  "optional": false,
                  "computed": false,
                  "start": 7165,
                  "end": 7172
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7173,
                    "end": 7182
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7184,
                    "end": 7193
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7195,
                    "end": 7204
                  }
                ],
                "optional": false,
                "start": 7165,
                "end": 7205
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7206,
                "end": 7210
              },
              "optional": false,
              "computed": false,
              "start": 7165,
              "end": 7210
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7211,
                "end": 7220
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7222,
                "end": 7231
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7233,
                "end": 7242
              }
            ],
            "optional": false,
            "start": 7165,
            "end": 7243
          },
          "definite": false,
          "start": 7159,
          "end": 7243
        }
      ],
      "declare": false,
      "start": 7155,
      "end": 7244
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
                  "start": 7259,
                  "end": 7266
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 7267,
                      "end": 7273
                    }
                  ],
                  "start": 7266,
                  "end": 7274
                },
                "start": 7259,
                "end": 7274
              },
              "start": 7257,
              "end": 7274
            },
            "start": 7255,
            "end": 7274
          },
          "init": null,
          "definite": false,
          "start": 7255,
          "end": 7274
        }
      ],
      "declare": false,
      "start": 7251,
      "end": 7275
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
            "start": 7280,
            "end": 7283
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
                "start": 7286,
                "end": 7288
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7289,
                "end": 7293
              },
              "optional": false,
              "computed": false,
              "start": 7286,
              "end": 7293
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7294,
                "end": 7307
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7309,
                "end": 7322
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7324,
                "end": 7337
              }
            ],
            "optional": false,
            "start": 7286,
            "end": 7338
          },
          "definite": false,
          "start": 7280,
          "end": 7338
        }
      ],
      "declare": false,
      "start": 7276,
      "end": 7339
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
            "start": 7353,
            "end": 7356
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
                "start": 7359,
                "end": 7361
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7362,
                "end": 7366
              },
              "optional": false,
              "computed": false,
              "start": 7359,
              "end": 7366
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8P",
                "optional": false,
                "typeAnnotation": null,
                "start": 7367,
                "end": 7381
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8P",
                "optional": false,
                "typeAnnotation": null,
                "start": 7383,
                "end": 7397
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8P",
                "optional": false,
                "typeAnnotation": null,
                "start": 7399,
                "end": 7413
              }
            ],
            "optional": false,
            "start": 7359,
            "end": 7414
          },
          "definite": false,
          "start": 7353,
          "end": 7414
        }
      ],
      "declare": false,
      "start": 7349,
      "end": 7415
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
            "start": 7429,
            "end": 7432
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
                "start": 7435,
                "end": 7437
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7438,
                "end": 7442
              },
              "optional": false,
              "computed": false,
              "start": 7435,
              "end": 7442
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8P",
                "optional": false,
                "typeAnnotation": null,
                "start": 7443,
                "end": 7457
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7459,
                "end": 7472
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction8",
                "optional": false,
                "typeAnnotation": null,
                "start": 7474,
                "end": 7487
              }
            ],
            "optional": false,
            "start": 7435,
            "end": 7488
          },
          "definite": false,
          "start": 7429,
          "end": 7488
        }
      ],
      "declare": false,
      "start": 7425,
      "end": 7489
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
            "start": 7503,
            "end": 7506
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
                    "start": 7509,
                    "end": 7511
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7512,
                    "end": 7516
                  },
                  "optional": false,
                  "computed": false,
                  "start": 7509,
                  "end": 7516
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7517,
                    "end": 7526
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7528,
                    "end": 7537
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7539,
                    "end": 7548
                  }
                ],
                "optional": false,
                "start": 7509,
                "end": 7549
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7550,
                "end": 7554
              },
              "optional": false,
              "computed": false,
              "start": 7509,
              "end": 7554
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7555,
                "end": 7564
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7566,
                "end": 7575
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7577,
                "end": 7586
              }
            ],
            "optional": false,
            "start": 7509,
            "end": 7587
          },
          "definite": false,
          "start": 7503,
          "end": 7587
        }
      ],
      "declare": false,
      "start": 7499,
      "end": 7588
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
                  "start": 7612,
                  "end": 7620
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 7621,
                      "end": 7627
                    }
                  ],
                  "start": 7620,
                  "end": 7628
                },
                "start": 7612,
                "end": 7628
              },
              "start": 7610,
              "end": 7628
            },
            "start": 7608,
            "end": 7628
          },
          "init": null,
          "definite": false,
          "start": 7608,
          "end": 7628
        }
      ],
      "declare": true,
      "start": 7596,
      "end": 7629
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
            "start": 7634,
            "end": 7637
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
                "start": 7640,
                "end": 7642
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7643,
                "end": 7647
              },
              "optional": false,
              "computed": false,
              "start": 7640,
              "end": 7647
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9",
                "optional": false,
                "typeAnnotation": null,
                "start": 7648,
                "end": 7661
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9",
                "optional": false,
                "typeAnnotation": null,
                "start": 7663,
                "end": 7676
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9",
                "optional": false,
                "typeAnnotation": null,
                "start": 7678,
                "end": 7691
              }
            ],
            "optional": false,
            "start": 7640,
            "end": 7692
          },
          "definite": false,
          "start": 7634,
          "end": 7692
        }
      ],
      "declare": false,
      "start": 7630,
      "end": 7693
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
            "start": 7707,
            "end": 7710
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
                "start": 7713,
                "end": 7715
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7716,
                "end": 7720
              },
              "optional": false,
              "computed": false,
              "start": 7713,
              "end": 7720
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7721,
                "end": 7730
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7732,
                "end": 7741
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7743,
                "end": 7752
              }
            ],
            "optional": false,
            "start": 7713,
            "end": 7753
          },
          "definite": false,
          "start": 7707,
          "end": 7753
        }
      ],
      "declare": false,
      "start": 7703,
      "end": 7754
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
            "start": 7765,
            "end": 7768
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
                "start": 7771,
                "end": 7773
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7774,
                "end": 7778
              },
              "optional": false,
              "computed": false,
              "start": 7771,
              "end": 7778
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7779,
                "end": 7788
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7790,
                "end": 7799
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7801,
                "end": 7810
              }
            ],
            "optional": false,
            "start": 7771,
            "end": 7811
          },
          "definite": false,
          "start": 7765,
          "end": 7811
        }
      ],
      "declare": false,
      "start": 7761,
      "end": 7812
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
            "start": 7823,
            "end": 7826
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
                "start": 7829,
                "end": 7831
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7832,
                "end": 7836
              },
              "optional": false,
              "computed": false,
              "start": 7829,
              "end": 7836
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 7837,
                "end": 7849
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7851,
                "end": 7860
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7862,
                "end": 7871
              }
            ],
            "optional": false,
            "start": 7829,
            "end": 7872
          },
          "definite": false,
          "start": 7823,
          "end": 7872
        }
      ],
      "declare": false,
      "start": 7819,
      "end": 7873
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
            "start": 7887,
            "end": 7890
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
                    "start": 7893,
                    "end": 7895
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7896,
                    "end": 7900
                  },
                  "optional": false,
                  "computed": false,
                  "start": 7893,
                  "end": 7900
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7901,
                    "end": 7913
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7915,
                    "end": 7924
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7926,
                    "end": 7935
                  }
                ],
                "optional": false,
                "start": 7893,
                "end": 7936
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 7937,
                "end": 7941
              },
              "optional": false,
              "computed": false,
              "start": 7893,
              "end": 7941
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7942,
                "end": 7951
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7953,
                "end": 7962
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 7964,
                "end": 7973
              }
            ],
            "optional": false,
            "start": 7893,
            "end": 7974
          },
          "definite": false,
          "start": 7887,
          "end": 7974
        }
      ],
      "declare": false,
      "start": 7883,
      "end": 7975
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
                  "start": 7998,
                  "end": 8005
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 8006,
                      "end": 8012
                    }
                  ],
                  "start": 8005,
                  "end": 8013
                },
                "start": 7998,
                "end": 8013
              },
              "start": 7996,
              "end": 8013
            },
            "start": 7994,
            "end": 8013
          },
          "init": null,
          "definite": false,
          "start": 7994,
          "end": 8013
        }
      ],
      "declare": true,
      "start": 7982,
      "end": 8014
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
            "start": 8019,
            "end": 8022
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
                "start": 8025,
                "end": 8027
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8028,
                "end": 8032
              },
              "optional": false,
              "computed": false,
              "start": 8025,
              "end": 8032
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9",
                "optional": false,
                "typeAnnotation": null,
                "start": 8033,
                "end": 8046
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9",
                "optional": false,
                "typeAnnotation": null,
                "start": 8048,
                "end": 8061
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9",
                "optional": false,
                "typeAnnotation": null,
                "start": 8063,
                "end": 8076
              }
            ],
            "optional": false,
            "start": 8025,
            "end": 8077
          },
          "definite": false,
          "start": 8019,
          "end": 8077
        }
      ],
      "declare": false,
      "start": 8015,
      "end": 8078
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
            "start": 8092,
            "end": 8095
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
                "start": 8098,
                "end": 8100
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8101,
                "end": 8105
              },
              "optional": false,
              "computed": false,
              "start": 8098,
              "end": 8105
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9P",
                "optional": false,
                "typeAnnotation": null,
                "start": 8106,
                "end": 8120
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9P",
                "optional": false,
                "typeAnnotation": null,
                "start": 8122,
                "end": 8136
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9P",
                "optional": false,
                "typeAnnotation": null,
                "start": 8138,
                "end": 8152
              }
            ],
            "optional": false,
            "start": 8098,
            "end": 8153
          },
          "definite": false,
          "start": 8092,
          "end": 8153
        }
      ],
      "declare": false,
      "start": 8088,
      "end": 8154
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
            "start": 8168,
            "end": 8171
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
                "start": 8174,
                "end": 8176
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8177,
                "end": 8181
              },
              "optional": false,
              "computed": false,
              "start": 8174,
              "end": 8181
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9P",
                "optional": false,
                "typeAnnotation": null,
                "start": 8182,
                "end": 8196
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9",
                "optional": false,
                "typeAnnotation": null,
                "start": 8198,
                "end": 8211
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction9",
                "optional": false,
                "typeAnnotation": null,
                "start": 8213,
                "end": 8226
              }
            ],
            "optional": false,
            "start": 8174,
            "end": 8227
          },
          "definite": false,
          "start": 8168,
          "end": 8227
        }
      ],
      "declare": false,
      "start": 8164,
      "end": 8228
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
            "start": 8242,
            "end": 8245
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
                "start": 8248,
                "end": 8250
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8251,
                "end": 8255
              },
              "optional": false,
              "computed": false,
              "start": 8248,
              "end": 8255
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8256,
                "end": 8264
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8266,
                "end": 8274
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8276,
                "end": 8284
              }
            ],
            "optional": false,
            "start": 8248,
            "end": 8285
          },
          "definite": false,
          "start": 8242,
          "end": 8285
        }
      ],
      "declare": false,
      "start": 8238,
      "end": 8286
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
            "start": 8297,
            "end": 8300
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
                "start": 8303,
                "end": 8305
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8306,
                "end": 8310
              },
              "optional": false,
              "computed": false,
              "start": 8303,
              "end": 8310
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8311,
                "end": 8319
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8321,
                "end": 8329
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8331,
                "end": 8339
              }
            ],
            "optional": false,
            "start": 8303,
            "end": 8340
          },
          "definite": false,
          "start": 8297,
          "end": 8340
        }
      ],
      "declare": false,
      "start": 8293,
      "end": 8341
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
            "start": 8352,
            "end": 8355
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
                "start": 8358,
                "end": 8360
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8361,
                "end": 8365
              },
              "optional": false,
              "computed": false,
              "start": 8358,
              "end": 8365
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 8366,
                "end": 8378
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8380,
                "end": 8389
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8391,
                "end": 8400
              }
            ],
            "optional": false,
            "start": 8358,
            "end": 8401
          },
          "definite": false,
          "start": 8352,
          "end": 8401
        }
      ],
      "declare": false,
      "start": 8348,
      "end": 8402
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
            "start": 8416,
            "end": 8419
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
                    "start": 8422,
                    "end": 8424
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8425,
                    "end": 8429
                  },
                  "optional": false,
                  "computed": false,
                  "start": 8422,
                  "end": 8429
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8430,
                    "end": 8442
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8444,
                    "end": 8453
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8455,
                    "end": 8464
                  }
                ],
                "optional": false,
                "start": 8422,
                "end": 8465
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8466,
                "end": 8470
              },
              "optional": false,
              "computed": false,
              "start": 8422,
              "end": 8470
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8471,
                "end": 8480
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8482,
                "end": 8491
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8493,
                "end": 8502
              }
            ],
            "optional": false,
            "start": 8422,
            "end": 8503
          },
          "definite": false,
          "start": 8416,
          "end": 8503
        }
      ],
      "declare": false,
      "start": 8412,
      "end": 8504
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
            "start": 8516,
            "end": 8519
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction10",
              "optional": false,
              "typeAnnotation": null,
              "start": 8522,
              "end": 8536
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
                    "start": 8537,
                    "end": 8538
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8542,
                  "end": 8543
                },
                "id": null,
                "generator": false,
                "start": 8537,
                "end": 8543
              }
            ],
            "optional": false,
            "start": 8522,
            "end": 8544
          },
          "definite": false,
          "start": 8516,
          "end": 8544
        }
      ],
      "declare": false,
      "start": 8512,
      "end": 8545
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
            "start": 8550,
            "end": 8554
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
                "start": 8557,
                "end": 8560
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8561,
                "end": 8565
              },
              "optional": false,
              "computed": false,
              "start": 8557,
              "end": 8565
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10",
                "optional": false,
                "typeAnnotation": null,
                "start": 8566,
                "end": 8580
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10",
                "optional": false,
                "typeAnnotation": null,
                "start": 8582,
                "end": 8596
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10",
                "optional": false,
                "typeAnnotation": null,
                "start": 8598,
                "end": 8612
              }
            ],
            "optional": false,
            "start": 8557,
            "end": 8613
          },
          "definite": false,
          "start": 8550,
          "end": 8613
        }
      ],
      "declare": false,
      "start": 8546,
      "end": 8614
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
            "start": 8625,
            "end": 8629
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
                "start": 8632,
                "end": 8635
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8636,
                "end": 8640
              },
              "optional": false,
              "computed": false,
              "start": 8632,
              "end": 8640
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8641,
                "end": 8650
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8652,
                "end": 8661
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8663,
                "end": 8672
              }
            ],
            "optional": false,
            "start": 8632,
            "end": 8673
          },
          "definite": false,
          "start": 8625,
          "end": 8673
        }
      ],
      "declare": false,
      "start": 8621,
      "end": 8674
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
            "start": 8685,
            "end": 8689
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
                "start": 8692,
                "end": 8695
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8696,
                "end": 8700
              },
              "optional": false,
              "computed": false,
              "start": 8692,
              "end": 8700
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8701,
                "end": 8710
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8712,
                "end": 8721
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8723,
                "end": 8732
              }
            ],
            "optional": false,
            "start": 8692,
            "end": 8733
          },
          "definite": false,
          "start": 8685,
          "end": 8733
        }
      ],
      "declare": false,
      "start": 8681,
      "end": 8734
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
            "start": 8745,
            "end": 8749
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
                "start": 8752,
                "end": 8755
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8756,
                "end": 8760
              },
              "optional": false,
              "computed": false,
              "start": 8752,
              "end": 8760
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction",
                "optional": false,
                "typeAnnotation": null,
                "start": 8761,
                "end": 8773
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8775,
                "end": 8784
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8786,
                "end": 8795
              }
            ],
            "optional": false,
            "start": 8752,
            "end": 8796
          },
          "definite": false,
          "start": 8745,
          "end": 8796
        }
      ],
      "declare": false,
      "start": 8741,
      "end": 8797
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
            "start": 8811,
            "end": 8815
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
                    "start": 8818,
                    "end": 8821
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8822,
                    "end": 8826
                  },
                  "optional": false,
                  "computed": false,
                  "start": 8818,
                  "end": 8826
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunction",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8827,
                    "end": 8839
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8841,
                    "end": 8850
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8852,
                    "end": 8861
                  }
                ],
                "optional": false,
                "start": 8818,
                "end": 8862
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8863,
                "end": 8867
              },
              "optional": false,
              "computed": false,
              "start": 8818,
              "end": 8867
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8868,
                "end": 8877
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8879,
                "end": 8888
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 8890,
                "end": 8899
              }
            ],
            "optional": false,
            "start": 8818,
            "end": 8900
          },
          "definite": false,
          "start": 8811,
          "end": 8900
        }
      ],
      "declare": false,
      "start": 8807,
      "end": 8901
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
            "start": 8912,
            "end": 8915
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction10P",
              "optional": false,
              "typeAnnotation": null,
              "start": 8918,
              "end": 8933
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
                    "start": 8934,
                    "end": 8935
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8939,
                  "end": 8940
                },
                "id": null,
                "generator": false,
                "start": 8934,
                "end": 8940
              }
            ],
            "optional": false,
            "start": 8918,
            "end": 8941
          },
          "definite": false,
          "start": 8912,
          "end": 8941
        }
      ],
      "declare": false,
      "start": 8908,
      "end": 8942
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
            "start": 8947,
            "end": 8951
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
                "start": 8954,
                "end": 8957
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 8958,
                "end": 8962
              },
              "optional": false,
              "computed": false,
              "start": 8954,
              "end": 8962
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10",
                "optional": false,
                "typeAnnotation": null,
                "start": 8963,
                "end": 8977
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10",
                "optional": false,
                "typeAnnotation": null,
                "start": 8979,
                "end": 8993
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10",
                "optional": false,
                "typeAnnotation": null,
                "start": 8995,
                "end": 9009
              }
            ],
            "optional": false,
            "start": 8954,
            "end": 9010
          },
          "definite": false,
          "start": 8947,
          "end": 9010
        }
      ],
      "declare": false,
      "start": 8943,
      "end": 9011
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
            "start": 9022,
            "end": 9026
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
                "start": 9029,
                "end": 9032
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9033,
                "end": 9037
              },
              "optional": false,
              "computed": false,
              "start": 9029,
              "end": 9037
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10P",
                "optional": false,
                "typeAnnotation": null,
                "start": 9038,
                "end": 9053
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10P",
                "optional": false,
                "typeAnnotation": null,
                "start": 9055,
                "end": 9070
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10P",
                "optional": false,
                "typeAnnotation": null,
                "start": 9072,
                "end": 9087
              }
            ],
            "optional": false,
            "start": 9029,
            "end": 9088
          },
          "definite": false,
          "start": 9022,
          "end": 9088
        }
      ],
      "declare": false,
      "start": 9018,
      "end": 9089
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
            "start": 9100,
            "end": 9104
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
                "start": 9107,
                "end": 9110
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9111,
                "end": 9115
              },
              "optional": false,
              "computed": false,
              "start": 9107,
              "end": 9115
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10P",
                "optional": false,
                "typeAnnotation": null,
                "start": 9116,
                "end": 9131
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10",
                "optional": false,
                "typeAnnotation": null,
                "start": 9133,
                "end": 9147
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction10",
                "optional": false,
                "typeAnnotation": null,
                "start": 9149,
                "end": 9163
              }
            ],
            "optional": false,
            "start": 9107,
            "end": 9164
          },
          "definite": false,
          "start": 9100,
          "end": 9164
        }
      ],
      "declare": false,
      "start": 9096,
      "end": 9165
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
            "start": 9176,
            "end": 9180
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
                "start": 9183,
                "end": 9186
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9187,
                "end": 9191
              },
              "optional": false,
              "computed": false,
              "start": 9183,
              "end": 9191
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9192,
                "end": 9200
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9202,
                "end": 9210
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9212,
                "end": 9220
              }
            ],
            "optional": false,
            "start": 9183,
            "end": 9221
          },
          "definite": false,
          "start": 9176,
          "end": 9221
        }
      ],
      "declare": false,
      "start": 9172,
      "end": 9222
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
            "start": 9233,
            "end": 9237
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
                "start": 9240,
                "end": 9243
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9244,
                "end": 9248
              },
              "optional": false,
              "computed": false,
              "start": 9240,
              "end": 9248
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9249,
                "end": 9258
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9260,
                "end": 9268
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9270,
                "end": 9279
              }
            ],
            "optional": false,
            "start": 9240,
            "end": 9280
          },
          "definite": false,
          "start": 9233,
          "end": 9280
        }
      ],
      "declare": false,
      "start": 9229,
      "end": 9281
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
            "start": 9292,
            "end": 9296
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
                "start": 9299,
                "end": 9302
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9303,
                "end": 9307
              },
              "optional": false,
              "computed": false,
              "start": 9299,
              "end": 9307
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunctionP",
                "optional": false,
                "typeAnnotation": null,
                "start": 9308,
                "end": 9321
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9323,
                "end": 9332
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9334,
                "end": 9343
              }
            ],
            "optional": false,
            "start": 9299,
            "end": 9344
          },
          "definite": false,
          "start": 9292,
          "end": 9344
        }
      ],
      "declare": false,
      "start": 9288,
      "end": 9345
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
            "start": 9359,
            "end": 9363
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
                    "start": 9366,
                    "end": 9369
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9370,
                    "end": 9374
                  },
                  "optional": false,
                  "computed": false,
                  "start": 9366,
                  "end": 9374
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "testFunctionP",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9375,
                    "end": 9388
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9390,
                    "end": 9399
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "sIPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9401,
                    "end": 9410
                  }
                ],
                "optional": false,
                "start": 9366,
                "end": 9411
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9412,
                "end": 9416
              },
              "optional": false,
              "computed": false,
              "start": 9366,
              "end": 9416
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9417,
                "end": 9425
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9427,
                "end": 9436
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sIPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 9438,
                "end": 9447
              }
            ],
            "optional": false,
            "start": 9366,
            "end": 9448
          },
          "definite": false,
          "start": 9359,
          "end": 9448
        }
      ],
      "declare": false,
      "start": 9355,
      "end": 9449
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
                  "start": 9474,
                  "end": 9482
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 9483,
                      "end": 9489
                    }
                  ],
                  "start": 9482,
                  "end": 9490
                },
                "start": 9474,
                "end": 9490
              },
              "start": 9472,
              "end": 9490
            },
            "start": 9469,
            "end": 9490
          },
          "init": null,
          "definite": false,
          "start": 9469,
          "end": 9490
        }
      ],
      "declare": true,
      "start": 9457,
      "end": 9491
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
            "start": 9496,
            "end": 9500
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
                "start": 9503,
                "end": 9506
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9507,
                "end": 9511
              },
              "optional": false,
              "computed": false,
              "start": 9503,
              "end": 9511
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9512,
                "end": 9526
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9528,
                "end": 9542
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9544,
                "end": 9558
              }
            ],
            "optional": false,
            "start": 9503,
            "end": 9559
          },
          "definite": false,
          "start": 9496,
          "end": 9559
        }
      ],
      "declare": false,
      "start": 9492,
      "end": 9560
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
                  "start": 9587,
                  "end": 9594
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 9595,
                      "end": 9601
                    }
                  ],
                  "start": 9594,
                  "end": 9602
                },
                "start": 9587,
                "end": 9602
              },
              "start": 9585,
              "end": 9602
            },
            "start": 9582,
            "end": 9602
          },
          "init": null,
          "definite": false,
          "start": 9582,
          "end": 9602
        }
      ],
      "declare": true,
      "start": 9570,
      "end": 9603
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
            "start": 9608,
            "end": 9612
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
                "start": 9615,
                "end": 9618
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9619,
                "end": 9623
              },
              "optional": false,
              "computed": false,
              "start": 9615,
              "end": 9623
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9624,
                "end": 9638
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9640,
                "end": 9654
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9656,
                "end": 9670
              }
            ],
            "optional": false,
            "start": 9615,
            "end": 9671
          },
          "definite": false,
          "start": 9608,
          "end": 9671
        }
      ],
      "declare": false,
      "start": 9604,
      "end": 9672
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
            "start": 9683,
            "end": 9687
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
                "start": 9690,
                "end": 9693
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9694,
                "end": 9698
              },
              "optional": false,
              "computed": false,
              "start": 9690,
              "end": 9698
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11P",
                "optional": false,
                "typeAnnotation": null,
                "start": 9699,
                "end": 9714
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11P",
                "optional": false,
                "typeAnnotation": null,
                "start": 9716,
                "end": 9731
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11P",
                "optional": false,
                "typeAnnotation": null,
                "start": 9733,
                "end": 9748
              }
            ],
            "optional": false,
            "start": 9690,
            "end": 9749
          },
          "definite": false,
          "start": 9683,
          "end": 9749
        }
      ],
      "declare": false,
      "start": 9679,
      "end": 9750
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
            "start": 9761,
            "end": 9765
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
                "start": 9768,
                "end": 9771
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9772,
                "end": 9776
              },
              "optional": false,
              "computed": false,
              "start": 9768,
              "end": 9776
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11P",
                "optional": false,
                "typeAnnotation": null,
                "start": 9777,
                "end": 9792
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9794,
                "end": 9808
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction11",
                "optional": false,
                "typeAnnotation": null,
                "start": 9810,
                "end": 9824
              }
            ],
            "optional": false,
            "start": 9768,
            "end": 9825
          },
          "definite": false,
          "start": 9761,
          "end": 9825
        }
      ],
      "declare": false,
      "start": 9757,
      "end": 9826
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
            "start": 9838,
            "end": 9841
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction12",
              "optional": false,
              "typeAnnotation": null,
              "start": 9844,
              "end": 9858
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
                    "start": 9859,
                    "end": 9860
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9864,
                  "end": 9865
                },
                "id": null,
                "generator": false,
                "start": 9859,
                "end": 9865
              }
            ],
            "optional": false,
            "start": 9844,
            "end": 9866
          },
          "definite": false,
          "start": 9838,
          "end": 9866
        }
      ],
      "declare": false,
      "start": 9834,
      "end": 9867
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
            "start": 9872,
            "end": 9876
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
                "start": 9879,
                "end": 9882
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9883,
                "end": 9887
              },
              "optional": false,
              "computed": false,
              "start": 9879,
              "end": 9887
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12",
                "optional": false,
                "typeAnnotation": null,
                "start": 9888,
                "end": 9902
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12",
                "optional": false,
                "typeAnnotation": null,
                "start": 9904,
                "end": 9918
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12",
                "optional": false,
                "typeAnnotation": null,
                "start": 9920,
                "end": 9934
              }
            ],
            "optional": false,
            "start": 9879,
            "end": 9935
          },
          "definite": false,
          "start": 9872,
          "end": 9935
        }
      ],
      "declare": false,
      "start": 9868,
      "end": 9936
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
            "start": 9947,
            "end": 9950
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "testFunction12",
              "optional": false,
              "typeAnnotation": null,
              "start": 9953,
              "end": 9967
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
                    "start": 9968,
                    "end": 9969
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9973,
                  "end": 9974
                },
                "id": null,
                "generator": false,
                "start": 9968,
                "end": 9974
              }
            ],
            "optional": false,
            "start": 9953,
            "end": 9975
          },
          "definite": false,
          "start": 9947,
          "end": 9975
        }
      ],
      "declare": false,
      "start": 9943,
      "end": 9976
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
            "start": 9981,
            "end": 9985
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
                "start": 9988,
                "end": 9991
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 9992,
                "end": 9996
              },
              "optional": false,
              "computed": false,
              "start": 9988,
              "end": 9996
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12",
                "optional": false,
                "typeAnnotation": null,
                "start": 9997,
                "end": 10011
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12",
                "optional": false,
                "typeAnnotation": null,
                "start": 10013,
                "end": 10027
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12",
                "optional": false,
                "typeAnnotation": null,
                "start": 10029,
                "end": 10043
              }
            ],
            "optional": false,
            "start": 9988,
            "end": 10044
          },
          "definite": false,
          "start": 9981,
          "end": 10044
        }
      ],
      "declare": false,
      "start": 9977,
      "end": 10045
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
            "start": 10056,
            "end": 10060
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
                "start": 10063,
                "end": 10066
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 10067,
                "end": 10071
              },
              "optional": false,
              "computed": false,
              "start": 10063,
              "end": 10071
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12P",
                "optional": false,
                "typeAnnotation": null,
                "start": 10072,
                "end": 10087
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12P",
                "optional": false,
                "typeAnnotation": null,
                "start": 10089,
                "end": 10104
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12P",
                "optional": false,
                "typeAnnotation": null,
                "start": 10106,
                "end": 10121
              }
            ],
            "optional": false,
            "start": 10063,
            "end": 10122
          },
          "definite": false,
          "start": 10056,
          "end": 10122
        }
      ],
      "declare": false,
      "start": 10052,
      "end": 10123
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
            "start": 10134,
            "end": 10138
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
                "start": 10141,
                "end": 10144
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 10145,
                "end": 10149
              },
              "optional": false,
              "computed": false,
              "start": 10141,
              "end": 10149
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12P",
                "optional": false,
                "typeAnnotation": null,
                "start": 10150,
                "end": 10165
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12",
                "optional": false,
                "typeAnnotation": null,
                "start": 10167,
                "end": 10181
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "testFunction12",
                "optional": false,
                "typeAnnotation": null,
                "start": 10183,
                "end": 10197
              }
            ],
            "optional": false,
            "start": 10141,
            "end": 10198
          },
          "definite": false,
          "start": 10134,
          "end": 10198
        }
      ],
      "declare": false,
      "start": 10130,
      "end": 10199
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 77,
  "end": 10205
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
    "value": "Promise",
    "start": 87,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 104,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 112,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 123,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 133,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 139,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 148,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 155,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 160,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 166,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 178,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 188,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 193,
    "end": 195
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 196,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 203,
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
    "value": "U",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 219,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 227,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 238,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 248,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 251,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 256,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 265,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 272,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 277,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 280,
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
    "value": "progress",
    "start": 285,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "type": "Punctuator",
    "value": "(",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 297,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 307,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 312,
    "end": 314
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 315,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 320,
    "end": 321
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 322,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 328,
    "end": 329
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 331,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 341,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 359,
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
    "value": "U",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 367,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 378,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 388,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 391,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "start": 495,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 503,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 514,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 524,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 527,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "then",
    "start": 621,
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
    "value": "U",
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
    "value": "(",
    "start": 628,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 629,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 639,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 640,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 645,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 650,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 656,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 665,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 672,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 677,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 680,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 688,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "progress",
    "start": 693,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "type": "Punctuator",
    "value": "(",
    "start": 704,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 705,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 713,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 715,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 720,
    "end": 722
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 723,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 730,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 738,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 739,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 741,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 747,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 751,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 754,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 755,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 763,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 765,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 766,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 771,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 776,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 779,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 780,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 782,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 790,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 791,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 798,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 803,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 807,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 809,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 820,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 821,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 829,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 831,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 836,
    "end": 838
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 839,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 844,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 846,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 854,
    "end": 855
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 857,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 863,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 869,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 871,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 872,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 873,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 883,
    "end": 884
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 884,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 889,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 891,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 894,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 897,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 900,
    "end": 901
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 902,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 908,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 910,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 911,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 916,
    "end": 917
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 918,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 921,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 923,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 926,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 929,
    "end": 930
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 931,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 942,
    "end": 943
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 943,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 951,
    "end": 952
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 953,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 956,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 958,
    "end": 960
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 961,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 965,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 966,
    "end": 967
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 968,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 972,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 974,
    "end": 975
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 977,
    "end": 984
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 985,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 994,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 1010,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1019,
    "end": 1025
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
    "start": 1028,
    "end": 1035
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1036,
    "end": 1044
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 1045,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1062,
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
    "value": "number",
    "start": 1070,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1079,
    "end": 1086
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1087,
    "end": 1095
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 1096,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 1113,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1127,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1138,
    "end": 1145
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1146,
    "end": 1154
  },
  {
    "type": "Identifier",
    "value": "testFunction2P",
    "start": 1155,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1173,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1186,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1197,
    "end": 1204
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1205,
    "end": 1213
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 1214,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1231,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 1240,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1249,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1258,
    "end": 1265
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1266,
    "end": 1274
  },
  {
    "type": "Identifier",
    "value": "testFunction3P",
    "start": 1275,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1293,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1302,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1310,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1319,
    "end": 1326
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1327,
    "end": 1335
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 1336,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1353,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1365,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 1374,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1383,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1392,
    "end": 1399
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1400,
    "end": 1408
  },
  {
    "type": "Identifier",
    "value": "testFunction4P",
    "start": 1409,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1427,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1439,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1448,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1456,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "declare",
    "start": 1465,
    "end": 1472
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1473,
    "end": 1481
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 1482,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1496,
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
    "value": "number",
    "start": 1499,
    "end": 1505
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1507,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1512,
    "end": 1513
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1515,
    "end": 1521
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1523,
    "end": 1525
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1526,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 1535,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1544,
    "end": 1550
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "declare",
    "start": 1553,
    "end": 1560
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1561,
    "end": 1569
  },
  {
    "type": "Identifier",
    "value": "testFunction5P",
    "start": 1570,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1586,
    "end": 1587
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1588,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1596,
    "end": 1598
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1598,
    "end": 1599
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1604,
    "end": 1610
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1612,
    "end": 1614
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1615,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1624,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1632,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1641,
    "end": 1648
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1649,
    "end": 1657
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 1658,
    "end": 1671
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1671,
    "end": 1672
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1675,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1683,
    "end": 1685
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1685,
    "end": 1686
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1687,
    "end": 1688
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1690,
    "end": 1691
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1692,
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
    "value": "=>",
    "start": 1697,
    "end": 1699
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1701,
    "end": 1702
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 1704,
    "end": 1712
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1712,
    "end": 1713
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1713,
    "end": 1719
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1722,
    "end": 1729
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1730,
    "end": 1738
  },
  {
    "type": "Identifier",
    "value": "testFunction6P",
    "start": 1739,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1757,
    "end": 1763
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1763,
    "end": 1764
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1765,
    "end": 1767
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1767,
    "end": 1768
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1769,
    "end": 1770
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1773,
    "end": 1774
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1774,
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
    "value": "=>",
    "start": 1779,
    "end": 1781
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1783,
    "end": 1784
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1784,
    "end": 1785
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1786,
    "end": 1793
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1793,
    "end": 1794
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1794,
    "end": 1800
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1803,
    "end": 1810
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1811,
    "end": 1819
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 1820,
    "end": 1833
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1834,
    "end": 1836
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1838,
    "end": 1839
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1839,
    "end": 1840
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1840,
    "end": 1841
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1843,
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
    "value": "=>",
    "start": 1848,
    "end": 1850
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1852,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1853,
    "end": 1854
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 1855,
    "end": 1863
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1863,
    "end": 1864
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1864,
    "end": 1870
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "declare",
    "start": 1873,
    "end": 1880
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1881,
    "end": 1889
  },
  {
    "type": "Identifier",
    "value": "testFunction7P",
    "start": 1890,
    "end": 1904
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1905,
    "end": 1907
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1909,
    "end": 1910
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1910,
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
    "value": "(",
    "start": 1912,
    "end": 1913
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1913,
    "end": 1914
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1914,
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
    "value": "=>",
    "start": 1919,
    "end": 1921
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1922,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1923,
    "end": 1924
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1924,
    "end": 1925
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1926,
    "end": 1933
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1934,
    "end": 1940
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1940,
    "end": 1941
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1941,
    "end": 1942
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1943,
    "end": 1950
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1951,
    "end": 1959
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 1960,
    "end": 1973
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1973,
    "end": 1974
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1974,
    "end": 1975
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1975,
    "end": 1976
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1976,
    "end": 1977
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1977,
    "end": 1978
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1978,
    "end": 1979
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1980,
    "end": 1981
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1981,
    "end": 1982
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1983,
    "end": 1985
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1985,
    "end": 1986
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1987,
    "end": 1988
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1988,
    "end": 1989
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1989,
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
    "value": "=>",
    "start": 1994,
    "end": 1996
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1997,
    "end": 1998
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1999,
    "end": 2000
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2001,
    "end": 2009
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2009,
    "end": 2010
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2010,
    "end": 2011
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2011,
    "end": 2012
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2012,
    "end": 2013
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2014,
    "end": 2021
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2022,
    "end": 2030
  },
  {
    "type": "Identifier",
    "value": "testFunction8P",
    "start": 2031,
    "end": 2045
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2045,
    "end": 2046
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2046,
    "end": 2047
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2047,
    "end": 2048
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2048,
    "end": 2049
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2049,
    "end": 2050
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2050,
    "end": 2051
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2052,
    "end": 2053
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2053,
    "end": 2054
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2055,
    "end": 2057
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2057,
    "end": 2058
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2059,
    "end": 2060
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2060,
    "end": 2061
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2061,
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
    "value": "=>",
    "start": 2066,
    "end": 2068
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2069,
    "end": 2070
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2070,
    "end": 2071
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2071,
    "end": 2072
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2073,
    "end": 2080
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2080,
    "end": 2081
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2081,
    "end": 2082
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2082,
    "end": 2083
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2083,
    "end": 2084
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2085,
    "end": 2092
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2093,
    "end": 2101
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 2102,
    "end": 2115
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2115,
    "end": 2116
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2116,
    "end": 2117
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2117,
    "end": 2118
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2118,
    "end": 2119
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2119,
    "end": 2120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2120,
    "end": 2121
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2122,
    "end": 2123
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2123,
    "end": 2124
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2125,
    "end": 2127
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2127,
    "end": 2128
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2129,
    "end": 2130
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2130,
    "end": 2131
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2131,
    "end": 2132
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2132,
    "end": 2133
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2133,
    "end": 2134
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2134,
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
    "value": "=>",
    "start": 2139,
    "end": 2141
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2142,
    "end": 2143
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2143,
    "end": 2144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2144,
    "end": 2145
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2146,
    "end": 2154
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2154,
    "end": 2155
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2155,
    "end": 2156
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2156,
    "end": 2157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2157,
    "end": 2158
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2159,
    "end": 2166
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2167,
    "end": 2175
  },
  {
    "type": "Identifier",
    "value": "testFunction9P",
    "start": 2176,
    "end": 2190
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2190,
    "end": 2191
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2191,
    "end": 2192
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2192,
    "end": 2193
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2193,
    "end": 2194
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2194,
    "end": 2195
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2195,
    "end": 2196
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2197,
    "end": 2198
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2198,
    "end": 2199
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2200,
    "end": 2202
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2202,
    "end": 2203
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2204,
    "end": 2205
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2205,
    "end": 2206
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2206,
    "end": 2207
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2207,
    "end": 2208
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2208,
    "end": 2209
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2209,
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
    "value": "=>",
    "start": 2214,
    "end": 2216
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2217,
    "end": 2218
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2218,
    "end": 2219
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2219,
    "end": 2220
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2221,
    "end": 2228
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2228,
    "end": 2229
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2229,
    "end": 2230
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2230,
    "end": 2231
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2231,
    "end": 2232
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2233,
    "end": 2240
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2241,
    "end": 2249
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 2250,
    "end": 2264
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2264,
    "end": 2265
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2265,
    "end": 2266
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2266,
    "end": 2267
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2267,
    "end": 2268
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2268,
    "end": 2270
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2270,
    "end": 2271
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2272,
    "end": 2273
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2273,
    "end": 2274
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2274,
    "end": 2275
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2275,
    "end": 2276
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2276,
    "end": 2277
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2277,
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
    "value": "=>",
    "start": 2282,
    "end": 2284
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2285,
    "end": 2286
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2286,
    "end": 2287
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2287,
    "end": 2288
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2289,
    "end": 2297
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2297,
    "end": 2298
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2298,
    "end": 2299
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2299,
    "end": 2300
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2300,
    "end": 2301
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2302,
    "end": 2309
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2310,
    "end": 2318
  },
  {
    "type": "Identifier",
    "value": "testFunction10P",
    "start": 2319,
    "end": 2334
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2334,
    "end": 2335
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2335,
    "end": 2336
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2336,
    "end": 2337
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2337,
    "end": 2338
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 2338,
    "end": 2340
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2340,
    "end": 2341
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2342,
    "end": 2343
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2343,
    "end": 2344
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2344,
    "end": 2345
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2345,
    "end": 2346
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2346,
    "end": 2347
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2347,
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
    "value": "=>",
    "start": 2352,
    "end": 2354
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2355,
    "end": 2356
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2356,
    "end": 2357
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2357,
    "end": 2358
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2359,
    "end": 2366
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2366,
    "end": 2367
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2367,
    "end": 2368
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2368,
    "end": 2369
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2369,
    "end": 2370
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2372,
    "end": 2379
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2380,
    "end": 2388
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 2389,
    "end": 2403
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2403,
    "end": 2404
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2404,
    "end": 2405
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2405,
    "end": 2406
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2407,
    "end": 2413
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2413,
    "end": 2414
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2414,
    "end": 2415
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2416,
    "end": 2424
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2424,
    "end": 2425
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2425,
    "end": 2431
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2431,
    "end": 2432
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2432,
    "end": 2433
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2434,
    "end": 2441
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2442,
    "end": 2450
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 2451,
    "end": 2465
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2465,
    "end": 2466
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2466,
    "end": 2467
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2467,
    "end": 2468
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2469,
    "end": 2475
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2475,
    "end": 2476
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2476,
    "end": 2477
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2478,
    "end": 2486
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2486,
    "end": 2487
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2487,
    "end": 2493
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2493,
    "end": 2494
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2494,
    "end": 2495
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2496,
    "end": 2503
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2504,
    "end": 2512
  },
  {
    "type": "Identifier",
    "value": "testFunction11P",
    "start": 2513,
    "end": 2528
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2528,
    "end": 2529
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2529,
    "end": 2530
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2530,
    "end": 2531
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2532,
    "end": 2538
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2538,
    "end": 2539
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2539,
    "end": 2540
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2541,
    "end": 2548
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2548,
    "end": 2549
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2549,
    "end": 2555
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2555,
    "end": 2556
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2556,
    "end": 2557
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2558,
    "end": 2565
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2566,
    "end": 2574
  },
  {
    "type": "Identifier",
    "value": "testFunction11P",
    "start": 2575,
    "end": 2590
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2590,
    "end": 2591
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2591,
    "end": 2592
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2592,
    "end": 2593
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2594,
    "end": 2600
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2600,
    "end": 2601
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2601,
    "end": 2602
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2603,
    "end": 2610
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2610,
    "end": 2611
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2611,
    "end": 2617
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2617,
    "end": 2618
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2618,
    "end": 2619
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2621,
    "end": 2628
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2629,
    "end": 2637
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 2638,
    "end": 2652
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2652,
    "end": 2653
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2653,
    "end": 2654
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2654,
    "end": 2655
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2655,
    "end": 2656
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2656,
    "end": 2657
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2657,
    "end": 2658
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2659,
    "end": 2660
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2660,
    "end": 2661
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2661,
    "end": 2662
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2663,
    "end": 2671
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2671,
    "end": 2672
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2672,
    "end": 2673
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2673,
    "end": 2674
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2674,
    "end": 2675
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2676,
    "end": 2683
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2684,
    "end": 2692
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 2693,
    "end": 2707
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2707,
    "end": 2708
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2708,
    "end": 2709
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2709,
    "end": 2710
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2710,
    "end": 2711
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": ",",
    "start": 2715,
    "end": 2716
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2717,
    "end": 2718
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2718,
    "end": 2719
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2720,
    "end": 2721
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2721,
    "end": 2722
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2722,
    "end": 2723
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2724,
    "end": 2732
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2732,
    "end": 2733
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2733,
    "end": 2734
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2734,
    "end": 2735
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2735,
    "end": 2736
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2737,
    "end": 2744
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2745,
    "end": 2753
  },
  {
    "type": "Identifier",
    "value": "testFunction12P",
    "start": 2754,
    "end": 2769
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2769,
    "end": 2770
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2770,
    "end": 2771
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2771,
    "end": 2772
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2772,
    "end": 2773
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2773,
    "end": 2774
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2774,
    "end": 2775
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2776,
    "end": 2777
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2777,
    "end": 2778
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2778,
    "end": 2779
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2780,
    "end": 2788
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2788,
    "end": 2789
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2789,
    "end": 2790
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2790,
    "end": 2791
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2791,
    "end": 2792
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2793,
    "end": 2800
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2801,
    "end": 2809
  },
  {
    "type": "Identifier",
    "value": "testFunction12P",
    "start": 2810,
    "end": 2825
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2825,
    "end": 2826
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2826,
    "end": 2827
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2827,
    "end": 2828
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2828,
    "end": 2829
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": ",",
    "start": 2833,
    "end": 2834
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2835,
    "end": 2836
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2836,
    "end": 2837
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2838,
    "end": 2839
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2839,
    "end": 2840
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2840,
    "end": 2841
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2842,
    "end": 2849
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2849,
    "end": 2850
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2850,
    "end": 2851
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2851,
    "end": 2852
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2852,
    "end": 2853
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2855,
    "end": 2862
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2863,
    "end": 2866
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 2867,
    "end": 2869
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2869,
    "end": 2870
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 2871,
    "end": 2879
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2879,
    "end": 2880
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2880,
    "end": 2886
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2886,
    "end": 2887
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2887,
    "end": 2888
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2889,
    "end": 2892
  },
  {
    "type": "Identifier",
    "value": "r1a",
    "start": 2893,
    "end": 2896
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2897,
    "end": 2898
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 2899,
    "end": 2901
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2901,
    "end": 2902
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 2902,
    "end": 2906
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2906,
    "end": 2907
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 2907,
    "end": 2919
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2919,
    "end": 2920
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 2921,
    "end": 2933
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2933,
    "end": 2934
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 2935,
    "end": 2947
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2947,
    "end": 2948
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2948,
    "end": 2949
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2950,
    "end": 2953
  },
  {
    "type": "Identifier",
    "value": "r1b",
    "start": 2954,
    "end": 2957
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2958,
    "end": 2959
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 2960,
    "end": 2962
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2962,
    "end": 2963
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 2963,
    "end": 2967
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2967,
    "end": 2968
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 2968,
    "end": 2980
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2980,
    "end": 2981
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 2982,
    "end": 2994
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2994,
    "end": 2995
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 2996,
    "end": 3008
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3008,
    "end": 3009
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3009,
    "end": 3010
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3010,
    "end": 3014
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3014,
    "end": 3015
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3015,
    "end": 3027
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3027,
    "end": 3028
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3029,
    "end": 3041
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3041,
    "end": 3042
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3043,
    "end": 3055
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3055,
    "end": 3056
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3056,
    "end": 3057
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3058,
    "end": 3061
  },
  {
    "type": "Identifier",
    "value": "r1c",
    "start": 3062,
    "end": 3065
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3066,
    "end": 3067
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 3068,
    "end": 3070
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3070,
    "end": 3071
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3071,
    "end": 3075
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3075,
    "end": 3076
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3076,
    "end": 3089
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3089,
    "end": 3090
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3091,
    "end": 3104
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3104,
    "end": 3105
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3106,
    "end": 3119
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3119,
    "end": 3120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3120,
    "end": 3121
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3122,
    "end": 3129
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3130,
    "end": 3133
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 3134,
    "end": 3136
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3136,
    "end": 3137
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3138,
    "end": 3145
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3145,
    "end": 3146
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3146,
    "end": 3152
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3152,
    "end": 3153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3153,
    "end": 3154
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3155,
    "end": 3158
  },
  {
    "type": "Identifier",
    "value": "s1a",
    "start": 3159,
    "end": 3162
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3163,
    "end": 3164
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 3165,
    "end": 3167
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3167,
    "end": 3168
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3168,
    "end": 3172
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3172,
    "end": 3173
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3173,
    "end": 3185
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3185,
    "end": 3186
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3187,
    "end": 3199
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3199,
    "end": 3200
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3201,
    "end": 3213
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3213,
    "end": 3214
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3214,
    "end": 3215
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3216,
    "end": 3219
  },
  {
    "type": "Identifier",
    "value": "s1b",
    "start": 3220,
    "end": 3223
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3224,
    "end": 3225
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 3226,
    "end": 3228
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3228,
    "end": 3229
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3229,
    "end": 3233
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3233,
    "end": 3234
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3234,
    "end": 3247
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3247,
    "end": 3248
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3249,
    "end": 3262
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3262,
    "end": 3263
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3264,
    "end": 3277
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3277,
    "end": 3278
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3278,
    "end": 3279
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3280,
    "end": 3283
  },
  {
    "type": "Identifier",
    "value": "s1c",
    "start": 3284,
    "end": 3287
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3288,
    "end": 3289
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 3290,
    "end": 3292
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3292,
    "end": 3293
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3293,
    "end": 3297
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3297,
    "end": 3298
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3298,
    "end": 3311
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3311,
    "end": 3312
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3313,
    "end": 3325
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3325,
    "end": 3326
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3327,
    "end": 3339
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3339,
    "end": 3340
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3340,
    "end": 3341
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3342,
    "end": 3345
  },
  {
    "type": "Identifier",
    "value": "s1d",
    "start": 3346,
    "end": 3349
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3350,
    "end": 3351
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 3352,
    "end": 3354
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3354,
    "end": 3355
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3355,
    "end": 3359
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3359,
    "end": 3360
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 3360,
    "end": 3373
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3373,
    "end": 3374
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3375,
    "end": 3387
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3387,
    "end": 3388
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3389,
    "end": 3401
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3401,
    "end": 3402
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3402,
    "end": 3403
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3403,
    "end": 3407
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3407,
    "end": 3408
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3408,
    "end": 3420
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3420,
    "end": 3421
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3422,
    "end": 3434
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3434,
    "end": 3435
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 3436,
    "end": 3448
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3448,
    "end": 3449
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3449,
    "end": 3450
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3452,
    "end": 3459
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3460,
    "end": 3463
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 3464,
    "end": 3466
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3466,
    "end": 3467
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 3468,
    "end": 3476
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3476,
    "end": 3477
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3477,
    "end": 3478
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3479,
    "end": 3480
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3480,
    "end": 3481
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3482,
    "end": 3488
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3488,
    "end": 3489
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3490,
    "end": 3491
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3491,
    "end": 3492
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3492,
    "end": 3493
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3494,
    "end": 3497
  },
  {
    "type": "Identifier",
    "value": "r2a",
    "start": 3498,
    "end": 3501
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3502,
    "end": 3503
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 3504,
    "end": 3506
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3506,
    "end": 3507
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3507,
    "end": 3511
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3511,
    "end": 3512
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3512,
    "end": 3525
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3525,
    "end": 3526
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3527,
    "end": 3540
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3540,
    "end": 3541
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3542,
    "end": 3555
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3555,
    "end": 3556
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3556,
    "end": 3557
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3558,
    "end": 3561
  },
  {
    "type": "Identifier",
    "value": "r2b",
    "start": 3562,
    "end": 3565
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3566,
    "end": 3567
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 3568,
    "end": 3570
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3570,
    "end": 3571
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3571,
    "end": 3575
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3575,
    "end": 3576
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3576,
    "end": 3589
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3589,
    "end": 3590
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3591,
    "end": 3604
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3604,
    "end": 3605
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3606,
    "end": 3619
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3619,
    "end": 3620
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3620,
    "end": 3621
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3621,
    "end": 3625
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3625,
    "end": 3626
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3626,
    "end": 3639
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3639,
    "end": 3640
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3641,
    "end": 3654
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3654,
    "end": 3655
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3656,
    "end": 3669
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3669,
    "end": 3670
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3670,
    "end": 3671
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3672,
    "end": 3679
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3680,
    "end": 3683
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 3684,
    "end": 3686
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3686,
    "end": 3687
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3688,
    "end": 3695
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3695,
    "end": 3696
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3696,
    "end": 3697
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3698,
    "end": 3699
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3699,
    "end": 3700
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3701,
    "end": 3707
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3707,
    "end": 3708
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3709,
    "end": 3710
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3710,
    "end": 3711
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3711,
    "end": 3712
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3713,
    "end": 3716
  },
  {
    "type": "Identifier",
    "value": "s2a",
    "start": 3717,
    "end": 3720
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3721,
    "end": 3722
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 3723,
    "end": 3725
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3725,
    "end": 3726
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3726,
    "end": 3730
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3730,
    "end": 3731
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3731,
    "end": 3744
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3744,
    "end": 3745
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3746,
    "end": 3759
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3759,
    "end": 3760
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3761,
    "end": 3774
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3774,
    "end": 3775
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3775,
    "end": 3776
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3777,
    "end": 3780
  },
  {
    "type": "Identifier",
    "value": "s2b",
    "start": 3781,
    "end": 3784
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3785,
    "end": 3786
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 3787,
    "end": 3789
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3789,
    "end": 3790
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3790,
    "end": 3794
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3794,
    "end": 3795
  },
  {
    "type": "Identifier",
    "value": "testFunction2P",
    "start": 3795,
    "end": 3809
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3809,
    "end": 3810
  },
  {
    "type": "Identifier",
    "value": "testFunction2P",
    "start": 3811,
    "end": 3825
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3825,
    "end": 3826
  },
  {
    "type": "Identifier",
    "value": "testFunction2P",
    "start": 3827,
    "end": 3841
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3841,
    "end": 3842
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3842,
    "end": 3843
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3844,
    "end": 3847
  },
  {
    "type": "Identifier",
    "value": "s2c",
    "start": 3848,
    "end": 3851
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3852,
    "end": 3853
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 3854,
    "end": 3856
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3856,
    "end": 3857
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3857,
    "end": 3861
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3861,
    "end": 3862
  },
  {
    "type": "Identifier",
    "value": "testFunction2P",
    "start": 3862,
    "end": 3876
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3876,
    "end": 3877
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3878,
    "end": 3891
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3891,
    "end": 3892
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3893,
    "end": 3906
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3906,
    "end": 3907
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3907,
    "end": 3908
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3909,
    "end": 3912
  },
  {
    "type": "Identifier",
    "value": "s2d",
    "start": 3913,
    "end": 3916
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3917,
    "end": 3918
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 3919,
    "end": 3921
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3921,
    "end": 3922
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3922,
    "end": 3926
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3926,
    "end": 3927
  },
  {
    "type": "Identifier",
    "value": "testFunction2P",
    "start": 3927,
    "end": 3941
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3941,
    "end": 3942
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3943,
    "end": 3956
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3956,
    "end": 3957
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3958,
    "end": 3971
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3971,
    "end": 3972
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3972,
    "end": 3973
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 3973,
    "end": 3977
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3977,
    "end": 3978
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3978,
    "end": 3991
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3991,
    "end": 3992
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 3993,
    "end": 4006
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4006,
    "end": 4007
  },
  {
    "type": "Identifier",
    "value": "testFunction2",
    "start": 4008,
    "end": 4021
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4021,
    "end": 4022
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4022,
    "end": 4023
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4025,
    "end": 4032
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4033,
    "end": 4036
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 4037,
    "end": 4039
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4039,
    "end": 4040
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 4041,
    "end": 4049
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4049,
    "end": 4050
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4050,
    "end": 4056
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4056,
    "end": 4057
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4057,
    "end": 4058
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4059,
    "end": 4062
  },
  {
    "type": "Identifier",
    "value": "r3a",
    "start": 4063,
    "end": 4066
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4067,
    "end": 4068
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 4069,
    "end": 4071
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4071,
    "end": 4072
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4072,
    "end": 4076
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4076,
    "end": 4077
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4077,
    "end": 4090
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4090,
    "end": 4091
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4092,
    "end": 4105
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4105,
    "end": 4106
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4107,
    "end": 4120
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4120,
    "end": 4121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4121,
    "end": 4122
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4123,
    "end": 4126
  },
  {
    "type": "Identifier",
    "value": "r3b",
    "start": 4127,
    "end": 4130
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4131,
    "end": 4132
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 4133,
    "end": 4135
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4135,
    "end": 4136
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4136,
    "end": 4140
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4140,
    "end": 4141
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4141,
    "end": 4154
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4154,
    "end": 4155
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4156,
    "end": 4169
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4169,
    "end": 4170
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4171,
    "end": 4184
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4184,
    "end": 4185
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4185,
    "end": 4186
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4186,
    "end": 4190
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4190,
    "end": 4191
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4191,
    "end": 4204
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4204,
    "end": 4205
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4206,
    "end": 4219
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4219,
    "end": 4220
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4221,
    "end": 4234
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4234,
    "end": 4235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4235,
    "end": 4236
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4237,
    "end": 4244
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4245,
    "end": 4248
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 4249,
    "end": 4251
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4251,
    "end": 4252
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 4253,
    "end": 4260
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4260,
    "end": 4261
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4261,
    "end": 4267
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4267,
    "end": 4268
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4268,
    "end": 4269
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4270,
    "end": 4273
  },
  {
    "type": "Identifier",
    "value": "s3a",
    "start": 4274,
    "end": 4277
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4278,
    "end": 4279
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 4280,
    "end": 4282
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4282,
    "end": 4283
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4283,
    "end": 4287
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4287,
    "end": 4288
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4288,
    "end": 4301
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4301,
    "end": 4302
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4303,
    "end": 4316
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4316,
    "end": 4317
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4318,
    "end": 4331
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4331,
    "end": 4332
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4332,
    "end": 4333
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4334,
    "end": 4337
  },
  {
    "type": "Identifier",
    "value": "s3b",
    "start": 4338,
    "end": 4341
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4342,
    "end": 4343
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 4344,
    "end": 4346
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4346,
    "end": 4347
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4347,
    "end": 4351
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4351,
    "end": 4352
  },
  {
    "type": "Identifier",
    "value": "testFunction3P",
    "start": 4352,
    "end": 4366
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4366,
    "end": 4367
  },
  {
    "type": "Identifier",
    "value": "testFunction3P",
    "start": 4368,
    "end": 4382
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4382,
    "end": 4383
  },
  {
    "type": "Identifier",
    "value": "testFunction3P",
    "start": 4384,
    "end": 4398
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4398,
    "end": 4399
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4399,
    "end": 4400
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4401,
    "end": 4404
  },
  {
    "type": "Identifier",
    "value": "s3c",
    "start": 4405,
    "end": 4408
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4409,
    "end": 4410
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 4411,
    "end": 4413
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4413,
    "end": 4414
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4414,
    "end": 4418
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4418,
    "end": 4419
  },
  {
    "type": "Identifier",
    "value": "testFunction3P",
    "start": 4419,
    "end": 4433
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4433,
    "end": 4434
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4435,
    "end": 4448
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4448,
    "end": 4449
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4450,
    "end": 4463
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4463,
    "end": 4464
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4464,
    "end": 4465
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4466,
    "end": 4469
  },
  {
    "type": "Identifier",
    "value": "s3d",
    "start": 4470,
    "end": 4473
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4474,
    "end": 4475
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 4476,
    "end": 4478
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4478,
    "end": 4479
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4479,
    "end": 4483
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4483,
    "end": 4484
  },
  {
    "type": "Identifier",
    "value": "testFunction3P",
    "start": 4484,
    "end": 4498
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4498,
    "end": 4499
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4500,
    "end": 4513
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4513,
    "end": 4514
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4515,
    "end": 4528
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4528,
    "end": 4529
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4529,
    "end": 4530
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4530,
    "end": 4534
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4534,
    "end": 4535
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4535,
    "end": 4548
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4548,
    "end": 4549
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4550,
    "end": 4563
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4563,
    "end": 4564
  },
  {
    "type": "Identifier",
    "value": "testFunction3",
    "start": 4565,
    "end": 4578
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4578,
    "end": 4579
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4579,
    "end": 4580
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4598,
    "end": 4605
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4606,
    "end": 4609
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 4610,
    "end": 4612
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4612,
    "end": 4613
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 4614,
    "end": 4622
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4622,
    "end": 4623
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4623,
    "end": 4629
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4629,
    "end": 4630
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4630,
    "end": 4631
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4632,
    "end": 4639
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4640,
    "end": 4643
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 4644,
    "end": 4653
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4653,
    "end": 4654
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4655,
    "end": 4656
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4656,
    "end": 4657
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4657,
    "end": 4658
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4659,
    "end": 4662
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4662,
    "end": 4663
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4664,
    "end": 4666
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 4667,
    "end": 4675
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4675,
    "end": 4676
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4676,
    "end": 4682
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4682,
    "end": 4683
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4683,
    "end": 4684
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4685,
    "end": 4692
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4693,
    "end": 4696
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 4697,
    "end": 4705
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4705,
    "end": 4706
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4707,
    "end": 4708
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4708,
    "end": 4709
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4709,
    "end": 4710
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4711,
    "end": 4714
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4714,
    "end": 4715
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4716,
    "end": 4718
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 4719,
    "end": 4726
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4726,
    "end": 4727
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4727,
    "end": 4733
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4733,
    "end": 4734
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4734,
    "end": 4735
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4736,
    "end": 4739
  },
  {
    "type": "Identifier",
    "value": "r4a",
    "start": 4740,
    "end": 4743
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4744,
    "end": 4745
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 4746,
    "end": 4748
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4748,
    "end": 4749
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4749,
    "end": 4753
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4753,
    "end": 4754
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 4754,
    "end": 4767
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4767,
    "end": 4768
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 4769,
    "end": 4782
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4782,
    "end": 4783
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 4784,
    "end": 4797
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4797,
    "end": 4798
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4798,
    "end": 4799
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4809,
    "end": 4812
  },
  {
    "type": "Identifier",
    "value": "r4b",
    "start": 4813,
    "end": 4816
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4817,
    "end": 4818
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 4819,
    "end": 4821
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4821,
    "end": 4822
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4822,
    "end": 4826
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4826,
    "end": 4827
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 4827,
    "end": 4836
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4836,
    "end": 4837
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 4838,
    "end": 4851
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4851,
    "end": 4852
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 4853,
    "end": 4866
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4866,
    "end": 4867
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4867,
    "end": 4868
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4868,
    "end": 4872
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4872,
    "end": 4873
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 4873,
    "end": 4882
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4882,
    "end": 4883
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 4884,
    "end": 4897
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4897,
    "end": 4898
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 4899,
    "end": 4912
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4912,
    "end": 4913
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4913,
    "end": 4914
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4921,
    "end": 4928
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4929,
    "end": 4932
  },
  {
    "type": "Identifier",
    "value": "s4",
    "start": 4933,
    "end": 4935
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4935,
    "end": 4936
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 4937,
    "end": 4944
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4944,
    "end": 4945
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4945,
    "end": 4951
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4951,
    "end": 4952
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4952,
    "end": 4953
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4954,
    "end": 4957
  },
  {
    "type": "Identifier",
    "value": "s4a",
    "start": 4958,
    "end": 4961
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4962,
    "end": 4963
  },
  {
    "type": "Identifier",
    "value": "s4",
    "start": 4964,
    "end": 4966
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4966,
    "end": 4967
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 4967,
    "end": 4971
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4971,
    "end": 4972
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 4972,
    "end": 4985
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4985,
    "end": 4986
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 4987,
    "end": 5000
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5000,
    "end": 5001
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 5002,
    "end": 5015
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5015,
    "end": 5016
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5016,
    "end": 5017
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5027,
    "end": 5030
  },
  {
    "type": "Identifier",
    "value": "s4b",
    "start": 5031,
    "end": 5034
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5035,
    "end": 5036
  },
  {
    "type": "Identifier",
    "value": "s4",
    "start": 5037,
    "end": 5039
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5039,
    "end": 5040
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5040,
    "end": 5044
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5044,
    "end": 5045
  },
  {
    "type": "Identifier",
    "value": "testFunction4P",
    "start": 5045,
    "end": 5059
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5059,
    "end": 5060
  },
  {
    "type": "Identifier",
    "value": "testFunction4P",
    "start": 5061,
    "end": 5075
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5075,
    "end": 5076
  },
  {
    "type": "Identifier",
    "value": "testFunction4P",
    "start": 5077,
    "end": 5091
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5091,
    "end": 5092
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5092,
    "end": 5093
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5104,
    "end": 5107
  },
  {
    "type": "Identifier",
    "value": "s4c",
    "start": 5108,
    "end": 5111
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5112,
    "end": 5113
  },
  {
    "type": "Identifier",
    "value": "s4",
    "start": 5114,
    "end": 5116
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5116,
    "end": 5117
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5117,
    "end": 5121
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5121,
    "end": 5122
  },
  {
    "type": "Identifier",
    "value": "testFunction4P",
    "start": 5122,
    "end": 5136
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5136,
    "end": 5137
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 5138,
    "end": 5151
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5151,
    "end": 5152
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 5153,
    "end": 5166
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5166,
    "end": 5167
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5167,
    "end": 5168
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5178,
    "end": 5181
  },
  {
    "type": "Identifier",
    "value": "s4d",
    "start": 5182,
    "end": 5185
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5186,
    "end": 5187
  },
  {
    "type": "Identifier",
    "value": "s4",
    "start": 5188,
    "end": 5190
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5190,
    "end": 5191
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5191,
    "end": 5195
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5195,
    "end": 5196
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5196,
    "end": 5205
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5205,
    "end": 5206
  },
  {
    "type": "Identifier",
    "value": "testFunction4P",
    "start": 5207,
    "end": 5221
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5221,
    "end": 5222
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 5223,
    "end": 5236
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5236,
    "end": 5237
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5237,
    "end": 5238
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5238,
    "end": 5242
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5242,
    "end": 5243
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5243,
    "end": 5252
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5252,
    "end": 5253
  },
  {
    "type": "Identifier",
    "value": "testFunction4P",
    "start": 5254,
    "end": 5268
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5268,
    "end": 5269
  },
  {
    "type": "Identifier",
    "value": "testFunction4",
    "start": 5270,
    "end": 5283
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5283,
    "end": 5284
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5284,
    "end": 5285
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5287,
    "end": 5294
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5295,
    "end": 5298
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 5299,
    "end": 5301
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5301,
    "end": 5302
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 5303,
    "end": 5311
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5311,
    "end": 5312
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5312,
    "end": 5318
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5318,
    "end": 5319
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5319,
    "end": 5320
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5321,
    "end": 5324
  },
  {
    "type": "Identifier",
    "value": "r5a",
    "start": 5325,
    "end": 5328
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5329,
    "end": 5330
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 5331,
    "end": 5333
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5333,
    "end": 5334
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5334,
    "end": 5338
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5338,
    "end": 5339
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5339,
    "end": 5352
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5352,
    "end": 5353
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5354,
    "end": 5367
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5367,
    "end": 5368
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5369,
    "end": 5382
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5382,
    "end": 5383
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5383,
    "end": 5384
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5394,
    "end": 5397
  },
  {
    "type": "Identifier",
    "value": "r5b",
    "start": 5398,
    "end": 5401
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5402,
    "end": 5403
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 5404,
    "end": 5406
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5406,
    "end": 5407
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5407,
    "end": 5411
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5411,
    "end": 5412
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5412,
    "end": 5421
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5421,
    "end": 5422
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5423,
    "end": 5432
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5432,
    "end": 5433
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5434,
    "end": 5443
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5443,
    "end": 5444
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5444,
    "end": 5445
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5445,
    "end": 5449
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5449,
    "end": 5450
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5450,
    "end": 5459
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5459,
    "end": 5460
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5461,
    "end": 5470
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5470,
    "end": 5471
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5472,
    "end": 5481
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5481,
    "end": 5482
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5482,
    "end": 5483
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5490,
    "end": 5497
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5498,
    "end": 5501
  },
  {
    "type": "Identifier",
    "value": "s5",
    "start": 5502,
    "end": 5504
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5504,
    "end": 5505
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 5506,
    "end": 5513
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5513,
    "end": 5514
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5514,
    "end": 5520
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5520,
    "end": 5521
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5521,
    "end": 5522
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5523,
    "end": 5526
  },
  {
    "type": "Identifier",
    "value": "s5a",
    "start": 5527,
    "end": 5530
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5531,
    "end": 5532
  },
  {
    "type": "Identifier",
    "value": "s5",
    "start": 5533,
    "end": 5535
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5535,
    "end": 5536
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5536,
    "end": 5540
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5540,
    "end": 5541
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5541,
    "end": 5554
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5554,
    "end": 5555
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5556,
    "end": 5569
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5569,
    "end": 5570
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5571,
    "end": 5584
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5584,
    "end": 5585
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5585,
    "end": 5586
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5596,
    "end": 5599
  },
  {
    "type": "Identifier",
    "value": "s5b",
    "start": 5600,
    "end": 5603
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5604,
    "end": 5605
  },
  {
    "type": "Identifier",
    "value": "s5",
    "start": 5606,
    "end": 5608
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5608,
    "end": 5609
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5609,
    "end": 5613
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5613,
    "end": 5614
  },
  {
    "type": "Identifier",
    "value": "testFunction5P",
    "start": 5614,
    "end": 5628
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5628,
    "end": 5629
  },
  {
    "type": "Identifier",
    "value": "testFunction5P",
    "start": 5630,
    "end": 5644
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5644,
    "end": 5645
  },
  {
    "type": "Identifier",
    "value": "testFunction5P",
    "start": 5646,
    "end": 5660
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5660,
    "end": 5661
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5661,
    "end": 5662
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5672,
    "end": 5675
  },
  {
    "type": "Identifier",
    "value": "s5c",
    "start": 5676,
    "end": 5679
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5680,
    "end": 5681
  },
  {
    "type": "Identifier",
    "value": "s5",
    "start": 5682,
    "end": 5684
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5684,
    "end": 5685
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5685,
    "end": 5689
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5689,
    "end": 5690
  },
  {
    "type": "Identifier",
    "value": "testFunction5P",
    "start": 5690,
    "end": 5704
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5704,
    "end": 5705
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5706,
    "end": 5719
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5719,
    "end": 5720
  },
  {
    "type": "Identifier",
    "value": "testFunction5",
    "start": 5721,
    "end": 5734
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5734,
    "end": 5735
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5735,
    "end": 5736
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5746,
    "end": 5749
  },
  {
    "type": "Identifier",
    "value": "s5d",
    "start": 5750,
    "end": 5753
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5754,
    "end": 5755
  },
  {
    "type": "Identifier",
    "value": "s5",
    "start": 5756,
    "end": 5758
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5758,
    "end": 5759
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5759,
    "end": 5763
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5763,
    "end": 5764
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 5764,
    "end": 5772
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5772,
    "end": 5773
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 5774,
    "end": 5782
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5782,
    "end": 5783
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 5784,
    "end": 5792
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5792,
    "end": 5793
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5793,
    "end": 5794
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5794,
    "end": 5798
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5798,
    "end": 5799
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5799,
    "end": 5808
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5808,
    "end": 5809
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5810,
    "end": 5819
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5819,
    "end": 5820
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5821,
    "end": 5830
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5830,
    "end": 5831
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5831,
    "end": 5832
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5840,
    "end": 5847
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5848,
    "end": 5851
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 5852,
    "end": 5854
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5854,
    "end": 5855
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 5856,
    "end": 5864
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5864,
    "end": 5865
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5865,
    "end": 5871
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5871,
    "end": 5872
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5872,
    "end": 5873
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5874,
    "end": 5877
  },
  {
    "type": "Identifier",
    "value": "r6a",
    "start": 5878,
    "end": 5881
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5882,
    "end": 5883
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 5884,
    "end": 5886
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5886,
    "end": 5887
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5887,
    "end": 5891
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5891,
    "end": 5892
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 5892,
    "end": 5905
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5905,
    "end": 5906
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 5907,
    "end": 5920
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5920,
    "end": 5921
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 5922,
    "end": 5935
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5935,
    "end": 5936
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5936,
    "end": 5937
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5947,
    "end": 5950
  },
  {
    "type": "Identifier",
    "value": "r6b",
    "start": 5951,
    "end": 5954
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5955,
    "end": 5956
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 5957,
    "end": 5959
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5959,
    "end": 5960
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5960,
    "end": 5964
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5964,
    "end": 5965
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5965,
    "end": 5974
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5974,
    "end": 5975
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5976,
    "end": 5985
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5985,
    "end": 5986
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 5987,
    "end": 5996
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5996,
    "end": 5997
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5997,
    "end": 5998
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 5998,
    "end": 6002
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6002,
    "end": 6003
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6003,
    "end": 6012
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6012,
    "end": 6013
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6014,
    "end": 6023
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6023,
    "end": 6024
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6025,
    "end": 6034
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6034,
    "end": 6035
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6035,
    "end": 6036
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 6043,
    "end": 6050
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6051,
    "end": 6054
  },
  {
    "type": "Identifier",
    "value": "s6",
    "start": 6055,
    "end": 6057
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6057,
    "end": 6058
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6059,
    "end": 6066
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6066,
    "end": 6067
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6067,
    "end": 6073
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6073,
    "end": 6074
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6074,
    "end": 6075
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6076,
    "end": 6079
  },
  {
    "type": "Identifier",
    "value": "s6a",
    "start": 6080,
    "end": 6083
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6084,
    "end": 6085
  },
  {
    "type": "Identifier",
    "value": "s6",
    "start": 6086,
    "end": 6088
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6088,
    "end": 6089
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6089,
    "end": 6093
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6093,
    "end": 6094
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 6094,
    "end": 6107
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6107,
    "end": 6108
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 6109,
    "end": 6122
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6122,
    "end": 6123
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 6124,
    "end": 6137
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6137,
    "end": 6138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6138,
    "end": 6139
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6149,
    "end": 6152
  },
  {
    "type": "Identifier",
    "value": "s6b",
    "start": 6153,
    "end": 6156
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6157,
    "end": 6158
  },
  {
    "type": "Identifier",
    "value": "s6",
    "start": 6159,
    "end": 6161
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6161,
    "end": 6162
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6162,
    "end": 6166
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6166,
    "end": 6167
  },
  {
    "type": "Identifier",
    "value": "testFunction6P",
    "start": 6167,
    "end": 6181
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6181,
    "end": 6182
  },
  {
    "type": "Identifier",
    "value": "testFunction6P",
    "start": 6183,
    "end": 6197
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6197,
    "end": 6198
  },
  {
    "type": "Identifier",
    "value": "testFunction6P",
    "start": 6199,
    "end": 6213
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6213,
    "end": 6214
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6214,
    "end": 6215
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6225,
    "end": 6228
  },
  {
    "type": "Identifier",
    "value": "s6c",
    "start": 6229,
    "end": 6232
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6233,
    "end": 6234
  },
  {
    "type": "Identifier",
    "value": "s6",
    "start": 6235,
    "end": 6237
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6237,
    "end": 6238
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6238,
    "end": 6242
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6242,
    "end": 6243
  },
  {
    "type": "Identifier",
    "value": "testFunction6P",
    "start": 6243,
    "end": 6257
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6257,
    "end": 6258
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 6259,
    "end": 6272
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6272,
    "end": 6273
  },
  {
    "type": "Identifier",
    "value": "testFunction6",
    "start": 6274,
    "end": 6287
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6287,
    "end": 6288
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6288,
    "end": 6289
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6299,
    "end": 6302
  },
  {
    "type": "Identifier",
    "value": "s6d",
    "start": 6303,
    "end": 6306
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6307,
    "end": 6308
  },
  {
    "type": "Identifier",
    "value": "s6",
    "start": 6309,
    "end": 6311
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6311,
    "end": 6312
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6312,
    "end": 6316
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6316,
    "end": 6317
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6317,
    "end": 6325
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6325,
    "end": 6326
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6327,
    "end": 6335
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6335,
    "end": 6336
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6337,
    "end": 6345
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6345,
    "end": 6346
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6346,
    "end": 6347
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6347,
    "end": 6351
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6351,
    "end": 6352
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6352,
    "end": 6361
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6361,
    "end": 6362
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6363,
    "end": 6372
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6372,
    "end": 6373
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6374,
    "end": 6383
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6383,
    "end": 6384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6384,
    "end": 6385
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 6393,
    "end": 6400
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6401,
    "end": 6404
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 6405,
    "end": 6407
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6407,
    "end": 6408
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 6409,
    "end": 6417
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6417,
    "end": 6418
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6418,
    "end": 6424
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6424,
    "end": 6425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6425,
    "end": 6426
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6427,
    "end": 6430
  },
  {
    "type": "Identifier",
    "value": "r7a",
    "start": 6431,
    "end": 6434
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6435,
    "end": 6436
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 6437,
    "end": 6439
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6439,
    "end": 6440
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6440,
    "end": 6444
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6444,
    "end": 6445
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6445,
    "end": 6458
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6458,
    "end": 6459
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6460,
    "end": 6473
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6473,
    "end": 6474
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6475,
    "end": 6488
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6488,
    "end": 6489
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6489,
    "end": 6490
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6500,
    "end": 6503
  },
  {
    "type": "Identifier",
    "value": "r7b",
    "start": 6504,
    "end": 6507
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6508,
    "end": 6509
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 6510,
    "end": 6512
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6512,
    "end": 6513
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6513,
    "end": 6517
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6517,
    "end": 6518
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6518,
    "end": 6527
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6527,
    "end": 6528
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6529,
    "end": 6538
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6538,
    "end": 6539
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6540,
    "end": 6549
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6549,
    "end": 6550
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6550,
    "end": 6551
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6551,
    "end": 6555
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6555,
    "end": 6556
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6556,
    "end": 6565
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6565,
    "end": 6566
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6567,
    "end": 6576
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6576,
    "end": 6577
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 6578,
    "end": 6587
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6587,
    "end": 6588
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6588,
    "end": 6589
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 6596,
    "end": 6603
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6604,
    "end": 6607
  },
  {
    "type": "Identifier",
    "value": "s7",
    "start": 6608,
    "end": 6610
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6610,
    "end": 6611
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6612,
    "end": 6619
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6619,
    "end": 6620
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6620,
    "end": 6626
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6626,
    "end": 6627
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6627,
    "end": 6628
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6629,
    "end": 6632
  },
  {
    "type": "Identifier",
    "value": "s7a",
    "start": 6633,
    "end": 6636
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6637,
    "end": 6638
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 6639,
    "end": 6641
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6641,
    "end": 6642
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6642,
    "end": 6646
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6646,
    "end": 6647
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6647,
    "end": 6660
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6660,
    "end": 6661
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6662,
    "end": 6675
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6675,
    "end": 6676
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6677,
    "end": 6690
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6690,
    "end": 6691
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6691,
    "end": 6692
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6702,
    "end": 6705
  },
  {
    "type": "Identifier",
    "value": "s7b",
    "start": 6706,
    "end": 6709
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6710,
    "end": 6711
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 6712,
    "end": 6714
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6714,
    "end": 6715
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6715,
    "end": 6719
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6719,
    "end": 6720
  },
  {
    "type": "Identifier",
    "value": "testFunction7P",
    "start": 6720,
    "end": 6734
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6734,
    "end": 6735
  },
  {
    "type": "Identifier",
    "value": "testFunction7P",
    "start": 6736,
    "end": 6750
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6750,
    "end": 6751
  },
  {
    "type": "Identifier",
    "value": "testFunction7P",
    "start": 6752,
    "end": 6766
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6766,
    "end": 6767
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6767,
    "end": 6768
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6778,
    "end": 6781
  },
  {
    "type": "Identifier",
    "value": "s7c",
    "start": 6782,
    "end": 6785
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6786,
    "end": 6787
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 6788,
    "end": 6790
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6790,
    "end": 6791
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6791,
    "end": 6795
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6795,
    "end": 6796
  },
  {
    "type": "Identifier",
    "value": "testFunction7P",
    "start": 6796,
    "end": 6810
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6810,
    "end": 6811
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6812,
    "end": 6825
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6825,
    "end": 6826
  },
  {
    "type": "Identifier",
    "value": "testFunction7",
    "start": 6827,
    "end": 6840
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6840,
    "end": 6841
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6841,
    "end": 6842
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6852,
    "end": 6855
  },
  {
    "type": "Identifier",
    "value": "s7d",
    "start": 6856,
    "end": 6859
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6860,
    "end": 6861
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 6862,
    "end": 6864
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6864,
    "end": 6865
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6865,
    "end": 6869
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6869,
    "end": 6870
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6870,
    "end": 6878
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6878,
    "end": 6879
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6880,
    "end": 6888
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6888,
    "end": 6889
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6890,
    "end": 6898
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6898,
    "end": 6899
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6899,
    "end": 6900
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 6900,
    "end": 6904
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6904,
    "end": 6905
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6905,
    "end": 6913
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6913,
    "end": 6914
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6915,
    "end": 6923
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6923,
    "end": 6924
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 6925,
    "end": 6933
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6933,
    "end": 6934
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6934,
    "end": 6935
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 6944,
    "end": 6951
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6952,
    "end": 6955
  },
  {
    "type": "Identifier",
    "value": "r8",
    "start": 6956,
    "end": 6958
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6958,
    "end": 6959
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 6960,
    "end": 6968
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6968,
    "end": 6969
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6969,
    "end": 6975
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6975,
    "end": 6976
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6976,
    "end": 6977
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 6978,
    "end": 6985
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6986,
    "end": 6989
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 6990,
    "end": 6999
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6999,
    "end": 7000
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7001,
    "end": 7002
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 7002,
    "end": 7003
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7003,
    "end": 7004
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 7005,
    "end": 7008
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7008,
    "end": 7009
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 7010,
    "end": 7012
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 7013,
    "end": 7021
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7021,
    "end": 7022
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7022,
    "end": 7028
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7028,
    "end": 7029
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7029,
    "end": 7030
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 7031,
    "end": 7038
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7039,
    "end": 7042
  },
  {
    "type": "Identifier",
    "value": "nPromise",
    "start": 7043,
    "end": 7051
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7051,
    "end": 7052
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7053,
    "end": 7054
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 7054,
    "end": 7055
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7055,
    "end": 7056
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 7057,
    "end": 7060
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7060,
    "end": 7061
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 7062,
    "end": 7064
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 7065,
    "end": 7072
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7072,
    "end": 7073
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7073,
    "end": 7079
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7079,
    "end": 7080
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7080,
    "end": 7081
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7082,
    "end": 7085
  },
  {
    "type": "Identifier",
    "value": "r8a",
    "start": 7086,
    "end": 7089
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7090,
    "end": 7091
  },
  {
    "type": "Identifier",
    "value": "r8",
    "start": 7092,
    "end": 7094
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7094,
    "end": 7095
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7095,
    "end": 7099
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7099,
    "end": 7100
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 7100,
    "end": 7113
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7113,
    "end": 7114
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 7115,
    "end": 7128
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7128,
    "end": 7129
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 7130,
    "end": 7143
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7143,
    "end": 7144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7144,
    "end": 7145
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7155,
    "end": 7158
  },
  {
    "type": "Identifier",
    "value": "r8b",
    "start": 7159,
    "end": 7162
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7163,
    "end": 7164
  },
  {
    "type": "Identifier",
    "value": "r8",
    "start": 7165,
    "end": 7167
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7167,
    "end": 7168
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7168,
    "end": 7172
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7172,
    "end": 7173
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7173,
    "end": 7182
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7182,
    "end": 7183
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7184,
    "end": 7193
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7193,
    "end": 7194
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7195,
    "end": 7204
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7204,
    "end": 7205
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7205,
    "end": 7206
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7206,
    "end": 7210
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7210,
    "end": 7211
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7211,
    "end": 7220
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7220,
    "end": 7221
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7222,
    "end": 7231
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7231,
    "end": 7232
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7233,
    "end": 7242
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7242,
    "end": 7243
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7243,
    "end": 7244
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7251,
    "end": 7254
  },
  {
    "type": "Identifier",
    "value": "s8",
    "start": 7255,
    "end": 7257
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7257,
    "end": 7258
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 7259,
    "end": 7266
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7266,
    "end": 7267
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7267,
    "end": 7273
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7273,
    "end": 7274
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7274,
    "end": 7275
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7276,
    "end": 7279
  },
  {
    "type": "Identifier",
    "value": "s8a",
    "start": 7280,
    "end": 7283
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7284,
    "end": 7285
  },
  {
    "type": "Identifier",
    "value": "s8",
    "start": 7286,
    "end": 7288
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7288,
    "end": 7289
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7289,
    "end": 7293
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7293,
    "end": 7294
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 7294,
    "end": 7307
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7307,
    "end": 7308
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 7309,
    "end": 7322
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7322,
    "end": 7323
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 7324,
    "end": 7337
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7337,
    "end": 7338
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7338,
    "end": 7339
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7349,
    "end": 7352
  },
  {
    "type": "Identifier",
    "value": "s8b",
    "start": 7353,
    "end": 7356
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7357,
    "end": 7358
  },
  {
    "type": "Identifier",
    "value": "s8",
    "start": 7359,
    "end": 7361
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7361,
    "end": 7362
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7362,
    "end": 7366
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7366,
    "end": 7367
  },
  {
    "type": "Identifier",
    "value": "testFunction8P",
    "start": 7367,
    "end": 7381
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7381,
    "end": 7382
  },
  {
    "type": "Identifier",
    "value": "testFunction8P",
    "start": 7383,
    "end": 7397
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7397,
    "end": 7398
  },
  {
    "type": "Identifier",
    "value": "testFunction8P",
    "start": 7399,
    "end": 7413
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7413,
    "end": 7414
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7414,
    "end": 7415
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7425,
    "end": 7428
  },
  {
    "type": "Identifier",
    "value": "s8c",
    "start": 7429,
    "end": 7432
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7433,
    "end": 7434
  },
  {
    "type": "Identifier",
    "value": "s8",
    "start": 7435,
    "end": 7437
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7437,
    "end": 7438
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7438,
    "end": 7442
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7442,
    "end": 7443
  },
  {
    "type": "Identifier",
    "value": "testFunction8P",
    "start": 7443,
    "end": 7457
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7457,
    "end": 7458
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 7459,
    "end": 7472
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7472,
    "end": 7473
  },
  {
    "type": "Identifier",
    "value": "testFunction8",
    "start": 7474,
    "end": 7487
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7487,
    "end": 7488
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7488,
    "end": 7489
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7499,
    "end": 7502
  },
  {
    "type": "Identifier",
    "value": "s8d",
    "start": 7503,
    "end": 7506
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7507,
    "end": 7508
  },
  {
    "type": "Identifier",
    "value": "s8",
    "start": 7509,
    "end": 7511
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7511,
    "end": 7512
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7512,
    "end": 7516
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7516,
    "end": 7517
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7517,
    "end": 7526
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7526,
    "end": 7527
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7528,
    "end": 7537
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7537,
    "end": 7538
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7539,
    "end": 7548
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7548,
    "end": 7549
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7549,
    "end": 7550
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7550,
    "end": 7554
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7554,
    "end": 7555
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7555,
    "end": 7564
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7564,
    "end": 7565
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7566,
    "end": 7575
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7575,
    "end": 7576
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7577,
    "end": 7586
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7586,
    "end": 7587
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7587,
    "end": 7588
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 7596,
    "end": 7603
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7604,
    "end": 7607
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 7608,
    "end": 7610
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7610,
    "end": 7611
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 7612,
    "end": 7620
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7620,
    "end": 7621
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7621,
    "end": 7627
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7627,
    "end": 7628
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7628,
    "end": 7629
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7630,
    "end": 7633
  },
  {
    "type": "Identifier",
    "value": "r9a",
    "start": 7634,
    "end": 7637
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7638,
    "end": 7639
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 7640,
    "end": 7642
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7642,
    "end": 7643
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7643,
    "end": 7647
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7647,
    "end": 7648
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 7648,
    "end": 7661
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7661,
    "end": 7662
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 7663,
    "end": 7676
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7676,
    "end": 7677
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 7678,
    "end": 7691
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7691,
    "end": 7692
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7692,
    "end": 7693
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7703,
    "end": 7706
  },
  {
    "type": "Identifier",
    "value": "r9b",
    "start": 7707,
    "end": 7710
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7711,
    "end": 7712
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 7713,
    "end": 7715
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7715,
    "end": 7716
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7716,
    "end": 7720
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7720,
    "end": 7721
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 7721,
    "end": 7730
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7730,
    "end": 7731
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 7732,
    "end": 7741
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7741,
    "end": 7742
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 7743,
    "end": 7752
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7752,
    "end": 7753
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7753,
    "end": 7754
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7761,
    "end": 7764
  },
  {
    "type": "Identifier",
    "value": "r9c",
    "start": 7765,
    "end": 7768
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7769,
    "end": 7770
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 7771,
    "end": 7773
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7773,
    "end": 7774
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7774,
    "end": 7778
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7778,
    "end": 7779
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7779,
    "end": 7788
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7788,
    "end": 7789
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7790,
    "end": 7799
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7799,
    "end": 7800
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7801,
    "end": 7810
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7810,
    "end": 7811
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7811,
    "end": 7812
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7819,
    "end": 7822
  },
  {
    "type": "Identifier",
    "value": "r9d",
    "start": 7823,
    "end": 7826
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7827,
    "end": 7828
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 7829,
    "end": 7831
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7831,
    "end": 7832
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7832,
    "end": 7836
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7836,
    "end": 7837
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 7837,
    "end": 7849
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7849,
    "end": 7850
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 7851,
    "end": 7860
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7860,
    "end": 7861
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7862,
    "end": 7871
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7871,
    "end": 7872
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7872,
    "end": 7873
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7883,
    "end": 7886
  },
  {
    "type": "Identifier",
    "value": "r9e",
    "start": 7887,
    "end": 7890
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7891,
    "end": 7892
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 7893,
    "end": 7895
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7895,
    "end": 7896
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7896,
    "end": 7900
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7900,
    "end": 7901
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 7901,
    "end": 7913
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7913,
    "end": 7914
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 7915,
    "end": 7924
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7924,
    "end": 7925
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 7926,
    "end": 7935
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7935,
    "end": 7936
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7936,
    "end": 7937
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 7937,
    "end": 7941
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7941,
    "end": 7942
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 7942,
    "end": 7951
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7951,
    "end": 7952
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 7953,
    "end": 7962
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7962,
    "end": 7963
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 7964,
    "end": 7973
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7973,
    "end": 7974
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7974,
    "end": 7975
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 7982,
    "end": 7989
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7990,
    "end": 7993
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 7994,
    "end": 7996
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7996,
    "end": 7997
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 7998,
    "end": 8005
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8005,
    "end": 8006
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 8006,
    "end": 8012
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8012,
    "end": 8013
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8013,
    "end": 8014
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8015,
    "end": 8018
  },
  {
    "type": "Identifier",
    "value": "s9a",
    "start": 8019,
    "end": 8022
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8023,
    "end": 8024
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 8025,
    "end": 8027
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8027,
    "end": 8028
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8028,
    "end": 8032
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8032,
    "end": 8033
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 8033,
    "end": 8046
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8046,
    "end": 8047
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 8048,
    "end": 8061
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8061,
    "end": 8062
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 8063,
    "end": 8076
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8076,
    "end": 8077
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8077,
    "end": 8078
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8088,
    "end": 8091
  },
  {
    "type": "Identifier",
    "value": "s9b",
    "start": 8092,
    "end": 8095
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8096,
    "end": 8097
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 8098,
    "end": 8100
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8100,
    "end": 8101
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8101,
    "end": 8105
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8105,
    "end": 8106
  },
  {
    "type": "Identifier",
    "value": "testFunction9P",
    "start": 8106,
    "end": 8120
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8120,
    "end": 8121
  },
  {
    "type": "Identifier",
    "value": "testFunction9P",
    "start": 8122,
    "end": 8136
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8136,
    "end": 8137
  },
  {
    "type": "Identifier",
    "value": "testFunction9P",
    "start": 8138,
    "end": 8152
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8152,
    "end": 8153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8153,
    "end": 8154
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8164,
    "end": 8167
  },
  {
    "type": "Identifier",
    "value": "s9c",
    "start": 8168,
    "end": 8171
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8172,
    "end": 8173
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 8174,
    "end": 8176
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8176,
    "end": 8177
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8177,
    "end": 8181
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8181,
    "end": 8182
  },
  {
    "type": "Identifier",
    "value": "testFunction9P",
    "start": 8182,
    "end": 8196
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8196,
    "end": 8197
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 8198,
    "end": 8211
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8211,
    "end": 8212
  },
  {
    "type": "Identifier",
    "value": "testFunction9",
    "start": 8213,
    "end": 8226
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8226,
    "end": 8227
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8227,
    "end": 8228
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8238,
    "end": 8241
  },
  {
    "type": "Identifier",
    "value": "s9d",
    "start": 8242,
    "end": 8245
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8246,
    "end": 8247
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 8248,
    "end": 8250
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8250,
    "end": 8251
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8251,
    "end": 8255
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8255,
    "end": 8256
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 8256,
    "end": 8264
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8264,
    "end": 8265
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 8266,
    "end": 8274
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8274,
    "end": 8275
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 8276,
    "end": 8284
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8284,
    "end": 8285
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8285,
    "end": 8286
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8293,
    "end": 8296
  },
  {
    "type": "Identifier",
    "value": "s9e",
    "start": 8297,
    "end": 8300
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8301,
    "end": 8302
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 8303,
    "end": 8305
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8305,
    "end": 8306
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8306,
    "end": 8310
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8310,
    "end": 8311
  },
  {
    "type": "Identifier",
    "value": "nPromise",
    "start": 8311,
    "end": 8319
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8319,
    "end": 8320
  },
  {
    "type": "Identifier",
    "value": "nPromise",
    "start": 8321,
    "end": 8329
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8329,
    "end": 8330
  },
  {
    "type": "Identifier",
    "value": "nPromise",
    "start": 8331,
    "end": 8339
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8339,
    "end": 8340
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8340,
    "end": 8341
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8348,
    "end": 8351
  },
  {
    "type": "Identifier",
    "value": "s9f",
    "start": 8352,
    "end": 8355
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8356,
    "end": 8357
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 8358,
    "end": 8360
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8360,
    "end": 8361
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8361,
    "end": 8365
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8365,
    "end": 8366
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 8366,
    "end": 8378
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8378,
    "end": 8379
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8380,
    "end": 8389
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8389,
    "end": 8390
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 8391,
    "end": 8400
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8400,
    "end": 8401
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8401,
    "end": 8402
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8412,
    "end": 8415
  },
  {
    "type": "Identifier",
    "value": "s9g",
    "start": 8416,
    "end": 8419
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8420,
    "end": 8421
  },
  {
    "type": "Identifier",
    "value": "s9",
    "start": 8422,
    "end": 8424
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8424,
    "end": 8425
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8425,
    "end": 8429
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8429,
    "end": 8430
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 8430,
    "end": 8442
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8442,
    "end": 8443
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 8444,
    "end": 8453
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8453,
    "end": 8454
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8455,
    "end": 8464
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8464,
    "end": 8465
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8465,
    "end": 8466
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8466,
    "end": 8470
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8470,
    "end": 8471
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8471,
    "end": 8480
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8480,
    "end": 8481
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8482,
    "end": 8491
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8491,
    "end": 8492
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8493,
    "end": 8502
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8502,
    "end": 8503
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8503,
    "end": 8504
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8512,
    "end": 8515
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 8516,
    "end": 8519
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8520,
    "end": 8521
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 8522,
    "end": 8536
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8536,
    "end": 8537
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 8537,
    "end": 8538
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 8539,
    "end": 8541
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 8542,
    "end": 8543
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8543,
    "end": 8544
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8544,
    "end": 8545
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8546,
    "end": 8549
  },
  {
    "type": "Identifier",
    "value": "r10a",
    "start": 8550,
    "end": 8554
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8555,
    "end": 8556
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 8557,
    "end": 8560
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8560,
    "end": 8561
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8561,
    "end": 8565
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8565,
    "end": 8566
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 8566,
    "end": 8580
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8580,
    "end": 8581
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 8582,
    "end": 8596
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8596,
    "end": 8597
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 8598,
    "end": 8612
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8612,
    "end": 8613
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8613,
    "end": 8614
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8621,
    "end": 8624
  },
  {
    "type": "Identifier",
    "value": "r10b",
    "start": 8625,
    "end": 8629
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8630,
    "end": 8631
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 8632,
    "end": 8635
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8635,
    "end": 8636
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8636,
    "end": 8640
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8640,
    "end": 8641
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8641,
    "end": 8650
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8650,
    "end": 8651
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8652,
    "end": 8661
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8661,
    "end": 8662
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8663,
    "end": 8672
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8672,
    "end": 8673
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8673,
    "end": 8674
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8681,
    "end": 8684
  },
  {
    "type": "Identifier",
    "value": "r10c",
    "start": 8685,
    "end": 8689
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8690,
    "end": 8691
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 8692,
    "end": 8695
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8695,
    "end": 8696
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8696,
    "end": 8700
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8700,
    "end": 8701
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 8701,
    "end": 8710
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8710,
    "end": 8711
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 8712,
    "end": 8721
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8721,
    "end": 8722
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 8723,
    "end": 8732
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8732,
    "end": 8733
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8733,
    "end": 8734
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8741,
    "end": 8744
  },
  {
    "type": "Identifier",
    "value": "r10d",
    "start": 8745,
    "end": 8749
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8750,
    "end": 8751
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 8752,
    "end": 8755
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8755,
    "end": 8756
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8756,
    "end": 8760
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8760,
    "end": 8761
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 8761,
    "end": 8773
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8773,
    "end": 8774
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8775,
    "end": 8784
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8784,
    "end": 8785
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 8786,
    "end": 8795
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8795,
    "end": 8796
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8796,
    "end": 8797
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8807,
    "end": 8810
  },
  {
    "type": "Identifier",
    "value": "r10e",
    "start": 8811,
    "end": 8815
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8816,
    "end": 8817
  },
  {
    "type": "Identifier",
    "value": "r10",
    "start": 8818,
    "end": 8821
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8821,
    "end": 8822
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8822,
    "end": 8826
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8826,
    "end": 8827
  },
  {
    "type": "Identifier",
    "value": "testFunction",
    "start": 8827,
    "end": 8839
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8839,
    "end": 8840
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 8841,
    "end": 8850
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8850,
    "end": 8851
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8852,
    "end": 8861
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8861,
    "end": 8862
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8862,
    "end": 8863
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8863,
    "end": 8867
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8867,
    "end": 8868
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8868,
    "end": 8877
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8877,
    "end": 8878
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8879,
    "end": 8888
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8888,
    "end": 8889
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 8890,
    "end": 8899
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8899,
    "end": 8900
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8900,
    "end": 8901
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8908,
    "end": 8911
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 8912,
    "end": 8915
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8916,
    "end": 8917
  },
  {
    "type": "Identifier",
    "value": "testFunction10P",
    "start": 8918,
    "end": 8933
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8933,
    "end": 8934
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 8934,
    "end": 8935
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 8936,
    "end": 8938
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 8939,
    "end": 8940
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8940,
    "end": 8941
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8941,
    "end": 8942
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8943,
    "end": 8946
  },
  {
    "type": "Identifier",
    "value": "s10a",
    "start": 8947,
    "end": 8951
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8952,
    "end": 8953
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 8954,
    "end": 8957
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8957,
    "end": 8958
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8958,
    "end": 8962
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8962,
    "end": 8963
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 8963,
    "end": 8977
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8977,
    "end": 8978
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 8979,
    "end": 8993
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8993,
    "end": 8994
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 8995,
    "end": 9009
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9009,
    "end": 9010
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9010,
    "end": 9011
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9018,
    "end": 9021
  },
  {
    "type": "Identifier",
    "value": "s10b",
    "start": 9022,
    "end": 9026
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9027,
    "end": 9028
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 9029,
    "end": 9032
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9032,
    "end": 9033
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9033,
    "end": 9037
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9037,
    "end": 9038
  },
  {
    "type": "Identifier",
    "value": "testFunction10P",
    "start": 9038,
    "end": 9053
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9053,
    "end": 9054
  },
  {
    "type": "Identifier",
    "value": "testFunction10P",
    "start": 9055,
    "end": 9070
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9070,
    "end": 9071
  },
  {
    "type": "Identifier",
    "value": "testFunction10P",
    "start": 9072,
    "end": 9087
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9087,
    "end": 9088
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9088,
    "end": 9089
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9096,
    "end": 9099
  },
  {
    "type": "Identifier",
    "value": "s10c",
    "start": 9100,
    "end": 9104
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9105,
    "end": 9106
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 9107,
    "end": 9110
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9110,
    "end": 9111
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9111,
    "end": 9115
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9115,
    "end": 9116
  },
  {
    "type": "Identifier",
    "value": "testFunction10P",
    "start": 9116,
    "end": 9131
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9131,
    "end": 9132
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 9133,
    "end": 9147
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9147,
    "end": 9148
  },
  {
    "type": "Identifier",
    "value": "testFunction10",
    "start": 9149,
    "end": 9163
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9163,
    "end": 9164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9164,
    "end": 9165
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9172,
    "end": 9175
  },
  {
    "type": "Identifier",
    "value": "s10d",
    "start": 9176,
    "end": 9180
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9181,
    "end": 9182
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 9183,
    "end": 9186
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9186,
    "end": 9187
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9187,
    "end": 9191
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9191,
    "end": 9192
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 9192,
    "end": 9200
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9200,
    "end": 9201
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 9202,
    "end": 9210
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9210,
    "end": 9211
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 9212,
    "end": 9220
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9220,
    "end": 9221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9221,
    "end": 9222
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9229,
    "end": 9232
  },
  {
    "type": "Identifier",
    "value": "s10e",
    "start": 9233,
    "end": 9237
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9238,
    "end": 9239
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 9240,
    "end": 9243
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9243,
    "end": 9244
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9244,
    "end": 9248
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9248,
    "end": 9249
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 9249,
    "end": 9258
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9258,
    "end": 9259
  },
  {
    "type": "Identifier",
    "value": "nPromise",
    "start": 9260,
    "end": 9268
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9268,
    "end": 9269
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 9270,
    "end": 9279
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9279,
    "end": 9280
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9280,
    "end": 9281
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9288,
    "end": 9291
  },
  {
    "type": "Identifier",
    "value": "s10f",
    "start": 9292,
    "end": 9296
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9297,
    "end": 9298
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 9299,
    "end": 9302
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9302,
    "end": 9303
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9303,
    "end": 9307
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9307,
    "end": 9308
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 9308,
    "end": 9321
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9321,
    "end": 9322
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 9323,
    "end": 9332
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9332,
    "end": 9333
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 9334,
    "end": 9343
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9343,
    "end": 9344
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9344,
    "end": 9345
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9355,
    "end": 9358
  },
  {
    "type": "Identifier",
    "value": "s10g",
    "start": 9359,
    "end": 9363
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9364,
    "end": 9365
  },
  {
    "type": "Identifier",
    "value": "s10",
    "start": 9366,
    "end": 9369
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9369,
    "end": 9370
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9370,
    "end": 9374
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9374,
    "end": 9375
  },
  {
    "type": "Identifier",
    "value": "testFunctionP",
    "start": 9375,
    "end": 9388
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9388,
    "end": 9389
  },
  {
    "type": "Identifier",
    "value": "nIPromise",
    "start": 9390,
    "end": 9399
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9399,
    "end": 9400
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 9401,
    "end": 9410
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9410,
    "end": 9411
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9411,
    "end": 9412
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9412,
    "end": 9416
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9416,
    "end": 9417
  },
  {
    "type": "Identifier",
    "value": "sPromise",
    "start": 9417,
    "end": 9425
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9425,
    "end": 9426
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 9427,
    "end": 9436
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9436,
    "end": 9437
  },
  {
    "type": "Identifier",
    "value": "sIPromise",
    "start": 9438,
    "end": 9447
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9447,
    "end": 9448
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9448,
    "end": 9449
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 9457,
    "end": 9464
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9465,
    "end": 9468
  },
  {
    "type": "Identifier",
    "value": "r11",
    "start": 9469,
    "end": 9472
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9472,
    "end": 9473
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 9474,
    "end": 9482
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9482,
    "end": 9483
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 9483,
    "end": 9489
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 9489,
    "end": 9490
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9490,
    "end": 9491
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9492,
    "end": 9495
  },
  {
    "type": "Identifier",
    "value": "r11a",
    "start": 9496,
    "end": 9500
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9501,
    "end": 9502
  },
  {
    "type": "Identifier",
    "value": "r11",
    "start": 9503,
    "end": 9506
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9506,
    "end": 9507
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9507,
    "end": 9511
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9511,
    "end": 9512
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9512,
    "end": 9526
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9526,
    "end": 9527
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9528,
    "end": 9542
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9542,
    "end": 9543
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9544,
    "end": 9558
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9558,
    "end": 9559
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9559,
    "end": 9560
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 9570,
    "end": 9577
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9578,
    "end": 9581
  },
  {
    "type": "Identifier",
    "value": "s11",
    "start": 9582,
    "end": 9585
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9585,
    "end": 9586
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 9587,
    "end": 9594
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9594,
    "end": 9595
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 9595,
    "end": 9601
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 9601,
    "end": 9602
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9602,
    "end": 9603
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9604,
    "end": 9607
  },
  {
    "type": "Identifier",
    "value": "s11a",
    "start": 9608,
    "end": 9612
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9613,
    "end": 9614
  },
  {
    "type": "Identifier",
    "value": "s11",
    "start": 9615,
    "end": 9618
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9618,
    "end": 9619
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9619,
    "end": 9623
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9623,
    "end": 9624
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9624,
    "end": 9638
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9638,
    "end": 9639
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9640,
    "end": 9654
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9654,
    "end": 9655
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9656,
    "end": 9670
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9670,
    "end": 9671
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9671,
    "end": 9672
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9679,
    "end": 9682
  },
  {
    "type": "Identifier",
    "value": "s11b",
    "start": 9683,
    "end": 9687
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9688,
    "end": 9689
  },
  {
    "type": "Identifier",
    "value": "s11",
    "start": 9690,
    "end": 9693
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9693,
    "end": 9694
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9694,
    "end": 9698
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9698,
    "end": 9699
  },
  {
    "type": "Identifier",
    "value": "testFunction11P",
    "start": 9699,
    "end": 9714
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9714,
    "end": 9715
  },
  {
    "type": "Identifier",
    "value": "testFunction11P",
    "start": 9716,
    "end": 9731
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9731,
    "end": 9732
  },
  {
    "type": "Identifier",
    "value": "testFunction11P",
    "start": 9733,
    "end": 9748
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9748,
    "end": 9749
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9749,
    "end": 9750
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9757,
    "end": 9760
  },
  {
    "type": "Identifier",
    "value": "s11c",
    "start": 9761,
    "end": 9765
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9766,
    "end": 9767
  },
  {
    "type": "Identifier",
    "value": "s11",
    "start": 9768,
    "end": 9771
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9771,
    "end": 9772
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9772,
    "end": 9776
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9776,
    "end": 9777
  },
  {
    "type": "Identifier",
    "value": "testFunction11P",
    "start": 9777,
    "end": 9792
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9792,
    "end": 9793
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9794,
    "end": 9808
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9808,
    "end": 9809
  },
  {
    "type": "Identifier",
    "value": "testFunction11",
    "start": 9810,
    "end": 9824
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9824,
    "end": 9825
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9825,
    "end": 9826
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9834,
    "end": 9837
  },
  {
    "type": "Identifier",
    "value": "r12",
    "start": 9838,
    "end": 9841
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9842,
    "end": 9843
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 9844,
    "end": 9858
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9858,
    "end": 9859
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 9859,
    "end": 9860
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 9861,
    "end": 9863
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 9864,
    "end": 9865
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9865,
    "end": 9866
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9866,
    "end": 9867
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9868,
    "end": 9871
  },
  {
    "type": "Identifier",
    "value": "r12a",
    "start": 9872,
    "end": 9876
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9877,
    "end": 9878
  },
  {
    "type": "Identifier",
    "value": "r12",
    "start": 9879,
    "end": 9882
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9882,
    "end": 9883
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9883,
    "end": 9887
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9887,
    "end": 9888
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 9888,
    "end": 9902
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9902,
    "end": 9903
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 9904,
    "end": 9918
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9918,
    "end": 9919
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 9920,
    "end": 9934
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9934,
    "end": 9935
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9935,
    "end": 9936
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9943,
    "end": 9946
  },
  {
    "type": "Identifier",
    "value": "s12",
    "start": 9947,
    "end": 9950
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9951,
    "end": 9952
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 9953,
    "end": 9967
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9967,
    "end": 9968
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 9968,
    "end": 9969
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 9970,
    "end": 9972
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 9973,
    "end": 9974
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9974,
    "end": 9975
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9975,
    "end": 9976
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9977,
    "end": 9980
  },
  {
    "type": "Identifier",
    "value": "s12a",
    "start": 9981,
    "end": 9985
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9986,
    "end": 9987
  },
  {
    "type": "Identifier",
    "value": "s12",
    "start": 9988,
    "end": 9991
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9991,
    "end": 9992
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 9992,
    "end": 9996
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9996,
    "end": 9997
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 9997,
    "end": 10011
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10011,
    "end": 10012
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 10013,
    "end": 10027
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10027,
    "end": 10028
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 10029,
    "end": 10043
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10043,
    "end": 10044
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10044,
    "end": 10045
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 10052,
    "end": 10055
  },
  {
    "type": "Identifier",
    "value": "s12b",
    "start": 10056,
    "end": 10060
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10061,
    "end": 10062
  },
  {
    "type": "Identifier",
    "value": "s12",
    "start": 10063,
    "end": 10066
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 10066,
    "end": 10067
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 10067,
    "end": 10071
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10071,
    "end": 10072
  },
  {
    "type": "Identifier",
    "value": "testFunction12P",
    "start": 10072,
    "end": 10087
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10087,
    "end": 10088
  },
  {
    "type": "Identifier",
    "value": "testFunction12P",
    "start": 10089,
    "end": 10104
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10104,
    "end": 10105
  },
  {
    "type": "Identifier",
    "value": "testFunction12P",
    "start": 10106,
    "end": 10121
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10121,
    "end": 10122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10122,
    "end": 10123
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 10130,
    "end": 10133
  },
  {
    "type": "Identifier",
    "value": "s12c",
    "start": 10134,
    "end": 10138
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10139,
    "end": 10140
  },
  {
    "type": "Identifier",
    "value": "s12",
    "start": 10141,
    "end": 10144
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 10144,
    "end": 10145
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 10145,
    "end": 10149
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10149,
    "end": 10150
  },
  {
    "type": "Identifier",
    "value": "testFunction12P",
    "start": 10150,
    "end": 10165
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10165,
    "end": 10166
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 10167,
    "end": 10181
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10181,
    "end": 10182
  },
  {
    "type": "Identifier",
    "value": "testFunction12",
    "start": 10183,
    "end": 10197
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10197,
    "end": 10198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10198,
    "end": 10199
  }
]
```
