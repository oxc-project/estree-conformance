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
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 60,
                "end": 68
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
                      "start": 69,
                      "end": 70
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 69,
                    "end": 70
                  }
                ],
                "start": 68,
                "end": 71
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
                      "start": 82,
                      "end": 86
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
                            "start": 87,
                            "end": 88
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 87,
                          "end": 88
                        }
                      ],
                      "start": 86,
                      "end": 89
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
                                      "start": 108,
                                      "end": 109
                                    },
                                    "typeArguments": null,
                                    "start": 108,
                                    "end": 109
                                  },
                                  "start": 106,
                                  "end": 109
                                },
                                "start": 101,
                                "end": 109
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
                                  "start": 114,
                                  "end": 122
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
                                        "start": 123,
                                        "end": 124
                                      },
                                      "typeArguments": null,
                                      "start": 123,
                                      "end": 124
                                    }
                                  ],
                                  "start": 122,
                                  "end": 125
                                },
                                "start": 114,
                                "end": 125
                              },
                              "start": 111,
                              "end": 125
                            },
                            "start": 100,
                            "end": 125
                          },
                          "start": 98,
                          "end": 125
                        },
                        "start": 90,
                        "end": 125
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
                                    "start": 143,
                                    "end": 146
                                  },
                                  "start": 141,
                                  "end": 146
                                },
                                "start": 136,
                                "end": 146
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
                                  "start": 151,
                                  "end": 159
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
                                        "start": 160,
                                        "end": 161
                                      },
                                      "typeArguments": null,
                                      "start": 160,
                                      "end": 161
                                    }
                                  ],
                                  "start": 159,
                                  "end": 162
                                },
                                "start": 151,
                                "end": 162
                              },
                              "start": 148,
                              "end": 162
                            },
                            "start": 135,
                            "end": 162
                          },
                          "start": 133,
                          "end": 162
                        },
                        "start": 127,
                        "end": 162
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
                                    "start": 186,
                                    "end": 189
                                  },
                                  "start": 184,
                                  "end": 189
                                },
                                "start": 176,
                                "end": 189
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 194,
                                "end": 198
                              },
                              "start": 191,
                              "end": 198
                            },
                            "start": 175,
                            "end": 198
                          },
                          "start": 173,
                          "end": 198
                        },
                        "start": 164,
                        "end": 198
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
                              "start": 202,
                              "end": 209
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Foundation",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 210,
                              "end": 220
                            },
                            "start": 202,
                            "end": 220
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IPromise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 221,
                            "end": 229
                          },
                          "start": 202,
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
                        "start": 202,
                        "end": 232
                      },
                      "start": 200,
                      "end": 232
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 82,
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
                      "start": 242,
                      "end": 246
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
                            "start": 247,
                            "end": 248
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 247,
                          "end": 248
                        }
                      ],
                      "start": 246,
                      "end": 249
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
                                      "start": 268,
                                      "end": 269
                                    },
                                    "typeArguments": null,
                                    "start": 268,
                                    "end": 269
                                  },
                                  "start": 266,
                                  "end": 269
                                },
                                "start": 261,
                                "end": 269
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
                                  "start": 274,
                                  "end": 282
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
                                        "start": 283,
                                        "end": 284
                                      },
                                      "typeArguments": null,
                                      "start": 283,
                                      "end": 284
                                    }
                                  ],
                                  "start": 282,
                                  "end": 285
                                },
                                "start": 274,
                                "end": 285
                              },
                              "start": 271,
                              "end": 285
                            },
                            "start": 260,
                            "end": 285
                          },
                          "start": 258,
                          "end": 285
                        },
                        "start": 250,
                        "end": 285
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
                                    "start": 303,
                                    "end": 306
                                  },
                                  "start": 301,
                                  "end": 306
                                },
                                "start": 296,
                                "end": 306
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
                                  "start": 311,
                                  "end": 312
                                },
                                "typeArguments": null,
                                "start": 311,
                                "end": 312
                              },
                              "start": 308,
                              "end": 312
                            },
                            "start": 295,
                            "end": 312
                          },
                          "start": 293,
                          "end": 312
                        },
                        "start": 287,
                        "end": 312
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
                                    "start": 336,
                                    "end": 339
                                  },
                                  "start": 334,
                                  "end": 339
                                },
                                "start": 326,
                                "end": 339
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 344,
                                "end": 348
                              },
                              "start": 341,
                              "end": 348
                            },
                            "start": 325,
                            "end": 348
                          },
                          "start": 323,
                          "end": 348
                        },
                        "start": 314,
                        "end": 348
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
                              "start": 352,
                              "end": 359
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Foundation",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 360,
                              "end": 370
                            },
                            "start": 352,
                            "end": 370
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IPromise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 371,
                            "end": 379
                          },
                          "start": 352,
                          "end": 379
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
                                "start": 380,
                                "end": 381
                              },
                              "typeArguments": null,
                              "start": 380,
                              "end": 381
                            }
                          ],
                          "start": 379,
                          "end": 382
                        },
                        "start": 352,
                        "end": 382
                      },
                      "start": 350,
                      "end": 382
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 242,
                    "end": 383
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "then",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 392,
                      "end": 396
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
                            "start": 397,
                            "end": 398
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 397,
                          "end": 398
                        }
                      ],
                      "start": 396,
                      "end": 399
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
                                "start": 411,
                                "end": 419
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
                                  "start": 424,
                                  "end": 425
                                },
                                "typeArguments": null,
                                "start": 424,
                                "end": 425
                              },
                              "start": 421,
                              "end": 425
                            },
                            "start": 410,
                            "end": 425
                          },
                          "start": 408,
                          "end": 425
                        },
                        "start": 400,
                        "end": 425
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
                                    "start": 443,
                                    "end": 446
                                  },
                                  "start": 441,
                                  "end": 446
                                },
                                "start": 436,
                                "end": 446
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
                                  "start": 451,
                                  "end": 459
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
                                        "start": 460,
                                        "end": 461
                                      },
                                      "typeArguments": null,
                                      "start": 460,
                                      "end": 461
                                    }
                                  ],
                                  "start": 459,
                                  "end": 462
                                },
                                "start": 451,
                                "end": 462
                              },
                              "start": 448,
                              "end": 462
                            },
                            "start": 435,
                            "end": 462
                          },
                          "start": 433,
                          "end": 462
                        },
                        "start": 427,
                        "end": 462
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
                                    "start": 486,
                                    "end": 489
                                  },
                                  "start": 484,
                                  "end": 489
                                },
                                "start": 476,
                                "end": 489
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 494,
                                "end": 498
                              },
                              "start": 491,
                              "end": 498
                            },
                            "start": 475,
                            "end": 498
                          },
                          "start": 473,
                          "end": 498
                        },
                        "start": 464,
                        "end": 498
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
                              "start": 502,
                              "end": 509
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Foundation",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 510,
                              "end": 520
                            },
                            "start": 502,
                            "end": 520
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IPromise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 521,
                            "end": 529
                          },
                          "start": 502,
                          "end": 529
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
                                "start": 530,
                                "end": 531
                              },
                              "typeArguments": null,
                              "start": 530,
                              "end": 531
                            }
                          ],
                          "start": 529,
                          "end": 532
                        },
                        "start": 502,
                        "end": 532
                      },
                      "start": 500,
                      "end": 532
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 392,
                    "end": 533
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "then",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 542,
                      "end": 546
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
                            "start": 547,
                            "end": 548
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 547,
                          "end": 548
                        }
                      ],
                      "start": 546,
                      "end": 549
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
                                      "start": 568,
                                      "end": 569
                                    },
                                    "typeArguments": null,
                                    "start": 568,
                                    "end": 569
                                  },
                                  "start": 566,
                                  "end": 569
                                },
                                "start": 561,
                                "end": 569
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
                                  "start": 574,
                                  "end": 575
                                },
                                "typeArguments": null,
                                "start": 574,
                                "end": 575
                              },
                              "start": 571,
                              "end": 575
                            },
                            "start": 560,
                            "end": 575
                          },
                          "start": 558,
                          "end": 575
                        },
                        "start": 550,
                        "end": 575
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
                                    "start": 593,
                                    "end": 596
                                  },
                                  "start": 591,
                                  "end": 596
                                },
                                "start": 586,
                                "end": 596
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
                                  "start": 601,
                                  "end": 602
                                },
                                "typeArguments": null,
                                "start": 601,
                                "end": 602
                              },
                              "start": 598,
                              "end": 602
                            },
                            "start": 585,
                            "end": 602
                          },
                          "start": 583,
                          "end": 602
                        },
                        "start": 577,
                        "end": 602
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
                                    "start": 626,
                                    "end": 629
                                  },
                                  "start": 624,
                                  "end": 629
                                },
                                "start": 616,
                                "end": 629
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 634,
                                "end": 638
                              },
                              "start": 631,
                              "end": 638
                            },
                            "start": 615,
                            "end": 638
                          },
                          "start": 613,
                          "end": 638
                        },
                        "start": 604,
                        "end": 638
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
                              "start": 642,
                              "end": 649
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Foundation",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 650,
                              "end": 660
                            },
                            "start": 642,
                            "end": 660
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IPromise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 661,
                            "end": 669
                          },
                          "start": 642,
                          "end": 669
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
                                "start": 670,
                                "end": 671
                              },
                              "typeArguments": null,
                              "start": 670,
                              "end": 671
                            }
                          ],
                          "start": 669,
                          "end": 672
                        },
                        "start": 642,
                        "end": 672
                      },
                      "start": 640,
                      "end": 672
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 542,
                    "end": 673
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "done",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 682,
                      "end": 686
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
                        }
                      ],
                      "start": 688,
                      "end": 691
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
                                      "start": 710,
                                      "end": 711
                                    },
                                    "typeArguments": null,
                                    "start": 710,
                                    "end": 711
                                  },
                                  "start": 708,
                                  "end": 711
                                },
                                "start": 703,
                                "end": 711
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 716,
                                "end": 719
                              },
                              "start": 713,
                              "end": 719
                            },
                            "start": 702,
                            "end": 719
                          },
                          "start": 700,
                          "end": 719
                        },
                        "start": 692,
                        "end": 719
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
                                    "start": 737,
                                    "end": 740
                                  },
                                  "start": 735,
                                  "end": 740
                                },
                                "start": 730,
                                "end": 740
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 745,
                                "end": 748
                              },
                              "start": 742,
                              "end": 748
                            },
                            "start": 729,
                            "end": 748
                          },
                          "start": 727,
                          "end": 748
                        },
                        "start": 721,
                        "end": 748
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
                                    "start": 772,
                                    "end": 775
                                  },
                                  "start": 770,
                                  "end": 775
                                },
                                "start": 762,
                                "end": 775
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 780,
                                "end": 784
                              },
                              "start": 777,
                              "end": 784
                            },
                            "start": 761,
                            "end": 784
                          },
                          "start": 759,
                          "end": 784
                        },
                        "start": 750,
                        "end": 784
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 788,
                        "end": 792
                      },
                      "start": 786,
                      "end": 792
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 682,
                    "end": 793
                  }
                ],
                "start": 72,
                "end": 799
              },
              "declare": false,
              "start": 50,
              "end": 799
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 43,
            "end": 799
          }
        ],
        "start": 37,
        "end": 801
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 801
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
            "name": "p",
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
                      "start": 811,
                      "end": 818
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foundation",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 819,
                      "end": 829
                    },
                    "start": 811,
                    "end": 829
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IPromise",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 830,
                    "end": 838
                  },
                  "start": 811,
                  "end": 838
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 839,
                      "end": 845
                    }
                  ],
                  "start": 838,
                  "end": 846
                },
                "start": 811,
                "end": 846
              },
              "start": 809,
              "end": 846
            },
            "start": 808,
            "end": 846
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 849,
            "end": 853
          },
          "definite": false,
          "start": 808,
          "end": 853
        }
      ],
      "declare": false,
      "start": 804,
      "end": 854
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 857,
            "end": 858
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null,
            "start": 859,
            "end": 863
          },
          "optional": false,
          "computed": false,
          "start": 857,
          "end": 863
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 874,
                "end": 875
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 877,
              "end": 880
            },
            "expression": false,
            "start": 864,
            "end": 880
          }
        ],
        "optional": false,
        "start": 857,
        "end": 882
      },
      "directive": null,
      "start": 857,
      "end": 883
    },
    {
      "type": "ExpressionStatement",
      "expression": {
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
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 904,
                "end": 905
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 906,
                "end": 910
              },
              "optional": false,
              "computed": false,
              "start": 904,
              "end": 910
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 921,
                    "end": 922
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": "hello",
                        "raw": "\"hello\"",
                        "start": 933,
                        "end": 940
                      },
                      "start": 926,
                      "end": 941
                    }
                  ],
                  "start": 924,
                  "end": 943
                },
                "expression": false,
                "start": 911,
                "end": 943
              }
            ],
            "optional": false,
            "start": 904,
            "end": 945
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null,
            "start": 946,
            "end": 950
          },
          "optional": false,
          "computed": false,
          "start": 904,
          "end": 950
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 961,
                "end": 962
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 973,
                    "end": 974
                  },
                  "start": 966,
                  "end": 974
                }
              ],
              "start": 964,
              "end": 976
            },
            "expression": false,
            "start": 951,
            "end": 976
          }
        ],
        "optional": false,
        "start": 904,
        "end": 978
      },
      "directive": null,
      "start": 904,
      "end": 979
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1001
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
    "value": "export",
    "start": 43,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 50,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 60,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 82,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 90,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 101,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 111,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 114,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 127,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "type": "Punctuator",
    "value": "(",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 136,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 143,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 148,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 151,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 164,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 176,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 186,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 191,
    "end": 193
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 194,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "Windows",
    "start": 202,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "Foundation",
    "start": 210,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 221,
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
    "start": 242,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 250,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 261,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 271,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 274,
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
    "value": "U",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 287,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 296,
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
    "value": ")",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 308,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "U",
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
    "type": "Identifier",
    "value": "progress",
    "start": 314,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 326,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 336,
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
    "value": "=>",
    "start": 341,
    "end": 343
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 344,
    "end": 348
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
    "value": "Windows",
    "start": 352,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "Foundation",
    "start": 360,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 371,
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
    "value": "U",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 392,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 400,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 411,
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
    "value": ")",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 421,
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
    "value": ",",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 427,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 436,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 443,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 448,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 451,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 459,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 464,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 476,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 486,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 491,
    "end": 493
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 494,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 500,
    "end": 501
  },
  {
    "type": "Identifier",
    "value": "Windows",
    "start": 502,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "Foundation",
    "start": 510,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 521,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 542,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 547,
    "end": 548
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
    "value": "success",
    "start": 550,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 561,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 571,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 575,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 577,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "type": "Punctuator",
    "value": "(",
    "start": 585,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 586,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 593,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 598,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 602,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 604,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 616,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 624,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 626,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 631,
    "end": 633
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 634,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 640,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "Windows",
    "start": 642,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 649,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "Foundation",
    "start": 650,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 660,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 661,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 672,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 682,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 686,
    "end": 687
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
    "value": "(",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "success",
    "start": 692,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 702,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 703,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 708,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 713,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 716,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 719,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 721,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 729,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 730,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 737,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 742,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 745,
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
    "value": "progress",
    "start": 750,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 761,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "progress",
    "start": 762,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 770,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 772,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 777,
    "end": 779
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 780,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 786,
    "end": 787
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 788,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 792,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 800,
    "end": 801
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 804,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 809,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "Windows",
    "start": 811,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 818,
    "end": 819
  },
  {
    "type": "Identifier",
    "value": "Foundation",
    "start": 819,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 829,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "IPromise",
    "start": 830,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 838,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 839,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 847,
    "end": 848
  },
  {
    "type": "Null",
    "value": "null",
    "start": 849,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 853,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 858,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 859,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 863,
    "end": 864
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 864,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 873,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 877,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 882,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 904,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 905,
    "end": 906
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 906,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 910,
    "end": 911
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 911,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 920,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "{",
    "start": 924,
    "end": 925
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 926,
    "end": 932
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 933,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 942,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 945,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 946,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 950,
    "end": 951
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 951,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 960,
    "end": 961
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 961,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 964,
    "end": 965
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 966,
    "end": 972
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 978,
    "end": 979
  }
]
```
