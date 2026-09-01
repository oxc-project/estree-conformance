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
        "name": "IEnumerable",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 21
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
              "start": 22,
              "end": 23
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 22,
            "end": 23
          }
        ],
        "start": 21,
        "end": 24
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
              "name": "zip",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 35
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
                    "name": "TResult",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 36,
                    "end": 43
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 36,
                  "end": 43
                }
              ],
              "start": 35,
              "end": 44
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "second",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IEnumerable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 53,
                      "end": 64
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
                            "start": 65,
                            "end": 66
                          },
                          "typeArguments": null,
                          "start": 65,
                          "end": 66
                        }
                      ],
                      "start": 64,
                      "end": 67
                    },
                    "start": 53,
                    "end": 67
                  },
                  "start": 51,
                  "end": 67
                },
                "start": 45,
                "end": 67
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "resultSelector",
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
                        "name": "first",
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
                              "start": 93,
                              "end": 94
                            },
                            "typeArguments": null,
                            "start": 93,
                            "end": 94
                          },
                          "start": 91,
                          "end": 94
                        },
                        "start": 86,
                        "end": 94
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "second",
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
                              "start": 104,
                              "end": 105
                            },
                            "typeArguments": null,
                            "start": 104,
                            "end": 105
                          },
                          "start": 102,
                          "end": 105
                        },
                        "start": 96,
                        "end": 105
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 114,
                            "end": 120
                          },
                          "start": 112,
                          "end": 120
                        },
                        "start": 107,
                        "end": 120
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TResult",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 125,
                          "end": 132
                        },
                        "typeArguments": null,
                        "start": 125,
                        "end": 132
                      },
                      "start": 122,
                      "end": 132
                    },
                    "start": 85,
                    "end": 132
                  },
                  "start": 83,
                  "end": 132
                },
                "start": 69,
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
                  "name": "IEnumerable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 135,
                  "end": 146
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TResult",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 147,
                        "end": 154
                      },
                      "typeArguments": null,
                      "start": 147,
                      "end": 154
                    }
                  ],
                  "start": 146,
                  "end": 155
                },
                "start": 135,
                "end": 155
              },
              "start": 133,
              "end": 155
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 32,
            "end": 156
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "zip",
              "optional": false,
              "typeAnnotation": null,
              "start": 161,
              "end": 164
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
                    "name": "TResult",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 165,
                    "end": 172
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 165,
                  "end": 172
                }
              ],
              "start": 164,
              "end": 173
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "second",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 182,
                        "end": 183
                      },
                      "typeArguments": null,
                      "start": 182,
                      "end": 183
                    },
                    "start": 182,
                    "end": 185
                  },
                  "start": 180,
                  "end": 185
                },
                "start": 174,
                "end": 185
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "resultSelector",
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
                        "name": "first",
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
                              "start": 211,
                              "end": 212
                            },
                            "typeArguments": null,
                            "start": 211,
                            "end": 212
                          },
                          "start": 209,
                          "end": 212
                        },
                        "start": 204,
                        "end": 212
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "second",
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
                              "start": 222,
                              "end": 223
                            },
                            "typeArguments": null,
                            "start": 222,
                            "end": 223
                          },
                          "start": 220,
                          "end": 223
                        },
                        "start": 214,
                        "end": 223
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 232,
                            "end": 238
                          },
                          "start": 230,
                          "end": 238
                        },
                        "start": 225,
                        "end": 238
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TResult",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 243,
                          "end": 250
                        },
                        "typeArguments": null,
                        "start": 243,
                        "end": 250
                      },
                      "start": 240,
                      "end": 250
                    },
                    "start": 203,
                    "end": 250
                  },
                  "start": 201,
                  "end": 250
                },
                "start": 187,
                "end": 250
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IEnumerable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 253,
                  "end": 264
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TResult",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 265,
                        "end": 272
                      },
                      "typeArguments": null,
                      "start": 265,
                      "end": 272
                    }
                  ],
                  "start": 264,
                  "end": 273
                },
                "start": 253,
                "end": 273
              },
              "start": 251,
              "end": 273
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 161,
            "end": 274
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "zip",
              "optional": false,
              "typeAnnotation": null,
              "start": 279,
              "end": 282
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
                    "name": "TResult",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 283,
                    "end": 290
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 283,
                  "end": 290
                }
              ],
              "start": 282,
              "end": 291
            },
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "params",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 295,
                  "end": 301
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 303,
                      "end": 306
                    },
                    "start": 303,
                    "end": 308
                  },
                  "start": 301,
                  "end": 308
                },
                "value": null,
                "start": 292,
                "end": 308
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IEnumerable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 311,
                  "end": 322
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TResult",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 323,
                        "end": 330
                      },
                      "typeArguments": null,
                      "start": 323,
                      "end": 330
                    }
                  ],
                  "start": 322,
                  "end": 331
                },
                "start": 311,
                "end": 331
              },
              "start": 309,
              "end": 331
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 279,
            "end": 332
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "merge",
              "optional": false,
              "typeAnnotation": null,
              "start": 362,
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
                    "name": "TResult",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 368,
                    "end": 375
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 368,
                  "end": 375
                }
              ],
              "start": 367,
              "end": 376
            },
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "params",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 380,
                  "end": 386
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IEnumerable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 388,
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
                              "name": "T",
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
                      "start": 388,
                      "end": 402
                    },
                    "start": 388,
                    "end": 404
                  },
                  "start": 386,
                  "end": 404
                },
                "value": null,
                "start": 377,
                "end": 404
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IEnumerable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 407,
                  "end": 418
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
                        "start": 419,
                        "end": 420
                      },
                      "typeArguments": null,
                      "start": 419,
                      "end": 420
                    }
                  ],
                  "start": 418,
                  "end": 421
                },
                "start": 407,
                "end": 421
              },
              "start": 405,
              "end": 421
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 362,
            "end": 422
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "merge",
              "optional": false,
              "typeAnnotation": null,
              "start": 427,
              "end": 432
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
                    "name": "TResult",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 433,
                    "end": 440
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 433,
                  "end": 440
                }
              ],
              "start": 432,
              "end": 441
            },
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "params",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 445,
                  "end": 451
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 453,
                          "end": 454
                        },
                        "typeArguments": null,
                        "start": 453,
                        "end": 454
                      },
                      "start": 453,
                      "end": 456
                    },
                    "start": 453,
                    "end": 458
                  },
                  "start": 451,
                  "end": 458
                },
                "value": null,
                "start": 442,
                "end": 458
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IEnumerable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 461,
                  "end": 472
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
                        "start": 473,
                        "end": 474
                      },
                      "typeArguments": null,
                      "start": 473,
                      "end": 474
                    }
                  ],
                  "start": 472,
                  "end": 475
                },
                "start": 461,
                "end": 475
              },
              "start": 459,
              "end": 475
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 427,
            "end": 476
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "concat",
              "optional": false,
              "typeAnnotation": null,
              "start": 483,
              "end": 489
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "sequences",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 493,
                  "end": 502
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IEnumerable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 504,
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 516,
                              "end": 517
                            },
                            "typeArguments": null,
                            "start": 516,
                            "end": 517
                          }
                        ],
                        "start": 515,
                        "end": 518
                      },
                      "start": 504,
                      "end": 518
                    },
                    "start": 504,
                    "end": 520
                  },
                  "start": 502,
                  "end": 520
                },
                "value": null,
                "start": 490,
                "end": 520
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IEnumerable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 523,
                  "end": 534
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
                        "start": 535,
                        "end": 536
                      },
                      "typeArguments": null,
                      "start": 535,
                      "end": 536
                    }
                  ],
                  "start": 534,
                  "end": 537
                },
                "start": 523,
                "end": 537
              },
              "start": 521,
              "end": 537
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 483,
            "end": 538
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "concat",
              "optional": false,
              "typeAnnotation": null,
              "start": 543,
              "end": 549
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "sequences",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 553,
                  "end": 562
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 564,
                        "end": 565
                      },
                      "typeArguments": null,
                      "start": 564,
                      "end": 565
                    },
                    "start": 564,
                    "end": 567
                  },
                  "start": 562,
                  "end": 567
                },
                "value": null,
                "start": 550,
                "end": 567
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IEnumerable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 570,
                  "end": 581
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
                        "start": 582,
                        "end": 583
                      },
                      "typeArguments": null,
                      "start": 582,
                      "end": 583
                    }
                  ],
                  "start": 581,
                  "end": 584
                },
                "start": 570,
                "end": 584
              },
              "start": 568,
              "end": 584
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 543,
            "end": 585
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "insert",
              "optional": false,
              "typeAnnotation": null,
              "start": 591,
              "end": 597
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 605,
                    "end": 611
                  },
                  "start": 603,
                  "end": 611
                },
                "start": 598,
                "end": 611
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "second",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IEnumerable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 621,
                      "end": 632
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
                            "start": 633,
                            "end": 634
                          },
                          "typeArguments": null,
                          "start": 633,
                          "end": 634
                        }
                      ],
                      "start": 632,
                      "end": 635
                    },
                    "start": 621,
                    "end": 635
                  },
                  "start": 619,
                  "end": 635
                },
                "start": 613,
                "end": 635
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IEnumerable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 638,
                  "end": 649
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
                        "start": 650,
                        "end": 651
                      },
                      "typeArguments": null,
                      "start": 650,
                      "end": 651
                    }
                  ],
                  "start": 649,
                  "end": 652
                },
                "start": 638,
                "end": 652
              },
              "start": 636,
              "end": 652
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 591,
            "end": 653
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sequenceEqual",
              "optional": false,
              "typeAnnotation": null,
              "start": 659,
              "end": 672
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "second",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IEnumerable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 681,
                      "end": 692
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
                            "start": 693,
                            "end": 694
                          },
                          "typeArguments": null,
                          "start": 693,
                          "end": 694
                        }
                      ],
                      "start": 692,
                      "end": 695
                    },
                    "start": 681,
                    "end": 695
                  },
                  "start": 679,
                  "end": 695
                },
                "start": 673,
                "end": 695
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 698,
                "end": 705
              },
              "start": 696,
              "end": 705
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 659,
            "end": 706
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sequenceEqual",
              "optional": false,
              "typeAnnotation": null,
              "start": 711,
              "end": 724
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
                    "name": "TCompare",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 725,
                    "end": 733
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 725,
                  "end": 733
                }
              ],
              "start": 724,
              "end": 734
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "second",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IEnumerable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 743,
                      "end": 754
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
                            "start": 755,
                            "end": 756
                          },
                          "typeArguments": null,
                          "start": 755,
                          "end": 756
                        }
                      ],
                      "start": 754,
                      "end": 757
                    },
                    "start": 743,
                    "end": 757
                  },
                  "start": 741,
                  "end": 757
                },
                "start": 735,
                "end": 757
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "compareSelector",
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
                        "name": "element",
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
                              "start": 786,
                              "end": 787
                            },
                            "typeArguments": null,
                            "start": 786,
                            "end": 787
                          },
                          "start": 784,
                          "end": 787
                        },
                        "start": 777,
                        "end": 787
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TCompare",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 792,
                          "end": 800
                        },
                        "typeArguments": null,
                        "start": 792,
                        "end": 800
                      },
                      "start": 789,
                      "end": 800
                    },
                    "start": 776,
                    "end": 800
                  },
                  "start": 774,
                  "end": 800
                },
                "start": 759,
                "end": 800
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 803,
                "end": 810
              },
              "start": 801,
              "end": 810
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 711,
            "end": 811
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sequenceEqual",
              "optional": false,
              "typeAnnotation": null,
              "start": 816,
              "end": 829
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "second",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 838,
                        "end": 839
                      },
                      "typeArguments": null,
                      "start": 838,
                      "end": 839
                    },
                    "start": 838,
                    "end": 841
                  },
                  "start": 836,
                  "end": 841
                },
                "start": 830,
                "end": 841
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 844,
                "end": 851
              },
              "start": 842,
              "end": 851
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 816,
            "end": 852
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sequenceEqual",
              "optional": false,
              "typeAnnotation": null,
              "start": 857,
              "end": 870
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
                    "name": "TCompare",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 871,
                    "end": 879
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 871,
                  "end": 879
                }
              ],
              "start": 870,
              "end": 880
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "second",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 889,
                        "end": 890
                      },
                      "typeArguments": null,
                      "start": 889,
                      "end": 890
                    },
                    "start": 889,
                    "end": 892
                  },
                  "start": 887,
                  "end": 892
                },
                "start": 881,
                "end": 892
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "compareSelector",
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
                        "name": "element",
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
                              "start": 921,
                              "end": 922
                            },
                            "typeArguments": null,
                            "start": 921,
                            "end": 922
                          },
                          "start": 919,
                          "end": 922
                        },
                        "start": 912,
                        "end": 922
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TCompare",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 927,
                          "end": 935
                        },
                        "typeArguments": null,
                        "start": 927,
                        "end": 935
                      },
                      "start": 924,
                      "end": 935
                    },
                    "start": 911,
                    "end": 935
                  },
                  "start": 909,
                  "end": 935
                },
                "start": 894,
                "end": 935
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 938,
                "end": 945
              },
              "start": 936,
              "end": 945
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 857,
            "end": 946
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toDictionary",
              "optional": false,
              "typeAnnotation": null,
              "start": 959,
              "end": 971
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
                    "name": "TKey",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 972,
                    "end": 976
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 972,
                  "end": 976
                }
              ],
              "start": 971,
              "end": 977
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "keySelector",
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
                        "name": "element",
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
                              "start": 1001,
                              "end": 1002
                            },
                            "typeArguments": null,
                            "start": 1001,
                            "end": 1002
                          },
                          "start": 999,
                          "end": 1002
                        },
                        "start": 992,
                        "end": 1002
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TKey",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1007,
                          "end": 1011
                        },
                        "typeArguments": null,
                        "start": 1007,
                        "end": 1011
                      },
                      "start": 1004,
                      "end": 1011
                    },
                    "start": 991,
                    "end": 1011
                  },
                  "start": 989,
                  "end": 1011
                },
                "start": 978,
                "end": 1011
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IDictionary",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1014,
                  "end": 1025
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TKey",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1026,
                        "end": 1030
                      },
                      "typeArguments": null,
                      "start": 1026,
                      "end": 1030
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 1032,
                      "end": 1035
                    }
                  ],
                  "start": 1025,
                  "end": 1036
                },
                "start": 1014,
                "end": 1036
              },
              "start": 1012,
              "end": 1036
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 959,
            "end": 1037
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toDictionary",
              "optional": false,
              "typeAnnotation": null,
              "start": 1042,
              "end": 1054
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
                    "name": "TKey",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1055,
                    "end": 1059
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1055,
                  "end": 1059
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1061,
                    "end": 1067
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1061,
                  "end": 1067
                }
              ],
              "start": 1054,
              "end": 1068
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "keySelector",
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
                        "name": "element",
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
                              "start": 1092,
                              "end": 1093
                            },
                            "typeArguments": null,
                            "start": 1092,
                            "end": 1093
                          },
                          "start": 1090,
                          "end": 1093
                        },
                        "start": 1083,
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
                          "name": "TKey",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1098,
                          "end": 1102
                        },
                        "typeArguments": null,
                        "start": 1098,
                        "end": 1102
                      },
                      "start": 1095,
                      "end": 1102
                    },
                    "start": 1082,
                    "end": 1102
                  },
                  "start": 1080,
                  "end": 1102
                },
                "start": 1069,
                "end": 1102
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "elementSelector",
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
                        "name": "element",
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
                              "start": 1131,
                              "end": 1132
                            },
                            "typeArguments": null,
                            "start": 1131,
                            "end": 1132
                          },
                          "start": 1129,
                          "end": 1132
                        },
                        "start": 1122,
                        "end": 1132
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1137,
                          "end": 1143
                        },
                        "typeArguments": null,
                        "start": 1137,
                        "end": 1143
                      },
                      "start": 1134,
                      "end": 1143
                    },
                    "start": 1121,
                    "end": 1143
                  },
                  "start": 1119,
                  "end": 1143
                },
                "start": 1104,
                "end": 1143
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IDictionary",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1146,
                  "end": 1157
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TKey",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1158,
                        "end": 1162
                      },
                      "typeArguments": null,
                      "start": 1158,
                      "end": 1162
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TValue",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1164,
                        "end": 1170
                      },
                      "typeArguments": null,
                      "start": 1164,
                      "end": 1170
                    }
                  ],
                  "start": 1157,
                  "end": 1171
                },
                "start": 1146,
                "end": 1171
              },
              "start": 1144,
              "end": 1171
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1042,
            "end": 1172
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toDictionary",
              "optional": false,
              "typeAnnotation": null,
              "start": 1177,
              "end": 1189
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
                    "name": "TKey",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1190,
                    "end": 1194
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1190,
                  "end": 1194
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1196,
                    "end": 1202
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1196,
                  "end": 1202
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TCompare",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1204,
                    "end": 1212
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1204,
                  "end": 1212
                }
              ],
              "start": 1189,
              "end": 1213
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "keySelector",
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
                        "name": "element",
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
                              "start": 1237,
                              "end": 1238
                            },
                            "typeArguments": null,
                            "start": 1237,
                            "end": 1238
                          },
                          "start": 1235,
                          "end": 1238
                        },
                        "start": 1228,
                        "end": 1238
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TKey",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1243,
                          "end": 1247
                        },
                        "typeArguments": null,
                        "start": 1243,
                        "end": 1247
                      },
                      "start": 1240,
                      "end": 1247
                    },
                    "start": 1227,
                    "end": 1247
                  },
                  "start": 1225,
                  "end": 1247
                },
                "start": 1214,
                "end": 1247
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "elementSelector",
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
                        "name": "element",
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
                              "start": 1276,
                              "end": 1277
                            },
                            "typeArguments": null,
                            "start": 1276,
                            "end": 1277
                          },
                          "start": 1274,
                          "end": 1277
                        },
                        "start": 1267,
                        "end": 1277
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1282,
                          "end": 1288
                        },
                        "typeArguments": null,
                        "start": 1282,
                        "end": 1288
                      },
                      "start": 1279,
                      "end": 1288
                    },
                    "start": 1266,
                    "end": 1288
                  },
                  "start": 1264,
                  "end": 1288
                },
                "start": 1249,
                "end": 1288
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "compareSelector",
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
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TKey",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1313,
                              "end": 1317
                            },
                            "typeArguments": null,
                            "start": 1313,
                            "end": 1317
                          },
                          "start": 1311,
                          "end": 1317
                        },
                        "start": 1308,
                        "end": 1317
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TCompare",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1322,
                          "end": 1330
                        },
                        "typeArguments": null,
                        "start": 1322,
                        "end": 1330
                      },
                      "start": 1319,
                      "end": 1330
                    },
                    "start": 1307,
                    "end": 1330
                  },
                  "start": 1305,
                  "end": 1330
                },
                "start": 1290,
                "end": 1330
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IDictionary",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1333,
                  "end": 1344
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TKey",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1345,
                        "end": 1349
                      },
                      "typeArguments": null,
                      "start": 1345,
                      "end": 1349
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TValue",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1351,
                        "end": 1357
                      },
                      "typeArguments": null,
                      "start": 1351,
                      "end": 1357
                    }
                  ],
                  "start": 1344,
                  "end": 1358
                },
                "start": 1333,
                "end": 1358
              },
              "start": 1331,
              "end": 1358
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1177,
            "end": 1359
          }
        ],
        "start": 25,
        "end": 1361
      },
      "declare": false,
      "start": 0,
      "end": 1361
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IDictionary",
        "optional": false,
        "typeAnnotation": null,
        "start": 1373,
        "end": 1384
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TKey",
              "optional": false,
              "typeAnnotation": null,
              "start": 1385,
              "end": 1389
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1385,
            "end": 1389
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TValue",
              "optional": false,
              "typeAnnotation": null,
              "start": 1391,
              "end": 1397
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1391,
            "end": 1397
          }
        ],
        "start": 1384,
        "end": 1398
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
              "name": "toEnumerable",
              "optional": false,
              "typeAnnotation": null,
              "start": 1405,
              "end": 1417
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IEnumerable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1421,
                  "end": 1432
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
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1435,
                            "end": 1438
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TKey",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1440,
                                "end": 1444
                              },
                              "typeArguments": null,
                              "start": 1440,
                              "end": 1444
                            },
                            "start": 1438,
                            "end": 1444
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1435,
                          "end": 1445
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1446,
                            "end": 1451
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TValue",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1453,
                                "end": 1459
                              },
                              "typeArguments": null,
                              "start": 1453,
                              "end": 1459
                            },
                            "start": 1451,
                            "end": 1459
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1446,
                          "end": 1459
                        }
                      ],
                      "start": 1433,
                      "end": 1461
                    }
                  ],
                  "start": 1432,
                  "end": 1462
                },
                "start": 1421,
                "end": 1462
              },
              "start": 1419,
              "end": 1462
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1405,
            "end": 1463
          }
        ],
        "start": 1399,
        "end": 1465
      },
      "declare": false,
      "start": 1363,
      "end": 1465
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1465
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
    "value": "IEnumerable",
    "start": 10,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "zip",
    "start": 32,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "TResult",
    "start": 36,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "second",
    "start": 45,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "IEnumerable",
    "start": 53,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 66,
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
    "value": "resultSelector",
    "start": 69,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 86,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "second",
    "start": 96,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 107,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 114,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 122,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "TResult",
    "start": 125,
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
    "value": ":",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "IEnumerable",
    "start": 135,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "TResult",
    "start": 147,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "zip",
    "start": 161,
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
    "value": "TResult",
    "start": 165,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "second",
    "start": 174,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "resultSelector",
    "start": 187,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 204,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "second",
    "start": 214,
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
    "value": "T",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 225,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 232,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 240,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "TResult",
    "start": 243,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 250,
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
    "value": "IEnumerable",
    "start": 253,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "TResult",
    "start": 265,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "zip",
    "start": 279,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "TResult",
    "start": 283,
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
    "value": "(",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 292,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "params",
    "start": 295,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 303,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "IEnumerable",
    "start": 311,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "TResult",
    "start": 323,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "merge",
    "start": 362,
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
    "value": "TResult",
    "start": 368,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 377,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "params",
    "start": 380,
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
    "value": "IEnumerable",
    "start": 388,
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
    "value": "T",
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
    "value": "[",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "IEnumerable",
    "start": 407,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "merge",
    "start": 427,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "TResult",
    "start": 433,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 440,
    "end": 441
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
    "value": "params",
    "start": 445,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 457,
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
    "value": ":",
    "start": 459,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "IEnumerable",
    "start": 461,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "concat",
    "start": 483,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 490,
    "end": 493
  },
  {
    "type": "Identifier",
    "value": "sequences",
    "start": 493,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "IEnumerable",
    "start": 504,
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
    "value": "T",
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
    "value": "[",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "IEnumerable",
    "start": 523,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 534,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 537,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "concat",
    "start": 543,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 550,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "sequences",
    "start": 553,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 567,
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
    "value": "IEnumerable",
    "start": 570,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 581,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "insert",
    "start": 591,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 598,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 605,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 611,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "second",
    "start": 613,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 619,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "IEnumerable",
    "start": 621,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "IEnumerable",
    "start": 638,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 649,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "sequenceEqual",
    "start": 659,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 672,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "second",
    "start": 673,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 679,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "IEnumerable",
    "start": 681,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 692,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 696,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 698,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 705,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "sequenceEqual",
    "start": 711,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 724,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "TCompare",
    "start": 725,
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
    "value": "(",
    "start": 734,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "second",
    "start": 735,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 741,
    "end": 742
  },
  {
    "type": "Identifier",
    "value": "IEnumerable",
    "start": 743,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 754,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 757,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "compareSelector",
    "start": 759,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 776,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "element",
    "start": 777,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 784,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 789,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "TCompare",
    "start": 792,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 801,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 803,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 810,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "sequenceEqual",
    "start": 816,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 829,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "second",
    "start": 830,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "[",
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
    "value": ")",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 842,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 844,
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
    "value": "sequenceEqual",
    "start": 857,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 870,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "TCompare",
    "start": 871,
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
    "value": "(",
    "start": 880,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "second",
    "start": 881,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 887,
    "end": 888
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 890,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 891,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 892,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "compareSelector",
    "start": 894,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 911,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "element",
    "start": 912,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 919,
    "end": 920
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 921,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 922,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 924,
    "end": 926
  },
  {
    "type": "Identifier",
    "value": "TCompare",
    "start": 927,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 935,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 936,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 938,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 945,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "toDictionary",
    "start": 959,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 971,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "TKey",
    "start": 972,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 977,
    "end": 978
  },
  {
    "type": "Identifier",
    "value": "keySelector",
    "start": 978,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 989,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 991,
    "end": 992
  },
  {
    "type": "Identifier",
    "value": "element",
    "start": 992,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1004,
    "end": 1006
  },
  {
    "type": "Identifier",
    "value": "TKey",
    "start": 1007,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Identifier",
    "value": "IDictionary",
    "start": 1014,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Identifier",
    "value": "TKey",
    "start": 1026,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1032,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Identifier",
    "value": "toDictionary",
    "start": 1042,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Identifier",
    "value": "TKey",
    "start": 1055,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 1061,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Identifier",
    "value": "keySelector",
    "start": 1069,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Identifier",
    "value": "element",
    "start": 1083,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1092,
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
    "value": "TKey",
    "start": 1098,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Identifier",
    "value": "elementSelector",
    "start": 1104,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Identifier",
    "value": "element",
    "start": 1122,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1134,
    "end": 1136
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 1137,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Identifier",
    "value": "IDictionary",
    "start": 1146,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Identifier",
    "value": "TKey",
    "start": 1158,
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
    "value": "TValue",
    "start": 1164,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Identifier",
    "value": "toDictionary",
    "start": 1177,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Identifier",
    "value": "TKey",
    "start": 1190,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 1196,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Identifier",
    "value": "TCompare",
    "start": 1204,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "keySelector",
    "start": 1214,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Identifier",
    "value": "element",
    "start": 1228,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1240,
    "end": 1242
  },
  {
    "type": "Identifier",
    "value": "TKey",
    "start": 1243,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Identifier",
    "value": "elementSelector",
    "start": 1249,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Identifier",
    "value": "element",
    "start": 1267,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1279,
    "end": 1281
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 1282,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Identifier",
    "value": "compareSelector",
    "start": 1290,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1308,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Identifier",
    "value": "TKey",
    "start": 1313,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1319,
    "end": 1321
  },
  {
    "type": "Identifier",
    "value": "TCompare",
    "start": 1322,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Identifier",
    "value": "IDictionary",
    "start": 1333,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Identifier",
    "value": "TKey",
    "start": 1345,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 1351,
    "end": 1357
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1363,
    "end": 1372
  },
  {
    "type": "Identifier",
    "value": "IDictionary",
    "start": 1373,
    "end": 1384
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Identifier",
    "value": "TKey",
    "start": 1385,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 1391,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Identifier",
    "value": "toEnumerable",
    "start": 1405,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "IEnumerable",
    "start": 1421,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1435,
    "end": 1438
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Identifier",
    "value": "TKey",
    "start": 1440,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1446,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Identifier",
    "value": "TValue",
    "start": 1453,
    "end": 1459
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1464,
    "end": 1465
  }
]
```
