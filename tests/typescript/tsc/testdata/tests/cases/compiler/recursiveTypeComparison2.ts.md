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
        "name": "Bacon",
        "optional": false,
        "typeAnnotation": null,
        "start": 75,
        "end": 80
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Event",
              "optional": false,
              "typeAnnotation": null,
              "start": 97,
              "end": 102
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
                    "start": 103,
                    "end": 104
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 103,
                  "end": 104
                }
              ],
              "start": 102,
              "end": 105
            },
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 106,
              "end": 113
            },
            "declare": false,
            "start": 87,
            "end": 113
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Error",
              "optional": false,
              "typeAnnotation": null,
              "start": 128,
              "end": 133
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
                    "start": 134,
                    "end": 135
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 134,
                  "end": 135
                }
              ],
              "start": 133,
              "end": 136
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Event",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 145,
                  "end": 150
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
                        "start": 151,
                        "end": 152
                      },
                      "typeArguments": null,
                      "start": 151,
                      "end": 152
                    }
                  ],
                  "start": 150,
                  "end": 153
                },
                "start": 145,
                "end": 153
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 154,
              "end": 161
            },
            "declare": false,
            "start": 118,
            "end": 161
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Observable",
              "optional": false,
              "typeAnnotation": null,
              "start": 176,
              "end": 186
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
                    "start": 187,
                    "end": 188
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 187,
                  "end": 188
                }
              ],
              "start": 186,
              "end": 189
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
                    "start": 200,
                    "end": 203
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
                          "start": 204,
                          "end": 205
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 204,
                        "end": 205
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 207,
                          "end": 208
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 207,
                        "end": 208
                      }
                    ],
                    "start": 203,
                    "end": 209
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "other",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "EventStream",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 217,
                            "end": 228
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
                                  "start": 229,
                                  "end": 230
                                },
                                "typeArguments": null,
                                "start": 229,
                                "end": 230
                              }
                            ],
                            "start": 228,
                            "end": 231
                          },
                          "start": 217,
                          "end": 231
                        },
                        "start": 215,
                        "end": 231
                      },
                      "start": 210,
                      "end": 231
                    },
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
                                    "start": 240,
                                    "end": 241
                                  },
                                  "typeArguments": null,
                                  "start": 240,
                                  "end": 241
                                },
                                "start": 238,
                                "end": 241
                              },
                              "start": 237,
                              "end": 241
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
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
                                    "start": 246,
                                    "end": 247
                                  },
                                  "typeArguments": null,
                                  "start": 246,
                                  "end": 247
                                },
                                "start": 244,
                                "end": 247
                              },
                              "start": 243,
                              "end": 247
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "V",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 252,
                                "end": 253
                              },
                              "typeArguments": null,
                              "start": 252,
                              "end": 253
                            },
                            "start": 249,
                            "end": 253
                          },
                          "start": 236,
                          "end": 253
                        },
                        "start": 234,
                        "end": 253
                      },
                      "start": 233,
                      "end": 253
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "EventStream",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 256,
                        "end": 267
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "V",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 268,
                              "end": 269
                            },
                            "typeArguments": null,
                            "start": 268,
                            "end": 269
                          }
                        ],
                        "start": 267,
                        "end": 270
                      },
                      "start": 256,
                      "end": 270
                    },
                    "start": 254,
                    "end": 270
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 200,
                  "end": 271
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "slidingWindow",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 280,
                    "end": 293
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "max",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 299,
                          "end": 305
                        },
                        "start": 297,
                        "end": 305
                      },
                      "start": 294,
                      "end": 305
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "min",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 313,
                          "end": 319
                        },
                        "start": 311,
                        "end": 319
                      },
                      "start": 307,
                      "end": 319
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Property",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 322,
                        "end": 330
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 331,
                                "end": 332
                              },
                              "typeArguments": null,
                              "start": 331,
                              "end": 332
                            },
                            "start": 331,
                            "end": 334
                          }
                        ],
                        "start": 330,
                        "end": 335
                      },
                      "start": 322,
                      "end": 335
                    },
                    "start": 320,
                    "end": 335
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 280,
                  "end": 336
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 345,
                    "end": 348
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
                        "name": "Observable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 352,
                        "end": 362
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
                              "start": 363,
                              "end": 364
                            },
                            "typeArguments": null,
                            "start": 363,
                            "end": 364
                          }
                        ],
                        "start": 362,
                        "end": 365
                      },
                      "start": 352,
                      "end": 365
                    },
                    "start": 350,
                    "end": 365
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 345,
                  "end": 366
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "combine",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 375,
                    "end": 382
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
                          "start": 383,
                          "end": 384
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 383,
                        "end": 384
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 386,
                          "end": 387
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 386,
                        "end": 387
                      }
                    ],
                    "start": 382,
                    "end": 388
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "other",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Observable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 396,
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
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 407,
                                  "end": 408
                                },
                                "typeArguments": null,
                                "start": 407,
                                "end": 408
                              }
                            ],
                            "start": 406,
                            "end": 409
                          },
                          "start": 396,
                          "end": 409
                        },
                        "start": 394,
                        "end": 409
                      },
                      "start": 389,
                      "end": 409
                    },
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
                                    "start": 418,
                                    "end": 419
                                  },
                                  "typeArguments": null,
                                  "start": 418,
                                  "end": 419
                                },
                                "start": 416,
                                "end": 419
                              },
                              "start": 415,
                              "end": 419
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
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
                                    "start": 424,
                                    "end": 425
                                  },
                                  "typeArguments": null,
                                  "start": 424,
                                  "end": 425
                                },
                                "start": 422,
                                "end": 425
                              },
                              "start": 421,
                              "end": 425
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "V",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 430,
                                "end": 431
                              },
                              "typeArguments": null,
                              "start": 430,
                              "end": 431
                            },
                            "start": 427,
                            "end": 431
                          },
                          "start": 414,
                          "end": 431
                        },
                        "start": 412,
                        "end": 431
                      },
                      "start": 411,
                      "end": 431
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Property",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 434,
                        "end": 442
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "V",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 443,
                              "end": 444
                            },
                            "typeArguments": null,
                            "start": 443,
                            "end": 444
                          }
                        ],
                        "start": 442,
                        "end": 445
                      },
                      "start": 434,
                      "end": 445
                    },
                    "start": 432,
                    "end": 445
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 375,
                  "end": 446
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "withStateMachine",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 455,
                    "end": 471
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
                          "start": 472,
                          "end": 473
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 472,
                        "end": 473
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 475,
                          "end": 476
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 475,
                        "end": 476
                      }
                    ],
                    "start": 471,
                    "end": 477
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "initState",
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
                            "start": 489,
                            "end": 490
                          },
                          "typeArguments": null,
                          "start": 489,
                          "end": 490
                        },
                        "start": 487,
                        "end": 490
                      },
                      "start": 478,
                      "end": 490
                    },
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
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "state",
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
                                    "start": 503,
                                    "end": 504
                                  },
                                  "typeArguments": null,
                                  "start": 503,
                                  "end": 504
                                },
                                "start": 501,
                                "end": 504
                              },
                              "start": 496,
                              "end": 504
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "event",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Event",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 513,
                                    "end": 518
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
                                          "start": 519,
                                          "end": 520
                                        },
                                        "typeArguments": null,
                                        "start": 519,
                                        "end": 520
                                      }
                                    ],
                                    "start": 518,
                                    "end": 521
                                  },
                                  "start": 513,
                                  "end": 521
                                },
                                "start": 511,
                                "end": 521
                              },
                              "start": 506,
                              "end": 521
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "StateValue",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 526,
                                "end": 536
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
                                      "start": 537,
                                      "end": 538
                                    },
                                    "typeArguments": null,
                                    "start": 537,
                                    "end": 538
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "V",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 540,
                                      "end": 541
                                    },
                                    "typeArguments": null,
                                    "start": 540,
                                    "end": 541
                                  }
                                ],
                                "start": 536,
                                "end": 542
                              },
                              "start": 526,
                              "end": 542
                            },
                            "start": 523,
                            "end": 542
                          },
                          "start": 495,
                          "end": 542
                        },
                        "start": 493,
                        "end": 542
                      },
                      "start": 492,
                      "end": 542
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "EventStream",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 545,
                        "end": 556
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "V",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 557,
                              "end": 558
                            },
                            "typeArguments": null,
                            "start": 557,
                            "end": 558
                          }
                        ],
                        "start": 556,
                        "end": 559
                      },
                      "start": 545,
                      "end": 559
                    },
                    "start": 543,
                    "end": 559
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 455,
                  "end": 560
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "decode",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 569,
                    "end": 575
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "mapping",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Object",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 585,
                            "end": 591
                          },
                          "typeArguments": null,
                          "start": 585,
                          "end": 591
                        },
                        "start": 583,
                        "end": 591
                      },
                      "start": 576,
                      "end": 591
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Property",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 594,
                        "end": 602
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSAnyKeyword",
                            "start": 603,
                            "end": 606
                          }
                        ],
                        "start": 602,
                        "end": 607
                      },
                      "start": 594,
                      "end": 607
                    },
                    "start": 592,
                    "end": 607
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 569,
                  "end": 608
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "awaiting",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 617,
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
                      "name": "other",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Observable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 636,
                            "end": 646
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
                                  "start": 647,
                                  "end": 648
                                },
                                "typeArguments": null,
                                "start": 647,
                                "end": 648
                              }
                            ],
                            "start": 646,
                            "end": 649
                          },
                          "start": 636,
                          "end": 649
                        },
                        "start": 634,
                        "end": 649
                      },
                      "start": 629,
                      "end": 649
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Property",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 652,
                        "end": 660
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSBooleanKeyword",
                            "start": 661,
                            "end": 668
                          }
                        ],
                        "start": 660,
                        "end": 669
                      },
                      "start": 652,
                      "end": 669
                    },
                    "start": 650,
                    "end": 669
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 617,
                  "end": 670
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "endOnError",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 679,
                    "end": 689
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
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
                                    "start": 702,
                                    "end": 703
                                  },
                                  "typeArguments": null,
                                  "start": 702,
                                  "end": 703
                                },
                                "start": 700,
                                "end": 703
                              },
                              "start": 695,
                              "end": 703
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 708,
                              "end": 715
                            },
                            "start": 705,
                            "end": 715
                          },
                          "start": 694,
                          "end": 715
                        },
                        "start": 692,
                        "end": 715
                      },
                      "start": 690,
                      "end": 715
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Observable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 718,
                        "end": 728
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
                              "start": 729,
                              "end": 730
                            },
                            "typeArguments": null,
                            "start": 729,
                            "end": 730
                          }
                        ],
                        "start": 728,
                        "end": 731
                      },
                      "start": 718,
                      "end": 731
                    },
                    "start": 716,
                    "end": 731
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 679,
                  "end": 732
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "withHandler",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 741,
                    "end": 752
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
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
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "event",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Event",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 764,
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
                                  "start": 764,
                                  "end": 772
                                },
                                "start": 762,
                                "end": 772
                              },
                              "start": 757,
                              "end": 772
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 777,
                              "end": 780
                            },
                            "start": 774,
                            "end": 780
                          },
                          "start": 756,
                          "end": 780
                        },
                        "start": 754,
                        "end": 780
                      },
                      "start": 753,
                      "end": 780
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Observable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 783,
                        "end": 793
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
                              "start": 794,
                              "end": 795
                            },
                            "typeArguments": null,
                            "start": 794,
                            "end": 795
                          }
                        ],
                        "start": 793,
                        "end": 796
                      },
                      "start": 783,
                      "end": 796
                    },
                    "start": 781,
                    "end": 796
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 741,
                  "end": 797
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 806,
                    "end": 810
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 817,
                          "end": 823
                        },
                        "start": 815,
                        "end": 823
                      },
                      "start": 811,
                      "end": 823
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Observable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 826,
                        "end": 836
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
                              "start": 837,
                              "end": 838
                            },
                            "typeArguments": null,
                            "start": 837,
                            "end": 838
                          }
                        ],
                        "start": 836,
                        "end": 839
                      },
                      "start": 826,
                      "end": 839
                    },
                    "start": 824,
                    "end": 839
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 806,
                  "end": 840
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "withDescription",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 849,
                    "end": 864
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
                        "name": "args",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 868,
                        "end": 872
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSAnyKeyword",
                            "start": 874,
                            "end": 877
                          },
                          "start": 874,
                          "end": 879
                        },
                        "start": 872,
                        "end": 879
                      },
                      "value": null,
                      "start": 865,
                      "end": 879
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Observable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 882,
                        "end": 892
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
                              "start": 893,
                              "end": 894
                            },
                            "typeArguments": null,
                            "start": 893,
                            "end": 894
                          }
                        ],
                        "start": 892,
                        "end": 895
                      },
                      "start": 882,
                      "end": 895
                    },
                    "start": 880,
                    "end": 895
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 849,
                  "end": 896
                }
              ],
              "start": 190,
              "end": 902
            },
            "declare": false,
            "start": 166,
            "end": 902
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Property",
              "optional": false,
              "typeAnnotation": null,
              "start": 917,
              "end": 925
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
                    "start": 926,
                    "end": 927
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 926,
                  "end": 927
                }
              ],
              "start": 925,
              "end": 928
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Observable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 937,
                  "end": 947
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
                        "start": 948,
                        "end": 949
                      },
                      "typeArguments": null,
                      "start": 948,
                      "end": 949
                    }
                  ],
                  "start": 947,
                  "end": 950
                },
                "start": 937,
                "end": 950
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 951,
              "end": 958
            },
            "declare": false,
            "start": 907,
            "end": 958
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "EventStream",
              "optional": false,
              "typeAnnotation": null,
              "start": 973,
              "end": 984
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
                    "start": 985,
                    "end": 986
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 985,
                  "end": 986
                }
              ],
              "start": 984,
              "end": 987
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Observable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 996,
                  "end": 1006
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
                        "start": 1007,
                        "end": 1008
                      },
                      "typeArguments": null,
                      "start": 1007,
                      "end": 1008
                    }
                  ],
                  "start": 1006,
                  "end": 1009
                },
                "start": 996,
                "end": 1009
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 1010,
              "end": 1017
            },
            "declare": false,
            "start": 963,
            "end": 1017
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bus",
              "optional": false,
              "typeAnnotation": null,
              "start": 1032,
              "end": 1035
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
                    "start": 1036,
                    "end": 1037
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1036,
                  "end": 1037
                }
              ],
              "start": 1035,
              "end": 1038
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "EventStream",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1047,
                  "end": 1058
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
                        "start": 1059,
                        "end": 1060
                      },
                      "typeArguments": null,
                      "start": 1059,
                      "end": 1060
                    }
                  ],
                  "start": 1058,
                  "end": 1061
                },
                "start": 1047,
                "end": 1061
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 1062,
              "end": 1069
            },
            "declare": false,
            "start": 1022,
            "end": 1069
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
                  "name": "Bus",
                  "optional": false,
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
                              "start": 1088,
                              "end": 1089
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1088,
                            "end": 1089
                          }
                        ],
                        "start": 1087,
                        "end": 1090
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Bus",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1096,
                            "end": 1099
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
                                  "start": 1100,
                                  "end": 1101
                                },
                                "typeArguments": null,
                                "start": 1100,
                                "end": 1101
                              }
                            ],
                            "start": 1099,
                            "end": 1102
                          },
                          "start": 1096,
                          "end": 1102
                        },
                        "start": 1093,
                        "end": 1102
                      },
                      "start": 1083,
                      "end": 1102
                    },
                    "start": 1081,
                    "end": 1102
                  },
                  "start": 1078,
                  "end": 1102
                },
                "init": null,
                "definite": false,
                "start": 1078,
                "end": 1102
              }
            ],
            "declare": false,
            "start": 1074,
            "end": 1103
          }
        ],
        "start": 81,
        "end": 1105
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 57,
      "end": 1105
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
            "name": "stuck",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Bacon",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1118,
                    "end": 1123
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Bus",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1124,
                    "end": 1127
                  },
                  "start": 1118,
                  "end": 1127
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1128,
                      "end": 1134
                    }
                  ],
                  "start": 1127,
                  "end": 1135
                },
                "start": 1118,
                "end": 1135
              },
              "start": 1116,
              "end": 1135
            },
            "start": 1111,
            "end": 1135
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bacon",
                "optional": false,
                "typeAnnotation": null,
                "start": 1142,
                "end": 1147
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bus",
                "optional": false,
                "typeAnnotation": null,
                "start": 1148,
                "end": 1151
              },
              "optional": false,
              "computed": false,
              "start": 1142,
              "end": 1151
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1138,
            "end": 1153
          },
          "definite": false,
          "start": 1111,
          "end": 1153
        }
      ],
      "declare": false,
      "start": 1107,
      "end": 1154
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 1154
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 57,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 65,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "Bacon",
    "start": 75,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 81,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 87,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "Event",
    "start": 97,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 112,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 118,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 128,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 135,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 137,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "Event",
    "start": 145,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 160,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 166,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "Observable",
    "start": 176,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "zip",
    "start": 200,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 210,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "EventStream",
    "start": 217,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 249,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "EventStream",
    "start": 256,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "slidingWindow",
    "start": 280,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "max",
    "start": 294,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 299,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "min",
    "start": 307,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 311,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 313,
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
    "type": "Identifier",
    "value": "Property",
    "start": 322,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Punctuator",
    "value": ";",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 345,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "Observable",
    "start": 352,
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
    "value": "T",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "combine",
    "start": 375,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "U",
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
    "value": "V",
    "start": 386,
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
    "value": "(",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 389,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "Observable",
    "start": 396,
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
    "value": "U",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 427,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "Property",
    "start": 434,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "withStateMachine",
    "start": 455,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "initState",
    "start": 478,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 496,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "event",
    "start": 506,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "Event",
    "start": 513,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 523,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "StateValue",
    "start": 526,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 536,
    "end": 537
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
    "value": "V",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "EventStream",
    "start": 545,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 556,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "decode",
    "start": 569,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 575,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "mapping",
    "start": 576,
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
    "value": "Object",
    "start": 585,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "Property",
    "start": 594,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 602,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 603,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 607,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "awaiting",
    "start": 617,
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
    "value": "other",
    "start": 629,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 634,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "Observable",
    "start": 636,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "U",
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
    "value": ")",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "Property",
    "start": 652,
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
    "value": "boolean",
    "start": 661,
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
    "value": ";",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "endOnError",
    "start": 679,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 689,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 694,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 695,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 705,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "boolean",
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
    "type": "Identifier",
    "value": "Observable",
    "start": 718,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 731,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "withHandler",
    "start": 741,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 756,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "event",
    "start": 757,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 762,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "Event",
    "start": 764,
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
    "value": ")",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 774,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 777,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 781,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "Observable",
    "start": 783,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 793,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 806,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 810,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 811,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 815,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 817,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 823,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 824,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "Observable",
    "start": 826,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 837,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 839,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "withDescription",
    "start": 849,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 865,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 868,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 872,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 874,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 877,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 880,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "Observable",
    "start": 882,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 892,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 894,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 895,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 901,
    "end": 902
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 907,
    "end": 916
  },
  {
    "type": "Identifier",
    "value": "Property",
    "start": 917,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 925,
    "end": 926
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 927,
    "end": 928
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 929,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "Observable",
    "start": 937,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 947,
    "end": 948
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 949,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 951,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 957,
    "end": 958
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 963,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "EventStream",
    "start": 973,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 984,
    "end": 985
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 985,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 986,
    "end": 987
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 988,
    "end": 995
  },
  {
    "type": "Identifier",
    "value": "Observable",
    "start": 996,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1022,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "Bus",
    "start": 1032,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1039,
    "end": 1046
  },
  {
    "type": "Identifier",
    "value": "EventStream",
    "start": 1047,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1074,
    "end": 1077
  },
  {
    "type": "Identifier",
    "value": "Bus",
    "start": 1078,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1083,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1093,
    "end": 1095
  },
  {
    "type": "Identifier",
    "value": "Bus",
    "start": 1096,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1099,
    "end": 1100
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1107,
    "end": 1110
  },
  {
    "type": "Identifier",
    "value": "stuck",
    "start": 1111,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Identifier",
    "value": "Bacon",
    "start": 1118,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Identifier",
    "value": "Bus",
    "start": 1124,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1128,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1138,
    "end": 1141
  },
  {
    "type": "Identifier",
    "value": "Bacon",
    "start": 1142,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Identifier",
    "value": "Bus",
    "start": 1148,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1153,
    "end": 1154
  }
]
```
